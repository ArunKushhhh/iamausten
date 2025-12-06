"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";
import { BriefcaseBusiness } from "lucide-react";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";

export default function MyWorks() {
  return (
    <section
      id="work"
      className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 lg:pt-40 flex flex-col items-center gap-16"
    >
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
          text="My Work"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      <div className="flex flex-wrap w-full justify-between items-center gap-6">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
