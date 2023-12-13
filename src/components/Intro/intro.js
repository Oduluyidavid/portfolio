import React from "react";
import "./intro.css";
import bg from "../../assets/Image D.jpg";
import btnImg from "../../asset/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          
          I'm <span className="introname">David</span>
          <br />
          FRONTEND DEVELOPER
        </span>

        <p className="intropara">
          I am a developer like the magician behind the curtains, making the web
          pages <br /> come to life also responsible for creating the visual
          elements that users interact with in a web <br /> application or
          website
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500} offset={-70}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            <b>Hire Me</b>
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
