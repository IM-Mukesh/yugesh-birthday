"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoFrame({
  src,
  label,
  className = "",
  rotate = 0,
  delay = 0,
  priority = false,
}: {
  src: string;
  label: string;
  className?: string;
  rotate?: number;
  delay?: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate * 2 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
      className={`photo-frame animate-float absolute w-28 rounded-xl p-1.5 sm:w-32 lg:w-36 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={label}
          fill
          sizes="160px"
          className="object-cover"
          priority={priority}
        />
        <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(77,234,255,0.9)]" />
      </div>
      <p className="font-display mt-1.5 truncate px-0.5 pb-0.5 text-center text-[9px] tracking-[0.12em] text-cyan-200/80 uppercase">
        {label}
      </p>
    </motion.div>
  );
}
