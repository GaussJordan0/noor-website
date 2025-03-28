"use client";

import Image from "next/image";

export default function index() {
  return (
    <div className="w-[95%] mx-auto px-2">
      <div className="flex gap-2 items-center">
    
        <h2 className="font-oswald font-semibold text-3xl leading-[1]">
          Die Synergie von Physiotherapie und Osteopathie
        </h2>
        <div className="bg-c-mid-green h-fit p-2 rounded-full">
          <SvgIcon />
        </div>
      </div>
      <p className="text-xs font-semibold leading-[1] mt-4 mb-4">
        Die Kombination von Physiotherapie und Osteopathie bietet einen
        umfassenden Ansatz zur Gesundheitspflege. Jederzeit eine fachkompetente
        und bestmögliche Behandlung gegen Ihre Beschwerden.
      </p>
      <div className="p-5 bg-c-black text-c-light-green mt-8 relative rounded-2xl">
        <div className="absolute right-5">
          {" "}
          <Image
            src="/Diamond.svg"
            width={16}
            height={16}
            alt="Diamond"
            className="menu"
          />
        </div>
        <h2 className="font-oswald text-center text-3xl font-semibold mt-2">
          Physiotherapie
        </h2>
        <h3 className="text-[10px] font-semibold mt-2 text-center">
          Die Wissenschaft der Bewegung
        </h3>
        <hr className="border-c-light-green mt-4" />
        <p className="text-xs leading-[1.2] font-semibold mt-8">
          Der Körper beruht auf dem Prinzip der gegenseitigen Abhängigkeit von
          Struktur und Funktion. So hat jede Funktionsproblematik des Körpers
          als Ursache eine Bewegungseinschränkung der Gewebe. Beschwerden, die
          einen Menschen schon jahrelang belasten, können durchaus eine Ursache
          in einer entfernten Körperregion haben, die nicht sofort mit den
          aktuellen Beschwerden in Verbindung gebracht werden können. Daher sind
          für uns eine umfassende Anamnese und Diagnostik von Ihrer Behandlung
          enorm wichtig.
        </p>
      </div>

      {/* ----------------------------- */}

      <div className="p-5 bg-c-black text-c-light-green mt-2 relative rounded-2xl">
        <div className="absolute right-5">
          {" "}
          <Image
            src="/Diamond.svg"
            width={16}
            height={16}
            alt="Diamond"
            className="menu"
          />
        </div>
        <h2 className="font-oswald text-center text-3xl font-semibold mt-2">
          Osteopathie
        </h2>
        <h3 className="text-[10px] font-semibold mt-2 text-center">
          Die Kunst des ganzheitlichen Ansatzes
        </h3>
        <hr className="border-c-light-green mt-4" />
        <p className="text-xs leading-[1.2] font-semibold mt-8">
          Einige Schwerpunkte haben sich im Laufe der Zeit herauskristallisiert,
          so dass Karim Bouzir auf einen enormen Erfahrungsschatz zurückgreifen
          und dementsprechend hochwertige Therapieansätze in folgenden Bereichen
          anbieten kann:
        </p>

        <ul className="text-sm font-oswald italic  mt-4">
          <li>
            {" "}
            <span className="text-c-light-green">✔</span> Ganzheitliche Therapie
          </li>
          <li>
            <span className="text-c-light-green">✔</span> Akute Beschwerden
          </li>
          <li>
            <span className="text-c-light-green">✔</span> Chronische Beschwerden
          </li>
          <li>
            <span className="text-c-light-green">✔</span> Betreuung von
            Sportlern aller Klassen
          </li>
          <li>
            <span className="text-c-light-green">✔</span> Postoperative
            Behandlung
          </li>
          <li>
            <span className="text-c-light-green">✔</span> Rehabilitation
          </li>
        </ul>
        <p className="text-xs leading-[1.2] font-semibold mt-8">
          Selbstverständlich bieten wir Ihnen noch mehr, schauen Sie bei unseren
          Leistungen rein.
        </p>
      </div>
      <p className="  text-lg font-bold leading-[1] mt-8 mb-8">
        Im SAM Therapy Center glauben wir daran, beide Disziplinen zu vereinen,
        um unseren Patienten die effektivsten Gesundheitslösungen zu bieten.
        Denn Ihr Wohlbefinden liegt uns am Herzen!
      </p>
    </div>
  );
}

const SvgIcon = () => {
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
