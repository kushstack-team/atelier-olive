import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-content">
          <span className="eyebrow">Project Inquiry</span>
          <h2 className="contact-title">Have a Space in Mind?</h2>
          <p className="contact-desc">
            Tell Atelier Olive what you're building, furnishing or upgrading.
          </p>
          
          <div className="contact-methods">
            <a href="tel:+250798890880" className="btn btn-primary contact-cta">
              START A CONVERSATION
            </a>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Phone</span>
                <a href="tel:+250798890880" className="detail-value">0798 890 880</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">KN 3 Rd, Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
