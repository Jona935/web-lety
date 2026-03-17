import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lety Maldonado Eventos | Wedding Planner Monclova",
    template: "%s | Lety Maldonado Eventos",
  },
  description:
    "Soluciones integrales para tu evento en Monclova y Cuatrociénegas. Planeación, organización, decoración, renta de mobiliario, mantelería y banquetes para bodas y quinceañeras.",
  keywords: [
    "wedding planner Monclova",
    "organizadora de bodas Monclova",
    "eventos Cuatrociénegas",
    "decoración de bodas",
    "quinceañeras Monclova",
    "banquetes Coahuila",
    "Lety Maldonado",
    "event planner Minas de Mármol",
  ],
  authors: [{ name: "Lety Maldonado Eventos" }],
  creator: "Lety Maldonado Eventos",
  metadataBase: new URL("https://letymaldonadoeventos.com"),
  openGraph: {
    title: "Lety Maldonado Eventos | Wedding Planner Monclova",
    description:
      "Transformamos tu visión en una celebración perfecta. Bodas, quinceañeras y eventos especiales en Monclova, Cuatrociénegas y Minas de Mármol.",
    url: "https://letymaldonadoeventos.com",
    siteName: "Lety Maldonado Eventos",
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://letymaldonadoeventos.com",
    languages: {
      "es-MX": "https://letymaldonadoeventos.com",
      "en-US": "https://letymaldonadoeventos.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
            focus:bg-wine focus:text-cream focus:px-4 focus:py-2 focus:text-sm"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
