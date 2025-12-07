"use client";

import { movies } from "@/data/movies";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

const Movies = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="w-full h-72 lg:h-full rounded-[40px] bg-black overflow-hidden flex justify-center items-center min-h-72 relative">
      <motion.div
        animate={controls}
        className="flex items-center h-full"
        style={{ width: "max-content" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-full">
            {movies.map((m) => (
              <div key={`${copy}-${m.name}`} className="relative h-full w-60">
                <Image
                  src={m.icon}
                  alt={m.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Movies;
