"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const partners = [
  {
    id: 1,
    cost: "01",
    name: "STARK INTERNSHIPS",
    category: "EXCLUSIVE OPPORTUNITIES",
    effectLabel: "BENEFIT:",
    desc: "Gain direct summer internship opportunities, work on real-world projects, and unlock exclusive access to E-Cell IIT Kharagpur's startup ecosystem.",
  },
  {
    id: 2,
    cost: "02",
    name: "CERTIFICATE & REWARDS",
    category: "OFFICIAL CREDENTIALS",
    effectLabel: "BENEFIT:",
    desc: "Earn an official Certificate of Completion signed by E-Cell IIT Kharagpur along with exclusive merchandise and high-value rewards.",
  },
  {
    id: 3,
    cost: "03",
    name: "EXPERT MENTORSHIP",
    category: "1-ON-1 GUIDANCE",
    effectLabel: "BENEFIT:",
    desc: "Interact 1-on-1 with industry leaders, unicorn founders, and venture capitalists to accelerate your career and entrepreneurial journey.",
  },
  {
    id: 4,
    cost: "04",
    name: "EXCLUSIVE MERCHANDISE",
    category: "PREMIUM APPAREL",
    effectLabel: "BENEFIT:",
    desc: "Claim high-performance hoodies, t-shirts, badges, and official E-Cell IIT Kharagpur ambassador merchandise.",
  },
  {
    id: 5,
    cost: "05",
    name: "NETWORKING & SUMMITS",
    category: "PAN-INDIA ACCESS",
    effectLabel: "BENEFIT:",
    desc: "Receive passes to EAD & Leadership Summit, connecting with 30,000+ students and top founders across 25+ cities.",
  },
  {
    id: 6,
    cost: "06",
    name: "TACTICAL SKILL WEBINARS",
    category: "CAPACITY BUILDING",
    effectLabel: "BENEFIT:",
    desc: "Access specialized workshops on marketing, event management, pitch decks, public speaking, and strategic leadership.",
  },
];

export default function Incentives() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden select-none" id="incentives">
      
      {/* Background Glow Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/Background.jpg')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_rgba(0,0,0,0.95)_80%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div className="hidden md:flex flex-1 flex-col gap-1 items-end">
            <div className="h-2 w-full bg-emerald-500 shadow-[0_0_10px_#10b981] skew-x-[-30deg]"></div>
            <div className="h-[2px] w-3/4 bg-emerald-500 skew-x-[-30deg]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest text-center drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] font-serif">
            INCENTIVES & BENEFITS
          </h2>
          <div className="hidden md:flex flex-1 flex-col gap-1 items-start">
            <div className="h-2 w-full bg-emerald-500 shadow-[0_0_10px_#10b981] skew-x-[30deg]"></div>
            <div className="h-[2px] w-3/4 bg-emerald-500 skew-x-[30deg]"></div>
          </div>
        </motion.div>

        {/* Grid of Clean Service Incentive Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2 md:px-6"
        >
          {partners.map((partner) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.04, 
                rotateY: 3,
                rotateX: -3,
                transition: { duration: 0.25 } 
              }}
              key={partner.id} 
              className="group cursor-pointer perspective-1000"
            >
              {/* Outer Metallic Card Frame */}
              <div className="relative rounded-2xl p-4 bg-gradient-to-b from-[#2b353e] via-[#161c21] to-[#0c1013] border-2 border-[#434e57] shadow-[0_20px_40px_rgba(0,0,0,0.95)] overflow-hidden font-sans select-none flex flex-col justify-between transition-all duration-300 group-hover:border-emerald-500/80 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] min-h-[300px]">
                
                {/* Corner Screws / Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-[#11161a] border border-[#525d66] shadow-inner"></div>
                <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#11161a] border border-[#525d66] shadow-inner"></div>
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-[#11161a] border border-[#525d66] shadow-inner"></div>
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-[#11161a] border border-[#525d66] shadow-inner"></div>

                {/* Top Header Row (Index Badge + Service Category) */}
                <div className="flex items-center relative z-10 mb-3">
                  {/* Left Top Circular Index Badge */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#3a4650] to-[#12171a] border-2 border-[#5a6773] flex items-center justify-center font-black text-emerald-400 text-sm font-mono shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] shrink-0 group-hover:border-emerald-400 group-hover:text-white transition-colors">
                    {partner.cost}
                  </div>

                  {/* Category Tag Box */}
                  <div className="flex-1 ml-3 px-3 py-1.5 bg-gradient-to-r from-[#1c242b] to-[#12181d] border border-[#3b4752] rounded-md shadow-inner flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    <span className="text-[11px] md:text-xs font-black uppercase text-emerald-300 font-mono tracking-widest truncate">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Middle Service Name Block (Replaced Artwork Box with Text Display) */}
                <div className="my-3 p-6 bg-gradient-to-br from-black via-emerald-950/20 to-black border-2 border-[#333e47] rounded-xl flex items-center justify-center text-center shadow-inner group-hover:border-emerald-500/70 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-black uppercase font-serif tracking-wider text-white drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:text-emerald-300 transition-colors">
                    {partner.name}
                  </h3>
                </div>

                {/* Bottom Description Area (Quote Removed) */}
                <div className="mt-2 p-4 bg-gradient-to-b from-[#13181d] to-[#0b0e11] border-2 border-[#263038] rounded-xl shadow-inner relative text-left">
                  <p className="text-slate-200 text-xs md:text-sm font-sans leading-relaxed">
                    <strong className="text-emerald-400 font-black text-xs md:text-sm mr-1 font-mono uppercase tracking-wider">
                      {partner.effectLabel}
                    </strong>
                    {partner.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
