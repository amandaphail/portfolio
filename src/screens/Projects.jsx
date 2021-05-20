import "./CSS/projects.css"
import SkateBored from "../images/skatebored.png"
import Memory from "../images/memory.png"
import Gallery from "../images/thegallery.png"

export default function Projects() {
  return (
    <div id="projectspage">
      <h1>Check out my projects</h1>

      <div id="projects">

      <div id="proj">
          <img id="projimg" alt="skate bored website" src={SkateBored} />
          <div>
          <h2>Skate Bored</h2>
          <p>Using NYC Data API, this application catalogs the Skate Parks in NYC and allows the user to find skate parks by location and its features.</p>
          <a href="http://skate-bored.surge.sh/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a href="https://github.com/amandaphail/Skate-Bored" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
      </div>
      
        <div id="proj">
          <img id="projimg" alt="Experience a Memory website" src={Memory} />
          <div id="center">
          <h2 id="long">Experience a Memory</h2>
          <p>React application using Google Maps "Embed a map" feature creates a communal memoir where users can post their memories using Airtable, an external API.</p>
          <a href="https://experience-a-memory.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a href ="https://github.com/amandaphail/VisualizeAMemory" target="_blank" rel="noopener noreferrer">Code</a>
          </div>

      </div>
      

        <div id="proj">   
          <img id="projimg" alt="The Gallery website" src={Gallery} />
          <div>
          <h2>The Gallery</h2>
          <p>Using React and Ruby on Rails as tools, users create a blueprint for a gallery wall using their own images, giving them a visual guidance to install one in their homes.</p>
          <a href="https://thegalleryforyou.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a href ="https://github.com/amandaphail/TheGallery"target="_blank" rel="noopener noreferrer">Code</a>
          </div>
      </div>
    
      </div>
    </div>
  )
}
