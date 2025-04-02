"use client";
import AnimatedString from "../../utils/AnimatedString";
import Image from "next/image";

export default function index() {
  return (
    <div className="w-[90%] mx-auto mt-10 xl:max-w-[70%] xl:mt-24">
      <div className="font-semibold font-oswald text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
        <div className="max-w-[20ch] mx-auto">
          <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
            Physiotherapie & Osteopathie – Zwei Ansätze, ein Ziel
          </AnimatedString>
        </div>
      </div>
      <div className="text-center text-sm md:text-base lg:text-lg xl:text-xl mx-auto md:max-w-[40ch] md:mt-6 lg:mt-8 mt-4">
        <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
          Eine kurze Einführung in Physiotherapie und Osteopathie – Wie wir
          beide Methoden für eine effektive Behandlung kombinieren
        </AnimatedString>
      </div>

      <div className="flex flex-col lg:gap-8    lg:flex-row xl:flex-col xl:mt-24 ">
        <div className="xl:flex  xl:justify-between">
          {" "}
          <div>
            <div className="text-2xl  lg:text-start mx-auto md:text-3xl xl:text-4xl mt-10">
              <div>
                <span className="font-semibold font-oswald">
                  <AnimatedString
                    duration={0.7}
                    staggerChildren={0.01}
                    once={true}
                  >
                    Physiotherapie
                  </AnimatedString>
                </span>
                <AnimatedString
                  duration={0.7}
                  staggerChildren={0.01}
                  once={true}
                >
                  - Die Wissenschaft der Bewegung
                </AnimatedString>
              </div>
              <div className="mt-4 text-sm lg:text-base xl:max-w-[50ch]">
                <AnimatedString
                  duration={0.7}
                  staggerChildren={0.01}
                  once={true}
                >
                  Physiotherapie konzentriert sich auf gezielte Übungen,
                  manuelle Techniken und physikalische Maßnahmen wie Wärme- oder
                  Elektrotherapie, um Beweglichkeit, Kraft und Funktion
                  wiederherzustellen. Sie wird häufig nach Verletzungen,
                  Operationen oder bei chronischen Erkrankungen eingesetzt.
                </AnimatedString>
              </div>
            </div>
          </div>
          <Image
            className="mx-auto"
            src="/illustration-1.png"
            alt="illustrative image for physiotherapy"
            width={400}
            height={500}
          />
        </div>
        <div className="xl:flex xl:justify-between xl:flex-row-reverse ">
          <div>
            <div className="text-2xl  mx-auto lg:text-start md:text-3xl xl:text-4xl mt-10">
              <div>
                <span className="font-semibold font-oswald">
                  <AnimatedString
                    duration={0.7}
                    staggerChildren={0.01}
                    once={true}
                  >
                    Osteopathie
                  </AnimatedString>
                </span>
                <AnimatedString
                  duration={0.7}
                  staggerChildren={0.01}
                  once={true}
                >
                  - Die Wissenschaft der Bewegung
                </AnimatedString>
              </div>
            </div>
            <div className="mt-4 text-sm lg:text-base xl:max-w-[50ch]">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Osteopathie hingegen betrachtet den Körper als Ganzes und nutzt
                sanfte manuelle Techniken, um Spannungen und Blockaden zu lösen.
                Dabei liegt der Fokus darauf, die Selbstheilungskräfte des
                Körpers zu aktivieren und Funktionsstörungen zu beheben.
              </AnimatedString>
            </div>
          </div>

          <Image
            className="mx-auto"
            src="/illustration-2.png"
            alt="illustrative image for physiotherapy"
            width={400}
            height={500}
          />
        </div>
      </div>
      <div>
        <h1 className="font-oswald font-semibold mt-10 text-3xl md:text-4xl lg:text-5xl md:mt-14 lg:mt-20 xl:mt-24">
          <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
            Physiotherapie oder Osteopathie? Warum nicht beides?
          </AnimatedString>
        </h1>
        <div className="mt-4 md:mt-8 lg:text-lg xl:text-xl ">
          <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
            Durch die Kombination beider Methoden lassen sich optimale
            Behandlungsergebnisse erzielen. Während die Physiotherapie gezielt
            Muskeln, Gelenke und Nerven behandelt, sorgt die Osteopathie für ein
            besseres Gleichgewicht und eine verbesserte Durchblutung im gesamten
            Körper. So können Schmerzen effektiv gelindert und die langfristige
            Gesundheit gefördert werden.
          </AnimatedString>
        </div>
      </div>
    </div>
  );
}
