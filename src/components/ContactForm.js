import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT FORM</h2>
        <form className="contact-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
          
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
          
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="phone">Phone</label>
          <div className="phone-input-group">
            <select className="country-code" name="countryCode">
              <option value="+971">🇦🇪 +971 (UAE)</option>
              <option value="+1">🇺🇸 +1 (US)</option>
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+86">🇨🇳 +86 (China)</option>
              <option value="+81">🇯🇵 +81 (Japan)</option>
              <option value="+82">🇰🇷 +82 (S. Korea)</option>
              <option value="+65">🇸🇬 +65 (Singapore)</option>
              <option value="+49">🇩🇪 +49 (Germany)</option>
              <option value="+33">🇫🇷 +33 (France)</option>
              <option value="+39">🇮🇹 +39 (Italy)</option>
              <option value="+34">🇪🇸 +34 (Spain)</option>
              <option value="+7">🇷🇺 +7 (Russia)</option>
              <option value="+55">🇧🇷 +55 (Brazil)</option>
              <option value="+27">🇿🇦 +27 (S. Africa)</option>
              <option value="+92">🇵🇰 +92 (Pakistan)</option>
              <option value="+880">🇧🇩 +880 (Bangladesh)</option>
              <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
              <option value="+20">🇪🇬 +20 (Egypt)</option>
            </select>
            <input type="tel" id="phone" name="phone" placeholder="123 456 7890" />
          </div>
          
          <label htmlFor="location">Where are you based ?</label>
          <input type="text" id="location" name="location" />
          
          <label htmlFor="trainingTimes">Your preferred training times</label>
          <input type="text" id="trainingTimes" name="trainingTimes" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
          
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
