import Link from "next/link";
import { Phone, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-charcoal"
      aria-labelledby="cta-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <AnimatedSection className="text-center">
          <p className="overline-label text-gold mb-6">¿Lista para comenzar?</p>
          <h2
            id="cta-heading"
            className="font-serif text-display-lg text-cream font-light leading-tight mb-6"
          >
            Tu evento perfecto{" "}
            <span className="italic text-primary-light">comienza aquí</span>
          </h2>
          <span className="gold-line mb-8" aria-hidden="true" />
          <p className="text-cream/60 text-base leading-relaxed max-w-lg mx-auto mb-10">
            Cuéntame sobre tu visión. Te prepararemos una propuesta personalizada
            sin compromiso. La primera consulta es completamente gratuita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización gratuita
            </Link>
            <a
              href="tel:+528661395734"
              className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
            >
              <Phone size={14} aria-hidden="true" />
              Llamar ahora
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-cream/40">
            <div className="h-px w-16 bg-cream/20" aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-sans">
              Síguenos
            </span>
            <div className="h-px w-16 bg-cream/20" aria-hidden="true" />
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Lety Maldonado Eventos"
              className="flex items-center gap-2 text-cream/40 hover:text-gold transition-colors duration-200 text-xs tracking-widest uppercase font-sans"
            >
              <Facebook size={14} aria-hidden="true" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Lety Maldonado Eventos"
              className="flex items-center gap-2 text-cream/40 hover:text-gold transition-colors duration-200 text-xs tracking-widest uppercase font-sans"
            >
              <Instagram size={14} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
