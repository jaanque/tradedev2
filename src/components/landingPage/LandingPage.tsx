import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollSection from './ScrollSection';
import QueEs from './QueEs';
import JoinRevolution from './JoinRevolution';
import Footer from './Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for "luxury" feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

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
