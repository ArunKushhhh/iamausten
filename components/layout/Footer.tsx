"use client";

import React from "react";
import Heading from "../ui/Heading";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="w-full min-h-screen bg-[#2563EB] text-white fixed bottom-0 px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex items-end justify-between">
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

          {/* social links */}
          <div className="flex gap-6 items-center justify-start">
            {socialLinks.map(({ href, Icon, label }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className="bg-white p-3 rounded-full flex justify-center items-center hover:scale-120 duration-300"
              >
                <Icon size={18} className="text-[#171717]" />
              </Link>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="opacity-25 hidden md:flex">
          <Image src={"/images/logo.svg"} alt="logo" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
