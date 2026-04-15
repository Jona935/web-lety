import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const highlights = [
  "Más de 11 años organizando bodas y eventos en Coahuila",
  "Metodología de 6 citas — sin improvisaciones, sin estrés",
  "Acompañamiento personalizado por WhatsApp entre citas",
  "Certificada por la Association of Bridal Consultants (ABC)",
  "Servicio en Monclova, Cuatrociénegas y Minas de Mármol",
];

const certs = [
  { label: "ABC", full: "Association of Bridal Consultants" },
  { label: "AIFD", full: "American Institute of Floral Designers" },
  { label: "IMTF", full: "Instituto Mexicano Técnico Floral" },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream-light relative overflow-hidden" aria-labelledby="about-heading">
      {/* Watermark */}
      <span className="lm-watermark right-0 top-1/2 -translate-y-1/2 translate-x-1/4" aria-hidden="true">LM</span>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Image area */}
          <AnimatedSection className="relative lg:sticky lg:top-28">
            {/* Main photo */}
            <div className="relative aspect-[3/4] bg-cream-warm overflow-hidden">
              <Image
                src="/images/real/lety-quien-soy.jpg"
                alt="Lety Maldonado coordinando un evento"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-ebony p-7 md:p-9">
              <p className="font-script text-3xl text-cream/80">11+</p>
              <p className="label-light text-[9px] mt-1">años de experiencia</p>
            </div>

            {/* Certification strip */}
            <div className="absolute top-6 left-0 bg-cream/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3 shadow-sm">
              <Award size={13} className="text-taupe shrink-0" aria-hidden="true" />
              <p className="text-[10px] tracking-widest uppercase text-ebony-muted font-medium">Certified Wedding Planner</p>
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
            <p className="text-ebony-muted leading-relaxed mb-8 text-base">
              Nuestro propósito es que disfrutes cada etapa con paz y estilo,
              mientras nosotros nos ocupamos de la organización y los detalles.
              Trabajamos con una metodología clara de <strong className="text-ebony font-medium">6 citas</strong> que
              te permite avanzar con orden.
            </p>

            {/* Signature quote from old site */}
            <blockquote className="border-l-2 border-taupe pl-6 mb-10">
              <p className="font-script text-2xl text-taupe leading-snug">
                &ldquo;Con toda tranquilidad deja lo más importante en mis manos,
                yo me encargo de todo.&rdquo;
              </p>
              <footer className="mt-2 label text-[9px]">— Lety Maldonado</footer>
            </blockquote>

            <ul className="space-y-3 mb-10" aria-label="Características">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Certifications inline */}
            <div className="flex flex-wrap gap-3 mb-10" aria-label="Certificaciones">
              {certs.map((c) => (
                <div key={c.label} className="border border-ebony/10 px-4 py-2 flex items-center gap-2 bg-cream-warm">
                  <span className="font-serif text-sm text-ebony font-medium">{c.label}</span>
                  <span className="text-[10px] text-ebony-muted">{c.full}</span>
                </div>
              ))}
            </div>

            <Link href="/nosotros" className="btn-outline-dark">
              Conocer más sobre Lety
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
