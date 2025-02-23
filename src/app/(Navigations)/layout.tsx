import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { NavigationProperties } from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <NavigationProperties/>
        <div className="mt-20"></div>
        {children}
 </>
  );
}
