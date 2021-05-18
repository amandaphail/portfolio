import "./CSS/contact.css"
import { useForm } from 'react-hook-form';

export default function Contact() {
  // email form sends me an email right from the website
  
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  return (
    <div id ="contact">
      <h1>Contact</h1>
      <div id="formcontainer">

        <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
          

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


// https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291
// https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react