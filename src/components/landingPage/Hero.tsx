import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    // Parallax Exit on Scroll
    gsap.to(contentRef.current, {
      yPercent: 50, // Move down
      opacity: 0,   // Fade out
      scale: 0.9,   // Shrink slightly
      filter: "blur(10px)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

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

    // Magnetic Button Effect
    const btn = btnRef.current;
    if (btn) {
      const handleBtnMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3, // Strength of magnet
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleBtnLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      };

      btn.addEventListener('mousemove', handleBtnMove);
      btn.addEventListener('mouseleave', handleBtnLeave);

      return () => {
        btn.removeEventListener('mousemove', handleBtnMove);
        btn.removeEventListener('mouseleave', handleBtnLeave);
      };
    }

    // Scroll Indicator Animation
    gsap.fromTo('.scroll-indicator',
      { y: 0, opacity: 0.5 },
      { y: 10, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );

  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-background">
        <div className="hero-grid" ref={gridRef}></div>
        <div className="hero-bg-blob blob-1"></div>
        <div className="hero-bg-blob blob-2"></div>
        <div className="hero-bg-blob blob-3"></div>
      </div>

      <div className="hero-content" ref={contentRef}>
        <h1 className="hero-title">
          Invierte en Personas,<br />
          No Solo en Empresas.
        </h1>
        <p className="hero-subtitle">
          El primer mercado social donde la influencia es moneda.
          Compra, vende e intercambia acciones de usuarios.
        </p>
        <div className="hero-cta">
          <button className="cta-primary" ref={btnRef}>Empezar a Operar</button>
          <button className="cta-secondary">Descubre Más</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
           <div className="wheel"></div>
        </div>
        <span>Desliza</span>
      </div>
    </section>
  );
};

export default Hero;
