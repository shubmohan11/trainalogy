import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT FORM</h2>
        <form className="contact-form">
          <label htmlFor="firstName">first Name</label>
          <input type="text" id="firstName" name="firstName" />
          
          <label htmlFor="lastName">last name</label>
          <input type="text" id="lastName" name="lastName" />
          
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="phone">phone</label>
          <input type="tel" id="phone" name="phone" />
          
          <label htmlFor="location">Where are you based ?</label>
          <input type="text" id="location" name="location" />
          
          <label htmlFor="trainingTimes">Your preferred training times</label>
          <input type="text" id="trainingTimes" name="trainingTimes" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
          
          <div className="form-captcha">
            <div className="captcha-checkbox">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha">I'm not a robot</label>
            </div>
            <div className="recaptcha-badge">
              <div className="recaptcha-logo">reCAPTCHA</div>
              <div className="recaptcha-links">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                <span> - </span>
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
              </div>
            </div>
          </div>
          
          <button type="submit" className="form-submit">yfitnessdxb.com</button>
        </form>
      </div>
    </section>
  );
}
