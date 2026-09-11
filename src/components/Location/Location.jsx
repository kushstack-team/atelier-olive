import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-panel">
          <h3 className="location-title">ATELIER OLIVE</h3>
          <p className="location-subtitle">Furniture Manufacturer</p>
          
          <div className="location-info">
            <p>KN 3 Rd, Kigali, Rwanda</p>
            <p>0798 890 880</p>
            <p className="location-hours">Closed &middot; Opens 8 am</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
