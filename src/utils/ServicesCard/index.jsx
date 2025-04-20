import Image from "next/image";
import AnimatedString from "../AnimatedString";

export default function Index() {
  return (
    <div className="space-y-8 lg:max-w-[80%] mx-auto">
      <div
        id="services"
        className="text-center font-oswald font-bold text-4xl mx-auto md:text-5xl lg:text-6xl xl:text-7xl mt-20"
      >
        <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>Unsere Leistungen</AnimatedString>
      </div>

      <Image
        src="/illustration-3.svg"
        className="mx-auto"
        alt="illustrative image for physiotherapy"
        width={400}
        height={500}
      />
      <div className="w-[90%] mx-auto text-sm mt-2 text-center md:text-base lg:text-xl xl:text-2xl">
        <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>
          Bei Sam Physiotherapie bieten wir individuell abgestimmte
          Physiotherapie für jeden Patienten.
        </AnimatedString>
      </div>

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div>
          <div className="flex gap-2  px-4 pt-8">
            <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
              Krankengymnastik
            </div>
            <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
              Leistungen
            </div>
          </div>
          <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
            Physiotherapie
          </h1>
          <hr />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:pt-5">
          <div>
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl  mx-auto py-4">
              <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>
                Wir sind darauf spezialisiert, Bewegung, Funktion und Kraft durch
                individuelle Physiotherapieprogramme wiederherzustellen. Ob nach
                einer Verletzung, einer Operation oder zur Behandlung chronischer
                Erkrankungen – unser Ziel ist es, die Mobilität zu verbessern,
                Schmerzen zu lindern und weiteren Komplikationen vorzubeugen.
                Unser Behandlungsansatz umfasst:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl  mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                {" "}
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Funktionelle Bewegungsanalysen
              </p>
              <p className="font-semibold flex gap-2">
                {" "}
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Gezielte therapeutische Übungen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Gelenk- und Weichteilmobilisation
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Strategien zur Verletzungsprävention
              </p>
            </div>
          </div>

          <div className="relative h-[200px] xl:min-h-[600px]  sm:h-full w-[90%]  mx-auto">
            <Image
              className="rounded-2xl object-cover "
              src="/home.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>

        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          01
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            MLD
          </div>
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Manuelle Lymphdrainage
        </h1>
        <hr />
        <div className="sm:grid sm:grid-flow-col-dense sm:grid-cols-2 sm:pt-5">
          <div className="col-start-2 col-end-3">
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Unsere spezialisierte lymphatische Therapie unterstützt den
                natürlichen Entgiftungsprozess des Körpers, indem sie
                Flüssigkeitsansammlungen, Schwellungen und Beschwerden reduziert.
                Diese Therapie ist besonders vorteilhaft für Patienten nach
                Operationen, bei Lymphödemen oder venöser Insuffizienz. Wir wenden
                wissenschaftlich fundierte Techniken an, um das Lymphsystem zu
                stimulieren, die Durchblutung zu fördern und die Heilung zu
                beschleunigen.
              </AnimatedString>

            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/image-2.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          02
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Bobath-Therapie
          </div>
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Neurologische Rehabilitation
        </h1>
        <hr />
        <div className="sm:grid sm:grid-cols-2 sm:pt-5">
          <div>
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Wir bieten spezialisierte Therapien für Patienten mit
                neurologischen Erkrankungen wie Schlaganfall, Multipler Sklerose
                oder Parkinson. Unsere Bobath-zertifizierten Therapeuten nutzen
                neurophysiologische Techniken, um:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Die motorische Funktion und Koordination zu verbessern
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Gleichgewicht und Haltungskontrolle zu stärken
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Neuroplastizität und Regeneration zu fördern
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Selbstständigkeit im Alltag wiederherzustellen
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/image-3.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          03
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Manuelle Therapie
        </h1>
        <hr />
        <div className="sm:grid sm:grid-flow-col-dense sm:grid-cols-2 sm:pt-5">
          <div className="col-start-2 col-end-3">
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Wir setzen fortschrittliche manuelle Techniken ein, um die
                Gelenkbeweglichkeit wiederherzustellen, muskuläre Schmerzen zu
                lindern und funktionelle Bewegungen zu verbessern. Unser Ansatz
                umfasst:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Gelenkmobilisation & Manipulation zur Verbesserung des
                Bewegungsumfangs
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Myofasziale Entspannungstechniken zur Reduzierung von
                Muskelverspannungen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Triggerpunkttherapie zur Linderung chronischer Schmerzen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Haltungsanalyse & -korrektur, um wiederkehrende Beschwerden zu
                verhindern
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/image-1.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          04
        </div>
      </section>
      {/* ------------------------------------------------------------ */}

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Myofasziale Dekompressionstherapie
          </div>
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Schröpfen
        </h1>
        <hr />
        <div className="sm:grid sm:grid-cols-2 sm:pt-5">
          <div>
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString
                duration={0.7}
                staggerChildren={0.01}
                once={true}
              >
                Unsere wissenschaftlich fundierte Schröpftherapie wird eingesetzt
                zur:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Verbesserung der Durchblutung und Muskelregeneration
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Reduzierung von Entzündungen und Schmerzen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Förderung der Beweglichkeit und Flexibilität
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Unterstützung der Regeneration nach sportlicher Belastung
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover object-top"
              src="/image-4.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          05
        </div>
      </section>

      {/* -----------------------------------------
       */}

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Atemtherapie
          </div>
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Pulmonale Physiotherapie
        </h1>
        <hr />
        <div className="sm:grid sm:grid-flow-col-dense sm:grid-cols-2 sm:pt-5">
          <div className="col-start-2 col-end-3">
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString
                duration={0.7}
                staggerChildren={0.01}
                once={true}
              >
                Für Patienten mit Mukoviszidose, chronisch obstruktiver
                Lungenerkrankung (COPD) oder postoperativen Atemwegserkrankungen
                bieten wir spezialisierte pulmonale Physiotherapie zur
                Verbesserung der Lungenfunktion und Atmungseffizienz. Unsere
                Techniken umfassen:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Atemtherapie zur Sekretlösung
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Spezielle Atemübungen zur Verbesserung der Atemmechanik
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Pulmonale Rehabilitationsprogramme
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Lagerungstechniken zur Unterstützung der Atmung
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/image-6.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          06
        </div>
      </section>

      {/* ---------------------------------------------- */}

      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Medizinische Massagetherapie
        </h1>
        <hr />
        <div className="sm:grid sm:grid-cols-2 sm:pt-5">
          <div>
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Unsere klinisch fundierte Massagetherapie hilft bei muskulären
                Dysfunktionen, Haltungsproblemen und chronischen Schmerzzuständen.
                Unsere spezialisierten Therapeuten bieten:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Tiefengewebsmassage zur Behandlung von muskulären Schmerzen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Myofasziale Therapie zur Lösung von Spannungen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Sportmassage zur Unterstützung der sportlichen Leistung und
                Regeneration
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Triggerpunkttherapie zur gezielten Schmerzbehandlung
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/image-7.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          07
        </div>
      </section>

      {/* ---------------------------------------------- */}
      <section className="bg-c-beige drop-shadow-xl rounded-2xl w-[90%] mx-auto ">
        <div className="flex gap-2 px-4 pt-8">
          <div className="border-1 text-[10px] md:text-sm xl:text-base py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 pt-2 pb-6">
          Hausbesuche – Professionelle Physiotherapie zu Hause
        </h1>
        <hr />
        <div className="sm:grid sm:grid-flow-dense sm:grid-cols-2 sm:pt-5">
          <div className="col-start-2 col-end-3">
            <div className="text-sm w-[90%] md:text-base lg:text-lg xl:text-xl mx-auto py-4">
              <AnimatedString duration={0.7} staggerChildren={0.01} once={true}>
                Wir bieten unsere hochwertigen physiotherapeutischen Leistungen
                auch als Hausbesuche für Patienten an, die aufgrund von
                eingeschränkter Mobilität, postoperativer Genesung oder
                neurologischen Erkrankungen nicht in unsere Praxis kommen können.
                Unsere mobilen Behandlungen umfassen:
              </AnimatedString>
            </div>
            <div className="w-[90%] mx-auto text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 xl:mt-16 mb-8 space-y-1">
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Detaillierte physiotherapeutische Untersuchungen und
                individuelle Therapiepläne
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Rehabilitation nach Operationen, wie z. B. Gelenkersatz oder
                Frakturen
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Funktionelles Bewegungstraining für ältere oder
                mobilitätseingeschränkte Patienten
              </p>
              <p className="font-semibold flex gap-2">
                <span className="text-c-mid-green">
                  <SvgIcon />
                </span>
                Schmerztherapie und Verbesserung der Bewegungsabläufe
              </p>
            </div>
          </div>
          <div className="relative h-[200px] xl:min-h-[600px] sm:h-full w-[90%] mx-auto">
            <Image
              className="rounded-2xl object-cover"
              src="/contact.jpg"
              alt="Placeholder"
              fill
            />
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end md:text-lg lg:text-xl xl:text-2xl">
          08
        </div>
      </section>
    </div>
  );
}

