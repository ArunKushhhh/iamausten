"use client";

import { motion } from "framer-motion";
import DigitalClock from "./DigitalClock";
import Link from "next/link";
import { SendHorizontal } from "../animate-ui/icons/send-horizontal";
import Heading from "../ui/Heading";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full px-6 pb-32 ld:pb-16 sm:px-18 lg:px-36 flex flex-col justify-end items-start h-[calc(100vh-44px)] lg:h-screen">
      {/* open to oppor */}
      <div className="flex gap-2 items-center border pr-4 rounded-full py-2 px-2 border-[#171717] text-[#171717]">
        <div className="relative bg-[#29903B]/20 px-2 py-2 rounded-full">
          <motion.div
            className="absolute inset-0 rounded-full bg-[#29903B]/40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Static center dot */}
          <div className="h-2 w-2 rounded-full bg-[#29903B] relative" />
        </div>
        <p className="font-space-mono">Open to Opportunities</p>
      </div>

      {/* heading and desc */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-end mt-4">
        {/* heading */}
        <div className="w-full lg:w-4/5 lg:mt-6">
          <Heading
            text="Hello,"
            textSize="text-7xl md:text-9xl"
            textColor="text-[#171717]"
            hoverColor="#2563EB"
          />
          <Heading
            text="I'm Arun"
            textSize="text-7xl md:text-9xl"
            textColor="text-[#171717]"
            hoverColor="#2563EB"
          />
        </div>
        {/* desc and time */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-2 mt-4 lg:mb-2 font-space-mono tracking-tighter text-base lg:text-lg text-gray-500 border-l-2 border-gray-400 pl-4">
          <div>
            <p>A self taught Web and React Native Developer,</p>
            <p className="hidden md:flex">
              currently busy making Apna Mart look good.
            </p>
          </div>
          <div>
            <DigitalClock />
          </div>
        </div>
      </div>

      {/* let's connect btn */}
      <Link
        href={"mailto:austen.dezigns.dev@gmail.com"}
        className="relative group flex items-center gap-4 px-6 py-3 text-white bg-[#171717] rounded-full text-xl font-semibold font-space-mono tracking-tighter overflow-hidden mt-6"
      >
        <div className="absolute bg-[#2563EB] top-0 left-0 h-full w-0 group-hover:w-full group-hover:rounded-full duration-500 ease-out" />
        <p className="z-0">Let's Connect</p>
        <SendHorizontal className={`z-0`} animateOnHover size={20} />
      </Link>

      {/* explore my work */}
      <Link href={""} className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center gap-2 font-space-mono text-lg md:text-xl text-gray-500"
        >
          <div>Explore My Work</div>
          <div className="p-2 bg-[#2563EB] rounded-full">
            <ChevronDown color="white" size={32} />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Hero;
