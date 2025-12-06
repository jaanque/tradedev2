import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        <svg
          className="hero-bg-svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <pattern id="gridPattern" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f5f5f5" strokeWidth="2"/>
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* Main Chart Group */}
          <g transform="translate(50, 50) scale(0.9)">
             {/* Area Fill */}
             <path
               d="M0 500 L0 400 Q 150 420 250 300 T 500 200 T 750 50 V 500 Z"
               fill="url(#areaGrad)"
             />

             {/* The Rising Line */}
             <path
               d="M0 400 Q 150 420 250 300 T 500 200 T 750 50"
               fill="none"
               stroke="#000"
               strokeWidth="8"
               strokeLinecap="round"
               strokeLinejoin="round"
             />

             {/* End Dot */}
             <circle cx="750" cy="50" r="12" fill="#000" />
             <circle cx="750" cy="50" r="20" fill="none" stroke="#000" strokeWidth="2" opacity="0.3" />

             {/* Data Points / Highlight markers */}
             <circle cx="250" cy="300" r="6" fill="#fff" stroke="#000" strokeWidth="3" />
             <circle cx="500" cy="200" r="6" fill="#fff" stroke="#000" strokeWidth="3" />
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
