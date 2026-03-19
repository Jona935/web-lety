import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const highlights = [
  "Más de 10 años organizando bodas y eventos en Coahuila",
  "Metodología de 6 citas — sin improvisaciones, sin estrés",
  "Acompañamiento personalizado por WhatsApp entre citas",
  "Servicio en Monclova, Cuatrociénegas y Minas de Mármol",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream-light relative overflow-hidden" aria-labelledby="about-heading">
      {/* Watermark */}
      <span className="lm-watermark right-0 top-1/2 -translate-y-1/2 translate-x-1/4" aria-hidden="true">LM</span>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image area */}
          <AnimatedSection className="relative">
            {/* Main photo placeholder */}
            <div className="relative aspect-[3/4] bg-cream-warm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-warm to-cream-dark flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-serif text-5xl text-taupe/30 mb-4">LM</p>
                  <p className="text-[10px] tracking-mega uppercase text-taupe/50">
                    Fotografía de Lety Maldonado
                  </p>
                </div>
              </div>
              {/*
              <Image src="/images/lety.jpg" alt="Lety Maldonado" fill className="object-cover" />
              */}
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-ebony p-7 md:p-9">
              <p className="font-script text-3xl text-cream/80">10+</p>
              <p className="label-light text-[9px] mt-1">años de experiencia</p>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={180}>
            <p className="font-script text-script-md text-taupe mb-2">Bienvenida</p>
            <h2 id="about-heading" className="font-serif text-display-md text-ebony font-light leading-tight mb-5">
              Tu boda,<br />
              <span className="italic">sin improvisaciones</span>
            </h2>
            <span className="divider mb-7" aria-hidden="true" />

            <p className="text-ebony-muted leading-relaxed mb-4 text-base">
              A partir de este momento puedes estar tranquila. Estás en manos de
              un equipo experto que ha acompañado a muchas parejas en su camino
              hacia el gran día.
            </p>
            <p className="text-ebony-muted leading-relaxed mb-10 text-base">
              Nuestro propósito es que disfrutes cada etapa con paz y estilo,
              mientras nosotros nos ocupamos de la organización y los detalles.
              Trabajamos con una metodología clara de <strong className="text-ebony font-medium">6 citas</strong> que
              te permite avanzar con orden.
            </p>

            <ul className="space-y-3 mb-10" aria-label="Características">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/nosotros" className="btn-outline-dark">
              Conocer más
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
