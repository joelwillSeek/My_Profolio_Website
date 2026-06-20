import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Eyoel's Dev Portfolio",
  description: "Dev Portfolio of Eyoel Seleshi",
  icons: {
    icon: "/vite.png", // Will keep this since it was the original icon path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
        {/* Next.js optimized Script tag replacing the index.html script */}
        <Script
          src="https://kit.fontawesome.com/26cd9b30e3.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
