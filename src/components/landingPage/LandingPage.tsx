import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import UserTicker from './UserTicker';
import QueEs from './QueEs';
import ComoFunciona from './ComoFunciona';
import Beneficios from './Beneficios';
import Testimonios from './Testimonios';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';
import Reveal from '../ui/Reveal';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <UserTicker />

      <Reveal>
        <QueEs />
      </Reveal>

      <Reveal>
        <ComoFunciona />
      </Reveal>

      <Reveal>
        <Beneficios />
      </Reveal>

      <Reveal>
        <Testimonios />
      </Reveal>

      <Reveal>
        <JoinRevolution />
      </Reveal>

      <Footer />
    </div>
  );
};

export default LandingPage;
