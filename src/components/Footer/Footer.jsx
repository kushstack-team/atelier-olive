import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">ATELIER OLIVE</h2>
          <p className="footer-desc">Furniture Manufacturer<br/>Kigali, Rwanda</p>
        </div>
        
        <div className="footer-links">
          <h4 className="footer-heading">Navigation</h4>
          <nav>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact</h4>
          <p><a href="tel:+250798890880">0798 890 880</a></p>
          <p>KN 3 Rd, Kigali, Rwanda</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Atelier Olive. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
