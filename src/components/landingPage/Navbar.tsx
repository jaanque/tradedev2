import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">SocialStock</div>

        <div className="navbar-desktop-auth">
          <button className="btn-login">Iniciar Sesión</button>
          <button className="btn-signup">Unirse</button>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button className="btn-login-mobile">Iniciar Sesión</button>
          <button className="btn-signup-mobile">Unirse</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
