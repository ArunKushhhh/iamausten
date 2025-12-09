"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { ScanFace } from "lucide-react";
import Slideshow from "./Slideshow";
import ContactForm from "./ContactForm";
import SpotifyTile from "./SpotifyTile";
import F1Tile from "./F1Tile";
import Movies from "./Movies";
import SkillsMarquee from "./SkillsMarquee";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section id="about" className="w-full mx-auto px-6 sm:px-18 lg:px-36 pt-32 pb-16 lg:pt-40 flex flex-col items-center gap-16">
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
        <ScanFace className="size-12 md:size-16" color="#2563EB" />
        <Heading
          text="About Me"
          textSize="text-5xl md:text-6xl"
          translateUpOnHover={-12}
          bold="font-extrabold"
        />
      </motion.header>

      {/* responsive bento grid */}
      <div className="w-full h-auto lg:h-[90vh] flex flex-col lg:flex-row gap-6">
        {/* --- LEFT COLUMN (33%) --- */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          {/* Slideshow: Fixed Height as requested */}
          <div className="h-full">
            <Slideshow />
          </div>
          {/* Spotify: Fits content height */}
          <div className="w-full">
            <SpotifyTile />
          </div>
        </div>

        {/* --- RIGHT SECTION (66%) --- */}
        <div className="w-full h-full lg:w-[60%] flex flex-col gap-6">
          {/* top */}
            <ContactForm />
          {/* bottom */}
          <div className="w-full h-full flex gap-6 flex-col lg:flex-row">
            {/* left */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
              <SkillsMarquee />
              <Movies />
            </div>
            {/* right */}
            <div className="w-full lg:w-1/2 h-full">
              <F1Tile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
