import React from "react";
import { useLenis } from "lenis/react";
export default function Index({ handleClose }) {

  const lenis = useLenis();
  React.useEffect(() => {
    lenis?.stop();

    return () => {
      lenis?.start();
    };
  }, [lenis]);
  return (
    <>
      <div className="fixed inset-0  z-[99999999] w-full h-full bg-c-black opacity-70" />
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[400px] z-[999999999] gap-10 p-5 rounded-lg text-sm w-[350px] bg-c-black text-c-beige">
        <div className="mt-2 flex justify-between  mb-4 w-full  items-center">
          <SvgCookie />

          <BaselineClose
            onClick={handleClose}
            className="cursor-pointer opacity-60"
          />
        </div>
        <div  className="overflow-y-scroll h-[230px]  ">
          <p className="opacity-60">
            Diese Website verwendet nur technisch notwendige Cookies, um die
            Funktionalität zu gewährleisten. Durch die weitere Nutzung stimmen
            Sie der Verwendung dieser Cookies zu.
          </p>
          <hr className="my-4 opacity-60" />
          <p className="opacity-60">
            Einige Services verarbeiten personenbezogene Daten in den USA. Mit
            Ihrer Einwilligung zur Nutzung dieser Services willigen Sie auch in
            die Verarbeitung Ihrer Daten in den USA gemäß Art. 49 (1) lit. a
            GDPR ein. Der EuGH stuft die USA als ein Land mit unzureichendem
            Datenschutz nach EU-Standards ein. Es besteht beispielsweise die
            Gefahr, dass US-Behörden personenbezogene Daten in
            Überwachungsprogrammen verarbeiten, ohne dass für Europäerinnen und
            Europäer eine Klagemöglichkeit besteht.
          </p>
        </div>

        <div className="gap-4 flex">
          <button
            onClick={() => {
              localStorage.setItem("cookie-accepted", "true");
              handleClose();
            }}
            className="bg-c-beige text-c-black px-2 py-1 w-1/2 mt-8 rounded-lg cursor-pointer hover:bg-c-light-green transition-colors duration-300 hover:text-c-black font-semibold"
          >
            AKZEPTIEREN
          </button>
          <button
            onClick={() => {
              handleClose();
            }}
            className="bg-c-beige text-c-black px-4 py-2 mt-8 w-1/2 rounded-lg cursor-pointer hover:bg-c-light-green transition-colors duration-300 hover:text-c-black font-semibold"
          >
            ABLEHNEN
          </button>
        </div>
      </div>
    </>
  );
}

function BaselineClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2.5em"
      height="2.5em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      ></path>
    </svg>
  );
}

