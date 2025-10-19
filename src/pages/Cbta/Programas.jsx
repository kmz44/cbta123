import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const Programas = ({ setCurrentView }) => {
  const isDark = useIsDark();

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: isDark ? 'transparent' : '#f8f9fa'
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

  const introStyle = {
    background: isDark ? 'rgba(255,255,255,0.02)' : 'white',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '30px',
    boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const programsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginBottom: '40px'
  };

  const programCardStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: isDark ? '1px solid rgba(255,255,255,0.03)' : 'none'
  };

  const programHeaderStyle = {
    padding: '25px',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  };

  const programContentStyle = {
    padding: '25px'
  };

  const programTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const programDescStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const skillsListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const skillItemStyle = {
    background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    padding: '8px 12px',
    margin: '5px 0',
    borderRadius: '15px',
    fontSize: '13px',
    color: isDark ? '#cfe8ff' : '#555'
  };

  const linkButtonStyle = {
    display: 'inline-block',
    background: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '15px',
    transition: 'background-color 0.3s ease'
  };

  const programas = [
    {
      title: 'Técnico Agropecuario',
      description: 'Forma profesionales en producción agrícola y pecuaria, con enfoque en sustentabilidad y desarrollo rural.',
      headerColor: 'linear-gradient(135deg, #28a745, #20c997)',
      skills: ['Producción de cultivos', 'Manejo de especies pecuarias', 'Procesamiento de productos', 'Inocuidad alimentaria', 'Modelos de negocio'],
      viewName: 'agropecuario'
    },
    {
      title: 'Técnico en Programación',
      description: 'Desarrolla competencias en software, aplicaciones web, bases de datos y tecnologías de la información.',
      headerColor: 'linear-gradient(135deg, #6f42c1, #007bff)',
      skills: ['Desarrollo de software', 'Aplicaciones web', 'Bases de datos', 'Programación móvil', 'Redes y seguridad'],
      viewName: 'programacion'
    },
    {
      title: 'Técnico en Ofimática',
      description: 'Especializa en herramientas informáticas para oficina, diseño gráfico y administración empresarial.',
      headerColor: 'linear-gradient(135deg, #fd7e14, #ffc107)',
      skills: ['Suite de oficina', 'Diseño gráfico', 'Administración digital', 'Soporte técnico', 'Comunicación empresarial'],
      viewName: 'ofimatica'
    },
    {
      title: 'Técnico en Contabilidad',
      description: 'Forma expertos en registro contable, análisis financiero y cumplimiento de obligaciones fiscales.',
      headerColor: 'linear-gradient(135deg, #dc3545, #e74c3c)',
      skills: ['Contabilidad general', 'Análisis financiero', 'Obligaciones fiscales', 'Auditoría básica', 'Sistemas contables'],
      viewName: 'contabilidad'
    },
    {
      title: 'Técnico en Sistemas de Producción Pecuaria',
      description: 'Especializa en manejo integral de especies animales para producción de alimentos.',
      headerColor: 'linear-gradient(135deg, #17a2b8, #138496)',
      skills: ['Bovinos y especies mayores', 'Porcicultura y avicultura', 'Especies menores', 'Nutrición animal', 'Sanidad pecuaria'],
      viewName: 'spp'
    }
  ];

  const ProgramCard = ({ title, description, headerColor, skills, viewName }) => (
    <div 
      style={programCardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = isDark ? '0 15px 35px rgba(0,0,0,0.8)' : '0 15px 35px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{...programHeaderStyle, background: headerColor}}>
        <h3 style={programTitleStyle}>{title}</h3>
      </div>
      <div style={programContentStyle}>
        <p style={{...programDescStyle, color: isDark ? '#e2e8f0' : '#666'}}>{description}</p>
        <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '10px', fontSize: '16px'}}>Competencias principales:</h4>
        <ul style={skillsListStyle}>
          {skills.map((skill, index) => (
            <li key={index} style={skillItemStyle}>• {skill}</li>
          ))}
        </ul>
        <button 
          onClick={() => setCurrentView(viewName)}
          style={{
            ...linkButtonStyle,
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Ver detalles →
        </button>
      </div>
    </div>
  );

  return (
    <div style={pageStyle}>
      <BackButton onClick={() => setCurrentView('home')} />
      <div style={containerStyle}>
        <h1 style={titleStyle}>📚 Programas Educativos</h1>
        
        <section style={introStyle}>
          <h2 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '20px'}}>Formación Técnica de Excelencia</h2>
          <p style={{color: isDark ? '#e2e8f0' : '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px'}}>
            En el CBTA 134 ofrecemos programas educativos de nivel medio superior que combinan formación académica sólida con competencias técnicas especializadas. Nuestros egresados están preparados tanto para incorporarse al mercado laboral como para continuar estudios superiores.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div>
              <h4 style={{color: '#3498db', fontSize: '24px', margin: '0 0 5px 0'}}>5</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px', margin: 0}}>Carreras Técnicas</p>
            </div>
            <div>
              <h4 style={{color: '#28a745', fontSize: '24px', margin: '0 0 5px 0'}}>3</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px', margin: 0}}>Años de Duración</p>
            </div>
            <div>
              <h4 style={{color: '#fd7e14', fontSize: '24px', margin: '0 0 5px 0'}}>100%</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px', margin: 0}}>Validez Oficial</p>
            </div>
          </div>
        </section>

        <section>
          <div style={programsGridStyle}>
            {programas.map((programa, index) => (
              <ProgramCard key={index} {...programa} />
            ))}
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '40px 20px',
          textAlign: 'center',
          color: 'white',
          marginTop: '40px'
        }}>
          <h3 style={{fontSize: '24px', marginBottom: '20px'}}>🎯 ¿Por qué estudiar en el CBTA 134?</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div>
              <div style={{fontSize: '40px', marginBottom: '10px'}}>🏆</div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Excelencia</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Programas reconocidos con estándares de calidad</p>
            </div>
            <div>
              <div style={{fontSize: '40px', marginBottom: '10px'}}>💼</div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Empleabilidad</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Alta demanda laboral de nuestros egresados</p>
            </div>
            <div>
              <div style={{fontSize: '40px', marginBottom: '10px'}}>🌱</div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Sustentabilidad</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Enfoque en desarrollo sostenible</p>
            </div>
            <div>
              <div style={{fontSize: '40px', marginBottom: '10px'}}>🚀</div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Innovación</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Tecnología y métodos actualizados</p>
            </div>
          </div>
        </section>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.02)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '20px'}}>📋 Proceso de Admisión</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '25px'
          }}>
            <div style={{padding: '20px', background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa', borderRadius: '10px'}}>
              <div style={{fontSize: '30px', marginBottom: '10px'}}>1️⃣</div>
              <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '10px'}}>Registro</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px'}}>Inscríbete en línea o presencialmente</p>
            </div>
            <div style={{padding: '20px', background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa', borderRadius: '10px'}}>
              <div style={{fontSize: '30px', marginBottom: '10px'}}>2️⃣</div>
              <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '10px'}}>Documentos</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px'}}>Entrega documentación requerida</p>
            </div>
            <div style={{padding: '20px', background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa', borderRadius: '10px'}}>
              <div style={{fontSize: '30px', marginBottom: '10px'}}>3️⃣</div>
              <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '10px'}}>Examen</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px'}}>Presenta examen de admisión</p>
            </div>
            <div style={{padding: '20px', background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa', borderRadius: '10px'}}>
              <div style={{fontSize: '30px', marginBottom: '10px'}}>4️⃣</div>
              <h4 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '10px'}}>Inscripción</h4>
              <p style={{color: isDark ? '#c8cdd3' : '#666', fontSize: '14px'}}>Confirma tu lugar y comienza</p>
            </div>
          </div>
          <a 
            href="/cbta/contacto" 
            style={{
              display: 'inline-block',
              background: '#28a745',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '25px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            📞 Más información
          </a>
        </section>
      </div>
    </div>
  );
};

export default Programas;
