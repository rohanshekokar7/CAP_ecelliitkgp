"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";

type Stone = {
  id: string;
  name: string;
  imagePath: string;
  color: string;
  glow: string;
  border: string;
  textClass: string;
  angle: number; // Angle in degrees (-90 = 12 o'clock, -30 = 2 o'clock, 30 = 4 o'clock, 90 = 6 o'clock, 150 = 8 o'clock, 210 = 10 o'clock)
  title: string;
  subtitle: string;
  description: string;
};

const infinityStones: Stone[] = [
  {
    id: "reality",
    name: "REALITY STONE",
    imagePath: "/gauntlet/red_nobg.png",
    color: "#ef4444",
    glow: "shadow-[0_0_35px_#ef4444]",
    border: "border-red-400",
    textClass: "text-red-400",
    angle: -90,
    title: "THE UNIVERSE BENDS TO YOUR WILL.",
    subtitle: "REALITY STONE COMMAND: ABSOLUTE UNLEASHED.",
    description: "IDEATE: Plan & organize groundbreaking entrepreneurship events in your college with full E-Cell IIT Kharagpur backing and strategic resources.",
  },
  {
    id: "power",
    name: "POWER STONE",
    imagePath: "/gauntlet/voilet_nobg.png",
    color: "#a855f7",
    glow: "shadow-[0_0_40px_#a855f7]",
    border: "border-purple-400",
    textClass: "text-purple-400",
    angle: -30,
    title: "UNSTOPPABLE FORCE UNLEASHED.",
    subtitle: "POWER STONE COMMAND: MAXIMUM AMPLIFICATION.",
    description: "PUBLICISE: Act as a vital conduit between E-Cell IIT KGP and your institution, broadcasting opportunities across all sectors & media platforms.",
  },
  {
    id: "space",
    name: "SPACE STONE",
    imagePath: "/gauntlet/blue_nobg.png",
    color: "#3b82f6",
    glow: "shadow-[0_0_35px_#3b82f6]",
    border: "border-blue-400",
    textClass: "text-blue-400",
    angle: 30,
    title: "INFINITE REACH ACROSS ALL REALMS.",
    subtitle: "SPACE STONE COMMAND: TELEPORTATION PORTAL.",
    description: "COMMUNICATE: Connect with industry experts, VCs, and visionary mentors to forge an invincible nationwide startup network.",
  },
  {
    id: "time",
    name: "TIME STONE",
    imagePath: "/gauntlet/green_nobg.png",
    color: "#10b981",
    glow: "shadow-[0_0_35px_#10b981]",
    border: "border-emerald-400",
    textClass: "text-emerald-400",
    angle: 90,
    title: "MASTERY OVER ALL TIMELINES.",
    subtitle: "TIME STONE COMMAND: CHRONO SYNCHRONIZATION.",
    description: "LEAD: Command initiatives, lead your sector's ambassadors, and steer the entrepreneurial ecosystem in your college to new heights.",
  },
  {
    id: "soul",
    name: "SOUL STONE",
    imagePath: "/gauntlet/orange_nobg.png",
    color: "#f97316",
    glow: "shadow-[0_0_35px_#f97316]",
    border: "border-orange-400",
    textClass: "text-orange-400",
    angle: 150,
    title: "THE CORE OF ENTREPRENEURIAL WILL.",
    subtitle: "SOUL STONE COMMAND: SPIRIT RESIDUAL.",
    description: "INSPIRE: Fuel the passion for innovation in fellow recruits and ignite the entrepreneurial spirit across young minds.",
  },
  {
    id: "mind",
    name: "MIND STONE",
    imagePath: "/gauntlet/yellow_nobg.png",
    color: "#eab308",
    glow: "shadow-[0_0_35px_#eab308]",
    border: "border-yellow-400",
    textClass: "text-yellow-400",
    angle: 210,
    title: "SUPREME KNOWLEDGE & INTELLECT.",
    subtitle: "MIND STONE COMMAND: THOUGHT DOMINANCE.",
    description: "STRATEGIZE: Formulate high-impact tactical campaigns and execute masterstrokes for campus leadership.",
  },
];

