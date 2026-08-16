"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import EngagementTrack from "@/components/EngagementTrack";
import Incentives from "@/components/Incentives";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="bg-[var(--color-background)] min-h-screen">
      {!hasEntered && <IntroScreen onEnter={() => setHasEntered(true)} />}

      <div className={`transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>



        <SocialSidebar />
        <Hero />
        <AboutStats />
        <EngagementTrack />
        <Incentives />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
