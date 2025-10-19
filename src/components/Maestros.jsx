import React from 'react';
import BackButton from './BackButton';

const useIsDark = () => {
  try {
    return typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  } catch (e) {
    return false;
  }
};

const Maestros = ({ onBack }) => {
  const recursos = [
    {
      nombre: "Cuadernillos",
      descripcion: "Planeación didáctica y recursos educativos",
      icono: "📚",
      url: "http://www.planeaciondidactica.sems.gob.mx/login",
      color: "#007bff"
    },
    {
      nombre: "SISEEMS",
      descripcion: "Sistema de Evaluación y Seguimiento",
      icono: "📊",
      url: "http://168.255.121.25/develop/index.php?",
      color: "#28a745"
    },
    {
      nombre: "Talón de Pago",
      descripcion: "Portal de autoservicios SEMS",
      icono: "💰",
      url: "https://portalautoservicios-sems.sep.gob.mx/login.jsp",
      color: "#ffc107"
    },
    {
      nombre: "DGETAYCM México",
      descripción: "Dirección General de Educación Tecnológica Agropecuaria y Ciencias del Mar",
      icono: "🏛️",
      url: "https://dgetaycm.sep.gob.mx/",
      color: "#dc3545"
    },
    {
      nombre: "SEP Tlaxcala",
      descripcion: "Secretaría de Educación Pública Tlaxcala",
      icono: "🏢",
      url: "https://www.septlaxcala.gob.mx",
      color: "#6f42c1"
    },
    {
      nombre: "Oficina Virtual ISSSTE",
      descripcion: "Instituto de Seguridad y Servicios Sociales",
      icono: "🏥",
      url: "https://oficinavirtual.issste.gob.mx/",
      color: "#20c997"
    }
  ];

  const isDark = useIsDark();

  const containerStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: isDark ? '#0f1720' : '#f8f9fa',
    padding: '80px 20px 40px 20px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: isDark ? '#e6eef8' : '#1e3c72',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    color: isDark ? '#bfc7cf' : '#666',
    textAlign: 'center',
    marginBottom: '40px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: isDark ? '0 12px 40px rgba(2,6,23,0.7)' : '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  };

  const contentStyle = {
    padding: '25px'
  };

  const recursoTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: isDark ? '#c8cdd3' : '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const buttonStyle = {
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center'
  };

  const handleResourceClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>👨‍🏫 Recursos para Maestros</h1>
      <p style={subtitleStyle}>
        Enlaces útiles y recursos digitales para el personal docente del CBTa 134
      </p>

      <div style={gridStyle}>
        {recursos.map((recurso, index) => (
          <div 
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
            onClick={() => handleResourceClick(recurso.url)}
          >
            <div style={contentStyle}>
              <h3 style={{...recursoTitleStyle, color: recurso.color}}>
                <span style={{fontSize: '24px'}}>{recurso.icono}</span>
                {recurso.nombre}
              </h3>
              <p style={descriptionStyle}>
                {recurso.descripcion}
              </p>
              <button 
                style={{...buttonStyle, backgroundColor: recurso.color}}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Acceder al Portal 🔗
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
        borderRadius: '15px',
        padding: '25px',
        marginTop: '40px',
        boxShadow: isDark ? '0 12px 35px rgba(2,6,23,0.7)' : '0 8px 25px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '40px auto 0 auto'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1e3c72',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          📋 Información Importante
        </h2>
          <div style={{
            background: isDark ? 'rgba(30,60,114,0.12)' : '#e3f2fd',
            padding: '20px',
            borderRadius: '10px',
            borderLeft: '4px solid #1e3c72'
          }}>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '10px'
          }}>
            <strong>📌 Nota:</strong> Todos los enlaces externos se abrirán en una nueva ventana para tu comodidad.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '10px'
          }}>
            <strong>🔐 Acceso:</strong> Algunos portales requieren credenciales específicas proporcionadas por la institución.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '0'
          }}>
            <strong>📞 Soporte:</strong> Para problemas técnicos, contacta al departamento de TI del CBTa 134.
          </p>
        </div>
      </div>

      <BackButton onBack={onBack} text="Regresar al Menú Principal" />
    </div>
  );
};

export default Maestros;
