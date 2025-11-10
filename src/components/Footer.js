import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Logo and contact */}
        <div className="footer-brand">
          <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Trainology logo" className="footer-logo" />
          <p className="footer-desc">
            Personal Trainer in Dubai , The best personal trainer in Dubai to Wellness<br/>
            | best Calisthenics Training | best Parkour personal Trainer in Dubai
          </p>
          <p className="footer-contact">
            <span role="img" aria-label="location">📍</span> Dubai,United Arab Emirates<br/>
            <span role="img" aria-label="email">✉️</span> y@yfitnessdxb.com<br/>
            <span role="img" aria-label="phone">📞</span> 971589646031
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h5>OUR LINKS</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#get-to-know">Get to Know Us</a></li>
            <li><a href="#trainers">Our Coaches</a></li>
            <li><a href="#programs">Personal Training</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Schedule */}
        <div className="footer-schedule">
          <h5>SCHEDULE</h5>
          <ul>
            <li>Monday : 09.00-21.00</li>
            <li>Tuesday : 09.00-21.00</li>
            <li>Wednesday : 09.00-21.00</li>
            <li>Thursday : 09.00-21.00</li>
            <li>Friday : 09.00-21.00</li>
            <li>Saturday : 09.00-21.00</li>
            <li>Sunday : 09.00-21.00</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h5>NEWSLETTER</h5>
          <p>Sign up for our mailing list to get latest updates and offers</p>
          <form>
            <input type="email" placeholder="Your Email" />
            {/* Simulated captcha box */}
            <div className="footer-captcha">
              <input type="checkbox" id="captcha" /> <label htmlFor="captcha">I'm not a robot</label>
            </div>
            <button className="footer-submit" type="submit">&#9654;</button>
          </form>
          <div className="footer-social">
            <a href="#"><span role="img" aria-label="facebook">� Facebook</span></a>
            <a href="#"><span role="img" aria-label="instagram">📷 Instagram</span></a>
            <a href="#"><span role="img" aria-label="youtube">▶️ YouTube</span></a>
          </div>
        </div>
      </div>
      <div className="copyright">All Rights Reserved ©2025 at yfitnessdxb best personal trainer at Dubai</div>
    </footer>
  );
}
