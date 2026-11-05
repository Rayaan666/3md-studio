import React from 'react';
import { motion } from 'framer-motion';

const CLOUDINARY_IMAGE = 'https://res.cloudinary.com/jqymijyc/image/upload/Cam01_Facade_fullrev01-PPTP02';

const stats = [
  { value: '450+', label: 'COMPLETED PROJECTS', desc: 'High-rise, hospitality & luxury estates' },
  { value: '14+', label: 'GLOBAL MARKETS', desc: 'UAE, UK, Saudi Arabia, Europe & US' },
  { value: '8K', label: 'RENDER FIDELITY', desc: 'Uncompromising clarity at any scale' },
  { value: '±0.5mm', label: 'BIM & CAD ACCURACY', desc: 'Exact architectural translation' },
];

export default function About({ setCursorState }) {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f5f4f0] text-[#0a0a0a] overflow-hidden border-t border-b border-black/10 select-none pt-14 md:pt-20 pb-10 md:pb-14"
    >
      {/* Subtle CAD Drafting Grid on Editorial Off-White */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* ── HEADER STRIP ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-black/15 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-black rotate-45 flex-shrink-0" />
            <span className="font-mono text-xs tracking-widest uppercase text-black font-bold">
              01 / ABOUT 3MD STUDIO
            </span>
            <span className="text-black/30 font-mono text-xs">|</span>
            <span className="font-mono text-xs text-black/60 tracking-wider uppercase hidden sm:inline-block">
              DUBAI ARCHITECTURAL CGI
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-black/60 tracking-wider uppercase">
            <span>25.2048° N, 55.2708° E</span>
            <span className="text-black/25">·</span>
            <span className="text-black font-semibold">DUBAI, UAE</span>
          </div>
        </div>

        {/* ── MAIN CONTENT (CLEAN 2-COLUMN STORY & 1 PICTURE) ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          
          {/* LEFT: THE COMPANY STORY ─────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-[11px] text-black/50 tracking-widest uppercase block mb-3 font-semibold">
                // WHO WE ARE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#0a0a0a] leading-[1.08] tracking-tight uppercase">
                WE BRING UNBUILT
                <span className="block text-black/45 font-light mt-1">
                  ARCHITECTURE TO LIFE.
                </span>
              </h2>
            </div>

            <div className="space-y-4 font-sans text-base sm:text-lg text-black/80 font-light leading-relaxed max-w-2xl border-l-2 border-black/30 pl-5">
              <p>
                Founded and based in Dubai, <strong className="font-medium text-black">3MD Studio</strong> is a premier architectural visualization practice. We partner with world-renowned architectural firms, luxury property developers, and interior designers to translate visionary concepts into breathtaking photorealistic imagery and cinematic films.
              </p>
              <p className="text-black/70 text-sm sm:text-base">
                Every landmark begins as a blueprint. We imbue unbuilt spaces with physically accurate daylight, authentic materiality, and cinematic emotion long before ground is broken. From iconic residential towers across the Dubai skyline to bespoke luxury penthouses, our work gives future architecture its first tangible voice.
              </p>
            </div>

            {/* Core Capability Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-[11px] text-black/70 tracking-wider uppercase">
              <span className="bg-black/5 border border-black/10 px-3.5 py-1.5 rounded-full font-medium">
                CGI Renders
              </span>
              <span className="bg-black/5 border border-black/10 px-3.5 py-1.5 rounded-full font-medium">
                Cinematic Films
              </span>
              <span className="bg-black/5 border border-black/10 px-3.5 py-1.5 rounded-full font-medium">
                Virtual 360° Spaces
              </span>
              <span className="bg-black/5 border border-black/10 px-3.5 py-1.5 rounded-full font-medium">
                BIM & CAD Precision
              </span>
            </div>

            {/* Direct Convenient Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-mono text-xs uppercase tracking-wider hover:bg-black/85 transition-colors shadow-sm font-semibold"
              >
                <span>EXPLORE SERVICES</span>
                <span>↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-mono text-xs uppercase tracking-wider hover:bg-black/85 transition-colors shadow-sm font-semibold"
              >
                <span>START A PROJECT</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: SINGLE BREATHTAKING ARCHITECTURAL PICTURE ─────────── */}
          <div className="lg:col-span-5">
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-black/15 shadow-xl bg-black group"
              onMouseEnter={() => setCursorState?.({ type: 'view' })}
              onMouseLeave={() => setCursorState?.(null)}
            >
              <img
                src={CLOUDINARY_IMAGE}
                alt="3MD Studio Curvilinear Tower Facade Visualization Dubai"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none z-10">
                <span className="font-mono text-[10px] text-white/95 tracking-widest uppercase bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                  DUBAI ARCHIVE // 3MD STUDIO
                </span>
                <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase bg-black/75 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/20">
                  8K CGI
                </span>
              </div>

              {/* Bottom Project Metadata */}
              <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none text-white">
                <div className="font-display font-bold text-lg sm:text-xl tracking-tight uppercase">
                  Curvilinear Landmark Facade
                </div>
                <div className="font-mono text-xs text-white/70 mt-0.5">
                  Downtown Dubai · Architectural Visualization
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM STATS STRIP (ORGANIZED & CLEAR) ──────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-black/15">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-xs font-bold text-black uppercase tracking-wider mt-2 mb-1">
                {stat.label}
              </span>
              <span className="font-sans text-xs text-black/60 font-light leading-relaxed">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
