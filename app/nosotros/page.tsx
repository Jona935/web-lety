import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import StatsCounter from "@/components/nosotros/StatsCounter";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Lety Maldonado, wedding planner con más de 10 años de experiencia en Monclova, Cuatrociénegas y Minas de Mármol.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-36 pb-20 bg-cream-warm relative overflow-hidden"
        aria-labelledby="nosotros-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-taupe/8 to-cream-warm"
          aria-hidden="true"
        />
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Quiénes somos</p>
            <h1
              id="nosotros-heading"
              className="font-serif text-display-lg text-ebony font-light leading-tight"
            >
              Una historia de{" "}
              <span className="text-taupe">amor</span> por los eventos
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[3/4] bg-ebony/20 overflow-hidden">
                <Image
                  src="/images/real/lety-quien-soy.jpg"
                  alt="Lety Maldonado — Wedding & Event Planner"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="label text-taupe mb-4">Mi historia</p>
              <h2 className="font-serif text-display-sm text-ebony font-light mb-6">
                Hola, soy <span className="text-taupe">Lety Maldonado</span>
              </h2>
              <span className="divider mb-6" aria-hidden="true" />

              <div className="space-y-5 text-ebony-muted leading-relaxed">
                <p>
                  Me encanta decorar eventos, hacerlos únicos y memorables, llenos de
                  detalles espectaculares. Siempre con el gusto por crear espacios lindos,
                  mientras terminaba mi carrera de Derecho, tomé un diplomado en Decoración
                  de Interiores.
                </p>
                <p>
                  Pero quería más conocimientos así que estudié la carrera de Diseño Floral
                  en el Instituto Mexicano Técnico Floral, durante dos años iba y venía de
                  Monclova, donde vivo a la ciudad de Monterrey, me levantaba 4am para
                  llegar a tiempo a mis clases, así logré terminar y crecer mis
                  conocimientos en el tema.
                </p>
                <p>
                  Y como me encantan los retos, entré a una certificación por el AIFD
                  (American Institute of Floral Designers), un gran reto, pero valió la
                  pena, todo esto me dió la seguridad de que tengo el conocimiento y las
                  herramientas necesarias para que con toda tranquilidad dejes tu día más
                  importante en mis manos, yo me encargo de todo.
                </p>
                <p>
                  Mi última certificación fue en junio 2021 con la Asociación de
                  Consultores de Bodas (Association of Bridal Consultants) como Certified
                  Wedding Planner.
                </p>
              </div>

              <StatsCounter />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ojo en el Detalle + Certifications */}
      <section className="section-padding bg-cream-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="label text-taupe mb-4">Experiencia</p>
              <h2 className="font-serif text-display-sm text-ebony font-light mb-6">
                Ojo en el{" "}
                <span className="text-taupe">Detalle</span>
              </h2>
              <span className="divider mb-6" aria-hidden="true" />
              <div className="space-y-5 text-ebony-muted leading-relaxed">
                <p>
                  Llevo más de 11 años dedicándome a la decoración de eventos,
                  cientos de bodas exitosas y todo tipo de eventos, siempre
                  aprendiendo cosas nuevas, asistiendo a congresos y cursos para
                  ofrecerte las más nuevas tendencias.
                </p>
                <p className="font-serif text-lg text-ebony italic">
                  Si quieres una boda espectacular, déjalo todo en mis manos, yo
                  te ayudaré en todo momento.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="label text-taupe mb-2">Certificaciones</p>
                {/* ABC Badge + Document */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="bg-cream p-6 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <Image
                        src="/images/cert-abc-sello.avif"
                        alt="Certified Wedding Planner — ABC"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="bg-cream p-4 flex items-center justify-center">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src="/images/cert-abc-documento.avif"
                        alt="Certificado Association of Bridal Consultants — Leticia Maldonado Garza"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                {/* Other credentials as cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cream p-5 text-center">
                    <div className="w-12 h-12 border border-taupe/30 flex items-center justify-center mx-auto mb-3">
                      <GraduationCap size={20} className="text-taupe" />
                    </div>
                    <p className="font-serif text-base text-ebony mb-1">AIFD</p>
                    <p className="text-xs text-ebony-muted leading-relaxed">
                      American Institute of Floral Designers
                    </p>
                  </div>
                  <div className="bg-cream p-5 text-center">
                    <div className="w-12 h-12 border border-taupe/30 flex items-center justify-center mx-auto mb-3">
                      <Award size={20} className="text-taupe" />
                    </div>
                    <p className="font-serif text-base text-ebony mb-1">Diseño Floral</p>
                    <p className="text-xs text-ebony-muted leading-relaxed">
                      Instituto Mexicano Técnico Floral
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-taupe">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-serif text-display-sm text-cream font-light mb-6">
              ¿Listas para crear algo{" "}
              <span>inolvidable</span>?
            </h2>
            <Link
              href="/contacto"
              className="btn-dark"
            >
              Agendar consulta gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
