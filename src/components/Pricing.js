import React from 'react';
import './Pricing.css';

const plans = [
  {price:'1400 AED', sessions:'4 SESSIONS'},
  {price:'2500 AED', sessions:'8 SESSIONS'},
  {price:'3200 AED', sessions:'12 SESSIONS'},
  {price:'3700 AED', sessions:'16 SESSIONS'}
];

export default function Pricing(){
  return (
    <section id="pricing" className="pricing container">
      <h2>PRICING PACKAGE</h2>
      <div className="pricing-grid">
        {plans.map((p,i)=> (
          <div className="plan" key={i}>
            <h3>{p.price}</h3>
            <p className="sessions">{p.sessions}</p>
            <a className="btn-join" href="/pricing-2-2/">JOIN NOW</a>
          </div>
        ))}
      </div>
    </section>
  )
}
