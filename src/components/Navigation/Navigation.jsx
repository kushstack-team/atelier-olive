import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-brand">
          ATELIER OLIVE
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop">
          <a href="#work" className="nav-link">Work</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions-desktop">
          <a href="#contact" className="btn btn-primary btn-sm">Discuss A Project</a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#work" className="mobile-nav-link" onClick={toggleMobileMenu}>Work</a>
          <a href="#capabilities" className="mobile-nav-link" onClick={toggleMobileMenu}>Capabilities</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</a>
          <a href="#process" className="mobile-nav-link" onClick={toggleMobileMenu}>Process</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a>
          <a href="#contact" className="btn btn-primary" onClick={toggleMobileMenu} style={{marginTop: '2rem'}}>Discuss A Project</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
