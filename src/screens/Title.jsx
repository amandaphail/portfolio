import "./CSS/title.css"
import background from "../videos/background.mp4"

export default function Title() {
  return (
    <div id="title">
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4"/>
      </video>
      
      <div id="mytitle">
        <h1 id ="myname">Amanda Phail</h1>
        <h2 id="titlename">Software Engineer | Full Stack Developer</h2>
      </div>
    </div>
  )
}
