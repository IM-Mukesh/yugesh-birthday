"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import PhotoFrame from "@/components/PhotoFrame";
import BirthdayModePanel from "@/components/BirthdayModePanel";
import SignPost from "@/components/SignPost";
import MobileHero from "@/components/MobileHero";

export default function Hero({ onCelebrate }: { onCelebrate: () => void }) {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center overflow-hidden pt-6 pb-10 lg:min-h-screen lg:justify-center lg:px-6 lg:pt-16 lg:pb-16"
    >
      {/* planet glow backdrop - desktop */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 lg:block"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(120,190,255,0.35), rgba(80,60,180,0.25) 40%, rgba(5,5,20,0) 70%)",
          boxShadow: "0 0 160px 60px rgba(90,140,255,0.15)",
        }}
      />

      <Sidebar />

      {/* ---------- mobile hero ---------- */}
      <MobileHero />

      {/* ---------- desktop hero ---------- */}
      <div className="relative hidden w-full flex-col items-center lg:flex">
        {/* brand lockup */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 md:left-8"
        >
          <span className="font-display flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/40 text-sm text-cyan-200">
            Y
          </span>
          <div className="leading-none">
            <p className="font-display text-sm tracking-[0.15em] text-white">YUGESH</p>
            <p className="text-[9px] tracking-[0.25em] text-cyan-300/60 uppercase">
              A brighter timeline
            </p>
          </div>
        </motion.div>

        {/* level panel */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute top-6 right-6 z-20 text-right md:right-8"
        >
          <p className="font-display text-xs tracking-[0.15em] text-white">LEVEL 26+</p>
          <div className="mt-1.5 flex flex-col gap-0.5 text-[10px] tracking-[0.2em] text-cyan-200/60 uppercase">
            <span>Kinder</span>
            <span>Stronger</span>
            <span>Wiser</span>
            <span>Still You</span>
          </div>
        </motion.div>

        {/* floating memory frames */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="pointer-events-auto">
            <PhotoFrame
              src="/photos/photo-1.jpg"
              label="Good Times"
              rotate={-6}
              delay={0.2}
              className="top-[16%] left-[6%] xl:left-[10%]"
            />
            <PhotoFrame
              src="/photos/photo-2.jpg"
              label="Stronger Today"
              rotate={-3}
              delay={0.4}
              className="top-[42%] left-[3%] xl:left-[6%]"
            />
            <PhotoFrame
              src="/photos/photo-3.jpg"
              label="Family First"
              rotate={4}
              delay={0.6}
              className="top-[58%] left-[16%] xl:left-[19%]"
            />
            <PhotoFrame
              src="/photos/photo-4.jpg"
              label="Real Moments"
              rotate={5}
              delay={0.3}
              className="top-[14%] right-[6%] xl:right-[10%]"
            />
            <PhotoFrame
              src="/photos/photo-5.jpg"
              label="Squad Energy"
              rotate={-4}
              delay={0.5}
              className="top-[40%] right-[4%] xl:right-[7%]"
            />
            <PhotoFrame
              src="/photos/poster-retro.png"
              label="Always Together"
              rotate={6}
              delay={0.7}
              className="top-[58%] right-[17%] xl:right-[20%]"
            />
          </div>
        </div>

        {/* script accents */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
          <p className="font-script animate-drift absolute top-[10%] left-[22%] text-2xl text-amber-200/80">
            Same Person
            <br />
            Bigger Dreams ♡
          </p>
          <p className="font-script animate-drift absolute top-[8%] right-[24%] text-2xl text-white/80">
            &lsquo;More Good People
            <br />
            More Good Days ♡
          </p>
          <p className="font-script animate-drift absolute bottom-[16%] left-[2%] text-xl text-white/70">
            Still the same
            <br />
            dreams ♡
          </p>
          <p className="font-script animate-drift absolute right-[4%] bottom-[22%] text-2xl text-amber-200/80">
            Keep Being
            <br />
            Awesome
          </p>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 h-[320px] w-[280px] sm:h-[390px] sm:w-[340px] md:h-[460px] md:w-[400px]"
          style={{
            filter: "drop-shadow(0 0 60px rgba(100,170,255,0.35)) drop-shadow(0 30px 40px rgba(0,0,0,0.5))",
          }}
        >
          <Image
            src="/photos/hero-cutout.png"
            alt="Yugesh"
            fill
            sizes="400px"
            priority
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* headline */}
        <div className="relative z-10 mt-6 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-lg tracking-[0.35em] text-white/80 uppercase sm:text-xl"
          >
            Happy Birthday
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-chrome text-6xl leading-none font-black tracking-tight sm:text-7xl md:text-8xl"
          >
            YUGESH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-3 text-sm tracking-wide text-white/70 sm:text-base"
          >
            Another year. A brighter you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-3 max-w-md text-xs leading-relaxed font-light text-white/50 sm:text-sm"
          >
            Grateful for the memories, the laughter, the support, and the amazing
            person you are. Here&apos;s to bigger dreams, bolder adventures and an
            even brighter year ahead!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "backOut" }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#gallery"
              className="glow-border rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/20 px-6 py-2.5 font-display text-xs tracking-[0.15em] text-white uppercase backdrop-blur-md"
            >
              Explore Memories
            </a>
            <a
              href="#wishes"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-display text-xs tracking-[0.15em] text-white/80 uppercase backdrop-blur-md"
            >
              Read Messages
            </a>
            <button
              onClick={onCelebrate}
              className="rounded-full border border-pink-400/30 bg-pink-500/10 px-6 py-2.5 font-display text-xs tracking-[0.15em] text-pink-200 uppercase backdrop-blur-md"
            >
              Celebrate 🎉
            </button>
          </motion.div>
        </div>

        {/* right side birthday mode panel */}
        <div className="absolute top-1/2 right-6 z-20 -translate-y-1/2 xl:right-10">
          <BirthdayModePanel />
        </div>

        <SignPost />
      </div>
    </section>
  );
}
