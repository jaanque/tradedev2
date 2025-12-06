import React from 'react';
import './QueEs.css';

const QueEs: React.FC = () => {
  return (
    <section className="que-es">
      <div className="que-es-container">
        <h2 className="que-es-title">El Concepto</h2>
        <p className="que-es-text">
          SocialStock es donde la comunidad developer finalmente obtiene el valor que merece. No somos solo una red social; somos la Bolsa de Valores del Conocimiento. Olvídate de los seguidores pasivos: tus admiradores son ahora Accionistas que invierten sus Tokens en ti.
        </p>
        <br />
        <p className="que-es-text">
          Gana Tokens resolviendo retos épicos y compartiendo tus mejores insights. Invierte esos Tokens en el talento que te inspira y, a cambio, desbloquea su contenido más preciado: repositorios secretos, decisiones de arquitectura inéditas y Q&A solo para inversores.
        </p>
      </div>
    </section>
  );
};

export default QueEs;
