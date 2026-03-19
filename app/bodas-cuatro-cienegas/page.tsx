import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Bodas en Cuatrociénegas | La Magnolia Wedding Planners",
  description:
    "Organizadora de bodas en Cuatrociénegas, Coahuila. Planeación integral, decoración y coordinación para tu boda en el Desierto de los Leones y región de Cuatrociénegas.",
};

const highlights = [
  "Conocemos los mejores venues de Cuatrociénegas y la región",
  "Coordinación de proveedores locales y de Monclova",
  "Logística de transporte para invitados foráneos",
  "Decoración adaptada al entorno desértico y natural",
  "Más de 10 años realizando eventos en Coahuila",
  "Soporte el día del evento con equipo completo",
];

export default function BodasCuatrocienegasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">Bodas · Cuatrociénegas · Coahuila</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              Bodas en Cuatrociénegas
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-script text-script-md text-taupe-light">Un escenario único para tu gran día</p>
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
                  Cuatrociénegas es uno de los destinos más únicos de México para celebrar una boda. Con sus paisajes desérticos, pozas de aguas cristalinas y cielos estrellados incomparables, ofrece un escenario natural que pocos lugares del mundo pueden igualar.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  En La Magnolia conocemos la región a la perfección. Hemos organizado bodas en haciendas históricas, ranchos privados, jardines bajo las estrellas y espacios al aire libre que aprovechan al máximo la belleza natural del desierto coahuilense.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Nos encargamos de absolutamente todo: desde la búsqueda del venue perfecto hasta la coordinación de proveedores locales, la logística de transporte para tus invitados y la decoración que se integra armoniosamente con el entorno.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">¿Por qué casarse en Cuatrociénegas?</h2>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <SectionHeading script="Nuestra" title="Cobertura" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Cuatrociénegas", desc: "Sede principal con venues exclusivos y paisajes únicos del desierto de Chihuahuan." },
                    { title: "Minas de Mármol", desc: "Espacios naturales impresionantes a pocos minutos de Cuatrociénegas." },
                    { title: "Monclova", desc: "Capital regional con amplia oferta de venues, hoteles y proveedores especializados." },
                    { title: "Región Noreste", desc: "Coordinamos bodas en toda Coahuila con logística de proveedores de Saltillo y Monterrey." },
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
                  <p className="label mb-4">Agenda tu consulta</p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    La primera consulta es gratuita. Cuéntanos tu visión y te ayudamos a encontrar el venue perfecto en Cuatrociénegas.
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

                <div className="mt-6 p-6 border border-cream-dark/40">
                  <p className="label mb-4">Servicios relacionados</p>
                  <ul className="space-y-2">
                    {[
                      { label: "Bodas y XV Años", href: "/service-page/bodas-y-xv-anos" },
                      { label: "Diseño Floral", href: "/service-page/diseno-floral" },
                      { label: "Renta de Mobiliario", href: "/service-page/renta-de-mobiliario" },
                      { label: "Coordinación y Diseño", href: "/service-page/coordinacion-produccion-y-diseno" },
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
            <p className="font-script text-script-md text-taupe-light mb-4">¿Sueñas con casarte en Cuatrociénegas?</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              Escríbenos y comenzamos a planear juntos la boda de tus sueños en uno de los escenarios más únicos de México.
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
