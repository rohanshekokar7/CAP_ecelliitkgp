"use client";

import React, { useState } from "react";
import { CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "IS THIS AN OFFLINE PROGRAM?",
    answer: "The program is primarily online, with tasks designed to be executed both digitally and on your respective college campus.",
  },
  {
    question: "WHAT WILL BE THE ELIGIBILITY CRITERIA FOR THE CERTIFICATE OF COMPLETION?",
    answer: "You must complete at least 75% of the assigned tasks and submit your reports before the deadlines.",
  },
  {
    question: "WHAT WILL THE PROGRAM'S TIMELINE BE?",
    answer: "The Campus Ambassador program runs for a duration of 3 to 4 months.",
  },
  {
    question: "IS IT OPEN FOR FIRST-YEAR STUDENTS?",
    answer: "Yes, students from any year and any degree program can apply.",
  },
  {
    question: "IS THERE ANY INTERVIEW/SELECTION PROCESS?",
    answer: "Yes, candidates will be shortlisted based on their application and may undergo a brief interview process.",
  },
  {
    question: "WHO CAN JOIN THE PROGRAM?",
    answer: "Any college student passionate about entrepreneurship and leadership.",
  },
  {
    question: "HOW WILL WE RECEIVE UPDATES ABOUT TASKS?",
    answer: "Updates will be communicated via official WhatsApp groups and email.",
  },
  {
    question: "WHAT WILL I GAIN FROM IT?",
    answer: "Leadership experience, networking opportunities, merchandise, certificates, and free access to our events.",
  },
];

const terms = [
  "The Certificate of Internship shall be provided only on the successful completion of the complete term.",
  "The representation can be revoked at any time of the year if the Ambassador fails to perform reasonably well.",
  "More than one Ambassador can be selected from a college depending upon the strength of the college.",
  "For any formal purposes during the tenure, the designation of \"Campus Ambassador\" is to be used strictly on all formal documents",
  "E-Cell, IIT KGP shall send all the publicity materials to the respective colleges, but will not be liable for extra cost incurred by the Ambassadors",
];

export default function FaqTerms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="faqs">
      {/* Heavy Metal Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* FAQS Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div className="hidden md:flex flex-1 flex-col gap-2 items-end">
            <div className="h-3 w-full bg-slate-700 border-y border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] skew-x-[-45deg]"></div>
            <div className="h-1 w-3/4 bg-emerald-500 skew-x-[-45deg]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-emerald-500 uppercase tracking-widest text-center shadow-black drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] font-mono">
            FAQS
          </h2>
          <div className="hidden md:flex flex-1 flex-col gap-2 items-start">
            <div className="h-3 w-full bg-slate-700 border-y border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] skew-x-[45deg]"></div>
            <div className="h-1 w-3/4 bg-emerald-500 skew-x-[45deg]"></div>
          </div>
        </motion.div>

        {/* FAQS List with Doom Armor Shielding */}
        <div
          className="relative mb-32 p-1 bg-gradient-to-br from-slate-400 via-slate-700 to-slate-900 shadow-[0_15px_50px_rgba(16,185,129,0.3)]"
          style={{ clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)" }}
        >
          <div
            className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 p-8 sm:p-10"
            style={{ clipPath: "polygon(38px 0, 100% 0, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0 100%, 0 38px)" }}
          >
            {/* Metal Texture & Details */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-40 mix-blend-overlay pointer-events-none z-0"></div>

            {/* Screws */}
            <div className="absolute top-4 left-[50px] w-3 h-3 rounded-full bg-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-slate-700/50 z-10"></div>
            <div className="absolute top-4 right-[50px] w-3 h-3 rounded-full bg-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-slate-700/50 z-10"></div>
            <div className="absolute bottom-4 left-[50px] w-3 h-3 rounded-full bg-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-slate-700/50 z-10"></div>
            <div className="absolute bottom-4 right-[50px] w-3 h-3 rounded-full bg-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-slate-700/50 z-10"></div>

            {/* Glowing Core Energy Line */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-emerald-500 shadow-[0_0_20px_4px_rgba(16,185,129,1)] pointer-events-none z-20"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 relative z-10"
            >
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div
                    variants={itemVariants}
                    key={idx}
                    className="border-b-2 border-slate-800 pb-4"
                    onMouseEnter={() => setOpenIndex(idx)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group py-3"
                    >
                      <span className="font-mono text-emerald-400 font-bold uppercase tracking-widest md:text-xl pr-4 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,1)]">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 bg-black p-2 rounded-sm border-2 border-slate-700 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300">
                        <svg
                          className={`w-5 h-5 text-emerald-500 fill-current transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-300 font-medium pl-6 border-l-[3px] border-emerald-500 mt-4 bg-gradient-to-r from-emerald-950/40 to-transparent p-5 rounded-r shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] tracking-wide">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Terms Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-16 mt-24"
        >
          <div className="hidden md:flex flex-1 flex-col gap-1 items-end">
            <div className="h-[2px] w-full bg-slate-700"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-400 uppercase tracking-widest text-center font-mono">
            TERMS & <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">CONDITIONS</span>
          </h2>
          <div className="hidden md:flex flex-1 flex-col gap-1 items-start">
            <div className="h-[2px] w-full bg-slate-700"></div>
          </div>
        </motion.div>

        {/* Terms List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 px-0 md:px-8"
        >
          {terms.map((term, idx) => (
            <motion.div variants={itemVariants} key={idx} className="group flex items-start gap-5 bg-gradient-to-r from-slate-900 to-black p-6 rounded-br-3xl rounded-tl-3xl border-l-[4px] border-slate-700 hover:border-emerald-500 transition-colors duration-500 hover:shadow-[0_5px_25px_rgba(16,185,129,0.15)] overflow-hidden relative">
              {/* background metal details */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>

              <div className="mt-1 relative z-10 w-8 h-8 rounded bg-black border border-emerald-500/50 flex flex-shrink-0 items-center justify-center group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all">
                <CheckSquare className="w-5 h-5 text-emerald-500 shadow-black" strokeWidth={3} />
              </div>
              <p className="text-slate-300 font-bold text-lg md:text-xl leading-relaxed relative z-10 tracking-wide group-hover:text-slate-100 transition-colors">
                {term}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
