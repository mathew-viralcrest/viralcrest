import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Viralcrest | Digital Marketing & AI Agency",
  description: "Premium Digital Marketing & AI Agency in Kollam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans bg-slate-50 text-slate-900 antialiased overflow-x-hidden selection:bg-[#5057e6]/30 selection:text-[#5057e6]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
