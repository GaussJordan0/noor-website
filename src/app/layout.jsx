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

export default function RootLayout({ children }) {
  return (
    <html lang="de">
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
