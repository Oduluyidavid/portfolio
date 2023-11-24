import React from "react";
import "./skills.css";
import HCJR from "../../assets/HCJR.png.png";
import Git from "../../assets/Git-png.png";
import API from "../../assets/API.png";

const Skills = () => {
  return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate frontend developer creating digital
          experiences that captivate, engage, and seamlessly connect with users.
          As a developer what I canvas is the web, and every line of code is a
          brushstroke shaping the user's journey, also solving website
          applications
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={HCJR} alt="HCJR" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Html/Css/React</h2>
              <p>
                The main purpose of this language used is to solve issue
                affecting <br/> websites and mobile applications.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Git} alt="Git" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Version control/ Repositories</h2>
              <p>
                Git is designed to track changes in source code during 
                software development.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={API} alt="API" className="skillBarImg" />
            <div className="skillBarText">
              <h2>WebAPIs/RESTfulAPIs</h2>
              <p>
                Many modern APIs, especially in the context of web development,
                are web APIs RESTful APIs adhere to the principles of REST and
                are commonly used for web services.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
