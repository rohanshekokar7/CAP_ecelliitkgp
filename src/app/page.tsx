"use client";

import React, { useState, useEffect } from "react";
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
  const [isClient, setIsClient] = useState(false);

  // Prevent browser from restoring scroll position when navigating Back
  // and check if the user has already passed the Intro screen in this session
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      // On a fresh page load (or refresh), the window object is reset.
      if (!(window as any).__APP_LOADED__) {
        sessionStorage.removeItem("hasEnteredSite");
        (window as any).__APP_LOADED__ = true;
      }

      if (sessionStorage.getItem("hasEnteredSite") === "true") {
        setHasEntered(true);
      }
      setIsClient(true);
    }
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasEnteredSite", "true");
    }
  };

  // Only render content after client-side hydration to prevent mismatch flashes
  if (!isClient) return null;

  return (
    <main className="bg-[var(--color-background)] min-h-screen">
      {!hasEntered && <IntroScreen onEnter={handleEnter} />}

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
