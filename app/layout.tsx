import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Car Express Transport — Nationwide Auto Shipping",
    template: "%s | Car Express Transport",
  },
  description:
    "Car Express Transport delivers safe, reliable, and affordable vehicle transport across all 50 states. Get your free quote today.",
  keywords: [
    "auto transport",
    "car shipping",
    "vehicle transport",
    "car express transport",
    "nationwide auto shipping",
    "enclosed transport",
    "open transport",
  ],
  openGraph: {
    title: "Car Express Transport — Nationwide Auto Shipping",
    description:
      "Car Express Transport delivers safe, reliable, and affordable vehicle transport across all 50 states.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
