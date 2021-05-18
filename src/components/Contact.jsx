import "./CSS/contact.css"
import {useState} from "react"
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_aXzM1BchPF4BuGEiiuTNw");

export default function Contact() {
  // email form sends me an email right from the website
  
  const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = data => console.log(data);
  
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
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }


// https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291
// https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react


  return (
    <div id ="contact">
      <h1>Contact</h1>
      <div id="formcontainer">

        <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
          
        <input type='hidden' name='contact_number' value={contactNumber} />

          {/* <label>Name: </label> */}
          {/* {errors.user_name && errors.user_name.type === "required" && (<div role="alert">Name is required<br/></div>)} */}
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            maxLength='30'
            // aria-invalid={errors.user_name ? "true" : "false"}
            {...register('name', { required: true })} />
          
        
        {/* <label>Email Address: </label> */}
          <input
            type="text"
            name="user_email"
            placeholder="Email"
            maxLength='30'
            {...register('email', { required: true })} />
        
          {/* <label>Message: </label> */}
          <div>
          <textarea type="text" name="message" placeholder="Message" maxLength='1500' {...register('message', { required: true })} />
          <p className='message-chars-left'>{messageCharsLeft}</p>
          </div>

        
        <input type="submit"/>
      </form>
      </div>
    </div>
  )
  }