import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbdds1m",
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
        <h1>Contact Us</h1>
        <h3>contactus@gmail.com</h3>
        <h4>H.NO:-1-1-100,Trust Road,Trust Street,Trust, India</h4>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input placeholder="Enter your name" type="text" name="user_name" />
          <label>Email</label>
          <input
            placeholder="Enter your Email"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea name="message" />
          <input class="btn" type="button" value="Send Mail" />
        </form>
      </div>
    </div>
  );
}

export default Contactus;
