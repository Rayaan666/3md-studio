import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroTransition() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Different horizontal speeds for typographic movement
  const xLeftFast = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);
  const xRightSlow = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-[#080808] overflow-hidden border-y border-white/5 select-none"
    >
      {/* Background Subtle CAD Coordinates */}
      <div className="absolute top-4 left-6 md:left-12 font-mono text-[9px] text-white/20 tracking-widest uppercase">
        TRANSLATION MATRIX // HORIZONTAL KINETIC DRIFT
      </div>

      <div className="max-w-full overflow-hidden flex flex-col gap-2 md:gap-4">
        {/* Row 1: IMAGE. MOTION. */}
        <motion.div
          style={{ x: xLeftFast, opacity }}
          className="whitespace-nowrap flex items-center gap-8 md:gap-14 font-display font-extrabold text-[8vw] md:text-[6vw] tracking-tighter uppercase text-white/90"
        >
          <span>IMAGE.</span>
          <span className="text-white/25">MOTION.</span>
          <span>IMAGE.</span>
          <span className="text-white/25">MOTION.</span>
          <span>IMAGE.</span>
          <span className="text-white/25">MOTION.</span>
        </motion.div>

        {/* Dynamic Architectural Line Drawing Across Screen */}
        <div className="relative w-full h-[1px] my-3 md:my-5 bg-white/10 flex items-center justify-center">
          <motion.div
            style={{ width: lineWidth }}
            className="h-[1px] bg-white/60 mx-auto"
          />
          <div className="absolute font-mono text-[8px] text-white/40 tracking-widest uppercase bg-[#080808] px-3">
            DIMENSION SCALE 1:1
          </div>
        </div>

        {/* Row 2: SPACE. EXPERIENCE. */}
        <motion.div
          style={{ x: xRightSlow, opacity }}
          className="whitespace-nowrap flex items-center gap-8 md:gap-14 font-display font-extrabold text-[8vw] md:text-[6vw] tracking-tighter uppercase text-white/80"
        >
          <span className="text-white/25">SPACE.</span>
          <span className="text-white">EXPERIENCE.</span>
          <span className="text-white/25">SPACE.</span>
          <span className="text-white">EXPERIENCE.</span>
          <span className="text-white/25">SPACE.</span>
          <span className="text-white">EXPERIENCE.</span>
        </motion.div>
      </div>
    </div>
  );
}
