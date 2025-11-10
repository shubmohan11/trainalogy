import React from 'react';
import './Hero.css';
// Use process.env.PUBLIC_URL to get the correct public path in production
const heroImage = process.env.PUBLIC_URL + '/Gemini_Generated_Image_vdcsguvdcsguvdcs.png';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Trainology fitness trainers"/>
      </div>
      <div className="hero-inner container">
        <div className="hero-copy">
          <h1>Trainology<br/>PERSONAL TRAINER</h1>
          <p>Looking for the best personal trainers in Dubai? Our certified fitness coaches offer customized training plans to help you achieve real results.</p>
          <a className="btn-primary" href="/contact">LET'S TRAIN</a>
        </div>
      </div>
    </section>
  )
}
