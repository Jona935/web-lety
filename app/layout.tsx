import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
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
    images: [
      {
        url: "/images/real/minas-recepcion-dorado.jpg",
        width: 1200,
        height: 630,
        alt: "Lety Maldonado Eventos — Wedding Planner Monclova, Coahuila",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lety Maldonado Eventos | Wedding & Event Planner · Monclova",
    description: "Bodas, XV años y eventos integrales en Monclova y Cuatrociénegas. Planeación, Diseño Floral, Mobiliario y Banquetes.",
    images: ["/images/real/minas-recepcion-dorado.jpg"],
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
      className={`${dmSerif.variable} ${dmSans.variable}`}
    >
      <body className="overflow-x-hidden bg-cream-light">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ebony focus:text-cream-light focus:text-sm focus:tracking-widest focus:uppercase"
        >
          Saltar al contenido
        </a>
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "WeddingPlanner"],
              "name": "Lety Maldonado Eventos",
              "alternateName": "La Magnolia",
              "description": "Wedding planner profesional en Monclova, Coahuila. Bodas, XV años, eventos corporativos, diseño floral y renta de mobiliario.",
              "url": "https://letymaldonadoeventos.com",
              "logo": "https://letymaldonadoeventos.com/images/logo-lm-dark.png",
              "image": "https://letymaldonadoeventos.com/images/real/minas-recepcion-dorado.jpg",
              "telephone": "+528666335252",
              "email": "eventosletymaldonado@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Cuauhtémoc 119, Col. El Pueblo",
                "addressLocality": "Monclova",
                "addressRegion": "Coahuila",
                "postalCode": "25730",
                "addressCountry": "MX"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "09:00",
                "closes": "20:00"
              }],
              "areaServed": ["Monclova","Cuatrociénegas","Minas de Mármol","Coahuila"],
              "sameAs": [
                "https://www.facebook.com/letymaldonadoeventos",
                "https://www.instagram.com/letymaldonado/"
              ],
              "priceRange": "$$"
            })
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
