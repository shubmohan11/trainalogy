import React from 'react';
import './WhoWeAre.css';

// Inline SVG icons
const StrengthIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 12h10" stroke="#f1c40f" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M5 8v8M7 7v10M17 7v10M19 8v8" stroke="#f1c40f" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const MachineIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="5" y="6.5" width="14" height="13" rx="2" stroke="#f1c40f" strokeWidth="1.6"/>
    <path d="M9 6.5V5h6v1.5" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M9 13l2 2 4-4" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// New semantic icons for core programs
const ScienceIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3v6" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M7 21c2-3 6-3 8 0" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M4 12c2 2 6 2 8 0" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2.2" stroke="#f1c40f" strokeWidth="1.6"/>
  </svg>
);

const PersonalizedIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#f1c40f" strokeWidth="1.6"/>
    <path d="M8 8h8" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 12h8" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="16" cy="17" r="1" fill="#f1c40f"/>
  </svg>
);

const CoachIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="8" r="2.4" stroke="#f1c40f" strokeWidth="1.6"/>
    <path d="M5 20c1.5-3 4.5-4 7-4s5.5 1 7 4" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M3 6h18" stroke="#f1c40f" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const ResultsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4 18h16" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M7 14v-4l3 2 4-6 3 6" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StageIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3v6" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M6 21v-6a6 6 0 0112 0v6" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const HolisticIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3c3 3 6 6 6 9s-3 6-6 9c-3-3-6-6-6-9s3-6 6-9z" stroke="#f1c40f" strokeWidth="1.4"/>
    <path d="M12 7v6l3 3" stroke="#f1c40f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SafeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l6 3v5c0 5-3 9-6 12-3-3-6-7-6-12V5l6-3z" stroke="#f1c40f" strokeWidth="1.4"/>
    <path d="M9 12h6" stroke="#f1c40f" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const TrustIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8l3-6z" stroke="#f1c40f" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);

export default function WhoWeAre(){
  const image = process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png';
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="who container" id="who-we-are">
      <div className="who-inner">
        <div className="who-copy">
          <p className="who-subtitle">WHO WE ARE</p>
          <h2 className="who-title">Shape Your Body with Expert Guidance</h2>
          <p className="who-intro">
            At Trainology, we specialize in delivering personalized fitness experiences. Whether your goal is strength,
            fat loss, mobility, or overall wellness, our certified trainers create programs that match your body, pace,
            and lifestyle.
          </p>
          <p className="who-intro">
            Our mission is simple — to help you become the strongest, healthiest version of yourself.
          </p>

          <h3 className="who-subtitle" style={{ marginTop: 20 }}>OUR CORE PROGRAMS</h3>
  </div>

        <div className="who-media">
          <div className="who-media-frame">
            <img src={image} alt="who we are" />
          </div>
          <button className="who-cta" onClick={scrollToContact}>FREE CONSULTATION</button>
        </div>

        <div className="who-list">
          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <ScienceIcon />
            </div>
            <div className="who-item-copy">
              <h4>Science-Based, Purpose-Driven Programs</h4>
              <p>
                Every program — from metabolic conditioning to post-cancer recovery — is rooted in evidence-based
                training methods designed for safety, effectiveness, and long-term results.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <PersonalizedIcon />
            </div>
            <div className="who-item-copy">
              <h4>Truly Personalized Coaching</h4>
              <p>
                No templates. No recycled workouts. Each client gets a plan tailored to their goals, fitness level,
                movement patterns, and lifestyle.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <CoachIcon />
            </div>
            <div className="who-item-copy">
              <h4>Expert Coaches for Every Need</h4>
              <p>
                Our team includes specialists in fat loss, athletic performance, rehabilitation, pre/postpartum
                training, and medical-informed exercise — ensuring expert care regardless of your starting point.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <ResultsIcon />
            </div>
            <div className="who-item-copy">
              <h4>Results That Go Beyond Aesthetics</h4>
              <p>
                We focus on strength, mobility, performance, posture, metabolism, and daily function — improving how
                you live, not just how you look.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <StageIcon />
            </div>
            <div className="who-item-copy">
              <h4>Programs for Every Stage of Life</h4>
              <p>
                Whether you're an athlete, a new mother, recovering from pain, or rebuilding strength after treatment,
                we provide a safe, supportive, and effective path forward.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <HolisticIcon />
            </div>
            <div className="who-item-copy">
              <h4>A Holistic Approach to Health &amp; Performance</h4>
              <p>
                We combine training with lifestyle education, mobility work, recovery strategies, and habit coaching
                to create sustainable results.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <SafeIcon />
            </div>
            <div className="who-item-copy">
              <h4>Safe, High-Level Training Environment</h4>
              <p>
                Quality equipment, private coaching, and a results-first culture create an environment where progress
                is measurable and supported.
              </p>
            </div>
          </div>

          <div className="who-item">
            <div className="who-icon" aria-hidden>
              <TrustIcon />
            </div>
            <div className="who-item-copy">
              <h4>Proven Transformations and Client Trust</h4>
              <p>
                Clients choose Trainology because they see real improvements — reduced pain, better mobility, faster
                fat loss, stronger performance, and increased confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
