import React from 'react';
import BackButton from '../components/BackButton';

const useIsDark = () => {
  try {
    return typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  } catch (e) {
    return false;
  }
};

const Contacto = ({ setCurrentView }) => {
  const isDark = useIsDark();

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: isDark ? '#0f1720' : '#f8f9fa'
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '100%',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: isDark ? '#e6eef8' : '#2c3e50',
    marginBottom: '25px',
    textAlign: 'center'
  };

  const sectionStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '25px',
    boxShadow: isDark ? '0 12px 35px rgba(2,6,23,0.7)' : '0 8px 25px rgba(0,0,0,0.1)'
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: isDark ? '#93c5fd' : '#3498db',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    borderRadius: '10px',
    border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid #e9ecef'
  };

  const iconStyle = {
    fontSize: '24px',
    marginRight: '15px',
    marginTop: '2px',
    flexShrink: 0
  };

  const linkStyle = {
    color: isDark ? '#93c5fd' : '#3498db',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const mapStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: isDark ? '0 8px 25px rgba(0,0,0,0.6)' : '0 4px 15px rgba(0,0,0,0.2)'
  };

  const facebookStyle = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #1877f2, #42a5f5)',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
  };

  return (
    <div style={pageStyle}>
      <BackButton onClick={() => setCurrentView('home')} />
      
      <div style={containerStyle}>
        <h1 style={titleStyle}>📞 Contacto</h1>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📍 Información de Contacto</h2>
          
          <div style={contactInfoStyle}>
            <span style={iconStyle}>🏫</span>
            <div>
              <strong>Dirección:</strong><br/>
              CARRETERA TETLANOHCAN A MALINTZIN KILÓMETRO NUM. 3<br/>
              San Francisco, México, 90800
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>📞</span>
            <div>
              <strong>Teléfono:</strong><br/>
              <a href="tel:+522464623456" style={linkStyle}>
                01 (246) 46 2 34 56
              </a>
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>📧</span>
            <div>
              <strong>Correo Electrónico:</strong><br/>
              <a href="mailto:cbta134@yahoo.com.mx" style={linkStyle}>
                cbta134@yahoo.com.mx
              </a>
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>🌐</span>
            <div>
              <strong>Sitio Web:</strong><br/>
              <a href="http://www.cbta134.edu.mx/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                www.cbta134.edu.mx
              </a>
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>⭐</span>
            <div>
              <strong>Calificación:</strong><br/>
              Recomendado por el 92% (17 opiniones)
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>🕒</span>
            <div>
              <strong>Horario de Atención:</strong><br/>
              <span style={{color: '#28a745', fontWeight: 'bold'}}>🟢 Abierto ahora</span><br/>
              Lunes a Viernes: 7:00 AM - 4:00 PM<br/>
              Sábados: 8:00 AM - 12:00 PM
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>👥 Directorio</h2>
          
          <div style={contactInfoStyle}>
            <span style={iconStyle}>👨‍💼</span>
            <div>
              <strong>Dirección General</strong><br/>
              Ext. 101 | direccion@cbta134.edu.mx
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>📚</span>
            <div>
              <strong>Subdirección Académica</strong><br/>
              Ext. 102 | academica@cbta134.edu.mx
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>🎓</span>
            <div>
              <strong>Servicios Escolares</strong><br/>
              Ext. 103 | escolares@cbta134.edu.mx
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>💡</span>
            <div>
              <strong>Orientación Educativa</strong><br/>
              Ext. 104 | orientacion@cbta134.edu.mx
            </div>
          </div>

          <div style={contactInfoStyle}>
            <span style={iconStyle}>🌐</span>
            <div>
              <strong>Vinculación</strong><br/>
              Ext. 105 | vinculacion@cbta134.edu.mx
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌐 Síguenos en Redes Sociales</h2>
          <div style={{textAlign: 'center'}}>
            <a 
              href="https://www.facebook.com/share/15g75ZdJRg/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={facebookStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📘 Facebook Oficial
            </a>
            <p style={{color: isDark ? '#bfc7cf' : '#666', marginTop: '15px'}}>
              Mantente informado sobre noticias, eventos y actividades de nuestra institución
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🗺️ Ubicación</h2>
          <p style={{textAlign: 'center', marginBottom: '20px', color: '#666'}}>
            CARRETERA TETLANOHCAN A MALINTZIN KILÓMETRO NUM. 3, San Francisco, México
          </p>
          <div style={mapStyle}>
            <iframe
              title="Ubicación CBTA 134"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8962250553377!2d-98.14220228509102!3d19.261621686935783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfdd8ebaaaaaab%3A0x27dafbca82bfb2a0!2sCarretera%20Tetlanohcan%20a%20Malintzin%2C%20San%20Francisco%2C%20Tlax.!5e0!3m2!1sen!2smx!4v1648000000000!5m2!1sen!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>❓ Preguntas Frecuentes</h2>
          
          <div style={{marginBottom: '20px'}}>
            <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '8px'}}>¿Cuáles son los requisitos de admisión?</h4>
            <p style={{color: isDark ? '#bfc7cf' : '#666', marginBottom: '15px'}}>
              Certificado de secundaria, acta de nacimiento, CURP, 6 fotografías tamaño infantil y comprobante de domicilio.
            </p>
          </div>

          <div style={{marginBottom: '20px'}}>
            <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '8px'}}>¿Cuándo son las inscripciones?</h4>
            <p style={{color: isDark ? '#bfc7cf' : '#666', marginBottom: '15px'}}>
              Las inscripciones se realizan en febrero-marzo para el ciclo escolar que inicia en agosto.
            </p>
          </div>

          <div style={{marginBottom: '20px'}}>
            <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '8px'}}>¿Ofrecen becas?</h4>
            <p style={{color: isDark ? '#bfc7cf' : '#666', marginBottom: '15px'}}>
              Sí, contamos con diferentes programas de becas académicas y socioeconómicas.
            </p>
          </div>

          <div style={{marginBottom: '20px'}}>
            <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '8px'}}>¿Hay transporte escolar?</h4>
            <p style={{color: isDark ? '#bfc7cf' : '#666', marginBottom: '15px'}}>
              Contamos con rutas de transporte a diferentes comunidades. Consulta disponibilidad.
            </p>
          </div>
        </section>

        <section className="contacto-info-section" style={{
          ...sectionStyle,
          background: isDark ? 'linear-gradient(135deg, #1e3c72, #2a5298)' : 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{...sectionTitleStyle, color: 'white'}}>📩 ¿Necesitas más información?</h2>
          <p style={{marginBottom: '20px', fontSize: '16px', color: 'white'}}>
            Estamos aquí para ayudarte. No dudes en contactarnos para resolver todas tus dudas sobre nuestros programas educativos, proceso de admisión o cualquier otra consulta.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '10px',
            padding: '20px',
            marginTop: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{margin: 0, fontWeight: 'bold', color: 'white'}}>
              🌟 ¡Tu futuro comienza aquí en el CBTA 134! 🌟
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;