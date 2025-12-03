"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={montserrat.variable}>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
