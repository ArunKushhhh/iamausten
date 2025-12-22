// components/experiences/ExperiencesSection.tsx
"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { experiences, Experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import Heading from "@/components/ui/Heading";
import { Sprout } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const types = ["All", "Internship", "Freelance", "Full-time"] as const;

export default function Experiences() {
  const headerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<(typeof types)[number]>("All");

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "restart none none none",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

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
      <header
        ref={headerRef}
        className="flex flex-col gap-4 md:gap-6 items-center justify-between"
        style={{ opacity: 0 }}
      >
        <Sprout className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Experiences"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </header>

      <div className="w-full flex flex-col space-y-8">
        {filtered.map((exp: Experience) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
