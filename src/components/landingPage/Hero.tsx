import React from 'react';
import './Hero.css';

interface Bar3DProps {
  x: number;
  yTop: number;
  width: number;
  yBase: number;
  depth: number;
  delay?: number;
}

const Bar3D: React.FC<Bar3DProps> = ({ x, yTop, width, yBase, depth, delay = 0 }) => {
  const xBack = x + depth;
  const yBackTop = yTop - depth;
  const yBackBase = yBase - depth;

  // Front Face
  const frontPath = `M${x} ${yTop} L${x + width} ${yTop} L${x + width} ${yBase} L${x} ${yBase} Z`;

  // Top Face
  const topPath = `M${x} ${yTop} L${xBack} ${yBackTop} L${xBack + width} ${yBackTop} L${x + width} ${yTop} Z`;

  // Side Face
  const sidePath = `M${x + width} ${yTop} L${xBack + width} ${yBackTop} L${xBack + width} ${yBackBase} L${x + width} ${yBase} Z`;

  return (
    <g className="hero-bar-group" style={{ '--anim-delay': `${delay}s` } as React.CSSProperties}>
      <path className="bar-top" d={topPath} fill="#000" stroke="none" />
      <path className="bar-side" d={sidePath} fill="#000" stroke="none" />
      <path className="bar-front" d={frontPath} fill="#fff" stroke="#000" strokeWidth="6" />
    </g>
  );
};

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
          <g transform="translate(900, 300) scale(1.1)">
             <Bar3D x={0} yTop={350} width={140} yBase={500} depth={40} delay={0.1} />
             <Bar3D x={200} yTop={250} width={140} yBase={500} depth={40} delay={0.2} />
             <Bar3D x={400} yTop={100} width={140} yBase={500} depth={40} delay={0.3} />
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
