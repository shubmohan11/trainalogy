import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const image = process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_aat34iaat34iaat3.png';

  function useCounterAnimation(target, duration = 1200) {
    const [count, setCount] = useState(0);
    const ref = useRef();
    
    useEffect(() => {
      const animate = () => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;
        let incrementTime = Math.floor(duration / end);
        
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) {
            clearInterval(timer);
          }
        }, incrementTime);
        
        return timer;
      };
      
      // Initial animation
      const initialTimer = animate();
      
      // Repeat animation every 10 seconds
      const repeatInterval = setInterval(() => {
        setCount(0); // Reset to 0
        setTimeout(() => {
          animate();
        }, 100); // Small delay before restarting
      }, 10000);
      
      return () => {
        clearInterval(initialTimer);
        clearInterval(repeatInterval);
      };
    }, [target, duration]);
    
    return count;
  }

  const trainingPrograms = useCounterAnimation(4);
  const expertTrainer = useCounterAnimation(5);
  const happyClients = useCounterAnimation(50, 100);

  return (
    <section className="why container" id="why-choose-us">
      <div className="why-inner">
        <div className="why-media">
          <div className="why-media-frame">
            <img src={image} alt="why choose us" />
          </div>
        </div>

        <div className="why-copy">
          <p className="why-subtitle">WHY CHOOSE US</p>
          <h2 className="why-title">Experience the Art of Elite Fitness</h2>
          <p className="why-intro">
            With 5 years of distinguished excellence, Trainology offers a level of personal training crafted for those who expect nothing but the best. Our certified experts combine precision, performance, and personalization to deliver a transformation experience that feels exclusive at every step.
          </p>
          <p className="why-intro">
            We curate a refined, motivating, and private training atmosphere—where your goals are treated with the highest attention, and your journey is guided with unmatched professionalism.
          </p>
          <p className="why-intro">
            <strong>At Trainology, fitness isn't just a service.<br/>It's a luxury experience designed around you.</strong>
          </p>
        </div>
      </div>

      <div className="why-stats">
        <div className="stat">
          <div className="stat-value">
            <span key={trainingPrograms} className="stat-value-inner">{trainingPrograms}</span>
          </div>
          <div className="stat-label">Training Programs</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            <span key={expertTrainer} className="stat-value-inner">{expertTrainer}</span>
          </div>
          <div className="stat-label">Expert Trainer</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            <span key={happyClients} className="stat-value-inner">{happyClients}</span>
          </div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </section>
  );
}
