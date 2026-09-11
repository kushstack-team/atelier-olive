import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="/background.jpg" 
          alt="Atelier Olive Furniture Manufacturing" 
          className="hero-image"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-watermark-container">
        <h1 
          className="hero-watermark"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          ATELIER OLIVE
        </h1>
      </div>

      <div className="container hero-content-container">
        <div className="hero-content">
          <span className="eyebrow">Atelier Olive</span>
          <h2 className="hero-headline">Furniture Built for the Spaces That Matter.</h2>
          <p className="hero-description">
            Furniture solutions for offices, hotels, schools and professional environments — crafted with a focus on function, durability and design.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Discuss Your Project</a>
            <a href="#work" className="btn btn-secondary">Explore Our Work</a>
          </div>
          
          <div className="hero-contact-info">
            <a href="tel:+250798890880" className="hero-phone">0798 890 880</a>
          </div>
        </div>

        <div className="hero-meta">
          <p>KIGALI, RWANDA</p>
          <p>OFFICE &middot; HOTEL &middot; SCHOOL &middot; INDUSTRIAL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
