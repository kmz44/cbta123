import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Gallery from "./components/Gallery";
import ValoresInstitucionales from "./components/ValoresInstitucionales";
import AcercaDeCBTa134 from "./components/AcercaDeCBTa134";
import AdmissionProcess from "./components/AdmissionProcess";
import CarrerasYClubes from "./components/CarrerasYClubes";
import SAETAMComponent from "./components/SAETAMComponent";
import Maestros from "./components/Maestros";
import Noticias from "./components/Noticias";
// Nuevos componentes importados del CBTa-134-PAG-master
import Nosotros from "./pages/Cbta/Nosotros";
import Galeria from "./pages/Cbta/Galeria";
import Clubs from "./pages/Cbta/Clubs";
import Contacto from "./pages/Contacto";
import Agropecuario from "./pages/carreras/Agropecuario";
import SPP from "./pages/carreras/SPP";
import Ofimatica from "./pages/carreras/Ofimatica";
import Programacion from "./pages/carreras/Programacion";
import Contabilidad from "./pages/carreras/Contabilidad";
import BAETAM from "./components/BAETAM";
import AdmissionCountdown from "./components/AdmissionCountdown";
import './App.css'; // Estilos principales
import './day-mode.css'; // Modo día
import './night-mode.css'; // Modo noche

