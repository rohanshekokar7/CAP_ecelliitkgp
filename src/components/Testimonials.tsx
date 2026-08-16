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
    // Array of premium, dark-themed note colors fitting the apocalyptic/Marvel theme
    const colors = [
      "bg-[#d9b752] text-slate-900", // Burnt Yellow
      "bg-[#9c3d3d] text-white",     // Rust Crimson
      "bg-[#3a5266] text-white",     // Slate Blueprint
      "bg-[#3a5a40] text-white",     // Military Green
      "bg-[#a68a61] text-slate-900", // Kraft Paper
    ];
    const colorClass = colors[index % colors.length];
    
    // Vary the tilt slightly for each note
    const rotation = (index % 2 === 0 ? 1 : -1) * ((index % 3) + 2);
    // Adjust underline color based on if it's a dark or light note
    const underlineColor = colorClass.includes("text-white") ? "decoration-white/30" : "decoration-black/20";
    const headerBorder = colorClass.includes("text-white") ? "border-white/20" : "border-black/10";

    return (
      <div 
        key={`${card.id}-${index}`}
        onClick={() => setSelectedCard(card)}
        className={`w-[320px] md:w-[340px] h-[340px] shrink-0 relative p-6 ${colorClass} shadow-[5px_15px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer group flex flex-col justify-between`}
        style={{
          transform: `rotate(${rotation}deg)`,
          // subtle fold effect on bottom right corner
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
        }}
      >
        {/* Sticky Tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/30 shadow-sm border border-white/20 rotate-[-3deg] z-10 backdrop-blur-sm"></div>

        {/* Fold visual */}
        <div className="absolute bottom-0 right-0 w-[10%] h-[10%] bg-black/20 rounded-tl-lg shadow-[-2px_-2px_4px_rgba(0,0,0,0.2)]"></div>

        <div>
          <h3 className={`font-marker text-lg md:text-xl uppercase font-bold mb-4 border-b ${headerBorder} pb-2`}>
            {card.headline || "TESTIMONIAL"}
          </h3>
          
          {/* Text is underlined as requested */}
          <p className={`font-handwriting font-bold text-lg md:text-xl leading-relaxed mb-4 underline ${underlineColor} underline-offset-4 line-clamp-6`}>
            {card.content}
          </p>
        </div>

        <span className="font-marker text-sm block text-right mt-auto opacity-80">
          - {card.signature}
        </span>
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#0a0c0e] relative text-white overflow-hidden select-none" id="testimonials">
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 35s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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
        <div className="w-full overflow-hidden py-10 relative group">
          <div className="flex gap-8 items-center w-max cursor-grab active:cursor-grabbing px-4 animate-custom-marquee">
            {marqueeItems.map((card, idx) => renderCard(card, idx))}
          </div>
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
