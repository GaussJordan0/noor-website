"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Index({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b-2  w-[90%] mx-auto px-4 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center mb-2">
        <h1 className=" font-oswald font-semibold max-w-[25ch] md:max-w-full">
          {title}
        </h1>
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <Image
            src="/plus-black.svg"
            width={20}
            height={20}
            alt="plus"
            className="origin-center"
          />
        </motion.button>
      </div>

      <motion.div
        className="text-sm overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mt-8 ">{content}</div>
      </motion.div>
    </div>
  );
}
