import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cha Cha Matcha — Grow With Us | Franchise Opportunities",
  description:
    "Join the Cha Cha Matcha franchise family. Explore U.S. franchise opportunities, international licensing, and operational store conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
