import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Wedding Planner en Monclova | La Magnolia Eventos",
  description:
    "Wedding planner profesional en Monclova, Coahuila. La Magnolia: planificación integral de bodas, diseño floral, coordinación y producción de eventos. Consulta gratuita.",
};

const timeline = [
  {
    phase: "12-18 meses antes",
    items: ["Definición de presupuesto y visión", "Selección de venue", "Reserva de fotógrafo y videógrafo", "Selección de catering"],
  },
  {
    phase: "9-12 meses antes",
    items: ["Diseño de concepto visual", "Selección de florería y decoración", "Invitaciones y papelería", "Selección de DJ o música en vivo"],
  },
  {
    phase: "6-9 meses antes",
    items: ["Confirmación de todos los proveedores", "Prueba de menú con catering", "Diseño floral definitivo", "Elaboración de itinerario preliminar"],
  },
  {
    phase: "El mes del evento",
    items: ["Confirmación final de proveedores", "Itinerario maestro y protocolos", "Ensayo de ceremonia", "Coordinación completa del día"],
  },
];

export default function WeddingPlannerMonclovaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">Wedding Planner · Monclova · Coahuila</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              Wedding Planner en Monclova
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-script text-script-md text-taupe-light">La experiencia que tu boda merece</p>
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
                  Un wedding planner profesional no es un lujo: es la diferencia entre una boda que fluye perfectamente y una que consume todo tu tiempo y energía durante meses. En La Magnolia somos ese equipo que convierte tu visión en realidad mientras tú te enfocas en disfrutar el proceso.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Como wedding planners con base en Monclova y cobertura en toda Coahuila, conocemos los mejores venues, tenemos relaciones consolidadas con los proveedores más confiables y sabemos anticipar y resolver los imprevistos antes de que se conviertan en problemas.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Trabajamos con un número limitado de bodas por año para garantizar la atención personalizada que cada pareja merece. Cuando trabajas con La Magnolia, eres nuestra prioridad.
                </p>
              </AnimatedSection>

              {/* Timeline */}
              <AnimatedSection delay={100}>
                <SectionHeading script="El camino" title="Hacia tu Boda" />
                <div className="space-y-8 mt-6">
                  {timeline.map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-taupe flex items-center justify-center shrink-0">
                          <span className="text-xs font-serif text-taupe">{i + 1}</span>
                        </div>
                        {i < timeline.length - 1 && <div className="w-px flex-1 bg-taupe/20 my-2" />}
                      </div>
                      <div className="pb-4">
                        <h3 className="font-serif text-base text-ebony font-medium mb-3">{phase.phase}</h3>
                        <ul className="space-y-1">
                          {phase.items.map((item) => (
                            <li key={item} className="text-sm text-ebony-muted">· {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <SectionHeading script="Por qué" title="La Magnolia" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      title: "Experiencia local",
                      desc: "Más de 10 años coordinando bodas en Monclova y Coahuila. Conocemos cada venue, cada proveedor y cada detalle de la región.",
                    },
                    {
                      title: "Equipo dedicado",
                      desc: "Trabajas directamente con Lety y su equipo. Sin intermediarios. Sin perder información. Comunicación directa y eficiente.",
                    },
                    {
                      title: "Diseño propio",
                      desc: "Somos tanto organizadores como diseñadores. Tu boda tendrá una identidad visual coherente y pensada desde adentro.",
                    },
                    {
                      title: "Tranquilidad garantizada",
                      desc: "El día de tu boda, tú disfrutas. Nuestro equipo gestiona cada detalle y resuelve cualquier imprevisto en tiempo real.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-taupe/30 pl-5">
                      <h3 className="font-serif text-lg text-ebony font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200} className="sticky top-28">
                <div className="bg-cream-warm p-8 border border-cream-dark/40">
                  <p className="label mb-2">Primera consulta</p>
                  <p className="font-serif text-3xl text-ebony font-light mb-1">Gratuita</p>
                  <p className="text-xs text-ebony-muted mb-6">Sin costo · Sin compromiso</p>
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
                  <p className="label mb-4">Nuestros servicios</p>
                  <ul className="space-y-2">
                    {[
                      { label: "Bodas y XV Años", href: "/service-page/bodas-y-xv-anos" },
                      { label: "Diseño Floral", href: "/service-page/diseno-floral" },
                      { label: "Coordinación y Producción", href: "/service-page/coordinacion-produccion-y-diseno" },
                      { label: "Renta de Mobiliario", href: "/service-page/renta-de-mobiliario" },
                      { label: "Bodas en Cuatrociénegas", href: "/bodas-cuatro-cienegas" },
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
            <p className="font-script text-script-md text-taupe-light mb-4">Tu boda comienza con una conversación</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              Cuéntanos tu historia. La primera consulta es gratuita y sin compromiso.
            </p>
            <a href="https://wa.me/528662532615" target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              <MessageCircle size={14} aria-hidden="true" />
              Agendar consulta gratuita
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
