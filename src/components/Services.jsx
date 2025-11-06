import React from 'react';
import { motion } from 'framer-motion';
import { Film, Heart, Baby, Briefcase, Cake, Stethoscope } from 'lucide-react';

const services = [
  { icon: Film, title: 'Wedding Films' },
  { icon: Heart, title: 'Pre Weddings' },
  { icon: Stethoscope, title: 'Maternity Shoots' },
  { icon: Cake, title: 'Birthday Shoots' },
  { icon: Baby, title: 'Baby Shoots' },
  { icon: Briefcase, title: 'Corporate Events' },
];

const Services = () => {
  const handleScroll = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Services
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:border-amber-400/50 hover:bg-white/10 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-amber-400/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 shadow-[0_0_24px_rgba(255,193,7,0.25)] group-hover:shadow-[0_0_36px_rgba(255,193,7,0.45)] transition-all">
                  <Icon className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">Cinematic coverage crafted with premium gear and an artist’s eye.</p>
              <button
                onClick={handleScroll}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-amber-200/30 text-amber-300 hover:text-black hover:bg-amber-300/90 px-4 py-2 text-sm transition-all"
              >
                View Samples
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
