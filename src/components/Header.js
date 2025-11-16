import React, { useEffect, useState } from 'react';
import './Header.css';

const navItems = [
  { label: 'Home', hash: '#home' },
  { label: 'Get to know us', hash: '#get-to-know' },
  { label: 'Our Coaches', hash: '#trainers' },
  { label: 'Personal Training', hash: '#programs' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Blogs', hash: '#blog' },
  { label: 'Contact Us', hash: '#contact' }
];

export default function Header() {
  const [active, setActive] = useState(window.location.hash || navItems[0].hash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onHash() {
      setActive(window.location.hash || navItems[0].hash);
      setMenuOpen(false);
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img
            src={process.env.PUBLIC_URL + '/WhatsApp_Image_2025-11-09_at_10.11.55_PM-removebg-preview.png'}
            alt="Trainalogy logo"
            className="brand-logo"
          />
        </a>

        <nav className="main-nav">
          {navItems.map((item) => (
            <a
              key={item.hash + item.label}
              href={item.hash}
              className={active === item.hash ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                if (item.hash === '#contact') {
                  window.location.hash = '#contact';
                  setActive(item.hash);
                  setMenuOpen(false);
                  setTimeout(() => {
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  window.location.hash = item.hash;
                  setActive(item.hash);
                  setMenuOpen(false);
                  setTimeout(() => {
                    const sectionId = item.hash.replace('#', '');
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="join-btn desktop-join"
          href="#contact"
          onClick={e => {
            e.preventDefault();
            window.location.hash = '#contact';
            setTimeout(() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        >
          JOIN NOW
        </a>

        {/* Hamburger icon for mobile/tablet */}
        <button
          className={"menu-toggle" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            position: 'relative',
            zIndex: 10001,
            WebkitAppearance: 'none',
            appearance: 'none',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            display: window.innerWidth <= 900 ? 'flex' : 'none'
          }}
        >
          <span className="bar" style={{ pointerEvents: 'none' }} />
          <span className="bar" style={{ pointerEvents: 'none' }} />
          <span className="bar" style={{ pointerEvents: 'none' }} />
        </button>
      </div>
      {/* Mobile dropdown menu (always in DOM for smooth animation) */}
      <div className={"mobile-nav-overlay" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(false)}>
        <div id="mobile-nav" className="mobile-nav" onClick={e => e.stopPropagation()}>
          <button className="close-menu" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            &times;
          </button>
          {navItems.map((item) => (
            <a
              key={item.hash + item.label}
              href={item.hash}
              className={active === item.hash ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                if (item.hash === '#contact') {
                  window.location.hash = '#contact';
                  setActive(item.hash);
                  setMenuOpen(false);
                  setTimeout(() => {
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  window.location.hash = item.hash;
                  setActive(item.hash);
                  setMenuOpen(false);
                  setTimeout(() => {
                    const sectionId = item.hash.replace('#', '');
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="join-btn"
            onClick={e => {
              e.preventDefault();
              window.location.hash = '#contact';
              setMenuOpen(false);
              setTimeout(() => {
                const section = document.getElementById('contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </header>
  );
}
