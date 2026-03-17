import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

const services = [
  "Wedding Planner",
  "Event Planner",
  "Decoración de Fiestas",
  "Renta de Mobiliario",
  "Mantelería",
  "Banquetes",
];

const pages = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80" role="contentinfo">
      {/* Top CTA Strip */}
      <div className="bg-wine py-12 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="overline-label text-gold/80 mb-3">Tu evento perfecto te espera</p>
          <h2 className="font-serif text-display-sm text-cream mb-6 font-light">
            Hagamos algo{" "}
            <span className="italic text-gold">extraordinario</span> juntos
          </h2>
          <Link href="/contacto" className="btn-primary bg-gold hover:bg-gold-dark text-charcoal">
            Solicitar cotización
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Lety Maldonado Eventos">
              <span className="font-serif text-2xl font-light tracking-widest text-cream">
                Lety Maldonado
              </span>
              <span className="block text-[9px] tracking-ultra-wide uppercase font-sans text-gold mt-0.5">
                Eventos
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              Soluciones integrales para tu evento en Monclova, Cuatrociénegas
              y Minas de Mármol.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Lety Maldonado Eventos"
                className="w-9 h-9 border border-cream/20 flex items-center justify-center
                  hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <Facebook size={14} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Lety Maldonado Eventos"
                className="w-9 h-9 border border-cream/20 flex items-center justify-center
                  hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <Instagram size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] tracking-ultra-wide uppercase font-medium text-gold mb-5">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[10px] tracking-ultra-wide uppercase font-medium text-gold mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] tracking-ultra-wide uppercase font-medium text-gold mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+528661395734"
                  className="flex items-start gap-3 text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  (866) 139-5734
                </a>
              </li>
              <li>
                <a
                  href="mailto:jonarios2511@gmail.com"
                  className="flex items-start gap-3 text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  jonarios2511@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cream/60">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  Monclova, Cuatrociénegas y Minas de Mármol, Coahuila
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/40">
            © {currentYear} Lety Maldonado Eventos. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/40 flex items-center gap-1.5">
            Hecho con <Heart size={10} className="text-primary" aria-hidden="true" /> en Monclova, México
          </p>
        </div>
      </div>
    </footer>
  );
}
