"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Memories", href: "#gallery" },
  { label: "Messages", href: "#wishes" },
  { label: "Wishes", href: "#wishes" },
];

export default function MobileHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      {/* top bar */}
      <div className="relative z-30 flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <span className="font-display flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/40 text-sm text-cyan-200">
            Y
          </span>
          <div className="leading-none">
            <p className="font-display text-sm tracking-[0.15em] text-white">YUGESH</p>
            <p className="text-[8px] tracking-[0.25em] text-cyan-300/60 uppercase">
              A brighter timeline
            </p>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4.5 w-4.5">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="panel-frame absolute top-16 right-5 z-30 flex w-44 flex-col overflow-hidden rounded-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 px-4 py-3 text-xs tracking-wide text-white/70 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* portrait cutout floating over the planet */}
      <div className="relative z-10 mt-2 h-[46vh] min-h-[300px] w-full overflow-hidden">
        <div
          className="pointer-events-none absolute top-[8%] left-1/2 z-0 h-[75vw] w-[75vw] -translate-x-1/2 rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, rgba(120,190,255,0.4), rgba(80,60,180,0.28) 45%, rgba(5,5,20,0) 72%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{
            filter: "drop-shadow(0 0 40px rgba(100,170,255,0.35)) drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
          }}
        >
          <Image
            src="/photos/hero-cutout.webp"
            alt="Yugesh"
            fill
            sizes="100vw"
            priority
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* script accent */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-script absolute top-2 left-4 z-10 text-xl leading-tight text-cyan-100/90"
        >
          Same Person
          <br />
          Bigger Dreams ♡
        </motion.p>
      </div>

      {/* traits strip - below portrait, avoids clutter over the photo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="relative z-10 mt-3 flex justify-center gap-3 text-[9px] tracking-[0.2em] text-cyan-200/60 uppercase"
      >
        <span>Kinder</span>
        <span className="text-white/20">•</span>
        <span>Stronger</span>
        <span className="text-white/20">•</span>
        <span>Wiser</span>
        <span className="text-white/20">•</span>
        <span>Still You</span>
      </motion.div>

      {/* headline */}
      <div className="relative z-10 mt-2 flex flex-col items-center px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-base tracking-[0.3em] text-white/80 uppercase"
        >
          Happy Birthday
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-chrome text-5xl leading-none font-black tracking-tight"
        >
          YUGESH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-2 text-sm text-white/70"
        >
          Another year. A brighter you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="panel-frame mt-3 rounded-xl px-4 py-2.5"
        >
          <p className="text-xs leading-relaxed font-light text-white/60">
            Grateful for the memories, the laughter, the support, and the
            amazing person you are. Here&apos;s to bigger dreams, bolder
            adventures and an even brighter year ahead!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: "backOut" }}
          className="mt-4 grid w-full max-w-xs grid-cols-2 gap-3 pb-2"
        >
          <a
            href="#gallery"
            className="glow-border rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/20 px-4 py-2.5 text-center font-display text-[10px] tracking-[0.1em] text-white uppercase backdrop-blur-md"
          >
            Explore Memories
          </a>
          <a
            href="#wishes"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-center font-display text-[10px] tracking-[0.1em] text-white/80 uppercase backdrop-blur-md"
          >
            Read Messages
          </a>
        </motion.div>
      </div>
    </div>
  );
}
