import type { Metadata } from "next";
import { Noto_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harriet O'Donovan - Discover Impactful Style",
  description:
    "Curated luxury styling experiences, wardrobe transformation, and personal branding for high-achieving women in Dubai and beyond.",
  icons: {
    icon: "/images/cropped-Harriet_O_Donovan_logo-transparent-150x85.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-brand-charcoal antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
