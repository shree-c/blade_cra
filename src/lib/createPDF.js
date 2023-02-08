const styleStr = `
<style>
@font-face {
  font-family: 'cm';
  src: url('../assets/computer-modern/cmunrm.ttf');
}
body {
  font-family: 'cm', 'serif';
}
</style>
`
export function createNewWindowAndPrint(htmlStr) {
  const win = window.open()
  win.document.body.innerHTML = styleStr + htmlStr
  win.print()
}
