import "./CSS/aboutme.css"
import me from "../images/me.jpeg"

export default function AboutMe() {
  return (
    <div id ="aboutme">
      <div id="body">
        <img id="me" alt="Me" src={me}></img>

        <div id ="content">
          <h1>About Me</h1>
          <p>Resilient software engineer with a client-facing background, always excited to explore in the world, and in technology. While I value both my independence and freedom, I am also a supportive team player, finding success through creativity, confidence, understanding and open mindedness.</p>

          <h4>
            Technical Skills:
          </h4>
          
          <div id="skills">
            <p id="left">Programming: Command Line Interface, Git, JavaScript, Node.js</p>

            <p id="left">Front end: CSS, HTML5, DOM Manipulation, OOP, React, Life Cycle, Hooks, Router, Material UI</p>

            <p id="left">Back end: Database manipulation, MongoDB, Mongoose, Express, Ruby on Rails, PostgreSQL APIs</p>
          </div>
          





          

          <p>You can download my Resume <a href="https://drive.google.com/file/d/1G7f6uNeVH98V29M908wCcjHAcndVuRpX/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>!</p>
        </div>
      </div>
    </div>
  )
}
