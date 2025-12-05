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
  // Split title into characters
  const titleChars = "El Concepto".split("");

  useGSAP(() => {
    const wordElements = textRef.current?.querySelectorAll('.word');
    const charElements = titleRef.current?.querySelectorAll('.char');

    if (!wordElements || !charElements) return;

    // 1. Title Entrance (Cinematic Character Stagger)
    gsap.fromTo(charElements,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 2. Text Reveal (Reading Experience)
    gsap.to(wordElements, {
      color: "#1a1a1a",
      stagger: 0.02, // Very fast stagger for fluid reading
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "bottom 30%",
        scrub: 0.5,
      }
    });

  }, { scope: containerRef });

  return (
    <section className="que-es" ref={containerRef}>
      <div className="que-es-container">
        <h2 className="que-es-title" ref={titleRef}>
          {titleChars.map((char, i) => (
             <span key={i} className="char" style={{display: 'inline-block', whiteSpace: 'pre'}}>{char}</span>
          ))}
        </h2>
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
