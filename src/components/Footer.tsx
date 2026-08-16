"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black relative pt-24 overflow-hidden" id="connect">
      {/* Background Decorative Tech Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Actual Footer Bottom - Glassmorphism Control Panel */}
      <div className="border-t border-emerald-900/50 py-16 premium-glass relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12">

          {/* Left Side */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/e_cell_logo.png"
                alt="Entrepreneurship Cell IIT Kharagpur"
                width={240}
                height={80}
                className="w-auto h-16 md:h-20 object-contain hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300"
              />
            </Link>
          </div>

          {/* Middle Side - Site Navigation */}
          <div className="flex flex-col md:col-span-1">
            <h4 className="text-white font-bold text-2xl tracking-wide mb-6 drop-shadow-sm">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#incentives" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Incentives</a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">FAQs and Terms</a>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Right Side - Inquiry Form */}
          <div className="flex flex-col justify-center w-full max-w-md mt-8 md:mt-0">
            <div className="w-full">
              <h3 className="text-3xl font-black text-white tracking-wide mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Have any questions?
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Reach out to our team to get your queries resolved!
              </p>

              <div className="relative w-full mb-8 group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-white/30 py-3 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
              </div>

              <div className="flex items-center gap-4 w-full">
                <button className="flex-1 bg-white text-black font-semibold py-3 rounded-full hover:bg-emerald-50 hover:scale-105 transition-all duration-300">
                  Send Email
                </button>
                <Link href="/register" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 text-black font-bold py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
