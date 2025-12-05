'use client';

import React from "react";
import type { FC, MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface StarBorderButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  height?: string;
  textSize?: string;
}

const glowVariants = {
  rest: {
    opacity: 0.35,
    scale: 1,
    filter: "blur(18px)",
  },
  hover: {
    opacity: 0.55,
    scale: 1.15,
    filter: "blur(25px)",
  },
};

const StarBorderButton: FC<StarBorderButtonProps> = ({
  children = "Star Border",
  onClick,
  width = "w-36",
  height = "h-12",
  textSize = "text-base",
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative ${width} ${height} px-6 py-2 rounded-full text-white ${textSize} font-medium bg-transparent overflow-hidden whitespace-nowrap flex items-center justify-center`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-2 rounded-full"
        animate={{
          background: [
            "conic-gradient(from 0deg, #8c2b2b, #cb5d14, #ec9a27, #8c2b2b)",
            "conic-gradient(from 90deg, #8c2b2b, #cb5d14, #ec9a27, #8c2b2b)",
            "conic-gradient(from 180deg, #8c2b2b, #cb5d14, #ec9a27, #8c2b2b)",
            "conic-gradient(from 270deg, #8c2b2b, #cb5d14, #ec9a27, #8c2b2b)",
            "conic-gradient(from 360deg, #8c2b2b, #cb5d14, #ec9a27, #8c2b2b)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          padding: "2px",
        }}
      />

      {/* Inner background */}
      <div className="absolute inset-px rounded-full bg-primary-700/50 hover:bg-primary-700/20 z-10" />

      {/* Glow behind the button */}
      <motion.div
        className="absolute inset-2 rounded-full pointer-events-none"
        variants={glowVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(180,80,255,0.6) 0%, rgba(80,0,140,0.2) 60%, transparent 100%)",
        }}
      />

      {/* particles */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-800 "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.3,
          }}
          style={{
            left: "50%",
            top: "50%",
            originX: "0px",
            originY: "0px",
            x: Math.cos((index * Math.PI) / 2) * 40,
            y: Math.sin((index * Math.PI) / 2) * 40,
          }}
        />
      ))}

      {/* Button text */}
      <span className="relative z-20 px-2 py-2 self-center text-center">{children}</span>
    </motion.button>
  );
};

export default StarBorderButton;


