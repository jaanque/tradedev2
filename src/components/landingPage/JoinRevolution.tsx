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

  useGSAP(() => {
    // Scale effect for the background circle
    gsap.fromTo(circleRef.current,
      { scale: 0 },
      {
        scale: 20, // Expands to fill screen
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        }
      }
    );

    // Text reveal
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center center",
          scrub: 0.5,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="join-revolution" ref={containerRef}>
      <div className="bg-circle" ref={circleRef}></div>
      <div className="join-content">
        <h2 ref={textRef}>The Future is <br/> <span>User Owned.</span></h2>
        <button className="join-btn">Join the Waitlist</button>
      </div>
    </section>
  );
};

export default JoinRevolution;
