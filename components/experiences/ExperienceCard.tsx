// components/experiences/ExperienceCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Experience } from "@/data/experience";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { company, role, start, end, logo, bullets, skills, location } =
    experience;

  const period = end ? `${start} — ${end}` : `${start} — Present`;

  return (
    <article className="w-full rounded-[40px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] overflow-hidden p-4 md:p-6">
      <details className="group flex flex-col gap-6">
        {/* summary */}
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-start md:flex-row md:items-center justify-between gap-4 cursor-pointer list-none outline-none"
          aria-label={`${role} at ${company}`}
        >
          {/* Left: role/company and location */}
          <div className="flex flex-col gap-0">
            <div className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#2563EB] duration-300">
              {role}
            </div>
            <div className="text-base md:text-lg text-muted-foreground">
              {location ? ` — ${location}` : ""}
            </div>
          </div>

          {/* company logo */}
          {logo ? (
            <div className="relative flex-none flex items-center justify-center">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={100}
                height={52}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
          ) : null}

          {/* Right: period & highlight */}
          <div className="flex items-center gap-1 text-right text-sm md:text-base text-muted-foreground">
            <div>{period}</div>
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              className="origin-center group-open:rotate-180 transition-transform duration-300"
            >
              <ChevronDown />
            </motion.div>
          </div>
        </summary>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-8 border-l-4 border-[#2563EB]/60 rounded-lg py-4">
                {/* tech stack learned */}
                {skills?.length ? (
                  <div className="mb-6 flex flex-wrap gap-2 text-xs">
                    {skills.map((s) => (
                      <div
                        key={s}
                        className="inline-flex items-center gap-2 px-3 py-2 border rounded-full whitespace-nowrap duration-300 bg-slate-100 text-slate-700"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* key points */}
                <ul className="space-y-2 list-disc list-inside text-base text-gray-600">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </details>
    </article>
  );
}
