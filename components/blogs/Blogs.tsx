"use client"

import React from "react";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { CircleArrowRight, ExternalLink, PencilLine } from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";
import Link from "next/link";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex flex-col items-center gap-16">
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
        <PencilLine  className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Blogs"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      {/* blogs */}
      <div className="w-full flex flex-col lg:flex-row gap-8 justify-between items-start">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* link to medium profile */}
      <Link
          href={"https://medium.com/@arunsarojkushwaha10"}
          className="relative w-full md:w-auto group flex items-center justify-center gap-4 px-8 py-3 text-[#171717] bg-white hover:text-white rounded-full text-xl font-semibold overflow-hidden duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute bg-[#2563EB] top-0 left-0 h-full w-0 group-hover:w-full group-hover:rounded-full duration-500 ease-out" />
          <p className="z-0">Visit Profile on Medium</p>
          <ExternalLink  className="z-0" />
        </Link>
    </div>
  );
};

export default Blogs;
