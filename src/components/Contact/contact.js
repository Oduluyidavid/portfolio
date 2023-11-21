import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../asset/walmart.png";
import Adobe from "../../asset/adobe.png";
import Microsoft from "../../asset/microsoft.png";
import Facebook from "../../asset/facebook.png";
import FacebookIcon from "../../asset/facebook-icon.png";
import TwitterIcon from "../../asset/twitter.png";
import YoutubeIcon from "../../asset/youtube.png";
import InstagramIcon from "../../asset/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n54m0sz',
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
   };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          <b>
            It would be glamorous moment working with companies that will
            levitate my understanding in the technology part of life,because it
            would sound so good creating and solving websites issues,using my
            level of understanding to impart great works with them
          </b>
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact"></div>
      <h1 className="contactPageTitle">
        <b>Contact Me</b>
      </h1>
      <span className="contactDesc">
        <b>please fill out the form below to discus any work opportunities</b>
      </span>
      <form className="contactForm" ref={form}onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="sumbit" value="send" className="submitBtn">
          <b>Submit</b>
        </button>
        <div className="links">
          <img src={FacebookIcon} alt="Facebook" className="link" />
          <img src={TwitterIcon} alt="twitter" className="link" />
          <img src={YoutubeIcon} alt="Youtube" className="link" />
          <img src={InstagramIcon} alt="instagram" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
