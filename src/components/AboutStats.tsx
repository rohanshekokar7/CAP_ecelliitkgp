"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

type StoryPhase = {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badges: { label: string; sub: string }[];
};

const storyPhases: StoryPhase[] = [
  {
    id: 0,
    tag: "THE ENTREPRENEURSHIP CELL - IIT KHARAGPUR",
    title: "ABOUT US",
    subtitle: "MISSION & VISION",
    description: "Entrepreneurship Cell, IIT Kharagpur fosters innovation and nurtures entrepreneurial talent across India. We empower individuals to turn ideas into impactful ventures by connecting startups with mentors, investors, and essential resources.",
    badges: [
      { label: "INNOVATION", sub: "Core Driving Force" },
      { label: "LEADERSHIP", sub: "Student Centric" },
      { label: "EXCELLENCE", sub: "Nationwide Standards" }
    ]
  },
  {
    id: 1,
    tag: "NATIONWIDE FLAGSHIP INITIATIVES",
    title: "WHAT IS EAD & LSM?",
    subtitle: "PAN-INDIA ENTREPRENEURSHIP DRIVE",
    description: "Entrepreneurship Awareness Drive (EAD) & Leadership Summit (LSM) are E-Cell IIT Kharagpur's premier pan-India initiatives spanning 25+ major cities, hosting prominent VCs, unicorn founders, and over 30,000+ aspiring entrepreneurs.",
    badges: [
      { label: "25+", sub: "Cities Pan-India" },
      { label: "30,000+", sub: "Annual Footfall" },
      { label: "250+", sub: "Industry Mentors" }
    ]
  },
  {
    id: 2,
    tag: "CAMPUS LEADERSHIP INTERNSHIP",
    title: "WHAT IS CAMPUS AMBASSADOR?",
    subtitle: "LEAD ENTREPRENEURSHIP ON YOUR CAMPUS",
    description: "E-Cell IIT Kharagpur's Campus Ambassador Program is an elite nationwide leadership internship. It empowers student visionaries to spearhead innovation drives, build strategic campus networks, organize flagship events, and earn exclusive rewards.",
    badges: [
      { label: "1000+", sub: "Ambassadors" },
      { label: "500+", sub: "Colleges Represented" },
      { label: "2000+", sub: "Startups Connected" }
    ]
  }
];

const TOTAL_FRAMES = 45;

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload 45 high-FPS video sequence frames for 60FPS video scrubbing
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = i < 10 ? `0${i}` : `${i}`;
      img.src = `/frames/seq_${num}.png`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Smooth Canvas Video Scrubbing using RequestAnimationFrame & Lerp
  useEffect(() => {
    let animId: number;
    let currentFrame = 0;

    const render = () => {
      const progress = scrollYProgress.get();
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, progress * (TOTAL_FRAMES - 1)));

      // Linear interpolation (Lerp) for high-precision 60FPS video playback
      currentFrame += (targetFrame - currentFrame) * 0.18;
      const frameIdx = Math.round(currentFrame);

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        const img = imagesRef.current[frameIdx];

        if (ctx && img && img.complete && img.naturalWidth !== 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      }

      // Update story text phase based on scroll progress
      if (progress < 0.35) {
        setActivePhaseIndex(0);
      } else if (progress < 0.70) {
        setActivePhaseIndex(1);
      } else {
        setActivePhaseIndex(2);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [scrollYProgress]);

  const currentPhase = storyPhases[activePhaseIndex];

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black select-none" id="about">
      
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black py-8">
        
        {/* Background Overlay Glows */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
          style={{ backgroundImage: "url('/Background.jpg')" }}
        />
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(6, 78, 59, 0.3) 0%, rgba(0, 0, 0, 0.85) 60%, rgba(0, 0, 0, 0.98) 100%), linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.95) 100%)"
          }}
        />

        {/* Floating Cosmic Dust Particles */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[pulse-glow_5s_infinite] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
          
          {/* Top Step Progress Bar / Tabs */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm text-emerald-400 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" /> E-CELL VIDEO CHRONICLES
              </span>
            </div>

            {/* Interactive Step Switcher Tabs */}
            <div className="flex items-center gap-2 md:gap-4 font-mono text-xs md:text-sm">
              {storyPhases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => {
                    setActivePhaseIndex(phase.id);
                    if (containerRef.current) {
                      const containerTop = containerRef.current.offsetTop;
                      const containerHeight = containerRef.current.offsetHeight;
                      const targetY = containerTop + (phase.id / 2) * (containerHeight - window.innerHeight);
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    activePhaseIndex === phase.id
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  0{phase.id + 1}. {phase.id === 0 ? "ABOUT US" : phase.id === 1 ? "EAD & LSM" : "CAMPUS AMBASSADOR"}
                </button>
              ))}
            </div>
          </div>

          {/* Main 2-Column Split: Left Smooth 45-Frame HTML5 Canvas Video Scrubber (60-70%), Right Text (30-40%) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 flex-1 my-auto">
            
            {/* LEFT SIDE: Smooth HTML5 Canvas 45-Frame Video Scrubber (Shifted Leftmost, Static Hover, Overlapping Crumbles) */}
            <div className="w-full lg:w-[75%] flex items-center justify-start relative z-30 lg:-ml-16 lg:-mr-32">
              <div className="relative w-full flex items-center justify-start">
                
                {/* Canvas element rendering smooth 45-frame 60 FPS video scrubbing */}
                <canvas 
                  ref={canvasRef}
                  width={1200}
                  height={850}
                  className="w-full h-auto max-h-[540px] md:max-h-[580px] object-contain relative z-20 drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]"
                />

                {/* Overlapping Crumbles Effect over lower 20-25% */}
                <img 
                  src="/crumblles.png" 
                  alt="Crumbles Overlay" 
                  className="absolute -bottom-6 -left-[12%] w-[125%] h-[38%] z-30 pointer-events-none object-cover opacity-95 mix-blend-screen drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)]"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Dynamic Text Panel (Balanced Font Size & Proper Layout Fit) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-5 relative z-10 lg:pl-16 xl:pl-24 transform lg:translate-x-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-phase-${activePhaseIndex}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Header (No vertical green line) */}
                  <div>
                    <span className="font-mono text-xs md:text-sm text-emerald-400 uppercase tracking-[0.35em] font-black block mb-2 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                      {currentPhase.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase font-serif drop-shadow-[0_0_20px_rgba(16,185,129,0.6)] leading-tight">
                      {currentPhase.title}
                    </h2>
                    <p className="font-mono text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider mt-2">
                      {currentPhase.subtitle}
                    </p>
                  </div>

                  {/* Paragraph Description */}
                  <p className="text-slate-200 font-sans text-sm md:text-base lg:text-lg leading-relaxed font-medium">
                    {currentPhase.description}
                  </p>

                  {/* Badges / Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {currentPhase.badges.map((badge, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border-2 border-emerald-500/40 text-center shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                        <h4 className="text-lg md:text-2xl font-black text-emerald-400 font-mono leading-tight">{badge.label}</h4>
                        <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-slate-300 mt-1">{badge.sub}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

          {/* Bottom Video Scroll Scrub Indicator */}
          <div className="flex items-center justify-between text-slate-400 font-mono text-xs pt-4 border-t border-slate-900">
            <span>45-FRAME VIDEO SCRUB (60 FPS)</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="uppercase tracking-widest">{currentPhase.title}</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
