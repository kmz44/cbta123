import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const Programacion = ({ setCurrentView }) => {
  const isDark = useIsDark();

  return (
    <div style={{
      paddingTop: '80px',
      minHeight: '100vh',
      backgroundColor: isDark ? 'transparent' : '#f8f9fa'
    }}>
      <BackButton onBack={() => setCurrentView('programas')} />
      <div style={{
        padding: '20px',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '30px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #20c997, #17a2b8)',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(32, 201, 151, 0.3)'
        }}>
          💻 Técnico en Programación
        </h1>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: isDark ? '#4dd0e1' : '#20c997',
            marginBottom: '20px',
            borderBottom: '3px solid #20c997',
            paddingBottom: '10px'
          }}>
            🎯 ¿Por qué estudiar Programación en el CBTA 134?
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: isDark ? '#e2e8f0' : '#4a5568',
            marginBottom: '15px'
          }}>
            En la era digital actual, la programación se ha convertido en una de las habilidades más demandadas y mejor remuneradas del mercado laboral. 
            Nuestro programa de Técnico en Programación te prepara para ser parte de la revolución tecnológica, desarrollando software que transforma 
            industrias completas.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: isDark ? '#e2e8f0' : '#4a5568',
            marginBottom: '15px'
          }}>
            Desde aplicaciones móviles que usan millones de personas hasta sistemas web que manejan empresas multinacionales, los programadores 
            son los arquitectos del futuro digital. En el CBTA 134, no solo aprendes a programar, sino que desarrollas el pensamiento lógico 
            y la creatividad necesarios para resolver problemas complejos del mundo real.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(32,201,151,0.1), rgba(23,162,184,0.1))',
            borderLeft: '4px solid #20c997',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '15px',
              color: isDark ? '#4dd0e1' : '#20c997'
            }}>
              💡 ¿Sabías que...?
            </h3>
            <ul style={{
              fontSize: '16px',
              color: isDark ? '#e2e8f0' : '#4a5568',
              lineHeight: '1.7',
              paddingLeft: '20px'
            }}>
              <li>Los programadores tienen una de las tasas de empleo más altas del mercado laboral</li>
              <li>Es posible trabajar de forma remota desde cualquier parte del mundo</li>
              <li>El sector tecnológico ofrece los mejores salarios para jóvenes profesionales</li>
              <li>Puedes crear tu propia empresa tecnológica y ser tu propio jefe</li>
            </ul>
          </div>
        </section>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: isDark ? '#4dd0e1' : '#20c997',
            marginBottom: '20px',
            borderBottom: '3px solid #20c997',
            paddingBottom: '10px'
          }}>
            💼 Lo que Aprenderás
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '15px',
              borderLeft: '4px solid #20c997'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #20c997, #17a2b8)',
                  borderRadius: '8px',
                  padding: '8px',
                  color: 'white',
                  display: 'inline-block',
                  marginRight: '10px',
                  fontSize: '16px'
                }}>⚙️</span>
                Desarrollo de Software
              </h4>
              <p style={{
                fontSize: '14px',
                marginBottom: '0',
                color: isDark ? '#e2e8f0' : '#4a5568'
              }}>
                Diseñas, codificas e implementas software que controla sistemas completos, desde aplicaciones de escritorio 
                hasta sistemas operativos especializados.
              </p>
            </div>

            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '15px',
              borderLeft: '4px solid #20c997'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #20c997, #17a2b8)',
                  borderRadius: '8px',
                  padding: '8px',
                  color: 'white',
                  display: 'inline-block',
                  marginRight: '10px',
                  fontSize: '16px'
                }}>🌐</span>
                Desarrollo Web
              </h4>
              <p style={{
                fontSize: '14px',
                marginBottom: '0',
                color: isDark ? '#e2e8f0' : '#4a5568'
              }}>
                Construyes aplicaciones web responsivas usando tecnologías como React, Node.js, HTML5, CSS3 y JavaScript ES6+, 
                creando experiencias de usuario excepcionales.
              </p>
            </div>

            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '15px',
              borderLeft: '4px solid #20c997'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #20c997, #17a2b8)',
                  borderRadius: '8px',
                  padding: '8px',
                  color: 'white',
                  display: 'inline-block',
                  marginRight: '10px',
                  fontSize: '16px'
                }}>📱</span>
                Apps Móviles
              </h4>
              <p style={{
                fontSize: '14px',
                marginBottom: '0',
                color: isDark ? '#e2e8f0' : '#4a5568'
              }}>
                Desarrollas apps para iOS y Android usando tecnologías como React Native, Flutter o Xamarin, 
                llegando a millones de usuarios con un solo código base.
              </p>
            </div>

            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '15px',
              borderLeft: '4px solid #20c997'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #20c997, #17a2b8)',
                  borderRadius: '8px',
                  padding: '8px',
                  color: 'white',
                  display: 'inline-block',
                  marginRight: '10px',
                  fontSize: '16px'
                }}>🗄️</span>
                Bases de Datos
              </h4>
              <p style={{
                fontSize: '14px',
                marginBottom: '0',
                color: isDark ? '#e2e8f0' : '#4a5568'
              }}>
                Dominas tanto bases de datos relacionales (MySQL, PostgreSQL) como no relacionales (MongoDB, Firebase), 
                manejando millones de registros con eficiencia.
              </p>
            </div>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, #20c997, #17a2b8)',
          color: 'white',
          textAlign: 'center',
          borderRadius: '15px',
          padding: '40px 30px',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
            🚀 Tu Futuro como Programador
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>🏢 Empresas Tech</h4>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>Google, Microsoft, Meta, Amazon</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>🌐 Trabajo Remoto</h4>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>Clientes internacionales desde casa</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>🚀 Tu Startup</h4>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>Crear la próxima app exitosa</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>💰 Excelentes Salarios</h4>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>$15,000 - $50,000+ mensual</p>
            </div>
          </div>
        </section>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: isDark ? '#4dd0e1' : '#20c997',
            marginBottom: '20px',
            borderBottom: '3px solid #20c997',
            paddingBottom: '10px'
          }}>
            🛠️ Tecnologías que Dominarás
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '4px solid #20c997',
              textAlign: 'center'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px'
              }}>Frontend</h4>
              <p style={{
                fontSize: '14px',
                color: isDark ? '#c8cdd3' : '#666'
              }}>
                React, Vue.js, Angular<br/>
                HTML5, CSS3, JavaScript<br/>
                Bootstrap, Tailwind CSS
              </p>
            </div>
            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '4px solid #20c997',
              textAlign: 'center'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px'
              }}>Backend</h4>
              <p style={{
                fontSize: '14px',
                color: isDark ? '#c8cdd3' : '#666'
              }}>
                Node.js, Python, Java<br/>
                Express, Django, Spring<br/>
                APIs REST, GraphQL
              </p>
            </div>
            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '4px solid #20c997',
              textAlign: 'center'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px'
              }}>Móvil</h4>
              <p style={{
                fontSize: '14px',
                color: isDark ? '#c8cdd3' : '#666'
              }}>
                React Native<br/>
                Flutter, Xamarin<br/>
                iOS, Android nativo
              </p>
            </div>
            <div style={{
              background: isDark ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '4px solid #20c997',
              textAlign: 'center'
            }}>
              <h4 style={{
                color: isDark ? '#4dd0e1' : '#20c997',
                marginBottom: '10px'
              }}>Cloud</h4>
              <p style={{
                fontSize: '14px',
                color: isDark ? '#c8cdd3' : '#666'
              }}>
                AWS, Azure, GCP<br/>
                Docker, Kubernetes<br/>
                CI/CD, DevOps
              </p>
            </div>
          </div>
        </section>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '22px',
            color: isDark ? '#4dd0e1' : '#20c997',
            marginBottom: '20px'
          }}>
            📚 Plan de Estudios
          </h3>
          <p style={{
            fontSize: '16px',
            color: isDark ? '#e2e8f0' : '#4a5568',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Nuestro programa está diseñado para llevarte de principiante a programador profesional en 3 años, 
            combinando teoría sólida con práctica intensiva en proyectos reales.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '25px'
          }}>
            <div style={{
              padding: '20px',
              background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>1️⃣</div>
              <h4 style={{
                color: isDark ? '#e6eef8' : '#2c3e50',
                marginBottom: '10px'
              }}>Fundamentos</h4>
              <p style={{
                color: isDark ? '#c8cdd3' : '#666',
                fontSize: '14px'
              }}>Lógica de programación, algoritmos básicos</p>
            </div>
            <div style={{
              padding: '20px',
              background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>2️⃣</div>
              <h4 style={{
                color: isDark ? '#e6eef8' : '#2c3e50',
                marginBottom: '10px'
              }}>Desarrollo Web</h4>
              <p style={{
                color: isDark ? '#c8cdd3' : '#666',
                fontSize: '14px'
              }}>Frontend y backend con proyectos reales</p>
            </div>
            <div style={{
              padding: '20px',
              background: isDark ? 'rgba(255,255,255,0.03)' : '#f8f9fa',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>3️⃣</div>
              <h4 style={{
                color: isDark ? '#e6eef8' : '#2c3e50',
                marginBottom: '10px'
              }}>Especialización</h4>
              <p style={{
                color: isDark ? '#c8cdd3' : '#666',
                fontSize: '14px'
              }}>Apps móviles, bases de datos avanzadas</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programacion;