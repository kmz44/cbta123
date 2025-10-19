import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import styles from "./AdmissionProcess.module.css";

const AdmissionProcess = ({ onBack }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [admissionTimeLeft, setAdmissionTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.body.classList.contains('dark-mode');
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calculateAdmissionTimeLeft = () => {
      const targetDate = new Date('2026-04-01T00:00:00');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setAdmissionTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setAdmissionTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateAdmissionTimeLeft();
    const timer = setInterval(calculateAdmissionTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    backgroundColor: isDarkMode ? '#07111a' : '#f0f2f5',
    color: isDarkMode ? '#d6dbe3' : '#333'
  };

  const cardStyle = {
    background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'white',
    color: isDarkMode ? '#d0d7de' : '#333',
    boxShadow: isDarkMode ? '0 10px 30px rgba(2,6,23,0.6)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };

  const fechaCardStyle = {
    background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#f8f9fa',
    color: isDarkMode ? '#d0d7de' : '#333'
  };

  const especialidadCardStyle = {
    background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'white',
    color: isDarkMode ? '#d0d7de' : '#333',
    boxShadow: isDarkMode ? '0 10px 30px rgba(2,6,23,0.6)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };

  const listItemStyle = {
    background: isDarkMode ? 'rgba(255,255,255,0.02)' : '#f8f9fa',
    color: isDarkMode ? '#d0d7de' : '#333'
  };

  return React.createElement('div', 
    { 
      className: `${styles.admissionProcess} ${isDarkMode ? 'dark-mode-content' : ''}`, 
      style: containerStyle 
    },
    React.createElement('header', { className: styles.header },
      React.createElement('h1', null, '¡Bienvenido al CBTA 134! 🎓'),
      React.createElement('p', { className: styles.welcomeText }, 
        'Tu futuro comienza aquí en San Francisco Tetlanohcan'
      )
    ),
    React.createElement('div', { className: styles.container },
      React.createElement('div', { className: styles.countdownContainer },
        React.createElement('h2', null, '🎓 ¡Próximos Procesos de Admisión 2026!'),
        React.createElement('div', { className: styles.countdown },
          React.createElement('div', { className: styles.countdownItem },
            React.createElement('span', null, admissionTimeLeft.days),
            React.createElement('p', null, 'Días')
          ),
          React.createElement('div', { className: styles.countdownItem },
            React.createElement('span', null, admissionTimeLeft.hours.toString().padStart(2, '0')),
            React.createElement('p', null, 'Horas')
          ),
          React.createElement('div', { className: styles.countdownItem },
            React.createElement('span', null, admissionTimeLeft.minutes.toString().padStart(2, '0')),
            React.createElement('p', null, 'Minutos')
          ),
          React.createElement('div', { className: styles.countdownItem },
            React.createElement('span', null, admissionTimeLeft.seconds.toString().padStart(2, '0')),
            React.createElement('p', null, 'Segundos')
          )
        ),
        React.createElement('div', { className: styles.countdownMessage },
          '¡Procesos de admisión inician el 1 de abril de 2026!'
        )
      ),
      React.createElement('div', { className: styles.card, style: cardStyle },
        React.createElement('h2', { className: styles.emojiTitle }, '📅 ¡Fechas Importantes!'),
        React.createElement('div', { className: styles.fechasGrid },
          React.createElement('div', { className: styles.fechaCard, style: fechaCardStyle },
            React.createElement('h3', null, '📝 Registro'),
            React.createElement('p', null, '1 marzo - 30 abril 2026'),
            React.createElement('p', null, '¡No te quedes fuera!')
          ),
          React.createElement('div', { className: styles.fechaCard, style: fechaCardStyle },
            React.createElement('h3', null, '📚 Examen'),
            React.createElement('p', null, '15 de junio 2026'),
            React.createElement('p', null, '¡Prepárate para brillar!')
          ),
          React.createElement('div', { className: styles.fechaCard, style: fechaCardStyle },
            React.createElement('h3', null, '🎉 Resultados'),
            React.createElement('p', null, '30 de junio 2026'),
            React.createElement('p', null, '¡El gran día!')
          ),
          React.createElement('div', { className: styles.fechaCard, style: fechaCardStyle },
            React.createElement('h3', null, '✍️ Inscripciones'),
            React.createElement('p', null, '1 - 15 julio 2026'),
            React.createElement('p', null, '¡Tu nueva aventura!')
          )
        )
      ),
      React.createElement('div', { className: styles.card, style: cardStyle },
        React.createElement('h2', { className: styles.emojiTitle }, '📋 ¿Qué necesitas traer?'),
        React.createElement('ul', { className: styles.requisitosList },
          React.createElement('li', { style: listItemStyle }, 'Tu certificado de secundaria o constancia'),
          React.createElement('li', { style: listItemStyle }, 'Acta de nacimiento'),
          React.createElement('li', { style: listItemStyle }, 'CURP actualizada'),
          React.createElement('li', { style: listItemStyle }, '2 fotos tamaño infantil'),
          React.createElement('li', { style: listItemStyle }, 'Comprobante de donde vives'),
          React.createElement('li', { style: listItemStyle }, 'Pago de registro')
        )
      ),
      React.createElement('div', { className: styles.card, style: cardStyle },
        React.createElement('h2', { className: styles.emojiTitle }, '🌟 ¡Elige tu camino!'),
        React.createElement('div', { className: styles.especialidadesGrid },
          React.createElement('div', { className: styles.especialidadCard, style: especialidadCardStyle },
            React.createElement('div', { className: styles.emojiIcon }, '🌱'),
            React.createElement('h3', null, 'Técnico Agropecuario'),
            React.createElement('p', null, '¡Aprende sobre agricultura y ganadería!')
          ),
          React.createElement('div', { className: styles.especialidadCard, style: especialidadCardStyle },
            React.createElement('div', { className: styles.emojiIcon }, '🐄'),
            React.createElement('h3', null, 'Técnico en Sistemas de Producción Pecuaria'),
            React.createElement('p', null, '¡Especialízate en producción animal!')
          ),
          React.createElement('div', { className: styles.especialidadCard, style: especialidadCardStyle },
            React.createElement('div', { className: styles.emojiIcon }, '💼'),
            React.createElement('h3', null, 'Técnico en Contabilidad'),
            React.createElement('p', null, '¡Conviértete en un experto en finanzas!')
          ),
          React.createElement('div', { className: styles.especialidadCard, style: especialidadCardStyle },
            React.createElement('div', { className: styles.emojiIcon }, '💻'),
            React.createElement('h3', null, 'Técnico en Ofimática'),
            React.createElement('p', null, '¡Domina herramientas de oficina y gestión!')
          ),
          React.createElement('div', { className: styles.especialidadCard, style: especialidadCardStyle },
            React.createElement('div', { className: styles.emojiIcon }, '🖥️'),
            React.createElement('h3', null, 'Técnico en Programación'),
            React.createElement('p', null, '¡Desarrolla software y aplicaciones!')
          )
        )
      ),
      React.createElement('div', { className: styles.card, style: cardStyle },
        React.createElement('h2', { className: styles.emojiTitle }, '📞 ¡Contáctanos!'),
        React.createElement('div', { className: styles.contactoInfo },
          React.createElement('p', null, '📍 Dirección: CARRETERA TETLANOHCAN A MALINTZIN KILÓMETRO NUM. 3, San Francisco, México, 90800'),
          React.createElement('p', null, '📞 Teléfono: ',
            React.createElement('a', { 
              href: 'tel:+522464623456', 
              style: { color: isDarkMode ? '#93c5fd' : '#3498db', textDecoration: 'none' }
            }, '01 (246) 46 2 34 56')
          ),
          React.createElement('p', null, '📧 Correo: ',
            React.createElement('a', { 
              href: 'mailto:cbta134@yahoo.com.mx', 
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: isDarkMode ? '#93c5fd' : '#3498db', textDecoration: 'none' }
            }, 'cbta134@yahoo.com.mx')
          ),
          React.createElement('p', null, '🌐 Sitio Web: ',
            React.createElement('a', { 
              href: 'http://www.cbta134.edu.mx/', 
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: isDarkMode ? '#93c5fd' : '#3498db', textDecoration: 'none' }
            }, 'www.cbta134.edu.mx')
          ),
          React.createElement('p', null, '🕒 Horario: Lunes a Viernes 7:00 AM - 4:00 PM, Sábados 8:00 AM - 12:00 PM')
        )
      )
    ),
    React.createElement(BackButton, { 
      onBack: onBack, 
      text: 'Regresar al Menú Principal' 
    })
  );
};

export default AdmissionProcess;
