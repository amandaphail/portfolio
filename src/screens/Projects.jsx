import "./CSS/projects.css"
import SkateBored from "../images/skatebored.png"
import Memory from "../images/memory.png"
import Gallery from "../images/thegallery.png"

export default function Projects() {
  return (
    <div id="projectspage">
      <h1>Projects</h1>

      <div id="projects">

      <div>
          <h2>Skate Bored</h2>
          <img id="projimg" alt="skate bored website" src={SkateBored} />
          <p>Description and skills used</p>
          <a href="http://skate-bored.surge.sh/">Visit Site</a>
          <a href="https://github.com/amandaphail/Skate-Bored">Code</a>
      </div>
      
      <div>
          <h2>Experience a Memory</h2>
          <img id="projimg" alt="Experience a Memory website" src={Memory} />
          <p>Description and skills used</p>
          <a href="https://experience-a-memory.netlify.app/">Visit Site</a>
          <a href ="https://github.com/amandaphail/VisualizeAMemory">Code</a>
      </div>
      

      <div>
          <h2>The Gallery</h2>
          <img id="projimg" alt="The Gallery website" src={Gallery} />
          <p>Description and skills used</p>
          <a href="https://thegalleryforyou.netlify.app/">Visit Site</a>
          <a href ="https://github.com/amandaphail/TheGallery">Code</a>
      </div>
    
      </div>
    </div>
  )
}
