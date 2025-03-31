"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "motion/react";

export default function Index() {
  const [scope, animate] = useAnimate();
  const [expanded, setExpanded] = useState(false);
  const animation = () => {
    if (!expanded) {
      animate(
        "#plus",
        { rotate: 45 },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        ".menu",
        { y: "100%" },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        "#opacity",
        { opacity: 1 },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      );
      animate(
        "#background",
        { height: "90dvh" },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        ".animated-text",
        { y: "0%" },
        {
          duration: 0.5,
          ease: "easeOut",
          delay: stagger(0.05, { startDelay: 0.2 }),
        }
      );
      animate(
        ".clip-animation",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        {
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
          delay: stagger(0.01, { startDelay: 0.2 }),
        }
      );
    } else {
      animate(
        "#plus",
        { rotate: -90 },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        "#opacity",
        { opacity: 0 },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        ".clip-animation",
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        ".animated-text",
        { y: "100%" },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
      animate(
        ".menu",
        { y: "0%" },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );

      animate(
        "#background",
        { height: "40px" },
        { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      );
    }

    setExpanded(!expanded);
  };

  return (
    
    <div ref={scope} className=" relative z-[99999] text-c-light-green">
      
      
      <section
        className="fixed bottom-3 flex justify-center w-full "
        // onClick={() => setExpanded(!expanded)}
      >
        <div
          className="  bg-c-mid-green   rounded-2xl w-[90%] mx-auto h-[40px]"
          id="background"
        >
          <div className="flex flex-col w-full h-full ">
            <div
              className="p-5 flex w-full justify-between items-center border-b  border-white/20 opacity-0"
              id="opacity"
            >
              <Image src="/logo.svg" width={70} height={70} alt="logo" />
              <button className="text-sm bg-c-light-green text-c-green rounded-2xl px-4 py-1 font-oswald">
                Book an appointment
              </button>
            </div>

            <div className="flex px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20">
              <div
                className="bg-white w-[80px] h-[55px] rounded-md clip-animation"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              ></div>

              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Home
                </div>
              </div>
            </div>
            <div className="flex px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20">
              <div
                className="bg-white w-[80px] h-[55px] rounded-md clip-animation"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              ></div>
              <div className="overflow-hidden">
                <div
                  className="font-semibold animated-text leading-[1]"
                  style={{ transform: "translateY(100%)" }}
                >
                  Services
                </div>
              </div>
            </div>
            <div className="flex px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20">
              <div
                className="bg-white w-[80px] h-[55px] rounded-md clip-animation"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              ></div>
              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Doctolib
                </div>
              </div>
            </div>
            <div className="flex px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20">
              <div
                className="bg-white w-[80px] h-[55px] rounded-md clip-animation"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              ></div>
              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Contact
                </div>
              </div>
            </div>

            <div
              className="flex-1 text-xs flex flex-col justify-end px-5 py-3 mb-[45px] "
              onClick={() => animation()}
            >
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  testing@gaussjordan.com
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Number: +40 123 456 XXX
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Address: 123 Main St, City
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">Doctolib</div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">Social-1</div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">Social-2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- */}

      <section className="fixed bottom-3 flex items-center w-full opacito ">
        <button
          className=" cursor-pointer bg-c-mid-green  text-[#E6E6E6] px-4 py-3 rounded-2xl flex w-[90%] mx-auto justify-between items-end"
          onClick={() => animation()}
        >
          <div className=" flex items-center text-sm font-bold">
            <span className=" pr-2">
              <div className="overflow-hidden">
                {" "}
                <Image
                  src="/Diamond.svg"
                  width={16}
                  height={16}
                  alt="Diamond"
                  className="menu"
                />
              </div>
            </span>
            <div className="overflow-hidden">
              <div className="menu text-c-light-green py-1">Öffnen Sie das Menü</div>
            </div>
          </div>
          <div>
            <span>
              <Image
                src="/plus.svg"
                width={18}
                height={18}
                alt="plus"
                id="plus"
                className="py-1"
              />
            </span>
          </div>
        </button>
      </section>
    </div>
  );
}
