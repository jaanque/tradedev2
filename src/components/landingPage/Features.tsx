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
    className: "span-row-2"
  },
  {
    id: "02",
    title: "Market Dynamics",
    description: "Prices fluctuate based on demand and engagement. Trade wisely.",
    className: "span-col-2"
  },
  {
    id: "03",
    title: "Instant Trades",
    description: "Execute orders instantly with our high-speed matching engine.",
    className: ""
  },
  {
    id: "04",
    title: "Community Driven",
    description: "Join a vibrant community of investors and creators.",
    className: ""
  },
  {
    id: "05",
    title: "Earn Tokens",
    description: "Complete platform challenges to earn investment capital.",
    className: ""
  },
  {
    id: "06",
    title: "Creator Economy",
    description: "Directly support creators by investing in their success.",
    className: "span-row-2"
  },
  {
    id: "07",
    title: "Security",
    description: "Your assets are protected by top-tier security protocols.",
    className: ""
  },
  {
    id: "08",
    title: "Global Scale",
    description: "Connect with a global market of social assets.",
    className: "span-col-2"
  }
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animation
    gsap.from('.feature-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
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

    const rotateX = ((y - centerY) / centerY) * -3; // Max -3 to 3 deg
    const rotateY = ((x - centerX) / centerX) * 3; // Max -3 to 3 deg

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.01,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      boxShadow: "0 25px 50px rgba(0,0,0,0.08)"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
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
            className={`feature-card ${feature.className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-number">{feature.id}</div>
            <div className="card-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="card-gradient"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
