import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png.jpg";
import contactImg from "../../assets/contact.png.jpg";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt={logo} className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">
          <b>Home</b>
        </Link>
        <Link className="desktopMenuListItem">
          <b>About</b>
        </Link>
        <Link className="desktopMenuListItem">
          <b>Portfolio</b>
        </Link>
        <Link className="desktopMenuListItem">
          <b>Clients</b>
        </Link>
      </div>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        <b>Contact Me</b>
      </button>
    </nav>
  );
};

export default NavBar;
