import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const disciplines = [
  {
    num: '01',
    title: '3D RENDERS',
    subtitle: 'Photometric Imagery & Materiality',
    desc: '“We craft high-impact architectural imagery for architects, real estate developers and creative agencies — transforming concepts into visuals that communicate atmosphere, materiality and intent.”',
    linkText: 'VIEW RENDERS',
    linkHref: '#work',
    engine: 'OCTANE // CORONA RENDER',
    image: '/images/service-render-final.webp',
    caption: 'Curvilinear High-Rise Facade · Photometric Daylight',
    tags: ['Photometric Accuracy', 'Spectral Sunlight', '8K Still Imagery'],
  },
  {
    num: '02',
    title: '3D ANIMATIONS',
    subtitle: 'Architecture in Motion · 24 FPS',
    desc: '“We turn architectural environments into cinematic stories — creating high-quality animation designed to communicate scale, atmosphere and experience.”',
    linkText: 'WATCH ANIMATIONS',
    linkHref: '#work',
    engine: 'UNREAL ENGINE 5 · CINEMATIC',
    image: '/images/service-animation-poster.webp',
    caption: 'Coastal Waterfront Masterplan · 24 FPS Film Track',
    tags: ['Cinematic Pacing', 'Camera Choreography', 'Unreal Engine 5'],
  },
  {
    num: '03',
    title: 'ARCHITECTURE & INTERIOR DESIGN',
    subtitle: 'Spatial Planning & Material Language',
    desc: '“From spatial planning to material language, we design architecture and interiors with clarity, functionality and character across diverse typologies and sectors.”',
    linkText: 'EXPLORE PROJECTS',
    linkHref: '#work',
    engine: 'REVIT BIM · RHINO CAD',
    image: '/images/service-interior.webp',
    caption: 'Luxury Seafront Penthouse · Bespoke Interior Architecture',
    tags: ['BIM & CAD Precision', 'Spatial Planning', 'Material Language'],
  },
  {
    num: '04',
    title: '360° VIRTUAL TOURS',
    subtitle: 'Don’t Just View The Space. Enter It.',
    desc: '“Interactive 360° environments that allow users to explore architecture with a stronger sense of scale, presence and spatial understanding.”',
    linkText: 'EXPERIENCE 360°',
    linkHref: '#contact',
    engine: 'WEBGL EQUILATERAL · VR READY',
    image: '/images/service-360-pano.webp',
    caption: 'Panoramic Atrium & Deck · WebGL Virtual Environment',
    tags: ['Virtual Walkthrough', 'True Spatial Scale', 'WebGL Ready'],
  },
];

