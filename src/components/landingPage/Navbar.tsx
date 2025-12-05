import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Navbar.css';

const users = [
  { name: '@alex_dev', value: '+12.5%', price: '124 TK' },
  { name: '@sarah_des', value: '+8.2%', price: '98 TK' },
  { name: '@mike_builds', value: '-2.1%', price: '45 TK' },
  { name: '@jess_create', value: '+15.0%', price: '210 TK' },
  { name: '@tom_code', value: '+5.4%', price: '88 TK' },
  { name: '@emma_art', value: '-0.5%', price: '67 TK' },
  { name: '@david_pm', value: '+3.2%', price: '105 TK' },
  { name: '@lisa_ux', value: '+9.8%', price: '150 TK' },
];

const Navbar: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const totalWidth = ticker.scrollWidth;
    const duration = totalWidth / 50;

    gsap.to(ticker, {
      x: -totalWidth / 2,
      duration: duration,
      ease: "none",
      repeat: -1,
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">SocialStock</div>
        <div className="ticker-container">
          <div className="ticker-wrapper" ref={tickerRef}>
            {[...users, ...users, ...users, ...users].map((user, index) => (
              <div key={index} className="ticker-item">
                <span className="user-name">{user.name}</span>
                <span className={`user-value ${user.value.startsWith('+') ? 'positive' : 'negative'}`}>
                  {user.value}
                </span>
                <span className="user-price">{user.price}</span>
              </div>
            ))}
          </div>
        </div>

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
