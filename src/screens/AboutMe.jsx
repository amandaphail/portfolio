import "./CSS/aboutme.css"
import me from "../images/me.jpeg"

export default function AboutMe() {
  return (
    <div id="aboutme">
      <div id="body">
        <img id="me" alt="Me" src={me}></img>

        <div id="content">
          {/* <h1 id="who">Who am I ?</h1> */}
          <p id="about"> I'm a resilient software engineer with a client-facing background, always excited to explore in the world, and in technology. While I value both my independence and freedom, I am also a supportive team player, finding success through creativity, confidence, understanding and open mindedness.</p>

          <h4 id="tech">
            Technical Skills:
          </h4>

          <div id="skills">
            <div id="points">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
              </ul>
              <ul>
                <li>Stencil.js</li>
                <li>Next.js</li>
                <li>API integration</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>Rally</li>
              </ul>
            </div>
          </div>


          <p>You can download my Resume <a href="https://drive.google.com/file/d/1SnTfrgFHFOdsryXOb2gmaN9eaeNLmCEd/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>!</p>
        </div>
      </div>
    </div>
  )
}
