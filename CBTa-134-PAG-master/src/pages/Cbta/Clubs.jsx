import { useState } from "react";

const clubsData = {
  robotica: {
    title: "Robótica",
    description: "Un club especializado en el desarrollo de proyectos de robótica y tecnología.",
    image: "/assets/clubs/robot.jpg",
  },
  basquet: {
    title: "Básquet",
    description: "Practica y mejora tus habilidades en baloncesto.",
    image: "/assets/clubs/basquet.jpg",
  },
  rondalla: {
    title: "Rondalla",
    description: "Club musical que interpreta música tradicional.",
    image: "/assets/clubs/rondalla.jpg",
  },
  escolta: {
    title: "Escolta",
    description: "Club de disciplina y formación de escolta.",
    image: "/assets/clubs/escolta.jpeg",
  },
  voli: {
    title: "Vóley",
    description: "Partidos y técnicas de vóley para todos.",
    image: "/assets/clubs/voli.jpg",
  },
  banda: {
    title: "Banda de Guerra",
    description: "Formación musical para ceremonias y eventos.",
    image: "/assets/clubs/banda.jpeg",
  },
};

export default function Clubes() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <>
      <main>
        <h1>Clubes</h1>
        <section className="clubes">
          <div className="grid-container">
            {Object.entries(clubsData).map(([id, club]) => (
              <div key={id} className="card" onClick={() => setSelectedClub(club)}>
                <figure>
                  <img src={club.image} alt={club.title} />
                  <figcaption>{club.title}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>

        {selectedClub && (
          <div className="modal" style={{ display: "flex" }}>
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelectedClub(null)}>×</button>
              <h2>{selectedClub.title}</h2>
              <img src={selectedClub.image} alt={selectedClub.title} />
              <p>{selectedClub.description}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
