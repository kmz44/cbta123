import React from 'react';
import BackButton from '../../components/BackButton';

const useIsDark = () => {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('dark-mode');
};

const Clubs = ({ setCurrentView }) => {
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

  const subtitleStyle = {
    fontSize: '16px',
    color: isDark ? '#bfc7cf' : '#666',
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: '1.6'
  };

  const clubsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginBottom: '40px'
  };

  const clubCardStyle = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: isDark ? '1px solid rgba(255,255,255,0.03)' : 'none'
  };

  const clubIconStyle = {
    width: '100%',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    color: 'white',
    marginBottom: '10px'
  };

  const clubContentStyle = {
    padding: '20px'
  };

  const clubTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: isDark ? '#e6eef8' : '#2c3e50',
    marginBottom: '10px'
  };

  const clubDescStyle = {
    fontSize: '14px',
    color: isDark ? '#c8cdd3' : '#666',
    lineHeight: '1.5',
    marginBottom: '15px'
  };

  const clubBenefitsStyle = {
    fontSize: '13px',
    color: '#28a745',
    fontWeight: 'bold'
  };

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: isDark ? '#e6eef8' : '#2c3e50',
    marginBottom: '20px',
    marginTop: '50px',
    textAlign: 'center',
    borderBottom: '3px solid #3498db',
    paddingBottom: '10px'
  };

  // Datos de los clubs
  const clubsDeportivos = [
    {
      name: 'Atletismo',
      icon: '🏃‍♂️',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      description: 'Desarrolla resistencia, velocidad y superación personal a través de diversas disciplinas atléticas.',
      benefits: 'Resistencia • Velocidad • Superación personal'
    },
    {
      name: 'Futbol Soccer Varonil',
      icon: '⚽',
      gradient: 'linear-gradient(135deg, #10ac84, #00a085)',
      description: 'Desarrolla habilidades físicas, trabajo en equipo y disciplina a través del fútbol varonil.',
      benefits: 'Mejora condición física • Trabajo en equipo • Disciplina'
    },
    {
      name: 'Futbol Soccer Femenil',
      icon: '⚽',
      gradient: 'linear-gradient(135deg, #ff9ff3, #f368e0)',
      description: 'Desarrolla habilidades físicas, trabajo en equipo y disciplina a través del fútbol femenil.',
      benefits: 'Mejora condición física • Trabajo en equipo • Disciplina'
    },
    {
      name: 'Básquetbol Varonil',
      icon: '🏀',
      gradient: 'linear-gradient(135deg, #ffa726, #ff7043)',
      description: 'Fortalece la coordinación, agilidad y estrategia mediante este dinámico deporte de cancha para varones.',
      benefits: 'Coordinación • Agilidad • Pensamiento estratégico'
    },
    {
      name: 'Básquetbol Femenil',
      icon: '🏀',
      gradient: 'linear-gradient(135deg, #ab47bc, #8e24aa)',
      description: 'Fortalece la coordinación, agilidad y estrategia mediante este dinámico deporte de cancha para mujeres.',
      benefits: 'Coordinación • Agilidad • Pensamiento estratégico'
    },
    {
      name: 'Voleibol Varonil',
      icon: '🏐',
      gradient: 'linear-gradient(135deg, #42a5f5, #1e88e5)',
      description: 'Fomenta la comunicación, reflejos rápidos y compañerismo en un ambiente deportivo positivo varonil.',
      benefits: 'Comunicación • Reflejos • Compañerismo'
    },
    {
      name: 'Voleibol Femenil',
      icon: '🏐',
      gradient: 'linear-gradient(135deg, #ef5350, #e53935)',
      description: 'Fomenta la comunicación, reflejos rápidos y compañerismo en un ambiente deportivo positivo femenil.',
      benefits: 'Comunicación • Reflejos • Compañerismo'
    },
    {
      name: 'Organización Deportiva',
      icon: '🏆',
      gradient: 'linear-gradient(135deg, #fdd835, #f57f17)',
      description: 'Coordina y organiza eventos deportivos, desarrollando habilidades de liderazgo y gestión.',
      benefits: 'Liderazgo • Organización • Gestión de eventos'
    }
  ];

  const clubsCulturales = [
    {
      name: 'Banda de Guerra',
      icon: '🥁',
      gradient: 'linear-gradient(135deg, #8e24aa, #6a1b9a)',
      description: 'Combina música, marchas y protocolo militar, representando a la institución en eventos oficiales.',
      benefits: 'Disciplina musical • Protocolo • Representación institucional'
    },
    {
      name: 'Rondalla y Canto',
      icon: '🎵',
      gradient: 'linear-gradient(135deg, #f06292, #e91e63)',
      description: 'Desarrolla habilidades musicales y vocales a través de la interpretación de música tradicional.',
      benefits: 'Habilidades musicales • Expresión vocal • Tradición musical'
    },
    {
      name: 'Danza Folklórica',
      icon: '💃',
      gradient: 'linear-gradient(135deg, #26a69a, #00796b)',
      description: 'Preserva y promueve las tradiciones culturales mexicanas a través de la danza regional.',
      benefits: 'Cultura mexicana • Expresión artística • Tradiciones'
    },
    {
      name: 'Club de Cine',
      icon: '🎬',
      gradient: 'linear-gradient(135deg, #5c6bc0, #3f51b5)',
      description: 'Explora el arte cinematográfico, desarrollando habilidades de producción y análisis fílmico.',
      benefits: 'Creatividad audiovisual • Análisis crítico • Producción'
    },
    {
      name: 'Banda Musicalizada',
      icon: '🎺',
      gradient: 'linear-gradient(135deg, #ff7043, #d84315)',
      description: 'Combina música instrumental con espectáculo, representando a la institución en eventos culturales.',
      benefits: 'Habilidades musicales • Espectáculo • Representación'
    }
  ];

  const clubsAcademicos = [
    {
      name: 'Ajedrez',
      icon: '♟️',
      gradient: 'linear-gradient(135deg, #424242, #212121)',
      description: 'Desarrolla el pensamiento lógico, estrategia y concentración a través del juego ciencia.',
      benefits: 'Pensamiento lógico • Estrategia • Concentración'
    },
    {
      name: 'Club de Ciencias',
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #00bcd4, #0097a7)',
      description: 'Fomenta la investigación, experimentación y el método científico entre los estudiantes.',
      benefits: 'Investigación • Método científico • Experimentación'
    },
    {
      name: 'Francés',
      icon: '🇫🇷',
      gradient: 'linear-gradient(135deg, #3f51b5, #303f9f)',
      description: 'Amplía horizontes culturales y académicos mediante el aprendizaje del idioma francés.',
      benefits: 'Idioma extranjero • Cultura internacional • Oportunidades académicas'
    },
    {
      name: 'Arte y Pintura',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #ff5722, #d84315)',
      description: 'Estimula la creatividad y expresión artística mediante diversas técnicas de pintura.',
      benefits: 'Creatividad • Expresión artística • Técnicas de arte'
    },
    {
      name: 'Robótica',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #9c27b0, #7b1fa2)',
      description: 'Explora la programación y construcción de robots, desarrollando habilidades tecnológicas.',
      benefits: 'Programación • Tecnología • Innovación'
    },
    {
      name: 'Lectura y Literatura',
      icon: '📚',
      gradient: 'linear-gradient(135deg, #795548, #5d4037)',
      description: 'Fomenta el hábito de la lectura y desarrolla habilidades de comprensión y análisis literario.',
      benefits: 'Comprensión lectora • Cultura general • Pensamiento crítico'
    }
  ];

  const ClubCard = ({ name, icon, gradient, description, benefits }) => (
    <div 
      style={clubCardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = isDark ? '0 15px 35px rgba(0,0,0,0.8)' : '0 15px 35px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{...clubIconStyle, background: gradient}}>
        <span style={{fontSize: '56px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>{icon}</span>
      </div>
      <div style={clubContentStyle}>
        <h3 style={clubTitleStyle}>{name}</h3>
        <p style={clubDescStyle}>{description}</p>
        <p style={clubBenefitsStyle}>{benefits}</p>
      </div>
    </div>
  );

  return (
    <div style={pageStyle}>
      <BackButton onBack={() => setCurrentView('home')} />
      <div style={containerStyle}>
        <h1 style={titleStyle}>🏆 Clubes y Actividades Extracurriculares</h1>
        <p style={subtitleStyle}>
          En el CBTA 134 creemos en la formación integral de nuestros estudiantes. Por eso ofrecemos una amplia variedad de clubes y actividades que complementan tu educación académica, desarrollando habilidades sociales, físicas y culturales.
        </p>

        <section>
          <h2 style={sectionTitleStyle}>🏃‍♂️ Clubes Deportivos</h2>
          <div style={clubsGridStyle}>
            {clubsDeportivos.map((club, index) => (
              <ClubCard key={index} {...club} />
            ))}
          </div>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>🎭 Clubes Culturales</h2>
          <div style={clubsGridStyle}>
            {clubsCulturales.map((club, index) => (
              <ClubCard key={index} {...club} />
            ))}
          </div>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>📚 Clubes Académicos</h2>
          <div style={clubsGridStyle}>
            {clubsAcademicos.map((club, index) => (
              <ClubCard key={index} {...club} />
            ))}
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '40px 20px',
          textAlign: 'center',
          color: 'white',
          marginTop: '50px'
        }}>
          <h3 style={{fontSize: '24px', marginBottom: '20px'}}>🌟 ¿Por qué unirte a un club?</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🤝 Socialización</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Conoce nuevos amigos con intereses similares</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🎯 Habilidades</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Desarrolla talentos y competencias especiales</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>🏆 Logros</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Participa en competencias y eventos</p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', marginBottom: '10px'}}>📈 Crecimiento</h4>
              <p style={{fontSize: '14px', opacity: '0.9'}}>Fortalece tu desarrollo personal</p>
            </div>
          </div>
        </section>

        <section style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 8px 25px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{color: isDark ? '#e6eef8' : '#2c3e50', marginBottom: '15px'}}>📝 ¿Cómo inscribirse?</h3>
          <p style={{color: isDark ? '#c8cdd3' : '#666', marginBottom: '20px', lineHeight: '1.6'}}>
            Las inscripciones a clubes se realizan al inicio de cada semestre. Acércate con el coordinador de actividades extracurriculares o pregunta a tu maestro tutor para más información sobre horarios y requisitos.
          </p>
          <div style={{
            background: isDark ? 'rgba(30,118,255,0.06)' : '#e3f2fd',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px'
          }}>
            <p style={{color: isDark ? '#93c5fd' : '#1976d2', fontWeight: 'bold', margin: 0}}>
              💡 ¡Recuerda! Puedes participar en más de un club, siempre y cuando no se crucen los horarios.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clubs;