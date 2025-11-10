import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>GET IN TOUCH</h2>
          <p>Ready to transform your body? Book a free consultation with a certified personal trainer in Dubai today. Let's start your fitness journey together!</p>
          <div className="contact-details">
            <p><strong>ADDRESS</strong><br/>Dubai,United Arab Emirates</p>
            <p><strong>TELEPHONES</strong><br/>+971586946031</p>
            <p><strong>SCHEDULE</strong><br/>Mon-Sat 09.00 - 21.00<br/>Sun 10.00 - 17.00</p>
          </div>
        </div>
        <div className="contact-form-box">
          <h2>CONTACT FORM</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="first Name" />
              <input type="text" placeholder="last name" />
            </div>
            <input type="email" placeholder="Email address" />
            <textarea placeholder="phone" />
            <input type="text" placeholder="Where are you based ?" />
            <input type="text" placeholder="Your preferred training times" />
            <textarea placeholder="Message" />
            <div className="form-captcha">
              <input type="checkbox" id="captcha" /> <label htmlFor="captcha">I'm not a robot</label>
              {/* Simulated reCAPTCHA box */}
              <div className="recaptcha-box">reCAPTCHA</div>
            </div>
            <button type="submit" className="form-submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
}
