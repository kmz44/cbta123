import React from 'react';
import BackButton from './BackButton';

// Helper para detectar modo oscuro (se basa en la clase que gestiona App.jsx)
const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const AcercaDeCBTa134 = ({ onBack }) => {
  const containerStyle = {
    minHeight: '100vh',
    paddingTop: '80px',
    padding: '80px 20px 40px'
  };

  const isDark = useIsDark();

  const cardStyle = {
    background: isDark ? 'rgba(8,12,18,0.6)' : 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '30px',
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.6)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    overflow: 'hidden',
    border: isDark ? '1px solid rgba(255,255,255,0.04)' : 'none'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '40px',
    background: 'linear-gradient(135deg, #28a745, #20c997)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '15px',
    background: isDark ? 'rgba(255,255,255,0.02)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    border: isDark ? '1px solid rgba(255,255,255,0.04)' : '1px solid #28a745'
  };

  const sectionTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const subsectionStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.6)' : '0 2px 10px rgba(0, 0, 0, 0.05)'
  };

  const subsectionTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const textStyle = {
    fontSize: '1rem',
    color: isDark ? '#d0e6ff' : '#555',
    lineHeight: '1.8',
    textAlign: 'justify',
    marginBottom: '0'
  };

  const valoresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const valorStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: isDark ? '0 8px 20px rgba(0,0,0,0.6)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
    border: isDark ? '1px solid rgba(255,255,255,0.04)' : 'none'
  };

  const logoStyle = {
    textAlign: 'center',
    marginBottom: '30px'
  };

  const logoImgStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: isDark ? '3px solid rgba(255,255,255,0.06)' : '4px solid #28a745',
    marginBottom: '15px'
  };

  return (
    <div style={containerStyle}>
      <BackButton onBack={onBack} />
      <div style={cardStyle}>
        <div style={logoStyle}>
          <img src="/images/cbta134.png" alt="Logo CBTa 134" style={logoImgStyle} />
          <h1 style={titleStyle}>Acerca de CBTa 134</h1>
        </div>

        {/* Historia e Identidad Institucional */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🏛️ Historia e Identidad Institucional</h2>
          
          <div style={subsectionStyle}>
            <h3 style={subsectionTitleStyle}>
              📖 Nuestra Historia
            </h3>
            <p style={textStyle}>
              El Centro de Bachillerato Tecnológico Agropecuario No. 134 es una institución educativa 
              que ha forjado su prestigio a través de décadas de excelencia académica. Fundado con el 
              propósito de brindar educación técnica de calidad en el área agropecuaria, hemos evolucionado 
              para convertirnos en un referente educativo que forma profesionales competentes y ciudadanos 
              comprometidos con el desarrollo de nuestra comunidad.
            </p>
          </div>

          <div style={subsectionStyle}>
            <h3 style={subsectionTitleStyle}>
              🎯 Misión
            </h3>
            <p style={textStyle}>
              Contribuir activamente a la formación integral de nuestros estudiantes del Bachillerato 
              Tecnológico con un enfoque de desarrollo sostenible y emprendedor que los integre plenamente 
              a la sociedad, proporcionando herramientas académicas y técnicas que les permitan enfrentar 
              los retos del mundo moderno con competencia y valores sólidos.
            </p>
          </div>

          <div style={subsectionStyle}>
            <h3 style={subsectionTitleStyle}>
              🔭 Visión
            </h3>
            <p style={textStyle}>
              Ser una institución de calidad formadora de líderes del mañana, reconocida por su excelencia 
              educativa, innovación tecnológica y compromiso con el desarrollo sustentable, que contribuya 
              al progreso social y económico de la región.
            </p>
          </div>

          <div style={subsectionStyle}>
            <h3 style={subsectionTitleStyle}>
              💫 Lema Institucional
            </h3>
            <p style={{...textStyle, fontSize: '1.2rem', fontWeight: 'bold', color: isDark ? '#d0e6ff' : '#2c3e50', textAlign: 'center'}}>
              "Formar e innovar para transformar"
            </p>
          </div>
        </div>

        {/* Valores Institucionales */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>⭐ Nuestros Valores</h2>
          
          <div style={valoresGridStyle}>
            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                🌟 Excelencia Académica
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Búsqueda constante de la calidad en todos nuestros procesos educativos, 
                promoviendo el aprendizaje continuo y la mejora permanente.
              </p>
            </div>

            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                🤝 Respeto
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Valoramos la dignidad de cada persona, promoviendo un ambiente de 
                tolerancia, inclusión y reconocimiento mutuo.
              </p>
            </div>

            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                💼 Responsabilidad
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Asumimos nuestros compromisos con dedicación y ética, siendo 
                conscientes del impacto de nuestras acciones en la sociedad.
              </p>
            </div>

            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                💎 Honestidad
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Actuamos con transparencia, integridad y sinceridad en todas 
                nuestras relaciones y actividades institucionales.
              </p>
            </div>

            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                👥 Trabajo en Equipo
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Fomentamos la colaboración, comunicación efectiva y el apoyo 
                mutuo para alcanzar objetivos comunes.
              </p>
            </div>

            <div style={valorStyle}>
              <h3 style={{...subsectionTitleStyle, justifyContent: 'center'}}>
                🚀 Innovación
              </h3>
              <p style={{...textStyle, textAlign: 'center', fontSize: '0.95rem'}}>
                Promovemos la creatividad, el pensamiento crítico y la adopción 
                de nuevas tecnologías para mejorar continuamente.
              </p>
            </div>
          </div>
        </div>

        {/* Compromiso Social */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌱 Nuestro Compromiso</h2>
          
          <div style={subsectionStyle}>
            <p style={textStyle}>
              El CBTa 134 se compromete a formar ciudadanos integrales que contribuyan al desarrollo 
              sustentable de su comunidad. Nuestro enfoque educativo combina la excelencia académica 
              con la formación en valores, preparando a nuestros estudiantes para ser agentes de 
              cambio positivo en la sociedad.
            </p>
            <p style={textStyle}>
              A través de nuestros programas técnicos especializados, fomentamos el emprendimiento, 
              la innovación tecnológica y el cuidado del medio ambiente, formando profesionales 
              competentes que respondan a las necesidades del mercado laboral actual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDeCBTa134;