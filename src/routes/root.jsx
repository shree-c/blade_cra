import '../css/homepage.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Root() {
  const location = useLocation()
  const [docsNavClass, setdocsNavClass] = useState(['navlinks'])
  const [tryNavClass, settryNavClass] = useState(['navlinks'])
  useEffect(() => {
    if (location.pathname === '/try') {
      settryNavClass(['navlinks', 'selected'])
      setdocsNavClass(['navlinks'])
    }
    if (location.pathname === '/docs') {
      setdocsNavClass(['navlinks', 'selected'])
      settryNavClass(['navlinks'])
    }
  }, [location])
  return (
    <div id="cover">
      <nav>
        <div className="left" id="logo">
          <span>
            <Link to="/" style={{
              textDecoration: "none",
              color: 'inherit'
            }}>Blade </Link></span>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link className={docsNavClass.join(' ')} to={'/docs'}>Docs</Link >
            </li>
            <li>
              <Link className={tryNavClass.join(' ')} to={'/try'}>Try it</Link >
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root
