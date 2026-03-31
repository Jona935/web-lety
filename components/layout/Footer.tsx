"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

const pages = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

const services = [
  { label: "Bodas y XV Años", href: "/service-page/bodas-y-xv-anos" },
  { label: "Diseño Floral", href: "/service-page/diseno-floral" },
  { label: "Renta de Mobiliario", href: "/service-page/renta-de-mobiliario" },
  { label: "Eventos Corporativos", href: "/service-page/eventos-corporativos" },
  { label: "Graduaciones", href: "/service-page/graduaciones-y-todo-evento-social" },
  { label: "Coordinación y Diseño", href: "/service-page/coordinacion-produccion-y-diseno" },
];

const seoPages = [
  { label: "Bodas en Cuatrociénegas", href: "/bodas-cuatro-cienegas" },
  { label: "Eventos en Monclova", href: "/eventos-monclova" },
  { label: "Diseño de Eventos", href: "/diseno-eventos" },
  { label: "Organizadores de Bodas", href: "/organizadores-bodas-monclova" },
  { label: "Wedding Planner Monclova", href: "/wedding-planner-monclova" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ebony text-cream/60" role="contentinfo">

      {/* CTA strip */}
      <div className="border-b border-cream/8">
        <div className="container-wide py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-script text-script-md text-taupe-light">
              Hagamos algo extraordinario
            </p>
            <p className="text-sm text-cream/60 mt-1">
              La primera consulta es gratuita y sin compromiso.
            </p>
          </div>
          <MagneticButton as="a" href="/contacto" className="btn-outline-light shrink-0">
            Cotizar mi evento
          </MagneticButton>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="Lety Maldonado Eventos">
              <Image
                src="/images/logo.png"
                alt="Lety Maldonado Eventos"
                width={80}
                height={56}
                className="brightness-0 invert opacity-70 object-contain mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              Planeación, Organización, Logística, Decoración, Renta de Mobiliario, Mantelería y Banquetes en Monclova, Cuatrociénegas y Minas de Mármol, Coahuila.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/letymaldonadoeventos"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook Lety Maldonado Eventos"
                className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-cream/60 hover:text-cream transition-colors"
              >
                <Facebook size={13} aria-hidden="true" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/letymaldonado/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram @letymaldonado"
                className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-cream/60 hover:text-cream transition-colors"
              >
                <Instagram size={13} aria-hidden="true" /> @letymaldonado
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="label text-taupe-light mb-5">Servicios</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Pages */}
          <div>
            <p className="label text-taupe-light mb-5">Cobertura</p>
            <ul className="space-y-2.5">
              {seoPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="label text-taupe-light mb-5">Navegación</p>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-taupe-light mb-5">Contacto</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:+528666335252" className="flex items-start gap-3 text-sm text-cream/60 hover:text-cream transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  (866) 633-5252
                </a>
              </li>
              <li>
                <a href="https://wa.me/528662532615" className="flex items-start gap-3 text-sm text-cream/60 hover:text-cream transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  WhatsApp (866) 253-2615
                </a>
              </li>
              <li>
                <a href="mailto:eventosletymaldonado@gmail.com" className="flex items-start gap-3 text-sm text-cream/60 hover:text-cream transition-colors">
                  <Mail size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  eventosletymaldonado@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cream/60">
                  <MapPin size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  Cuauhtémoc 119, Col. El Pueblo<br />C.P. 25730 Monclova, Coahuila
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/8">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/25">
            © {year} Lety Maldonado Eventos
          </p>
          <p className="text-xs text-cream/25">
            Monclova, Coahuila · México
          </p>
        </div>
      </div>
    </footer>
  );
}
