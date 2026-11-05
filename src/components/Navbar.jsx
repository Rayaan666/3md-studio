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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: '01', label: 'ABOUT', sub: 'Studio Philosophy & Craft', href: '#about' },
    { num: '02', label: 'SERVICES', sub: 'CGI, 24fps Films & 360° Tours', href: '#services' },
    { num: '03', label: 'WORK', sub: '45+ Landmark Visualizations', href: '#work' },
    { num: '04', label: 'CONTACT', sub: 'Initiate a Project Transmission', href: '#contact' },
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
              setMobileMenuOpen(false);
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

          {/* DESKTOP: Center / Right Navigation Items */}
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

          {/* MOBILE: Creative Architectural Menu Capsule Trigger (No 'START' button) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative group flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 active:scale-95 shadow-lg"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-white">
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>

              {/* Architectural Morphing Geometry */}
              <div className="relative w-4 h-3.5 flex flex-col justify-between items-end">
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? 'w-4 rotate-45 translate-y-[6px]'
                      : 'w-4'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-emerald-400 transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'w-0 opacity-0'
                      : 'w-2.5'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? 'w-4 -rotate-45 -translate-y-[6px]'
                      : 'w-3.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── CREATIVE FULL-SCREEN ARCHITECTURAL MOBILE MENU ─────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-30 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto"
          >
            {/* Background CAD grid */}
            <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />

            {/* Top Transmission Status Bar */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 font-mono text-[10px] text-white/50 tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>3MD STUDIO ARCHIVE</span>
              </div>
              <span className="text-white/70 font-semibold">DUBAI, UAE</span>
            </div>

            {/* Sculptural Menu Links */}
            <div className="relative z-10 flex flex-col justify-center space-y-6 my-auto py-8">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * idx, duration: 0.35 }}
                  className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-white hover:text-emerald-300 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-white/40 group-hover:text-emerald-400 transition-colors">
                      {item.num}
                    </span>
                    <div>
                      <div className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase leading-none">
                        {item.label}
                      </div>
                      <div className="font-mono text-[10px] text-white/40 tracking-wider uppercase mt-1">
                        {item.sub}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions & Studio Details */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-4 text-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold hover:bg-neutral-200 transition-colors shadow-2xl rounded"
              >
                START A PROJECT ↗
              </a>

              <div className="flex items-center justify-between font-mono text-[10px] text-white/50 tracking-wider pt-1">
                <a href="mailto:info@3mdstudio.net" className="hover:text-white transition-colors">
                  info@3mdstudio.net
                </a>
                <a href="tel:+971526384746" className="hover:text-white transition-colors">
                  +971 52 638 4746
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
