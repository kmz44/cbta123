

export default function Inicio() {
  return (
    <>
      <main>
        <section className="hero animated fadeInUp">
          <div className="hero-image">
            <h2>Bienvenidos al CBTA 134</h2>
            <p>Formando futuros líderes.</p>
            <img src="/assets/cbta/cct.png" alt="Imagen de inicio" />
            <a
              href="https://www.facebook.com/share/15g75ZdJRg/"
              className="btn-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Síguenos en Facebook
            </a>
          </div>
        </section>

        <section className="noticias animated fadeInUp">
          <h2>Noticias</h2>
          <div className="carrusel">
            <div className="carrusel-item">
              <img src="/assets/noticias/noticia1.jpg" alt="Noticia 1" />
              <h3>Regreso a clases</h3>
              <p>
                Después de vacaciones decembrinas, recuerda que este 6 de enero regresamos a clases.
              </p>
            </div>
            <div className="carrusel-item">
              <img src="/assets/noticias/noticia2.jpg" alt="Noticia 2" />
              <h3>Título de la Noticia 2</h3>
              <p>Descripción breve de la noticia 2.</p>
            </div>
            <div className="carrusel-item">
              <img src="/assets/noticias/noticia3.jpg" alt="Noticia 3" />
              <h3>Título de la Noticia 3</h3>
              <p>Descripción breve de la noticia 3.</p>
            </div>
          </div>
          <button className="btn-carrusel prev">‹</button>
          <button className="btn-carrusel next">›</button>
        </section>

        <section className="ubicacion animated fadeInUp">
          <h2>Historia</h2>
          <div className="info-box">
            <div className="cc-container">
              <h2>Historia del CBTA 134</h2>
              <p>
                El Centro de Bachillerato Tecnológico Agropecuario número 134 (CBTA 134) fue fundado en el año 1981 en San Francisco Tetlanohcan, Tlaxcala...
              </p>
              <p>
                A lo largo de los años, el CBTA 134 ha ampliado su oferta educativa...
              </p>
              <p>
                El plantel también ha sido un punto de encuentro para la comunidad...
              </p>
              <h2>Misión</h2>
              <p>
                Contribuir activamente en la formación integral de nuestros estudiantes del Bachillerato Tecnológico...
              </p>
              <h2>Visión</h2>
              <p>
                Ser una institución de calidad formadora de líderes del mañana.
              </p>
            </div>
          </div>

          <h2>Ubicación</h2>
          <div className="info-box">
            <p>El CBTA 134 se encuentra ubicado en:</p>
            <p>
              <strong>Dirección:</strong> C. Josefa Ortiz de Domínguez, 90840, San Francisco Tetlanohcan, Tlaxcala.
            </p>
            <div className="cc-container">
              <img src="/assets/cbta/logo.jpg" alt="Logo CBTA Tlaxcala" />
            </div>
            <div className="mapa">
              <iframe
                title="Ubicación CBTA"
                src="https://www.google.com/maps/dir//C.+Josefa+Ortiz+de+Dominguez,+90840+Tlax./@19.2616032,-98.2224024,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cfdd8ebaaaaaab:0x27dafbca82bfb2a0!2m2!1d-98.1400007!2d19.2616217?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
