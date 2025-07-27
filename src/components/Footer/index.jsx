"use client";
import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Berlin",
          hour12: true,
        })
      );
    };
    updateTime(); // set initial time
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-c-green text-c-beige p-6">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold font-oswald mb-4 text-lg">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">Startseite</a></li>
            <li><a href="#about-us" className="hover:underline">Über uns</a></li>
            <li><a href="#services" className="hover:underline">Dienstleistungen</a></li>
            <li><a href="https://www.doctolib.de/physiotherapie/berlin/sameh-elbehouti-berlin" target="_blank" className="hover:underline">Doctolib</a></li>
            <li><a href="/Datenschutz" target="_blank" className="hover:underline">Datenschutz</a></li>
            <li><a href="/impressum" target="_blank" className="hover:underline">Impressum</a></li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <div>
            <h3 className="font-semibold font-oswald mb-4 text-lg">Adresse</h3>
            <a
              className="hover:underline"
              href="https://www.google.pl/maps/place/Westf%C3%A4lische+Str.+72,+10709+Berlin,+Germany/@52.4947943,13.2999142,17.98z/data=!4m6!3m5!1s0x47a850c1e2a68b75:0x3e1b91433c9cd972!8m2!3d52.494593!4d13.3010559!16s%2Fg%2F11q2n82__1?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Address: Westfälische Str. 72 10709 Berlin
            </a>
          </div>
          <div>
            <h3 className="font-semibold font-oswald mb-4 text-lg">Kontaktinformationen</h3>
            <p>Phone: 030 44010654</p>
            <p>Phone: 030 44013538</p>
            <p>Fax: 030 43744613</p>
            <p className="hover:underline">
              Email: <a href="mailto:info@sam-physio.de">info@sam-physio.de</a>
            </p>
          </div>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="font-semibold font-oswald mb-4 text-lg">Soziale Netzwerke</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61575309755352" className="hover:underline" target="_blank">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Berlin Time & Credit */}
      <div className="mt-24 mb-[50px] text-xs font-semibold md:text-sm grid md:grid-cols-2">
        <p>Berlin Local Time: {isClient ? time : ""}</p>
        {/* <a
          className="underline"
          href="https://www.gaussjordan.agency/"
          target="_blank"
        >
          Developed by GaussJordan
        </a> */}
      </div>
    </footer>
  );
};

export default Index;
