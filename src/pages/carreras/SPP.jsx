import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const SPP = ({ setCurrentView }) => {
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
    background: 'linear-gradient(135deg, #fd7e14, #e63946)',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(253, 126, 20, 0.3)'
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
    color: isDark ? '#ffa726' : '#fd7e14',
    marginBottom: '20px',
    borderBottom: '3px solid #fd7e14',
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
    background: 'linear-gradient(135deg, #fd7e14, #e63946)',
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
    background: 'linear-gradient(135deg, rgba(253,126,20,0.1), rgba(230,57,70,0.1))',
    borderLeft: '4px solid #fd7e14',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  };

  const competencyCardStyle = {
    background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '15px',
    borderLeft: '4px solid #fd7e14'
  };

  const animalIconStyle = {
    background: 'linear-gradient(135deg, #fd7e14, #e63946)',
    borderRadius: '8px',
    padding: '8px',
    color: 'white',
    display: 'inline-block',
    marginRight: '10px',
    fontSize: '16px'
  };

  return (
    <div style={pageStyle}>
      <BackButton onBack={() => setCurrentView('programas')} />
      <div style={containerStyle}>
        <h1 style={titleStyle}>🐄 Técnico en Sistemas de Producción Pecuaria</h1>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📋 Justificación de la Carrera</h2>
          <p style={textStyle}>
            En el contexto regional y nacional, la formación de Técnicos en Sistemas de Producción Pecuaria es relevante porque permite al estudiante
            sustentar la demanda de ocupación de técnicos en sistemas de producción pecuaria en el sector productivo y desarrollar competencias que le permitan
            fortalecer su área profesional en apego al cuidado del medio ambiente.
          </p>
          <p style={textStyle}>
            Esta carrera proporciona formación en el manejo de especies pecuarias, alimentación, prevención de enfermedades y desarrollo de proyectos pecuarios,
            permitiendo a los egresados integrarse al ámbito laboral o emprender sus propios proyectos.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Perfil de Egreso</h2>
          <p style={textStyle}>
            La formación en Técnico en Sistemas de Producción Pecuaria permite al egresado realizar actividades en manejo de especies, alimentación, sanidad,
            reproducción y diseño de proyectos pecuarios.
          </p>

          <div style={competencyCardStyle}>
            <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>💼 Competencias Profesionales</h3>
            <ul style={listStyle}>
              <li>Maneja especies pecuarias de acuerdo al sistema de producción.</li>
              <li>Alimenta a especies pecuarias.</li>
              <li>Asiste en la prevención y sanidad de especies pecuarias.</li>
              <li>Participa en la reproducción de especies pecuarias.</li>
              <li>Participa en el diseño y ejecución de proyectos pecuarios.</li>
            </ul>
          </div>

          <div style={competencyCardStyle}>
            <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>🌟 Dimensiones del Perfil de Egreso</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              <div>
                <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '8px'}}>💪 Empoderamiento</h4>
                <ul style={{...listStyle, fontSize: '14px', paddingLeft: '15px'}}>
                  <li>Regulación emocional</li>
                  <li>Autoconocimiento</li>
                  <li>Comunicación</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '8px'}}>💼 Empleabilidad</h4>
                <ul style={{...listStyle, fontSize: '14px', paddingLeft: '15px'}}>
                  <li>Logro de metas</li>
                  <li>Autonomía</li>
                  <li>Toma de decisiones</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '8px'}}>🎓 Aprendizaje</h4>
                <ul style={{...listStyle, fontSize: '14px', paddingLeft: '15px'}}>
                  <li>Resolución de problemas</li>
                  <li>Mentalidad de crecimiento</li>
                  <li>Creatividad</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '8px'}}>🤝 Ciudadanía</h4>
                <ul style={{...listStyle, fontSize: '14px', paddingLeft: '15px'}}>
                  <li>Trabajo en equipo</li>
                  <li>Conciencia social</li>
                  <li>Empatía</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Mapa de Competencias Laborales</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Módulo</th>
                <th style={thStyle}>Competencia Laboral</th>
                <th style={thStyle}>Submódulos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Módulo I</strong></td>
                <td style={tdStyle}>Maneja especies pecuarias de acuerdo al sistema de producción</td>
                <td style={tdStyle}>
                  1. Realiza el manejo zootécnico en especies pecuarias<br />
                  2. Maneja a especies pecuarias aplicando técnicas de contención<br />
                  3. Realiza mantenimiento a instalaciones y equipo pecuario
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo II</strong></td>
                <td style={tdStyle}>Alimenta a especies pecuarias</td>
                <td style={tdStyle}>
                  1. Alimenta especies monogástricas de acuerdo al programa de nutrición<br />
                  2. Alimenta especies poligástricas de acuerdo al programa de nutrición<br />
                  3. Colabora en la producción y conservación de forrajes
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo III</strong></td>
                <td style={tdStyle}>Asiste en la prevención y sanidad en especies pecuarias</td>
                <td style={tdStyle}>
                  1. Mantiene la bioseguridad en las especies e instalaciones pecuarias<br />
                  2. Auxilia en la prevención y tratamiento de alteraciones de salud<br />
                  3. Realiza cirugía menor en especies pecuarias
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo IV</strong></td>
                <td style={tdStyle}>Participa en la reproducción de especies pecuarias</td>
                <td style={tdStyle}>
                  1. Reproduce mamíferos de interés zootécnico<br />
                  2. Reproduce aves de interés zootécnico
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo V</strong></td>
                <td style={tdStyle}>Participa en el diseño y ejecución de proyectos pecuarios</td>
                <td style={tdStyle}>
                  1. Asiste en la formulación y gestión de proyectos productivos<br />
                  2. Ejecuta proyectos productivos pecuarios
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🔄 Cambios Principales en el Programa de Estudios</h2>
          <p style={textStyle}>
            El currículum laboral desarrolla competencias que integran conocimientos, habilidades y actitudes en el desarrollo personal y profesional.
            Estas competencias se dividen en:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '20px'
          }}>
            <div style={competencyCardStyle}>
              <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>⚡ Competencias Laborales Básicas</h3>
              <p style={textStyle}>
                Aplicación de habilidades en situaciones de trabajo de nivel elemental. Permiten realizar tareas específicas bajo supervisión 
                en el manejo básico de especies pecuarias.
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>🚀 Competencias Laborales Extendidas</h3>
              <p style={textStyle}>
                Aplicación de habilidades en funciones de mayor complejidad técnica. Incluyen la gestión autónoma de proyectos pecuarios 
                y toma de decisiones especializadas.
              </p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🐾 Áreas de Especialización</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>🐄</span>Manejo Zootécnico
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Técnicas de contención, mantenimiento de instalaciones y manejo integral de especies
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>🌾</span>Nutrición Animal
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Alimentación especializada de monogástricos, poligástricos y producción de forrajes
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>🏥</span>Sanidad Animal
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Bioseguridad, prevención de enfermedades y procedimientos veterinarios básicos
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>🐣</span>Reproducción Animal
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Manejo reproductivo de mamíferos y aves de interés zootécnico
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>📊</span>Proyectos Pecuarios
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Formulación, gestión y ejecución de proyectos productivos sustentables
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                <span style={animalIconStyle}>🌱</span>Sustentabilidad
              </h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Producción pecuaria responsable con el medio ambiente
              </p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌍 Enfoque Ambiental</h2>
          <div style={highlightBoxStyle}>
            <p style={{...textStyle, fontWeight: 'bold', color: isDark ? '#ffa726' : '#fd7e14', marginBottom: '15px'}}>
              🌿 Compromiso con el Desarrollo Sostenible
            </p>
            <p style={textStyle}>
              El programa integra prácticas de producción pecuaria sustentable, promoviendo el cuidado del medio ambiente, 
              el bienestar animal y la responsabilidad social. Los egresados están preparados para implementar sistemas 
              productivos que armonicen la rentabilidad económica con la conservación de los recursos naturales.
            </p>
            <ul style={listStyle}>
              <li>Manejo sostenible de recursos naturales</li>
              <li>Implementación de tecnologías limpias</li>
              <li>Reducción del impacto ambiental</li>
              <li>Bienestar animal como prioridad</li>
              <li>Desarrollo de comunidades rurales</li>
            </ul>
          </div>
        </section>

        <section style={{
          ...sectionStyle,
          background: 'linear-gradient(135deg, #fd7e14, #e63946)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{...sectionTitleStyle, color: 'white', borderColor: 'white'}}>🌟 Oportunidades Profesionales</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏭 Granjas Industriales</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Producción pecuaria a gran escala</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏡 Producción Familiar</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Sistemas de traspatio y pequeña escala</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏛️ Instituciones Gubernamentales</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>SAGARPA, SENASICA, programas rurales</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏥 Clínicas Veterinarias</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Asistencia técnica especializada</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🚀 Emprendimiento Rural</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Proyectos productivos propios</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🎓 Educación Superior</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Ingeniería Zootecnista o Veterinaria</p>
            </div>
          </div>
        </section>

        {/* Sección del Plan de Estudios PDF */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Plan de Estudios Oficial</h2>
          <p style={textStyle}>
            Consulta el programa de estudios completo y oficial de la carrera Sistemas de Producción Pecuaria.
          </p>
          
          <div style={{
            background: isDark ? '#1e2a3d' : 'white',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: isDark ? '0 8px 25px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
            marginTop: '20px'
          }}>
            <iframe
              src="/programa de estudios/Sistemas_Produccion_Pecuaria.pdf"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '10px'
              }}
              title="Plan de Estudios - Sistemas de Producción Pecuaria"
            />
            
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <a 
                href="/programa de estudios/Sistemas_Produccion_Pecuaria.pdf"
                download="Plan_Estudios_SPP.pdf"
                style={{
                  display: 'inline-block',
                  backgroundColor: isDark ? '#ffa726' : '#fd7e14',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'background-color 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 167, 38, 0.3)'
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

export default SPP;