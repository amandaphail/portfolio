import "./CSS/projects.css"
import SkateBored from "../images/skatebored.png"
import Memory from "../images/memory.png"
import Gallery from "../images/thegallery.png"

export default function Projects() {
  return (
    <div id="projectspage">
      
      <h1 id="projectstitle">Some of my Favorite Projects</h1>
      

      <div id="projects">

      <div id="proj">
          <img id="projimg" alt="skate bored website" src={SkateBored} />
          <div id="projcontent">
          <h2 id="projheadline">Skate Bored</h2>
            <p id="left">Using NYC Data API, this application catalogs the Skate Parks in NYC and allows the user to find skate parks by location and its features.</p>

            <div id="links">
          <a id ="site" href="http://skate-bored.surge.sh/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a id="code" href="https://github.com/amandaphail/Skate-Bored" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
      </div>
      
        <div id="proj">
          <img id="projimg" alt="Experience a Memory website" src={Memory} />
          <div id="projcontent">
          <h2 id="projheadline">Experience a Memory</h2>
            <p id="left">React application using Google Maps "Embed a map" feature creates a communal memoir where users can post their memories using Airtable, an external API.</p>
            <div id ="links">
          <a id ="site" href="https://experience-a-memory.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a id="code" href ="https://github.com/amandaphail/VisualizeAMemory" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>

      </div>
      

        <div id="proj">   
          <img id="projimg" alt="The Gallery website" src={Gallery} />
          <div id="projcontent">
          <h2 id="projheadline">The Gallery</h2>
            <p id="left">Using React and Ruby on Rails as tools, users create a blueprint for a gallery wall using their own images, giving them a visual guidance to install one in their homes.</p>
            <div id="links">

          <a id ="site" href="https://thegalleryforyou.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          <a id="code" href ="https://github.com/amandaphail/TheGallery"target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
      </div>
    
      </div>
    </div>
  )
}
