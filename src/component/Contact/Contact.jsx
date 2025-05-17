import React from "react";
import "./Contact.css";
import { Email, LocationCity, Phone } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
      </div>
      <div className="contact-container">
        <div className="left-container">
          <h1>let's talk</h1>
          <p>
            Lorem ipsum am blanditiis vel dolorum? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Enim, iure placeat? Excepturi omnis
            nobis cum suscipit! Voluptatum natus deleniti doloribus!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <Email />
              <p>tridibsamanta@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Phone />
              <p>+918345995248</p>
            </div>
            <div className="contact-detail">
              <LocationCity />
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
        <form className="right-container">
          <label>your name</label>
          <input type="text" placeholder="Enter your name" />
          <label> your email</label>
          <input type="text" placeholder="Enter your mail" />
          <label>Write your message</label>
          <textarea rows="10" placeholder="enter your msg"></textarea>
          <button className="contact-submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
