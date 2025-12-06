"use client";
import React from "react";
import Image from "next/image";
import { Project } from "@/data/project";
import {
  Github,
  Radio,
  Zap,
  Cloud,
  Lock,
  Video,
  MessageCircleMore,
} from "lucide-react";
import Badge from "../ui/Badge";
import Link from "next/link";

type Props = {
  project: Project;
};

const iconMap: Record<string, React.ElementType> = {
  Zap: Zap,
  Cloud: Cloud,
  Lock: Lock,
  Video: Video,
  Message: MessageCircleMore,
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group w-full md:w-[calc(50%-24px)] rounded-[40px] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.2)] bg-white hover:bg-[#2563EB] duration-300 ease-in-out hover:scale-105">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          {/* title */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group group-hover:text-white">
            {project.title}
          </h3>

          {/* live and repo link */}
          <div className="flex gap-2 items-center">
            {/* live url */}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                aria-label="Open Live Demo"
                className=" text-[#2563EB] group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 border border-gray-300 px-2 py-2 rounded-md"
              >
                <Radio size={18} />
              </Link>
            )}

            {/* github repo url */}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                aria-label="Open Github Repository"
                className="px-2 py-2 rounded-md text-green-600 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 border border-gray-300"
              >
                <Github size={18} />
              </Link>
            )}
          </div>
        </div>

        {/* project type badge */}
        {project.type ? (
          <div className="text-sm mt-2">
            <Badge
              text={project.type}
              bgColor="bg-[#2563EB]/30"
              textColor="text-[#2563EB]"
            />
          </div>
        ) : null}

        {/* project description */}
        <p className="mt-2 text-base md:text-lg text-muted-foreground group-hover:text-white">
          {project.summary}
        </p>

        {/* features */}
        {project.features?.length ? (
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="list"
            aria-label={`${project.title} features`}
          >
            {project.features.map((f) => {
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

      {/* project image */}
      <div className="relative w-full h-72 md:h-96">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-r from-slate-100 to-slate-50" />
        )}
      </div>
    </article>
  );
}
