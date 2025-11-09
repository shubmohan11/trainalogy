import React from 'react';
import './Trainers.css';

const trainers = [
  {name:'ABDELRAHMAN', exp:'8 years', img:'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.57_d5dc0726-scaled.jpg'},
  {name:'FAYEZ KAFY', exp:'8 years', img:'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.58_d3db4654-scaled.jpg'},
  {name:'MOEMEN SAYED', exp:'6 years', img:'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.56_65b81028-scaled.jpg'}
];

export default function Trainers(){
  return (
    <section id="trainers" className="trainers container">
      <h2>TEAM OF EXPERT COACHES</h2>
      <div className="trainer-grid">
        {trainers.map((t,i)=> (
          <div className="trainer" key={i}>
            <img src={t.img} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{t.exp} of experience</p>
            <a className="view-profile" href="/coaches/">VIEW PROFILE</a>
          </div>
        ))}
      </div>
    </section>
  )
}
