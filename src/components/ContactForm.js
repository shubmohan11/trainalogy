import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending…' });

    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    // Basic validation
    if (!values.firstName || !values.lastName || !values.email) {
      setStatus({ type: 'error', message: 'Please fill First name, Last name and Email.' });
      return;
    }

    const fullPhone = `${values.countryCode || ''} ${values.phone || ''}`.trim();

    const formatted = `New enquiry from Trainology\n\n` +
      `Name: ${values.firstName} ${values.lastName}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${fullPhone}\n` +
      `Location: ${values.location || '-'}\n` +
      `Preferred Times: ${values.trainingTimes || '-'}\n` +
      `Message: ${values.message || '-'}\n`;

  // EmailJS configuration (updated)
  const serviceId = 'service_2jev9yi';
  const templateId = 'template_wre1usw';
  const publicKey = 'CCcK_Zfr-mkpre_wl';

    try {
      if (serviceId !== 'YOUR_SERVICE_ID' && templateId !== 'YOUR_TEMPLATE_ID') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_email: 'trainology.dxb@gmail.com',
            from_name: `${values.firstName} ${values.lastName}`,
            from_email: values.email,
            phone: fullPhone,
            location: values.location || '-',
            preferred_times: values.trainingTimes || '-',
            message: values.message || '-',
            message_full: formatted,
          },
          { publicKey }
        );
        setStatus({ type: 'success', message: 'Thanks! Your enquiry has been sent.' });
        form.reset();
      } else {
        // Fallback: opens mail client as a basic alternative when EmailJS is not configured
        const subject = encodeURIComponent('New enquiry from Trainology');
        const body = encodeURIComponent(formatted);
        window.location.href = `mailto:trainology.dxb@gmail.com?subject=${subject}&body=${body}`;
        setStatus({ type: 'success', message: 'Opening your mail app to send the enquiry.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Could not send right now. Please try again.' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT FORM</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
          
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
          
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" />
          
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
          <input type="text" id="location" name="location" placeholder="City, Country" />
          
          <label htmlFor="trainingTimes">Your preferred training times</label>
          <input type="text" id="trainingTimes" name="trainingTimes" placeholder="e.g., Morning 6-8 AM, Evening 6-8 PM" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Tell us about your fitness goals..."></textarea>
          
          <button type="submit" className="form-submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Sending…' : 'Submit'}
          </button>
          {status.type !== 'idle' && status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
