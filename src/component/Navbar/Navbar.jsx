import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleNavbar = (value) => {
    setMenu(value);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="react image" />
      <ul className="nav-menu">
        <li
          onClick={() => handleNavbar("home")}
          className={menu === "home" ? "nav-each" : ""}
        >
          Home
        </li>

        <li className={menu === "about" ? "nav-each" : ""}>
          <Link
            onClick={() => handleNavbar("about")}
            to="about"
            smooth="true"
            duration={100}
          >
            About Me
          </Link>
        </li>

        <li className={menu === "service" ? "nav-each" : ""}>
          <Link
            onClick={() => handleNavbar("service")}
            to="service"
            smooth="true"
            duration={100}
          >
            Services
          </Link>
        </li>
        <li className={menu === "portfolio" ? "nav-each" : ""}>
          <Link
            onClick={() => handleNavbar("portfolio")}
            to="portfolio"
            smooth="true"
            duration={100}
          >
            Portfolio
          </Link>
        </li>
        <li className={menu === "contact" ? "nav-each" : ""}>
          <Link
            onClick={() => handleNavbar("contact")}
            to="contact"
            smooth="true"
            duration={100}
          >
            Contact me
          </Link>
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="contact" smooth="true" duration={100}>
          connect with me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
