import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Users, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsCounter from "@/components/nosotros/StatsCounter";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Lety Maldonado, wedding planner con más de 10 años de experiencia en Monclova, Cuatrociénegas y Minas de Mármol.",
};

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description:
      "Cada evento lo tratamos como si fuera el nuestro. Tu felicidad es nuestra motivación.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "No nos conformamos con lo bueno cuando podemos crear algo extraordinario.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description:
      "Estamos contigo desde la primera llamada hasta que la última vela se apaga.",
  },
];

const milestones = [
  { year: "2014", event: "Fundación de Lety Maldonado Eventos" },
  { year: "2016", event: "Primer gran evento en Cuatrociénegas" },
  { year: "2018", event: "Expansión a Minas de Mármol" },
  { year: "2020", event: "Superamos los 200 eventos realizados" },
  { year: "2022", event: "Premio a mejor event planner en Coahuila" },
  { year: "2024", event: "+500 eventos y seguimos creciendo" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-36 pb-20 bg-ebony relative overflow-hidden"
        aria-labelledby="nosotros-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-taupe/30 to-ebony"
          aria-hidden="true"
        />
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Quiénes somos</p>
            <h1
              id="nosotros-heading"
              className="font-serif text-display-lg text-cream font-light leading-tight"
            >
              Una historia de{" "}
              <span className="italic text-taupe-light">amor</span> por los eventos
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
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                  alt="Lety Maldonado — Wedding & Event Planner"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="label text-taupe mb-4">Mi historia</p>
              <h2 className="font-serif text-display-sm text-ebony font-light mb-6">
                Hola, soy <span className="italic text-taupe">Lety Maldonado</span>
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
                <span className="italic text-taupe">Detalle</span>
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

      {/* Values */}
      <section className="section-padding bg-cream-warm" aria-labelledby="values-heading">
        <div className="container-wide">
          <SectionHeading
            script="Nuestros valores"
            title="Lo que nos"
            titleItalic="define"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 120} className="text-center">
                  <div
                    className="w-14 h-14 border border-taupe/30 flex items-center justify-center mx-auto mb-6"
                    aria-hidden="true"
                  >
                    <Icon size={22} className="text-taupe" />
                  </div>
                  <h3 className="font-serif text-2xl text-ebony mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ebony-muted leading-relaxed">
                    {value.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-ebony" aria-labelledby="timeline-heading">
        <div className="container-narrow">
          <SectionHeading
            script="Nuestra trayectoria"
            title="Años de"
            titleItalic="historia"
            light={true}
          />
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-taupe/20"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={i * 100}
                  className={`relative flex ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    {i % 2 === 0 && (
                      <div>
                        <p className="font-serif text-4xl text-taupe/40 font-light">
                          {milestone.year}
                        </p>
                        <p className="text-cream/70 text-sm mt-1">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                  {/* Dot */}
                  <div
                    className="w-3 h-3 rounded-full bg-taupe shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 ml-2.5 md:ml-0"
                    aria-hidden="true"
                  />
                  <div className={`flex-1 pl-6 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="md:hidden">
                      <p className="font-serif text-3xl text-taupe/40 font-light">{milestone.year}</p>
                      <p className="text-cream/70 text-sm mt-1">{milestone.event}</p>
                    </div>
                    {i % 2 !== 0 && (
                      <div className="hidden md:block">
                        <p className="font-serif text-4xl text-taupe/40 font-light">
                          {milestone.year}
                        </p>
                        <p className="text-cream/70 text-sm mt-1">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-taupe">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-serif text-display-sm text-cream font-light mb-6">
              ¿Listas para crear algo{" "}
              <span className="italic">inolvidable</span>?
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
