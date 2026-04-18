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
      const ease = "power3.out";
      gsap.from(logoRef.current,       { opacity: 0, y: 24, duration: 1.1, ease, delay: 0.2 });
      gsap.from(dividerRef.current,    { opacity: 0, y: 24, duration: 0.8, ease, delay: 0.6 });
      gsap.from(taglineRef.current,    { opacity: 0, y: 24, duration: 0.9, ease, delay: 0.85 });
      gsap.from(headlineRef.current,   { opacity: 0, y: 24, duration: 1.0, ease, delay: 1.05 });
      gsap.from(subtitleRef.current,   { opacity: 0, y: 24, duration: 0.9, ease, delay: 1.3 });
      gsap.from(ctasRef.current,       { opacity: 0, y: 24, duration: 0.9, ease, delay: 1.5 });
      gsap.from(statsRef.current,      { opacity: 0, y: 24, duration: 0.8, ease, delay: 1.75 });
      gsap.from(scrollHintRef.current, { opacity: 0, y: 24, duration: 0.7, ease, delay: 2.1 });

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

      // Hero logo fades up as user scrolls — hands off to nav logo
      gsap.to(logoRef.current, {
        opacity: 0,
        y: -24,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "6% top",
          end: "18% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-cream-light"
      aria-label="Lety Maldonado Eventos — Wedding & Event Planner"
    >
      {/* Background — video + parallax fallback image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          poster="/images/real/minas-recepcion-dorado.jpg"
        >
          <source src="/images/real/video-01.mp4" type="video/mp4" />
        </video>
        <div ref={imgRef} className="absolute inset-[-12%] w-[124%] h-[124%] pointer-events-none">
          <Image
            src="/images/real/minas-recepcion-dorado.jpg"
            alt=""
            fill
            className="object-cover opacity-0"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-cream-warm/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/75 via-transparent to-cream-warm/20" aria-hidden="true" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-ebony/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-ebony/5 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-20">

        <span className="lm-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">LM</span>

        {/* Logo */}
        <div ref={logoRef} className="mb-10 md:mb-14 flex flex-col items-center leading-none gap-1">
          <span className="font-serif text-2xl md:text-3xl tracking-widest text-ebony/90">
            Lety Maldonado
          </span>
          <span className="font-serif italic font-light text-xl md:text-2xl text-taupe">
            Wedding Planner
          </span>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="flex items-center gap-4 mb-10" aria-hidden="true">
          <span className="h-px w-12 bg-ebony/20" />
          <span className="h-1 w-1 rounded-full bg-taupe" />
          <span className="h-px w-12 bg-ebony/20" />
        </div>

        {/* Script tagline */}
        <p ref={taglineRef} className="font-serif italic font-light text-script-md text-ebony/65 mb-4">
          Con toda tranquilidad, yo me encargo de todo
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-display-lg text-ebony font-light leading-none tracking-wide mb-6 max-w-4xl"
        >
          Bodas &amp; Eventos{" "}
          <span className="italic text-ebony/70">Extraordinarios</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-ebony/65 text-sm md:text-base leading-relaxed max-w-lg mb-12 font-sans font-light tracking-wide"
        >
          Planeación · Diseño Floral · Mobiliario · Banquetes<br />
          Monclova · Cuatrociénegas · Minas de Mármol
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto" className="btn-dark">
            Solicitar cotización
          </Link>
          <Link href="/portafolio" className="btn-outline-dark">
            Ver nuestro trabajo
          </Link>
        </div>
      </div>

      {/* Quote marquee strip */}
      <div className="relative z-10 border-y border-ebony/8 overflow-hidden py-3 bg-cream-warm/80 backdrop-blur-sm">
        <div
          className="flex gap-16 whitespace-nowrap animate-[marquee_28s_linear_infinite]"
          aria-hidden="true"
          style={{ willChange: "transform" }}
        >
          {[...Array(4)].map((_, rep) => (
            <span key={rep} className="flex items-center gap-16 shrink-0">
              <span className="font-serif italic font-light text-xl text-ebony/30">Con toda tranquilidad deja lo más importante en mis manos</span>
              <span className="text-taupe/50 text-xs tracking-widest">✦</span>
              <span className="font-serif italic font-light text-xl text-ebony/30">Yo me encargo de todo</span>
              <span className="text-taupe/50 text-xs tracking-widest">✦</span>
              <span className="font-serif italic font-light text-xl text-ebony/30">Monclova · Cuatrociénegas · Minas de Mármol</span>
              <span className="text-taupe/50 text-xs tracking-widest">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative z-10 border-t border-ebony/8">
        <div className="container-wide py-6">
          <div className="grid grid-cols-3 divide-x divide-ebony/8">
            {[
              { value: "500+", label: "Eventos realizados" },
              { value: "11+", label: "Años de experiencia" },
              { value: "3", label: "Ciudades atendidas" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="font-serif text-2xl text-ebony/80 font-light">{s.value}</p>
                <p className="label mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        ref={scrollHintRef}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-28 right-8 z-10 flex flex-col items-center gap-2 text-ebony/30 hover:text-ebony/60 transition-colors"
        aria-label="Scroll — Desplazar hacia abajo"
      >
        <span className="text-[8px] tracking-ultra uppercase rotate-90 origin-center mb-1">scroll</span>
        <ArrowDown size={12} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
