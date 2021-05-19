import "./CSS/aboutme.css"
import me from "../images/me.jpeg"

export default function AboutMe() {
  return (
    <div id ="aboutme">
      <h1>About Me</h1>
      <div id="body">
        <img id="me" alt="Me" src={me}></img>

        <div id ="content">
          <p>Resilient software engineer with a client-facing background, always excited to explore in the world, and in technology. While I value both my independence and freedom, I am also a supportive team player, finding success through creativity, confidence, understanding and open mindedness.</p>

          <p>Checkout my <a href="https://github.com/amandaphail" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/amandaphail/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>

          <p>You can download my Resume <a href="https://drive.google.com/file/d/1G7f6uNeVH98V29M908wCcjHAcndVuRpX/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>!</p>
        </div>
      </div>
    </div>
  )
}
