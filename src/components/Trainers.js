import React from 'react';
import './Trainers.css';

const trainers = [
  {name:'ABDELRAHMAN', exp:'8 years', img:process.env.PUBLIC_URL + '/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png'},
  {name:'FAYEZ KAFY', exp:'8 years', img:process.env.PUBLIC_URL + '/Gemini_Generated_Image_aat34iaat34iaat3.png'},
  {name:'MOEMEN', exp:'6 years', img:process.env.PUBLIC_URL + '/Gemini_Generated_Image_aat34iaat34iaat3.png'}
];

export default function Trainers(){
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
            <a className="view-profile" href="/coaches/">VIEW PROFILE</a>
          </div>
        ))}
      </div>
    </section>
  )
}
