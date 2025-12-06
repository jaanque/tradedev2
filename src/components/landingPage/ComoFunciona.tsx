import React from 'react';
import './ComoFunciona.css';

const ComoFunciona: React.FC = () => {
  return (
    <section className="como-funciona">
      <div className="como-funciona-container">
        <h2 className="section-title">CÓMO FUNCIONA</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3 className="step-title">Conecta tu Talento</h3>
            <p className="step-desc">
              Vincula tu cuenta de GitHub. Nuestro algoritmo analiza tus repositorios, commits y calidad de código para establecer tu Valor Inicial de Oferta (IPO).
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">02</span>
            <h3 className="step-title">Emite tus Acciones</h3>
            <p className="step-desc">
              Te conviertes en una empresa pública de una sola persona. Los inversores compran tus "Actions" basándose en tu potencial y rendimiento histórico.
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">03</span>
            <h3 className="step-title">Crece y Monetiza</h3>
            <p className="step-desc">
              A medida que resuelves problemas y creas valor, el precio de tu acción sube. Gana dividendos de tu propio éxito y recibe financiación de la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
