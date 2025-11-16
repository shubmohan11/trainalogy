import React from 'react';
import './Pricing.css';

const plans = [
  {
    title: '💪 Individual Training',
    pricePerSession: '200 AED',
    packagePrice: '1,800 AED',
    packageSessions: '12 Sessions',
    includes: [
      'One-on-one personalized coaching',
      'Customized workout programming',
      'Technique correction & mobility focus',
      'Weekly progress tracking',
      'Flexible scheduling'
    ],
    bestFor: 'Beginners, fat-loss goals, strength building, and personalized attention.'
  },
  {
    title: '👥 Couple Training',
    pricePerSession: '275 AED',
    packagePrice: '2,700 AED',
    packageSessions: '12 Sessions',
    includes: [
      'Training designed for two',
      'Partner-based motivation',
      'Tailored plans for each individual',
      'Safe form coaching',
      'Shared progress tracking'
    ],
    bestFor: 'Couples, friends, or training partners who want accountability and cost-sharing.'
  }
];

export default function Pricing(){
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="pricing container">
      <div className="pricing-header">
        <p className="subtitle">CHOOSE YOUR PLAN</p>
        <h2 className="section-title"><span>Choose your plan. Commit to progress. Transform together or individually</span></h2>
      </div>
      <div className="pricing-grid">
        {plans.map((p,i)=> {
          return (
            <div className={"plan" + (i===0? ' active':'')} key={i}>
              <div className="plan-header">
                <div className="indicator">
                  {[0,1,2].map(n=> (
                    <span key={n} className={n<=i? 'dot green':'dot gray'}></span>
                  ))}
                </div>
                <h3 className="plan-title">{p.title}</h3>
                <div className="plan-pricing">
                  <p className="price-per-session">{p.pricePerSession} / Session</p>
                  <p className="package-price">{p.packagePrice} / {p.packageSessions}</p>
                </div>
              </div>
              <div className="plan-body">
                <div className="plan-includes">
                  <h4>Includes:</h4>
                  <ul>
                    {p.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-best-for">
                  <h4>Best For:</h4>
                  <p>{p.bestFor}</p>
                </div>
              </div>
              <div className="plan-bottom">
                <button className="btn-join" onClick={scrollToContact}>JOIN NOW</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
