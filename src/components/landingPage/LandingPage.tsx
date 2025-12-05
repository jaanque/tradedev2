import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollSection from './ScrollSection';
import QueEs from './QueEs';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <ScrollSection />
      <QueEs />
      <JoinRevolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
