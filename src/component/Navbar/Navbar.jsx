import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import { Link } from "react-scroll";
import { Close, Menu } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-250px";
  };

  const handleNavbar = (value) => {
    setMenu(value);
  };
  const isDesktop = useMediaQuery("(min-width:781px)");

  return (
    <div className="navbar">
      <img src={logo} alt="react image" />
      {!isDesktop && (
        <Menu
          onClick={openMenu}
          sx={{
            position: "fixed",
            right: 30,
            top: 20,
            backgroundColor: "#B923E1",
            padding: "8px",
            borderRadius: "50%",
            color: "white",
            zIndex: 1,
          }}
        />
      )}

      <ul className="nav-menu" ref={menuRef}>
        {!isDesktop && (
          <Close sx={{ position: "absolute", right: 0 }} onClick={closeMenu} />
        )}
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
