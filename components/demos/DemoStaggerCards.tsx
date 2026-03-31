"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Flower2, Heart, Briefcase, GraduationCap, Armchair } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calendar, title: "Coordinación & Diseño", desc: "Soluciones integrales para tu evento" },
  { icon: Flower2, title: "Diseño Floral", desc: "Arreglos únicos para bodas y eventos" },
  { icon: Heart, title: "Bodas y XV Años", desc: "Tu día más especial en las mejores manos" },
  { icon: Briefcase, title: "Eventos Corporativos", desc: "Profesionalismo y elegancia" },
  { icon: GraduationCap, title: "Graduaciones", desc: "Celebra tus logros con estilo" },
  { icon: Armchair, title: "Renta de Mobiliario", desc: "Catálogo completo de alta calidad" },
];

export default function DemoStaggerCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".stagger-card");

    gsap.set(cards, { y: 50, opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={containerRef} className="bg-cream py-16 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="stagger-card bg-cream-warm p-8 group cursor-pointer hover:bg-ebony transition-colors duration-500"
            >
              <div className="w-10 h-10 border border-taupe/30 flex items-center justify-center mb-5 group-hover:border-taupe transition-colors">
                <Icon size={18} className="text-taupe" />
              </div>
              <h3 className="font-serif text-lg text-ebony group-hover:text-cream transition-colors mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-ebony-muted group-hover:text-cream/50 transition-colors leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs text-ebony-muted mt-8">
        ↑ Haz scroll hacia aquí para ver la entrada en cascada
      </p>
    </div>
  );
}
