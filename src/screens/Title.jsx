import "./CSS/title.css"
import background from "../videos/background.mp4"

export default function Title() {
  return (
    <div id="title">
    <video autoPlay muted loop id="myVideo">
  <source src={background} type="video/mp4"/>
</video>
      {/* <h1>Amanda Phail</h1>
      <h2>Software Engineer,</h2>
      <h3>FullStack Developer</h3> */}
    </div>
  )
}
