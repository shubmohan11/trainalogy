import React, { useEffect, useState } from 'react';
import './Header.css';
import MobileMenuPortal from './MobileMenuPortal';

const navItems = [
  { label: 'Home', hash: '#home' },
  { label: 'Get to know us', hash: '#get-to-know' },
  { label: 'Our Coaches', hash: '#trainers' },
  { label: 'Personal Training', hash: '#programs' },
  { label: 'BMI Calculator', hash: '#bmi-calculator' },
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

        {/* Floating hamburger for mobile/tablet (fixed, outside stacking contexts) */}
        <button
          className={"floating-menu-toggle" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </div>
      {/* Mobile menu rendered via portal to <body> for iOS reliability */}
      <MobileMenuPortal open={menuOpen}>
        <div className={"mobile-portal-overlay" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(false)}>
          <nav id="mobile-drawer" className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
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
          </nav>
        </div>
      </MobileMenuPortal>
    </header>
  );
}
