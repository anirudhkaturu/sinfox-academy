// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sinfox Academy | Engineering Growth Strategists",
  description:
    "Technical environment for growth strategists. Replace traditional marketing education with rigorous engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-primary text-secondary">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
