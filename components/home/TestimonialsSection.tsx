"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Ana & Roberto García",
    event: "Boda · Monclova, 2024",
    text: "Lety convirtió nuestra boda en algo más hermoso de lo que jamás imaginamos. Su metodología nos dio tranquilidad desde el primer día. Cada momento estuvo perfectamente coordinado.",
  },
  {
    id: 2,
    name: "Fernanda Rodríguez",
    event: "Quinceañera · Cuatrociénegas, 2024",
    text: "La quinceañera de mi hija fue absolutamente mágica. El equipo de La Magnolia se encargó de absolutamente todo. No tuvimos que preocuparnos por nada.",
  },
  {
    id: 3,
    name: "Carlos & Valentina Morales",
    event: "Boda · Minas de Mármol, 2023",
    text: "Viajamos desde Monterrey para casarnos y Lety coordinó todo a la perfección. El servicio fue completamente integral y siempre estuvo disponible cuando la necesitamos.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const t = testimonials[current];

  return (
    <section className="section-padding bg-cream-light relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Watermark */}
      <span className="lm-watermark right-0 top-1/2 -translate-y-1/2 translate-x-1/3" aria-hidden="true">LM</span>

      <div className="container-narrow relative z-10">
        <SectionHeading
          script="Testimonios"
          title="Lo que dicen"
          titleItalic="nuestras parejas"
        />

        <AnimatedSection>
          {/* Large opening quote */}
          <p className="font-serif text-[8rem] leading-none text-taupe/10 select-none mb-2" aria-hidden="true">"</p>

          <blockquote
            key={t.id}
            className="font-serif text-display-sm text-ebony font-light italic leading-snug mb-10 max-w-3xl"
          >
            {t.text}
          </blockquote>

          <div className="flex items-center gap-6">
            <div className="h-px w-10 bg-taupe" aria-hidden="true" />
            <div>
              <p className="font-sans font-medium text-ebony text-sm">{t.name}</p>
              <p className="label text-[9px] mt-0.5">{t.event}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-5 mt-12">
            <button
              onClick={() => setCurrent((c) => (c - 1 + total) % total)}
              className="w-10 h-10 border border-ebony/15 flex items-center justify-center text-ebony-muted hover:text-ebony hover:border-ebony transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={14} />
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonio ${i + 1}`}
                aria-current={i === current}
                className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-ebony" : "w-3 bg-ebony/20"}`}
              />
            ))}

            <button
              onClick={() => setCurrent((c) => (c + 1) % total)}
              className="w-10 h-10 border border-ebony/15 flex items-center justify-center text-ebony-muted hover:text-ebony hover:border-ebony transition-all duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
