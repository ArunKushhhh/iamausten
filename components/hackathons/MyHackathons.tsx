"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Heading from "../ui/Heading";
import { Bug, ChevronLeft, ChevronRight } from "lucide-react";
import { hackathons } from "@/data/hackathons";
import HackathonCard from "./HackathonCard";
import Pagination from "@/components/ui/Pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyHackathons = () => {
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [canScroll, setCanScroll] = useState<boolean>(false);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "restart none none none",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

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
  }, []);

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
    <div className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex flex-col items-center gap-8">
      {/* header with animation */}
      <header
        ref={headerRef}
        className="flex flex-col gap-4 md:gap-6 items-center justify-between"
        style={{ opacity: 0 }}
      >
        <Bug className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="My Hackathons"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </header>

      {/* Horizontal scroll container */}
      <div className="relative w-full">
        {/* pages */}
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
            {hackathons.map((h) => (
              <div
                key={h.id}
                style={{ scrollSnapAlign: "center" }}
                className={`${
                  hackathons.length === 2 ? "w-1/2" : ""
                } min-w-full md:min-w-[calc(80%)] lg:min-w-[calc(45%-12px)]`}
              >
                <HackathonCard hack={h} />
              </div>
            ))}
          </div>
        </div>

        {/* Left overlay / button */}
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

      {/* Pagination controls */}
      <Pagination pages={pages} current={currentPage} onSelect={handleSelect} />
    </div>
  );
};

export default MyHackathons;
