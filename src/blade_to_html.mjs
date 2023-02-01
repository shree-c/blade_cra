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
  'sfs': 'font-size',
  'sm': 'margin',
  'sml': 'margin-left',
  'smt': 'margin-top',
  'smr': 'margin-right',
  'smb': 'margin-bottom',
  'sp': 'padding',
  'spl': 'padding-left',
  'spt': 'padding-top',
  'spr': 'padding-right',
  'spb': 'padding-bottom',
  'sta': 'text-align'
}

function key_value_style(key, value) {
  return `${key}: ${value}pt;`
}

function get_styles(styles) {
  let str = `style="`
  styles.forEach(e => {
    str += key_value_style(tag_to_style_map[e.name], e.value)
  })
  str += `"`
  return str
}

export function to_html(ast_content_array, style = []) {
  let str = ''
  ast_content_array.forEach(e => {
    if (typeof e === 'string') {
      if (style.length === 0)
        str += e
      else {
        str += `<div ${get_styles(style)} > ${e} </div>`
      }
    } else if (e.tag.name.startsWith('s')) {
      style.push(e.tag)
      str += to_html(e.content, style)
      style.pop()
    } else {
      str += `<${e.tag.name} ${get_styles(style)}>`
      style = []
      str += to_html(e.content, style)
      str += `</${e.tag.name}>`
    }
  })
  return str
}
