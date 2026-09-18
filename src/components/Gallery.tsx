"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "people" | "travel" | "family" | "good-times";

type Photo = {
  src: string;
  fit: "cover" | "contain";
  number: string;
  title: string;
  caption: string;
  tags: Tag[];
  icon: "heart" | "people" | "pin" | "chart";
};

const PHOTOS: Photo[] = [
  {
    src: "/photos/photo-1.jpg",
    fit: "cover",
    number: "01",
    title: "Core Memory",
    caption: "Some moments just stay forever.",
    tags: ["people", "good-times"],
    icon: "heart",
  },
  {
    src: "/photos/photo-2.jpg",
    fit: "cover",
    number: "02",
    title: "Good Times",
    caption: "Better people, brighter days.",
    tags: ["people", "family"],
    icon: "people",
  },
  {
    src: "/photos/hero-portrait-band.png",
    fit: "cover",
    number: "03",
    title: "Stronger Today",
    caption: "Same person. Bigger dreams.",
    tags: ["people"],
    icon: "chart",
  },
  {
    src: "/photos/photo-4.jpg",
    fit: "cover",
    number: "04",
    title: "Squad Energy",
    caption: "Good people make great days.",
    tags: ["family", "good-times"],
    icon: "people",
  },
  {
    src: "/photos/photo-5.jpg",
    fit: "cover",
    number: "05",
    title: "Always Together",
    caption: "Family first, always.",
    tags: ["family"],
    icon: "heart",
  },
  {
    src: "/photos/photo-3.jpg",
    fit: "cover",
    number: "06",
    title: "Vibe Check",
    caption: "Passport ready, heart open.",
    tags: ["travel", "good-times"],
    icon: "pin",
  },
  {
    src: "/photos/poster-retro.png",
    fit: "contain",
    number: "07",
    title: "Legend Edition",
    caption: "Same soul, retro glow.",
    tags: ["good-times"],
    icon: "chart",
  },
];

