import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/camaleon.jpg', // Ruta de la primera imagen
    '/images/campus.png',   // Ruta de la segunda imagen
  ];

  // Cambia automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="slides-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="slides-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;