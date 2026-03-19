import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

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
  "Wedding Planner", "Event Planner",
  "Decoración", "Banquetes",
  "Renta de Mobiliario", "Mantelería",
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
            <p className="text-sm text-cream/40 mt-1">
              La primera consulta es gratuita y sin compromiso.
            </p>
          </div>
          <Link href="/contacto" className="btn-outline-light shrink-0">
            Cotizar mi evento
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="La Magnolia Eventos">
              <Image
                src="/images/logo.png"
                alt="La Magnolia Wedding Planners"
                width={80}
                height={56}
                className="brightness-0 invert opacity-70 object-contain mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/40 mb-6">
              Wedding & Event Planner en Monclova, Cuatrociénegas y Minas de Mármol, Coahuila.
            </p>
            <a
              href="https://instagram.com/letymaldonado"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram @letymaldonado"
              className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-cream/40 hover:text-cream transition-colors"
            >
              <Instagram size={13} aria-hidden="true" /> @letymaldonado
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="label text-taupe-light mb-5">Servicios</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/servicios" className="text-sm text-cream/40 hover:text-cream transition-colors">
                    {s}
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
                  <Link href={p.href} className="text-sm text-cream/40 hover:text-cream transition-colors">
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
                <a href="tel:+528661430043" className="flex items-start gap-3 text-sm text-cream/40 hover:text-cream transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  (866) 143-00-43
                </a>
              </li>
              <li>
                <a href="https://wa.me/528662532615" className="flex items-start gap-3 text-sm text-cream/40 hover:text-cream transition-colors">
                  <Phone size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  WhatsApp (866) 253-26-15
                </a>
              </li>
              <li>
                <a href="mailto:eventosletymaldonado@gmail.com" className="flex items-start gap-3 text-sm text-cream/40 hover:text-cream transition-colors">
                  <Mail size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  eventosletymaldonado@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cream/40">
                  <MapPin size={13} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                  Monterrey 806 Col. Guadalupe<br />Monclova, Coahuila
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
            © {year} La Magnolia Wedding Planners · Lety Maldonado Eventos
          </p>
          <p className="text-xs text-cream/25">
            Monclova, Coahuila · México
          </p>
        </div>
      </div>
    </footer>
  );
}
