import React from 'react';
import './Hero.css';
// Use process.env.PUBLIC_URL to get the correct public path in production
const heroImage = process.env.PUBLIC_URL + '/Gemini_Generated_Image_vdcsguvdcsguvdcs.png';

export default function Hero(){
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Trainology fitness trainers"/>
      </div>
      <div className="hero-inner container">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="badge-text">Powered by</span>
            <span className="badge-brand">TRAINOLOGY</span>
          </div>
          <h1>THE WORLD'S #1<br/>BODY TRANSFORMATION PROGRAM</h1>
          <p className="hero-subtitle">For Executives, High-Achievers & Those Who Demand the Best.</p>
          <button className="btn-hero" onClick={scrollToContact}>
            START MY TRANSFORMATION
          </button>
        </div>
      </div>
    </section>
  )
}
