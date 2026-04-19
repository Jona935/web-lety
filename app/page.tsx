import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Lety Maldonado Eventos | Bodas y Eventos Monclova y Cuatrociénegas",
  description:
    "Soluciones Integrales para Tu Evento. Planeación, Organización, Logística, Decoración, Renta de Mobiliario, Mantelería y Banquetes en Monclova y Cuatrociénegas.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
