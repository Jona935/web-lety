"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

const services = [
  { label: "Bodas y XV Años", href: "/servicios#bodas-xv" },
  { label: "Diseño Floral", href: "/servicios#diseno-floral" },
  { label: "Renta de Mobiliario", href: "/catalogo" },
  { label: "Eventos Corporativos", href: "/servicios#corporativos" },
  { label: "Graduaciones", href: "/servicios#graduaciones" },
  { label: "Coordinación y Diseño", href: "/servicios#coordinacion" },
];

const navPages = [
  { href: "/nosotros", label: "Quién Soy?" },
  { href: "/servicios", label: "Servicios" },
  { href: "/diseno-eventos", label: "Diseño de Eventos" },
  { href: "/bodas-cuatro-cienegas", label: "Eventos Cuatro Ciénegas" },
  { href: "/portafolio", label: "Galería" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "Preguntas Frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream-warm text-ebony-muted" role="contentinfo">

      {/* CTA strip */}
      <div className="border-b border-ebony/10">
        <div className="container-wide py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sans font-light tracking-[0.22em] uppercase text-sm text-taupe">
              Hagamos algo extraordinario
            </p>
            <p className="text-sm text-ebony-muted mt-1">
              La primera consulta es gratuita y sin compromiso.
            </p>
          </div>
          <MagneticButton as="a" href="/contacto" className="btn-dark shrink-0">
            Cotizar mi evento
          </MagneticButton>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="Lety Maldonado Eventos — Inicio" className="inline-block mb-5">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl tracking-wide text-ebony/90">
                  Lety Maldonado
                </span>
                <span className="font-sans font-light tracking-[0.22em] uppercase text-xs text-taupe mt-0.5">
                  Wedding Planner
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ebony-muted mb-6">
              Planeación, Decoración, Diseño Floral, Mobiliario y Banquetes en Monclova, Cuatrociénegas y Minas de Mármol, Coahuila.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/letymaldonadoeventos"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook Lety Maldonado Eventos"
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-ebony-muted hover:text-ebony transition-colors"
              >
                <Facebook size={13} aria-hidden="true" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/letymaldonado/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram @letymaldonado"
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-ebony-muted hover:text-ebony transition-colors"
              >
                <Instagram size={13} aria-hidden="true" /> @letymaldonado
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="label text-taupe mb-5">Servicios</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="label text-taupe mb-5">Navegación</p>
            <ul className="space-y-2.5">
              {navPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-taupe mb-5">Contacto</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:+528666335252" className="flex items-start gap-3 text-sm text-ebony-muted hover:text-ebony transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  (866) 633-5252
                </a>
              </li>
              <li>
                <a href="https://wa.me/528662532615" className="flex items-start gap-3 text-sm text-ebony-muted hover:text-ebony transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  WhatsApp (866) 253-2615
                </a>
              </li>
              <li>
                <a href="mailto:eventosletymaldonado@gmail.com" className="flex items-start gap-3 text-sm text-ebony-muted hover:text-ebony transition-colors">
                  <Mail size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  eventosletymaldonado@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-ebony-muted">
                  <MapPin size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  Cuauhtémoc 119, Col. El Pueblo<br />C.P. 25730 Monclova, Coahuila
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ebony/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ebony/30">
            © {year} Lety Maldonado Eventos
          </p>
          <p className="text-xs text-ebony/30">
            Monclova, Coahuila · México
          </p>
        </div>
      </div>
    </footer>
  );
}
