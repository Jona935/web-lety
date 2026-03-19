import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Diseño de Eventos | La Magnolia Monclova",
  description:
    "Servicio de diseño de eventos en Monclova. Dirección creativa, concepto visual, decoración floral, escenografía y producción para bodas y eventos especiales en Coahuila.",
};

export default function DisenoEventosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">Diseño de Eventos · Monclova · Coahuila</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              Diseño de Eventos
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-script text-script-md text-taupe-light">Donde la creatividad y la elegancia se encuentran</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-cream-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-14">
              <AnimatedSection>
                <p className="text-ebony-muted leading-relaxed text-base">
                  El diseño de un evento va mucho más allá de la decoración. Es la creación de una experiencia sensorial completa: la paleta de colores que establece el estado de ánimo, las flores que cuentan una historia, la iluminación que transforma un espacio ordinario en algo extraordinario.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  En La Magnolia aplicamos una metodología de diseño que parte de tu personalidad, tu historia y tu visión. El resultado es un evento que se siente auténticamente tuyo, no un catálogo de opciones prefabricadas.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <SectionHeading script="Nuestro" title="Proceso de Diseño" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      title: "01. Consulta Creativa",
                      desc: "Conversación profunda sobre tu visión, referencias, colores favoritos y el feeling que quieres lograr en tu evento.",
                    },
                    {
                      title: "02. Moodboard y Concepto",
                      desc: "Presentación visual del concepto creativo: paleta, texturas, flores, mobiliario y atmósfera general del evento.",
                    },
                    {
                      title: "03. Diseño y Producción",
                      desc: "Fabricación o selección de todos los elementos decorativos, florales y escénicos conforme al concepto aprobado.",
                    },
                    {
                      title: "04. Montaje y Dirección",
                      desc: "Instalación con nuestro equipo de producción y dirección de arte durante el evento para garantizar la visión.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-taupe/30 pl-5">
                      <h3 className="font-serif text-lg text-ebony font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">Elementos de diseño que manejamos</h2>
                <ul className="space-y-3">
                  {[
                    "Diseño floral: centros de mesa, arcos, muros florales e instalaciones",
                    "Mantelería y textiles en más de 40 colores y texturas",
                    "Iluminación ambiental y arquitectónica",
                    "Mobiliario de diseño: lounge areas, barras y mesas especiales",
                    "Señalética y papelería del evento",
                    "Escenografía y backdrops personalizados",
                    "Carpas y estructuras decorativas",
                    "Detalles de mesa: portalugares, menús y centros personalizados",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200} className="sticky top-28">
                <div className="bg-cream-warm p-8 border border-cream-dark/40">
                  <p className="label mb-4">Comienza tu diseño</p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    Cuéntanos tu visión y te preparamos un moodboard personalizado para que puedas ver el potencial de tu evento.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/528662532615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark w-full flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                      Cotizar por WhatsApp
                    </a>
                    <Link href="/contacto" className="btn-outline-dark w-full flex items-center justify-center gap-3">
                      Ver formulario
                    </Link>
                  </div>
                </div>

                <div className="mt-6 p-6 border border-cream-dark/40">
                  <p className="label mb-4">Servicios de diseño</p>
                  <ul className="space-y-2">
                    {[
                      { label: "Diseño Floral", href: "/service-page/diseno-floral" },
                      { label: "Coordinación y Producción", href: "/service-page/coordinacion-produccion-y-diseno" },
                      { label: "Renta de Mobiliario", href: "/service-page/renta-de-mobiliario" },
                      { label: "Bodas y XV Años", href: "/service-page/bodas-y-xv-anos" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                          → {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="section-padding-sm bg-ebony">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="font-script text-script-md text-taupe-light mb-4">¿Lista para diseñar tu evento?</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              La primera consulta es gratuita. Cuéntanos tu visión y creamos la propuesta perfecta para ti.
            </p>
            <a href="https://wa.me/528662532615" target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              <MessageCircle size={14} aria-hidden="true" />
              Escribir a WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
