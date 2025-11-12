import React, { useState } from 'react';
import './ExclusiveWorkouts.css';

const workouts = [
  {
    title: 'PERSONAL TRAINING', 
    img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_1y8f2t1y8f2t1y8f.png',
    description: 'Get one-on-one attention from certified trainers who create customized workout plans tailored to your fitness goals. Experience personalized guidance and achieve results faster with dedicated support.'
  },
  //{title: 'POST-NATAL TRAINING', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.37 PM.jpeg'},
  //{title: 'BOXING COURSE', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.38 PM.jpeg'},
  {
    title: 'HOME WORKOUT', 
    img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_6avhw36avhw36avh.png',
    description: 'Train effectively from the comfort of your home with our comprehensive workout programs. No equipment necessary - just your dedication and our expert-designed routines to keep you fit anywhere.'
  },
  {
    title: 'ZUMBA', 
    img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_9be2uh9be2uh9be2.png',
    description: 'Dance your way to fitness with high-energy Zumba classes that combine Latin rhythms with aerobic exercise. Burn calories while having fun in an exciting, party-like atmosphere.'
  },
  {
    title: 'PERSONALIZED DIET PLAN', 
    img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_y639mly639mly639.png',
    description: 'Receive custom nutrition plans designed by expert dietitians to complement your fitness journey. Achieve your body goals with balanced meal plans tailored to your lifestyle and preferences.'
  }
];

export default function ExclusiveWorkouts(){
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="exclusive container" id="exclusive-workouts">
      <div className="exclusive-head">
        <p className="exclusive-sub">FIND YOUR EXERCISE</p>
        <h2 className="exclusive-title">NEW EXCLUSIVE WORKOUT</h2>
      </div>

      <div className="exclusive-grid">
        {workouts.map((w,i)=> (
          <div className="exclusive-item" key={i}>
            <div className="exclusive-img" onClick={scrollToContact} style={{cursor: 'pointer'}}>
              <img src={w.img} alt={w.title} />
            </div>
            <h4 className="exclusive-item-title">{w.title}</h4>
            {expandedIndex === i && (
              <p className="exclusive-item-description">{w.description}</p>
            )}
            <button 
              className="btn-learn-more" 
              onClick={() => toggleDescription(i)}
            >
              {expandedIndex === i ? 'SHOW LESS' : 'LEARN MORE'}
            </button>
          </div>
        ))}
      </div>

      <div className="exclusive-cta">
        <button className="btn-learn" onClick={scrollToContact}>LEARN MORE</button>
      </div>
    </section>
  )
}
