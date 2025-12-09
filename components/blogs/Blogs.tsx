"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "../ui/Heading";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowRight,
  ExternalLink,
  PencilLine,
} from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";
import Link from "next/link";
import Pagination from "../ui/Pagination";

const Blogs = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [canScroll, setCanScroll] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const scrollW = el.scrollWidth;
      const clientW = el.clientWidth || 1;
      const pagesCount = Math.max(1, Math.ceil(scrollW / clientW));
      setPages(pagesCount);
      setCanScroll(scrollW > clientW + 10);
      setCurrentPage((p) => Math.min(p, Math.max(0, pagesCount - 1)));
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);

    if (innerRef.current) ro.observe(innerRef.current);

    return () => ro.disconnect();
  }, [blogs.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
        const pageWidth = el.clientWidth || 1;
        const pageIndex = Math.round(scrollLeft / pageWidth);
        setCurrentPage(pageIndex);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToPage = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth || 1;
    const left = index * pageWidth;
    el.scrollTo({ left, behavior: "smooth" });
    setCurrentPage(index);
  };

  const handlePrev = () => scrollToPage(Math.max(0, currentPage - 1));
  const handleNext = () => scrollToPage(Math.min(pages - 1, currentPage + 1));
  const handleSelect = (i: number) => scrollToPage(i);

  const showLeft = canScroll && currentPage > 0;
  const showRight = canScroll && currentPage < pages - 1;
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
        <PencilLine className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Blogs"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      <div className="w-full relative">
        {/* blogs */}
        <div
          ref={containerRef}
          className="relative overflow-x-auto no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            ref={innerRef}
            className="flex gap-8 py-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {blogs.map((b) => (
              <div
                key={b.id}
                style={{ scrollSnapAlign: "center" }}
                className={`${
                  blogs.length === 2 ? "w-1/2" : ""
                } min-w-full md:min-w-[calc(80%)] lg:min-w-[calc(45%-12px)]`}
              >
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
        </div>

        {showLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-transparent md:bg-linear-to-l from-transparent to-white flex items-center pointer-events-none">
            <div className="pointer-events-auto md:ml-4">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2563EB]/50 md:bg-[#2563EB] text-white cursor-pointer"
              >
                <ChevronLeft />
              </button>
            </div>
          </div>
        )}

        {/* Right overlay / button */}
        {showRight && (
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-transparent md:bg-linear-to-r from-transparent to-white flex items-center justify-end pointer-events-none">
            <div className="pointer-events-auto md:mr-4">
              <button
                onClick={handleNext}
                aria-label="Next"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2563EB]/50 md:bg-[#2563EB]  text-white cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* pagination */}
      <Pagination
        pages={pages}
        current={currentPage}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={handleSelect}
      />

      {/* link to medium profile */}
      <Link
        href={"https://medium.com/@arunsarojkushwaha10"}
        className="relative w-full md:w-auto group flex items-center justify-center gap-4 px-8 py-3 text-[#171717] bg-white hover:text-white rounded-full text-base md:text-xl font-semibold overflow-hidden duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
      >
        <div className="absolute bg-[#2563EB] top-0 left-0 h-full w-0 group-hover:w-full group-hover:rounded-full duration-500 ease-out" />
        <p className="z-0">Visit Profile on Medium</p>
        <ExternalLink className="z-0" />
      </Link>
    </div>
  );
};

export default Blogs;
