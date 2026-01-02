"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "../animate-ui/icons/menu";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileUser,
  Github,
  House,
  Linkedin,
  Mail,
  Twitter,
  User,
} from "lucide-react";

const navItems = [
  { href: "#home", Icon: House, label: "Home" },
  { href: "#myworks", Icon: BriefcaseBusiness, label: "Work" },
  { href: "#about", Icon: User, label: "About" },
  {
    href: "https://drive.google.com/drive/folders/16df5F8WmEsYC_LkMBRP05OsCWLWjahbW?usp=drive_link",
    Icon: FileUser,
    label: "Resume",
  },
];

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-2 w-full left-0 top-0 backdrop-blur bg-white/20 px-6 py-4 sm:px-18 lg:px-36">
      {/* Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-70">
          <Link
            href="/"
            className={`font-extrabold text-lg bg-[#171717] text-white rounded-full p-2 h-14 w-14 flex justify-center items-center hover:scale-120 duration-300 ease-out`}
          >
            {" "}
            AK.{" "}
          </Link>
        </div>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex gap-4 items-center px-4 py-3 hover:scale-120 bg-[#171717] rounded-full duration-300 ease-out">
          {navItems.map(({ href, Icon, label }) => (
            <Link
              key={href + label}
              href={href}
              aria-label={label}
              className="group flex items-center rounded-full transition-all duration-300"
            >
              <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-transparent group-hover:bg-white transition-all duration-300">
                <Icon
                  size={18}
                  className="text-white group-hover:text-[#171717] transition-colors duration-200"
                />
                <span className="hidden group-hover:inline-block text-xs font-medium text-[#171717]">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded p-2"
          >
            <Menu color={open === true ? "white" : "#171717"} animate={open} />
          </button>
        </div>

        {/* Social links (desktop) */}
        <div className="hidden lg:flex items-center gap-6 bg-white px-4 py-2 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-120 duration-300 ease-out self-end">
          {socialLinks.map(({ href, Icon, label, bgColor }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`group flex items-center rounded-full transition-all duration-300`}
            >
              <div
                className="flex justify-center items-center rounded-full px-3 py-3 transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {/* Icon default dark; on hover it flips to light */}
                <Icon
                  size={18}
                  className="text-[#171717] group-hover:text-white transition-colors duration-300"
                />
                {/* <span
                  className={`hidden group-hover:inline-block text-xs font-medium text-white`}
                >
                  {label}
                </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          animate={{ y: ["-100%", "0"], opacity: [0, 1] }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="md:hidden absolute left-0 w-full top-0 bg-[#171717] text-white text-2xl flex flex-col items-center gap-8 py-10 pt-16 rounded-b-4xl -z-1 font-bold"
        >
          <div className="flex flex-col gap-8 items-center">
            {navItems.map(({ href, label }) => (
              <Link
                key={href + label}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center justify-center">
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
        </motion.div>
      )}
    </nav>
  );
}
