import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png.jpg";
import contactImg from "../../assets/contact.png.jpg";
import { Link } from "react-scroll";
import menu from '../../asset/menu.png';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt={logo} className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem"><b> Home </b></Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-500} duration={500} className="desktopMenuItem"><b> About </b></Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItem"><b> Portfolio </b></Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItem"><b> Clients </b></Link>
      </div>

      <button className="desktopMenuBtn" onClick={ ()=> {
         document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" /><b>Contact Me</b></button>
        <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b> Home </b></Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b> About </b></Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b> Portfolio </b></Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b> Clients </b></Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b> Contact </b></Link>
      </div>

    </nav>
  );
};

export default NavBar;
