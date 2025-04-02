"use client";
import { useInView, motion, AnimatePresence } from "motion/react";
import { useRef } from "react";

export default function Index({
  children,
  className,
  staggerChildren,
  duration,
  once,
}) {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: 0.1,
      },
    },
  };

  // Child animation variants
  const childVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: duration,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: duration,
      },
    },
  };
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: once });
  const string = (children || "").split(" ");
  return (
    <motion.div ref={textRef}>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        exit="exit"
      >
        {string.map((output, index) => {
          return (
            <span key={index} className="inline-flex overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  variants={childVariants}
                  className={`${className}`}
                  
                >
                  {output}
                  {index !== string.length - 1 && <span>&nbsp;</span>}
                </motion.span>
              </AnimatePresence>
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
