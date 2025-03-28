"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
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
      <motion.body
        className={`${inter.className} antialiased bg-white text-[#191919] `}
      >
        {children}
        <DynamicIsland />
      </motion.body>
    </html>
  );
}
