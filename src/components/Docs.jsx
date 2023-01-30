import '../css/docs.css'
function Docs() {
  return (
    <div id="wrapper">
      <section>
        <h3>What is it?</h3>
        <p>
          Blade is a markup language designed to be readable and create documents easily just with tags.
        </p>
        <p>
          You can precisely design your documents just with the help of tags. The tags include style tags that apply styling to elements and general html tags also work.
        </p>
      </section>
      <section>
        <h3>Syntax</h3>
        <p>
          The tags are just like html tags.
        </p>
        <p>
          Blade tags look like: <code>-tag_name- content -/[optional tag close]-</code>
        </p>
        <p>
          <em>For example:</em>
          A p tag can be written as : <code> -p- I am a p tag -/-</code>
        </p>
        <p>
          All html tags work. The default html brower styling is applied to them. I you don't want browser styling, use generic tags such as <b>div</b> for block, <b>span</b> for inline.
        </p>
      </section>
      <section>
        <h3>
          Styling
        </h3>
        <p>
          All styling tags begin with <b>s</b>.
        </p>
        <p>
          Styling in blade is giving key value through tags.
          Example: <code>-s[style_tag]#[value]- block -/-</code>
        </p>
        <h4>Currently existing style elements</h4>
        <code>
          &#123;
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
          &#125;
        </code>
        <p>
          The values are just numbers and the unit is taken as <b>pt</b>. It is chosen because it is easier to render on pages. Blade is intended to create printable documents.
        </p>
      </section>
    </div>
  )
}

export default Docs
