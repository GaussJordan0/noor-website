"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { easeOut } from "motion";

const texts = [
  "KRANKENGYMNASTIK",
  "MANUELLE LYMPHDRAINAGE",
  "KG-ZNS NACH BOBATH",
  "MANUELLE THERAPIE",
  "KG MUKOVISZIDOSE",
  "SCHRÖPFEN",
  "MEDIZINISCHE MASSAGE",
  "HAUSBESUCHE",
];
const parentVariants = {
  initial: { y:10},
  animate: { y:0,
    staggerChildren: 0.5,
    transition: { duration: 0.4, easeOut }
  },
};
const variants = {
  initial: { opacity: 0, filter: "blur(2px)", },
  animate: { opacity: 1, filter: "blur(0px)",  transition: { duration: 0.4 } },
};
const charVariants = {
  initial: { opacity: 0, filter: "blur(2px)", y:10 },
  animate: { opacity: 1, filter: "blur(0px)", y:0, transition: { duration: 0.4 } },
  exit: { opacity: 0, filter: "blur(2px)", transition: { duration: 0.3 } },
};
export default function Index() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex justify-center p-2 mt-10">
          <Image src="/logo.svg" width={100} height={100} alt="Sam Logo" />
        </div>

        <div className="font-oswald font-bold flex justify-center  text-center text-4xl w-full mt-5">
          <motion.p
            initial="initial"
            variants={variants}
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[21ch]  "
          >
            Willkommen in Ihrer PRAXIS für
          </motion.p>
        </div>

        <motion.div
          variants={variants}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          className="text-center mt-4 text-3xl font-bold h-[100px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={parentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-c-mid-green"
            >
              {texts[index].split("").map((char, i) => (
                <motion.span variants={charVariants}  key={i}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.p
          initial="initial"
          variants={variants}
          whileInView="animate"
          viewport={{ once: true }}
          className="font-semibold leading-[1.2] w-[90%] mx-auto  text-center  text-sm"
        >
          Mit über 15 Jahren Erfahrung bietet unser Expertenteam erstklassige
          Physiotherapie. Wir heißen alle Kassenpatienten, Privatpatienten,
          Selbstzahler und Erholungssuchende willkommen.
        </motion.p>
        <div className="max-w-fit flex flex-col justify-center mx-auto mb-4">
        <div className="mx-auto mt-12">
          <motion.button whileTap={{scale: 0.95}}  className="bg-[#1A422B] w-full text-white py-4 px-6 rounded-xl">
            Termin online buchen über Doctorlib
          </motion.button>
        </div>
        <div className="mx-auto mt-4 w-full">
          <motion.button whileTap={{scale: 0.95}} className="bg-white w-full text-c-green border-c-green border-2 py-3 font-semibold  rounded-xl">
            Kontaktieren Sie uns
          </motion.button>
        </div>
      </div>
        {/* <div className=" relative w-[90%] mx-auto rounded-2xl h-[300px] mb-8">
          <Image
            src="/img-1.jpeg"
            alt="Hero-Image"
            fill
            className="rounded-2xl object-cover"
          />
        </div> */}
        
   
      </div>
    </div>
  );
}
