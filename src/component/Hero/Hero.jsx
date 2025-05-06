import React from "react";
import deer from "../../assets/Deer-SVG.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img src={deer} alt="" />
      <h2>
        <span>I am Tridib Samanta</span> expertise in java backend development
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas
        debitis numquam, porro impedit expedita dolor possimus. Neque
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Download Resume</div>
      </div>
    </div>
  );
};

export default Hero;
