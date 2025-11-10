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
      <div className="pricing-header">
        <p className="subtitle">CHOOSE YOUR PLAN</p>
        <h2 className="section-title"><span>PRICING PACKAGE</span></h2>
      </div>
      <div className="pricing-grid">
        {plans.map((p,i)=> {
          const greenCounts = [1,2,3,3];
          const green = greenCounts[i] || 1;
          return (
            <div className={"plan" + (i===2? ' active':'')} key={i}>
              <div className="plan-top">
                <div className="indicator">
                  {[0,1,2].map(n=> (
                    <span key={n} className={n<green? 'dot green':'dot gray'}></span>
                  ))}
                </div>
                <h3>{p.price}</h3>
                <p className="sessions">{p.sessions}</p>
              </div>
              <div className="plan-bottom">
                <a className="btn-join" href="/pricing-2-2/">JOIN NOW</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
