import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex]);

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <button style={styles.closeBtn} onClick={onClose} aria-label="Close lightbox">✕</button>
      
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <button style={styles.navBtn} onClick={handlePrev} aria-label="Previous image">‹</button>
        
        <div style={styles.imageContainer}>
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            style={styles.image}
          />
          <div style={styles.caption}>{images[currentIndex].caption}</div>
        </div>
        
        <button style={styles.navBtn} onClick={handleNext} aria-label="Next image">›</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(28, 28, 26, 0.95)',
    zIndex: 2000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  closeBtn: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    color: '#F6F4EF',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 2001,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%',
    maxHeight: '90vh',
  },
  image: {
    maxHeight: '80vh',
    objectFit: 'contain',
  },
  caption: {
    color: '#F6F4EF',
    marginTop: '1rem',
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    color: '#F6F4EF',
    fontSize: '4rem',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.3s ease',
  }
};

export default Lightbox;
