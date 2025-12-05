import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle background animation
    gsap.to('.hero-bg-blob', {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      duration: "random(10, 20)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 5,
        from: "random"
      }
    });

    // Rotate slightly
    gsap.to('.hero-bg-blob', {
      rotation: "random(-20, 20)",
      duration: "random(15, 25)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 5,
        from: "random"
      }
    });
  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-background">
        <div className="hero-grid"></div> {/* New Grid Background */}
        <div className="hero-bg-blob blob-1"></div>
        <div className="hero-bg-blob blob-2"></div>
        <div className="hero-bg-blob blob-3"></div>
      </div>

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
