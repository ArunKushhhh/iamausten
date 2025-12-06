import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
export const metadata: Metadata = {
  title: "ImAusten",
  description: "Get to know about me through my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="bg-white text-sm lg:text-base min-h-screen">
        <Navbar />
        <main className="h-full pt-24">{children}</main>
      </body>
    </html>
  );
}
