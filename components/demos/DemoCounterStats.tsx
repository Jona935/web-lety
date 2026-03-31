"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Eventos realizados" },
  { value: 11, suffix: "+", label: "Años de experiencia" },
  { value: 3, suffix: "", label: "Ciudades atendidas" },
  { value: 100, suffix: "%", label: "Clientes satisfechos" },
];

export default function DemoCounterStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const els = numRefs.current;
    const triggers: ScrollTrigger[] = [];

    els.forEach((el, i) => {
      if (!el) return;
      const obj = { val: 0 };
      const target = stats[i].value;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString();
            },
          });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div ref={sectionRef} className="bg-cream py-20 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center border-t-2 border-taupe/30 pt-6">
            <p className="font-serif text-5xl text-ebony font-light">
              <span
                ref={(el) => { numRefs.current[i] = el; }}
              >
                0
              </span>
              {stat.suffix}
            </p>
            <p className="text-xs tracking-widest uppercase text-ebony-muted mt-3 font-sans">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-ebony-muted mt-10">
        ↑ Haz scroll para ver los números contar
      </p>
    </div>
  );
}
