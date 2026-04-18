import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

interface Feature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  heroTag: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  features: Feature[];
  priceNote: string;
}

export default function ServicePageLayout({
  heroTag,
  title,
  subtitle,
  description,
  includes,
  features,
  priceNote,
}: ServicePageLayoutProps) {
  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-ebony relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ebony-light/60 to-ebony" aria-hidden="true" />
        <span className="lm-watermark-light right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="label-light mb-4">{heroTag}</p>
            <h1 className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
              {title}
            </h1>
            <span className="divider-light mb-6 block" aria-hidden="true" />
            <p className="font-serif italic font-light text-script-md text-taupe-light">{subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-cream-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-14">
              <AnimatedSection>
                {paragraphs.map((p, i) => (
                  <p key={i} className={`text-ebony-muted leading-relaxed text-base${i > 0 ? " mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">Lo que incluye</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <SectionHeading script="Nuestros" title="Servicios" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {features.map((f) => (
                    <div key={f.title} className="border-l-2 border-taupe/30 pl-5">
                      <h3 className="font-serif text-lg text-ebony font-medium mb-2">{f.title}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200} className="sticky top-28">
                <div className="bg-cream-warm p-8 border border-cream-dark/40">
                  <p className="label mb-4">Solicita tu cotización</p>
                  <p className="text-sm text-ebony-muted mb-2 leading-relaxed">
                    {priceNote}
                  </p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    La primera consulta es gratuita y sin compromiso.
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
            <p className="font-serif italic font-light text-script-md text-taupe-light mb-4">¿Te interesa este servicio?</p>
            <p className="text-cream/50 text-sm mb-8 max-w-md mx-auto">
              Escríbenos y te preparamos una propuesta personalizada.
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
