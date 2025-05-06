import React from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="react image" />
      <ul className="nav-menu">
        <li>Home </li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact me</li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
};

export default Navbar;