export default function Services({ setCursorState }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'accordion'
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <section
      id="services"
      className="relative w-full bg-[#070707] text-[#f5f4f0] pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden border-b border-white/10 select-none"
    >
      {/* Background Subtle CAD Grid & Atmospheric Glow */}
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* ── 1. SECTION HEADER STRIP ──────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 md:mb-8 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full flex-shrink-0 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-white font-bold">
              02 / SERVICES & DISCIPLINES
            </span>
            <span className="text-white/20 font-mono text-xs">|</span>
            <span className="font-mono text-xs text-white/50 tracking-wider uppercase hidden sm:inline-block">
              DUBAI STUDIO CAPABILITIES
            </span>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline">
              LAYOUT //
            </span>
            <div className="inline-flex items-center bg-white/5 border border-white/15 p-1 rounded-lg font-mono text-xs">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-semibold shadow'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span>⊞</span>
                <span>GRID</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('accordion')}
                className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  viewMode === 'accordion'
                    ? 'bg-white text-black font-semibold shadow'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span>▥</span>
                <span>PANORAMA</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 2. MONUMENTAL HEADLINE & NARRATIVE ──────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase block mb-3 font-semibold">
              // ARCHITECTURAL CAPABILITIES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase text-white leading-[1.05]">
              CRAFTED WITH PRECISION.
              <span className="block text-white/40 font-light mt-1">
                RENDERED FOR IMPACT.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-md tracking-wider uppercase leading-relaxed lg:border-l lg:border-white/15 lg:pl-6">
            Four specialized disciplines. Bespoke architectural methodology. No generic solutions.
          </p>
        </div>

        {/* ── 3. VIEW MODE A: THE 4-CARD ATELIER GRID (DEFAULT) ───────── */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {disciplines.map((d) => (
              <div
                key={d.num}
                className="group relative bg-[#0d0d0d] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Header Window */}
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden bg-black cursor-pointer"
                  onMouseEnter={() => setCursorState?.({ type: 'view' })}
                  onMouseLeave={() => setCursorState?.(null)}
                >
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="font-mono text-[10px] text-white/95 tracking-widest uppercase bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                      DISCIPLINE // {d.num}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-emerald-500/30">
                      {d.engine}
                    </span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                    <span className="font-mono text-[10px] text-white/70 tracking-wider uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                      {d.caption}
                    </span>
                  </div>
                </div>

                {/* Content Dossier */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2 font-mono text-[11px] text-white/40 uppercase">
                      <span>STUDIO CORE</span>
                      <span>·</span>
                      <span className="text-white/60">3MD DISCIPLINE</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase group-hover:text-emerald-300 transition-colors">
                      {d.title}
                    </h3>

                    <div className="font-display font-semibold text-sm sm:text-base text-white/50 uppercase mt-1 tracking-tight">
                      {d.subtitle}
                    </div>

                    {/* Exact Quote */}
                    <p className="font-sans text-sm sm:text-base text-[#d4d4d8] leading-relaxed font-light mt-4 pl-4 border-l-2 border-white/20">
                      {d.desc}
                    </p>

                    {/* Craft Capability Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 font-mono text-[10px] text-white/70 uppercase">
                      {d.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={d.linkHref}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <span>{d.linkText}</span>
                      <span>↗</span>
                    </a>

                    <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                      3MD STUDIO // DXB
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── 4. VIEW MODE B: CINEMATIC HORIZON ACCORDION (EXPANDABLE) ─── */}
        {viewMode === 'accordion' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row h-auto lg:h-[620px] gap-3 bg-[#0d0d0d] p-3 rounded-2xl border border-white/15"
          >
            {disciplines.map((d, idx) => {
              const isExpanded = activeAccordion === idx;
              return (
                <div
                  key={d.num}
                  onClick={() => setActiveAccordion(idx)}
                  onMouseEnter={() => setActiveAccordion(idx)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between ${
                    isExpanded
                      ? 'lg:flex-[3.5] min-h-[460px] lg:min-h-0'
                      : 'lg:flex-[1] min-h-[140px] lg:min-h-0 bg-[#121212] hover:bg-[#181818]'
                  }`}
                >
                  {/* Background Image Layer */}
                  <img
                    src={d.image}
                    alt={d.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isExpanded
                        ? 'opacity-85 filter brightness-95 contrast-105 scale-100'
                        : 'opacity-20 filter grayscale scale-110'
                    }`}
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? 'bg-gradient-to-t from-black via-black/50 to-black/20'
                        : 'bg-black/75'
                    }`}
                  />

                  {/* Expanded Content View */}
                  {isExpanded ? (
                    <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-white/95 tracking-widest uppercase bg-black/80 px-3 py-1.5 rounded border border-white/20">
                          DISCIPLINE // {d.num}
                        </span>
                        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-black/80 px-3 py-1.5 rounded border border-emerald-500/30">
                          {d.engine}
                        </span>
                      </div>

                      {/* Bottom Info & Action */}
                      <div className="max-w-2xl">
                        <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight leading-none mb-2">
                          {d.title}
                        </h3>
                        <div className="font-display font-semibold text-sm sm:text-base text-white/60 uppercase tracking-tight mb-4">
                          {d.subtitle}
                        </div>

                        <p className="font-sans text-sm sm:text-base text-[#d4d4d8] font-light leading-relaxed mb-6 border-l-2 border-white/20 pl-4">
                          {d.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <a
                            href={d.linkHref}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-emerald-300 transition-colors shadow-sm"
                          >
                            <span>{d.linkText}</span>
                            <span>↗</span>
                          </a>

                          <div className="flex items-center gap-2 font-mono text-[10px] text-white/60 uppercase">
                            {d.tags.map((t, i) => (
                              <span key={i} className="bg-black/60 px-2 py-1 rounded border border-white/10 hidden sm:inline">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Column View (Desktop Vertical Typography) */
                    <div className="relative z-10 h-full p-6 flex flex-col justify-between items-center text-center">
                      <span className="font-mono text-xl font-black text-white/40">
                        {d.num}
                      </span>

                      <div className="hidden lg:block -rotate-90 whitespace-nowrap font-display font-bold text-sm tracking-widest uppercase text-white/70">
                        {d.title}
                      </div>

                      <div className="lg:hidden font-display font-bold text-base text-white uppercase">
                        {d.title}
                      </div>

                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
}
