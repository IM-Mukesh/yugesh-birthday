"use client";

import { motion } from "framer-motion";
import { fireworkConfetti } from "@/lib/confetti";

export default function CelebrationButton() {
  const handleClick = () => {
    fireworkConfetti();
    setTimeout(fireworkConfetti, 150);
    setTimeout(fireworkConfetti, 300);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      aria-label="Trigger fireworks"
      className="fixed right-4 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 text-xl shadow-[0_0_25px_rgba(255,77,227,0.6)] sm:h-16 sm:w-16 sm:text-2xl md:right-6 md:bottom-6"
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1 }}
      >
        🎆
      </motion.span>
    </motion.button>
  );
}
