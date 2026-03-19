"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-ebony"
      aria-label="La Magnolia — Wedding & Event Planner"
    >
      {/* Background media */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loop muted playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* <source src="/video/hero.mp4" type="video/mp4" /> */}
        </video>
        {/* Fallback rich dark gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-ebony via-ebony-light to-[#1a1410]"
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ebony/90 via-transparent to-ebony/30"
          aria-hidden="true"
        />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent" />
      </div>

      {/* Main content — centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-20">

        {/* LM Monogram watermark */}
        <span className="lm-watermark-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
          LM
        </span>

        {/* Logo */}
        <div
          className="mb-10 md:mb-14"
          style={{ opacity: 0, animation: "fadeIn 1.4s ease 0.2s forwards" }}
        >
          <Image
            src="/images/logo.png"
            alt="La Magnolia Wedding Planners"
            width={130}
            height={90}
            className="brightness-0 invert mx-auto object-contain"
            priority
          />
        </div>

        {/* Divider line */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{ opacity: 0, animation: "fadeIn 1s ease 0.7s forwards" }}
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-cream/20" />
          <span className="h-1 w-1 rounded-full bg-taupe" />
          <span className="h-px w-12 bg-cream/20" />
        </div>

        {/* Script tagline */}
        <p
          className="font-script text-script-md text-cream/80 mb-4"
          style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards" }}
        >
          Casa de Eventos
        </p>

        {/* Main headline */}
        <h1
          className="font-serif text-display-lg text-cream-light font-light leading-none tracking-wide mb-6 max-w-4xl"
          style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.1s forwards" }}
        >
          Bodas & Eventos en{" "}
          <span className="italic">Monclova</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-cream/50 text-sm md:text-base leading-relaxed max-w-lg mb-12 font-sans font-light tracking-wide"
          style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.3s forwards" }}
        >
          Planeación · Decoración · Mobiliario · Banquetes<br />
          Monclova · Cuatrociénegas · Minas de Mármol
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.5s forwards" }}
        >
          <Link href="/contacto" className="btn-outline-light">
            Solicitar cotización
          </Link>
          <Link href="/portafolio" className="btn-ghost-light">
            Ver nuestro trabajo
          </Link>
        </div>
      </div>

      {/* Stats bottom bar */}
      <div
        className="relative z-10 border-t border-cream/10"
        style={{ opacity: 0, animation: "fadeIn 1s ease 1.8s forwards" }}
      >
        <div className="container-wide py-6">
          <div className="grid grid-cols-3 divide-x divide-cream/10">
            {[
              { value: "500+", label: "Eventos realizados" },
              { value: "10+", label: "Años de experiencia" },
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
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-28 right-8 z-10 flex flex-col items-center gap-2 text-cream/30 hover:text-cream/60 transition-colors"
        aria-label="Desplazar hacia abajo"
        style={{ opacity: 0, animation: "fadeIn 1s ease 2.2s forwards" }}
      >
        <span className="text-[8px] tracking-ultra uppercase rotate-90 origin-center mb-1">scroll</span>
        <ArrowDown size={12} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
