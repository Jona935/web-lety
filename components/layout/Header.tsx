"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/wedding-planner-monclova", label: "Wedding Planner Monclova" },
  { href: "/diseno-eventos", label: "Diseño Eventos" },
  { href: "/bodas-cuatro-cienegas", label: "Bodas Cuatro Ciénegas" },
  { href: "/organizadores-bodas-monclova", label: "Organizadores Bodas Monclova" },
  { href: "/eventos-monclova", label: "Eventos Monclova" },
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
            <Link href="/" aria-label="Lety Maldonado Eventos — Inicio">
              <Image
                src="/images/logo.png"
                alt="Lety Maldonado Eventos"
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
            <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
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
            alt="Lety Maldonado Eventos"
            width={100}
            height={70}
            className="brightness-0 object-contain"
          />
        </div>
        <nav className="flex flex-col items-center gap-6 w-full px-8" aria-label="Menú móvil">
          <Link href="/" className="font-serif text-2xl font-light text-ebony hover:text-taupe transition-colors">
            Inicio
          </Link>
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
      </div>
    </>
  );
}
