import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Халяль Трейдинг | Azhar Trading",
  description: "Бесплатный вебинар по Халяль-трейдингу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
