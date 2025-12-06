"use client";

import React from "react";
import clsx from "clsx";

type Props = {
  pages: number;
  current: number;
  onPrev?: () => void;
  onNext?: () => void;
  onSelect?: (index: number) => void;
};

export default function Pagination({
  pages,
  current,
  onPrev,
  onNext,
  onSelect,
}: Props) {
  if (pages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => onSelect?.(i)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                i === current ? "bg-[#2563EB] w-3 h-3" : "bg-white"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
