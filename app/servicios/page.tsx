import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ServiciosGrid from "@/components/servicios/ServiciosGrid";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Coordinación, producción y diseño de eventos, diseño floral, bodas y XV años, eventos corporativos, graduaciones y renta de mobiliario en Monclova y Coahuila.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-taupe/8 to-cream-warm" aria-hidden="true" />
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Lo que ofrecemos</p>
            <h1 className="font-serif text-display-lg text-ebony font-light">
              Servicios{" "}
              <span className="italic text-taupe">integrales</span>
            </h1>
            <p className="text-ebony-muted text-base mt-6 max-w-xl mx-auto leading-relaxed">
              Todo lo que necesitas para tu evento perfecto, en un solo lugar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services — GSAP stagger */}
      <ServiciosGrid />

      {/* CTA */}
      <section className="section-padding-sm bg-cream-warm">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-serif text-display-sm text-ebony font-light mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-ebony-muted mb-8">
              Contáctanos y creamos un paquete 100% personalizado para tu evento.
            </p>
            <Link href="/contacto" className="btn-dark">
              Hablar con Lety
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
