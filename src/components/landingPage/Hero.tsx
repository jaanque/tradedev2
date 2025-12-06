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
            <pattern id="hexGrid" width="60" height="104" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 17 L60 52 L30 69 L0 52 L0 17 Z" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
              <path d="M30 52 L30 104" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
            </pattern>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Base Grid */}
          <rect width="100%" height="100%" fill="url(#hexGrid)" />

          {/* Creative Elements: Rising Data Stream */}
          <g className="creative-shapes" stroke="#e0e0e0" strokeWidth="1.5" fill="none">
             {/* Large connecting arcs symbolizing global connection */}
             <path d="M -100 800 Q 300 500 720 450 T 1540 100" />
             <path d="M -100 850 Q 350 550 720 500 T 1540 150" opacity="0.7" />
             <path d="M -100 900 Q 400 600 720 550 T 1540 200" opacity="0.4" />

             {/* Nodes on the lines */}
             <circle cx="300" cy="590" r="4" fill="#d0d0d0" className="floating-node" style={{animationDelay: '0s'}} />
             <circle cx="720" cy="450" r="6" fill="#c0c0c0" className="floating-node" style={{animationDelay: '1s'}} />
             <circle cx="1100" cy="250" r="5" fill="#d0d0d0" className="floating-node" style={{animationDelay: '2s'}} />
          </g>

          {/* Overlay to fade edges for 'Solid' look */}
          <rect width="100%" height="100%" fill="url(#fadeGradient)" />
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
