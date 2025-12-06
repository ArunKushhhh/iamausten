// components/experiences/ExperienceCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Experience } from "@/data/experience";
import clsx from "clsx";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const {
    company,
    role,
    start,
    end,
    logo,
    bullets,
    skills,
    location,
    highlight,
  } = experience;

  const period = end ? `${start} — ${end}` : `${start} — Present`;

  return (
    <article className="w-full">
      <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <summary
          className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none outline-none"
          aria-label={`${role} at ${company}`}
        >
          {/* Left: logo + role/company */}
          <div className="flex items-center gap-4">
            {logo ? (
              <div className="flex-none w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex-none w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-700">
                {company
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
            )}

            <div>
              <div className="text-base md:text-lg font-semibold text-gray-800">
                {role}
              </div>
              <div className="text-sm text-gray-500">
                {company}
                {location ? ` — ${location}` : ""}
              </div>
            </div>
          </div>

          {/* Right: period & highlight */}
          <div className="shrink-0 text-right">
            {highlight && (
              <div className="text-sm text-slate-600 mb-1 hidden md:block">
                {highlight}
              </div>
            )}
            <div className="text-xs text-gray-500">{period}</div>
          </div>
        </summary>

        {/* Expanded content */}
        <div className="px-6 pb-6">
          <ul className="mt-2 space-y-2 list-disc list-inside text-sm text-gray-700">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {skills?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </details>
    </article>
  );
}
