"use client";
import React from "react";
import Image from "next/image";
import { Project } from "@/data/project";
import { ExternalLink, GitBranch, Github, Radio } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group w-full md:w-[calc(50%-24px)] rounded-[40px] overflow-hidden shadow-[0_0_12px_6px_rgba(0,0,0,0.15)] bg-white">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            {project.title}
          </h3>
          <div className="flex gap-2 text-white text-sm font-semibold">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                className=" text-[#2563EB] bg-white border border-gray-300 px-2 py-2 rounded-md hover:shadow-[0_0_4px_rgba(0,0,0,0.2)]"
              >
                <Radio size={18} />
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                className=" bg-white px-2 py-2 rounded-md text-green-600 border border-gray-300 hover:shadow-[0_0_4px_rgba(0,0,0,0.2)]"
              >
                <Github size={18} />
              </Link>
            )}
          </div>
        </div>

        <p className="mt-2 text-base md:text-lg text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
      <div className="relative w-full h-64 md:h-96">
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
