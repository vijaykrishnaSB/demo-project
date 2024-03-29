import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_w2sngy1",
      "template_9s5b2mb",
      form.current,
      "dcWYxxIJ9vthLf0tP"
    );
   
    e.target.reset();
    alert("Email sent successfully");
  };
  return (
    <div className="contact-container">
      <div className="contactuspage">
        <h3>Contact Us</h3>
        <br /><br/>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="user_name"
              requiredrules={[{ required: true }]}
            />
            <label>Email:</label>
            <input
              placeholder="Enter your Email"
              type="email"
              name="user_email"
              requiredrules={[{ required: true }]}
            />
            <label>Message:</label>
            <textarea name="message" />
            <input
              className="btn-contactus"
              type="submit"
              value="Send Mail"
              requiredrules={[{ required: true }]}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
