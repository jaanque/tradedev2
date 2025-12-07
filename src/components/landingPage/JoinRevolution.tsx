import React, { useState } from 'react';
import './JoinRevolution.css';

const JoinRevolution: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="join-revolution">
      <div className="join-content">
        <h2>El Futuro es <br/> <span>Propiedad del Usuario.</span></h2>
        <p className="join-subtitle">Únete a la lista de espera y sé de los primeros en operar.</p>

        {status === 'success' ? (
          <div className="success-message">
            ¡Estás dentro! Te avisaremos pronto.
          </div>
        ) : (
          <form className="join-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="join-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              required
            />
            <button
              type="submit"
              className={`join-btn ${status === 'loading' ? 'loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '...' : 'Unirse a la Lista'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default JoinRevolution;
