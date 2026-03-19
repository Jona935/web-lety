import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Eventos en Monclova | La Magnolia Eventos",
  description:
    "Organizadora de eventos en Monclova, Coahuila. Bodas, quinceañeras, eventos corporativos y sociales. La Magnolia, la empresa líder en eventos de Monclova.",
};

const services = [
  { title: "Bodas", href: "/service-page/bodas-y-xv-anos", desc: "Planeación completa de bodas civiles y religiosas en Monclova." },
  { title: "XV Años", href: "/service-page/bodas-y-xv-anos", desc: "Quinceañeras memorables con producción y coordinación completa." },
  { title: "Eventos Corporativos", href: "/service-page/eventos-corporativos", desc: "Cenas de gala, congresos y activaciones de marca." },
  { title: "Diseño Floral", href: "/service-page/diseno-floral", desc: "Arreglos florales y diseño floral para cualquier evento." },
  { title: "Renta de Mobiliario", href: "/service-page/renta-de-mobiliario", desc: "Sillas, mesas, carpas, vajilla y mantelería premium." },
  { title: "Graduaciones", href: "/service-page/graduaciones-y-todo-evento-social", desc: "Recepciones y todo tipo de evento social." },
];

export default function EventosMonclovaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">Eventos · Monclova · Coahuila</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              Eventos en Monclova
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-script text-script-md text-taupe-light">La empresa de eventos de referencia en Monclova</p>
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
                  Con más de 10 años de trayectoria, La Magnolia es la empresa organizadora de eventos de mayor renombre en Monclova, Coahuila. Hemos celebrado cientos de bodas, quinceañeras, eventos corporativos y sociales en toda la región.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Conocemos Monclova: sus venues, sus proveedores, sus tiempos y su gente. Esa experiencia local es lo que nos permite ofrecer una coordinación sin imprevistos y un resultado que supera las expectativas.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Nuestros servicios cubren todo el espectro de eventos: desde una íntima reunión familiar hasta una gran boda de 500 invitados o un congreso corporativo multi-día. Siempre con el mismo nivel de atención al detalle y compromiso.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <SectionHeading script="Nuestros" title="Servicios en Monclova" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="border-l-2 border-taupe/30 pl-5 group">
                      <h3 className="font-serif text-lg text-ebony font-medium mb-2 group-hover:text-taupe transition-colors">{s.title}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">¿Por qué elegirnos?</h2>
                <ul className="space-y-3">
                  {[
                    "Más de 10 años de experiencia en Monclova y Coahuila",
                    "Red consolidada de proveedores de confianza",
                    "Equipo profesional de coordinación el día del evento",
                    "Atención personalizada desde la primera consulta",
                    "Cobertura en Monclova, Cuatrociénegas y Minas de Mármol",
                    "Primera consulta gratuita sin compromiso",
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
                  <p className="label mb-4">Hablemos de tu evento</p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    La primera consulta es gratuita. Cuéntanos tu visión y te preparamos una propuesta personalizada.
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
                      Ver formulario de contacto
                    </Link>
                  </div>
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
            <p className="font-script text-script-md text-taupe-light mb-4">Tu evento en Monclova, perfectamente coordinado</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              Escríbenos hoy y comenzamos a planear juntos el evento que siempre imaginaste.
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
