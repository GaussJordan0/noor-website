import Image from "next/image";

export default function Index() {
  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      <div className="text-center font-oswald font-bold text-4xl flex gap-2 w-[90%] mx-auto items-end justify-between mt-8">
        <div>
          Unsere <span className="text-c-mid-green">Leistungen</span>
        </div>
        <div className="bg-c-mid-green h-fit p-2 rounded-full">
          <SvgIcon2 />
        </div>
      </div>

      <p className="text-xs font-semibold leading-[1] mt-4 mb-4 w-[90%] mx-auto">
        Unser Team besteht aus zertifizierten Physiotherapeuten mit umfassender
        Erfahrung in der muskuloskelettalen, neurologischen und respiratorischen
        Therapie und bietet ein breites Spektrum an Behandlungen an.
      </p>
      <div className="bg-[#F3FAC0]  rounded-2xl w-[90%] mx-auto text-[#1A422B]">
        <div className="flex gap-2  px-4 pt-8">
          <div className="border-1 text-xs py-1 px-3 rounded-2xl">
            Krankengymnastik
          </div>
          <div className="border-1 text-xs py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-5xl px-4 pt-2 pb-6">
          Physiotherapy
        </h1>
        <hr />

        <p className="text-sm w-[90%] mx-auto py-4">
          Wir sind darauf spezialisiert, Bewegung, Funktion und Kraft durch
          individuelle Physiotherapieprogramme wiederherzustellen. Ob nach einer
          Verletzung, einer Operation oder zur Behandlung chronischer
          Erkrankungen – unser Ziel ist es, die Mobilität zu verbessern,
          Schmerzen zu lindern und weiteren Komplikationen vorzubeugen. Unser
          Behandlungsansatz umfasst:
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
        <div className="bg-c-green p-4 w-[90%] mx-auto text-c-light-green rounded-2xl pb-8 ">
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
          <div className="px-4 mt-6 py-1 rounded-2xl font-oswald border-1  w-fit">
            Book an appointment
          </div>
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
          <div className="border-1 text-xs py-1 px-3 rounded-2xl">
            Leistungen
          </div>
        </div>
        <h1 className="font-oswald font-semibold text-5xl px-4 pt-2 pb-6">
          Physiotherapy
        </h1>
        <hr />

        <p className="text-sm w-[90%] mx-auto py-4">
          Wir sind darauf spezialisiert, Bewegung, Funktion und Kraft durch
          individuelle Physiotherapieprogramme wiederherzustellen. Ob nach einer
          Verletzung, einer Operation oder zur Behandlung chronischer
          Erkrankungen – unser Ziel ist es, die Mobilität zu verbessern,
          Schmerzen zu lindern und weiteren Komplikationen vorzubeugen. Unser
          Behandlungsansatz umfasst:
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
        <div className="bg-c-green p-4 w-[90%] mx-auto text-c-light-green rounded-2xl pb-8 ">
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
          <div className="px-4 mt-6 py-1 rounded-2xl font-oswald border-1  w-fit">
            Book an appointment
          </div>
        </div>
        <div className="flex w-[90%] font-oswald mx-auto py-4 justify-end">
          02
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
