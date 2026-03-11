import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnifyComply | Compliance, Unified.",
  description: "Next-gen compliance platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col pt-24 relative overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <div className="absolute inset-x-0 top-0 h-[800px] bg-dot-pattern -z-10 [mask-image:linear-gradient(to_bottom,white,transparent_100%)] opacity-30 pointer-events-none" />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
