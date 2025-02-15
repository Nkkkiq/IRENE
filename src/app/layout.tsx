import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niki portfolio",
  description: "Portfolio website for Niki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black relative w-screen min-h-screen`}
      >
        <Navigation />
        {children}
        <footer className="flex text-white text-xs py-5 absolute bottom-0 pl-10">
          <p>&copy; {year} Niki Qin. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
