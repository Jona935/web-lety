"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const dividerLineRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        [
          logoRef,
          eyebrowRef,
          subtitleRef,
          ctasRef,
          statsRef,
          scrollIndicatorRef,
        ].forEach((ref) => {
          if (ref.current) gsap.set(ref.current, { opacity: 1, y: 0 });
        });
        if (videoWrapRef.current)
          gsap.set(videoWrapRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
        if (dividerLineRef.current)
          gsap.set(dividerLineRef.current, { scaleX: 1 });
        if (line1Ref.current)
          gsap.set(line1Ref.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
          });
        if (line2Ref.current)
          gsap.set(line2Ref.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
          });
        return;
      }

      const ease = "power3.out";

      /* ── Video clip-path reveal ── */
      gsap.fromTo(
        videoWrapRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "power4.inOut",
          delay: 0.2,
        }
      );

      /* ── Video inner scale (zoom out cinematic) ── */
      gsap.fromTo(
        videoInnerRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      /* ── Logo entrance ── */
      gsap.from(logoRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.1,
        ease,
        delay: 0.3,
      });

      /* ── Text stagger cascade ── */
      gsap.from(eyebrowRef.current, {
        opacity: 0,
        y: 14,
        duration: 0.9,
        ease,
        delay: 0.7,
      });

      /* Headline lines — clip reveal from bottom */
      gsap.fromTo(
        line1Ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: 20 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.0,
          ease,
          delay: 0.9,
        }
      );

      gsap.fromTo(
        line2Ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: 20 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.0,
          ease,
          delay: 1.1,
        }
      );

      /* Divider line scales in */
      gsap.fromTo(
        dividerLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.3,
        }
      );

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 14,
        duration: 0.9,
        ease,
        delay: 1.4,
      });

      gsap.from(ctasRef.current, {
        opacity: 0,
        y: 14,
        duration: 0.9,
        ease,
        delay: 1.6,
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 14,
        duration: 0.8,
        ease,
        delay: 1.8,
      });

      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.6,
        ease,
        delay: 2.2,
      });

      /* ── Logo scroll-out: fades up and hands off to nav logo ──
         immediateRender:false prevents conflict with entrance from() above.
         Explicit fromTo with from-values ensures scrub-reverse restores correctly. */
      gsap.fromTo(
        logoRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -20,
          ease: "power2.in",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "5% top",
            end: "16% top",
            scrub: true,
          },
        }
      );

      /* ── Parallax on video ── */
      gsap.fromTo(
        videoInnerRef.current,
        { yPercent: 0 },
        {
          yPercent: 10,
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
      className="relative min-h-[100dvh] flex flex-col bg-cream-light overflow-hidden"
      aria-label="Lety Maldonado Eventos — Wedding & Event Planner"
    >
      {/* ═══════════════════════════════════════════════════════════
          LAYOUT:
          • Mobile — video as absolute bg + cream overlay + centered text
          • Desktop — editorial split: text left (cream bg) / video right
          ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-12 lg:gap-0">

        {/* ── VIDEO PANEL ──
            Mobile: absolute full coverage behind text
            Desktop: right 7 columns with clip-path reveal */}
        <div className="
          absolute inset-0
          lg:relative lg:inset-auto lg:col-span-7 lg:col-start-6
          lg:h-auto lg:min-h-[600px]
          order-first lg:order-last
        ">
          <div
            ref={videoWrapRef}
            className="absolute inset-0 will-change-[clip-path]"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <div
              ref={videoInnerRef}
              className="absolute inset-[-12%] w-[124%] h-[124%] will-change-transform"
            >
              {/* Video background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/real/minas-recepcion-dorado.jpg"
              >
                <source src="/images/real/video-01.mp4" type="video/mp4" />
              </video>
              {/* Fallback image behind video */}
              <Image
                src="/images/real/minas-recepcion-dorado.jpg"
                alt=""
                fill
                className="object-cover -z-10"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                aria-hidden="true"
              />
            </div>

            {/* ── Overlays ── */}
            {/* Mobile: strong cream overlay for text legibility */}
            <div
              className="absolute inset-0 bg-cream-light/65 lg:bg-transparent pointer-events-none"
              aria-hidden="true"
            />
            {/* Desktop: cinematic gradient — strong filter that fades seamlessly, no hard line */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{
                inset: "-2px 0 0 -4px",
                background: "linear-gradient(to right, rgba(247,244,240,1) 0%, rgba(247,244,240,1) 3%, rgba(247,244,240,0.92) 8%, rgba(247,244,240,0.78) 16%, rgba(247,244,240,0.55) 30%, rgba(247,244,240,0.35) 42%, rgba(247,244,240,0.18) 55%, rgba(247,244,240,0.06) 70%, transparent 88%)"
              }}
              aria-hidden="true"
            />
            {/* Desktop: top edge softener — covers the top seam completely */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{
                inset: "-2px 0 auto -4px",
                height: "35%",
                background: "linear-gradient(to bottom, rgba(247,244,240,0.6) 0%, rgba(247,244,240,0.3) 50%, transparent 100%)"
              }}
              aria-hidden="true"
            />
            {/* Desktop: bottom vignette */}
            <div
              className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(247,244,240,0.35) 0%, transparent 25%)"
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── TEXT CONTENT ──
            Mobile: centered over video bg
            Desktop: left 5 columns, left-aligned, massive whitespace */}
        <div className="
          relative z-20
          lg:col-span-5 lg:col-start-1
          flex flex-col justify-center
          px-6 md:px-10 lg:px-16 xl:pl-24 xl:pr-8
          pt-24 pb-16 lg:pt-0 lg:pb-0
          text-center lg:text-left
          items-center lg:items-start
        ">
          {/* ─ Hero Logo ─ */}
          <div ref={logoRef} className="mb-6 lg:mb-10">
            <Image
              src="/images/logo-lm-dark.png"
              alt="LM — La Magnolia"
              width={400}
              height={335}
              priority
              className="w-36 md:w-44 lg:w-52 h-auto object-contain"
            />
          </div>

          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="font-sans font-medium tracking-[0.3em] uppercase text-[10px] lg:text-[11px] text-taupe mb-5 lg:mb-7"
          >
            Wedding & Event Planner
          </p>

          {/* Headline — 2 lines, clip reveal */}
          <h1 className="font-serif text-display-lg text-ebony font-light leading-[0.95] tracking-tight mb-0 max-w-3xl">
            <span ref={line1Ref} className="block will-change-transform">
              Bodas & Eventos
            </span>
            <span
              ref={line2Ref}
              className="block will-change-transform text-taupe mt-1 lg:mt-2"
            >
              Extraordinarios
            </span>
          </h1>

          {/* Divider */}
          <span
            ref={dividerLineRef}
            className="block h-px w-12 lg:w-16 bg-taupe/40 mt-7 lg:mt-10 mb-5 lg:mb-8 will-change-transform mx-auto lg:mx-0"
            aria-hidden="true"
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-ebony/65 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mb-8 lg:mb-10 font-sans font-light"
          >
            Bodas, XV años, bautizos, eventos corporativos y celebraciones
            sociales. Nos encargamos de cada detalle.
          </p>

          {/* CTAs */}
          <div
            ref={ctasRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link href="/contacto" className="btn-dark justify-center">
              Solicitar cotización
            </Link>
            <Link
              href="/portafolio"
              className="btn-ghost-dark justify-center"
            >
              Ver nuestro trabajo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom stats strip ── */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-ebony/8 bg-cream-light"
      >
        <div className="container-wide py-5 lg:py-8">
          <div className="grid grid-cols-3 divide-x divide-ebony/8">
            {[
              { value: "500+", label: "Eventos realizados" },
              { value: "11+", label: "Años de experiencia" },
              { value: "3", label: "Ciudades atendidas" },
            ].map((s) => (
              <div key={s.label} className="text-center px-2 md:px-4">
                <p className="font-serif text-xl md:text-3xl text-ebony/80 font-light tabular-nums">
                  {s.value}
                </p>
                <p className="label mt-1 text-[9px] md:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-24 lg:bottom-20 left-6 md:left-10 lg:left-16 xl:left-24 z-20 hidden lg:flex items-center gap-3"
        aria-hidden="true"
      >
        <span className="block w-px h-10 bg-ebony/20 animate-pulse" />
        <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-ebony/30">
          Scroll
        </span>
      </div>
    </section>
  );
}
