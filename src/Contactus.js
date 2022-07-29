import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w2sngy1",
        "template_9s5b2mb",
        form.current,
        "dcWYxxIJ9vthLf0tP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email sent successfully");
  };
  return (
    <div className="contact-container">
      <div className="contactuspage">
        <h3>Contact Us</h3>
        <br />
        <h5>Trustmail@gmail.com</h5>
        <h5>Plot no:99,123 Street,Trust Road,India</h5>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input placeholder="Enter your name" type="text" name="user_name" />
            <label>Email:</label>
            <input
              placeholder="Enter your Email"
              type="email"
              name="user_email"
            />
            <label>Message:</label>
            <textarea name="message" />
            <input className="btn-contactus" type="submit" value="Send Mail" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
