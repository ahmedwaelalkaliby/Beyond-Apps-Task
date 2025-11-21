import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "UVER ",
  description:
    "UVER is website that show college informations, makes college search easy, personal college recommendations, Engaging Experts Chat, and submiting applications seamlessly.",
  keywords: ["university", "college", "college informations", "college search", "college recomndation","chat college experts", "student", "search", "student application", "UVER"],
  openGraph: {
    title: "UVER – University Search &  Recommendation Platform",
    description:
      "UVER is website that show college informations, makes college search easy, personal college recommendations, Engaging Experts Chat, and submiting applications seamlessly, Your ultimate college search and recommendation platform.",
    siteName: "UVER",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
