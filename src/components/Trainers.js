import React, { useState } from 'react';
import './Trainers.css';

const trainers = [
  {
    name: 'Himanshu Chattha',
    exp: '10+ Years Experience',
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png',
    specialties: 'REPS-Certified Personal Trainer',
    description: `Himanshu Chattha is a REPS-certified personal trainer with over a decade of experience helping clients achieve powerful, long-lasting transformations. His coaching blends high-intensity training with precision, technique, and safety—ensuring every client progresses confidently and sustainably.

Whether you're just starting your fitness journey or striving to reach peak performance, Himanshu designs individualized programs that challenge your limits while protecting your joints and long-term health.

Services & Specialties
• Weight Loss & Body Recomposition
Structured, science-backed methods to reduce fat, build lean muscle, and redefine your physique.

• Strength Training & Functional Conditioning
Performance-focused sessions to improve strength, mobility, endurance, and athletic capability.

• Form Correction & Injury Prevention
Detailed movement assessments and corrections to enhance efficiency and reduce injury risk.

• In-Person & Online Coaching
Flexible coaching formats with continuous support, guidance, and accountability.

Training Philosophy
Every session is intentional, purposeful, and data-informed to maximize your progress.
Workouts are challenging yet safe, built to push limits without compromising technique.
Progress is driven by consistency, precision, and practical execution.
Scientific principles meet real-world methods for results you can maintain long-term.
You bring the effort — Himanshu brings the plan, structure, and accountability.`
  },
  {
    name: 'Manjeet Singh',
    exp: '12+ Years Experience',
    img: process.env.PUBLIC_URL + '/Gemini_Generated_Image_aat34iaat34iaat3.png',
    specialties: 'Strength, Mobility, and Pain-Free Performance—Built Around You',
    description: `Manjeet Singh is a certified fitness professional with over 12 years of experience in strength training, mobility development, and physique transformation. His coaching blends science-backed principles with a client-first approach, helping individuals train safely, progress consistently, and achieve lasting results.

Specializations
• Strength Training & Weight Loss
Structured programs to build muscle, lose fat, and improve overall performance.

• Mobility, Movement Quality & Pain-Free Lifting
Technique-led training with a focus on cervical, shoulder, and joint health.

• Rehab-Friendly Back Pain Programs
Safe, progressive routines designed to support chronic back pain recovery.

• Cancer Patient & Survivor Training
Compassionate, adaptive programs tailored to medical timelines and energy levels.

• Prenatal & Postnatal Training
Safe, supportive fitness plans for pre- and post-pregnancy strength and mobility.

What You Get With Manjeet
Personalized programming
Precise guidance on form and movement
Progressive, sustainable training plans
A supportive, accountability-driven coaching relationship

Whether you're a beginner, returning after an injury, or pursuing high performance—Manjeet brings the expertise and structure to help you train confidently and transform your health.`
  },
];

export default function Trainers() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleProfile = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="trainers" className="trainers container">
      <div className="trainers-header">
        <p className="subtitle">OUR TRAINERS</p>
        <h2 className="section-title"><span>TEAM OF EXPERT COACHES</span></h2>
      </div>
      <div className="trainer-grid">
        {trainers.map((t, i) => (
          <div className="trainer" key={i}>
            <img src={t.img} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{t.exp} of experience</p>
            {expandedIndex === i && (
              <div className="trainer-profile">
                <div className="trainer-specialties">
                  <strong>Specialties:</strong>
                  <span>{t.specialties}</span>
                </div>
                <p className="trainer-description">{t.description}</p>
              </div>
            )}
            <button
              className="view-profile"
              onClick={() => toggleProfile(i)}
            >
              {expandedIndex === i ? 'CLOSE PROFILE' : 'VIEW PROFILE'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
