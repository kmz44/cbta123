import React from "react";

const programas = [
  {
    img: "../assets/carreras/agrope.jpg",
    alt: "Producción Agropecuaria",
    title: "Técnico en agropecuario",
    description: "Se encarga de realizar actividades relacionadas con la agricultura y la ganadería.",
    link: "/carreras/agropecuario",
  },
  {
    img: "../assets/carreras/pecuarios.jpg",
    alt: "Producción Pecuaria",
    title: "Técnico en sistemas de producción pecuaria",
    description: "Planear, manejar e implementar proyectos de producción animal.",
    link: "/carreras/spp",
  },
  {
    img: "../assets/carreras/ofam.jpg",
    alt: "Ofimática",
    title: "Técnico en ofimática",
    description: "Obtener y gestionar información digitalmente...",
    link: "/carreras/ofimatica",
  },
  {
    img: "../assets/carreras/pecuarios.jpg",
    alt: "Programación",
    title: "Técnico en programación",
    description: "Analizar, diseñar, desarrollar, instalar...",
    link: "/carreras/programacion",
  },
  {
    img: "../assets/carreras/conta.jpg",
    alt: "Contabilidad",
    title: "Técnico en contabilidad",
    description: "Gestionar los registros contables...",
    link: "/carreras/contabilidad",
  },
];


const Programas = () => {
  return (
    <>
      <main>
        <section className="programas animated fadeInUp">
          <h2>Programas</h2>
          <div className="carreras">
            {programas.map(({ img, alt, title, description, link }, index) => (
              <div className="carrera" key={index}>
                <img src={img} alt={alt} />
                <h2>{title}</h2>
                <div className="carrera-contenido">
                  <p>{description}</p>
                  <a href={link} className="btn-leer-mas">
                    Leer más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Programas;
