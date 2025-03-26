import motion from "motion/react";
import Image from "next/image";

export default function Index() {
  return (
    <div>
      <div className="flex justify-center p-2"><Image src="/logo.svg" width={100} height={100} alt="Sam Logo"/></div>
      <div className="font-oswald"></div>
    </div>
  );
}
