"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";
import { BriefcaseBusiness, ChevronDown } from "lucide-react";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { use, useEffect, useMemo, useState } from "react";

export default function MyWorks() {
  const [visibleCount, setVisibleCount] = useState<number>(2);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mdQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (expanded) return;
      setVisibleCount(mdQuery.matches ? 4 : 2);
    };

    update();

    const handler = () => update();
    if (mdQuery.addEventListener) {
      mdQuery.addEventListener("change", handler);
    } else {
      mdQuery.addListener(handler);
    }

    return () => {
      if (mdQuery.removeEventListener) {
        mdQuery.removeEventListener("change", handler);
      } else {
        mdQuery.removeListener(handler);
      }
    };
  }, [expanded]);

  const visibleProjects = useMemo(() => {
    return expanded ? projects : projects.slice(0, visibleCount);
  }, [expanded, visibleCount]);

  return (
    <section
      id="work"
      className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex flex-col items-center gap-16"
    >
      {/* My works heading and animation */}
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
        <BriefcaseBusiness className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Works"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      {/* Projects */}
      <div className="flex flex-wrap w-full justify-between items-center gap-8 lg:gap-6">
        {visibleProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* See More/ See Less Button */}
      {projects.length > visibleCount && (
        <motion.button
          onClick={() => setExpanded((s) => !s)}
          aria-expanded={expanded}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex flex-col justify-center items-center gap-2 duration-300 font-space-mono text-lg md:text-xl text-gray-500"
        >
          <span>{expanded ? "See Less Projects" : "See More Projects"}</span>

          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-2 rounded-full bg-[#2563EB] text-white"
          >
            <ChevronDown size={32} />
          </motion.span>
        </motion.button>
      )}
    </section>
  );
}
