import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './QueEs.css';

gsap.registerPlugin(ScrollTrigger);

const textContent = "SocialStock no es solo una red social, es una revolución económica. Imagina un mundo donde tu creatividad tiene un valor tangible. Cada interacción, cada seguidor, cada contenido viral incrementa tu valor en el mercado. Aquí, no solo sigues a tus ídolos, inviertes en su potencial y creces con ellos. Bienvenido a la nueva era de la influencia digital.";

const QueEs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Split text into words safely
  const words = textContent.split(" ");

  useGSAP(() => {
    const wordElements = textRef.current?.querySelectorAll('.word');
    if (!wordElements || !titleRef.current) return;

    // 1. Title Entrance (Massive & Elegant)
    gsap.fromTo(titleRef.current,
      {
        y: 100,
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Start earlier
          toggleActions: "play none none reverse"
        }
      }
    );

    // 2. Text Reveal (Reading Experience)
    gsap.to(wordElements, {
      color: "#1a1a1a",
      stagger: 0.05, // Faster stagger for smoother read
      scrollTrigger: {
        trigger: textRef.current, // Trigger based on text paragraph position
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <section className="que-es" ref={containerRef}>
      <div className="que-es-container">
        <h2 className="que-es-title" ref={titleRef}>El Concepto</h2>
        <p className="que-es-text" ref={textRef}>
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span className="word">{word}</span>
              {" "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default QueEs;
