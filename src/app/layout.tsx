import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","700"], variable: "--font-montserrat" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400","500"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Yookthi Labs — Data & AI Advisory",
  description: "Execution focused data and AI advisory and fractional CTO leadership.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
       <body>{children}</body>
    </html>
  );
}
