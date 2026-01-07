import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EmpiezaTuSaaS - Tu aventura hacia el Indie Hacking",
  description:
    "El boilerplate NextJS que te ahorra 3 meses de desarrollo. Lanza tu SaaS, herramienta AI, o web app y conquista tu primer € online.",
  keywords: [
    "NextJS boilerplate",
    "SaaS starter kit",
    "Next.js template",
    "SaaS boilerplate",
    "Indie hacking",
    "Stripe integration",
    "Lemon Squeezy",
    "MongoDB",
    "Supabase",
  ],
  authors: [{ name: "EmpiezaTuSaaS" }],
  openGraph: {
    title: "EmpiezaTuSaaS - Tu aventura hacia el Indie Hacking",
    description:
      "El boilerplate NextJS que te ahorra 3 meses de desarrollo. Lanza tu SaaS y conquista tu primer € online.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmpiezaTuSaaS - Tu aventura hacia el Indie Hacking",
    description:
      "El boilerplate NextJS que te ahorra 3 meses de desarrollo. Lanza tu SaaS y conquista tu primer € online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
