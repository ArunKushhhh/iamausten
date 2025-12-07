"use client";

import React from "react";
import Image from "next/image";
import { Blog } from "@/data/blogs";
import { ArrowLeft, ArrowRight, ArrowUpRight, Squirrel } from "lucide-react";
import Badge from "../ui/Badge";
import Alert from "../ui/Alert";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div
      className={`w-full ${blog.bgColor} rounded-[40px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] overflow-hidden duration-300`}
    >
      <div className="p-6 flex flex-col items-start gap-4 lg:gap-6">
        {/* alert message */}
        {blog.alert ? (
          <Alert text={blog.alert} textColor={blog.textColor} />
        ) : null}

        {/* blog title */}
        <div className="flex flex-col gap-2 items-start">
          <h3
            className={`text-xl md:text-2xl ${blog.textColor} font-semibold duration-300`}
          >
            {blog.title}
          </h3>

          {/* blog summary */}
          <p className={`text-base md:text-lg ${blog.textColor}/80`}>
            {blog.summary}
          </p>
        </div>

        {/* tags and date-written */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-1">
          <div className="flex flex-wrap gap-2 pt-2">
            {blog.tags?.map((tag) => (
              <Badge
                key={tag}
                text={tag}
                bgColor="bg-white/40"
                textColor={blog.textColor}
                className="text-sm border-none"
              />
            ))}
          </div>

          <p
            className={`text-xs font-medium ${blog.textColor} flex gap-2 items-center`}
          >
            <Squirrel />
            {blog.date}
          </p>
        </div>

        {/* read on medium button */}
        <Link
          href={blog.mediumUrl}
          className={`text-white w-full md:w-auto text-lg flex gap-2 justify-center items-center px-4 py-2 bg-black rounded-md hover:-translate-y-1 duration-300`}
        >
          Read Full Blog
          <ArrowRight />
        </Link>

        <Link
          href={blog.mediumUrl}
          className="relative w-full h-48 lg:h-72 rounded-xl hover:-translate-y-1 duration-300 overflow-hidden"
        >
          <Image
            src={blog.cover}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 duration-300"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
}
