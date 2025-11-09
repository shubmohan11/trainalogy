import React from 'react';
import './Gallery.css';

const images = [
  'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.57_90522cc7-scaled-e1749726227207.jpg',
  'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.56_65b81028-scaled.jpg',
  'https://yfitnessdxb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-08.40.58_d3db4654-scaled.jpg'
];

export default function Gallery(){
  return (
    <section id="gallery" className="gallery container">
      <h2>OUR GALLERY</h2>
      <div className="gallery-grid">
        {images.map((src,i)=> (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
