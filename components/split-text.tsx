"use client";
import { motion, Variants } from "motion/react";

export default function SplitText() {
  const text = "Here you go";

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const charVariant: Variants = {
    hidden: { opacity: 0, x: 2, filter: "blur(4px)", fontWeight: "bold" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      fontWeight: "normal",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariant}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
