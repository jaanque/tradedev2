import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import UserTicker from './UserTicker';
import QueEs from './QueEs';
import ComoFunciona from './ComoFunciona';
import Beneficios from './Beneficios';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <UserTicker />
      <QueEs />
      <ComoFunciona />
      <Beneficios />
      <JoinRevolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
