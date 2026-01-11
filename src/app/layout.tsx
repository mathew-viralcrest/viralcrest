import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using proper Google Font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // Ensure text remains visible during font load
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viralcrest.com"),
  title: {
    default: "Viralcrest | Digital Marketing & AI Agency",
    template: "%s | Viralcrest",
  },
  description:
    "Viralcrest is a premium digital marketing agency specializing in Performance Marketing, Web Development, SEO, and AI Automation. We transform ideas into digital success stories.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png", // Assuming existence or placeholder
  },
  keywords: [
    "Digital Marketing Agency",
    "Performance Marketing",
    "Web Development",
    "SEO Services",
    "AI Content Creation",
    "Viralcrest",
    "Kerala Marketing Agency",
    "Ecommerce Development",
  ],
  openGraph: {
    title: "Viralcrest | Digital Marketing & AI Agency",
    description:
      "Transforming Clicks into Conversions, and Ideas into Digital Success Stories.",
    url: "https://viralcrest.com",
    siteName: "Viralcrest",
    images: [
      {
        url: "/og-image.jpg", // You might want to create a default OG image
        width: 1200,
        height: 630,
        alt: "Viralcrest Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viralcrest | Digital Marketing & AI Agency",
    description: "Premium Digital Solutions for Modern Brands.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Viralcrest",
              url: "https://viralcrest.com",
              logo: "https://viralcrest.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+917012780370",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.instagram.com/viralcrest",
                "https://www.linkedin.com/company/viralcrest",
                "https://www.facebook.com/viralcrest",
              ],
            }),
          }}
        />
      </head>
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
