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
    // We use a massive scale to ensure it covers even 4K screens or ultrawide.
    // Starting at 50px, scale 100 makes it 5000px width/height.
    tl.fromTo(circleRef.current,
      { scale: 0 },
      {
        scale: 150, // Increased from 40 to 150 to guarantee full coverage
        duration: 2,
        ease: "power2.inOut",
      }
    );

    // 2. Reveal Text (overlapping slightly with end of circle expansion)
    tl.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5" // Start 0.5s before circle finishes
    );

  }, { scope: containerRef });

  return (
    <section className="join-revolution" ref={containerRef}>
      <div className="bg-circle" ref={circleRef}></div>
      <div className="join-content" ref={contentRef}>
        <h2 ref={textRef}>The Future is <br/> <span>User Owned.</span></h2>
        <button className="join-btn">Join the Waitlist</button>
      </div>
    </section>
  );
};

export default JoinRevolution;
