import Image from "next/image";

export default function Index() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto">
 
    <div className="bg-[#F3FAC0]  rounded-2xl w-[90%] mx-auto text-[#1A422B]">
      <div className="flex gap-2  px-4 pt-8">
        <div className="border-1 text-xs py-1 px-3 rounded-2xl">
          Krankengymnastik
        </div>
        <div className="border-1 text-xs py-1 px-3 rounded-2xl">Leistungen</div>
      </div>
      <h1 className="font-oswald font-semibold text-5xl px-4 pt-2 pb-6">
        Physiotherapy
      </h1>
      <hr />

      <p className="text-sm w-[90%] mx-auto py-4">
        Wir sind darauf spezialisiert, Bewegung, Funktion und Kraft durch
        individuelle Physiotherapieprogramme wiederherzustellen. Ob nach einer
        Verletzung, einer Operation oder zur Behandlung chronischer Erkrankungen
        – unser Ziel ist es, die Mobilität zu verbessern, Schmerzen zu lindern
        und weiteren Komplikationen vorzubeugen. Unser Behandlungsansatz
        umfasst:
      </p>
      <div className="w-[90%] mx-auto text-sm mt-2 mb-8 space-y-1">
        <p className="font-semibold flex gap-2">
          {" "}
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Funktionelle Bewegungsanalysen
        </p>
        <p className="font-semibold flex gap-2">
          {" "}
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Gezielte therapeutische Übungen
        </p>
        <p className="font-semibold flex gap-2">
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Gelenk- und Weichteilmobilisation
        </p>
        <p className="font-semibold flex gap-2">
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Strategien zur Verletzungsprävention
        </p>
      </div>
      <div className="bg-[#F23333] p-4 w-[90%] mx-auto text-[#E6E6E6] rounded-2xl pb-8 ">
        <div className="font-oswald text-2xl">Physiotherapy</div>
        <p className="text-xs mt-1 ">Click here to book your appointment</p>
        <div className="rounded-2xl h-[200px] w-full mt-3 relative">
          <Image
            className="rounded-2xl object-cover"
            src="/img-1.jpeg"
            alt="Placeholder"
            fill
          />
        </div>
        <div className="px-4 mt-6 py-1 rounded-2xl font-oswald border-1  w-fit">Book an appointment</div>
      </div>
      <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end">
        01
      </div>
    </div>


     <div className="bg-[#F3FAC0]  rounded-2xl w-[90%] mx-auto text-[#1A422B]">
      <div className="flex gap-2  px-4 pt-8">
        <div className="border-1 text-xs py-1 px-3 rounded-2xl">
          Krankengymnastik
        </div>
        <div className="border-1 text-xs py-1 px-3 rounded-2xl">Leistungen</div>
      </div>
      <h1 className="font-oswald font-semibold text-5xl px-4 pt-2 pb-6">
        Physiotherapy
      </h1>
      <hr />

      <p className="text-sm w-[90%] mx-auto py-4">
        Wir sind darauf spezialisiert, Bewegung, Funktion und Kraft durch
        individuelle Physiotherapieprogramme wiederherzustellen. Ob nach einer
        Verletzung, einer Operation oder zur Behandlung chronischer Erkrankungen
        – unser Ziel ist es, die Mobilität zu verbessern, Schmerzen zu lindern
        und weiteren Komplikationen vorzubeugen. Unser Behandlungsansatz
        umfasst:
      </p>
      <div className="w-[90%] mx-auto text-sm mt-2 mb-8 space-y-1">
        <p className="font-semibold flex gap-2">
          {" "}
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Funktionelle Bewegungsanalysen
        </p>
        <p className="font-semibold flex gap-2">
          {" "}
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Gezielte therapeutische Übungen
        </p>
        <p className="font-semibold flex gap-2">
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Gelenk- und Weichteilmobilisation
        </p>
        <p className="font-semibold flex gap-2">
          <span className="text-[#EC614B]">
            <SvgIcon />
          </span>
          Strategien zur Verletzungsprävention
        </p>
      </div>
      <div className="bg-[#BF8AFF] p-4 w-[90%] mx-auto text-[#E6E6E6] rounded-2xl pb-8 ">
        <div className="font-oswald text-2xl">Physiotherapy</div>
        <p className="text-xs mt-1 ">Click here to book your appointment</p>
        <div className="rounded-2xl h-[200px] w-full mt-3 relative">
          <Image
            className="rounded-2xl object-cover"
            src="/img-1.jpeg"
            alt="Placeholder"
            fill
          />
        </div>
        <div className="px-4 mt-6 py-1 rounded-2xl font-oswald border-1  w-fit">Book an appointment</div>
      </div>
      <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end">
        01
      </div>
    </div>
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
