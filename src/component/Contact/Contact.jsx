import React from "react";
import "./Contact.css";
import { Email, LocationCity, Phone } from "@mui/icons-material";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfc2ab10-86d2-4ba0-88de-05c4fbafb413");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
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
        <form onSubmit={onSubmit} className="right-container">
          <label>your name</label>
          <input name="name" type="text" placeholder="Enter your name" />
          <label> your email</label>
          <input name="email" type="text" placeholder="Enter your mail" />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="10"
            placeholder="enter your msg"
          ></textarea>
          <button className="contact-submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
