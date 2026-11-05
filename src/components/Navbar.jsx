import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WORK', href: '#work' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-500">
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LEFT: 3MD Studio Logo */}
          <a
            href="#"
            className="group flex items-center gap-3.5 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-sm bg-white/5 border border-white/15 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="3MD Studio Logo"
                className="w-full h-full object-contain filter invert contrast-125"
                width="40"
                height="40"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base md:text-lg tracking-wider text-white uppercase leading-none">
                3MD STUDIO
              </span>
              <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase mt-0.5">
                DUBAI · ARCHITECTURE & CGI
              </span>
            </div>
          </a>

          {/* CENTER / RIGHT: Navigation Items */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group text-xs font-mono tracking-widest text-[#a3a3a3] hover:text-white transition-colors duration-300 py-1"
              >
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors hover-underline-arch">
                  {item.label}
                </span>
              </a>
            ))}

            {/* START A PROJECT Minimalist Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contact = document.querySelector('#contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                if (onStartProject) onStartProject();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs font-mono tracking-widest uppercase text-white bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm group"
            >
              <span>START A PROJECT</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-[11px] font-mono tracking-wider px-3 py-1.5 border border-white/20 text-white bg-white/5"
            >
              START ↗
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-white/10 px-8 py-10 shadow-2xl z-30"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-white text-xl font-display font-bold tracking-tight hover:text-white/60 transition-colors"
                >
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full text-center py-3 bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold"
                >
                  START A PROJECT ↗
                </a>
                <div className="text-center font-mono text-[10px] text-white/40 tracking-widest">
                  DUBAI, UAE · INFO@3MDSTUDIO.NET
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
