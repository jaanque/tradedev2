import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollSection from './ScrollSection';
import Features from './Features';
import QueEs from './QueEs'; // New Section
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <ScrollSection />
      <QueEs /> {/* Placed prominently to explain the concept */}
      <Features />
      <JoinRevolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
