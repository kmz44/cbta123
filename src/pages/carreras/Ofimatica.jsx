import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const Ofimatica = ({ setCurrentView }) => {
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
    color: 'white',
    marginBottom: '30px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #6f42c1, #5a32a3)',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(111, 66, 193, 0.3)'
  };

  const sectionStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '15px',
    padding: '30px',
    marginBottom: '30px',
    boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
    border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none'
  };

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: isDark ? '#a78bfa' : '#6f42c1',
    marginBottom: '20px',
    borderBottom: '3px solid #6f42c1',
    paddingBottom: '10px'
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
    color: isDark ? '#e2e8f0' : '#4a5568',
    marginBottom: '15px'
  };

  const listStyle = {
    fontSize: '16px',
    color: isDark ? '#e2e8f0' : '#4a5568',
    lineHeight: '1.7',
    paddingLeft: '20px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const thStyle = {
    background: 'linear-gradient(135deg, #6f42c1, #5a32a3)',
    color: 'white',
    padding: '15px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px'
  };

  const tdStyle = {
    padding: '15px',
    borderBottom: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e9ecef',
    color: isDark ? '#e2e8f0' : '#4a5568',
    fontSize: '14px',
    lineHeight: '1.6'
  };

  const highlightBoxStyle = {
    background: 'linear-gradient(135deg, rgba(111,66,193,0.1), rgba(90,50,163,0.1))',
    borderLeft: '4px solid #6f42c1',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  };

  const competencyCardStyle = {
    background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '15px',
    borderLeft: '4px solid #6f42c1'
  };

  return (
    <div style={pageStyle}>
      <BackButton onBack={() => setCurrentView('programas')} />
      <div style={containerStyle}>
        <h1 style={titleStyle}>💻 Técnico en Ofimática</h1>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📋 Justificación de la Carrera</h2>
          <p style={textStyle}>
            En el contexto regional y nacional, la formación de Técnico en Ofimática es relevante porque ofrece las competencias profesionales 
            que permiten al estudiante realizar actividades dirigidas a obtener y gestionar información de manera digital, mediante el uso 
            eficaz y eficiente de los recursos informáticos disponibles.
          </p>
          <p style={textStyle}>
            Esta carrera atiende las nuevas exigencias en la gestión y procesamiento de datos, bajo normas y estándares de calidad que 
            responden a las demandas de sectores estratégicos, especialmente en tecnologías de la información y comunicación.
          </p>
          <p style={textStyle}>
            La carrera de Técnico en Ofimática permite al estudiante gestionar hardware y software de Ofimática, información de manera 
            local y remota, y bases de datos, además de establecer comunicación ofimática. Las competencias se desarrollan a través de 
            actividades de aprendizaje interdisciplinarias y de actividades sicosociales, promoviendo habilidades socioemocionales como 
            la autoconciencia, autorregulación y toma de decisiones.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Mapa de Competencias Profesionales</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Módulo</th>
                <th style={thStyle}>Competencia Laboral</th>
                <th style={thStyle}>Submódulos</th>
                <th style={thStyle}>Duración (Horas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Módulo I</strong></td>
                <td style={tdStyle}>Gestiona hardware y software de la ofimática</td>
                <td style={tdStyle}>
                  1. Instala y configura equipo de cómputo y periféricos<br />
                  2. Instala y configura sistemas operativos y aplicaciones de la ofimática<br />
                  3. Gestiona archivos y dispositivos ofimáticos
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo II</strong></td>
                <td style={tdStyle}>Gestiona información de manera local</td>
                <td style={tdStyle}>
                  1. Usa procesadores de texto<br />
                  2. Maneja hojas de cálculo<br />
                  3. Usa software de presentaciones
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo III</strong></td>
                <td style={tdStyle}>Gestiona información de manera remota</td>
                <td style={tdStyle}>
                  1. Usa software en línea<br />
                  2. Maneja redes de computadoras
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo IV</strong></td>
                <td style={tdStyle}>Diseña y gestiona bases de datos ofimáticas</td>
                <td style={tdStyle}>
                  1. Diseña bases de datos<br />
                  2. Usa sistemas de gestión de bases de datos
                </td>
                <td style={tdStyle}><strong>192</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo V</strong></td>
                <td style={tdStyle}>Establece comunicación ofimática</td>
                <td style={tdStyle}>
                  1. Gestiona información a través de plataformas digitales<br />
                  2. Usa dispositivos móviles para la comunicación
                </td>
                <td style={tdStyle}><strong>192</strong></td>
              </tr>
            </tbody>
          </table>
          
          <div style={highlightBoxStyle}>
            <p style={{...textStyle, fontWeight: 'bold', color: isDark ? '#a78bfa' : '#6f42c1'}}>
              📊 Total de horas de formación laboral: 1,200 horas
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Perfil de Egreso</h2>
          <p style={textStyle}>
            El Técnico en Ofimática permite a los estudiantes adquirir competencias en diferentes ámbitos, promoviendo la formación integral 
            sustentada en competencias genéricas, disciplinares, profesionales y de empleabilidad.
          </p>

          <div style={competencyCardStyle}>
            <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>💡 Competencias Clave</h3>
            <ul style={listStyle}>
              <li>
                Utiliza tecnologías de la información para investigar, resolver problemas y transmitir información.
              </li>
              <li>
                Gestiona hardware y software, además de información local y remota.
              </li>
              <li>
                Desarrolla la capacidad de organizar actividades, cumplir compromisos y trabajar en equipo.
              </li>
              <li>
                Aplica normas de seguridad y se adapta a cambios en herramientas y procedimientos de trabajo.
              </li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🛠️ Áreas de Especialización</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                🖥️ Hardware y Software
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Instalación, configuración y mantenimiento de equipos de cómputo, sistemas operativos y aplicaciones ofimáticas
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                📄 Gestión Local de Información
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Dominio de procesadores de texto, hojas de cálculo y software de presentaciones para la creación de documentos profesionales
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                🌐 Gestión Remota
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Uso de software en línea, manejo de redes de computadoras y herramientas de colaboración digital
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                🗄️ Bases de Datos
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Diseño y gestión de bases de datos ofimáticas para el almacenamiento y consulta eficiente de información
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                📱 Comunicación Digital
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Gestión de información a través de plataformas digitales y uso de dispositivos móviles para comunicación empresarial
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                🔒 Seguridad Informática
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Aplicación de normas de seguridad informática y protección de datos en entornos ofimáticos
              </p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌟 Habilidades Socioemocionales</h2>
          <div style={highlightBoxStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px'}}>🧠 Autoconciencia</h4>
                <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                  Reconocimiento de fortalezas y áreas de mejora en el ámbito tecnológico
                </p>
              </div>
              <div>
                <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px'}}>⚖️ Autorregulación</h4>
                <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                  Control emocional y gestión del tiempo en proyectos tecnológicos
                </p>
              </div>
              <div>
                <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px'}}>🎯 Toma de Decisiones</h4>
                <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                  Análisis crítico para elegir las mejores soluciones tecnológicas
                </p>
              </div>
              <div>
                <h4 style={{color: isDark ? '#a78bfa' : '#6f42c1', marginBottom: '10px'}}>🤝 Trabajo en Equipo</h4>
                <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                  Colaboración efectiva en proyectos multidisciplinarios
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{
          ...sectionStyle,
          background: 'linear-gradient(135deg, #6f42c1, #5a32a3)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{...sectionTitleStyle, color: 'white', borderColor: 'white'}}>🚀 Oportunidades Profesionales</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏢 Empresas Corporativas</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Soporte técnico y gestión de información</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏛️ Instituciones Públicas</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Administración digital gubernamental</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏥 Sector Salud</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Sistemas de información médica</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🎓 Instituciones Educativas</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Apoyo tecnológico académico</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🚀 Freelance</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Servicios independientes de ofimática</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>📚 Educación Superior</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Licenciaturas en Informática y TIC</p>
            </div>
          </div>
        </section>

        {/* Sección del Plan de Estudios PDF */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Plan de Estudios Oficial</h2>
          <p style={textStyle}>
            Consulta el programa de estudios completo y oficial de la carrera Técnico en Ofimática.
          </p>
          
          <div style={{
            background: isDark ? '#1e2a3d' : 'white',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: isDark ? '0 8px 25px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
            marginTop: '20px'
          }}>
            <iframe
              src="/programa de estudios/Ofimatica.pdf"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '10px'
              }}
              title="Plan de Estudios - Técnico en Ofimática"
            />
            
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <a 
                href="/programa de estudios/Ofimatica.pdf"
                download="Plan_Estudios_Ofimatica.pdf"
                style={{
                  display: 'inline-block',
                  backgroundColor: isDark ? '#a78bfa' : '#6f42c1',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'background-color 0.3s ease',
                  boxShadow: '0 4px 15px rgba(167, 139, 250, 0.3)'
                }}
              >
                📥 Descargar Plan de Estudios
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ofimatica;