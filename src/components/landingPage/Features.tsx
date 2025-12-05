import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    title: "User Actions",
    description: "Every like, comment, and post has a value. Buy actions from your favorite creators.",
  },
  {
    title: "Market Dynamics",
    description: "Prices fluctuate based on demand and engagement. Trade wisely.",
  },
  {
    title: "Earn Tokens",
    description: "Complete platform challenges and engage with content to earn investment capital.",
  },
  {
    title: "Real-time Analytics",
    description: "Track your portfolio performance with advanced charting tools.",
  }
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card');

    // Parallax effect: even cards move differently than odd cards
    cards.forEach((card, i) => {
      const speed = (i % 2 === 0) ? 50 : -50;

      gsap.to(card, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section className="features" ref={containerRef}>
      <div className="features-header">
        <h2>Why Invest?</h2>
      </div>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
