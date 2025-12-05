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
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card');

    gsap.fromTo(cards,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="features" ref={containerRef}>
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