const App = () => {
  const initialOptions = [
    {
      image: "/images/valores.png",
      title: "Acerca de CBTa 134",
      description: "Conoce nuestra historia, misión, visión y valores que nos definen como institución.",
      path: 'acerca'
    },
    {
      image: "/images/programacion.jpg",
      title: "Carreras Técnicas",
      description: "Descubre nuestras especialidades técnicas y elige tu futuro profesional.",
      path: 'carreras'
    },
    {
      image: "/images/galeria.png",
      title: "Galería",
      description: "Explora nuestra colección de fotos y eventos destacados.",
      path: 'galeria'
    },
    {
      image: "/images/proceso de admincion.jpg",
      title: "Proceso de Admisión",
      description: "Información sobre requisitos y pasos para formar parte de nuestra institución.",
      path: 'admission'
    },
    // Nuevas opciones agregadas
    {
      image: "/images/campus.png",
      title: "Clubs Estudiantiles",
      description: "Únete a nuestros clubs deportivos, culturales y académicos.",
      path: 'clubs'
    },
    {
      image: "/images/ofimatica.jpg",
      title: "Contacto",
      description: "Información de contacto y ubicación de nuestra institución.",
      path: 'contacto'
    },
    {
      image: "/images/cbta134.png",
      title: "Maestros",
      description: "Recursos y enlaces útiles para el personal docente.",
      path: 'maestros'
    }
  ];

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem("appOptions");
    return savedOptions ? JSON.parse(savedOptions) : initialOptions;
  });

  const [currentView, setCurrentView] = useState('home');
  const [isNavActive, setIsNavActive] = useState(false);
  const [deviceType, setDeviceType] = useState('phone'); // Solo teléfono
  // Función para determinar el modo basado en la hora
  const getAutoMode = () => {
    const currentHour = new Date().getHours();
    // Modo día: 6 AM a 6 PM (6-18), modo noche: 6 PM a 6 AM (18-6)
    return currentHour >= 6 && currentHour < 18;
  };

  const [isLightMode, setIsLightMode] = useState(() => {
    const savedManualMode = localStorage.getItem("manualModeOverride");
    if (savedManualMode !== null) {
      return JSON.parse(savedManualMode);
    }
    return getAutoMode();
  });

  const [isAutoMode, setIsAutoMode] = useState(() => {
    const savedAutoMode = localStorage.getItem("isAutoMode");
    return savedAutoMode ? JSON.parse(savedAutoMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("appOptions", JSON.stringify(options));
  }, [options]);

  useEffect(() => {
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
    localStorage.setItem("isAutoMode", JSON.stringify(isAutoMode));
    document.body.className = isLightMode ? 'light-mode' : 'dark-mode';
  }, [isLightMode, isAutoMode]);

  // Effect para cambio automático de modo cada minuto si está activado
  useEffect(() => {
    if (isAutoMode) {
      const interval = setInterval(() => {
        const autoMode = getAutoMode();
        if (autoMode !== isLightMode) {
          setIsLightMode(autoMode);
        }
      }, 60000); // Verificar cada minuto

      return () => clearInterval(interval);
    }
  }, [isAutoMode, isLightMode]);

  const handleLinkClick = (path) => () => {
    setCurrentView(path);
    setIsNavActive(false);
  };

  const toggleMode = () => {
    if (isAutoMode) {
      // Si está en modo automático, cambiar a modo manual y alternar
      setIsAutoMode(false);
      setIsLightMode(!isLightMode);
      localStorage.setItem("manualModeOverride", JSON.stringify(!isLightMode));
    } else {
      // Si está en modo manual, solo alternar
      setIsLightMode(!isLightMode);
      localStorage.setItem("manualModeOverride", JSON.stringify(!isLightMode));
    }
  };

  const toggleAutoMode = () => {
    if (!isAutoMode) {
      // Cambiar a modo automático
      setIsAutoMode(true);
      setIsLightMode(getAutoMode());
      localStorage.removeItem("manualModeOverride");
    } else {
      // Cambiar a modo manual
      setIsAutoMode(false);
      localStorage.setItem("manualModeOverride", JSON.stringify(isLightMode));
    }
  };

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const renderCurrentView = () => {
    const goBackToHome = () => setCurrentView('home');
    
    switch (currentView) {
      case 'acerca':
        return <AcercaDeCBTa134 onBack={goBackToHome} />;
      case 'valores':
        return <ValoresInstitucionales onBack={goBackToHome} />;
      case 'noticias':
        return <Noticias onBack={goBackToHome} />;
      case 'carreras':
        return <CarrerasYClubes onBack={goBackToHome} setCurrentView={setCurrentView} />;
      case 'galeria':
        return <Galeria setCurrentView={setCurrentView} />;
      case 'admission':
        return <AdmissionProcess onBack={goBackToHome} />;
      case 'nosotros':
        return <Nosotros setCurrentView={setCurrentView} />;
      case 'clubs':
        return <Clubs setCurrentView={setCurrentView} />;
      case 'contacto':
        return <Contacto setCurrentView={setCurrentView} />;
      case 'saetam':
        return <SAETAMComponent onBack={goBackToHome} />;
      case 'maestros':
        return <Maestros onBack={goBackToHome} />;
      // Páginas de carreras
      case 'agropecuario':
        return <Agropecuario setCurrentView={setCurrentView} />;
      case 'spp':
        return <SPP setCurrentView={setCurrentView} />;
      case 'ofimatica':
        return <Ofimatica setCurrentView={setCurrentView} />;
      case 'programacion':
        return <Programacion setCurrentView={setCurrentView} />;
      case 'contabilidad':
        return <Contabilidad setCurrentView={setCurrentView} />;
      case 'baetam':
        return <BAETAM onBack={goBackToHome} />;
      default:
        return (
          <>
            <HeroSection />
            <main className="main-content">
              {/* Carrusel de imágenes principales para la página de inicio */}
              
              {/* Tarjetas de navegación inferior para teléfono */}
              <div className="navigation-cards">
                <h2 className="navigation-title">Navega por Nuestras Secciones</h2>
                <div className="options-grid">
                  <div className="option-card" onClick={handleLinkClick('acerca')}>
                    <img src="/images/valores.png" alt="Acerca de CBTa 134" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">🏛️ Acerca de CBTa 134</h3>
                      <p className="option-description">Conoce nuestra historia, misión, visión y valores que nos definen como institución.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('noticias')}>
                    <img src="/images/cbta134.png" alt="Noticias" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">📰 Noticias</h3>
                      <p className="option-description">Mantente informado sobre las últimas novedades, eventos y logros de nuestra institución.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('carreras')}>
                    <img src="/images/carreras tecnicas.png" alt="Carreras Técnicas" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Carreras Técnicas y Programas Educativos</h3>
                      <p className="option-description">Descubre nuestras especialidades técnicas, programas de estudio y elige tu futuro profesional.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('clubs')}>
                    <img src="/images/campus.png" alt="Clubs Estudiantiles" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Clubes studiantiles</h3>
                      <p className="option-description">Únete a nuestros clubs deportivos, culturales y académicos.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('galeria')}>
                    <img src="/images/galeria.png" alt="Galería" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Galería</h3>
                      <p className="option-description">Explora nuestra colección de fotos y eventos destacados.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('baetam')}>
                    <img src="/images/baetam.jpg" alt="BAETAM" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">BAETAM</h3>
                      <p className="option-description">Bachillerato Autoplaneado de Educación Tecnológica Agropecuaria y del Mar.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('admission')}>
                    <img src="/images/proceso de admincion.jpg" alt="Proceso de Admisión" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Proceso de Admisión</h3>
                      <p className="option-description">Información sobre requisitos y pasos para formar parte de nuestra institución.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('contacto')}>
                    <img src="/images/contacto cbta134.png" alt="Contacto" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Contacto</h3>
                      <p className="option-description">Información de contacto y ubicación de nuestra institución.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>

                  <div className="option-card" onClick={handleLinkClick('maestros')}>
                    <img src="/images/cbta134.png" alt="Maestros" className="option-image" />
                    <div className="option-content">
                      <h3 className="option-title">Maestros</h3>
                      <p className="option-description">Recursos y enlaces útiles para el personal docente.</p>
                      <button className="option-button">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        );
    }
  };

  // Agregar opciones de carreras al menú principal
  const carrerasOptions = [
    {
      image: "/images/agropecuarios.jpg",
      title: "Técnico Agropecuario",
      description: "Producción agrícola y pecuaria sustentable.",
      path: 'agropecuario'
    },
    {
      image: "/images/programacion.jpg",
      title: "Técnico en Programación",
      description: "Desarrollo de software y aplicaciones.",
      path: 'programacion'
    },
    {
      image: "/images/ofimatica.jpg",
      title: "Técnico en Ofimática",
      description: "Herramientas digitales y administración.",
      path: 'ofimatica'
    },
    {
      image: "/images/contabilidad.jpg",
      title: "Técnico en Contabilidad",
      description: "Análisis financiero y contable.",
      path: 'contabilidad'
    },
    {
      image: "/images/saetam.jpg",
      title: "Sistemas de Producción Pecuaria",
      description: "Manejo integral de especies animales.",
      path: 'spp'
    }
  ];

  return (
    <div className={`app ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Header 
        toggleMode={toggleMode}
        toggleAutoMode={toggleAutoMode}
        isLightMode={isLightMode}
        isAutoMode={isAutoMode}
        toggleNav={toggleNav}
        isNavActive={isNavActive}
        currentView={currentView}
        setCurrentView={setCurrentView}
        carrerasOptions={carrerasOptions}
      />
      
      <div className="app-content">
        {renderCurrentView()}
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;