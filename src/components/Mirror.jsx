import { useState, useEffect, useRef } from 'react'
import parser from '../parser.js'
import { to_html } from '../blade_to_html.mjs'
import Editor from '@monaco-editor/react'
import highlighter from '../highlighter.js'
import '../css/try.css'
import Pages from './Pages.jsx'

export default function Mirror() {
  const [htmlString, setHtmlString] = useState('')
  const [blade_string, setBlade_string] = useState(`-ul-
  -li- item 1 -/li-
  -li- item 2 -/li-
  -li- item 3 -/li-
-/ul-`)
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

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    monaco.languages.register({ id: 'blade' })
    monaco.languages.setMonarchTokensProvider('blade', highlighter
    )
  }

  return (
    <>
      <div id='mirror'>
        <Editor
          id="editor"
          value={blade_string}
          theme="vs-dark"
          language='blade'
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
