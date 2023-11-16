import React from "react";
import './contact.css';
import Walmart from '../../asset/walmart.png';
import Adobe from '../../asset/adobe.png';
import Microsoft from '../../asset/microsoft.png';
import Facebook from '../../asset/facebook.png';


const Contact = () => {
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    It would be glamorous moment working with companies that will levitate my understanding
                    in the technology part of life,because it would sound so good creating and solving websites
                    issues,using my level of understanding to impart great works with them
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />

                </div>


            </div>
            <div id="contact">

            </div>

        </section>
    );
}

export default Contact