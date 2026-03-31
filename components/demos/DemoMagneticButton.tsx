"use client";

import { useRef, useCallback } from "react";
import { gsap } from "gsap";

export default function DemoMagneticButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    const txt = textRef.current;
    if (!btn || !txt) return;

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    gsap.to(btn, { x: dx * 0.35, y: dy * 0.35, duration: 0.4, ease: "power2.out" });
    gsap.to(txt, { x: dx * 0.15, y: dy * 0.15, duration: 0.4, ease: "power2.out" });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  }, []);

  return (
    <div className="bg-cream-warm py-24 flex flex-col items-center justify-center gap-12">
      <p className="text-sm text-ebony-muted">Acerca el cursor a los botones</p>

      <div className="flex flex-wrap gap-16 items-center justify-center">
        {/* Magnetic dark button */}
        <button
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative bg-ebony text-cream px-10 py-4 text-xs tracking-widest uppercase font-sans cursor-none"
        >
          <span ref={textRef} className="inline-block pointer-events-none">
            Agendar consulta
          </span>
        </button>

        {/* Static comparison */}
        <div className="text-center">
          <button className="bg-ebony text-cream px-10 py-4 text-xs tracking-widest uppercase font-sans opacity-30">
            Sin efecto
          </button>
          <p className="text-xs text-ebony-muted mt-2">normal</p>
        </div>
      </div>

      <p className="text-xs text-ebony-muted max-w-sm text-center leading-relaxed">
        El botón magnético genera una experiencia premium. Se usa en los CTAs principales
        como "Agendar consulta gratuita" o "Cotizar mi evento".
      </p>
    </div>
  );
}
