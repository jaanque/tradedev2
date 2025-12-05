import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollSection from './ScrollSection';
import Features from './Features';
import MarketLeaderboard from './MarketLeaderboard'; // New import
import HowItWorks from './HowItWorks';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <ScrollSection />
      <Features />
      <MarketLeaderboard /> {/* Placed after Features */}
      <HowItWorks />
      <JoinRevolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
