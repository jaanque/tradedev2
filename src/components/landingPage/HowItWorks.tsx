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

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;

    if (!section || !container || !title) return;

    // Calculate total scroll width for the horizontal section
    // We add window.innerWidth to account for the initial padding-left (100vw)
    // so the first card comes fully into view.
    // However, exact calculation:
    // container width includes the 100vw padding.
    // we want to scroll enough to see the last card.

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Total distance to scroll horizontally:
    // We want the end state to be: last card fully visible?
    // Or just scroll until the end of container hits the right side of screen?
    // Let's scroll until the end of the container aligns with right side of screen.
    // x movement = -(totalWidth - viewportWidth)
    // But we also have the "Intro" phase.

    const xMovement = -(totalWidth - viewportWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        // We need a long scroll distance to accommodate both the title fade and the horizontal scroll
        end: "+=" + (totalWidth + viewportWidth),
      }
    });

    // Phase 1: Reveal content by fading out title
    tl.to(title, {
      scale: 1.5,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1, // Represents a portion of the scroll
      ease: "power2.in"
    })
    // Phase 2: Slide in the horizontal content
    // We start this slightly before the title is fully gone for smoothness
    .to(container, {
      x: xMovement,
      ease: "none",
      duration: 4 // Requires 4x more scroll distance than the title fade
    }, "-=0.5");

  }, { scope: sectionRef });

  return (
    <section className="how-it-works" ref={sectionRef}>
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
