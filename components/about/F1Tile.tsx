"use client";

import Image from "next/image";

export default function F1Tile() {
  return (
    <div className="relative w-full min-h-80 lg:h-full rounded-[40px] overflow-hidden bg-black">
        <Image src="/images/about/f1/JmFRw7DlnVG2gqkb0dIr0YSBI.png" alt="F1" fill className="object-cover" />
    </div>
  );
}
