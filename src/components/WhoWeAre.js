import React from 'react';
import './WhoWeAre.css';

const features = [
  {title: 'FULL-BODY STRENGTH', text: 'Train with the best experts in bodybuilding field.'},
  {title: 'LEARN MACHINES', text: 'Our personal trainers will help you find a perfect workout.'},
  {title: 'TRAIN BOXING', text: 'Uniquely sequenced class work to heat and challenge the body.'}
];

function FeatureIcon({index}){
  // simple inline SVG icons (neon green stroke)
  if(index === 0) return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13c0-2 2-3 4-3s4 1 4 3-2 5-4 5-4-3-4-5z" stroke="#27d06b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11c1-2 4-3 6-3" stroke="#27d06b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if(index === 1) return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12h6l2 4h6" stroke="#27d06b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="18" r="2" stroke="#27d06b" strokeWidth="1.6"/>
      <circle cx="17" cy="18" r="2" stroke="#27d06b" strokeWidth="1.6"/>
    </svg>
  )
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12c0-3 2-5 5-5h2c3 0 5 2 5 5v3c0 3-2 5-5 5H9" stroke="#27d06b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 7v-2" stroke="#27d06b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function WhoWeAre(){
  const image = process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png';
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="who container" id="who-we-are">
      <div className="who-inner">
        <div className="who-copy">
          <p className="who-subtitle">WHO WE ARE</p>
          <h2 className="who-title">GIVE SHAPE OF<br/>YOUR BODY</h2>
          <p className="who-intro">At Trainology | personal Trainer We offer Different programs tailored for you.</p>

          <div className="who-list">
            {features.map((f,i)=> (
              <div className="who-item" key={i}>
                <div className="who-icon" aria-hidden>
                  <FeatureIcon index={i} />
                </div>
                <div className="who-item-copy">
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="who-media">
          <div className="who-media-frame">
            <img src={image} alt="who we are" />
          </div>
          <button className="who-cta" onClick={scrollToContact}>FREE CONSULTATION</button>
        </div>
      </div>
    </section>
  )
}
