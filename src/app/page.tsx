"use client";

import { useEffect } from "react";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Wishes from "@/components/Wishes";
import CelebrationButton from "@/components/CelebrationButton";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { burstConfetti } from "@/lib/confetti";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => burstConfetti(), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24 md:pb-0">
      <StarField />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, rgba(155,92,255,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(77,234,255,0.14), transparent 45%), radial-gradient(circle at 50% 100%, rgba(255,77,227,0.12), transparent 50%)",
        }}
      />
      <Hero onCelebrate={burstConfetti} />
      <Gallery />
      <Wishes />
      <Footer />
      <CelebrationButton />
      <MobileNav />
    </main>
  );
}
