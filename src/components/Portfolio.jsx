import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop', // wedding
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop', // baby
  'https://images.unsplash.com/photo-1547071283-3ecf77a8d0f8?q=80&w=1400&auto=format&fit=crop', // corporate
  'https://images.unsplash.com/photo-1522335789203-b1dc3a2dfde1?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514512364185-4c2b3e7a1b25?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="relative py-20 bg-[#0E0E0E]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Portfolio
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((src, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              onClick={() => setActive(src)}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-36 sm:h-44 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              src={active}
              alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-xl border border-white/10 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
