import React, { useState, useEffect } from 'react';

const BAETAM = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-06-15T00:00:00');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="baetam-page">
      {/* Botón de regreso */}
      <button className="back-button" onClick={onBack}>
        ← Regresar al inicio
      </button>
      
      <div className="baetam-container">
        {/* Header de BAETAM */}
        <div className="baetam-header">
          <img 
            src="/baetam/baetam.jpg" 
            alt="BAETAM - Bachillerato Autoplaneado" 
            className="baetam-hero-image"
          />
          <div className="baetam-header-content">
            <h1 className="baetam-title">BAETAM</h1>
            <h2 className="baetam-subtitle">
              Bachillerato Autoplaneado de Educación Tecnológica Agropecuaria y del Mar
            </h2>
          </div>
        </div>

        {/* Información principal */}
        <div className="baetam-info">
          <div className="info-card">
            <h3>🎓 Modalidad Sabatina</h3>
            <p>Especialmente diseñado para personas <strong>mayores de 18 años</strong> que desean continuar y completar su preparatoria.</p>
          </div>

          <div className="info-card">
            <h3>📅 Clases los Sábados</h3>
            <p>Horario flexible que te permite estudiar mientras trabajas. Clases presenciales todos los sábados.</p>
          </div>

          <div className="info-card">
            <h3>🌱 Enfoque Agropecuario</h3>
            <p>Preparatoria con orientación técnica en el sector agropecuario y del mar, preparándote para el futuro.</p>
          </div>
        </div>

        {/* Sección de inscripciones */}
        <div className="inscriptions-section">
          <h2 className="section-title">Próximas Inscripciones</h2>
          <div className="inscription-period">
            <h3>📝 Período de Inscripciones: Mayo - Junio 2026</h3>
            <p>Las inscripciones para el nuevo ciclo escolar estarán abiertas durante los meses de mayo y junio de 2026.</p>
          </div>

          {/* Cuenta regresiva */}
          <div className="countdown-section">
            <h3>⏰ Tiempo restante para las inscripciones:</h3>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-number">{timeLeft.days}</span>
                <span className="time-label">Días</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-label">Horas</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-label">Minutos</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-label">Segundos</span>
              </div>
            </div>
            <p className="countdown-date">🗓️ Inicio de inscripciones: 15 de Junio de 2026</p>
          </div>
        </div>

        {/* Requisitos */}
        <div className="requirements-section">
          <h2 className="section-title">Requisitos de Ingreso</h2>
          <div className="requirements-grid">
            <div className="requirement-item">
              <span className="requirement-icon">👤</span>
              <p>Ser mayor de 18 años</p>
            </div>
            <div className="requirement-item">
              <span className="requirement-icon">📜</span>
              <p>Certificado de secundaria</p>
            </div>
            <div className="requirement-item">
              <span className="requirement-icon">🆔</span>
              <p>Identificación oficial</p>
            </div>
            <div className="requirement-item">
              <span className="requirement-icon">📸</span>
              <p>Fotografías tamaño infantil</p>
            </div>
            <div className="requirement-item">
              <span className="requirement-icon">🏠</span>
              <p>Comprobante de domicilio</p>
            </div>
            <div className="requirement-item">
              <span className="requirement-icon">🩺</span>
              <p>Certificado médico</p>
            </div>
          </div>
        </div>

        {/* Ventajas */}
        <div className="advantages-section">
          <h2 className="section-title">¿Por qué elegir BAETAM?</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h4>⏰ Horario Flexible</h4>
              <p>Solo los sábados, perfecto para personas que trabajan entre semana.</p>
            </div>
            <div className="advantage-card">
              <h4>🎯 Enfoque Práctico</h4>
              <p>Aprendizaje orientado al sector agropecuario con aplicaciones reales.</p>
            </div>
            <div className="advantage-card">
              <h4>👨‍🏫 Docentes Especializados</h4>
              <p>Profesores con experiencia en educación para adultos.</p>
            </div>
            <div className="advantage-card">
              <h4>🏆 Certificación Oficial</h4>
              <p>Certificado de bachillerato con validez oficial de la SEP.</p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="contact-section">
          <h2 className="section-title">¿Necesitas más información?</h2>
          <p>Contáctanos para resolver todas tus dudas sobre BAETAM</p>
          <div className="contact-info">
            <p>📍 Centro de Bachillerato Tecnológico Agropecuario No. 134</p>
            <p>📍 San Francisco Tetlanohcan, Tlaxcala</p>
            <p>📞 Informes: Disponibles próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BAETAM;