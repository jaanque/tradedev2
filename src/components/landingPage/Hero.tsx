import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Invest in People,<br />
          Not Just Companies.
        </h1>
        <p className="hero-subtitle">
          The first social marketplace where influence is currency.
          Buy, sell, and trade user actions.
        </p>
        <div className="hero-cta">
          <button className="cta-primary">Start Trading</button>
          <button className="cta-secondary">How it Works</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
