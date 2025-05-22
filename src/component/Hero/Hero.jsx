import React from "react";
import deer from "../../assets/Deer-SVG.jpg";
import { Link } from "react-scroll";
import "./Hero.css";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={deer} alt="" />
      <h2>
        <span>I am Tridib Samanta</span> expertise in java backend development
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas
        debitis numquam, porro impedit expedita dolor possimus. Neque
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="contact" smooth="true" duration={100}>
            connect with me
          </Link>
        </div>
        <div className="hero-resume">Download Resume</div>
      </div>
    </div>
  );
};

export default Hero;
