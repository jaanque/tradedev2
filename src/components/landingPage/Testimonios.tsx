import React from 'react';
import './Testimonios.css';

const Testimonios: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SocialStock ha democratizado la inversión en talento. Ahora puedo apoyar a los desarrolladores que sigo y ganar con su éxito.",
      author: "Sofia R.",
      role: "Inversora Ángel",
      handle: "@sofia_invest"
    },
    {
      id: 2,
      quote: "La visibilidad que gané aquí me permitió dedicarme 100% al open source. Mis 'holders' son mi mejor comunidad.",
      author: "Carlos M.",
      role: "Full Stack Dev",
      handle: "@carlos_code"
    },
    {
      id: 3,
      quote: "Un modelo de negocio revolucionario. El valor ya no está en la empresa, está en quien la construye.",
      author: "Ana P.",
      role: "Product Manager",
      handle: "@ana_tech"
    }
  ];

  return (
    <section className="testimonios">
      <div className="testimonios-container">
        <h2 className="section-title">LA COMUNIDAD HABLA</h2>
        <div className="testimonios-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonio-card">
              <div className="testimonio-quote">"{t.quote}"</div>
              <div className="testimonio-author">
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                </div>
                <div className="author-handle">{t.handle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
