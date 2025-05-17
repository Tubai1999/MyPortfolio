import React from "react";
import "./Footer.css";
import { Person } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quaerat
            unde recusandae sint consectetur a
          </p>
        </div>
        <div className="footer-top-right">
          <div className="email-input">
            <Person />
            <input placeholder="enter your email" />
          </div>
          <div className="subsscribe-button">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>@copyright John Doe, All rights reserver</p>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-bottom-right-single">Terms of service</div>
          <div className="footer-bottom-right-single">Privacy policy</div>
          <div className="footer-bottom-right-single">Connect With Me</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
