import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        <svg
          className="hero-bg-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f0f0f0" strokeWidth="1.5"/>
            </pattern>
          </defs>

          {/* Background Grid - Covering Everything */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* Main Chart Group - Positioned to the Right and Lowered */}
          <g transform="translate(700, 200) scale(1.1)">
             {/* Bar 1 */}
             <path d="M0 350 L40 310 L180 310 L140 350 Z" fill="#000" stroke="none" />
             <path d="M140 350 L180 310 L180 460 L140 500 Z" fill="#000" stroke="none" />
             <path d="M0 350 L140 350 L140 500 L0 500 Z" fill="#fff" stroke="#000" strokeWidth="6" />

             {/* Bar 2 */}
             <path d="M200 250 L240 210 L380 210 L340 250 Z" fill="#000" stroke="none" />
             <path d="M340 250 L380 210 L380 460 L340 500 Z" fill="#000" stroke="none" />
             <path d="M200 250 L340 250 L340 500 L200 500 Z" fill="#fff" stroke="#000" strokeWidth="6" />

             {/* Bar 3 */}
             <path d="M400 100 L440 60 L580 60 L540 100 Z" fill="#000" stroke="none" />
             <path d="M540 100 L580 60 L580 460 L540 500 Z" fill="#000" stroke="none" />
             <path d="M400 100 L540 100 L540 500 L400 500 Z" fill="#fff" stroke="#000" strokeWidth="6" />
          </g>
        </svg>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Invierte en Personas,<br />
          No Solo en Empresas.
        </h1>
        <p className="hero-subtitle">
          El primer mercado social donde la influencia es moneda.
          Compra, vende e intercambia acciones de usuarios.
        </p>
        <div className="hero-cta">
          <button className="cta-primary">Empezar a Operar</button>
          <button className="cta-secondary">Descubre Más</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
