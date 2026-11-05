import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorState }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasPointer);
    if (!hasPointer) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isView = cursorState?.type === 'view';
  const isPlay = cursorState?.type === 'play';
  const isDrag = cursorState?.type === 'drag';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Cursor / Bubble */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          scale: isView || isPlay || isDrag ? 1 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        {isView && (
          <div className="px-4 py-2 bg-white text-black text-xs font-mono font-semibold tracking-wider uppercase rounded-full shadow-2xl flex items-center gap-1.5 backdrop-blur-md">
            VIEW <span className="text-[10px]">↗</span>
          </div>
        )}

        {isPlay && (
          <div className="px-4 py-2 bg-white text-black text-xs font-mono font-semibold tracking-wider uppercase rounded-full shadow-2xl flex items-center gap-1.5 backdrop-blur-md">
            PLAY <span className="text-[10px]">▶</span>
          </div>
        )}

        {isDrag && (
          <div className="px-4 py-2 bg-white text-black text-xs font-mono font-semibold tracking-wider uppercase rounded-full shadow-2xl flex items-center gap-1.5 backdrop-blur-md">
            DRAG <span className="text-[11px]">↔</span>
          </div>
        )}

        {!isView && !isPlay && !isDrag && (
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Center dot */}
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            {/* Architectural Crosshair hair lines */}
            <div className="absolute w-6 h-[1px] bg-white/40" />
            <div className="absolute h-6 w-[1px] bg-white/40" />
            {/* Subtle outer coordinate ring */}
            <div className="absolute w-7 h-7 border border-white/20 rounded-full" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
