"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/service-page/bodas-y-xv-anos", label: "Bodas y XV Años" },
  { href: "/service-page/diseno-floral", label: "Diseño Floral" },
  { href: "/service-page/renta-de-mobiliario", label: "Renta de Mobiliario" },
  { href: "/service-page/eventos-corporativos", label: "Eventos Corporativos" },
  { href: "/service-page/graduaciones-y-todo-evento-social", label: "Graduaciones" },
  { href: "/service-page/coordinacion-produccion-y-diseno", label: "Coordinación y Diseño" },
];

const locationLinks = [
  { href: "/bodas-cuatro-cienegas", label: "Bodas en Cuatrociénegas" },
  { href: "/eventos-monclova", label: "Eventos en Monclova" },
  { href: "/wedding-planner-monclova", label: "Wedding Planner Monclova" },
  { href: "/organizadores-bodas-monclova", label: "Organizadores de Bodas" },
  { href: "/diseno-eventos", label: "Diseño de Eventos" },
];

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
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

            {/* Logo */}
            <Link href="/" aria-label="La Magnolia Eventos — Inicio">
              <Image
                src="/images/logo.png"
                alt="La Magnolia Wedding Planners"
                width={90}
                height={60}
                className={cn(
                  "object-contain transition-all duration-500",
                  transparent ? "brightness-0 invert" : "brightness-0"
                )}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Principal">
              {/* Servicios dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "nav-link flex items-center gap-1",
                    transparent ? "text-cream-light after:bg-cream-light" : "text-ebony",
                    pathname.startsWith("/service-page") && "text-taupe after:w-full"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Servicios
                  <ChevronDown size={13} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-cream-light border border-ebony/8 shadow-lg min-w-[220px] py-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-2.5 text-sm text-ebony-muted hover:text-ebony hover:bg-cream-warm transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                      <div className="border-t border-ebony/8 mt-2 pt-2">
                        <Link
                          href="/servicios"
                          className="block px-5 py-2.5 text-xs text-taupe hover:text-ebony transition-colors font-medium"
                        >
                          Ver todos los servicios →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cobertura dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationOpen(true)}
                onMouseLeave={() => setLocationOpen(false)}
              >
                <button
                  className={cn(
                    "nav-link flex items-center gap-1",
                    transparent ? "text-cream-light after:bg-cream-light" : "text-ebony",
                    (pathname === "/bodas-cuatro-cienegas" || pathname === "/eventos-monclova" || pathname === "/wedding-planner-monclova" || pathname === "/organizadores-bodas-monclova" || pathname === "/diseno-eventos") && "text-taupe after:w-full"
                  )}
                  aria-expanded={locationOpen}
                  aria-haspopup="true"
                >
                  Cuatrociénegas
                  <ChevronDown size={13} className={cn("transition-transform duration-200", locationOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {locationOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-cream-light border border-ebony/8 shadow-lg min-w-[230px] py-2">
                      {locationLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-2.5 text-sm text-ebony-muted hover:text-ebony hover:bg-cream-warm transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link",
                    transparent ? "text-cream-light after:bg-cream-light" : "text-ebony",
                    pathname === link.href && "text-taupe after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/contacto"
                className={cn(
                  transparent ? "btn-outline-light" : "btn-dark"
                )}
              >
                Cotizar
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={cn(
                "lg:hidden p-2 transition-colors",
                transparent ? "text-cream-light" : "text-ebony"
              )}
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
          "fixed inset-0 z-40 bg-cream-light flex flex-col items-center justify-center transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="mb-12">
          <Image
            src="/images/logo.png"
            alt="La Magnolia Wedding Planners"
            width={100}
            height={70}
            className="brightness-0 object-contain"
          />
        </div>
        <nav className="flex flex-col items-center gap-6 w-full px-8" aria-label="Menú móvil">
          <Link href="/" className="font-serif text-2xl font-light text-ebony hover:text-taupe transition-colors">
            Inicio
          </Link>
          {/* Servicios group */}
          <div className="flex flex-col items-center gap-2 w-full">
            <Link href="/servicios" className="font-serif text-2xl font-light text-ebony hover:text-taupe transition-colors">
              Servicios
            </Link>
            <div className="flex flex-col items-center gap-1">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Cobertura group */}
          <div className="flex flex-col items-center gap-2 w-full">
            <span className="font-serif text-2xl font-light text-ebony">Cuatrociénegas</span>
            <div className="flex flex-col items-center gap-1">
              {locationLinks.map((s) => (
                <Link key={s.href} href={s.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-2xl font-light text-ebony hover:text-taupe transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <Link href="/contacto" className="btn-dark">
            Solicitar cotización
          </Link>
        </div>
      </div>
    </>
  );
}
