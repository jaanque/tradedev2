import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './JoinRevolution.css';

gsap.registerPlugin(ScrollTrigger);

const JoinRevolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Starts when section hits top of viewport
        end: "+=150%", // Pins for 1.5x viewport height
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // 1. Expand Circle to fill screen
    tl.fromTo(circleRef.current,
      { scale: 0 },
      {
        scale: 150,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    // 2. Reveal Text
    tl.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // Pulse animation for button after reveal
          gsap.to(btnRef.current, {
            scale: 1.05,
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
      },
      "-=0.5"
    );

  }, { scope: containerRef });

  return (
    <section className="join-revolution" ref={containerRef}>
      <div className="bg-circle" ref={circleRef}></div>
      <div className="join-content" ref={contentRef}>
        <h2 ref={textRef}>El Futuro es <br/> <span>Propiedad del Usuario.</span></h2>
        <button className="join-btn" ref={btnRef}>Unirse a la Lista de Espera</button>
      </div>
    </section>
  );
};

export default JoinRevolution;
