import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Logo and contact */}
        <div className="footer-brand">
          <img src={process.env.PUBLIC_URL + '/WhatsApp_Image_2025-11-09_at_10.11.55_PM-removebg-preview.png'} alt="Trainology logo" className="footer-logo" />
          <p className="footer-desc">
            Personal Trainer in Dubai, The best personal trainer in Dubai to Wellness | best Calisthenics Training | best Parkour personal Trainer in Dubai
          </p>
          <div className="footer-contact">
            <div className="contact-row">
              <span className="label">Place</span>
              <a className="value" href="https://www.google.com/maps/place/Dubai" target="_blank" rel="noopener noreferrer">Dubai, United Arab Emirates</a>
            </div>
            <div className="contact-row">
              <span className="label">Email</span>
              <a className="value" href="mailto:trainology.dxb@gmail.com">trainology.dxb@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="label">Phone</span>
              <a className="value" href="tel:+971507314376">+971 50 731 4376</a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h5>OUR LINKS</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#get-to-know">Get to Know Us</a></li>
            <li><a href="#trainers">Our Coaches</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Schedule */}
        <div className="footer-schedule">
          <h5>SCHEDULE</h5>
          <ul>
            <li><span className="day">Monday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Tuesday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Wednesday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Thursday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Friday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Saturday</span><span className="time">09.00-21.00</span></li>
            <li><span className="day">Sunday</span><span className="time">09.00-21.00</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h5>NEWSLETTER</h5>
          <p>Sign up for our mailing list to get latest updates and offers</p>
          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button className="footer-submit" type="submit">
              <span>Subscribe</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-chip">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/trainology_dxb?igsh=cWNncXF6MjdweW9l" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-chip">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-chip">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">All Rights Reserved ©2025 at Trainology best personal trainer at Dubai</div>
    </footer>
  );
}
