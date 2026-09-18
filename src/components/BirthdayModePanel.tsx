"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { label: "More Travel", icon: "✈" },
  { label: "More Success", icon: "📈" },
  { label: "More Good People", icon: "👥" },
  { label: "More Great Days", icon: "☀" },
];

export default function BirthdayModePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="panel-frame w-52 rounded-2xl p-4"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-[10px] tracking-[0.2em] text-white/80 uppercase">
          Birthday Mode
        </span>
        <span className="toggle-track relative inline-flex h-4 w-8 items-center rounded-full">
          <motion.span
            animate={{ x: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="ml-4 h-3 w-3 rounded-full bg-white shadow"
          />
        </span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {ITEMS.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 text-[11px] tracking-wide text-cyan-100/80"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan-400/10 text-xs">
              {item.icon}
            </span>
            {item.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
