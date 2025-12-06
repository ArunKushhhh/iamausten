// components/hackathons/HackathonCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Hackathon } from "@/data/hackathons";
import {
  Award,
  CircleArrowRight,
  CircleDollarSign,
  ExternalLink,
  Github,
  Trophy,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Badge from "../ui/Badge";

type Props = {
  hack: Hackathon;
};

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  CircleDollarSign,
  Award
};

export default function HackathonCard({ hack }: Props) {
  return (
      <article className=" bg-white rounded-[40px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
        {/* hack image */}
        <div className="relative w-full h-72 bg-slate-100 rounded-t-[40px] overflow-hidden">
          {hack.image ? (
            <Image
              src={hack.image}
              alt={hack.name}
              fill
              className=" hover:scale-120 object-cover duration-300"
            />
          ) : (
            <div className="w-full h-full bg-slate-200" />
          )}
        </div>

        {/* hack info */}
        <div className="flex flex-col items-start justify-center gap-6 p-4">
          {/* hack name, prizes, date */}
          <div className="w-full flex items-start justify-between">
            {/* hack name and prizes */}
            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {hack.name}
              </h3>
              {/* prize and position */}
              {hack.prize?.length ? (
                <div
                  className="flex flex-col md:flex-row items-start gap-2 text-sm"
                  role="list"
                  aria-label={`${hack.prize} prize`}
                >
                  {hack.prize.map((f) => {
                    const Icon = f.icon ? iconMap[f.icon] : undefined;
                    return (
                      <Badge
                        key={f.name}
                        text={f.name}
                        Icon={Icon}
                        bgColor={f.bgColor}
                        textColor={f.textColor}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* hack date */}
            <div className="text-xs whitespace-nowrap md:text-sm">
              <Badge
                text={hack.date}
                bgColor="bg-[#2563EB]/30"
                textColor="text-[#2563EB]"
              />
            </div>
          </div>

          {/* hack summary */}
          <p className="mt-2 text-base md:text-lg text-muted-foreground group-hover:text-white">
            {hack.summary}
          </p>

          {/* view project btn */}
          <Link
            href={hack.projectUrl}
            className="relative w-full group flex items-center justify-center gap-4 px-6 py-3 text-[#171717] bg-white hover:text-white rounded-full text-xl font-semibold overflow-hidden duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute bg-[#2563EB] top-0 left-0 h-full w-0 group-hover:w-full group-hover:rounded-full duration-500 ease-out" />
            <p className="z-0">View Project</p>
            <CircleArrowRight className="z-0 group-hover:-rotate-45 duration-300" />
          </Link>
        </div>
      </article>
  );
}
