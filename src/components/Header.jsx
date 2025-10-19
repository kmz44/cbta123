import React, { useState } from 'react';

const Header = ({ 
  toggleMode, 
  toggleAutoMode,
  isLightMode, 
  isAutoMode,
  toggleNav, 
  isNavActive, 
  currentView, 
  setCurrentView, 
  carrerasOptions 
}) => {
  const [showCarrerasMenu, setShowCarrerasMenu] = useState(false);

  const handleNavClick = (path) => (e) => {
    e.preventDefault();
    setCurrentView(path);
    toggleNav();
  };

  const toggleCarrerasMenu = () => {
    setShowCarrerasMenu(!showCarrerasMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <img 
            src="/images/cbta134.png" 
            alt="Logo CBTA 134" 
            className="logo"
            onClick={() => setCurrentView('home')}
            style={{ cursor: 'pointer' }}
          />
          <h1 
            className="site-title"
            onClick={() => setCurrentView('home')}
            style={{ cursor: 'pointer' }}
          >
            Centro de Bachillerato Tecnológico Agropecuario 134
          </h1>
        </div>

        <nav className={`main-nav ${isNavActive ? 'active' : ''}`}>
          <div className="theme-controls">
            <button 
              className={`auto-mode-toggle ${isAutoMode ? 'active' : ''}`}
              onClick={toggleAutoMode}
              title={isAutoMode ? 'Desactivar modo automático' : 'Activar modo automático (6 AM - 6 PM)'}
            >
              {isAutoMode ? '🕐 AUTO' : '🕐 MANUAL'}
            </button>
            <button 
              className="theme-toggle"
              onClick={toggleMode}
              title={`Cambiar a modo ${isLightMode ? 'oscuro' : 'claro'}`}
            >
              {isLightMode ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;