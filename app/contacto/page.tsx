import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para cotizar tu evento. Wedding planner en Monclova, Cuatrociénegas y Minas de Mármol. Respuesta en menos de 24 horas.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "(866) 633-5252",
    href: "tel:+528666335252",
    description: "Llamadas",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(866) 253-2615",
    href: "https://wa.me/528662532615",
    description: "Te respondemos muy rápido",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eventosletymaldonado@gmail.com",
    href: "mailto:eventosletymaldonado@gmail.com",
    description: "Respuesta en 24 horas",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Cuauhtémoc 119, Col. El Pueblo",
    href: null,
    description: "C.P. 25730 Monclova, Coahuila",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lun – Sáb, 9:00 – 20:00",
    href: null,
    description: "Domingos con cita previa",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream-warm">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Hablemos</p>
            <h1 className="font-serif text-display-lg text-ebony font-light">
              Comencemos a{" "}
              <span className="text-taupe">planear</span> juntos
            </h1>
            <p className="text-ebony-muted mt-6 max-w-lg mx-auto leading-relaxed">
              La primera consulta es completamente gratuita y sin compromiso.
              Cuéntanos tu sueño y lo haremos realidad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="label text-taupe mb-6">Información de contacto</p>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-4">
                        <div
                          className="w-9 h-9 border border-taupe/30 flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          <Icon size={14} className="text-taupe" />
                        </div>
                        <div>
                          <p className="text-xs tracking-widest uppercase font-medium text-ebony-muted mb-0.5">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm font-medium text-ebony hover:text-taupe transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-ebony">
                              {info.value}
                            </p>
                          )}
                          <p className="text-xs text-ebony-muted mt-0.5">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social */}
                <div>
                  <p className="label text-taupe mb-4">Redes sociales</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/letymaldonadoeventos"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook de Lety Maldonado Eventos"
                      className="flex items-center gap-2 text-xs text-ebony hover:text-taupe transition-colors duration-200 tracking-wider uppercase"
                    >
                      <Facebook size={14} aria-hidden="true" />
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/letymaldonado/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram de Lety Maldonado Eventos"
                      className="flex items-center gap-2 text-xs text-ebony hover:text-taupe transition-colors duration-200 tracking-wider uppercase"
                    >
                      <Instagram size={14} aria-hidden="true" />
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Coverage area */}
                <div className="mt-10">
                  <p className="label text-taupe mb-4">Área de servicio</p>
                  <div className="space-y-3">
                    {[
                      { city: "Monclova", detail: "Ciudad base · amplia red de proveedores" },
                      { city: "Cuatrociénegas", detail: "Bodas destino · paisajes únicos" },
                      { city: "Minas de Mármol", detail: "Espacios naturales exclusivos" },
                      { city: "Región Noreste", detail: "Coahuila · Saltillo · Monterrey" },
                    ].map((item) => (
                      <div key={item.city} className="flex items-start gap-3 py-3 border-b border-cream-dark/40 last:border-0">
                        <MapPin size={13} className="text-taupe shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-medium text-ebony">{item.city}</p>
                          <p className="text-xs text-ebony-muted mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={200}>
                <p className="label text-taupe mb-6">Solicitar cotización</p>
                <h2 className="font-serif text-2xl text-ebony font-light mb-8">
                  Cuéntanos sobre tu evento
                </h2>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="section-padding-sm bg-cream-warm">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-3">Agenda tu consulta</p>
            <h2 className="font-serif text-display-sm text-ebony font-light mb-4">
              Consulta inicial gratuita
            </h2>
            <p className="text-ebony-muted text-sm mb-6 max-w-md mx-auto">
              Agenda una videollamada o cita presencial de 30 minutos para
              conocernos y hablar sobre tu evento sin compromiso.
            </p>
            <a
              href="tel:+528666335252"
              className="btn-dark"
            >
              <Phone size={14} aria-hidden="true" />
              Llamar para agendar
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
