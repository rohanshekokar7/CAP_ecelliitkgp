"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

const partners = [
  {
    id: 1,
    cost: "1",
    name: "STARK INTERNSHIPS",
    category: "EXCLUSIVE OPPORTUNITIES",
    effectLabel: "BENEFIT:",
    desc: "Gain direct summer internship opportunities, work on real-world projects, and unlock exclusive access to E-Cell IIT Kharagpur's startup ecosystem.",
    image: "/cards/stark.png"
  },
  {
    id: 2,
    cost: "2",
    name: "CERTIFICATE & REWARDS",
    category: "OFFICIAL CREDENTIALS",
    effectLabel: "BENEFIT:",
    desc: "Earn an official Certificate of Completion signed by E-Cell IIT Kharagpur along with exclusive merchandise and high-value rewards.",
    image: "/cards/shield.png"
  },
  {
    id: 3,
    cost: "3",
    name: "EXPERT MENTORSHIP",
    category: "1-ON-1 GUIDANCE",
    effectLabel: "BENEFIT:",
    desc: "Interact 1-on-1 with industry leaders, unicorn founders, and venture capitalists to accelerate your career and entrepreneurial journey.",
    image: "/cards/avengers.png"
  },
  {
    id: 4,
    cost: "4",
    name: "EXCLUSIVE MERCHANDISE",
    category: "PREMIUM APPAREL",
    effectLabel: "BENEFIT:",
    desc: "Claim high-performance hoodies, t-shirts, badges, and official E-Cell IIT Kharagpur ambassador merchandise.",
    image: "/cards/wakanda.png"
  },
  {
    id: 5,
    cost: "5",
    name: "NETWORKING & SUMMITS",
    category: "PAN-INDIA ACCESS",
    effectLabel: "BENEFIT:",
    desc: "Receive passes to EAD & Leadership Summit, connecting with 30,000+ students and top founders across 25+ cities.",
    image: "/cards/pym.png"
  },
  {
    id: 6,
    cost: "6",
    name: "TACTICAL SKILL WEBINARS",
    category: "CAPACITY BUILDING",
    effectLabel: "BENEFIT:",
    desc: "Access specialized workshops on marketing, event management, pitch decks, public speaking, and strategic leadership.",
    image: "/cards/sword.png"
  },
];

export default function Incentives() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index just for the left-side arc glowing dots and discrete content switching
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.round(latest * (partners.length - 1));
    const index = Math.min(Math.max(rawIndex, 0), partners.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activePartner = partners[activeIndex];

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-black select-none" id="incentives">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-16">
        
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
          style={{ backgroundImage: "url('/Background.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_rgba(0,0,0,0.95)_80%)] pointer-events-none z-0"></div>
        {/* Cosmic Floating Dust Particles */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[pulse-glow_5s_infinite] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 pb-16">
          
          {/* LEFT: Arc & Numbers (Visible on md and up) */}
          <div className="hidden md:flex relative w-1/4 h-full items-center justify-start pointer-events-none z-20 pl-4 lg:pl-10">
            <div className="relative w-64 h-full flex items-center">
              {/* Circular Arc (SVG) */}
              <svg 
                viewBox="0 0 200 800" 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[800px] overflow-visible"
              >
                <path 
                  d="M -50 0 C 150 200, 150 600, -50 800" 
                  fill="none" 
                  stroke="rgba(16, 185, 129, 0.2)" 
                  strokeWidth="2"
                  strokeDasharray="4 8"
                />
              </svg>

              {/* Numbers placed along the arc */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[600px]">
                {partners.map((partner, index) => {
                  const isActive = index === activeIndex;
                  const distance = Math.abs(index - activeIndex);
                  
                  // Arc positioning logic 
                  const angle = (index - activeIndex) * 30; // degrees from center
                  const rad = angle * (Math.PI / 180);
                  const radius = 350;
                  const x = Math.cos(rad) * radius - radius + 80;
                  const y = Math.sin(rad) * radius;

                  return (
                    <motion.div
                      key={partner.id}
                      animate={{ 
                        x, 
                        y, 
                        opacity: isActive ? 1 : Math.max(1 - distance * 0.4, 0),
                        scale: isActive ? 1.2 : 0.9,
                        color: isActive ? "#10b981" : "#475569"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute top-1/2 left-0 font-serif font-black text-2xl md:text-3xl lg:text-4xl flex items-center gap-3 -mt-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="active-dot"
                          className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
                        />
                      )}
                      {partner.cost}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER: Dynamic Text (One at a time) */}
          <div className="w-full md:w-[45%] h-[400px] md:h-[500px] flex flex-col justify-start z-20 relative px-4 lg:px-8">
            <h2 className="text-xl md:text-2xl font-black text-emerald-500 uppercase tracking-widest mb-6 font-mono border-l-2 border-emerald-500 pl-4 shrink-0 absolute top-0 left-4 z-30 bg-black w-full py-2">
              Incentives & Benefits
            </h2>
            
            <div className="relative w-full h-full mt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activePartner.id}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-start justify-center gap-5 w-full max-w-full"
                >
                  <div className="px-4 py-1.5 bg-gradient-to-r from-[#1c242b] to-[#12181d] border border-emerald-900/50 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center">
                    <span className="text-xs font-black uppercase text-emerald-400 font-mono tracking-widest truncate">
                      {activePartner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-white uppercase font-serif tracking-wider drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] leading-tight break-words pr-4">
                    {activePartner.name}
                  </h3>
                  
                  <div className="mt-2 p-5 bg-gradient-to-b from-[#13181d]/80 to-[#0b0e11]/80 border border-emerald-900/30 rounded-xl shadow-inner backdrop-blur-sm">
                    <p className="text-slate-200 text-sm md:text-base lg:text-lg font-sans leading-relaxed">
                      <strong className="text-emerald-500 font-black text-xs md:text-sm mr-2 font-mono uppercase tracking-wider block mb-2 border-b border-emerald-900/50 pb-1 w-max">
                        {activePartner.effectLabel}
                      </strong>
                      {activePartner.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: 3D Marvel Card (One at a time) */}
          <div className="w-full md:w-1/3 h-[400px] md:h-[500px] overflow-hidden flex items-start justify-end md:justify-center relative z-20 mt-8 md:mt-0 pr-4 lg:pr-8">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${activePartner.id}`}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -100, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-full max-w-[200px] lg:max-w-[240px] h-[80%] flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none animate-pulse"></div>
                    
                    <img 
                      src={activePartner.image}
                      alt={activePartner.name}
                      className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] z-10 hover:scale-[1.03] hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
