import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: "01",
    title: "Acciones de Usuario",
    description: "Cada like, comentario y publicación tiene valor. Compra acciones de tus creadores favoritos.",
    className: "span-row-2"
  },
  {
    id: "02",
    title: "Dinámicas de Mercado",
    description: "Los precios fluctúan según la demanda y el compromiso. Opera con sabiduría.",
    className: "span-col-2"
  },
  {
    id: "03",
    title: "Operaciones Instantáneas",
    description: "Ejecuta órdenes al instante con nuestro motor de emparejamiento de alta velocidad.",
    className: ""
  },
  {
    id: "04",
    title: "Impulsado por la Comunidad",
    description: "Únete a una comunidad vibrante de inversores y creadores.",
    className: ""
  },
  {
    id: "05",
    title: "Gana Tokens",
    description: "Completa desafíos de la plataforma para ganar capital de inversión.",
    className: ""
  },
  {
    id: "06",
    title: "Economía de Creadores",
    description: "Apoya directamente a los creadores invirtiendo en su éxito.",
    className: "span-row-2"
  },
  {
    id: "07",
    title: "Seguridad",
    description: "Tus activos están protegidos por protocolos de seguridad de primer nivel.",
    className: ""
  },
  {
    id: "08",
    title: "Escala Global",
    description: "Conéctate con un mercado global de activos sociales.",
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
        <h2>¿Por Qué Invertir?</h2>
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
