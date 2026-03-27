import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lety Maldonado Eventos | Wedding & Event Planner · Monclova",
    template: "%s | Lety Maldonado Eventos",
  },
  description:
    "Soluciones integrales para tu evento en Monclova y Cuatrociénegas. Planeación, Organización, Logística, Decoración, Renta de Mobiliario, Mantelería y Banquetes.",
  keywords: [
    "wedding planner Monclova",
    "Lety Maldonado eventos",
    "organizadora de bodas Monclova",
    "eventos Cuatrociénegas",
    "decoración de bodas Coahuila",
    "quinceañeras Monclova",
    "banquetes Monclova",
    "bodas Cuatro Ciénegas",
    "Lety Maldonado",
    "eventos Monclova",
    "bodas destino Coahuila",
  ],
  authors: [{ name: "Lety Maldonado Eventos" }],
  metadataBase: new URL("https://letymaldonadoeventos.com"),
  openGraph: {
    title: "Lety Maldonado Eventos | Wedding & Event Planner · Monclova",
    description:
      "Planeación, Organización, Logística, Decoración, Renta de Mobiliario, Mantelería y Banquetes. Bodas y eventos en Monclova, Cuatrociénegas y Minas de Mármol.",
    url: "https://letymaldonadoeventos.com",
    siteName: "Lety Maldonado Eventos",
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://letymaldonadoeventos.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${pinyon.variable}`}
    >
      <body className="overflow-x-hidden bg-cream-light">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
            focus:bg-ebony focus:text-cream-light focus:px-4 focus:py-2 focus:text-xs"
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