const FILTERS: { label: string; value: "all" | Tag; icon: "grid" | "people" | "pin" | "heart" | "star" }[] = [
  { label: "All", value: "all", icon: "grid" },
  { label: "People", value: "people", icon: "people" },
  { label: "Travel", value: "travel", icon: "pin" },
  { label: "Family", value: "family", icon: "heart" },
  { label: "Good Times", value: "good-times", icon: "star" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" strokeWidth="1.6" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" strokeWidth="1.6" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="8" r="2.4" strokeWidth="1.6" />
        <path d="M15.5 14.2c2.8.4 4.5 2.7 4.5 5.8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="2.3" strokeWidth="1.6" />
      </>
    ),
    heart: (
      <path
        d="M12 20s-7-4.35-9.5-8.8C.8 7.9 2.6 4.5 6 4.5c2 0 3.3 1 4.5 2.6C11.7 5.5 13 4.5 15 4.5c3.4 0 5.2 3.4 3.5 6.7C19 15.65 12 20 12 20z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    star: (
      <path
        d="M12 3.5l2.6 5.4 5.9.7-4.4 4.1 1.2 5.9L12 16.7l-5.3 2.9 1.2-5.9-4.4-4.1 5.9-.7L12 3.5z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
    chart: (
      <path d="M4 18l5-5 4 3 7-8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      {paths[name]}
    </svg>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | Tag>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = PHOTOS.filter((p) => filter === "all" || p.tags.includes(filter));

  const scrollToCard = (i: number) => {
    const card = cardRefs.current[i];
    const track = trackRef.current;
    if (!card || !track) return;
    const offset =
      card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  const selectFilter = (value: "all" | Tag) => {
    setFilter(value);
    setActiveIndex(0);
    const track = trackRef.current;
    if (track) track.scrollTo({ left: 0, behavior: "auto" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let min = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(cardCenter - center);
          if (dist < min) {
            min = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [filtered.length]);

  return (
    <section id="gallery" className="relative z-10 overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      {/* script accents - desktop only */}
      <p className="font-script animate-drift pointer-events-none absolute top-10 left-6 hidden text-2xl text-amber-200/80 lg:block">
        Same Person
        <br />
        Bigger Dreams ♡
      </p>
      <p className="font-script animate-drift pointer-events-none absolute top-10 right-6 hidden text-2xl text-white/80 lg:block">
        Good People
        <br />
        Brighter Days ♡
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mb-8 max-w-2xl text-center"
      >
        <span className="text-xs tracking-[0.35em] text-pink-300 uppercase">
          ✦ Archive Unlocked ✦
        </span>
        <h2 className="font-display text-gradient-neon glow-text mt-3 text-3xl font-bold sm:text-5xl">
          Memory Bank
        </h2>
        <p className="mt-3 text-sm font-light text-white/60 sm:text-base">
          {PHOTOS.length} snapshots, a lifetime of stories.
        </p>
      </motion.div>

      {/* filter pills */}
      <div className="no-scrollbar mb-10 flex snap-x gap-2 overflow-x-auto px-4 sm:mb-14 sm:justify-center sm:px-0">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => selectFilter(f.value)}
            className={`flex shrink-0 snap-start items-center gap-1.5 rounded-full border px-3.5 py-2 text-[10px] tracking-[0.1em] whitespace-nowrap uppercase transition-colors sm:text-xs ${
              filter === f.value
                ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-100"
                : "border-white/15 bg-white/5 text-white/60"
            }`}
          >
            <Icon name={f.icon} className="h-3.5 w-3.5" />
            {f.label}
          </button>
        ))}
      </div>

      {/* carousel */}
      <div className="relative mx-auto max-w-6xl">
        <button
          aria-label="Previous"
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          className="panel-frame absolute top-1/2 left-0 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 hover:text-white lg:left-24 lg:flex xl:left-32"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollToCard(Math.min(filtered.length - 1, activeIndex + 1))}
          className="panel-frame absolute top-1/2 right-0 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 hover:text-white lg:flex"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[8vw] py-6 sm:px-[15vw] lg:pr-16 lg:pl-32 xl:pl-40"
        >
          {filtered.map((photo, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={photo.src + photo.number}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="flex shrink-0 snap-center flex-col"
              >
                <motion.button
                  onClick={() =>
                    isActive
                      ? setLightbox(PHOTOS.indexOf(photo))
                      : scrollToCard(i)
                  }
                  animate={{
                    scale: isActive ? 1 : 0.88,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`glass-panel relative w-[68vw] overflow-hidden rounded-2xl p-2 text-left sm:w-64 ${
                    isActive ? "glow-border" : "border border-white/10"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 0 1px rgba(120,210,255,0.3), 0 0 40px rgba(80,190,255,0.35), 0 20px 40px rgba(0,0,0,0.6)"
                      : undefined,
                  }}
                >
                  {isActive && (
                    <span className="absolute top-3 right-3 z-10 text-lg">👑</span>
                  )}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-black/40">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 68vw, 256px"
                      className={photo.fit === "contain" ? "object-contain" : "object-cover"}
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-2 px-1 pb-1">
                    <div>
                      <p className="font-display text-2xl leading-none font-bold text-white/90">
                        {photo.number}
                      </p>
                      <p className="font-display mt-1 text-sm text-white">{photo.title}</p>
                      <p className="mt-1 text-[11px] text-white/50">{photo.caption}</p>
                    </div>
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                      <Icon name={photo.icon} className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {filtered.map((photo, i) => (
            <button
              key={photo.src + photo.number}
              aria-label={`Go to ${photo.title}`}
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-gradient-to-r from-cyan-400 to-purple-400" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* bottom info cards */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="panel-frame flex items-center gap-3 rounded-2xl px-4 py-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
            ✨
          </span>
          <div className="leading-tight">
            <p className="font-display text-xs tracking-wide text-white">A Brighter Chapter</p>
            <p className="mt-0.5 text-[11px] text-white/50">
              Thank you for being part of this journey.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="panel-frame flex items-center gap-3 rounded-2xl px-4 py-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-400/10 text-purple-200">
            📅
          </span>
          <div className="leading-tight">
            <p className="font-display text-xs tracking-wide text-white">Another Year</p>
            <p className="mt-0.5 text-[11px] text-white/50">Bigger things ahead.</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0 text-white/40">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glow-border relative max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl"
          >
            <Image
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].title}
              width={1000}
              height={1250}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
