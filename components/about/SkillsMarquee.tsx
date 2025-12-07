// components/about/SocialLinksTile.tsx
"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/skills";

export default function SocialLinksTile() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-full bg-gray-100 p-6 border border-gray-300 rounded-[40px] overflow-hidden">
      <motion.div
        animate={controls}
        className="flex h-full gap-6 items-center"
        style={{ width: "max-content" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-6">
            {skills.map((s) => (
              <div
                key={`${s.name}-${copy}`}
                className="rounded-full bg-white flex items-center justify-center p-3"
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* left blur */}
      <div className="w-14 h-full absolute left-0 top-0 bg-linear-to-l from-transparent to-gray-100" />
      {/* right blur */}
      <div className="w-14 h-full absolute right-0 top-0 bg-linear-to-r from-transparent to-gray-100" />
    </div>
  );
}
