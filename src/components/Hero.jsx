import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/jqymijyc/image/upload';

const perspectives = [
  {
    id: 'saas-bluehour',
    title: 'Saas Waterfront Blue Hour',
    subtitle: 'Seafront Ultra-Luxury Residence',
    location: 'Palm Jumeirah, Dubai',
    cam: 'CAM 01 // 35MM T1.4 PRIMES',
    focal: 'FOCAL: 35mm · ISO 100 · f/1.4',
    engine: 'OCTANE 2026 // UNREAL 5.5',
    image: `${CLOUDINARY_BASE}/SaasBluehourfront`,
    year: '2026',
    typology: 'Coastal Tower Masterplan',
  },
  {
    id: 'facade-twilight',
    title: 'Curvilinear Facade Architecture',
    subtitle: 'Parametric High-Rise Residential',
    location: 'Downtown Dubai, UAE',
    cam: 'CAM 02 // 24MM TILT-SHIFT',
    focal: 'FOCAL: 24mm · ISO 64 · f/4.0',
    engine: 'CORONA SPECTRAL · 8K MASTER',
    image: `${CLOUDINARY_BASE}/Cam01_Facade_fullrev01-PPTP02`,
    year: '2026',
    typology: 'High-Rise Architectural CGI',
  },
  {
    id: 'luxury-interior',
    title: 'Luxury Palm Living',
    subtitle: 'Bespoke Waterfront Penthouse',
    location: 'Palm Jumeirah, Dubai',
    cam: 'CAM 03 // 50MM ANAMORPHIC',
    focal: 'FOCAL: 50mm · ISO 200 · f/2.0',
    engine: 'PHOTOMETRIC GI // ACEScg',
    image: `${CLOUDINARY_BASE}/Luxury_Palm-Set_Apartment_Living`,
    year: '2026',
    typology: 'Ultra-Luxury Interior Space',
  },
  {
    id: 'saas-night',
    title: 'Nocturnal Elevation Study',
    subtitle: 'Curated Architectural Lighting',
    location: 'Palm Jumeirah, Dubai',
    cam: 'CAM 04 // 85MM T1.2 CINE',
    focal: 'FOCAL: 85mm · ISO 400 · f/1.2',
    engine: 'CALIBRATED RAYTRACING 8K',
    image: `${CLOUDINARY_BASE}/SaasNightBack`,
    year: '2026',
    typology: 'Atmospheric Night Simulation',
  },
];

export default function Hero({ setCursorState }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dubaiTime, setDubaiTime] = useState('');
  const sectionRef = useRef(null);

  // Smooth mouse-tracking parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 32, stiffness: 120, mass: 0.6 });
  const springY = useSpring(mouseY, { damping: 32, stiffness: 120, mass: 0.6 });

  // Background subtle drift
  const bgX = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const bgY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Live Dubai Time Clock (GST, UTC+4)
  useEffect(() => {
    const updateTime = () => {
      try {
        const time = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setDubaiTime(time);
      } catch {
        const d = new Date();
        setDubaiTime(d.toTimeString().split(' ')[0]);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance perspectives every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % perspectives.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = perspectives[activeIdx];

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[800px] bg-[#050505] text-[#f5f4f0] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 select-none"
    >
      {/* ── CINEMATIC FULL-BLEED BACKGROUND CANVAS WITH PARALLAX ───── */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.05 }}
        className="absolute inset-0 will-change-transform pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
              loading="eager"
              fetchpriority="high"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── ATMOSPHERIC GRADIENTS & CAD DRAFTING OVERLAYS ──────────── */}
      {/* Heavy left-side vignette ensures typography has maximum contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 sm:via-[#050505]/60 to-transparent pointer-events-none" />
      {/* Bottom fade for seamless flow */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
      {/* Top fade for navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none" />
      {/* CAD Grid Overlay */}
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none" />

      {/* ── TOP HUD ANNOTATION STRIP ─────────────────────────────────── */}
      <div className="relative max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 z-20">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-white/50 tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white/80 font-semibold">STUDIO ACTIVE · DUBAI, UAE</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/40">{current.cam}</span>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="text-white/70 font-semibold">DUBAI {dubaiTime || '12:00:00'} GST</span>
          </div>
        </div>
      </div>

      {/* ── MAIN HERO COMPOSITION: EDITORIAL HEADLINE ──────────────── */}
      <div className="relative max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 my-auto py-8 sm:py-16 z-20">
        <div className="max-w-4xl flex flex-col justify-center">
          
          {/* Studio Discipline Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-[1px] bg-white/60" />
            <span className="font-mono text-[10px] sm:text-xs text-white/65 tracking-widest uppercase font-medium">
              3MD STUDIO · ARCHITECTURAL VISUALIZATION & CGI
            </span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black uppercase text-white tracking-[-0.035em] leading-[0.93] text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] max-w-4xl">
              <span className="block text-white">WE VISUALIZE</span>
              <span className="block text-white/40 font-light">WHAT DOESN'T</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/60">
                EXIST YET.
              </span>
            </h1>
          </motion.div>

          {/* Narrative Synopsis */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl mt-6 mb-8 pl-4 border-l-2 border-white/30"
          >
            Crafting hyper-photorealistic imagery, cinematic 3D animations, and immersive
            virtual environments for visionary architects, developers, and luxury creators worldwide.
          </motion.p>

          {/* Action Bar: Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-8 sm:mb-12"
          >
            <a
              href="#work"
              onClick={scrollTo('#work')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-white/90 transition-all duration-200 group shadow-2xl shadow-white/10"
            >
              <span>EXPLORE WORK</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>

            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-white/90 transition-all duration-200 group shadow-2xl shadow-white/10"
            >
              <span>START A PROJECT</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM ANNOTATION & DISCIPLINES TICKER BAR ────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-4 border-t border-white/10 z-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/45">
          {/* Disciplines links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-white/30">01</span>
              <span>3D ARCHITECTURAL RENDERS</span>
            </a>
            <span className="text-white/20 hidden sm:inline">·</span>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-white/30">02</span>
              <span>3D ANIMATIONS</span>
            </a>
            <span className="text-white/20 hidden sm:inline">·</span>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-white/30">03</span>
              <span>360° VIRTUAL TOURS</span>
            </a>
            <span className="text-white/20 hidden sm:inline">·</span>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-white/30">04</span>
              <span>ARCHITECTURE & INTERIORS</span>
            </a>
          </div>

          {/* Right Scroll Indicator */}
          <a
            href="#about"
            onClick={scrollTo('#about')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
