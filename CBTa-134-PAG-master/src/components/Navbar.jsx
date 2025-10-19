import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen === true) setSubmenuOpen(false); // Reinicia submenu al abrir menú
  };

  const toggleSubmenu = (e) => {
    e.stopPropagation(); // ← Detiene el cierre accidental del menú completo
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/assets/cbta/cbta.png" alt="Logo CBTA" className="logo-img" />
        <h1>CBTA 134</h1>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/cbta/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
          <li><Link to="/cbta/programas" onClick={() => setMenuOpen(false)}>Programas</Link></li>
          <li><Link to="/cbta/clubs" onClick={() => setMenuOpen(false)}>Clubs</Link></li>
          <li><Link to="/cbta/galeria" onClick={() => setMenuOpen(false)}>Galería</Link></li>
          <li><Link to="/cbta/saetam" onClick={() => setMenuOpen(false)}>SAETAM</Link></li>
          <li><Link to="/cbta/clubes-monumentos" onClick={() => setMenuOpen(false)}>Monumentos</Link></li>
          <li><Link to="/cbta/guardianes-malinche" onClick={() => setMenuOpen(false)}>Guardianes</Link></li>

          <li className={`submenu ${submenuOpen ? "open" : ""}`}>
            <button onClick={toggleSubmenu} className="submenu-toggle">
              Maestros ▾
            </button>
            {submenuOpen && (
              <ul className="submenu-items">
                <li><a href="http://www.planeaciondidactica.sems.gob.mx/login" target="_blank" rel="noopener noreferrer">Cuadernillos</a></li>
                <li><a href="http://168.255.121.25/develop/index.php?" target="_blank" rel="noopener noreferrer">SISEEMS</a></li>
                <li><a href="https://portalautoservicios-sems.sep.gob.mx/login.jsp" target="_blank" rel="noopener noreferrer">Talon de pago</a></li>
                <li><a href="https://dgetaycm.sep.gob.mx/" target="_blank" rel="noopener noreferrer">DGETAYCM México</a></li>
                <li><a href="https://www.septlaxcala.gob.mx" target="_blank" rel="noopener noreferrer">SEP Tlaxcala</a></li>
                <li><a href="https://oficinavirtual.issste.gob.mx/" target="_blank" rel="noopener noreferrer">Oficina C.ISSSTE</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
