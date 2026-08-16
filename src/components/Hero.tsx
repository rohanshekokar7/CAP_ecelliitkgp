"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Add background when scrolled
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-black">

      {/* LAYER 1: BASE BACKGROUND (z-0) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none"></div>





      {/* LAYER 2: TEXT (z-10) - Behind the mask */}
      <div className="absolute inset-0 z-10 w-full h-full flex items-center px-4 md:pl-10 md:pr-24 pt-32 md:pt-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="flex flex-col items-start w-full md:w-1/2"
        >
          <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-wider drop-shadow-2xl">
            <span className="text-emerald-500">Campus</span>
            <br />
            Ambassador
          </h1>
          <p className="mt-4 text-emerald-100/70 text-lg md:text-xl font-light tracking-wide max-w-sm">
            Join the elite league of students leading entrepreneurship in campuses across the nation.
          </p>
        </motion.div>
      </div>

      {/* LAYER 4: BUTTONS (z-30) - In front of everything */}
      <div className="absolute inset-0 z-30 w-full h-full flex items-center justify-end px-8 md:pl-24 md:pr-40 pt-32 md:pt-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col gap-6 items-end mt-12 md:mt-0 w-full md:w-auto pointer-events-auto"
        >
          <Link href="/register" className="bg-gradient-to-r from-emerald-700 to-emerald-400 text-white font-medium px-8 py-3 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] w-48 flex items-center justify-center">
            Register Now
          </Link>

          <Link href="/login" className="bg-gradient-to-r from-emerald-700 to-emerald-400 text-white font-medium px-8 py-3 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] w-48 flex items-center justify-center">
            Login
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
