import "./CSS/contact.css"

export default function Contact() {
  // email form sends me an email right from the website
  return (
    <div id ="contact">
      <h1>Contact</h1>
      <form>
        <label>Name: </label>
        <input type="text" />
        
        <label>Email Address: </label>
        <input type="text"/>
        
        <label>Message: </label>
        <input type="text" />
        
        <input type="submit"/>
      </form>
    </div>
  )
}
