import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Bodas y Eventos | Lety Maldonado Eventos",
  description: "Resuelve tus dudas sobre planificación de bodas, XV años y eventos en Monclova. Precios, tiempos, servicios y más. Consulta gratuita con Lety Maldonado Eventos.",
};

export default function FAQPage() {
  return <FAQClient />;
}
