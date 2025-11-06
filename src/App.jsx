import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import PricingAbout from './components/PricingAbout';
import ContactFooter from './components/ContactFooter';

const App = () => {
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    // Fallback smooth scroll for older browsers
    const links = document.querySelectorAll('a[href^="#"], button[data-scroll]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <PricingAbout />
        <ContactFooter />
      </main>
    </div>
  );
};

export default App;
