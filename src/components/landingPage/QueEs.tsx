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

  // Split text into words safely
  const words = textContent.split(" ");

  useGSAP(() => {
    const wordElements = textRef.current?.querySelectorAll('.word');
    if (!wordElements) return;

    gsap.to(wordElements, {
      color: "#1a1a1a", // Target color (Black/Dark Gray)
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start animating when section enters view
        end: "bottom 50%", // Finish when section is halfway up
        scrub: 1, // Smooth scrubbing linked to scroll position
      }
    });

  }, { scope: containerRef });

  return (
    <section className="que-es" ref={containerRef}>
      <div className="que-es-container">
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
