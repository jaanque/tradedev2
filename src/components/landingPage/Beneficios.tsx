import React from 'react';
import './Beneficios.css';

const Beneficios: React.FC = () => {
  return (
    <section className="beneficios">
      <div className="beneficios-container">
        <h2 className="section-title">POR QUÉ SOCIALSTOCK</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3 className="beneficio-title">Mercado Líquido</h3>
            <p className="beneficio-desc">
              Compra y vende "Time-Tokens" de desarrolladores al instante. Sin bloqueos, sin intermediarios corporativos. Liquidez real para habilidades reales.
            </p>
          </div>
          <div className="beneficio-card">
            <h3 className="beneficio-title">Proof of Work</h3>
            <p className="beneficio-desc">
              Cada commit verificado impacta directamente en la valoración. El código no miente, y el precio de la acción tampoco.
            </p>
          </div>
          <div className="beneficio-card">
            <h3 className="beneficio-title">Acceso VIP</h3>
            <p className="beneficio-desc">
              Los accionistas mayoritarios obtienen prioridad en issues, consultoría 1:1 y acceso a ramas privadas de desarrollo.
            </p>
          </div>
          <div className="beneficio-card">
            <h3 className="beneficio-title">Dividendos Smart</h3>
            <p className="beneficio-desc">
              Gana una parte de los ingresos generados por los proyectos open-source y productos digitales de los desarrolladores en los que inviertes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
