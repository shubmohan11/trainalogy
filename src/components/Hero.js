import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-copy">
          <h1>Trainology<br/>PERSONAL TRAINER</h1>
          <p>Looking for the best personal trainers in Dubai? Our certified fitness coaches offer customized training plans to help you achieve real results.</p>
          <a className="btn-primary" href="/contact-us/">LET'S TRAIN</a>
        </div>
        <div className="hero-image">
          <img src="https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.57_d5dc0726-scaled.jpg" alt="hero"/>
        </div>
      </div>
    </section>
  )
}
