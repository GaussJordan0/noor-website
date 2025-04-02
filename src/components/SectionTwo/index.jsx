"use client";

import Image from "next/image";

export default function index() {
  return (
    <div className="w-[90%] mx-auto mt-10">
      <div className="font-semibold font-oswald text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
        <p className="max-w-[20ch] mx-auto">
          Physiotherapie & Osteopathie – Zwei Ansätze, ein Ziel
        </p>
      </div>
      <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl mx-auto md:max-w-[40ch] md:mt-6 lg:mt-8 mt-4">
        Eine kurze Einführung in Physiotherapie und Osteopathie – Wie wir beide
        Methoden für eine effektive Behandlung kombinieren
      </p>

      <div className="flex flex-col    lg:flex-row ">
        <div>
          {" "}
          <div className="text-2xl md:text-center mx-auto md:text-3xl lg:text-4xl xl:text-5xl mt-10">
            <p>
              <span className="font-semibold font-oswald"> Physiotherapie</span>{" "}
              - Die Wissenschaft der Bewegung
            </p>
          </div>
          <p className="mt-4 text-sm">
            Physiotherapie konzentriert sich auf gezielte Übungen, manuelle
            Techniken und physikalische Maßnahmen wie Wärme- oder
            Elektrotherapie, um Beweglichkeit, Kraft und Funktion
            wiederherzustellen. Sie wird häufig nach Verletzungen, Operationen
            oder bei chronischen Erkrankungen eingesetzt.
          </p>
          <Image
            src="/illustration-1.png"
            alt="illustrative image for physiotherapy"
            width={400}
            height={500}
          />
        </div>
        <div>
          <div className="text-2xl md:text-center mx-auto md:text-3xl lg:text-4xl xl:text-5xl mt-10">
            <p>
              <span className="font-semibold font-oswald"> Osteopathie</span> -
              Die Wissenschaft der Bewegung
            </p>
          </div>
          <p className="mt-4 text-sm">
            Osteopathie hingegen betrachtet den Körper als Ganzes und nutzt
            sanfte manuelle Techniken, um Spannungen und Blockaden zu lösen.
            Dabei liegt der Fokus darauf, die Selbstheilungskräfte des Körpers
            zu aktivieren und Funktionsstörungen zu beheben.
          </p>
          <Image
            src="/illustration-2.png"
            alt="illustrative image for physiotherapy"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
