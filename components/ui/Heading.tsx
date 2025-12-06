import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  text: string;
  textSize: string;
  textColor?: string;
  bold?: string;
  translateUpOnHover?: number;
  hoverColor?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  textSize,
  textColor = "#171717",
  translateUpOnHover = -20,
  bold = "font-bold",
  hoverColor = "#2563EB",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h1 className={`${textSize} ${bold} ${textColor} tracking-tighter`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          style={{
            color: hoveredIndex === index ? hoverColor : "inherit",
          }}
          animate={{
            y: hoveredIndex === index ? Number(`${translateUpOnHover}`) : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default Heading;
