import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: "01",
    title: "User Actions",
    description: "Every like, comment, and post has a value. Buy actions from your favorite creators.",
  },
  {
    id: "02",
    title: "Market Dynamics",
    description: "Prices fluctuate based on demand and engagement. Trade wisely.",
  },
  {
    id: "03",
    title: "Earn Tokens",
    description: "Complete platform challenges and engage with content to earn investment capital.",
  },
  {
    id: "04",
    title: "Real-time Analytics",
    description: "Track your portfolio performance with advanced charting tools.",
  }
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animation
    gsap.from('.feature-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Keep parallax but make it subtle
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
    cards.forEach((card, i) => {
      const speed = (i % 2 === 0) ? 30 : -30; // Reduced speed for better usability
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max -5 to 5 deg
    const rotateY = ((x - centerX) / centerX) * 5; // Max -5 to 5 deg

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.04)" // Reset to default shadow
    });
  };

  return (
    <section className="features" ref={containerRef}>
      <div className="features-header">
        <h2>Why Invest?</h2>
      </div>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-number">{feature.id}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="card-gradient"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
