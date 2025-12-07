// components/about/Slideshow.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "/images/about/me/me_loki.webp",
  "/images/about/me/me_palace.webp",
  "/images/about/me/me_palace2.webp",
  "/images/about/me/me_phoenix.webp",
];

type Direction = 1 | -1;

export default function Slideshow() {
  const [[page, direction], setPage] = useState<[number, Direction]>([0, 1]);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageCount = IMAGES.length;

  const paginate = (newDirection: Direction) => {
    setPage(([p]) => {
      const next = (p + newDirection + imageCount) % imageCount;
      return [next, newDirection];
    });
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => paginate(1), 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => paginate(1), 4000);
  };

  const variants = {
    enter: (dir: Direction) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
    },
    exit: (dir: Direction) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
    }),
  };

  const currentIndex = page % imageCount;

  return (
    <div ref={containerRef} className="relative w-full h-full select-none rounded-[40px] overflow-hidden bg-black min-h-120">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next buttons */}
      <button
        aria-label="Previous slide"
        onClick={() => {
          paginate(-1);
          resetTimer();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center shadow hover:scale-105 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        aria-label="Next slide"
        onClick={() => {
          paginate(1);
          resetTimer();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center shadow hover:scale-105 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
