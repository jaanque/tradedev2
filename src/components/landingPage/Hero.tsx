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
            <linearGradient id="blockSurface" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#eeeeee" />
            </linearGradient>
            <linearGradient id="blockSide" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#d0d0d0" />
            </linearGradient>
          </defs>

          {/* Abstract Isometric Landscape */}
          <g transform="translate(720, 600) scale(1.5)">
            {/* Center Block */}
            <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="url(#blockSurface)" stroke="#dcdcdc" strokeWidth="1"/>
            <path d="M0 50 L0 100 L43 75 L43 25" fill="#e8e8e8" />
            <path d="M0 50 L-43 25 L-43 75 L0 100" fill="#dbdbdb" />

            {/* Right Blocks */}
            <g transform="translate(86, -50)">
               <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="url(#blockSurface)" stroke="#dcdcdc" strokeWidth="1"/>
               <path d="M0 50 L0 80 L43 55 L43 25" fill="#e8e8e8" />
               <path d="M0 50 L-43 25 L-43 55 L0 80" fill="#dbdbdb" />
            </g>
            <g transform="translate(86, 50)">
               <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="url(#blockSurface)" stroke="#dcdcdc" strokeWidth="1"/>
               <path d="M0 50 L0 70 L43 45 L43 25" fill="#e8e8e8" />
               <path d="M0 50 L-43 25 L-43 45 L0 70" fill="#dbdbdb" />
            </g>

            {/* Left Blocks */}
            <g transform="translate(-86, -50)">
               <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="url(#blockSurface)" stroke="#dcdcdc" strokeWidth="1"/>
               <path d="M0 50 L0 90 L43 65 L43 25" fill="#e8e8e8" />
               <path d="M0 50 L-43 25 L-43 65 L0 90" fill="#dbdbdb" />
            </g>
             <g transform="translate(-86, 50)">
               <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="url(#blockSurface)" stroke="#dcdcdc" strokeWidth="1"/>
               <path d="M0 50 L0 60 L43 35 L43 25" fill="#e8e8e8" />
               <path d="M0 50 L-43 25 L-43 35 L0 60" fill="#dbdbdb" />
            </g>

             {/* Far Back Blocks (Faded) */}
             <g transform="translate(0, -100)" opacity="0.5">
               <path d="M0 -50 L43 -25 L43 25 L0 50 L-43 25 L-43 -25 Z" fill="#fcfcfc" stroke="#eeeeee" strokeWidth="1"/>
             </g>
          </g>

          {/* Decorative Lines suggesting data flow */}
          <line x1="0" y1="850" x2="1440" y2="850" stroke="#f0f0f0" strokeWidth="2" />
          <line x1="0" y1="870" x2="1440" y2="870" stroke="#f5f5f5" strokeWidth="1" />
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
