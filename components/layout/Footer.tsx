"use client";

import React, { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Cursor from "../ui/Cursor";

type Props = {};
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/",
    Icon: Linkedin,
    label: "LinkedIn",
    bgColor: "#2563EB",
  },
  {
    href: "https://github.com/ArunKushhhh",
    Icon: Github,
    label: "Github",
    bgColor: "#29903B",
  },
  {
    href: "https://x.com/austen_dev",
    Icon: Twitter,
    label: "Twitter",
    bgColor: "#171717",
  },
  {
    href: "mailto:austen.dezigns.dev@gmail.com",
    Icon: Mail,
    label: "Mail",
    bgColor: "#DA4034",
  },
];
const Footer = (props: Props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <Link href={"https://drive.google.com/file/d/1P_dij4oxqclU5uwDAHWwC-1lpd1XZlDO/view"} className="w-full min-h-screen bg-[#2563EB] text-white fixed bottom-0 px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex items-end justify-between">
      <div className="relative w-full flex justify-between items-center">
        {/* left */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* let's connect */}
          <div className="leading-none tracking-tighter text-7xl md:text-9xl">
            <Heading
              text="Let's"
              textSize="text-7xl sm:text-9xl"
              textColor="text-white"
              hoverColor="#171717"
              bold="font-extrabold"
            />
            <Heading
              text="Connect"
              textSize="text-7xl sm:text-9xl"
              textColor="text-white"
              hoverColor="#171717"
              bold="font-extrabold"
            />
          </div>

          {/* email */}
          <div className="text-xl md:text-4xl font-semibold opacity-50">
            austen.dezigns.dev@gmail.com
          </div>

          <div className="capitalize text-sm lg:hidden">
            Click anywhere to download my Resume!
          </div>
        </div>

        {/* right */}
        <div className="opacity-25 hidden md:flex">
          <Image src={"/images/logo.svg"} alt="logo" width={350} height={350} />
        </div>
      </div>

      <Cursor x={mousePosition.x} y={mousePosition.y} />
    </Link>
  );
};

export default Footer;
