"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
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
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 pointer-events-auto transition-colors duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/e_cell_logo.png"
            alt="E-Cell Logo"
            width={260}
            height={56}
            className="h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/#about" className="text-white font-normal text-base hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">About Us</Link>
        <Link href="/#why" className="text-white font-normal text-base hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">Why Us</Link>
        <Link href="/#incentives" className="text-white font-normal text-base hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">Incentives</Link>
        <Link href="/terms" className="text-white font-normal text-base hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">FAQs and Terms</Link>
        <Link href="/contact" className="text-white font-normal text-base hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">Contact Us</Link>

        <Link href="/register">
          <button className="bg-transparent border border-white/70 text-white font-medium text-base px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-1 ml-4">
            Register <ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}
