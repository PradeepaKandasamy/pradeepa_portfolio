import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Process from './components/Process';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import ContactInfo from './components/ContactInfo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-portfolio-primary selection:text-white">
      {/* Dynamic Background Layout */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[1000px] h-[1000px] bg-portfolio-primary/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-portfolio-accent/10 rounded-full blur-[160px] animate-none"></div>
      </div>

      <Header />

      <main className="w-full relative">
        <Hero />
        <Intro />
        <Process />
        <Skills />
        <Projects />
        <WhyHireMe />
        <ContactInfo />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
