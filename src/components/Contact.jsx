import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact({ setCursorState }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: ['3D Architectural Renders'],
    budget: '$10k - $25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    '3D Architectural Renders',
    '3D Cinematic Animations',
    'Architecture & Interiors',
    '360° Virtual Tours',
    'Masterplan CGI',
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#f5f4f0] text-[#0a0a0a] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-black/10 select-none overflow-hidden"
    >
      {/* Background CAD Grid on Off-White */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1600px] mx-auto z-10">
        {/* Small Label */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-black/60 uppercase mb-6">
          <span className="w-2 h-2 bg-black rotate-45" />
          <span className="font-bold text-black">04 / HAVE SOMETHING IN MIND?</span>
        </div>

        {/* Massive Editorial Title */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-black leading-[0.92] max-w-5xl mb-8">
          LET’S CREATE
          <br />
          WHAT PEOPLE
          <br />
          <span className="text-black/40">HAVEN’T SEEN YET.</span>
        </h2>

        {/* Copy */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-black/75 font-light leading-relaxed max-w-2xl mb-16 border-l-2 border-black/25 pl-4">
          “Architecture, visualization, animation or immersive experiences — tell us what you’re
          building.”
        </p>

        {/* Integrated Typography-First Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-8 border-t border-black/15">
          {/* Left: Contact Info & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8 font-mono text-xs">
              <div>
                <span className="text-black/45 block mb-2 tracking-widest uppercase font-semibold">
                  DIRECT TRANSMISSION // EMAIL
                </span>
                <a
                  href="mailto:info@3mdstudio.net"
                  className="font-display font-bold text-2xl sm:text-3xl text-black hover:text-black/70 transition-colors uppercase tracking-tight block"
                >
                  info@3mdstudio.net ↗
                </a>
              </div>

              <div>
                <span className="text-black/45 block mb-2 tracking-widest uppercase font-semibold">
                  DIRECT CONTACT // TELEPHONE
                </span>
                <div className="text-black text-base space-y-1 tracking-wider font-medium">
                  <a href="tel:+971526384746" className="block hover:text-black/70 transition-colors">
                    +971 52 638 4746
                  </a>
                  <a href="tel:+971524849862" className="block hover:text-black/70 transition-colors">
                    +971 52 484 9862
                  </a>
                </div>
              </div>

              <div>
                <span className="text-black/45 block mb-2 tracking-widest uppercase font-semibold">
                  PHYSICAL STUDIO // HEADQUARTERS
                </span>
                <p className="text-black/80 leading-relaxed font-sans text-sm">
                  Publishing Pavilion 702
                  <br />
                  Dubai Production City
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <div className="font-mono text-[10px] text-black/45 mt-1 font-semibold">
                  GPS: 25.0443° N, 55.1892° E
                </div>
              </div>

              <div>
                <span className="text-black/45 block mb-2 tracking-widest uppercase font-semibold">
                  MAIN DOMAIN REPOSITORY
                </span>
                <a
                  href="https://3mdstudio.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span>3mdstudio.net</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px] text-black/40 tracking-widest uppercase">
              CONFIDENTIAL ARCHITECTURAL NDAS HONORED UPON REQUEST
            </div>
          </div>

          {/* Right: Integrated Seamless Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-12 border border-black/15 bg-white shadow-xl rounded-xl"
                >
                  <span className="font-mono text-xs text-emerald-600 tracking-widest uppercase block mb-3 font-semibold">
                    TRANSMISSION LOGGED // SUCCESS
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-black uppercase tracking-tight mb-4">
                    THANK YOU FOR REACHING OUT.
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-black/70 font-light leading-relaxed mb-6">
                    Our principal directors will review your project parameters and respond within
                    24 hours with a preliminary scope evaluation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-white font-mono text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors rounded"
                  >
                    SEND ANOTHER INQUIRY ↗
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Multi-Select Pills */}
                  <div>
                    <label className="font-mono text-xs text-black/60 tracking-widest uppercase block mb-3 font-semibold">
                      01 / SELECT DISCIPLINES OF INTEREST:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const active = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 border rounded-md ${
                              active
                                ? 'border-black bg-black text-white font-semibold shadow-sm'
                                : 'border-black/15 text-black/70 hover:border-black/40 hover:text-black bg-white/70'
                            }`}
                          >
                            {active ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Integrated Underline Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-mono text-[10px] text-black/50 tracking-widest uppercase block mb-1 font-semibold">
                        YOUR NAME / STUDIO
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zaha Hadid Architects / John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-black/25 py-2 text-black placeholder-black/30 font-sans focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-black/50 tracking-widest uppercase block mb-1 font-semibold">
                        YOUR EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. director@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-black/25 py-2 text-black placeholder-black/30 font-sans focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-mono text-[10px] text-black/50 tracking-widest uppercase block mb-1 font-semibold">
                        PROJECT LOCATION / TYPOLOGY
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dubai Marina / Residential Tower"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b border-black/25 py-2 text-black placeholder-black/30 font-sans focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-black/50 tracking-widest uppercase block mb-1 font-semibold">
                        ESTIMATED SCOPE / BUDGET
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-transparent border-b border-black/25 py-2 text-black font-sans focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="Under $10k">Under $10k</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k - $50k">$25k - $50k</option>
                        <option value="$50k+">$50k+ (Comprehensive Masterplan / Film)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="font-mono text-[10px] text-black/50 tracking-widest uppercase block mb-1 font-semibold">
                      PROJECT SYNOPSIS / DELIVERABLES NEEDED
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding architectural stage, number of stills, animation duration, or VR requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-black/25 py-2 text-black placeholder-black/30 font-sans focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-black text-white font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-xl group rounded"
                    >
                      <span>START A PROJECT</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </button>

                    <div className="font-mono text-[10px] text-black/50 tracking-widest uppercase hidden sm:block">
                      ESTIMATED RESPONSE: &lt; 24H
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
