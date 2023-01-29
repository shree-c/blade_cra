import html_to_components from 'html-react-parser'
import { useRef, useEffect } from 'react'
function Pages({ htmlString }) {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    console.log('heights:', element.scrollHeight, element.clientHeight)
  }, [htmlString])

  return (
    <>
      <div className='page' ref={ref}>{html_to_components(htmlString)}</div>
    </>
  )
}

export default Pages
