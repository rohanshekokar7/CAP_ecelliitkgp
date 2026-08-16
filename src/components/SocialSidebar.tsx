import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 py-4 px-3 z-[100] bg-emerald-500/20 backdrop-blur-md border-l border-y border-emerald-400/30 rounded-l-2xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hidden md:flex">
      <a href="https://www.instagram.com/iitkgp_ecell/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram" className="group hover:-translate-x-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
          <FaInstagram className="w-7 h-7" />
        </div>
      </a>
      <a href="https://linkedin.com/company/ecellkgp?originalSubdomain=in" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group hover:-translate-x-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[#0A66C2] shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
          <FaLinkedinIn className="w-7 h-7" />
        </div>
      </a>
      <a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" rel="noopener noreferrer" title="Facebook" className="group hover:-translate-x-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[#1877F2] shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
          <FaFacebookF className="w-7 h-7" />
        </div>
      </a>
      <a href="https://x.com/ecelliitkgp" target="_blank" rel="noopener noreferrer" title="X" className="group hover:-translate-x-2 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[#777] group-hover:bg-black shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
          <FaXTwitter className="w-7 h-7" />
        </div>
      </a>
    </div>
  );
}
