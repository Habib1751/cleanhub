import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModalProvider from "@/components/QuoteModalProvider";
import { siteConfig } from "@/lib/siteConfig";
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
  title: `${siteConfig.businessName} | Solar, AC, Water Tank & CCTV Services in Lahore DHA`,
  description:
    "Doorstep solar panel cleaning, AC servicing, water tank cleaning, and CCTV camera installation in DHA Lahore, all phases. Book by call or WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white text-slate-900">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
