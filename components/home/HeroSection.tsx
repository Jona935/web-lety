"use client";

import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — poster image shows as fallback
      });
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Bienvenida — Lety Maldonado Eventos"
    >
      {/* Background: Video / Photo */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with your actual video file */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* Add your video file here */}
          {/* <source src="/video/hero.mp4" type="video/mp4" /> */}
        </video>

        {/* Fallback gradient background when no video/image */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-wine via-charcoal to-charcoal"
          aria-hidden="true"
        />

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Decorative botanical accent */}
      <div
        className="absolute top-1/4 right-8 md:right-16 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-8 md:right-16 w-32 h-px bg-gradient-to-r from-gold/30 to-transparent mt-20"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 container-wide pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-4xl">
          {/* Overline */}
          <p
            className="overline-label text-gold mb-6 opacity-0 animate-fade-in delay-200"
            style={{ opacity: 0, animation: "fadeIn 1s ease 0.3s forwards" }}
          >
            Wedding Planner · Event Planner
          </p>

          {/* Main Headline */}
          <h1
            className="font-serif text-display-xl text-cream leading-none mb-4"
            style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards" }}
          >
            Tu evento,{" "}
            <span className="italic text-primary-light block mt-1">
              una obra de arte
            </span>
          </h1>

          {/* Gold divider line */}
          <div
            className="flex items-center gap-4 my-6"
            style={{ opacity: 0, animation: "fadeIn 1s ease 0.9s forwards" }}
            aria-hidden="true"
          >
            <span className="h-px bg-gold w-12" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-px bg-gold/40 w-24" />
          </div>

          {/* Subheadline */}
          <p
            className="text-cream/70 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-sans"
            style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.1s forwards" }}
          >
            Planeación, organización, decoración y banquetes para bodas y
            quinceañeras en Monclova, Cuatrociénegas y Minas de Mármol.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.3s forwards" }}
          >
            <Link href="/contacto" className="btn-primary">
              Cotizar mi evento
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/portafolio"
              className="btn-outline border-cream/40 text-cream hover:bg-cream hover:text-charcoal"
            >
              Ver portafolio
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="relative z-10 border-t border-cream/10 bg-charcoal/60 backdrop-blur-sm"
        style={{ opacity: 0, animation: "fadeIn 1.2s ease 1.6s forwards" }}
      >
        <div className="container-wide py-5">
          <div className="grid grid-cols-3 divide-x divide-cream/10">
            {[
              { value: "500+", label: "Eventos realizados" },
              { value: "10+", label: "Años de experiencia" },
              { value: "100%", label: "Satisfacción garantizada" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center px-4 py-2"
              >
                <p className="font-serif text-xl md:text-2xl text-gold font-light">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-wider uppercase text-cream/50 mt-0.5 font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-36 right-8 md:right-16 z-10 text-cream/40 hover:text-gold
          transition-colors duration-200 flex flex-col items-center gap-2"
        aria-label="Desplazar hacia abajo"
        style={{ opacity: 0, animation: "fadeIn 1s ease 2s forwards" }}
      >
        <span className="text-[9px] tracking-ultra-wide uppercase rotate-90 origin-center mb-2">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
