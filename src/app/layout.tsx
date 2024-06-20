import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Transitor from "../components/transition";
import { ReactNode } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700"],
  variable: "--font-poppins,",
});

export const metadata: Metadata = {
  title: "Bofan Portofolio",
  description: "Personal Portofolio",
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Transitor>{children}</Transitor>
      </body>
    </html>
  );
}
