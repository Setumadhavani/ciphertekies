
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Events from '../components/Events';
import Team from '../components/Team';
import Founder from '../components/Founder';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Services />
        <Events />
        <Founder />
        <Team />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
