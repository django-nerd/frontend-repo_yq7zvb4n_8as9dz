import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactFooter = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="relative py-20 bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-amber-500/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Contact</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={onSubmit} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
              <div className="grid grid-cols-1 gap-4">
                <input className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Name" required />
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Phone" required />
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Email" />
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Message"></textarea>
                <button type="submit" className="mt-2 rounded-full bg-amber-400 text-black font-semibold px-6 py-3 hover:shadow-[0_0_28px_rgba(255,193,7,0.55)] hover:-translate-y-0.5 transition-all">Submit</button>
                {submitted && (
                  <div className="text-emerald-400 text-sm font-medium">We’ll reach you soon!</div>
                )}
              </div>
            </form>

            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <div className="mt-4 space-y-3 text-gray-300">
                <a href="tel:+919032431721" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4 text-amber-300" /> +91 9032431721</a>
                <a href="mailto:glimpses.studio2023@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4 text-amber-300" /> glimpses.studio2023@gmail.com</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Glimpses+Studio+Mahabubnagar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 text-amber-300" />
                  Govt. Hospital Road, Beside HDFC Bank, New Town, Mahabubnagar
                </a>
                <a href="tel:+919032431721" className="inline-flex mt-4 items-center justify-center rounded-full bg-amber-400 text-black font-semibold px-5 py-2 hover:shadow-[0_0_28px_rgba(255,193,7,0.55)] transition-all">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0B0B0B] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-semibold text-lg">Glimpses Studio</div>
            <p className="mt-2">Govt. Hospital Road, Beside HDFC Bank, New Town, Mahabubnagar</p>
            <div className="mt-2 flex flex-col">
              <a href="tel:+919032431721" className="hover:text-white">Phone: +91 9032431721</a>
              <a href="mailto:glimpses.studio2023@gmail.com" className="hover:text-white">Email: glimpses.studio2023@gmail.com</a>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">Quick Links</div>
            <div className="mt-2 flex gap-4">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
            </div>
          </div>
          <div className="md:text-right text-white">© {year} Glimpses Studio</div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
