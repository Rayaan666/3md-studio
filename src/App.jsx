import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroTransition from './components/HeroTransition';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f4f0] overflow-x-hidden selection:bg-white selection:text-black">
      {/* Floating Header with Scroll Morph */}
      <Navbar />

      {/* Main Semantic Content */}
      <main className="w-full">
        {/* 01 — Full Viewport Architectural Composition Hero */}
        <Hero />

        {/* Hero to About Typographic Kinetic Drift Transition */}
        <HeroTransition />

        {/* 02 — Editorial Architecture Magazine About Section */}
        <About />

        {/* 03 — 4 Distinct Immersive Service Disciplines */}
        <Services />

        {/* 04 — Asymmetric Portfolio, Featured Expansion & Creative Break */}
        <Portfolio />

        {/* 05 — Integrated Typography-First Contact Inquiry */}
        <Contact />
      </main>

      {/* 06 — Minimal Architectural Footer */}
      <Footer />
    </div>
  );
}
