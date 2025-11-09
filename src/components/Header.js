import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img
            src={process.env.PUBLIC_URL + "/WhatsApp Image 2025-11-09 at 10.12.03 PM.jpeg"}
            alt="Trainology logo"
            className="brand-logo"
          />
          <span className="brand-text">Trainology</span>
        </a>
        <nav className="main-nav">
          <a href="#programs">Programs</a>
          <a href="#trainers">Trainers</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
          <a className="contact-btn" href="/contact-us/">Contact</a>
        </nav>
      </div>
    </header>
  );
}
