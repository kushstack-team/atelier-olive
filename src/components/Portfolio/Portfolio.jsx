import React, { useState } from 'react';
import './Portfolio.css';
import Lightbox from '../UI/Lightbox';

const portfolioImages = [
  { id: 1, src: '/3.webp', alt: 'Atelier Olive Selected Work 1', caption: 'SELECTED WORK', className: 'large' },
  { id: 2, src: '/4.webp', alt: 'Atelier Olive Selected Work 2', caption: 'OFFICE FURNITURE', className: 'stacked' },
  { id: 3, src: '/6.webp', alt: 'Atelier Olive Selected Work 3', caption: 'HOTEL FURNITURE', className: 'stacked' },
  { id: 4, src: '/7.webp', alt: 'Atelier Olive Selected Work 4', caption: 'SCHOOL FURNITURE', className: 'wide' }
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <span className="eyebrow">Portfolio</span>
          <h2 className="portfolio-title">Made for Real Spaces.</h2>
        </div>

        <div className="portfolio-gallery">
          <div className="gallery-col gallery-col-left">
            <div 
              className="gallery-item large" 
              onClick={() => openLightbox(0)}
            >
              <div className="image-wrapper">
                <img src={portfolioImages[0].src} alt={portfolioImages[0].alt} loading="lazy" />
              </div>
              <div className="gallery-caption">{portfolioImages[0].caption}</div>
            </div>
          </div>
          
          <div className="gallery-col gallery-col-right">
            <div 
              className="gallery-item stacked" 
              onClick={() => openLightbox(1)}
            >
              <div className="image-wrapper">
                <img src={portfolioImages[1].src} alt={portfolioImages[1].alt} loading="lazy" />
              </div>
              <div className="gallery-caption">{portfolioImages[1].caption}</div>
            </div>
            
            <div 
              className="gallery-item stacked" 
              onClick={() => openLightbox(2)}
            >
              <div className="image-wrapper">
                <img src={portfolioImages[2].src} alt={portfolioImages[2].alt} loading="lazy" />
              </div>
              <div className="gallery-caption">{portfolioImages[2].caption}</div>
            </div>
          </div>
        </div>
        
        <div className="gallery-row-wide">
          <div 
            className="gallery-item wide" 
            onClick={() => openLightbox(3)}
          >
            <div className="image-wrapper">
              <img src={portfolioImages[3].src} alt={portfolioImages[3].alt} loading="lazy" />
            </div>
            <div className="gallery-caption">{portfolioImages[3].caption}</div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={portfolioImages} 
          currentIndex={currentImageIndex} 
          onClose={() => setLightboxOpen(false)}
          onNavigate={(newIndex) => setCurrentImageIndex(newIndex)}
        />
      )}
    </section>
  );
};

export default Portfolio;
