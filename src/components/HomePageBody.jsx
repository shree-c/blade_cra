import { Link } from 'react-router-dom'
import list_code from '../assets/code_list.png'
import list_render from '../assets/list_render.png'
import h_and_p_render from '../assets/handprender.png'
import h_and_p_code from '../assets/handpcode.png'
function HomePageBody() {
  return (
    <>
      <section id="hero">
        <h1> Blade </h1>
        <p> A markup language to create beautiful languages quickly </p>
        <Link to="/try" className="routerlink">
          <button id='trybutton'>Try it</button>
        </Link>
      </section>
      <section id="features">
        <div>
          <h2> Declarative </h2>
          <p> Blade makes it painless to create documents and small webpages.</p>
        </div>
        <div>
          <h2> Simple and minimal syntax </h2>
          <p>The syntax is simple and can be learned within minutes. </p>
        </div>
        <div>
          <h2> Prebuilt Templates </h2>
          <p> We have created beautiful templates for common purposes such as Resumes, CVs, Letters, etc. Import the
            template and add the body to get beautifully and well typesetted document as output</p>
        </div>
        <div>
          <h2> Install Nothing!! </h2>
          <p> You don't need to install anything to your PC. Go to our online edtor and start creating documents.</p>
        </div>
      </section>
      <section id="showcase">

      </section>

      <section id="inspiration">
        <div className="img_block">
          <div id="img">
            <img src={list_code} />
          </div>
          <div id="doc_img">
            <img src={list_render} />
          </div>
        </div>
        <div className="img_block">
          <div id="img">
            <img src={h_and_p_code} />
          </div>
          <div id="doc_img">
            <img src={h_and_p_render} />
          </div>
        </div>
      </section>
      <footer>
        <ul>
          <li> Created by Shridhar </li>
          <li> Twitter </li>
          <li> Github </li>
        </ul>
      </footer>
    </>
  )
}

export default HomePageBody
