import React from 'react';
import './WhoWeAre.css';

// Inline SVG icons
const StrengthIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 12h10" stroke="#f1c40f" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M5 8v8M7 7v10M17 7v10M19 8v8" stroke="#f1c40f" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const MachineIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="5" y="6.5" width="14" height="13" rx="2" stroke="#f1c40f" strokeWidth="1.6"/>
    <path d="M9 6.5V5h6v1.5" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M9 13l2 2 4-4" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
          <h2 className="who-title">Shape Your Body with Expert Guidance</h2>
          <p className="who-intro">
            At Trainology, we specialize in delivering personalized fitness experiences. Whether your goal is strength,
            fat loss, mobility, or overall wellness, our certified trainers create programs that match your body, pace,
            and lifestyle.
          </p>
          <p className="who-intro">
            Our mission is simple — to help you become the strongest, healthiest version of yourself.
          </p>

          <h3 className="who-subtitle" style={{ marginTop: 20 }}>OUR CORE PROGRAMS</h3>
          <div className="who-list">
            <div className="who-item">
              <div className="who-icon" aria-hidden>
                <StrengthIcon />
              </div>
              <div className="who-item-copy">
                <h4>Full-Body Strength Training</h4>
                <p>
                  Build muscle, gain strength, and enhance overall performance with science-backed training led by
                  experienced fitness professionals.
                </p>
              </div>
            </div>
            <div className="who-item">
              <div className="who-icon" aria-hidden>
                <MachineIcon />
              </div>
              <div className="who-item-copy">
                <h4>Machine Training &amp; Form Correction</h4>
                <p>
                  Master gym machines with correct form. Our trainers guide you step-by-step to ensure safety, efficiency,
                  and faster results.
                </p>
              </div>
            </div>
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
