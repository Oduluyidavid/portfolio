import React from "react";
import "./intro.css";
import bg from "../../assets/Image D.jpg";
import btnImg from '../../assets/Hireme.jpg';
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm
          <span className="introname"> David <br />
          </span>
          FRONTEND DEVELOPER
        </span>
        <p className="intropara">
          I am a skilled web developer mostly specialized in React , HTML and
          CSS with experience in solving mobile applications
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className='btnImg' />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
