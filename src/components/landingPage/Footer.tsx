import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger reveal of footer columns
    gsap.from('.footer-col, .footer-brand', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      }
    });
  }, { scope: footerRef });

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-top">
        <div className="footer-brand">
          <h4>SocialStock</h4>
          <p>El primer mercado social donde la influencia es moneda. Invierte en creadores, haz crecer tu cartera y sé dueño de un pedazo del futuro.</p>
        </div>

        <div className="footer-col">
          <h5>Plataforma</h5>
          <ul>
            <li><a href="#">Cómo Funciona</a></li>
            <li><a href="#">Mercado</a></li>
            <li><a href="#">Ranking</a></li>
            <li><a href="#">Precios</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Empresa</h5>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Empleo</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h5>Mantente Actualizado</h5>
          <p>Recibe las últimas tendencias del mercado y actualizaciones de la plataforma.</p>
          <div className="footer-input-group">
            <input type="email" placeholder="Introduce tu email" className="footer-input" />
            <button className="footer-btn">Suscribirse</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; 2024 SocialStock Inc. Todos los derechos reservados.
        </div>
        <div className="footer-socials">
          <a href="#" className="footer-social-link">Twitter</a>
          <a href="#" className="footer-social-link">LinkedIn</a>
          <a href="#" className="footer-social-link">Instagram</a>
          <a href="#" className="footer-social-link">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
