import React from 'react';

const Galeria = () => {
  const imagenes = [
    { src: '../assets/galeria/1.jpg', alt: 'Foto 1' },
    { src: '../assets/galeria/2.jpg', alt: 'Foto 2' },
    { src: '../assets/galeria/3.jpg', alt: 'Foto 3' },
    { src: '../assets/galeria/4.jpg', alt: 'Foto 4' },
    { src: '../assets/galeria/5.jpg', alt: 'Foto 5' },
    { src: '../assets/galeria/6.jpg', alt: 'Foto 6' },
  ];

  return (
    <>
 

      <main>
        <section className="animated fadeIn">
          <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Galería</h2>
          <div className="gallery">
            {imagenes.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="animated fadeInUp"
              />
            ))}
          </div>
        </section>
      </main>


      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .gallery img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .gallery img:hover {
          transform: scale(1.05);
        }


      `}</style>
    </>
  );
};

export default Galeria;
