const create_html_element = (tag_name, text) => {
  return `<${tag_name}>${text}</${tag_name}>`
}
//need to decide when the text is considered as text node and when an independent element
export function to_html(ast) {
  let str = ''
  if (typeof (ast) !== 'object')
    throw new Error('argument should be an object')
  ast.forEach((e) => {
    if (typeof (e) === 'string') {
      str += create_html_element('p', e)
    } else {
      str += create_html_element(e.tag, to_html(e.body))
    }
  })
  return str
}
