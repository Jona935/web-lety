import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Organizadores de Bodas en Monclova | La Magnolia",
  description:
    "Los mejores organizadores de bodas en Monclova, Coahuila. La Magnolia: más de 10 años planeando bodas únicas con atención personalizada y coordinación integral.",
};

const faqs = [
  {
    q: "¿Cuánto tiempo antes debo contratar una organizadora de bodas?",
    a: "Lo ideal es entre 12 y 18 meses antes de la boda. Sin embargo, si tu fecha es en menos de 6 meses, también podemos ayudarte con coordinación parcial o day-of coordination.",
  },
  {
    q: "¿Trabajan con proveedores que yo ya tengo contratados?",
    a: "Sí. En nuestro servicio de coordinación parcial trabajamos perfectamente con los proveedores que ya tengas. Simplemente tomamos las riendas de la coordinación.",
  },
  {
    q: "¿Tienen cobertura fuera de Monclova?",
    a: "Sí. Coordinamos bodas en Cuatrociénegas, Minas de Mármol, Saltillo y otras ciudades de Coahuila y la región noreste.",
  },
  {
    q: "¿La primera consulta tiene costo?",
    a: "No. La primera consulta es completamente gratuita y sin compromiso. Es una sesión para conocernos y evaluar si somos el equipo adecuado para tu boda.",
  },
];

export default function OrganizadoresBodasMonclovaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">Wedding Planners · Monclova · Coahuila</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              Organizadores de Bodas en Monclova
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-script text-script-md text-taupe-light">Más de 10 años haciendo bodas inolvidables</p>
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
                  Somos La Magnolia, el equipo de organizadores de bodas de mayor trayectoria en Monclova, Coahuila. Con más de una década de experiencia, hemos acompañado a cientos de parejas en uno de los días más importantes de sus vidas.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Organizamos bodas con un enfoque completamente personalizado: cada boda que coordinamos es única, refleja la personalidad de la pareja y está pensada hasta el último detalle para que todo fluya perfectamente el día del evento.
                </p>
                <p className="text-ebony-muted leading-relaxed text-base mt-4">
                  Desde la selección del venue hasta la coordinación de todos los proveedores, el diseño floral, el mobiliario y la supervisión del día, somos el equipo que necesitas para tener la boda de tus sueños sin el estrés de organizarla sola.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <SectionHeading script="Nuestros" title="Paquetes de Boda" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      title: "Wedding Planning Completo",
                      desc: "Nos encargamos de absolutamente todo desde el día uno. Tú solo disfrutas el proceso y el evento.",
                    },
                    {
                      title: "Coordinación Parcial",
                      desc: "Ya tienes algunos proveedores. Tomamos el control de la coordinación para garantizar que todo encaje perfectamente.",
                    },
                    {
                      title: "Day-Of Coordination",
                      desc: "Coordinación exclusiva el día del evento. Nuestro equipo llega y garantiza que nada salga mal.",
                    },
                    {
                      title: "Diseño + Coordinación",
                      desc: "La combinación perfecta: creamos el concepto visual de tu boda y lo coordinamos de principio a fin.",
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
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">Lo que incluye nuestra coordinación</h2>
                <ul className="space-y-3">
                  {[
                    "Consulta inicial gratuita y planeación personalizada",
                    "6 sesiones de seguimiento durante la planeación",
                    "Contacto permanente por WhatsApp con tu coordinadora",
                    "Gestión y negociación con todos los proveedores",
                    "Elaboración de itinerario maestro y protocolo",
                    "Supervisión de montaje y desmontaje",
                    "Coordinación completa el día de la boda",
                    "Asistente de coordinación adicional",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection delay={200}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-cream-dark/30 pb-6">
                      <h3 className="font-serif text-base text-ebony font-medium mb-2">{faq.q}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={250} className="sticky top-28">
                <div className="bg-cream-warm p-8 border border-cream-dark/40">
                  <p className="label mb-4">Primera consulta gratuita</p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    Sin costo y sin compromiso. Cuéntanos tu historia y vemos juntos cómo hacer que tu boda sea perfecta.
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
                  <p className="label mb-4">También organizamos</p>
                  <ul className="space-y-2">
                    {[
                      { label: "XV Años", href: "/service-page/bodas-y-xv-anos" },
                      { label: "Eventos Corporativos", href: "/service-page/eventos-corporativos" },
                      { label: "Graduaciones", href: "/service-page/graduaciones-y-todo-evento-social" },
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
            <p className="font-script text-script-md text-taupe-light mb-4">Tu boda perfecta comienza aquí</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              Escríbenos hoy. La primera consulta es gratuita y sin compromiso.
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
