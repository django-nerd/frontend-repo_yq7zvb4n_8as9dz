import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-white py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          Capture Every Glimpse of Life.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl"
        >
          Photography, Videography & Customised Gifts in Mahabubnagar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+919032431721"
            className="px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-[0_0_24px_rgba(255,193,7,0.45)] hover:shadow-[0_0_36px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all"
          >
            Call Now
          </a>
          <button
            onClick={() => handleScroll('portfolio')}
            className="px-6 py-3 rounded-full border border-amber-200/30 text-amber-300 hover:text-black hover:bg-amber-300/90 backdrop-blur bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-all"
          >
            View Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
