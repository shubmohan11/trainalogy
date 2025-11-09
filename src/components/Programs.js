import React from 'react';
import './Programs.css';

export default function Programs(){
  const programs = [
    {title:'FULL-BODY STRENGTH', desc:'Train with the best experts in bodybuilding field.'},
    {title:'LEARN MACHINES', desc:'Our personal trainers will help you find a perfect workout.'},
    {title:'TRAIN BOXING', desc:'Uniquely sequenced class work to heat and challenge the body.'}
  ];
  return (
    <section id="programs" className="programs container">
      <h2>GIVE SHAPE OF YOUR BODY</h2>
      <div className="program-list">
        {programs.map((p,i)=> (
          <div className="program" key={i}>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
