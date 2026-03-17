"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio", labelEn: "Home" },
  { href: "/nosotros", label: "Nosotros", labelEn: "About" },
  { href: "/servicios", label: "Servicios", labelEn: "Services" },
  { href: "/portafolio", label: "Portafolio", labelEn: "Portfolio" },
  { href: "/precios", label: "Precios", labelEn: "Pricing" },
  { href: "/faq", label: "FAQ", labelEn: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = isHome
    ? isScrolled
      ? "bg-cream/95 backdrop-blur-md shadow-sm"
      : "bg-transparent"
    : "bg-cream/95 backdrop-blur-md shadow-sm";

  const textColor = isHome && !isScrolled ? "text-white" : "text-charcoal";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          headerBg
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link
              href="/"
              className={cn(
                "flex flex-col items-start transition-colors duration-300",
                textColor
              )}
              aria-label="Lety Maldonado Eventos — Ir al inicio"
            >
              <span className="font-serif text-xl md:text-2xl font-light tracking-widest leading-none">
                Lety Maldonado
              </span>
              <span className="text-[9px] tracking-ultra-wide uppercase font-sans font-medium text-gold mt-0.5">
                Eventos
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Navegación principal"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link text-[10px]",
                    textColor,
                    pathname === link.href && "text-primary after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+528661395734"
                className={cn(
                  "flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:text-primary",
                  textColor
                )}
                aria-label="Llamar a Lety Maldonado"
              >
                <Phone size={14} aria-hidden="true" />
                <span className="tracking-wider">(866) 139-5734</span>
              </a>
              <Link href="/contacto" className="btn-primary text-[10px] py-2.5">
                Cotizar
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 transition-colors duration-200 hover:text-primary",
                textColor
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream flex flex-col justify-center transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav
          className="flex flex-col items-center gap-8 px-8"
          aria-label="Menú móvil"
        >
          <div className="mb-4">
            <span className="font-serif text-3xl font-light tracking-widest text-charcoal">
              Lety Maldonado
            </span>
            <span className="block text-center text-[9px] tracking-ultra-wide uppercase font-sans text-gold mt-1">
              Eventos
            </span>
          </div>

          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-serif font-light text-charcoal hover:text-primary transition-colors duration-200",
                pathname === link.href && "text-primary"
              )}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4">
            <Link href="/contacto" className="btn-primary">
              Cotizar mi evento
            </Link>
            <a
              href="tel:+528661395734"
              className="flex items-center gap-2 text-sm text-charcoal-light hover:text-primary transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              (866) 139-5734
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
