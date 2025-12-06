import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        <svg
          className="hero-bg-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="towerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0f0f0" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
             <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#333" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="3" dy="3" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Group: The Human Stock Market */}
          <g transform="translate(500, 550) scale(1.3)">

             {/* Base Platform Grid */}
             <path d="M-300 100 L0 250 L300 100 L0 -50 Z" fill="none" stroke="#f0f0f0" strokeWidth="2" />

             {/* Person-Stock 1 (Left, Starter) */}
             <g transform="translate(-150, 50)">
                {/* Pillar */}
                <path d="M0 0 L40 -20 L40 60 L0 80 L-40 60 L-40 -20 Z" fill="url(#towerGrad)" stroke="#dcdcdc" />
                <path d="M0 80 L0 0" stroke="#dcdcdc" />
                {/* Top Surface */}
                <path d="M0 0 L40 -20 L0 -40 L-40 -20 Z" fill="#ffffff" stroke="#dcdcdc" />
                {/* Avatar Head */}
                <circle cx="0" cy="-70" r="25" fill="#dcdcdc" filter="url(#dropShadow)" />
             </g>

             {/* Person-Stock 2 (Right, Growing) */}
             <g transform="translate(140, 40)">
                {/* Pillar */}
                <path d="M0 -50 L40 -70 L40 100 L0 120 L-40 100 L-40 -70 Z" fill="url(#towerGrad)" stroke="#dcdcdc" />
                <path d="M0 120 L0 -50" stroke="#dcdcdc" />
                 {/* Top Surface */}
                <path d="M0 -50 L40 -70 L0 -90 L-40 -70 Z" fill="#ffffff" stroke="#dcdcdc" />
                {/* Avatar Head */}
                <circle cx="0" cy="-120" r="25" fill="#bbbbbb" filter="url(#dropShadow)" />
             </g>

             {/* Person-Stock 3 (Center, The Unicorn/Star) */}
             <g transform="translate(0, -20)">
                {/* Pillar (Taller) */}
                <path d="M0 -100 L50 -125 L50 150 L0 175 L-50 150 L-50 -125 Z" fill="#222" stroke="#000" />
                <path d="M0 175 L0 -100" stroke="#333" />
                {/* Top Surface */}
                <path d="M0 -100 L50 -125 L0 -150 L-50 -125 Z" fill="#444" stroke="#333" />
                {/* Avatar Head (Dominant) */}
                <circle cx="0" cy="-200" r="35" fill="url(#headGrad)" filter="url(#dropShadow)" />
                {/* Shoulders hint? */}
                <path d="M-20 -160 Q 0 -150 20 -160" stroke="#666" strokeWidth="3" fill="none" />
             </g>

             {/* Connection Line (Graph) */}
             <polyline points="-150,-70 0,-200 140,-120" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeDasharray="10,10" />

             {/* Rising Trend Arrow */}
             <g transform="translate(180, -180)">
                <path d="M0 0 L20 -20 L40 0 M20 -20 L20 40" stroke="#000" strokeWidth="3" fill="none" />
             </g>

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
