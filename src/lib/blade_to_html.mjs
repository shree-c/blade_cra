//@ts-check
const stack = []

export function convert_ast_to_simpler_form(ast, simpler_printable_instruction) {
  ast.forEach((e) => {
    if (typeof e === 'string') {
      simpler_printable_instruction.push({
        text: e,
        styles: [...stack]
      })
    } else {
      stack.push(e.tag)
      convert_ast_to_simpler_form(e.content, simpler_printable_instruction)
      stack.pop()
    }
  })
}

const tag_to_style_map = {
  'fs': 'font-size',
  'm': 'margin',
  'ml': 'margin-left',
  'mt': 'margin-top',
  'mr': 'margin-right',
  'mb': 'margin-bottom',
  'p': 'padding',
  'pl': 'padding-left',
  'pt': 'padding-top',
  'pr': 'padding-right',
  'pb': 'padding-bottom',
  'ta': 'text-align',
  'color': 'color',
  'backgroundColor': 'background-color',
  'textAlign': 'text-align'
}

const value_prefixes = {
  'color': '#',
  'background-color': '#'
}

function key_value_style(key, value) {
  return `${key}: ${value};`
}

function make_value(key, value) {
  return ((value_prefixes[key] || '') + value)
}

function get_styles(styles) {
  let str = `style="`
  styles.forEach(e => {
    str += key_value_style(tag_to_style_map[e.name] || e.name, make_value(e.name, e.value))
  })
  str += `"`
  return str
}

export function to_html(ast_content_array, style = []) {
  let str = ''
  ast_content_array.forEach(e => {
    if (typeof e === 'string') {
      str += e
    } else if (e.tag.style) {
      style.push(e.tag)
      str += to_html(e.content, style)
      style.pop()
    } else {
      str += `<${e.tag.name} ${get_styles(style)}>`
      str += to_html(e.content, [])
      str += `</${e.tag.name}>`
    }
  })
  return str
}

