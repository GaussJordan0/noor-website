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
      {/* ...existing content... */}

      {/* Berlin Local Time & Developed By Section */}
      <div className="mt-24 mb-[50px] text-xs font-semibold md:text-sm grid md:grid-cols-2">
        <p>Berlin Local Time: {isClient ? time : ""}</p>
        <a
          className="underline"
          href="https://www.gaussjordan.agency/"
          target="_blank"
        >
          Developed by GaussJordan
        </a>
      </div>
    </footer>
  );
};

export default Index;
