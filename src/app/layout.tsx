import type { Metadata } from "next";
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "material-symbols/outlined.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
      <body className={`${jetbrainsMono.variable} ${hankenGrotesk.variable} font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
