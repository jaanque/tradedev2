import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ScrollSection.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const text = textRef.current;
    if (!text) return;

    // Use xPercent for responsive movement
    // Increased movement for dynamic feel
    gsap.to(text, {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0, // Instant reaction to velocity
        onUpdate: (self) => {
          // Add velocity skew
          const velocity = self.getVelocity();
          const skew = velocity / 300;
          gsap.to(text, { skewX: -skew, duration: 0.1, overwrite: 'auto' });
        }
      },
    });
  }, { scope: containerRef });

  return (
    <section className="scroll-section" ref={containerRef}>
      <div className="scroll-text" ref={textRef}>
        <span className="scroll-item">INFLUENCIA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item">VALOR</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item">OPERA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item">CONECTA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item">CRECE</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item outlined">INFLUENCIA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item outlined">VALOR</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item outlined">OPERA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item outlined">CONECTA</span>
        <span className="scroll-dot">•</span>
        <span className="scroll-item outlined">CRECE</span>
      </div>
    </section>
  );
};

export default ScrollSection;
