import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function Portfolio({ setCursorState }) {
  const [selectedProject, setSelectedProject] = useState(null);

  // ==========================================
  // FEATURED PROJECT MOMENT (80% -> 100VW EXPANSION)
  // ==========================================
  const featuredContainerRef = useRef(null);
  const { scrollYProgress: featuredProgress } = useScroll({
    target: featuredContainerRef,
    offset: ['start end', 'center center'],
  });

  const featuredWidth = useTransform(featuredProgress, [0, 1], ['80vw', '100vw']);
  const featuredBorderRadius = useTransform(featuredProgress, [0, 1], ['16px', '0px']);

  // ==========================================
  // CREATIVE BREAK (IMAGINED -> SEEN)
  // ==========================================
  const creativeBreakRef = useRef(null);
  const { scrollYProgress: creativeProgress } = useScroll({
    target: creativeBreakRef,
    offset: ['start end', 'center center'],
  });

  const imaginedOpacity = useTransform(creativeProgress, [0.3, 0.55], [1, 0]);
  const imaginedY = useTransform(creativeProgress, [0.3, 0.55], [0, -20]);
  const seenOpacity = useTransform(creativeProgress, [0.45, 0.75], [0, 1]);
  const seenY = useTransform(creativeProgress, [0.45, 0.75], [20, 0]);

  return (
    <section id="work" className="relative w-full bg-[#f5f4f0] text-[#0a0a0a] pt-10 md:pt-16 select-none border-b border-black/10">
      {/* Subtle CAD Drafting Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Portfolio Header */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-10 z-10">
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-black/60 uppercase mb-4">
          <span className="w-2 h-2 bg-black" />
          <span>03 / SELECTED WORK</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-black/15 pb-8">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-black leading-[0.92]">
              SPACES
              <br />
              <span className="text-black/40">WE’VE BROUGHT</span>
              <br />
              TO LIFE.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="font-sans text-sm md:text-base text-black/75 font-light leading-relaxed">
              An architectural curation of landmark towers, private villas, coastal resorts and
              unbuilt spatial environments across the United Arab Emirates.
            </p>
          </div>
        </div>
      </div>

      {/* Clean, Curated Editorial Gallery Grid (Natural Aspect Ratios, Zero Cropping) */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-40 z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 [column-fill:_balance]">
          {projects.map((project) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative break-inside-avoid mb-6 lg:mb-8 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setCursorState?.({ type: 'view' })}
                onMouseLeave={() => setCursorState?.(null)}
              >
                {/* Pure Architectural Image Card - Natural Uncropped Aspect Ratio */}
                <div className="relative w-full overflow-hidden rounded-md bg-[#eae8e1] border border-black/15 shadow-sm group-hover:shadow-xl group-hover:border-black/40 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title || "3MD Studio Architectural Project"}
                    className="w-full h-auto block filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Subtle darkening on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

                  {/* Minimal Corner Detail on Hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] text-white/90 bg-black/80 px-2.5 py-1 rounded backdrop-blur-md pointer-events-none">
                    VIEW ↗
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* FEATURED PROJECT MOMENT (80% -> 100VW EXPANSION ON SCROLL) */}
      {/* ============================================================== */}
      <div
        ref={featuredContainerRef}
        className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-10 z-10"
      >
        <motion.div
          style={{
            width: featuredWidth,
            borderRadius: featuredBorderRadius,
          }}
          className="relative h-[85vh] overflow-hidden shadow-2xl border-y border-black/15 mx-auto cursor-pointer group"
          onClick={() => {
            const sobhaProject = projects.find((p) => p.id === 8) || projects[0];
            setSelectedProject(sobhaProject);
          }}
          onMouseEnter={() => setCursorState?.({ type: 'view' })}
          onMouseLeave={() => setCursorState?.(null)}
        >
          <img
            src="/images/featured-expand.webp"
            alt="Sobha Beach Park Featured Architectural Visualization"
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40 opacity-80" />

          {/* Top Label */}
          <div className="absolute top-8 left-8 md:left-14 flex items-center gap-3 z-10">
            <span className="w-2.5 h-2.5 bg-white" />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/20">
              SELECTED / 01 · FEATURED MONUMENT
            </span>
          </div>

          <div className="absolute top-8 right-8 md:right-14 font-mono text-xs text-white/60 tracking-widest uppercase bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/10 hidden md:block">
            PROGRESSIVE SCALE // 100VW DOCK
          </div>

          {/* Project Details on Scroll Image */}
          <div className="absolute bottom-10 left-8 md:left-14 right-8 md:right-14 z-10">
            <span className="font-mono text-xs text-white/60 tracking-widest uppercase block mb-2">
              WATERFRONT REAL ESTATE CGI · UMM AL QUWAIN, UAE
            </span>
            <div className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white leading-none">
              SOBHA BEACH PARK.
            </div>
            <div className="flex items-center gap-4 mt-4 font-mono text-xs text-white/80">
              <span>EXPLORE CASE STUDY</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============================================================== */}
      {/* CREATIVE BREAK (MATCHING 04 / CONTACT DARK BACKGROUND) */}
      {/* "BEFORE IT IS BUILT, IT HAS TO BE IMAGINED -> SEEN" */}
      {/* ============================================================== */}
      <div
        ref={creativeBreakRef}
        className="relative w-full bg-[#080808] text-[#f5f4f0] py-32 md:py-48 px-6 md:px-12 lg:px-20 select-none overflow-hidden border-t border-white/10"
      >
        {/* Subtle CAD Drafting Grid */}
        <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-[1600px] mx-auto flex flex-col justify-center min-h-[40vh] z-10">
          <div className="font-mono text-xs text-white/50 tracking-widest uppercase mb-8 flex items-center gap-3">
            <span className="w-2 h-2 bg-white" />
            <span>CREATIVE PHILOSOPHY // 03MD</span>
          </div>

          <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight uppercase leading-[0.92] text-white">
            <div>BEFORE IT IS BUILT,</div>
            <div className="relative inline-block mt-2">
              <span>IT HAS TO BE </span>
              <span className="relative inline-block">
                {/* IMAGINED (fades out as scrolled) */}
                <motion.span
                  style={{ opacity: imaginedOpacity, y: imaginedY }}
                  className="inline-block text-white/30 underline decoration-white/20"
                >
                  IMAGINED.
                </motion.span>
                {/* SEEN (fades in as scrolled) */}
                <motion.span
                  style={{ opacity: seenOpacity, y: seenY }}
                  className="absolute left-0 top-0 text-white font-black"
                >
                  SEEN.
                </motion.span>
              </span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-white/60 uppercase">
            <span>3MD STUDIO ARCHITECTURAL VISUALIZATION</span>
            <span>DUBAI · ABU DHABI · INTERNATIONAL</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PROJECT LIGHTBOX MODAL */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-5xl bg-[#101010] border border-white/20 p-6 md:p-10 shadow-2xl my-auto text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 font-mono text-xs tracking-widest uppercase bg-white/10 hover:bg-white hover:text-black text-white px-3 py-1.5 transition-colors border border-white/20"
              >
                CLOSE [ESC]
              </button>

              <div className="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">
                PROJECT DOSSIER // 0{selectedProject.id}
              </div>

              <h4 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                {selectedProject.title}
              </h4>

              <div className="relative w-full h-[50vh] sm:h-[65vh] overflow-hidden bg-black/95 border border-white/10 mb-6 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block">CATEGORY</span>
                  <span className="text-white">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-white/40 block">LOCATION</span>
                  <span className="text-white">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-white/40 block">CLIENT</span>
                  <span className="text-white">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-white/40 block">YEAR</span>
                  <span className="text-white">{selectedProject.year}</span>
                </div>
              </div>

              <p className="font-sans text-sm md:text-base text-[#d4d4d8] leading-relaxed mt-4 font-light">
                {selectedProject.description}
              </p>

              <div className="mt-6 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
                >
                  INQUIRE ABOUT THIS TYPOLOGY ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
