import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h4>Trainology</h4>
          <p>Dubai, United Arab Emirates<br/>y@yfitnessdxb.com</p>
        </div>
        <div>
          <h5>Schedule</h5>
          <p>Mon-Sat: 09.00-21.00<br/>Sunday: 09.00-21.00</p>
        </div>
        <div>
          <h5>Newsletter</h5>
          <form>
            <input type="email" placeholder="Email" />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="copyright">All Rights Reserved ©2025 Trainology</div>
    </footer>
  );
}
