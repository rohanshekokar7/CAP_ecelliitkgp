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
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/CAP.png')" }}
      ></motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none"></div>





      {/* LAYER 2: CONTENT (z-30) */}
      <div className="absolute inset-0 z-30 w-full h-full flex flex-col items-center justify-center px-4 pt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="flex flex-col items-center text-center pointer-events-auto"
        >
          <h1 className="text-6xl md:text-[5rem] leading-none font-black text-white uppercase tracking-wider drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <span className="text-emerald-500">Campus</span>
            <br />
            Ambassador
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg md:text-xl font-light tracking-wide max-w-lg drop-shadow-md">
            Join the elite league of students leading entrepreneurship in campuses across the nation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 items-center mt-10 w-full justify-center"
          >
            <Link href="/register" className="bg-transparent text-white font-medium px-8 py-3 text-base rounded-full hover:scale-105 hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] w-48 flex items-center justify-center border border-white">
              Register Now
            </Link>

            <Link href="/login" className="bg-transparent text-white font-medium px-8 py-3 text-base rounded-full hover:scale-105 hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] w-48 flex items-center justify-center border border-white">
              Login
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
