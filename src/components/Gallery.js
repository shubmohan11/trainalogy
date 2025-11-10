import React from 'react';
import './Gallery.css';

const images = [
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.37 PM.jpeg',
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.37 PM (1).jpeg',
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.38 PM.jpeg',
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.38 PM (1).jpeg',
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.39 PM (1).jpeg',
  process.env.PUBLIC_URL + '/gallery/WhatsApp Image 2025-11-10 at 4.15.40 PM.jpeg',
  process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_r8a5bjr8a5bjr8a5.png',
  process.env.PUBLIC_URL + '/gallery/Gemini_Generated_Image_vdcsguvdcsguvdcs.png'
];

export default function Gallery(){
  return (
      <section id="gallery" className="gallery">
        <div className="container">
          <p className="subtitle">GALLERY</p>
          <h2>OUR GALLERY</h2>
        </div>
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
