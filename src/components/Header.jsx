import React from 'react';
import { Camera, Phone } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => handleScroll('home')} className="flex items-center gap-2 text-white group">
            <Camera className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-wide">Glimpses Studio</span>
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+919032431721"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black font-semibold px-4 py-2 shadow-[0_0_20px_rgba(255,193,7,0.35)] hover:shadow-[0_0_32px_rgba(255,193,7,0.55)] transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </header>

      {/* Mobile sticky call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/60 backdrop-blur border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex gap-4 overflow-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 text-xs px-2 py-1 rounded hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="tel:+919032431721"
            className="flex items-center gap-1 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black font-semibold px-3 py-2 text-sm shadow-[0_0_16px_rgba(255,193,7,0.35)] transition-all"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
