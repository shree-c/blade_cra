import { useState, useEffect, useRef } from 'react'
import parser from '../lib/parser.js'
import { to_html } from '../lib/blade_to_html.mjs'
import Editor from '@monaco-editor/react'
import highlighter from '../lib/highlighter.js'
import '../css/try.css'
import Pages from './Pages.jsx'
import Options from './Options.jsx'
import { createNewWindowAndPrint } from '../lib/createPDF.js'

export default function Mirror() {
  const [htmlString, setHtmlString] = useState('')
  const [blade_string, setBlade_string] = useState(
    `-stextAlign#center-
    -p-Shridhar Wajapeya-/-
    -hr- -/-
-/-
-scolor#0088ff-
-smargin#10px-
    -h2-Skills-/-
-/-

-ul-
    -li- JavaScript and web development-/-
    -li- Nodejs-/-
    -li- SQL and MongoDB -/-
    -li- Networking and system administration -/-
    -li- Linux and C -/-
-/-
-smargin#10px-
    -h2-Work Experience-/-
-/-
-ul-
    -li- have built many projects-/-
    -li- Internship at Apropos limited. Have worked on remote data collection and visualization.-/-
-/-
-/-
  `)
  const editorRef = useRef(null)

  useEffect(() => {
    blade_change(blade_string)
  }, [blade_string])

  function blade_change(e) {
    try {
      const ast = parser.parse(e)
      setBlade_string(e)
      const htmlstr = to_html(ast)
      setHtmlString(htmlstr)
      console.log(htmlstr)
    } catch (e) {
      // console.log(new Date().toLocaleTimeString(), e)
    }
  }

  function downloadBut() {
    createNewWindowAndPrint(htmlString)
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    monaco.languages.register({ id: 'blade' })
    monaco.languages.setMonarchTokensProvider('blade', highlighter
    )
  }

  return (
    <>
      <Options downloadBut={downloadBut} />
      <div id='mirror'>
        <Editor
          id="editor"
          value={blade_string}
          theme="vs-dark"
          language='blade'
          height={500}
          onChange={blade_change}
          onMount={handleEditorDidMount}
        />
        <div id='html_renderer'>
          <Pages htmlString={htmlString} />
        </div>
      </div>
    </>
  )
}
