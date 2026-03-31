"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(
        [logoRef.current, dividerRef.current, taglineRef.current,
         headlineRef.current, subtitleRef.current, ctasRef.current,
         statsRef.current, scrollHintRef.current],
        { opacity: 0, y: 24 }
      );

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(logoRef.current,    { opacity: 1, y: 0, duration: 1.1 }, 0.2)
        .to(dividerRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.85)
        .to(headlineRef.current,{ opacity: 1, y: 0, duration: 1.0 }, 1.05)
        .to(subtitleRef.current,{ opacity: 1, y: 0, duration: 0.9 }, 1.3)
        .to(ctasRef.current,    { opacity: 1, y: 0, duration: 0.9 }, 1.5)
        .to(statsRef.current,   { opacity: 1, y: 0, duration: 0.8 }, 1.75)
        .to(scrollHintRef.current, { opacity: 1, y: 0, duration: 0.7 }, 2.1);

      // Parallax on background image
      gsap.fromTo(
        imgRef.current,
        { yPercent: 0 },
        {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-ebony"
      aria-label="Lety Maldonado Eventos — Wedding & Event Planner"
    >
      {/* Background — parallax target */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imgRef} className="absolute inset-[-12%] w-[124%] h-[124%]">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-ebony/50" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ebony/90 via-transparent to-ebony/40" aria-hidden="true" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-20">

        <span className="lm-watermark-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">LM</span>

        {/* Logo */}
        <div ref={logoRef} className="mb-10 md:mb-14">
          <Image
            src="/images/logo.png"
            alt="Lety Maldonado Eventos"
            width={130}
            height={90}
            className="brightness-0 invert mx-auto object-contain"
            priority
          />
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="flex items-center gap-4 mb-10" aria-hidden="true">
          <span className="h-px w-12 bg-cream/20" />
          <span className="h-1 w-1 rounded-full bg-taupe" />
          <span className="h-px w-12 bg-cream/20" />
        </div>

        {/* Script tagline */}
        <p ref={taglineRef} className="font-script text-script-md text-cream/80 mb-4">
          Soluciones para Tu Evento
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-display-lg text-cream-light font-light leading-none tracking-wide mb-6 max-w-4xl"
        >
          Bodas &amp; Eventos en{" "}
          <span className="italic">Monclova</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-cream/50 text-sm md:text-base leading-relaxed max-w-lg mb-12 font-sans font-light tracking-wide"
        >
          Planeación · Decoración · Mobiliario · Banquetes<br />
          Monclova · Cuatrociénegas · Minas de Mármol
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto" className="btn-outline-light">
            Solicitar cotización
          </Link>
          <Link href="/portafolio" className="btn-ghost-light">
            Ver nuestro trabajo
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative z-10 border-t border-cream/10">
        <div className="container-wide py-6">
          <div className="grid grid-cols-3 divide-x divide-cream/10">
            {[
              { value: "500+", label: "Eventos realizados" },
              { value: "11+", label: "Años de experiencia" },
              { value: "3", label: "Ciudades atendidas" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="font-serif text-2xl text-cream/80 font-light">{s.value}</p>
                <p className="label-light mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        ref={scrollHintRef}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-28 right-8 z-10 flex flex-col items-center gap-2 text-cream/30 hover:text-cream/60 transition-colors"
        aria-label="Scroll — Desplazar hacia abajo"
      >
        <span className="text-[8px] tracking-ultra uppercase rotate-90 origin-center mb-1">scroll</span>
        <ArrowDown size={12} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
