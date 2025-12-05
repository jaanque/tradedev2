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

    gsap.to(text, {
      x: -1000, // Adjust based on text length
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="scroll-section" ref={containerRef}>
      <div className="scroll-text" ref={textRef}>
        INFLUENCE • VALUE • TRADE • CONNECT • GROW • INFLUENCE • VALUE • TRADE • CONNECT • GROW
      </div>
    </section>
  );
};

export default ScrollSection;
