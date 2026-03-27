import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Heart, Users } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

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
          className="absolute inset-0 bg-gradient-to-br from-taupe/30 to-charcoal"
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
                {/* Replace with real image */}
                <div className="absolute inset-0 bg-gradient-to-br from-taupe/30 to-ebony/50 flex items-center justify-center">
                  <p className="text-cream/40 text-sm text-center px-6">
                    [ Fotografía de Lety Maldonado ]
                  </p>
                </div>
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
                  en el Instituto Mexicano Técnico Floral. Durante dos años iba y venía de
                  Monclova a Monterrey, me levantaba a las 4am para llegar a tiempo a mis
                  clases. Así logré terminar y crecer mis conocimientos en el tema.
                </p>
                <p>
                  Como me encantan los retos, obtuve una certificación por el AIFD (American
                  Institute of Floral Designers). Mi última certificación fue en junio 2021
                  con la Association of Bridal Consultants como Certified Wedding Planner.
                </p>
                <p>
                  Llevo más de 11 años dedicándome a la decoración de eventos, cientos de
                  bodas exitosas y todo tipo de eventos, siempre aprendiendo cosas nuevas,
                  asistiendo a congresos y cursos para ofrecerte las más nuevas tendencias.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { value: "500+", label: "Eventos realizados" },
                  { value: "11+", label: "Años de experiencia" },
                  { value: "3", label: "Ciudades atendidas" },
                  { value: "100%", label: "Clientes satisfechos" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-taupe pl-4">
                    <p className="font-serif text-3xl text-ebony font-light">
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-widest uppercase text-ebony-muted mt-1 font-sans">
                      {stat.label}
                    </p>
                  </div>
                ))}
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
      <section className="section-padding-sm bg-primary">
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
