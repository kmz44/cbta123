import React from 'react';

const useIsDark = () => {
  try {
    return typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  } catch (e) {
    return false;
  }
};

const Saetam = () => {
  const isDark = useIsDark();

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: isDark ? '#07111a' : '#f8f9fa'
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
    color: isDark ? '#fca5a5' : '#e74c3c',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: isDark ? '#c8cdd3' : '#555',
    marginBottom: '15px',
    textAlign: 'justify'
  };

  const logoStyle = {
    width: '200px',
    height: 'auto',
    display: 'block',
    margin: '20px auto',
    borderRadius: '10px'
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>🏛️ SAETAM</h1>
        
        <section style={sectionStyle}>
          <img src="/images/saetam.jpg" alt="SAETAM" style={logoStyle} />
          <h2 style={sectionTitleStyle}>Sistema de Apoyo para la Educación Técnica Agropecuaria y de Mar</h2>
          <p style={textStyle}>
            El SAETAM (Sistema de Apoyo para la Educación Técnica Agropecuaria y de Mar) es un organismo dependiente de la Dirección General de Educación Tecnológica Agropecuaria y Ciencias del Mar (DGETAyCM), que tiene como objetivo brindar apoyo técnico, administrativo y académico a los planteles del subsistema.
          </p>
          <p style={textStyle}>
            En el CBTA 134, el SAETAM juega un papel fundamental en el desarrollo y mejoramiento continuo de nuestros programas educativos, asegurando que cumplamos con los estándares de calidad establecidos a nivel nacional.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Objetivos del SAETAM</h2>
          <ul style={{paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px', color: '#555'}}>
              <strong>Apoyo Técnico:</strong> Proporcionar asistencia especializada en el desarrollo de proyectos productivos y educativos.
            </li>
            <li style={{marginBottom: '10px', color: '#555'}}>
              <strong>Capacitación:</strong> Ofrecer programas de actualización y capacitación para docentes y personal administrativo.
            </li>
            <li style={{marginBottom: '10px', color: '#555'}}>
              <strong>Vinculación:</strong> Facilitar la conexión entre la institución educativa y el sector productivo.
            </li>
            <li style={{marginBottom: '10px', color: '#555'}}>
              <strong>Desarrollo Curricular:</strong> Contribuir en la actualización y mejora de los planes y programas de estudio.
            </li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌟 Servicios que Ofrece</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            <div style={{background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{color: '#2c3e50', marginBottom: '10px'}}>📚 Asesoría Académica</h4>
              <p style={{color: '#666', fontSize: '14px'}}>
                Orientación en metodologías de enseñanza y desarrollo curricular.
              </p>
            </div>
            <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{color: '#2c3e50', marginBottom: '10px'}}>🔬 Apoyo Técnico</h4>
              <p style={{color: '#666', fontSize: '14px'}}>
                Asistencia en proyectos de investigación y desarrollo tecnológico.
              </p>
            </div>
            <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{color: '#2c3e50', marginBottom: '10px'}}>👥 Capacitación</h4>
              <p style={{color: '#666', fontSize: '14px'}}>
                Programas de actualización profesional para docentes.
              </p>
            </div>
            <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{color: '#2c3e50', marginBottom: '10px'}}>🤝 Vinculación</h4>
              <p style={{color: '#666', fontSize: '14px'}}>
                Enlace con empresas y organizaciones del sector productivo.
              </p>
            </div>
          </div>
        </section>

        <section style={{
          ...sectionStyle,
          background: isDark ? 'linear-gradient(135deg, rgba(231,76,60,0.12), rgba(192,57,43,0.08))' : 'linear-gradient(135deg, #e74c3c, #c0392b)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{...sectionTitleStyle, color: 'white'}}>🌟 Impacto en Nuestra Institución</h2>
          <p style={{...textStyle, color: 'white', textAlign: 'center'}}>
            Gracias al apoyo del SAETAM, el CBTA 134 ha logrado mantener altos estándares de calidad educativa, implementar nuevas tecnologías en nuestros procesos de enseñanza-aprendizaje y fortalecer los vínculos con el sector productivo de la región.
          </p>
        </section>
      </div>
        </div>
  );
};

export default Saetam;
