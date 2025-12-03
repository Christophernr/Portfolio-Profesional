"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Meta tags esenciales */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Montserrat desde Google Fonts - compatible con GitHub Pages */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon (si tienes) */}
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="font-montserrat">
        <NextThemesProvider attribute="class" defaultTheme="light">
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}