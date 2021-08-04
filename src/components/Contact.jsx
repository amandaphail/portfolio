import "./CSS/contact.css"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_aXzM1BchPF4BuGEiiuTNw");

export default function Contact() {
  // email form sends me an email right from the website

  const { register, handleSubmit, watch } = useForm();

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }


  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm('portfolio_contact_form', 'template_qczgo6i', '#contactform')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
    
    alert("Thank you for your email, I'll get back to you soon!");

  }


  // https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291
  // https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react


  return (
    <div id="contact">
      {/* <h1>Contact</h1> */}

      <h2 id="create">Let's create something cool!</h2>

      <div id="text">
        <p>I'm currently located in NYC, but I'm open to remote work as well, so feel free to send me a message!  </p>
        <p>You can submit this form with your contact information, or you can email me directly at <span id="email">amandalphail@gmail.com</span>.  </p>
      </div>

      <div id="formcontainer">
        <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='contact_number' value={contactNumber} />

          <input id="input"
            type="text"
            name="user_name"
            placeholder="Name"
            maxLength='30'
            // aria-invalid={errors.user_name ? "true" : "false"}
            {...register('user_name', { required: true })} />

          <input
            id="input"
            type="text"
            name="user_email"
            placeholder="Email"
            maxLength='30'
            {...register('user_email', { required: true })} />

          {/* <div> */}
          <textarea
            id="input"
            type="text"
            name="message" placeholder="Message" maxLength='1500'
            {...register('message', { required: true })} />
          <p className='message-chars-left'>{messageCharsLeft}</p>
          {/* </div> */}

          <input id="submit" type="submit" />
        </form>
      </div>
      <p>Don't forget to checkout my <a href="https://github.com/amandaphail" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/amandaphail/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
    </div>
  )
}