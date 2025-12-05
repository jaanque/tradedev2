import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Connect",
    text: "Link your social accounts to verify your influence."
  },
  {
    num: "02",
    title: "Valuation",
    text: "Our algorithm assigns an initial stock price based on engagement."
  },
  {
    num: "03",
    title: "IPO",
    text: "Launch your personal IPO and let others invest in your potential."
  },
  {
    num: "04",
    title: "Grow",
    text: "Increase your value by creating content and completing challenges."
  }
];

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    const progressBar = progressRef.current;

    if (!section || !container || !title) return;

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    // We scroll until the end of the container aligns with right side of screen.
    const xMovement = -(totalWidth - viewportWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: "+=" + (totalWidth + viewportWidth * 0.5), // Adjusted distance
      }
    });

    // Phase 1: Reveal content by fading out title
    tl.to(title, {
      scale: 1.2, // Subtle scale
      opacity: 0,
      filter: "blur(20px)",
      duration: 1,
      ease: "power2.in"
    })
    // Phase 2: Slide in the horizontal content
    .to(container, {
      x: xMovement,
      ease: "none",
      duration: 5
    }, "-=0.8") // Overlap significantly

    // Progress Bar Animation
    .to(progressBar, {
      width: "100%",
      ease: "none",
      duration: 6 // Matches total duration roughly
    }, 0);

  }, { scope: sectionRef });

  return (
    <section className="how-it-works" ref={sectionRef}>
      <div className="hiw-progress" ref={progressRef}></div>
      <div className="hiw-intro">
        <h2 className="hiw-intro-title" ref={titleRef}>
          How It Works
        </h2>
      </div>

      <div className="hiw-container" ref={containerRef}>
        {steps.map((step, index) => (
          <div key={index} className="hiw-card">
            <span className="hiw-num">{step.num}</span>
            <h3 className="hiw-card-title">{step.title}</h3>
            <p className="hiw-card-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
