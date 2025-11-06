import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

const pricing = [
  {
    name: 'Basic',
    price: '₹6,999',
    features: ['2-hour shoot', '20 edited images', '1 highlight video'],
  },
  {
    name: 'Classic',
    price: '₹12,999',
    features: ['4-hour shoot', '50 edited photos', '2-min highlight film'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₹29,999',
    features: ['Full-day coverage', 'Drone shots', 'Full cinematic video', 'All edited images'],
  },
];

const Counter = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 drop-shadow">{value}</div>
    <div className="text-gray-300 mt-1 text-sm">{label}</div>
  </div>
);

const PricingAbout = () => {
  const handleScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-[#0D0D0D] to-[#141414] text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Pricing
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl p-6 border backdrop-blur bg-white/5 border-white/10 hover:border-amber-400/50 transition-all ${
                plan.highlight ? 'ring-1 ring-amber-400/40 shadow-[0_0_40px_rgba(255,193,7,0.18)]' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-2xl font-extrabold text-amber-300">{plan.price}</div>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleScroll}
                className="mt-6 w-full rounded-full bg-amber-400 text-black px-4 py-2 font-semibold hover:shadow-[0_0_28px_rgba(255,193,7,0.55)] hover:-translate-y-0.5 transition-all"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        <section id="about" className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Hafeez portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-amber-400/20 blur-xl pointer-events-none" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">About Glimpses Studio</h3>
            <p className="mt-4 text-gray-300">
              Hi, I’m Hafeez, founder of Glimpses Studio. Since 2023, we’ve been capturing weddings, memories, and stories with cinematic precision. Located beside HDFC Bank, Govt. Hospital Road, New Town, Mahabubnagar.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <Counter value="300+" label="Shoots" />
              <Counter value="250+" label="Happy Clients" />
              <Counter value="4.9★" label="Average Rating" />
            </div>
          </div>
        </section>

        <section id="reviews" className="mt-24">
          <h3 className="text-2xl font-bold text-center">Reviews</h3>
          <div className="mt-6 text-center text-gray-300">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="flex text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span>4.9 / 5 from 250+ clients</span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Aarav', text: 'Stunning wedding film with a true cinematic feel. Highly recommended!' },
              { name: 'Saanvi', text: 'Professional, punctual, and creative. Our maternity shoot was perfect.' },
              { name: 'Rahul', text: 'They covered our corporate event flawlessly. Great team!' },
              { name: 'Ishita', text: 'Baby shoot was adorable. Patient and friendly crew.' },
              { name: 'Zoya', text: 'Great value packages and premium quality output.' },
              { name: 'Karthik', text: 'From booking to delivery, the experience was seamless.' },
            ].map((r, idx) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.name}</div>
                  <div className="flex text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-gray-300 text-sm">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default PricingAbout;
