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
                      className="absolute top-1/2 left-0 font-serif font-black text-2xl md:text-3xl lg:text-4xl flex items-center gap-3 mt-[-26px] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
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
          <div className="w-full md:w-[75%] h-[400px] md:h-[500px] flex flex-col justify-center items-start z-20 relative px-4 lg:px-12 text-left">
            <h2 className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-[0.3em] absolute top-[53px] z-30">
              INCENTIVES & BENEFITS
            </h2>
            
            <div className="relative w-full h-full mt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activePartner.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-start justify-center gap-4 w-full max-w-full"
                >
                  <div className="px-4 py-1.5 border border-slate-800 rounded-full bg-slate-900/40">
                    <span className="text-[10px] md:text-xs font-medium uppercase text-emerald-500 tracking-[0.2em] truncate">
                      {activePartner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-white tracking-wide leading-tight max-w-3xl">
                    {activePartner.name}
                  </h3>
                  
                  <div className="max-w-2xl">
                    <p className="text-slate-300 text-base md:text-lg lg:text-xl font-light leading-relaxed text-left">
                      {activePartner.desc}
                    </p>
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