function SvgCookie(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="2.5em"
      height="2.5em"
      {...props}
    >
      <g fill="none">
        <path
          fill="#DDB78F"
          d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"
        ></path>
        <path
          fill="url(#f324id0)"
          d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"
        ></path>
        <path
          fill="url(#f324id1)"
          d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"
        ></path>
        <path
          fill="url(#f324id2)"
          d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"
        ></path>
        <path
          fill="#6F434A"
          d="m26.92 14.61l.04-.62a.95.95 0 0 0-1.01-1.01l-.61.04c-.24.01-.49.09-.71.22a1.51 1.51 0 0 0-.59 1.85c.34.8 1.28 1.14 2.05.76c.5-.23.79-.72.83-1.24"
        ></path>
        <g filter="url(#f324idb)">
          <path
            fill="url(#f324id3)"
            d="M26.734 13.875c.035-.49-.28-.625-.718-.625s-.85.213-1.203.422c-.534.335-.817.758-.577 1.334c.293.688.852.696 1.514.369c.613-.282.83-.935.984-1.5"
          ></path>
        </g>
        <path
          fill="#6F434A"
          d="m19.89 8.32l.62.04a.95.95 0 0 0 1.01-1.01l-.04-.61a1.55 1.55 0 0 0-.22-.71a1.51 1.51 0 0 0-1.85-.59c-.8.34-1.14 1.28-.76 2.05c.23.5.72.79 1.24.83"
        ></path>
        <g filter="url(#f324idc)">
          <path
            fill="url(#f324id4)"
            d="m20 7.688l.48.03c.443.028.815-.317.784-.727l-.031-.438a1.06 1.06 0 0 0-.17-.51c-.303-.446-.916-.626-1.435-.425c-.62.245-.884.92-.59 1.474c.179.36.559.568.962.596"
          ></path>
        </g>
        <path
          fill="#6F434A"
          d="m10.67 23.75l-.05.77c-.05.71.54 1.3 1.25 1.25l.76-.05c.3-.02.6-.11.88-.28a1.87 1.87 0 0 0 .73-2.3a1.85 1.85 0 0 0-2.54-.94c-.62.31-.99.91-1.03 1.55"
        ></path>
        <g filter="url(#f324idd)">
          <path
            fill="url(#f324id5)"
            d="m10.982 23.765l-.042.642a.976.976 0 0 0 1.043 1.042l.633-.041c.25-.017.5-.092.734-.234c.642-.4.9-1.217.609-1.918a1.543 1.543 0 0 0-2.118-.783a1.55 1.55 0 0 0-.86 1.292"
          ></path>
        </g>
        <path
          fill="#6F434A"
          d="m20.4 15.19l.03-.46c.1-1.51-1.15-2.76-2.67-2.67l-.45.03c-.45.02-.9.15-1.32.4a2.93 2.93 0 0 0-1.22 3.62c.65 1.59 2.5 2.26 4.01 1.51c.98-.47 1.56-1.42 1.62-2.43"
        ></path>
        <g filter="url(#f324ide)">
          <path
            fill="url(#f324id6)"
            d="m20.024 14.984l.024-.374a2.042 2.042 0 0 0-2.168-2.169l-.366.024a2.3 2.3 0 0 0-1.072.325a2.38 2.38 0 0 0-.991 2.94a2.374 2.374 0 0 0 3.257 1.227a2.33 2.33 0 0 0 1.316-1.973"
          ></path>
        </g>
        <path
          fill="url(#f324id7)"
          d="M7.68 9.42L7.65 9c-.08-1.37 1.05-2.51 2.42-2.42l.41.03c.41.02.82.14 1.2.36c1.13.66 1.6 2.08 1.11 3.29a2.656 2.656 0 0 1-3.64 1.37c-.88-.44-1.41-1.3-1.47-2.21"
        ></path>
        <g filter="url(#f324idf)">
          <path
            fill="url(#f324id8)"
            d="m8.157 9.388l-.025-.344a1.87 1.87 0 0 1 1.982-1.983l.336.025c.336.016.833-.016 1.144.164c.925.54 1.214 1.696.812 2.688c-.483 1.179-1.923 1.817-3.045 1.26a2.18 2.18 0 0 1-1.204-1.81"
          ></path>
        </g>
        <path
          fill="#6F434A"
          d="m24.26 22.82l.02.36c.08 1.17-.9 2.15-2.07 2.07l-.35-.02c-.35-.02-.7-.12-1.03-.31a2.28 2.28 0 0 1-.95-2.81A2.27 2.27 0 0 1 23 20.94c.76.36 1.21 1.09 1.26 1.88"
        ></path>
        <g filter="url(#f324idg)">
          <path
            fill="url(#f324id9)"
            d="m24.026 22.72l.017.302a1.638 1.638 0 0 1-1.74 1.741l-.295-.017a1.95 1.95 0 0 1-.866-.26a1.916 1.916 0 0 1-.8-2.363a1.91 1.91 0 0 1 2.625-.984a1.86 1.86 0 0 1 1.06 1.58"
          ></path>
        </g>
        <path
          fill="#6F434A"
          d="m5.91 17.54l-.04-.62a.95.95 0 0 1 1.01-1.01l.61.04c.24.01.49.09.71.22c.62.39.87 1.18.59 1.85c-.34.8-1.28 1.14-2.05.76c-.5-.23-.8-.72-.83-1.24"
        ></path>
        <g filter="url(#f324idh)">
          <path
            fill="url(#f324ida)"
            d="m6.212 17.516l-.032-.493a.756.756 0 0 1 .803-.804l.486.032c.19.008.39.071.565.175c.493.31.692.939.469 1.472a1.197 1.197 0 0 1-1.631.604a1.15 1.15 0 0 1-.66-.986"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="f324id0"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(119.554 9.443 10.733)scale(20.9077)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDAAE"></stop>
            <stop offset="1" stopColor="#D59077" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="f324id1"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(83.29 -.309 17.77)scale(17.1172 16.2696)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".772" stopColor="#BF9E7A" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#C4A47E"></stop>
          </radialGradient>
          <radialGradient
            id="f324id2"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(92.681 6.586 12.495)scale(37.4159)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".325" stopColor="#E9AB8B" stopOpacity="0"></stop>
            <stop offset=".505" stopColor="#DE9A80"></stop>
            <stop offset=".656" stopColor="#D07067"></stop>
          </radialGradient>
          <radialGradient
            id="f324id3"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(140.104 10.882 11.509)scale(2.75277 2.61177)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".175" stopColor="#886562"></stop>
            <stop offset="1" stopColor="#8E6C67" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="f324id4"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-2.50939 -1.45447 1.39989 -2.41522 21.266 7.41)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".175" stopColor="#886562"></stop>
            <stop offset="1" stopColor="#8E6C67" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="f324id5"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(2.94893 -2.5649 2.62536 3.01844 11.13 25.258)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".47" stopColor="#896764" stopOpacity="0"></stop>
            <stop offset=".935" stopColor="#896763"></stop>
          </radialGradient>
          <radialGradient
            id="f324id6"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(5.16268 -2.0625 2.11182 5.28612 15.275 16)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".388" stopColor="#896764" stopOpacity="0"></stop>
            <stop offset=".935" stopColor="#896763"></stop>
          </radialGradient>
          <radialGradient
            id="f324id7"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(123.403 3.173 7.432)scale(3.63294 3.63565)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7D5755"></stop>
            <stop offset="1" stopColor="#60383B"></stop>
          </radialGradient>
          <radialGradient
            id="f324id8"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(4.80872 -.33296 .3332 4.8123 8.129 9.563)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".597" stopColor="#896764" stopOpacity="0"></stop>
            <stop offset=".935" stopColor="#896763"></stop>
          </radialGradient>
          <radialGradient
            id="f324id9"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(3.60937 -3.125 3.1966 3.69208 20.438 24.531)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".47" stopColor="#896764" stopOpacity="0"></stop>
            <stop offset=".935" stopColor="#896763"></stop>
          </radialGradient>
          <radialGradient
            id="f324ida"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(2.26846 -1.96472 2.00984 2.32055 6.325 18.478)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".47" stopColor="#896764" stopOpacity="0"></stop>
            <stop offset=".935" stopColor="#896763"></stop>
          </radialGradient>
          <filter
            id="f324idb"
            width="3.587"
            height="3.335"
            x="23.65"
            y="12.75"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324idc"
            width="3.348"
            height="3.182"
            x="18.418"
            y="5.036"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324idd"
            width="4.14"
            height="4.145"
            x="10.438"
            y="21.807"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324ide"
            width="5.778"
            height="5.769"
            x="14.775"
            y="11.937"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324idf"
            width="5.454"
            height="5.344"
            x="7.629"
            y="6.557"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324idg"
            width="4.844"
            height="4.832"
            x="19.703"
            y="20.436"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
          <filter
            id="f324idh"
            width="3.416"
            height="3.409"
            x="5.678"
            y="15.717"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_31720"
              stdDeviation=".25"
            ></feGaussianBlur>
          </filter>
        </defs>
      </g>
    </svg>
  );
}
