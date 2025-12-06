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
          {/* Translating to x=750 starts the graph on the right half. y=200 lowers it. */}
          <g transform="translate(750, 400) scale(1.1)">
             {/* Area Fill */}
             <path
               d="M0 500 L0 400 Q 150 420 250 300 T 500 200 T 750 150 V 500 Z"
               fill="url(#areaGrad)"
             />

             {/* The Rising Line */}
             <path
               d="M0 400 Q 150 420 250 300 T 500 200 T 750 150"
               fill="none"
               stroke="#000"
               strokeWidth="8"
               strokeLinecap="round"
               strokeLinejoin="round"
             />

             {/* End Dot */}
             <circle cx="750" cy="150" r="12" fill="#000" />
             <circle cx="750" cy="150" r="25" fill="none" stroke="#000" strokeWidth="2" opacity="0.2" />

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
