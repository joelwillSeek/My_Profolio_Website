import type { Metadata } from "next";
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./Providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Eyoel Seleshi",
  description: "Portfolio of Eyoel Seleshi — Mobile, Web, Backend, DevOps & AI Infrastructure Engineer",
  icons: {
    icon: "/vite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${hankenGrotesk.variable} font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary`}>
        <Providers>
          {children}
        </Providers>
        <Script
          src="https://kit.fontawesome.com/26cd9b30e3.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
