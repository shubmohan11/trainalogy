import React, { useState } from 'react';
import './WhatMakes.css';

const features = [
  {
    // Metabolic Training Program
    title: 'Metabolic Training Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.40 PM.jpeg',
    subtitle: 'Boost your metabolism. Burn calories. Feel unstoppable.',
    intro: 'High-energy, science-based training to increase calorie burn and overall conditioning.',
    includes: [
      'High-intensity interval training (HIIT)',
      'Functional strength circuits',
      'Speed, agility, and power sessions',
      'Conditioning drills to increase metabolic rate'
    ],
    who: 'Individuals looking for fast and effective full-body conditioning and long-lasting calorie burn.',
    benefits: [
      'Rapid fat loss and muscle toning',
      'Increased stamina and athletic performance',
      'Improved heart and lung health',
      'Boosted metabolism even after sessions'
    ]
  },
  {
    // Fat Loss Program
    title: 'Fat Loss Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.41 PM (1).jpeg',
    subtitle: 'Sustainable fat loss through training, discipline, and education.',
    intro: 'A structured program combining progressive resistance work, metabolic conditioning, and nutrition guidance for lasting change.',
    includes: [
      'Progressive strength training',
      'Cardio intervals and metabolic circuits',
      'Lifestyle & nutrition guidance',
      'Regular body composition tracking'
    ],
    who: 'Anyone wanting to reduce body fat, improve fitness, and build lean muscle safely.',
    benefits: [
      'Healthy and lasting fat loss',
      'Boosted energy and metabolism',
      'Better posture and body confidence'
    ]
  },
  {
    // Shoulder & Back Pain Relief
    title: 'Shoulder & Back Pain Relief Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.41 PM.jpeg',
    subtitle: 'Improve mobility. Reduce pain. Restore function.',
    intro: 'Therapeutic and corrective work to restore movement quality and reduce chronic tension.',
    includes: [
      'Mobility and flexibility training',
      'Core strengthening and stabilization',
      'Corrective posture exercises',
      'Strengthening of weak muscle groups'
    ],
    who: 'People struggling with chronic tension, postural issues, or mild shoulder/back pain.',
    benefits: [
      'Reduced pain and stiffness',
      'Better posture and alignment',
      'Enhanced daily mobility',
      'Lower injury risk'
    ]
  },
  {
    // Pre & Postpartum
    title: 'Pre & Postpartum Fitness Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.42 PM.jpeg',
    subtitle: 'Safe, supportive training for mothers at every stage.',
    intro: 'Careful, trimester-aware programming and postpartum recovery plans to keep mothers safe and strong.',
    includes: [
      'Pelvic floor & core activation',
      'Breathwork and posture alignment',
      'Strength sessions tailored for each trimester',
      'Postpartum recovery & return-to-exercise guidance'
    ],
    who: 'Expectant and postpartum mothers seeking safe, effective training.',
    benefits: [
      'Reduced pregnancy discomfort',
      'Improved strength and mobility',
      'Easier labor and postpartum recovery',
      'Safe return to fitness'
    ]
  },
  {
    // Post-Cancer Recovery
    title: 'Post-Cancer Treatment Recovery Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.42 PM (1).jpeg',
    subtitle: 'Gentle, supportive training to rebuild strength and confidence.',
    intro: 'Medically-informed, fatigue-aware sessions that prioritize safety and gradual progress.',
    includes: [
      'Low-impact, medically informed exercise',
      'Mobility, stretching, and functional movement',
      'Fatigue-friendly strength sessions',
      'Stress management & breathwork techniques'
    ],
    who: 'Cancer survivors transitioning back into physical activity.',
    benefits: [
      'Improved energy and daily function',
      'Restored strength and mobility',
      'Reduced stiffness and treatment-related fatigue',
      'Supportive, healing-focused environment'
    ]
  },
  {
    // Sport-Specific Performance
    title: 'Sport-Specific Performance Program',
    img: process.env.PUBLIC_URL + '/whatmakes/WhatsApp Image 2025-12-21 at 5.38.42 PM (2).jpeg',
    subtitle: 'Train like an athlete. Perform like a champion.',
    intro: 'Performance-centered programming that builds strength, speed, and sport-specific skills.',
    includes: [
      'Strength and power training',
      'Speed, agility, and quickness (SAQ) drills',
      'Sport-specific conditioning and skills',
      'Injury prevention strategies'
    ],
    who: 'Youth athletes, competitors, and professionals seeking peak performance.',
    benefits: [
      'Improved speed, strength, and reaction time',
      'Better sport-specific skills',
      'Enhanced performance at all levels',
      'Reduced injury risk'
    ]
  }
];

export default function WhatMakes() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="what-makes">
      <div className="what-makes-container">
        <h2 className="what-makes-heading">OUR TRAINING PROGRAMS</h2>
        <p className="what-makes-intro">We offer specialized, science-based training programs designed to help you achieve your health, performance, and lifestyle goals. Each program is personalized, safe, and guided by expert coaching to ensure exceptional results.</p>

        <div className="what-makes-grid">
          {features.map((feature, i) => (
            <div className="what-makes-card" key={i}>
              {feature.img && (
                <div className="card-image">
                  <img src={feature.img} alt={feature.title} />
                </div>
              )}
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                {feature.subtitle && <h4 className="card-subtitle">{feature.subtitle}</h4>}

                {/* Collapsed preview: short intro (first 120 chars) */}
                {expandedIndex !== i && feature.intro && (
                  <p className="card-description">
                    {feature.intro.length > 120 ? feature.intro.slice(0, 120) + '…' : feature.intro}
                  </p>
                )}

                {/* Expanded: full details */}
                {expandedIndex === i && (
                  <>
                    {feature.intro && <p className="card-description">{feature.intro}</p>}

                    {feature.includes && (
                      <div className="card-section">
                        <h5 className="card-section-heading">What This Program Includes:</h5>
                        <ul className="card-list">
                          {feature.includes.map((inc, idx) => (
                            <li key={idx}>{inc}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {feature.who && (
                      <p className="card-who"><strong>Who It’s For:</strong> {feature.who}</p>
                    )}

                    {feature.benefits && (
                      <div className="card-section">
                        <h5 className="card-section-heading">Benefits:</h5>
                        <ul className="card-list">
                          {feature.benefits.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                <button
                  className="btn-learn-more"
                  onClick={() => toggleExpanded(i)}
                >
                  {expandedIndex === i ? 'SHOW LESS' : 'LEARN MORE'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
