import React from 'react';
import './Features.css';

export default function Features(){
  const items = [
    {title:'CONVENIENCE', text:'You get to pick your place and time.'},
    {title:'SELECTION OF TRAINERS', text:'Trainers vary according to your fitness, weight and shape.'},
    {title:'QUALITY', text:'Our trainers are certified and with high qualifications.'}
  ];
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {items.map((it, idx)=> (
            <div className="feature" key={idx}>
              <h5>{it.title}</h5>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
