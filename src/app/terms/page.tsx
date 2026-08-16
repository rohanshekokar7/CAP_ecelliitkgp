"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FaqTerms from "@/components/FaqTerms";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col">
            <div className="flex-grow pt-24">
                <FaqTerms />
            </div>
            <Footer />
        </main>
    );
}
