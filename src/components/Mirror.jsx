import { useState, useEffect, useRef } from 'react'
import { to_html } from '../blade_to_html.mjs'
import parser from '../blade_grammar'
import html_to_components from 'html-react-parser'
import Editor from '@monaco-editor/react'
import highlighter from '../highlighter.js'
import '../try.css'

export default function Mirror() {
  const [htmlString, setHtmlString] = useState('')
  const [blade_string, setBlade_string] = useState(`
  (p) [] {
    hello world;
  }`)
  const editorRef = useRef(null)

  useEffect(() => {
    blade_change(blade_string)
  }, [blade_string])

  function blade_change(e) {
    try {
      const ast = parser.parse(e)
      setBlade_string(e)
      setHtmlString(to_html(ast))
    } catch (e) {
      console.log(new Date().toLocaleTimeString(), e)
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
        <div id='html_renderer'>{html_to_components(htmlString)}</div>
      </div>
    </>
  )
}
