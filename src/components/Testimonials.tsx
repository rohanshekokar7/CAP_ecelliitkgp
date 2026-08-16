"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

type TestimonialCard = {
  id: number;
  type: "parchment" | "cardboard" | "slate" | "typewriter" | "map";
  headline?: string;
  subHeader?: string;
  stamp?: string;
  date?: string;
  content: string;
  signature: string;
  polaroidUrl?: string;
  polaroidCaption?: string;
};

const allTestimonials: TestimonialCard[] = [
  {
    id: 1,
    type: "parchment",
    headline: "DOOMSDAY TESTIMONIALS",
    content: "THIS HAZMAT SUIT IS MY NEW SKIN. FOUGHT OFF THE SPORE CLOUD AND EXPANDED OUR CAMPUS NETWORK. FIVE STARS!",
    signature: "*Survivor 'Ranger' Alex.",
  },
  {
    id: 2,
    type: "cardboard",
    headline: "BEST BUNKER BUILDERS!",
    content: "IT'S DAMP AND COLD BUT AT LEAST THE RADIATED MARKET CAN'T GET IN. WE SURVIVED THE FIRST WAVE AND LEAD OUR COLLEGE!",
    signature: "*The Miller Family (Still Alive)",
  },
  {
    id: 3,
    type: "slate",
    headline: "ULTIMATE SURVIVAL GUIDE:",
    content: "LEARNED 32 WAYS TO PITCH TO VCs AND PURIFY PUDDLE WATER. THIS E-CELL BOOK IS LITERALLY WORTH MY LAST AMMO.",
    signature: "*Prepper Pete.",
  },
  {
    id: 4,
    type: "typewriter",
    date: "OCT 204X",
    stamp: "YOUR GEAR IS LIFE.",
    content: "THIS FORTRESS KNOWLEDGE HELD OFF A SCAVENGER GANG WITH SPIKES! STILL UNBROKEN. BARTERED 10 CANNED BEANS FOR IT AND IT WAS A STEAL.",
    signature: "*Elara, Wasteland Legend.",
    polaroidUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
    polaroidCaption: "Sector 7 Gate"
  },
  {
    id: 5,
    type: "map",
    headline: "SAFE ZONE ROUTE",
    content: "NAVIGATED THE ACID PLAINS WITH THIS MAP. FOUND THE SAFE ZONE. WENT FROM ZOMBIE BAIT TO SETTLER. HIGHLY RECOMMEND!",
    signature: "*Dave & Ben, Nomads.",
  },
  {
    id: 6,
    type: "parchment",
    headline: "S.H.I.E.L.D. FIELD LOG",
    content: "GAINED LEVEL-1 SECURITY CLEARANCE AND OPERATIONAL CONTROL OF OUR SECTOR. OUTLASTED 500 COMPETITORS IN THE WASTELAND!",
    signature: "*Commander Agent Coulson.",
  },
  {
    id: 7,
    type: "cardboard",
    headline: "STARK ARC REACTOR!",
    content: "POWERED UP MY RESUME WITH STARK TECH CREDENTIALS. NO RADIATED SPORE CLOUD CAN DAMPEN THIS KINETIC ENERGY!",
    signature: "*Engineer Maya, Wasteland Unit",
  },
  {
    id: 8,
    type: "slate",
    headline: "TACTICAL LEADERSHIP:",
    content: "DISCOVERED HOW TO ASSEMBLE A HIGH-PERFORMANCE SQUAD IN UNDER 24 HOURS. HIGHLY REWARDING MISSION.",
    signature: "*Captain Carter, Sector 7.",
  },
  {
    id: 9,
    type: "typewriter",
    date: "NOV 204X",
    stamp: "VERIFIED AMBASSADOR.",
    content: "CONNECTED WITH TOP-TIER MENTORS ACROSS THE RUINED SECTORS. RECEIVED DIRECT GUIDANCE THAT SAVED OUR STARTUP FROM EXTINCTION.",
    signature: "*Agent Romanoff.",
    polaroidUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    polaroidCaption: "HQ Outpost"
  },
  {
    id: 10,
    type: "map",
    headline: "FINAL BARKING ORDERS",
    content: "THE CAMPUS AMBASSADOR INITIATIVE IS THE ONLY TRUSTED PATH THROUGH THE WASTELAND. JOIN BEFORE THE NEXT DOOM WAVE STRIKES!",
    signature: "*Chief Director Fury.",
  },
];

// Duplicated list for 100% seamless infinite horizontal marquee
const marqueeItems = [...allTestimonials, ...allTestimonials];

