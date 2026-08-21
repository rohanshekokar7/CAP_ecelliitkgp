"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [isEntering, setIsEntering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    // Removed old audio playback to allow video audio to play without clashing
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-1000 bg-[#0a0a0a] overflow-hidden ${isExiting ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'
        }`}
    >
      {/* Smoky Background Approximation using CSS radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(80,80,80,0.15)_0%,_rgba(0,0,0,1)_100%)] mix-blend-screen pointer-events-none"></div>

      {/* Floating particles/smoke effect simulation */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[pulse-glow_4s_infinite] pointer-events-none"></div>

      {isEntering ? (
        <>
          <video
            src="/capvideo.mp4"
            autoPlay
            playsInline
            className={`absolute top-1/2 left-1/2 w-[100vh] h-[100vw] object-cover z-20 -translate-x-1/2 -translate-y-1/2 -rotate-90 transition-opacity duration-1000 ${showLogo ? 'opacity-20' : 'opacity-100'}`}
            ref={(el) => {
              if (el) el.playbackRate = 1.6;
            }}
            onEnded={() => {
              setShowLogo(true);
              setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => {
                  onEnter();
                }, 1000);
              }, 2500);
            }}
            onError={() => {
              // Fallback in case video fails to load
              setShowLogo(true);
              setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => {
                  onEnter();
                }, 1000);
              }, 2500);
            }}
          />
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
              >
                <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] drop-shadow-[0_0_35px_rgba(16,185,129,0.8)]">
                  <Image
                    src="/e_cell_logo.png"
                    alt="E-Cell IIT KGP Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center select-none mt-10">

          <button
            onClick={handleEnter}
            className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
            aria-label="Submit to Doom"
          >
            {/* Background Green Glow aura */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/25 transition-all duration-500"></div>

            {/* Metallic Eye Button SVG */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-300 group-hover:scale-[1.03] active:scale-95 drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]">
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Outer Bezel Radial Gradient */}
                  <radialGradient id="outerRim" cx="40%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="25%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#475569" />
                    <stop offset="75%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </radialGradient>

                  {/* Brushed Metal Metallic Ring */}
                  <linearGradient id="metalRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="20%" stopColor="#64748b" />
                    <stop offset="40%" stopColor="#f1f5f9" />
                    <stop offset="60%" stopColor="#334155" />
                    <stop offset="80%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>

                  {/* Convex Center Dome Gradient */}
                  <radialGradient id="innerDome" cx="45%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="20%" stopColor="#94a3b8" />
                    <stop offset="55%" stopColor="#475569" />
                    <stop offset="85%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#090d16" />
                  </radialGradient>

                  {/* Green Eye Glowing Radial Gradient */}
                  <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a3ff12" />
                    <stop offset="30%" stopColor="#39ff14" />
                    <stop offset="65%" stopColor="#00c853" />
                    <stop offset="90%" stopColor="#004d40" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>

                  {/* Inner Green Pulse Gradient */}
                  <radialGradient id="greenPulse" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#76ff03" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#00e676" stopOpacity="0.7" />
                    <stop offset="80%" stopColor="#00e676" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>

                  {/* Neon Glow Filter */}
                  <filter id="neonGreenGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Steel Bezel Ring */}
                <circle cx="150" cy="150" r="142" fill="url(#metalRingGrad)" stroke="#090d16" strokeWidth="3" />
                <circle cx="150" cy="150" r="139" fill="none" stroke="#f1f5f9" strokeWidth="1" opacity="0.4" />

                {/* Inner Recessed Metallic Bezel */}
                <circle cx="150" cy="150" r="122" fill="url(#outerRim)" stroke="#020617" strokeWidth="4" />

                {/* Deep Dark Metallic Groove */}
                <circle cx="150" cy="150" r="110" fill="#0b0f19" stroke="#000000" strokeWidth="3" />

                {/* Convex Central Metallic Cap */}
                <circle cx="150" cy="150" r="102" fill="url(#innerDome)" stroke="#475569" strokeWidth="1.5" />

                {/* Eye Slot Dark Recess Frame */}
                <path
                  d="M 60 150 Q 150 92 240 150 Q 150 208 60 150 Z"
                  fill="#02040a"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                />

                {/* Inner Eye Black Shadow Rim */}
                <path
                  d="M 66 150 Q 150 98 234 150 Q 150 202 66 150 Z"
                  fill="#000000"
                />

                {/* Glowing Green Eye Core */}
                <path
                  d="M 72 150 Q 150 106 228 150 Q 150 194 72 150 Z"
                  fill="url(#eyeGlow)"
                  filter="url(#neonGreenGlow)"
                  className="group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Core Bright Neon Pulse Center */}
                <path
                  d="M 85 150 Q 150 118 215 150 Q 150 182 85 150 Z"
                  fill="url(#greenPulse)"
                  className="animate-pulse"
                />

                {/* High Specular Metallic Ring Reflections */}
                <path d="M 50 150 A 100 100 0 0 1 250 150" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.3" />
                <path d="M 68 150 A 82 82 0 0 1 232 150" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.2" />
              </svg>
            </div>

            {/* Gold / Brass Hexagonal Button Banner ("SUBMIT TO DOOM") */}
            <div className="mt-8 relative transition-all duration-300 group-hover:scale-105 group-active:scale-95">
              <div
                className="p-[2px] bg-gradient-to-b from-[#fef08a] via-[#d97706] to-[#451a03] shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
                style={{
                  clipPath: 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%, 0% 50%)'
                }}
              >
                <div
                  className="px-8 py-2 md:px-10 md:py-2.5 bg-gradient-to-b from-[#eab308] via-[#ca8a04] to-[#854d0e] flex items-center justify-center border-t border-b border-[#fef08a]/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)]"
                  style={{
                    clipPath: 'polygon(14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0% 50%)'
                  }}
                >
                  <span className="font-extrabold text-black tracking-[0.25em] text-sm md:text-base uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    SUBMIT TO DOOM
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
