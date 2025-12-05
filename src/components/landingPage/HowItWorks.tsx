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
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    const path = pathRef.current;

    if (!section || !container || !title || !path) return;

    // Calculate scroll width
    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMovement = -(totalWidth - viewportWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: "+=" + (totalWidth + viewportWidth * 0.5),
      }
    });

    // 1. Reveal (Fade Title)
    tl.to(title, {
      scale: 0.8,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1,
      ease: "power2.in"
    })
    // 2. Horizontal Scroll
    .to(container, {
      x: xMovement,
      ease: "none",
      duration: 5
    }, "-=0.5");

    // 3. Draw Graph Line synchronized with scroll
    const pathLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    // We animate the offset to 0 as we scroll
    gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top", // When section is pinned
            end: "+=" + (totalWidth + viewportWidth * 0.5), // Match timeline
            scrub: 1
        }
    });

  }, { scope: sectionRef });

  return (
    <section className="how-it-works" ref={sectionRef}>

      <div className="hiw-intro">
        <h2 className="hiw-intro-title" ref={titleRef}>
          How It Works
        </h2>
      </div>

      <div className="hiw-container" ref={containerRef}>
        {/* Graph SVG - absolutely positioned inside container so it moves with it?
            Actually, if it's inside container, it moves WITH the cards.
            We want it to draw progressively.
        */}
        <svg className="hiw-graph-svg" viewBox="0 0 2000 600" preserveAspectRatio="none">
             {/*
                Path coordinates approximation based on card positions + margins
                01: ~100vw (start)
                Gap: 200px
                Cards: 350px
             */}
             <path
                ref={pathRef}
                d="M 100 300 C 300 300, 400 350, 600 350 S 800 250, 1000 250 S 1400 380, 1600 380 S 1900 200, 2100 200"
                stroke="black"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
             />
        </svg>

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