export default function Testimonials() {
  const [selectedCard, setSelectedCard] = useState<TestimonialCard | null>(null);

  const renderCard = (card: TestimonialCard, index: number) => {
    switch (card.type) {
      case "parchment":
        return (
          <div 
            key={`${card.id}-${index}`}
            onClick={() => setSelectedCard(card)}
            className="w-[340px] md:w-[380px] shrink-0 relative p-6 bg-[#ecd8a5] text-slate-900 rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.85)] border border-[#d6b97d] transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:z-30 cursor-pointer group"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 98% 97%, 100% 100%, 0% 98%)'
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-red-500 to-red-800 border border-red-300 shadow-md z-30"></div>
            <div className="absolute -top-3 -left-3 w-16 h-6 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-85 border-t border-b border-slate-300 shadow-md rotate-[-25deg] z-30"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-6 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-85 border-t border-b border-slate-300 shadow-md rotate-[15deg] z-30"></div>

            <div className="flex justify-between items-start mb-3 border-b border-slate-800/20 pb-2">
              <h3 className="font-marker text-lg md:text-xl text-slate-900 uppercase tracking-tight">
                {card.headline}
              </h3>
              <div className="w-9 h-9 shrink-0 text-slate-900">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M50 10 C30 10 15 25 15 50 C15 75 30 90 50 90 C70 90 85 75 85 50 C85 25 70 10 50 10 Z M35 45 C40 45 45 40 45 35 C45 30 40 25 35 25 C30 25 25 30 25 35 C25 40 30 45 35 45 Z M65 45 C70 45 75 40 75 35 C75 30 70 25 65 25 C60 25 55 30 55 35 C55 40 60 45 65 45 Z M50 60 C40 60 35 70 35 80 L65 80 C65 70 60 60 50 60 Z" />
                </svg>
              </div>
            </div>

            <p className="font-marker text-sm leading-relaxed text-slate-900 mb-4 min-h-[90px]">
              {card.content}
            </p>

            <span className="font-handwriting font-bold text-xs md:text-sm text-slate-800 block text-right">
              {card.signature}
            </span>
          </div>
        );

      case "cardboard":
        return (
          <div 
            key={`${card.id}-${index}`}
            onClick={() => setSelectedCard(card)}
            className="w-[340px] md:w-[380px] shrink-0 relative p-6 bg-[#a3794b] text-slate-950 rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.85)] border-2 border-[#825c34] transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:z-30 cursor-pointer group"
          >
            <div className="absolute top-2 left-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-red-600 to-red-900 border border-red-400 shadow-md"></div>
            <div className="absolute top-2 right-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-red-600 to-red-900 border border-red-400 shadow-md"></div>
            <div className="absolute -top-3 -right-2 w-14 h-6 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-90 border-t border-b border-slate-300 shadow-md rotate-[30deg] z-30"></div>

            <h3 className="font-marker text-lg md:text-xl text-slate-950 uppercase mb-3 tracking-wide border-b border-slate-900/30 pb-1">
              {card.headline}
            </h3>

            <p className="font-handwriting font-extrabold text-sm leading-relaxed text-slate-950 mb-4 min-h-[90px]">
              {card.content}
            </p>

            <span className="font-marker text-xs md:text-sm text-slate-900 block text-right">
              {card.signature}
            </span>
          </div>
        );

      case "slate":
        return (
          <div 
            key={`${card.id}-${index}`}
            onClick={() => setSelectedCard(card)}
            className="w-[340px] md:w-[380px] shrink-0 relative p-6 bg-[#1a2126] text-slate-100 rounded-sm shadow-[0_20px_35px_rgba(0,0,0,0.9)] border-2 border-[#313c45] transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:z-30 cursor-pointer group"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-90 border-t border-b border-slate-300 shadow-md rotate-[-2deg] z-30"></div>

            <h3 className="font-chalk text-2xl text-white tracking-widest underline mb-3">
              {card.headline}
            </h3>

            <p className="font-chalk text-xl text-slate-200 leading-snug mb-4 min-h-[90px]">
              {card.content}
            </p>

            <div className="flex justify-between items-center border-t border-slate-700/60 pt-2">
              <div className="flex gap-1">
                <div className="w-2 h-4 bg-slate-400 rounded-sm"></div>
                <div className="w-2 h-4 bg-slate-400 rounded-sm"></div>
                <div className="w-2 h-4 bg-slate-400 rounded-sm"></div>
              </div>
              <span className="font-chalk text-lg text-emerald-400">
                {card.signature}
              </span>
            </div>
          </div>
        );

      case "typewriter":
        return (
          <div 
            key={`${card.id}-${index}`}
            onClick={() => setSelectedCard(card)}
            className="w-[420px] md:w-[460px] shrink-0 relative p-6 bg-[#f2e7cc] text-slate-900 rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.85)] border border-[#dfceaa] transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:z-30 cursor-pointer group"
          >
            <div className="absolute -top-3 -left-3 w-16 h-6 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-85 border-t border-b border-slate-300 shadow-md rotate-[-35deg] z-30"></div>

            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-typewriter text-xs text-slate-600 font-bold tracking-widest">
                    {card.date || "OCT 204X"}
                  </span>
                  <span className="font-typewriter font-black text-xs text-red-700 uppercase tracking-widest border-2 border-red-700 px-1.5 py-0.5 rotate-[-3deg]">
                    {card.stamp || "CONFIDENTIAL"}
                  </span>
                </div>

                <p className="font-typewriter text-xs leading-relaxed text-slate-900 mb-3 font-semibold min-h-[85px]">
                  {card.content}
                </p>

                <span className="font-typewriter font-bold text-xs text-slate-800 block">
                  {card.signature}
                </span>
              </div>

              {card.polaroidUrl && (
                <div className="w-32 bg-white p-1.5 border border-slate-300 shadow-md rotate-[4deg] shrink-0">
                  <img 
                    src={card.polaroidUrl} 
                    alt="Polaroid" 
                    className="w-full h-24 object-cover"
                  />
                  <span className="font-handwriting text-[10px] text-slate-700 text-center block mt-1">
                    {card.polaroidCaption || "Proof"}
                  </span>
                </div>
              )}
            </div>
          </div>
        );

      case "map":
        return (
          <div 
            key={`${card.id}-${index}`}
            onClick={() => setSelectedCard(card)}
            className="w-[340px] md:w-[380px] shrink-0 relative p-6 bg-[#e3d3a3] text-slate-900 rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.85)] border border-[#cbba87] transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:z-30 cursor-pointer group"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          >
            <div className="absolute -top-3 left-1/3 w-16 h-6 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-85 border-t border-b border-slate-300 shadow-md rotate-[8deg] z-30"></div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-marker text-lg text-slate-950 uppercase">
                {card.headline}
              </h3>
              <Compass className="w-6 h-6 text-slate-800 shrink-0" />
            </div>

            <p className="font-handwriting font-bold text-sm leading-relaxed text-slate-950 mb-4 min-h-[90px]">
              {card.content}
            </p>

            <span className="font-marker text-xs md:text-sm text-slate-900 block text-right">
              {card.signature}
            </span>
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-[#0a0c0e] relative text-white overflow-hidden select-none" id="testimonials">
      
      {/* Dark Grungy Wall Texture Background */}
      <div 
        className="absolute inset-0 bg-[#0d0f12] opacity-95 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(35, 45, 55, 0.4) 0%, transparent 60%),
                            radial-gradient(circle at 80% 70%, rgba(20, 25, 30, 0.8) 0%, transparent 60%),
                            repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 4px)`
        }}
      />
      
      {/* Concrete Wall Scratches & Graffiti */}
      <div className="absolute inset-0 opacity-15 pointer-events-none font-rock text-3xl text-slate-500 flex items-center justify-around">
        <span className="rotate-[-12deg]">DOOM AWAITS</span>
        <span className="rotate-[8deg]">SECTOR 7</span>
        <span className="rotate-[-5deg]">SURVIVE</span>
      </div>

      <div className="w-full relative z-10">
        
        {/* Header Title ("TESTIMONIALS") */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-4 md:gap-6 mb-16">
          <div className="hidden md:flex flex-1 flex-col gap-1 items-end">
            <div className="h-2 w-full bg-emerald-500 shadow-[0_0_10px_#10b981] skew-x-[-30deg]"></div>
            <div className="h-[2px] w-3/4 bg-emerald-500 skew-x-[-30deg]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-emerald-400 uppercase tracking-widest text-center font-mono drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">
            TESTIMONIALS
          </h2>
          <div className="hidden md:flex flex-1 flex-col gap-1 items-start">
            <div className="h-2 w-full bg-emerald-500 shadow-[0_0_10px_#10b981] skew-x-[30deg]"></div>
            <div className="h-[2px] w-3/4 bg-emerald-500 skew-x-[30deg]"></div>
          </div>
        </div>

        {/* 100% End-To-End Full Viewport Width Continuous Moving Marquee Track */}
        <div className="w-full overflow-hidden py-10 relative">
          <motion.div 
            className="flex gap-8 items-center w-max cursor-grab active:cursor-grabbing px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {marqueeItems.map((card, idx) => renderCard(card, idx))}
          </motion.div>
        </div>

      </div>

      {/* Fullscreen Inspect Modal on Card Click */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full p-8 rounded-xl bg-[#ede2c4] text-slate-900 border-4 border-slate-800 shadow-2xl relative font-marker select-text"
            >
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-4 font-mono font-black text-2xl text-slate-800 hover:text-red-600 cursor-pointer"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-marker mb-4 border-b-2 border-slate-800 pb-2">
                {selectedCard.headline || "TESTIMONIAL"}
              </h3>

              <p className="text-lg md:text-xl font-handwriting leading-relaxed mb-6">
                {selectedCard.content}
              </p>

              <div className="text-right font-marker text-base text-slate-800">
                {selectedCard.signature}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
