import React, { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    motivo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Pronto te responderemos.');
    setForm({
      nombre: '',
      correo: '',
      motivo: '',
      mensaje: ''
    });
  };

  return (
    <>
      <header>
        <nav className="menu animated fadeIn">
          <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="../cbta/nosotros.html">Nosotros</a></li>
            <li><a href="../cbta/programas.html">Programas</a></li>
            <li><a href="../cbta/galeria.html">Galería</a></li>
            <li><a href="../cbta/saetam.html">SAETAM</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2 style={{ textAlign: 'center', marginTop: '30px' }} className="animated fadeInUp">
          Contacto
        </h2>
        <div className="contact-container animated fadeInUp">
          <div className="info-box">
            <h3>Información de contacto</h3>
            <p><strong>Dirección:</strong> C. Josefa Ortiz de Domínguez, San Francisco Tetlanohcan, Tlaxcala.</p>
            <p><strong>Teléfono:</strong> 246 000 0000</p>
            <p><strong>Correo:</strong> contacto@cbta134.edu.mx</p>
            <p><strong>Horario:</strong> Lunes a Viernes, 8:00 a 15:00 hrs</p>
            <h4>Ubicación:</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.486953898895!2d-98.1400007!3d19.2616217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfdd8ebaaaaaab%3A0x27dafbca82bfb2a0!2sC.%20Josefa%20Ortiz%20de%20Dom%C3%ADnguez%2C%2090840%20Tlax.!5e0!3m2!1ses-419!2smx!4v1700000000000"
              allowFullScreen
              loading="lazy"
              title="Ubicación CBTA"
              style={{ width: '100%', height: '300px', border: 0, borderRadius: '10px', marginTop: '10px' }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
            />

            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              required
              value={form.correo}
              onChange={handleChange}
            />

            <label htmlFor="motivo">Motivo de contacto:</label>
            <select
              id="motivo"
              name="motivo"
              required
              value={form.motivo}
              onChange={handleChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="inscripciones">Información sobre inscripciones</option>
              <option value="programas">Dudas sobre programas académicos</option>
              <option value="eventos">Eventos y actividades escolares</option>
              <option value="otro">Otro</option>
            </select>

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              required
              value={form.mensaje}
              onChange={handleChange}
            />

            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </main>

      <footer className="animated fadeIn">
        <p>&copy; 2025 CBTA Tlaxcala. Todos los derechos reservados.</p>
      </footer>

      {/* Estilos internos (puedes mover esto a un archivo .css o usar Tailwind) */}
      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .info-box, form {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        form label {
          display: block;
          margin-top: 15px;
          font-weight: bold;
        }

        form input,
        form textarea,
        form select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-family: inherit;
        }

        form button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007b5f;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        form button:hover {
          background-color: #005c47;
        }

        @media (min-width: 768px) {
          .contact-container {
            flex-direction: row;
            justify-content: space-between;
          }

          .info-box,
          form {
            flex: 1;
            margin: 0 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Contacto;
