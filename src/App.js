import './App.css';
import {Route} from "react-router-dom"
import Title from "./screens/Title.jsx"
import AboutMe from "./screens/AboutMe.jsx"
import Projects from "./screens/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div className="App">
      App
      <Route>
        <Title />
        <AboutMe />
        <Projects />
        <Contact />
      </Route>
    </div>
  );
}

export default App;
