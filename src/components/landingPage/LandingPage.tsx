import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollSection from './ScrollSection';
import Features from './Features';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <ScrollSection />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
