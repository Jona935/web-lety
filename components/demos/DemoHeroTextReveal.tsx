"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function DemoHeroTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  const runAnimation = () => {
    const el = containerRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word");
    const line = el.querySelector(".divider-line");
    const sub = el.querySelector(".sub");

    gsap.killTweensOf([words, line, sub]);
    gsap.set(words, { y: 60, opacity: 0 });
    gsap.set(line, { scaleX: 0, opacity: 0 });
    gsap.set(sub, { y: 20, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(words, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
    })
      .to(line, { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to(sub, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.4");
  };

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const timer = setTimeout(runAnimation, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-ebony py-24 px-8 text-center" ref={containerRef}>
      <p className="label text-taupe mb-6 opacity-100">Wedding &amp; Event Planner</p>
      <h2 className="font-serif text-5xl md:text-7xl text-cream font-light leading-tight overflow-hidden">
        {"Hagamos algo".split(" ").map((w, i) => (
          <span key={i} className="word inline-block mr-4">{w}</span>
        ))}
        <br />
        {"extraordinario".split("").map((c, i) => (
          <span key={i} className="word inline-block italic text-taupe-light" style={{ marginRight: c === " " ? "0.3em" : "0" }}>{c}</span>
        ))}
      </h2>
      <div
        className="divider-line mx-auto mt-8 mb-6 h-px w-24 bg-taupe origin-left"
        style={{ transformOrigin: "left center" }}
      />
      <p className="sub text-cream/50 text-base max-w-md mx-auto">
        Monclova · Cuatrociénegas · Minas de Mármol
      </p>
      <button
        onClick={runAnimation}
        className="mt-10 text-xs tracking-widest uppercase text-taupe/60 hover:text-taupe transition-colors border border-taupe/20 px-5 py-2"
      >
        ↻ Repetir animación
      </button>
    </div>
  );
}
