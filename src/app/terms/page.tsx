"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FaqTerms from "@/components/FaqTerms";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col">
            <div className="absolute top-8 left-8 z-50">
                <Link href="/" className="flex items-center gap-2 text-emerald-500 hover:text-white font-mono tracking-widest uppercase transition-colors group px-4 py-2 border border-transparent hover:border-emerald-500 bg-slate-900/50 rounded-sm">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </Link>
            </div>
            <div className="flex-grow">
                <FaqTerms />
            </div>
            <Footer />
        </main>
    );
}
