"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Search, Palette, ClipboardList, CheckSquare, PartyPopper } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Primera Consulta",
    desc: "Nos reunimos para conocer tu visión, fechas, número de invitados y sueños. Esta conversación es la base de todo tu evento.",
    icon: MessageCircle,
    phase: "Inicio",
  },
  {
    number: "02",
    title: "Selección de Venue y Proveedores",
    desc: "Visitamos el salón ideal, evaluamos propuestas y seleccionamos los proveedores más adecuados según tu estilo y presupuesto.",
    icon: Search,
    phase: "Exploración",
  },
  {
    number: "03",
    title: "Diseño y Concepto Visual",
    desc: "Definimos la paleta de colores, estilo de decoración, diseño floral y creamos tu moodboard personalizado.",
    icon: Palette,
    phase: "Diseño",
  },
  {
    number: "04",
    title: "Detalles y Logística",
    desc: "Construimos el cronograma, confirmamos cada servicio, gestionamos invitaciones y resolvemos cada detalle pendiente.",
    icon: ClipboardList,
    phase: "Organización",
  },
  {
    number: "05",
    title: "Revisión Final",
    desc: "Recorremos contigo cada detalle del plan. Una última reunión de calidad para llegar al gran día con total tranquilidad.",
    icon: CheckSquare,
    phase: "Confirmación",
  },
  {
    number: "06",
    title: "El Gran Día",
    desc: "Nuestro equipo coordina absolutamente todo. Tú solo disfruta — nosotros nos encargamos de que cada momento sea perfecto.",
    icon: PartyPopper,
    phase: "Tu día",
  },
];

export default function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    gsap.fromTo(
      line,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 75%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="section-padding bg-cream relative overflow-hidden" aria-labelledby="process-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #1C1916 40px, #1C1916 41px)" }}
      />

      <div className="container-wide relative z-10">
        <SectionHeading
          script="Metodología"
          title="6 citas,"
          titleItalic="un evento perfecto"
          subtitle="Una calendarización clara que te permite avanzar con orden, sin improvisaciones y sin estrés."
        />

        {/* Progress line — desktop only */}
        <div className="hidden lg:block relative mb-12" aria-hidden="true">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-ebony/8" />
          <div ref={lineRef} className="absolute left-0 right-0 top-1/2 h-px bg-taupe/50 origin-left" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={i * 90} className="relative group">
                <div className="p-8 border border-ebony/8 hover:border-taupe/30 transition-colors duration-500 h-full flex flex-col bg-cream-light">
                  {/* Phase label */}
                  <p className="label text-[9px] mb-5 opacity-60">{step.phase}</p>

                  {/* Number + Icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <p className="font-serif text-5xl font-light text-ebony/8 leading-none select-none">
                      {step.number}
                    </p>
                    <div className="w-9 h-9 border border-taupe/30 flex items-center justify-center group-hover:border-taupe/60 transition-colors">
                      <Icon size={15} className="text-taupe" />
                    </div>
                  </div>

                  <div className="w-8 h-px bg-taupe/50 mb-5" aria-hidden="true" />
                  <h3 className="font-serif text-xl text-ebony font-light mb-3">{step.title}</h3>
                  <p className="text-sm text-ebony-muted leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* WhatsApp note */}
        <AnimatedSection delay={600} className="mt-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 border border-ebony/8 bg-cream-warm">
            <div className="shrink-0">
              <p className="font-script text-3xl text-taupe">Entre citas…</p>
            </div>
            <div className="w-px h-10 bg-ebony/10 hidden md:block" aria-hidden="true" />
            <p className="text-sm text-ebony-muted leading-relaxed max-w-xl">
              Siempre estamos disponibles por <strong className="text-ebony font-medium">WhatsApp</strong> para resolver dudas entre citas.
              Este sistema evita reuniones innecesarias y mantiene todo en orden — el objetivo es que llegues
              al gran día con paz y total confianza.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
