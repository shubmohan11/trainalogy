import React from 'react';
import './WhatMakes.css';

const features = [
  {
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_1y8f2t1y8f2t1y8f.png',
    title: 'THE RIGHT INTENSITY -',
    subtitle: 'SO YOU NEVER FEEL BURNED OUT',
    description: 'Not too hard, not too easy—just the right intensity to see powerful results. This is custom fitness at the highest level.'
  },
  {
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_6avhw36avhw36avh.png',
    title: '100% PTD-TRAINED EXPERTS',
    subtitle: '(NO RANDOM FREELANCE TRAINERS)',
    description: 'Every coach is hand-selected, PTD-certified, and trained in the PTD Elite Coaching Model™—ensuring the same world-class standard across all PTD programs.'
  },
  {
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_9be2uh9be2uh9be2.png',
    title: 'OPTIMIZED FOR YOUR',
    subtitle: 'AGE, LIFESTYLE & GOALS',
    description: 'We specialize in men & women 40+ who want strength, longevity & an optimized physique—without risky, ineffective methods.'
  }
];

export default function WhatMakes() {
  return (
    <section className="what-makes">
      <div className="what-makes-container">
        <h2 className="what-makes-heading">WHAT MAKES TRAINALOGY FITNESS UNMATCHED IN DUBAI?</h2>
        <div className="what-makes-grid">
          {features.map((feature, i) => (
            <div className="what-makes-card" key={i}>
              <div className="card-image">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <h4 className="card-subtitle">{feature.subtitle}</h4>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
