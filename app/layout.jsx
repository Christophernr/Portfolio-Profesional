"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Configura la fuente MONTSEERRAT SIN usar next/font para producción
// O usa una configuración condicional
let fontClass = "";

// Solo en desarrollo usa next/font
if (process.env.NODE_ENV !== 'production') {
  const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
  });
  fontClass = montserrat.variable;
} else {
  // En producción, carga la font directamente
  fontClass = "font-montserrat";
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className={fontClass}>
      <head>
        {/* Carga la font de Google directamente para producción */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
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