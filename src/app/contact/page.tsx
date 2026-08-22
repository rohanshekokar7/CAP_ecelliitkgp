"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "@/components/Footer";

const team = [
    {
        name: "CHAITANYA GHUGE",
        role: "EAD-LSM COORDINATOR AND PUBLIC RELATIONS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMdFlNqyv0iRquYx4RAQ1KhUXfcUFkUAzIqNxXfvGpQ&s=10",
        email: "chaitanya@ecell.in",
        phone: "+91 76888 42669",
        linkedin: "https://www.linkedin.com/in/chaitanya-ghuge-246a9b39b/"
    },
    {
        name: "RITESH THOSARE",
        role: "CORPORATE AND MEDIA RELATIONS AND PUBLIC RELATIONS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQs0bTf6S0x5raSe5nx4rVshC9d4yYLZcmEIUMb6q03icVD84GJ9WqHk&s=10",
        email: "ritesh@ecell.in",
        phone: "+91 90754 57648",
        linkedin: "https://www.linkedin.com/in/ritesh-thosare-36a278321/"
    },

];

export default function ContactPage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 z-50"></div>

            <div className="flex-grow pt-32 pb-24">
                {/* Contact Us - Team Section */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">

                    {/* Contact Us Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-6 mb-16"
                    >
                        <div className="hidden md:flex flex-1 flex-col gap-1 items-end">
                            <div className="h-[1px] w-full bg-emerald-900"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-emerald-500 capitalize tracking-wider text-center drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                            Contact Us
                        </h2>
                        <div className="hidden md:flex flex-1 flex-col gap-1 items-start">
                            <div className="h-[1px] w-full bg-emerald-900"></div>
                        </div>
                    </motion.div>

                    {/* Team Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col md:flex-row justify-center items-stretch gap-12 w-full max-w-6xl mx-auto"
                    >
                        {team.map((member, idx) => (
                            <motion.div variants={itemVariants} key={idx} className="relative group flex flex-col w-full md:w-[420px] rounded-2xl overflow-hidden border border-emerald-950/80 bg-emerald-950/30 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 cursor-pointer">

                                {/* Image Top Half with Hover blur & icons */}
                                <div className="relative h-[340px] overflow-hidden z-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:blur-sm transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent group-hover:via-black/50 transition-all duration-500"></div>

                                    {/* Hover Icons Over Image */}
                                    <div className="absolute inset-y-0 right-5 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-x-10 group-hover:translate-x-0">
                                        <a href={`mailto:${member.email}`} className="bg-emerald-500 text-black p-3 rounded-full hover:scale-110 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-transform duration-300">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-black p-3 rounded-full hover:scale-110 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-transform duration-300">
                                            <FaLinkedinIn className="w-5 h-5 fill-current" />
                                        </a>
                                    </div>
                                </div>

                                {/* Always-visible Bottom Details */}
                                <div className="relative z-10 p-6 md:p-8 bg-[#021812] border-t border-emerald-500/20 w-full flex-1 pt-8">
                                    <h3 className="text-white font-black uppercase tracking-wider text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-4">
                                        {member.name}
                                    </h3>

                                    <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-5 border-b border-emerald-900/60 pb-4">
                                        {member.role}
                                    </p>
                                    <div className="space-y-4 py-2">
                                        <a href={`mailto:${member.email}`} className="text-slate-300 hover:text-white text-sm font-mono tracking-wider flex items-center gap-3 transition-colors">
                                            <span className="text-emerald-500"><Mail className="w-5 h-5" /></span> {member.email}
                                        </a>
                                        <a href={`tel:${member.phone}`} className="text-slate-300 hover:text-white text-sm font-mono tracking-wider flex items-center gap-3 transition-colors">
                                            <span className="text-emerald-500"><Phone className="w-5 h-5" /></span> {member.phone}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
