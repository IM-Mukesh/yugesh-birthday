"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6 9.5V20h12V9.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Memories",
    href: "#gallery",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth="1.6" />
        <circle cx="9" cy="10" r="1.6" strokeWidth="1.6" />
        <path d="M5 17l5-5 3 3 3-4 3 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Messages",
    href: "#wishes",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Timeline",
    href: "#gallery",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h10" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="4" cy="6" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="4" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="4" cy="18" r="1.4" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Gallery",
    href: "#gallery",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
      </>
    ),
  },
  {
    label: "Wishes",
    href: "#wishes",
    icon: (
      <path
        d="M12 20s-7-4.35-9.5-8.8C.8 7.9 2.6 4.5 6 4.5c2 0 3.3 1 4.5 2.6C11.7 5.5 13 4.5 15 4.5c3.4 0 5.2 3.4 3.5 6.7C19 15.65 12 20 12 20z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Sidebar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-2xl p-2 panel-frame md:flex xl:left-8"
    >
      {NAV_ITEMS.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs tracking-wide text-white/60 transition-colors hover:bg-white/5 hover:text-cyan-200 ${
            i === 0 ? "bg-gradient-to-r from-cyan-500/25 to-purple-500/10 text-cyan-200" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-4.5 w-4.5 shrink-0"
          >
            {item.icon}
          </svg>
          <span className="hidden font-medium xl:inline">{item.label}</span>
        </a>
      ))}
    </motion.nav>
  );
}
