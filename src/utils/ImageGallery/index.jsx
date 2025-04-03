"use client";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "./icons";
import { useState } from "react";
import Image from "next/image";

export default function index() {
  const images = [
    "/preview-1.jpg",
    "/preview-2.jpg",
    "/preview-3.jpg",
    "/preview-4.jpg",
    "/preview-5.jpg",
  ];
  const [activeIndex, SetActiveIndex] = useState(0);
  const lastIndex = images.length - 1;

  const next = () => {
    activeIndex >= lastIndex
      ? SetActiveIndex(0)
      : SetActiveIndex(activeIndex + 1);
  };
  const previous = () => {
    activeIndex <= 0
      ? SetActiveIndex(lastIndex)
      : SetActiveIndex(activeIndex - 1);
  };
  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center h-full  w-full gap-2 md:gap-4 lg:gap-8  ">
        <button className="cursor-pointer" onClick={previous}>
          <ChevronLeft />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeIndex}
          className="relative  w-full h-full"
        >
          <Image
            loading="lazy"
            src={images[activeIndex]}
            alt="location images"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        <button className="cursor-pointer" onClick={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
