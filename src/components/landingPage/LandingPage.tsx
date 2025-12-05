import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import UserTicker from './UserTicker';
import QueEs from './QueEs';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <UserTicker />
      <QueEs />
      <JoinRevolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