export default function EngagementTrack() {
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);

  return (
    <section className="relative py-16 bg-black overflow-hidden select-none min-h-screen flex items-center justify-center" id="why">
      
      {/* User Provided background.png */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.95) 100%)"
        }}
      />

      {/* Cosmic Floating Dust Particles */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[pulse-glow_5s_infinite] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
        
        {/* LEFT COLUMN: Header Text & Overview Instructions (Swapped to Left) */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-20 w-full lg:max-w-2xl lg:mr-8">
          
          <div className="mb-6">
            <span className="font-mono text-sm md:text-base text-emerald-400 uppercase tracking-[0.35em] font-black block mb-3 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              SECTOR 7 TRANSMISSION
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-[0.18em] font-serif drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] leading-tight">
              INFINITY POWER RECTIFIER
            </h2>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-100 tracking-wider font-mono uppercase border-l-4 border-emerald-500 pl-4 py-1">
              HOW DO AMBASSADORS ENGAGE?
            </h3>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-sans font-medium">
              Tap on any of the 6 Infinity Stones orbiting the Gauntlet to unlock its strategic command and reveal how Campus Ambassadors ideate, publicise, communicate, and lead across all sectors.
            </p>

            <div className="flex items-center gap-3 p-5 rounded-xl bg-purple-950/40 border-2 border-purple-500/40 text-purple-200 text-sm md:text-base font-mono font-bold mt-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Sparkles className="w-6 h-6 text-purple-400 shrink-0 animate-pulse" />
              <span>
                {selectedStone ? `POWER UNLEASHED: ${selectedStone.name}` : "SELECT AN INFINITY STONE ON THE RIGHT TO UNLEASH COMMAND"}
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Gauntlet Magic Circle & Infinity Stones (Swapped to Right) */}
        <div className="flex-1 flex items-center justify-center relative w-full lg:pr-8 xl:pr-16 shrink-0">
          
          {/* Outer Orbit Container: Rotates Clockwise in Idle State, Freezes Static on Click */}
          <motion.div 
            className="relative w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] md:w-[900px] md:h-[900px] flex items-center justify-center lg:scale-[0.80] xl:scale-90 transform-gpu"
            animate={selectedStone === null ? { rotate: 360 } : { rotate: 0 }}
            transition={selectedStone === null ? { repeat: Infinity, duration: 40, ease: "linear" } : { duration: 0.5 }}
          >
            
            {/* Geometric Magic Circle SVG Lines */}
            <svg viewBox="0 0 900 900" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="purpleRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" opacity="0.9" />
                  <stop offset="50%" stopColor="#9333ea" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b0764" stopOpacity="0.9" />
                </linearGradient>

                <filter id="cosmicGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer Tick Mark Ring */}
              <circle cx="450" cy="450" r="420" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.4" className="animate-[spin_85s_linear_infinite]" />

              {/* Main Outer Geometric Circle (Radius = 340) */}
              <circle cx="450" cy="450" r="340" fill="none" stroke="url(#purpleRingGrad)" strokeWidth="3.5" filter="url(#cosmicGlow)" />
              <circle cx="450" cy="450" r="328" fill="none" stroke="#e9d5ff" strokeWidth="1" opacity="0.3" />

              {/* Overlapping Hexagram / Star Geometry */}
              <polygon points="450,110 744,280 744,620 450,790 156,620 156,280" fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.25" />
              <polygon points="450,790 156,620 156,280 450,110 744,280 744,620" fill="none" stroke="#9333ea" strokeWidth="1" opacity="0.2" className="rotate-30 origin-center" />

              {/* Inner Concentric Circle */}
              <circle cx="450" cy="450" r="230" fill="none" stroke="#d8b4fe" strokeWidth="2" opacity="0.5" />
              <circle cx="450" cy="450" r="218" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6" className="animate-[spin_55s_linear_infinite_reverse]" />
            </svg>

            {/* Center Area: Gauntlet moves Anti-Clockwise in Idle State; Static Opaque Black Circle on Click */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                {!selectedStone ? (
                  /* DEFAULT STATE: Gauntlet rotates Anti-Clockwise continuously */
                  <motion.div
                    key="gauntlet"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, rotate: -360 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                    transition={{ 
                      opacity: { duration: 0.6 },
                      scale: { duration: 0.6 },
                      rotate: { repeat: Infinity, duration: 30, ease: "linear" }
                    }}
                    className="pointer-events-auto relative z-20 w-56 h-80 md:w-[380px] md:h-[500px] flex items-center justify-center group"
                  >
                    {/* Golden Cosmic Aura Glow behind Gauntlet */}
                    <div className="absolute inset-0 bg-amber-500/25 rounded-full blur-3xl group-hover:bg-amber-500/40 transition-all duration-500 animate-pulse"></div>

                    <img 
                      src="/gauntlet/gauntlet_nobg.png" 
                      alt="Infinity Gauntlet" 
                      className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(234,179,8,0.7)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ) : (
                  /* SELECTED STATE: Static Central Opaque Black Circle with Text */
                  <motion.div
                    key={`stone-circle-${selectedStone.id}`}
                    initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.6, rotate: 10, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="pointer-events-auto relative z-20 w-[280px] h-[280px] md:w-[440px] md:h-[440px] rounded-full bg-black/95 border-2 border-purple-500/80 shadow-[0_0_70px_rgba(168,85,247,0.6)] flex flex-col items-center justify-center p-6 md:p-10 text-center select-text backdrop-blur-xl"
                  >
                    {/* Outer Pulsating Energy Ring */}
                    <div className="absolute -inset-2 rounded-full border border-purple-400/40 animate-pulse pointer-events-none"></div>

                    <h3 className="text-base md:text-2xl font-black font-serif text-white tracking-widest leading-tight uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] mb-2 md:mb-3">
                      {selectedStone.title}
                    </h3>

                    <p className={`font-mono text-[11px] md:text-xs font-bold tracking-wider uppercase mb-2 md:mb-4 ${selectedStone.textClass} drop-shadow-[0_0_10px_currentColor]`}>
                      {selectedStone.subtitle}
                    </p>

                    <p className="font-sans text-xs md:text-sm text-slate-200 leading-relaxed max-w-xs md:max-w-sm drop-shadow-md mb-4 md:mb-6 font-medium">
                      {selectedStone.description}
                    </p>

                    <button
                      onClick={() => setSelectedStone(null)}
                      className="px-5 py-2 rounded-full bg-slate-900 border border-slate-600 hover:border-purple-400 text-slate-200 hover:text-white font-mono text-xs uppercase flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer font-bold z-30"
                    >
                      <RotateCcw className="w-4 h-4" /> RE-FORGE GAUNTLET
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 6 Backgroundless Infinity Stone PNGs Orbiting Clockwise with Ring */}
            {infinityStones.map((stone) => {
              const isSelected = selectedStone?.id === stone.id;

              return (
                <div
                  key={stone.id}
                  className="absolute z-30 pointer-events-none"
                  style={{
                    transform: `rotate(${stone.angle}deg) translate(340px) rotate(${-stone.angle}deg)`
                  }}
                >
                  <motion.button
                    onClick={() => setSelectedStone(isSelected ? null : stone)}
                    className="pointer-events-auto cursor-pointer focus:outline-none relative group"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    /* Counter-rotate each stone image counter-clockwise in idle state so stones stay upright during orbit; freeze static on click */
                    animate={selectedStone === null ? { rotate: -360 } : { rotate: 0 }}
                    transition={selectedStone === null ? { repeat: Infinity, duration: 40, ease: "linear" } : { duration: 0.5 }}
                    aria-label={stone.name}
                  >
                    {/* Outer Purple Pulsating Aura Ring if Selected */}
                    {isSelected && (
                      <div className="absolute -inset-4 rounded-full border-2 border-purple-400 animate-[spin_4s_linear_infinite] shadow-[0_0_35px_#a855f7]">
                        <div className="absolute inset-0 rounded-full border border-white opacity-60 animate-ping"></div>
                      </div>
                    )}

                    {/* Backgroundless Stone Image Container */}
                    <div className={`relative w-18 h-18 md:w-28 md:h-28 rounded-full flex items-center justify-center p-1 transition-all duration-300 ${stone.glow}`}>
                      <img 
                        src={stone.imagePath} 
                        alt={stone.name}
                        className="w-full h-full object-contain drop-shadow-[0_0_22px_currentColor]"
                      />
                    </div>

                    {/* Tooltip Label */}
                    <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${stone.textClass}`}>
                      {stone.name}
                    </span>
                  </motion.button>
                </div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
