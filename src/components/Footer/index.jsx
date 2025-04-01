"use client"
import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/Berlin" }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/Berlin" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-c-green text-c-beige p-6">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2  gap-6">
        <div>
          {/* Navigation Links */}
          <h3 className="font-semibold font-oswald mb-4 text-lg">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Doctolib
              </a>
            </li>
          </ul>
        </div>
        {/* Address Section */}
        <div>
          <div>
            <h3 className="font-semibold font-oswald mb-4 text-lg">Address</h3>
            <p>Westfälische Str. 72</p>
            <p>10709 Berlin</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold font-oswald mb-4 text-lg">
              Contact Information
            </h3>
            <p>Phone: 030 44010654</p>
            <p>Phone: 030 44013538</p>
            <p>Fax: 030 43744613</p>
            <p>Mobile: 0176 34984110</p>
            <p>
              Email: {" "}
              <a href="mailto:info@sam-physio.de" className="">
                info@sam-physio.de
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Berlin Local Time & Developed By Section */}
      <div className="mt-24 mb-[50px] text-xs font-semibold md:text-sm grid md:grid-cols-2">
        <p>Berlin Local Time: {time}</p>
        <p className="underline">Developed by GaussJordan</p>
      </div>
    </footer>
  );
};

export default Index;
