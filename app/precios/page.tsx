import type { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Precios & Paquetes",
  description:
    "Paquetes de organización de eventos y bodas en Monclova. Planes para todos los presupuestos con servicio personalizado.",
};

const packages = [
  {
    name: "Esencial",
    tagline: "Para empezar a soñar",
    price: "Desde $15,000",
    currency: "MXN",
    description:
      "Perfecto para eventos más íntimos o quienes solo necesitan apoyo en aspectos específicos.",
    features: [
      "Consulta inicial y planificación",
      "Coordinación el día del evento",
      "Decoración básica del salón",
      "Renta de mantelería (hasta 10 mesas)",
      "Supervisión de 4 horas",
      "Asistente de coordinación",
    ],
    notIncluded: ["Banquete", "Mobiliario extra", "Flores frescas"],
    cta: "Cotizar Esencial",
    featured: false,
  },
  {
    name: "Elegance",
    tagline: "Nuestra joya más popular",
    price: "Desde $35,000",
    currency: "MXN",
    description:
      "El equilibrio perfecto entre lujo y valor. Incluye los elementos más importantes para un evento memorable.",
    features: [
      "Todo lo del plan Esencial",
      "Decoración completa del evento",
      "Flores frescas y arreglos",
      "Renta de mobiliario seleccionado",
      "Mantelería premium (sin límite)",
      "Coordinación completa de 8 horas",
      "2 asistentes de coordinación",
      "Mesa de dulces o candy bar",
    ],
    notIncluded: ["Banquete completo", "Fotografía/Video"],
    cta: "Cotizar Elegance",
    featured: true,
  },
  {
    name: "Grand",
    tagline: "La experiencia total",
    price: "Desde $65,000",
    currency: "MXN",
    description:
      "La experiencia completa e integral. Nos encargamos de absolutamente todo para que solo disfrutes.",
    features: [
      "Todo lo del plan Elegance",
      "Banquete completo (menú a elegir)",
      "Servicio completo de meseros",
      "Bar de bebidas",
      "Pastel de celebración",
      "Renta de todo el mobiliario",
      "Iluminación especializada",
      "Coordinación de 12 horas",
      "Equipo completo de coordinación",
    ],
    notIncluded: [],
    cta: "Cotizar Grand",
    featured: false,
  },
];

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-ebony">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Inversión en tu evento</p>
            <h1 className="font-serif text-display-lg text-cream font-light">
              Paquetes a tu{" "}
              <span className="italic text-taupe-light">medida</span>
            </h1>
            <p className="text-cream/60 text-base mt-6 max-w-xl mx-auto">
              Todos los precios son orientativos. Cada evento es único y recibe
              una cotización personalizada sin costo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <AnimatedSection
                key={pkg.name}
                delay={i * 120}
                className={`relative flex flex-col border ${
                  pkg.featured
                    ? "border-taupe bg-ebony text-cream shadow-2xl scale-[1.02]"
                    : "border-cream-warm bg-cream"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-taupe text-cream-light text-[9px] tracking-widest uppercase px-4 py-1 font-sans font-medium">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10 flex-1">
                  <p
                    className={`label mb-2 ${pkg.featured ? "text-taupe" : "text-taupe"}`}
                  >
                    {pkg.tagline}
                  </p>
                  <h2
                    className={`font-serif text-3xl font-light mb-4 ${
                      pkg.featured ? "text-cream" : "text-ebony"
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <div
                    className={`h-px w-10 mb-6 ${pkg.featured ? "bg-taupe" : "bg-taupe"}`}
                    aria-hidden="true"
                  />

                  <p
                    className={`font-serif text-4xl font-light mb-1 ${
                      pkg.featured ? "text-taupe" : "text-taupe"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={`text-xs tracking-widest uppercase mb-6 ${
                      pkg.featured ? "text-cream/50" : "text-ebony-muted"
                    }`}
                  >
                    {pkg.currency} · precio orientativo
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      pkg.featured ? "text-cream/70" : "text-ebony-muted"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          size={14}
                          className={`shrink-0 mt-0.5 ${
                            pkg.featured ? "text-taupe" : "text-taupe"
                          }`}
                          aria-hidden="true"
                        />
                        <span className={pkg.featured ? "text-cream/80" : "text-ebony"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm opacity-40"
                      >
                        <span className="w-3.5 h-0.5 bg-current shrink-0 mt-2" aria-hidden="true" />
                        <span className={pkg.featured ? "text-cream" : "text-ebony"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <Link
                    href="/contacto"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                      pkg.featured
                        ? "bg-taupe text-cream-light hover:bg-taupe-dark"
                        : "border border-charcoal text-ebony hover:bg-ebony hover:text-cream"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Note */}
          <AnimatedSection delay={300} className="mt-12 p-6 bg-cream-warm border-l-2 border-taupe">
            <div className="flex items-start gap-3">
              <HelpCircle size={16} className="text-taupe shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-ebony mb-1">
                  ¿Por qué los precios son orientativos?
                </p>
                <p className="text-sm text-ebony-muted leading-relaxed">
                  Cada evento es único: número de invitados, venue, temporada, servicios
                  adicionales y distancia afectan el precio final. Por eso ofrecemos
                  cotizaciones 100% personalizadas sin costo ni compromiso.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="mt-10 text-center">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización personalizada gratuita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
