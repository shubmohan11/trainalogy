import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs(){
  const image = process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_aat34iaat34iaat3.png';
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
          <h2 className="why-title">WE ALWAYS PROVIDE<br/>BEST FITNESS SERVICE FOR 25 YEARS</h2>
          <p className="why-intro">This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.</p>
        </div>
      </div>

      <div className="why-stats">
        <div className="stat">
          <div className="stat-value">10</div>
          <div className="stat-label">Training Programs</div>
        </div>
        <div className="stat">
          <div className="stat-value">10</div>
          <div className="stat-label">Expert Trainer</div>
        </div>
        <div className="stat">
          <div className="stat-value">650</div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </section>
  )
}
