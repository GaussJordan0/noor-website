import Image from "next/image";
import AnimatedString from "../../utils/AnimatedString";
import ImageGallery from "../../utils/ImageGallery";

export default function index() {
  return (
    <div>
      <h1
        id="about-us"
        className="text-4xl font-oswald font-semibold text-c-mid-green mx-auto text-center md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Über Uns
      </h1>

      <Image
        src="/illustration-4.svg"
        width={500}
        height={500}
        quality={100}
        alt="About Image"
        className="rounded-2xl mx-auto"
      />

      <h2 className="text-center font-semibold  md:text-lg lg:text-xl xl:text-2xl mx-auto mt-2 md:mb-4 lg:mb-8 xl:mb-16">
        Wer wir sind und was uns ausmacht
      </h2>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 ">
        <div className="text-sm w-[90%] mx-auto mt-4  xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:text-md  2xl:text-lg">
          <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>
            Die Therapieklinik von Sameh Elbehouti wurde mit dem Ziel gegründet,
            Menschen mit maßgeschneiderten, fortschrittlichen
            physiotherapeutischen Behandlungen zu helfen. Mit über 15 Jahren
            Erfahrung und einem hochqualifizierten Team haben wir es uns zur
            Aufgabe gemacht, individuelle Therapiepläne zu entwickeln, die auf
            die Bedürfnisse jedes einzelnen Patienten abgestimmt sind. Unsere
            Therapieansätze beruhen auf wissenschaftlich fundierten Methoden und
            modernen Techniken, die helfen, Schmerzen zu lindern, die Mobilität
            zu verbessern und die Lebensqualität zu steigern.
          </AnimatedString>
        </div>
        <div className="relative w-[90%] mx-auto h-[200px] sm:h-[400px] md:h-[500px] my-4 col-start-1 col-span-full row-start-1 xl:col-start-1 xl:col-end-2">
          <ImageGallery />
        </div>
        <div className="flex flex-col gap-4 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:mt-[12rem] 2xl:mt-[18rem]">
          <div className="text-sm w-[90%] mx-auto xl:text-md 2xl:text-lg">
            <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>
              Wir bieten eine breite Palette an Behandlungen, von manueller
              Therapie über Atemtherapie bis hin zu physiotherapeutischen
              Hausbesuchen. Unsere Patienten stehen immer im Mittelpunkt unseres
              Handelns – wir nehmen uns Zeit, ihre Beschwerden zu verstehen und
              ihnen eine optimale Lösung anzubieten. Unser Team besteht aus
              erfahrenen Therapeuten, die sich kontinuierlich weiterbilden, um
              stets die neuesten Entwicklungen in der Physiotherapie anzuwenden.
            </AnimatedString>
          </div>

          <div className="text-sm w-[90%] mx-auto xl:text-md 2xl:text-lg">
            <AnimatedString duration={0.7} once={true} staggerChildren={0.01}>
              Vertrauen Sie auf unsere langjährige Expertise, um Ihre Gesundheit
              und Ihr Wohlbefinden nachhaltig zu verbessern.
            </AnimatedString>
          </div>
        </div>
      </div>
    </div>
  );
}
