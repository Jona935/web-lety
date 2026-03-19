import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section className="section-padding bg-ebony relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Watermark */}
      <span className="lm-watermark-light left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">LM</span>

      <div className="container-narrow relative z-10 text-center">
        <AnimatedSection>
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="La Magnolia Wedding Planners"
              width={80}
              height={56}
              className="brightness-0 invert opacity-60 object-contain"
            />
          </div>

          <p className="font-script text-script-md text-taupe-light mb-4">¿Lista para comenzar?</p>
          <h2 id="cta-heading" className="font-serif text-display-lg text-cream-light font-light leading-tight mb-5">
            Tu evento perfecto<br />
            <span className="italic">comienza aquí</span>
          </h2>
          <span className="divider-light block mx-auto mb-8" aria-hidden="true" />
          <p className="text-cream/50 text-sm leading-relaxed max-w-md mx-auto mb-10">
            La primera consulta es completamente gratuita y sin compromiso.
            Cuéntanos tu sueño y lo haremos realidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/contacto" className="btn-outline-light">
              Solicitar cotización gratuita
            </Link>
            <a href="tel:+528661430043" className="btn-ghost-light">
              <Phone size={12} aria-hidden="true" />
              (866) 143-00-43
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://instagram.com/letymaldonado"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram @letymaldonado"
              className="flex items-center gap-2 label-light hover:text-cream transition-colors"
            >
              <Instagram size={13} aria-hidden="true" /> @letymaldonado
            </a>
            <span className="w-px h-4 bg-cream/10" aria-hidden="true" />
            <a
              href="https://wa.me/528662532615"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="label-light hover:text-cream transition-colors"
            >
              WhatsApp (866) 253-26-15
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
