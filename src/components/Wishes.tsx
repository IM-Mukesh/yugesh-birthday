"use client";

import { motion } from "framer-motion";

const WISHES = [
  {
    title: "Level Up",
    body: "Another year, another patch update. May every glitch turn into a feature and every bug into a breakthrough.",
  },
  {
    title: "Power Boost",
    body: "May your ambitions run at max frame rate and your energy never hit a loading screen.",
  },
  {
    title: "New Timeline",
    body: "Here's to new adventures, bigger dreams, and a year that outshines every galaxy you've crossed so far.",
  },
];

export default function Wishes() {
  return (
    <section id="wishes" className="relative z-10 px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <span className="text-xs tracking-[0.35em] text-cyan-300 uppercase">
          Incoming Message
        </span>
        <h2 className="font-display text-gradient-neon glow-text mt-3 text-3xl font-bold sm:text-5xl">
          Birthday Broadcast
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {WISHES.map((wish, i) => (
          <motion.div
            key={wish.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="glass-panel glow-border animate-float rounded-2xl p-7"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 font-display text-cyan-200">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display mb-2 text-lg tracking-wide text-white">
              {wish.title}
            </h3>
            <p className="font-light text-white/60">{wish.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="glass-panel glow-border mx-auto mt-14 max-w-3xl rounded-2xl p-8 text-center sm:p-12"
      >
        <p className="font-display text-gradient-neon glow-text text-xl leading-relaxed sm:text-2xl">
          &ldquo;Wishing you a birthday as legendary as you are, Yugesh.&rdquo;
        </p>
        <p className="mt-4 text-sm tracking-[0.2em] text-white/40 uppercase">
          — With love, from your family
        </p>
      </motion.div>
    </section>
  );
}
