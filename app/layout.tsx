import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipFast - Lanza tu SaaS en un fin de semana",
  description:
    "El boilerplate NextJS con todo lo que necesitas para lanzar tu SaaS, herramienta AI, o web app y facturar online rápido.",
  keywords: [
    "NextJS boilerplate",
    "SaaS starter kit",
    "Next.js template",
    "SaaS boilerplate",
    "React boilerplate",
    "Stripe integration",
    "NextAuth",
  ],
  authors: [{ name: "ShipFast" }],
  openGraph: {
    title: "ShipFast - Lanza tu SaaS en un fin de semana",
    description:
      "El boilerplate NextJS con todo lo que necesitas para lanzar tu SaaS, herramienta AI, o web app y facturar online rápido.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipFast - Lanza tu SaaS en un fin de semana",
    description:
      "El boilerplate NextJS con todo lo que necesitas para lanzar tu SaaS, herramienta AI, o web app y facturar online rápido.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
