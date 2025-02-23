import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { NavigationProperties } from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";



export const metadata: Metadata = {
  title: "Pure Estate",
  description: "find luxury estates",
  icons: [{ rel: "icon", url: "/logo.jpeg" }],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <NavigationProperties/>
        {children}
 </>
  );
}
