import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Bodas en Cuatrociénegas | Lety Maldonado Eventos",
  description:
    "Organizadora de bodas destino en Cuatrociénegas, Coahuila. Bodas bajo las estrellas, XV años y bodas destino con planeación integral, decoración y coordinación.",
};

const highlights = [
  "Conocemos los mejores venues de Cuatrociénegas y la región",
  "Coordinación de proveedores locales y de Monclova",
  "Logística de transporte para invitados foráneos",
  "Decoración adaptada al entorno desértico y natural",
  "Más de 11 años realizando eventos en Coahuila",
  "Soporte el día del evento con equipo completo",
];

const events = [
  {
    title: "Bodas Destino",
    desc: "Cuatrociénegas es el escenario perfecto para una boda destino. Sus paisajes desérticos únicos en México, cielos estrellados incomparables y pozas de agua cristalina crean una atmósfera mágica que ningún otro lugar puede ofrecer. Coordinamos todo para que tus invitados lleguen, disfruten y recuerden tu día para siempre.",
    img: "/images/real/cuatro-violinista.jpg",
  },
  {
    title: "XV Años en Cuatrociénegas",
    desc: "Celebra los quince años más especiales en un entorno que sorprenderá a todos tus invitados. Desde la ceremonia hasta la última pieza musical, coordinamos cada detalle con el cuidado que tu celebración merece. Organizamos la logística completa para que tu familia y amigos disfruten sin preocupaciones.",
    img: "/images/real/minas-tarde.jpg",
  },
];

export default function BodasCuatrocienegasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream-warm relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/real/minas-atardecer.jpg"
            alt="Boda destino en Cuatrociénegas"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-warm/95 via-cream-warm/60 to-cream-warm/20" />
        </div>
        <span className="lm-watermark right-0 top-1/2 -translate-y-1/2 translate-x-1/3 z-0" aria-hidden="true">LM</span>
        <div className="container-narrow relative z-10 pb-4">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Bodas Destino · Cuatrociénegas · Coahuila</p>
            <h1 className="font-serif text-display-lg text-ebony font-light leading-tight mb-5">
              Bodas en<br />
              <span className="text-taupe">Cuatrociénegas</span>
            </h1>
            <span className="divider mb-6 block" aria-hidden="true" />
            <p className="font-sans font-light tracking-[0.22em] uppercase text-sm text-taupe">Un escenario único para tu gran día</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-cream-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-20">

              {/* Event types */}
              {events.map((ev, i) => (
                <AnimatedSection key={ev.title} delay={i * 120} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm">
                      <Image src={ev.img} alt={ev.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="label text-taupe mb-3">
                      {i === 0 ? "Bodas Destino" : "XV Años"}
                    </p>
                    <h2 className="font-serif text-display-sm text-ebony font-light mb-4">{ev.title}</h2>
                    <span className="divider mb-5 block" aria-hidden="true" />
                    <p className="text-ebony-muted leading-relaxed text-sm">{ev.desc}</p>
                  </div>
                </AnimatedSection>
              ))}

              {/* Testimonial — Stephanie & Hector */}
              <AnimatedSection delay={200}>
                <div className="bg-cream-warm border border-taupe/15 p-10 md:p-14 relative overflow-hidden">
                  <span className="absolute top-6 left-8 font-serif text-[8rem] leading-none text-taupe/15 select-none" aria-hidden="true">&ldquo;</span>
                  <blockquote className="relative z-10">
                    <p className="font-serif text-xl md:text-2xl text-ebony font-light italic leading-snug mb-8">
                      Con toda tranquilidad dejé todo en manos de Lety. Lo más importante de mi boda quedó
                      en las mejores manos posibles. Cuatro Ciénegas fue el escenario más mágico que pudimos imaginar.
                    </p>
                    <footer className="flex items-center gap-4">
                      <span className="h-px w-8 bg-taupe" aria-hidden="true" />
                      <div>
                        <p className="font-sans font-medium text-ebony text-sm">Stephanie &amp; Hector</p>
                        <p className="label text-xs mt-0.5">Boda Destino · Cuatrociénegas</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Why Cuatro Ciénegas */}
              <AnimatedSection delay={100}>
                <h2 className="font-serif text-2xl text-ebony font-light mb-6">¿Por qué casarse en Cuatrociénegas?</h2>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ebony-muted">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-taupe" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Coverage grid */}
              <AnimatedSection delay={150}>
                <p className="label text-taupe mb-6">Cobertura regional</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Cuatrociénegas", desc: "Sede principal con venues exclusivos y paisajes únicos del desierto chihuahuense." },
                    { title: "Minas de Mármol", desc: "Espacios naturales impresionantes a pocos minutos de Cuatrociénegas." },
                    { title: "Monclova", desc: "Capital regional con amplia oferta de venues, hoteles y proveedores especializados." },
                    { title: "Región Noreste", desc: "Coordinamos bodas en toda Coahuila con logística de proveedores de Saltillo y Monterrey." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-taupe/30 pl-5">
                      <h3 className="font-serif text-lg text-ebony font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-ebony-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200} className="sticky top-28 space-y-6">
                <div className="bg-cream-warm p-8 border border-cream-dark/40">
                  <p className="label mb-4">Agenda tu consulta</p>
                  <p className="text-sm text-ebony-muted mb-6 leading-relaxed">
                    La primera consulta es gratuita. Cuéntanos tu visión y te ayudamos a encontrar el venue perfecto en Cuatrociénegas.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/528662532615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark w-full flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                      Cotizar por WhatsApp
                    </a>
                    <Link href="/contacto" className="btn-outline-dark w-full flex items-center justify-center gap-3">
                      Ver formulario de contacto
                    </Link>
                  </div>
                </div>

                <div className="p-6 border border-cream-dark/40">
                  <p className="label mb-4">Servicios relacionados</p>
                  <ul className="space-y-2">
                    {[
                      { label: "Bodas y XV Años", href: "/servicios#bodas-xv" },
                      { label: "Diseño Floral", href: "/servicios#diseno-floral" },
                      { label: "Renta de Mobiliario", href: "/catalogo" },
                      { label: "Coordinación y Diseño", href: "/servicios#coordinacion" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="text-sm text-ebony-muted hover:text-ebony transition-colors">
                          → {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="section-padding-sm bg-taupe">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="font-sans font-light tracking-[0.22em] uppercase text-sm text-cream mb-4">¿Sueñas con casarte en Cuatrociénegas?</p>
            <p className="text-cream/70 text-sm mb-8 max-w-md mx-auto">
              Escríbenos y comenzamos a planear juntos la boda de tus sueños en uno de los escenarios más únicos de México.
            </p>
            <a href="https://wa.me/528662532615" target="_blank" rel="noopener noreferrer" className="btn-outline-light inline-flex items-center gap-3">
              <MessageCircle size={14} aria-hidden="true" />
              Escribir a WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
