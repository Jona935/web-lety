"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/nosotros", label: "Quién Soy?" },
  { href: "/servicios", label: "Servicios" },
  { href: "/bodas-cuatro-cienegas", label: "Eventos Cuatro Ciénegas" },
  { href: "/portafolio", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu when viewport grows past lg breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => { if (mq.matches) setMobileOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "bg-cream-light/95 backdrop-blur-md border-b border-ebony/5"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo — hidden on home hero, fades in on scroll */}
            <Link
              href="/"
              aria-label="La Magnolia Wedding Planners — Inicio"
              className={cn(
                "transition-all duration-700",
                transparent ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <Image
                src="/images/logo-lm-dark.png"
                alt="LM — La Magnolia"
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link text-ebony",
                    pathname === link.href && "text-taupe after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-ebony transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-cream-light flex flex-col transition-all duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <Image
            src="/images/logo-lm-dark.png"
            alt="LM — La Magnolia"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center border border-ebony/15 text-ebony/50 hover:text-ebony hover:border-ebony/30 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-ebony/8" aria-hidden="true" />

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-10 gap-1" aria-label="Menú móvil">
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-4 py-3 transition-colors",
              pathname === "/" ? "text-taupe" : "text-ebony/35 hover:text-ebony"
            )}
          >
            <span className="text-xs tracking-widest uppercase font-sans text-ebony/20 w-6">01</span>
            <span className="font-serif text-2xl font-light">Inicio</span>
          </Link>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-4 py-3 transition-colors",
                pathname === link.href ? "text-taupe" : "text-ebony/35 hover:text-ebony"
              )}
            >
              <span className="text-xs tracking-widest uppercase font-sans text-ebony/20 w-6">
                {String(i + 2).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl font-light">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="px-10 pb-8">
          <div className="h-px bg-ebony/8 mb-6" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a
                href="tel:+528666335252"
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-ebony/30 hover:text-ebony/60 transition-colors"
              >
                <Phone size={12} aria-hidden="true" />
                (866) 633-5252
              </a>
              <a
                href="https://wa.me/528662532615"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-ebony/30 hover:text-ebony/60 transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/letymaldonadoeventos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ebony/30 hover:text-ebony/60 transition-colors"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.instagram.com/letymaldonado/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ebony/30 hover:text-ebony/60 transition-colors"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
