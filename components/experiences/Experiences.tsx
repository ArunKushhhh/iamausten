// components/experiences/ExperiencesSection.tsx
"use client";

import React, { useMemo, useState } from "react";
import { experiences, Experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import Heading from "@/components/ui/Heading";
import { Sprout } from "lucide-react";
import { motion } from "framer-motion";

const types = ["All", "Internship", "Freelance", "Full-time"] as const;

export default function Experiences() {
  const [filter, setFilter] = useState<(typeof types)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return experiences;
    return experiences.filter((e) => e.type === filter);
  }, [filter]);

  return (
    <section
      id="experience"
      className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex flex-col items-center gap-16"
    >
      {/* header with animation */}
      <motion.header
        animate={{ y: [60, 0], opacity: [0, 1] }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          duration: 3,
        }}
        className="flex flex-col gap-4 md:gap-6 items-center justify-between"
      >
        <Sprout  className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Experiences"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      <div className="w-full">
        {filtered.map((exp: Experience) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
