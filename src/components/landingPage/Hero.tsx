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
            <linearGradient id="cityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
             <linearGradient id="cityGradHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#333" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
              <feOffset dx="5" dy="5" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main City Cluster Group */}
          <g transform="translate(500, 600) scale(1.2)">

             {/* Background blocks (Context) */}
             <path d="M-300 100 L-250 125 L-200 100 L-250 75 Z" fill="#f8f8f8" />
             <path d="M300 50 L350 75 L300 100 L250 75 Z" fill="#f8f8f8" />

             {/* Block 1: Left Tower */}
             <g transform="translate(-150, 50)">
                <path d="M0 -100 L50 -75 L50 -25 L0 -50 L-50 -25 L-50 -75 Z" fill="url(#cityGrad)" stroke="#dcdcdc" />
                <path d="M0 -50 L0 100 L50 125 L50 -25" fill="#eeeeee" />
                <path d="M0 -50 L-50 -25 L-50 125 L0 100" fill="#dddddd" />
             </g>

             {/* Block 2: Center Main Tower (Dark Accent) */}
             <g transform="translate(0, -50)">
                <path d="M0 -150 L60 -120 L60 -20 L0 -50 L-60 -20 L-60 -120 Z" fill="#222" stroke="#000" />
                <path d="M0 -50 L0 150 L60 180 L60 -20" fill="#111" />
                <path d="M0 -50 L-60 -20 L-60 180 L0 150" fill="#000" />
                {/* Windows/Detail */}
                <path d="M-40 0 L-20 -10 M-40 20 L-20 10 M-40 40 L-20 30" stroke="#444" strokeWidth="2" />
             </g>

             {/* Block 3: Right Tower */}
             <g transform="translate(140, 40)">
                <path d="M0 -120 L50 -95 L50 -25 L0 -50 L-50 -25 L-50 -95 Z" fill="url(#cityGrad)" stroke="#dcdcdc" />
                <path d="M0 -50 L0 120 L50 145 L50 -25" fill="#eeeeee" />
                <path d="M0 -50 L-50 -25 L-50 145 L0 120" fill="#dddddd" />
             </g>

             {/* Block 4: Foreground Low */}
             <g transform="translate(0, 100)">
                <path d="M0 -40 L40 -20 L40 20 L0 0 L-40 20 L-40 -20 Z" fill="#ffffff" stroke="#dcdcdc" />
                <path d="M0 0 L0 40 L40 60 L40 20" fill="#f0f0f0" />
                <path d="M0 0 L-40 20 L-40 60 L0 40" fill="#e0e0e0" />
             </g>

             {/* Abstract Grid Lines connecting them */}
             <path d="M-150 125 L0 200 L140 145" fill="none" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="5,5" />
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
