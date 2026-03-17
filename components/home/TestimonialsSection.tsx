"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Ana & Roberto García",
    event: "Boda · Monclova, 2024",
    rating: 5,
    text: "Lety convirtió nuestra boda en algo más hermoso de lo que jamás imaginamos. Su atención al detalle y su profesionalismo son incomparables. Cada momento estuvo perfectamente coordinado.",
  },
  {
    id: 2,
    name: "Fernanda Rodríguez",
    event: "Quinceañera · Cuatrociénegas, 2024",
    rating: 5,
    text: "La quinceañera de mi hija fue absolutamente mágica. Desde la decoración hasta el banquete, todo superó nuestras expectativas. Sin duda la mejor decisión fue confiar en Lety.",
  },
  {
    id: 3,
    name: "Carlos & Valentina Morales",
    event: "Boda · Minas de Mármol, 2023",
    rating: 5,
    text: "Viajamos desde Monterrey para casarnos en Minas de Mármol y Lety coordinó todo a la perfección. Un servicio completamente integral y siempre disponible cuando la necesitamos.",
  },
  {
    id: 4,
    name: "Sofía Martínez",
    event: "Quinceañera · Monclova, 2023",
    rating: 5,
    text: "El evento estuvo perfecto de principio a fin. La decoración era un sueño y el servicio de banquete impecable. Nuestros invitados siguen hablando de esa noche.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const testimonial = testimonials[current];

  return (
    <section
      className="section-padding bg-wine overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          overline="Lo que dicen"
          title="Historias que"
          titleItalic="nos inspiran"
          light={true}
        />

        <AnimatedSection className="relative">
          <div
            className="flex flex-col items-center text-center min-h-[320px] justify-center"
            key={testimonial.id}
          >
            {/* Quote Icon */}
            <Quote
              size={40}
              className="text-gold/30 mb-6"
              aria-hidden="true"
            />

            {/* Stars */}
            <div
              className="flex gap-1 mb-6"
              aria-label={`${testimonial.rating} de 5 estrellas`}
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-gold text-gold"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream font-light italic leading-relaxed max-w-3xl mb-8">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div>
              <p className="font-sans font-medium text-cream text-sm">
                {testimonial.name}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-gold/70 mt-1">
                {testimonial.event}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-cream/20 flex items-center justify-center
                text-cream/50 hover:text-cream hover:border-gold transition-all duration-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-cream/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-cream/20 flex items-center justify-center
                text-cream/50 hover:text-cream hover:border-gold transition-all duration-200"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
