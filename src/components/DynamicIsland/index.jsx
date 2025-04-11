"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useAnimate, stagger } from "motion/react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Index() {
  const [scope, animate] = useAnimate();
  const [expanded, setExpanded] = useState(false);
  const lenis = useLenis();
  const animation = () => {
    if (!expanded) {
      lenis?.stop();
      animate(".bganimation", {
        background: "#191919",
      });

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
      lenis?.start();
      animate(".bganimation", {
        background: "#7C9726",
      });
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
    <div ref={scope} className=" relative z-[99999] text-c-light-green mx-auto">
      <section
        className="fixed bottom-3 flex justify-center w-full"
        // onClick={() => setExpanded(!expanded)}
      >
        <div
          className="  bg-c-mid-green bganimation rounded-2xl w-[90%] mx-auto h-[40px] md:max-w-3xl md:text-2xl "
          id="background"
        >
          <div className="flex flex-col w-full h-full ">
            <div
              className="p-5 flex w-full justify-end items-center border-b  border-white/20 opacity-0"
              id="opacity"
            >
              <button className="text-base bg-c-light-green text-c-black drop-shadow rounded-lg px-4 py-1 font-oswald">
                Termin buchen
              </button>
            </div>

            <Link
              href="/"
              className="flex hover:bg-c-mid-green transition duration-300 px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20"
              onClick={() => animation()}
            >
              <div
                className="bg-white w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-md clip-animation relative"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              >
                {" "}
                <Image
                  src="/home.jpg"
                  className="object-cover rounded-md"
                  fill
                  alt="home menu image"
                />
              </div>

              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Startseite
                </div>
              </div>
            </Link>
            <a
              href="#services"
              className="flex hover:bg-c-mid-green transition duration-300 px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20"
              onClick={() => animation()}
            >
              <div
                className="bg-white w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-md clip-animation relative"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              >
                {" "}
                <Image
                  src="/services.jpg"
                  className="object-cover rounded-md"
                  fill
                  alt="home menu image"
                />
              </div>
              <div className="overflow-hidden">
                <div
                  className="font-semibold animated-text leading-[1]"
                  style={{ transform: "translateY(100%)" }}
                >
                  Dienstleistungen
                </div>
              </div>
            </a>
            <a
              href="#contact"
              onClick={() => animation()}
              className="flex hover:bg-c-mid-green transition duration-300 px-5 py-2 gap-x-6 items-center  border-b-1 border-white/20"
            >
              <div
                className="bg-white w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-md clip-animation relative"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              >
                {" "}
                <Image
                  src="/contact.jpg"
                  className="object-cover rounded-md"
                  fill
                  alt="home menu image"
                />
              </div>
              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Kontakt
                </div>
              </div>
            </a>
            <a
              href="https://www.doctolib.de/physiotherapie/berlin/sameh-elbehouti-berlin"
              target="_blank"
              onClick={() => animation()}
              className="flex px-5 py-2 gap-x-6 items-center  border-b-1 hover:bg-blue-600  transition duration-500 border-white/20"
            >
              <div
                className="bg-white w-[80px] h-[55px] md:w-[120px] md:h-[80px] rounded-md clip-animation relative"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              >
                <Image
                  src="/doctolib.svg.png"
                  className="rounded-2xl object-cover"
                  fill
                  alt="Sam Logo"
                />
              </div>
              <div className="overflow-hidden">
                <div
                  className=" font-semibold animated-text leading-[1]   "
                  style={{ transform: "translateY(100%)" }}
                >
                  Doctolib
                </div>
              </div>
            </a>

            <div
              className="flex-1 text-xs md:text-sm flex flex-col justify-end px-5 py-3 mb-[45px] "
              onClick={() => animation()}
            >
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  <a href="mailto:info@sam-physio.de" target="_blank">
                    {" "}
                    info@sam-physio.de
                  </a>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  <a
                    href="https://www.google.pl/maps/place/Westf%C3%A4lische+Str.+72,+10709+Berlin,+Germany/@52.4947943,13.2999142,17.98z/data=!4m6!3m5!1s0x47a850c1e2a68b75:0x3e1b91433c9cd972!8m2!3d52.494593!4d13.3010559!16s%2Fg%2F11q2n82__1?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    Address: Westfälische Str. 72 10709 Berlin
                  </a>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Phone: 030 44010654
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Phone: 030 44013538
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Mobile: 0176 34984110
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="w-fit font-bold animated-text">
                  Fax: 030 43744613
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- */}

      <section className="fixed bottom-3 flex items-center w-full opacito ">
        <button
          className=" cursor-pointer bg-c-mid-green bganimation text-[#E6E6E6] px-4 py-3 rounded-2xl flex w-[90%] md:max-w-3xl mx-auto justify-between items-end"
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
              <div className="menu text-c-light-green py-1">
                Öffnen Sie das Menü
              </div>
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
