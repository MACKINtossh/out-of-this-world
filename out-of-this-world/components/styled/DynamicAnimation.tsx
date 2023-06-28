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
      delay: 0.8,
      staggerChildren: 0.12,
    },
  },
};

const handleClick = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const DynamicAnimation = ({ text }: AnimatedTextProps) => {
  return (
    <div className="w-full h-auto flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        <button
          className="flex items-center justify-center bg-black/30 text-center text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid hovewr:border-transparent hover:border-dark"
          onClick={handleClick}
        >
          <AnimatedText text={text} className="!text-xl !pb-0" />
        </button>
      </motion.h1>
    </div>
  );
};

export default DynamicAnimation;
