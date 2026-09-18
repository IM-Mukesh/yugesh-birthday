"use client";

import { motion } from "framer-motion";

const TABS = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6 9.5V20h12V9.5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Memories",
    href: "#gallery",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth="1.7" />
        <circle cx="9" cy="10" r="1.6" strokeWidth="1.7" />
        <path d="M5 17l5-5 3 3 3-4 3 6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  null,
  {
    label: "Messages",
    href: "#wishes",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.7" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Wishes",
    href: "#wishes",
    icon: (
      <path
        d="M12 20s-7-4.35-9.5-8.8C.8 7.9 2.6 4.5 6 4.5c2 0 3.3 1 4.5 2.6C11.7 5.5 13 4.5 15 4.5c3.4 0 5.2 3.4 3.5 6.7C19 15.65 12 20 12 20z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
] as const;

export default function MobileNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-2xl px-2 py-2 panel-frame md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      {TABS.map((tab, i) =>
        tab === null ? (
          <a
            key="brand"
            href="#home"
            className="font-display -mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 text-base text-white shadow-[0_0_20px_rgba(77,200,255,0.5)]"
          >
            Y
          </a>
        ) : (
          <a
            key={tab.label}
            href={tab.href}
            className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-[9px] tracking-wide text-white/50 ${
              i === 0 ? "text-cyan-300" : ""
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              {tab.icon}
            </svg>
            {tab.label}
          </a>
        )
      )}
    </motion.nav>
  );
}
