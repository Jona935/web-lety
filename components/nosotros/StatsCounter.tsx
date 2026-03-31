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

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    numRefs.current.forEach((el, i) => {
      if (!el) return;
      const obj = { val: 0 };
      const target = stats[i].value;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2,
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
    <div ref={containerRef} className="grid grid-cols-2 gap-6 mt-10">
      {stats.map((stat, i) => (
        <div key={stat.label} className="border-l-2 border-taupe pl-4">
          <p className="font-serif text-3xl text-ebony font-light">
            <span ref={(el) => { numRefs.current[i] = el; }}>0</span>
            {stat.suffix}
          </p>
          <p className="text-xs tracking-widest uppercase text-ebony-muted mt-1 font-sans">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
