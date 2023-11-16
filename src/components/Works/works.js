import React from "react";
import "./works.css";
import portfolio1 from "../../asset/portfolio-1.png";
import portfolio2 from "../../asset/portfolio-2.png";
import portfolio3 from "../../asset/portfolio-3.png";
import portfolio4 from "../../asset/portfolio-4.png";
import portfolio5 from "../../asset/portfolio-5.png";
import portfolio6 from "../../asset/portfolio-6.png";
import Container from "react-bootstrap/Container";

const Works = () => {
  return (
    <Container>
      <section id="works">
        <h2 className="worksTitle"> My Portfolio</h2>
        <span className="worksDesc">
          I take pride in paying attention to details affecting mobile
          application and website
        </span>
        <div className="worksImgs">
          <img src={portfolio1} alt="" className="worksImg" />
          <img src={portfolio2} alt="" className="worksImg" />
          <img src={portfolio3} alt="" className="worksImg" />
          <img src={portfolio4} alt="" className="worksImg" />
          <img src={portfolio5} alt="" className="worksImg" />
          <img src={portfolio6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">
          <b>See More</b>
        </button>
      </section>
    </Container>
  );
};

export default Works;
