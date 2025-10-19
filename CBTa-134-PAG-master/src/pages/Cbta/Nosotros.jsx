import React from 'react';

const Nosotros = () => {
  return (
    <>
      <main>
        <section className="animated fadeInUp">
          <h2>Nosotros</h2>
          <p>
            El Centro de Bachillerato Tecnológico Agropecuario (CBTA) no. 134 se ha convertido en una de las mejores oportunidades para que las y los jóvenes realicen sus estudios de nivel medio superior, porque al término de estos, no solo reciben su certificado sino también un título de carrera técnica.
            La escuela se ubica en el municipio de San Francisco Tetlanohcan, cuenta con un área total de 27 hectáreas, de ellas, 5 ya tienen construcción con aulas, canchas y áreas para el fomento agropecuario, que la hace única en su estilo en todo el Estado de Tlaxcala.
            Los estudiantes pueden optar por la carrera Técnico Agropecuario, Técnico en Sistemas de Producción Pecuaria, Técnico en Programación, Técnico en Contabilidad y Técnico en Ofimática.
          </p>
          <div className="cbta-container">
            <img src="../assets/clubs/escolta.jpeg" alt="Logo CBTA Tlaxcala" />
          </div>
        </section>

        <section className="clubes-monumentos animated fadeInUp">
          <h2>Misión, Visión y Lema</h2>
          <div className="clubes-container">
            <div className="club">
              <h3>Misión</h3>
              <p>
                Contribuir activamente en la formación integral de nuestros estudiantes del bachillerato tecnológico con un enfoque de desarrollo sustentable y emprendedor que los integre plenamente a la sociedad.
              </p>
            </div>
            <div className="club">
              <h3>Visión</h3>
              <p>Ser una institución de calidad formadora de líderes del mañana.</p>
            </div>
            <div className="monumento">
              <h3>Lema</h3>
              <p>Formar e innovar para transformar</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="animated fadeIn">
        <p>&copy; 2025 CBTA Tlaxcala. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Nosotros;
