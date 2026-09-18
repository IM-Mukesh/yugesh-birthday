"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-center gap-2 px-6 pb-14 pt-10 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-gradient-neon text-lg tracking-[0.2em]"
      >
        HAPPY BIRTHDAY YUGESH
      </motion.div>
      <p className="text-xs tracking-[0.3em] text-white/30 uppercase">
        Built with love &amp; a few too many neon lights
      </p>
    </footer>
  );
}
