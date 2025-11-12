import React, { useState } from 'react';
import './Trainers.css';

const trainers = [
  {
    name: 'ABDELRAHMAN', 
    exp: '8 years', 
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png',
    specialties: 'Strength Training, Weight Loss, Muscle Building',
    description: 'Abdelrahman is a certified fitness expert with 8 years of experience transforming lives. Specializing in strength training and body composition, he has helped hundreds of clients achieve their fitness goals through personalized workout programs and nutrition guidance.'
  },
  {
    name: 'FAYEZ KAFY', 
    exp: '8 years', 
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_aat34iaat34iaat3.png',
    specialties: 'Functional Training, Athletic Performance, HIIT',
    description: 'Fayez brings 8 years of elite coaching experience, focusing on functional fitness and athletic performance. His dynamic training style combines HIIT workouts with functional movements to deliver exceptional results for clients of all fitness levels.'
  },
  {
    name: 'MOEMEN', 
    exp: '6 years', 
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png',
    specialties: 'CrossFit, Cardio Conditioning, Mobility',
    description: 'Moemen is a passionate fitness coach with 6 years of experience in CrossFit and cardiovascular conditioning. He excels at creating challenging yet achievable programs that improve endurance, flexibility, and overall athletic performance.'
  }
];

export default function Trainers(){
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleProfile = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="trainers" className="trainers container">
      <div className="trainers-header">
        <p className="subtitle">OUR TRAINERS</p>
        <h2 className="section-title"><span>TEAM OF EXPERT COACHES</span></h2>
      </div>
      <div className="trainer-grid">
        {trainers.map((t,i)=> (
          <div className="trainer" key={i}>
            <img src={t.img} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{t.exp} of experience</p>
            {expandedIndex === i && (
              <div className="trainer-profile">
                <p className="trainer-specialties"><strong>Specialties:</strong> {t.specialties}</p>
                <p className="trainer-description">{t.description}</p>
              </div>
            )}
            <button 
              className="view-profile" 
              onClick={() => toggleProfile(i)}
            >
              {expandedIndex === i ? 'CLOSE PROFILE' : 'VIEW PROFILE'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
