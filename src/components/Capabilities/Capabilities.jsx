import React from 'react';
import './Capabilities.css';

const capabilitiesList = [
  {
    id: '01',
    title: 'B2B UPHOLSTERY',
    description: 'Professional upholstery solutions for commercial and institutional environments.',
  },
  {
    id: '02',
    title: 'OFFICE FURNITURE',
    description: 'Furniture solutions designed around productive professional spaces.',
  },
  {
    id: '03',
    title: 'HOTEL FURNITURE',
    description: 'Furniture concepts suitable for hospitality environments.',
  },
  {
    id: '04',
    title: 'SCHOOL FURNITURE',
    description: 'Practical furniture solutions for educational spaces.',
  },
  {
    id: '05',
    title: 'INDUSTRIAL LOCKERS',
    description: 'Functional locker solutions for workplaces and institutional environments.',
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="section capabilities-section">
      <div className="container">
        <div className="capabilities-header">
          <span className="eyebrow">Capabilities</span>
          <h2 className="capabilities-title">Furniture Designed Around the Way Spaces Work.</h2>
          <p className="capabilities-intro">
            Atelier Olive creates furniture solutions for professional spaces, combining practical requirements with considered design across offices, hospitality, education and industrial environments.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="capabilities-list">
            {capabilitiesList.map((item) => (
              <div key={item.id} className="capability-item">
                <span className="capability-number">{item.id}</span>
                <div className="capability-content">
                  <h3 className="capability-name">{item.title}</h3>
                  <p className="capability-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="capabilities-image-wrapper">
            <img src="/2.webp" alt="Atelier Olive Capabilities" className="capabilities-image" />
            <div className="image-caption">B2B UPHOLSTERY &amp; OFFICE FURNITURE</div>
          </div>
        </div>

        {/* Industrial Lockers Feature */}
        <div className="industrial-feature">
          <div className="industrial-content">
            <span className="eyebrow">Specialty</span>
            <h2 className="industrial-title">Functional Storage.<br/>Built for Demanding Spaces.</h2>
            <p className="industrial-desc">
              Industrial lockers engineered for high-traffic workplaces, institutional environments, and changing facilities where durability is non-negotiable.
            </p>
          </div>
          <img src="/5.webp" alt="Industrial Lockers" className="industrial-image" />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
