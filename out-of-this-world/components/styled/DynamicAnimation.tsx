"use client";

import { motion } from "framer-motion";
import { AnimatedTextProps } from "@types";
import AnimatedText from "./AnimatedText";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 1.6,
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

const DynamicAnimation = () => {
  return (
    <div className="w-full h-auto sm:mt-20 inline-block pb-2 items-center justify-center text-center overflow-hidden">
      <motion.div variants={quote} initial="initial" animate="animate">
        <p className=" md:text-white/70 lg:text-white/70 leading-10 tracking-wide sm:text-base sm:font-extrabold sm:text-gray-600 md:text-3xl lg:text-4xl">
          " Born to late to explore the{" "}
          <span className="text-yellow-300">Earth</span>. Born to early to
          explore the <span className="text-yellow-300">Galaxy</span>.{" "}
          <br className="sm:block hidden" />
          Born just in time to <span className="text-red-700 ">try</span> "
        </p>
      </motion.div>
    </div>
  );
};

export default DynamicAnimation;
