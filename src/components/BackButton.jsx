import React from 'react';

const BackButton = ({ onClick, onBack, text = "Volver al inicio" }) => {
  const buttonStyle = {
    position: 'fixed',
    top: '80px', // Debajo del header
    left: '20px',
    padding: '12px 20px',
    backgroundColor: '#1e3c72',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(30, 60, 114, 0.3)',
    transition: 'all 0.3s ease',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    maxWidth: '200px'
  };

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = '#2a5298';
    el.style.transform = 'translateY(-2px)';
    el.style.boxShadow = '0 6px 20px rgba(30, 60, 114, 0.4)';
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = '#1e3c72';
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = '0 4px 15px rgba(30, 60, 114, 0.3)';
  };

  const handleClick = (e) => {
    // Prefer onBack (used by some components), fall back to onClick
    if (typeof onBack === 'function') return onBack(e);
    if (typeof onClick === 'function') return onClick(e);
  };

  return (
    <button 
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
    >
      <span>←</span>
      {text}
    </button>
  );
};

export default BackButton;
