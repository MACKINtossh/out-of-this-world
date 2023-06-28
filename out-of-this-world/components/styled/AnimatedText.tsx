"use client";

import { motion } from "framer-motion";
import { AnimatedTextProps } from "@types";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.12,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 1,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <div className="w-full h-auto flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={` text-4xl font-extrabold leading-none tracking-tight text-gatewayBlue md:text-5xl lg:text-6xl dark:text-white ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
