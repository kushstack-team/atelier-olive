import React from 'react';
import './Process.css';

const processSteps = [
  {
    id: '01',
    title: 'DISCUSS',
    description: 'Tell us about your space, requirements and project.'
  },
  {
    id: '02',
    title: 'DEFINE',
    description: 'Establish the furniture requirements and direction.'
  },
  {
    id: '03',
    title: 'DEVELOP',
    description: 'Develop the appropriate furniture solution.'
  },
  {
    id: '04',
    title: 'DELIVER',
    description: 'Move toward implementation and completion.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="process-header">
          <span className="eyebrow">Method</span>
          <h2 className="process-title">How We Work</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <span className="step-number">{step.id}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
