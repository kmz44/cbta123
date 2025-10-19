import React, { useState } from 'react';

const monumentos = [
  { id: "uno", title: "Universario de 1981 - 1996", description: "Este monumento conmemora los 15 años del aniversario de la fundación de la institución." },
  { id: "tres", title: "Aniversario", description: "Monumento que celebra el aniversario de la institución y su crecimiento a lo largo del tiempo." },
  { id: "cuatro", title: "Un ambiente con más árboles", description: "Escultura que promueve el cuidado del medio ambiente mediante la plantación de más árboles." },
  { id: "cinco", title: "Un futuro libre y sin violencia", description: "El monumento refleja la visión de una sociedad sin violencia." },
  { id: "seis", title: "Aulas académicas", description: "Este monumento simboliza el esfuerzo por mejorar las instalaciones académicas." },
  { id: "siete", title: "Raíces indígenas", description: "Monumento que rinde homenaje a las culturas indígenas." },
  { id: "ocho", title: "Científicos más destacados", description: "Escultura que reconoce el trabajo de los científicos más influyentes." },
  { id: "nueve", title: "Calendario Maya", description: "Monumento que representa el calendario maya y su importancia histórica." },
  { id: "diez", title: "Establecimiento del laboratorio", description: "Monumento que conmemora el laboratorio de la institución." },
  { id: "once", title: "Inauguración del CBTA", description: "Monumento que celebra la inauguración del CBTA 134 en 1987." }
];

const Monumentos = () => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (monumento) => setModalInfo(monumento);
  const closeModal = () => setModalInfo(null);

  return (
    <div>

      <section className="monumentos">
        <div className="container">
          {monumentos.map((monumento) => (
            <div key={monumento.id} className="carss" onClick={() => openModal(monumento)}>
              <figure>
                <img src={`../assets/instalaciones/${monumento.id}.jpg`} alt={monumento.title} />
                <figcaption>{monumento.title}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      {modalInfo && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalInfo.title}</h3>
            <p>{modalInfo.description}</p>
            <button className="close-btn" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
        }

        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
          justify-items: center;
        }

        .carss {
          width: 200px;
          height: 200px;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .carss:hover img {
          transform: scale(1.05);
        }

        .carss figure {
          margin: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .carss img {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .modal {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 600px;
          text-align: center;
        }

        .close-btn {
          background-color: #007BFF;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          cursor: pointer;
        }

        .close-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Monumentos;
