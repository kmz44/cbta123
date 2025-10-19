import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const Contabilidad = ({ setCurrentView }) => {
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
    background: 'linear-gradient(135deg, #007bff, #0056b3)',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0, 123, 255, 0.3)'
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
    color: isDark ? '#60a5fa' : '#007bff',
    marginBottom: '20px',
    borderBottom: '3px solid #007bff',
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
    background: 'linear-gradient(135deg, #007bff, #0056b3)',
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
    background: 'linear-gradient(135deg, rgba(0,123,255,0.1), rgba(0,86,179,0.1))',
    borderLeft: '4px solid #007bff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  };

  const competencyCardStyle = {
    background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '15px',
    borderLeft: '4px solid #007bff'
  };

  return (
    <div style={pageStyle}>
      <BackButton onBack={() => setCurrentView('programas')} />
      <div style={containerStyle}>
        <h1 style={titleStyle}>💼 Técnico en Contabilidad</h1>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📋 Descripción General</h2>
          <p style={textStyle}>
            El plan de estudios del Bachillerato Tecnológico en Contabilidad forma parte del Marco Curricular Común de la Educación Media Superior. 
            Su estructura contempla seis semestres con asignaturas de formación básica, extendida y profesional, abarcando áreas como Lengua, 
            Matemáticas, Humanidades, Cultura Digital, Ciencias, Inglés y Formación Socioemocional.
          </p>
          <p style={textStyle}>
            La formación laboral inicia en segundo semestre y se desarrolla en cinco módulos transdisciplinarios que suman 1200 horas de formación 
            con mediación docente, proporcionando competencias específicas del área contable.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Justificación de la Carrera</h2>
          <p style={textStyle}>
            La carrera de Técnico en Contabilidad responde a la necesidad de formar profesionales capaces de registrar operaciones financieras, 
            calcular impuestos, colaborar en auditorías y analizar información económica de forma ética, responsable y con dominio tecnológico.
          </p>
          <p style={textStyle}>
            Esto facilita su inserción laboral, continuidad educativa y desarrollo de emprendimientos, además de fortalecer su rol como agentes 
            de cambio comprometidos con el desarrollo sostenible.
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
                <td style={tdStyle}>Registra información financiera de una entidad económica</td>
                <td style={tdStyle}>
                  1. Registra operaciones contables<br />
                  2. Formula información financiera
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo II</strong></td>
                <td style={tdStyle}>Registra costos y nómina de una entidad económica</td>
                <td style={tdStyle}>
                  1. Elabora contabilidad de costos<br />
                  2. Realiza nómina en forma electrónica
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo III</strong></td>
                <td style={tdStyle}>Realiza operaciones tributarias de personas físicas y morales</td>
                <td style={tdStyle}>
                  1. Determina contribuciones fiscales de personas físicas<br />
                  2. Determina contribuciones fiscales de personas morales
                </td>
                <td style={tdStyle}><strong>272</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo IV</strong></td>
                <td style={tdStyle}>Auxilia en actividades de auditoría</td>
                <td style={tdStyle}>
                  1. Verifica operaciones contables<br />
                  2. Asiste en el cierre de auditoría
                </td>
                <td style={tdStyle}><strong>192</strong></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Módulo V</strong></td>
                <td style={tdStyle}>Asiste en el análisis financiero de una entidad económica</td>
                <td style={tdStyle}>
                  1. Colabora en el análisis financiero<br />
                  2. Contribuye en la planeación financiera
                </td>
                <td style={tdStyle}><strong>192</strong></td>
              </tr>
            </tbody>
          </table>
          
          <div style={highlightBoxStyle}>
            <p style={{...textStyle, fontWeight: 'bold', color: isDark ? '#60a5fa' : '#007bff'}}>
              📊 Total de horas de formación laboral: 1,200 horas
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Perfil de Egreso</h2>
          <p style={textStyle}>
            El egresado será capaz de desempeñar funciones contables en distintos sectores económicos, con conocimientos técnicos actualizados y un enfoque 
            sostenible. Además, fortalecerá habilidades clave agrupadas en cuatro dimensiones:
          </p>

          <div style={competencyCardStyle}>
            <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>🚀 Dimensiones del Perfil</h3>
            <ul style={listStyle}>
              <li><strong>Empoderamiento:</strong> Autoconocimiento, comunicación y regulación emocional.</li>
              <li><strong>Empleabilidad:</strong> Autonomía, toma de decisiones y logro de metas.</li>
              <li><strong>Aprendizaje:</strong> Resolución de problemas, creatividad y mentalidad de crecimiento.</li>
              <li><strong>Ciudadanía:</strong> Trabajo en equipo, empatía y conciencia social.</li>
            </ul>
          </div>

          <div style={competencyCardStyle}>
            <h3 style={{...sectionTitleStyle, fontSize: '18px', marginBottom: '15px'}}>🌍 Desarrollo Sostenible</h3>
            <p style={textStyle}>
              También aplicará conceptos clave del Desarrollo Sostenible, como el nexo agua-energía-alimentación, servicios ecosistémicos y economía ecológica,
              integrando la responsabilidad ambiental en las prácticas contables.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>💡 Competencias Específicas</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>📊 Registro Contable</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Dominio completo del registro de operaciones financieras y formulación de estados financieros
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>💰 Costos y Nómina</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Especialización en contabilidad de costos y sistemas de nómina electrónica
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>🏛️ Operaciones Tributarias</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Cálculo y determinación de impuestos para personas físicas y morales
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>🔍 Auditoría</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Apoyo en procesos de auditoría y verificación de operaciones contables
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>📈 Análisis Financiero</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Colaboración en análisis financiero y planeación estratégica empresarial
              </p>
            </div>
            <div style={competencyCardStyle}>
              <h4 style={{color: isDark ? '#60a5fa' : '#007bff', marginBottom: '10px'}}>💻 Tecnología Contable</h4>
              <p style={{...textStyle, fontSize: '14px', marginBottom: '0'}}>
                Uso avanzado de software contable y herramientas digitales especializadas
              </p>
            </div>
          </div>
        </section>

        <section style={{
          ...sectionStyle,
          background: 'linear-gradient(135deg, #007bff, #0056b3)',
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
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏢 Empresas Privadas</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Departamentos contables y financieros</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏛️ Sector Público</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Instituciones gubernamentales</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>👥 Despachos Contables</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Firmas de contadores públicos</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🚀 Emprendimiento</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Consultoría contable independiente</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🎓 Educación Superior</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Licenciatura en Contaduría Pública</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🌐 Fintech</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Tecnología financiera moderna</p>
            </div>
          </div>
        </section>

        {/* Sección del Plan de Estudios PDF */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Plan de Estudios Oficial</h2>
          <p style={textStyle}>
            Consulta el programa de estudios completo y oficial de la carrera Técnico en Contabilidad.
          </p>
          
          <div style={{
            background: isDark ? '#1e2a3d' : 'white',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: isDark ? '0 8px 25px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
            marginTop: '20px'
          }}>
            <iframe
              src="/programa de estudios/CONTABILIDAD1.pdf"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '10px'
              }}
              title="Plan de Estudios - Técnico en Contabilidad"
            />
            
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <a 
                href="/programa de estudios/CONTABILIDAD1.pdf"
                download="Plan_Estudios_Contabilidad.pdf"
                style={{
                  display: 'inline-block',
                  backgroundColor: isDark ? '#dc3545' : '#007bff',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'background-color 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
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

export default Contabilidad;