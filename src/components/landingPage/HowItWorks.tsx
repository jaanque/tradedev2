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

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Calculate the total scroll amount needed
    const totalWidth = container.scrollWidth;
    const sectionWidth = section.offsetWidth;
    const scrollAmount = totalWidth - sectionWidth;

    gsap.to(container, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        // snap: 1 / (steps.length - 1), // Optional: snap to steps
        end: () => "+=" + scrollAmount, // Scroll duration corresponds to horizontal width
      }
    });
  }, { scope: sectionRef });

  return (
    <section className="how-it-works" ref={sectionRef}>
      <div className="hiw-title-container">
        <div className="hiw-title-inner">
          <div className="hiw-title-static">How It Works</div>
        </div>
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
