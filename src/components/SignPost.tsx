"use client";

import { motion } from "framer-motion";

const SIGNS = ["Good People", "Good Times", "Brighter Future"];

export default function SignPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.4 }}
      className="pointer-events-none absolute right-4 bottom-0 hidden flex-col items-center xl:flex"
      aria-hidden="true"
    >
      <div className="flex flex-col items-end gap-2">
        {SIGNS.map((sign, i) => (
          <div
            key={sign}
            className="rounded-sm border border-amber-300/40 bg-amber-500/10 px-3 py-1 text-right text-[10px] tracking-[0.15em] text-amber-200/80 uppercase"
            style={{ marginRight: `${i * 10}px` }}
          >
            {sign}
          </div>
        ))}
      </div>
      <div className="h-40 w-1.5 rounded-t bg-gradient-to-b from-amber-800/60 to-amber-900/20" />
    </motion.div>
  );
}
