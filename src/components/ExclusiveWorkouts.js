import React from 'react';
import './ExclusiveWorkouts.css';

const workouts = [
  {title: 'PARKOUR PERSONAL TRAINER', img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_vdcsguvdcsguvdcs.png'},
  {title: 'POST-NATAL TRAINING', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.37 PM.jpeg'},
  {title: 'BOXING COURSE', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.38 PM.jpeg'},
  {title: 'CALISTHENICS TRAINING', img: process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png'},
  {title: 'MASSAGE THERAPY', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.39 PM (1).jpeg'},
  {title: 'BOOTCAMP TRAINING', img: process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.40 PM.jpeg'}
];

export default function ExclusiveWorkouts(){
  return (
    <section className="exclusive container" id="exclusive-workouts">
      <div className="exclusive-head">
        <p className="exclusive-sub">FIND YOUR EXERCISE</p>
        <h2 className="exclusive-title">NEW EXCLUSIVE WORKOUT</h2>
      </div>

      <div className="exclusive-grid">
        {workouts.map((w,i)=> (
          <div className="exclusive-item" key={i}>
            <div className="exclusive-img">
              <img src={w.img} alt={w.title} />
            </div>
            <h4 className="exclusive-item-title">{w.title}</h4>
          </div>
        ))}
      </div>

      <div className="exclusive-cta">
        <a className="btn-learn" href="/programs/">LEARN MORE</a>
      </div>
    </section>
  )
}
