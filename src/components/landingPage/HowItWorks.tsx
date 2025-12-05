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
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animate Line Progress
    // The line fills up as we scroll through the container
    gsap.to(lineRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5
      }
    });

    // 2. Animate Steps (Focus Effect)
    const stepElements = document.querySelectorAll('.hiw-step');
    stepElements.forEach((step) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top center+=100", // When step hits center
        end: "bottom center-=100",
        toggleClass: { targets: step, className: "active" },
        // scrub: true, // No scrub, just toggle state
        onEnter: () => gsap.to(step, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.3 }),
        onLeave: () => gsap.to(step, { opacity: 0.2, scale: 0.9, filter: "blur(2px)", duration: 0.3 }),
        onEnterBack: () => gsap.to(step, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.3 }),
        onLeaveBack: () => gsap.to(step, { opacity: 0.2, scale: 0.9, filter: "blur(2px)", duration: 0.3 }),
      });
    });

  }, { scope: containerRef });

  return (
    <section className="how-it-works">
      <div className="hiw-header">
        <h2 className="hiw-title">How It Works</h2>
        <p>Your journey from user to asset.</p>
      </div>

      <div className="hiw-timeline-container" ref={containerRef}>
        <div className="hiw-line-bg"></div>
        <div className="hiw-line-progress" ref={lineRef}></div>

        {steps.map((step, index) => (
          <div key={index} className="hiw-step">
            <div className="hiw-dot"></div>
            <div className="hiw-content">
              <span className="hiw-num">{step.num}</span>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
