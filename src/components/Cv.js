import React from 'react';
import JanithAbeywardhana2 from '../assets/JanithAbeywardhana2.pdf';


export const Cv = () => {
   return(
    <section id="cv" className="cv-section">
        <div className="container">
            <h2> My CV </h2>
            <p> Download my Cv by Clicking the Button below: </p>
            <a href={JanithAbeywardhana2} download={JanithAbeywardhana2.pdf} className="download-btn">
            <button> Download CV </button>
            </a>
        </div>
    </section>
   );
};