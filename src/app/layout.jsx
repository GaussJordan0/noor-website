import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import DynamicIsland from "../components/DynamicIsland";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sam Physio | Physiotherapie & Osteopathie in Berlin",
  description:
    "Physiotherapie & Osteopathie in Berlin - Entdecken Sie unsere Angebote und Behandlungsmethoden.",
  keywords: ["Physiotherapie", "Osteopathie", "Dresden"],
  image: "/icon.jpg",
};
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpg" sizes="any" />
        <meta name="msvalidate.01" content="EF57199B45F753A4C0F2B8651101E393" />
      </head>
      <ReactLenis root>
        <body
          className={`${inter.className} antialiased bg-c-light-green text-[#191919] `}
        >
          {children}
          <DynamicIsland />
        </body>
      </ReactLenis>
    </html>
  );
}