export const SvgIcon = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SvgIcon2 = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 25 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.18816 33.7889C2.72379 32.0756 3.5316 29.6644 4.61508 26.1784C9.33806 25.4299 11.2922 26.7733 14.2914 21.417C11.8575 22.162 8.92282 20.0352 9.07984 19.1122C9.23861 18.191 15.907 19.777 20.274 13.5762C14.7694 14.7905 13.009 12.1176 13.7191 11.7146C15.3574 10.7829 20.2199 11.3272 22.8126 8.80261C24.1491 7.50279 24.7754 4.34308 24.2311 3.21599C23.5786 1.85335 19.5971 -0.179259 17.4022 0.0126611C15.2073 0.202837 11.765 8.36992 10.7426 8.30711C9.72365 8.24255 9.51603 4.64666 11.2991 1.30551C9.42006 2.13774 5.97597 4.72343 4.89598 6.93401C2.88431 11.0463 5.08441 20.4836 4.37954 20.8186C3.67292 21.1553 1.29835 16.4899 0.589986 14.3735C-0.378339 17.617 -0.401021 20.8657 2.42719 25.1804C1.36116 28.0121 0.778417 31.2712 0.689435 32.9287C0.647562 34.253 1.95262 34.5374 2.18816 33.7889Z"
        fill="white"
      />
    </svg>
  );
};
