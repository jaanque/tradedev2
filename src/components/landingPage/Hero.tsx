import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Mouse Interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!gridRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate normalized position (-1 to 1)
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        // Animate Grid Rotation
        gsap.to(gridRef.current, {
            rotationY: xPos * 10, // Rotate Y based on X position
            rotationX: 60 + (yPos * -10), // Base 60deg tilt + mouse interaction
            duration: 1,
            ease: "power2.out"
        });

        // Animate Blobs (Parallax)
        gsap.to('.hero-bg-blob', {
            x: xPos * -60, // Move opposite to mouse
            y: yPos * -60,
            duration: 1.5,
            ease: "power2.out"
        });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    // Continuous subtle background animation
    gsap.to('.hero-bg-blob', {
      scale: "random(0.8, 1.2)",
      duration: "random(10, 20)",
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
        <div className="hero-grid" ref={gridRef}></div>
        <div className="hero-bg-blob blob-1"></div>
        <div className="hero-bg-blob blob-2"></div>
        <div className="hero-bg-blob blob-3"></div>
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
