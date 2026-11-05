import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const disciplines = [
    { label: '3D Visualization', href: '#services' },
    { label: 'Animation', href: '#services' },
    { label: 'Architecture', href: '#services' },
    { label: 'Interior Design', href: '#services' },
    { label: '360° Experiences', href: '#services' },
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-[#f5f4f0] border-t border-white/10 pt-8 md:pt-10 pb-10 px-6 md:px-12 lg:px-20 select-none">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* LEFT: 3MD Studio Logo & Identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/15 p-1 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="3MD Studio Logo"
                    className="w-full h-full object-contain filter invert contrast-125"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-wider uppercase text-white">
                    3MD STUDIO
                  </span>
                  <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
                    ARCHITECTURAL CGI & CINEMA
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#a3a3a3] max-w-sm leading-relaxed font-light">
                Co-producing evocative 3D imagery, cinematic animations and spatial virtual reality
                alongside visionary architects and developers worldwide.
              </p>
            </div>

            <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-6 md:mt-0">
              DUBAI PRODUCTION CITY · UAE
            </div>
          </div>

          {/* CENTER: Services / Disciplines */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block mb-4">
              STUDIO DISCIPLINES
            </span>
            <ul className="space-y-2.5 font-sans text-sm text-[#d4d4d8] font-light">
              {disciplines.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-white/20 text-xs transition-transform group-hover:translate-x-1">
                      —
                    </span>
                    <span className="hover-underline-arch">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Location & Portal */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block mb-4">
                TERRITORY
              </span>
              <div className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                DUBAI / UAE
              </div>
              <p className="font-mono text-xs text-[#a3a3a3] leading-relaxed">
                Publishing Pavilion 702
                <br />
                Dubai Production City
                <br />
                P.O. Box Dubai, UAE
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href="https://3mdstudio.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-white uppercase tracking-widest hover:underline"
              >
                <span>VISIT 3MDSTUDIO.NET</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>© {new Date().getFullYear()} 3MD STUDIO. ALL RIGHTS RESERVED.</div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white hover:text-white/70 transition-colors uppercase tracking-widest"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
