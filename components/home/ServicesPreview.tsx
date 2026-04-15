import Link from "next/link";
import { Calendar, Flower2, UtensilsCrossed, Armchair, Briefcase, Heart, GraduationCap, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const services = [
  { icon: Heart, title: "Bodas y XV Años", desc: "Coordinación completa de tu boda o quinceañera. Desde el primer sí hasta el último baile, sin improvisaciones.", href: "/servicios#bodas-xv" },
  { icon: Calendar, title: "Coordinación, Producción y Diseño", desc: "Metodología de 6 citas para que cada detalle quede perfecto. Nos ocupamos de todo para que tú solo disfrutes.", href: "/servicios#coordinacion" },
  { icon: Flower2, title: "Diseño Floral", desc: "Arreglos únicos con flores frescas. Certificación AIFD e Instituto Mexicano Técnico Floral garantizan calidad de alto nivel.", href: "/servicios#diseno-floral" },
  { icon: UtensilsCrossed, title: "Banquetes", desc: "Servicio completo de banquete con menús elaborados, meseros profesionales y atención impecable.", href: "/servicios#coordinacion" },
  { icon: Briefcase, title: "Eventos Corporativos", desc: "Cenas de gala, aniversarios y reuniones empresariales con la misma dedicación que ponemos en cada boda.", href: "/servicios#eventos-corporativos" },
  { icon: GraduationCap, title: "Graduaciones y Eventos Sociales", desc: "Graduaciones, bautizos, aniversarios y toda celebración especial con diseño personalizado.", href: "/servicios#graduaciones" },
  { icon: Armchair, title: "Renta de Mobiliario", desc: "Sillas Tiffany, Chiavari, mesas, carpas, vajillas y mantelería premium. Entrega e instalación incluidas.", href: "/catalogo" },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-cream-warm relative overflow-hidden" aria-labelledby="services-heading">
      {/* Watermark */}
      <span className="lm-watermark left-0 top-1/2 -translate-y-1/2 -translate-x-1/4" aria-hidden="true">LM</span>

      <div className="container-wide relative z-10">
        <SectionHeading
          script="Servicios"
          title="Soluciones"
          titleItalic="integrales"
          subtitle="Todo lo que necesitas para tu evento especial, en un solo lugar."
        />

        {/* Featured top service */}
        <AnimatedSection className="mb-px">
          <Link
            href="/servicios#coordinacion"
            className="group flex flex-col md:flex-row items-start gap-0 bg-cream border border-ebony/8 hover:border-taupe/30 transition-colors duration-400 overflow-hidden"
          >
            <div className="flex-1 p-10 md:p-14">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center border border-taupe/40 group-hover:border-taupe transition-colors duration-300" aria-hidden="true">
                  <Calendar size={14} className="text-taupe" />
                </div>
                <span className="h-px w-6 bg-taupe/40 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
                <span className="label text-[9px] opacity-60">Servicio destacado</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ebony font-light mb-3 group-hover:text-ebony-dark transition-colors">
                Coordinación, Producción y Diseño
              </h3>
              <p className="text-sm text-ebony-muted leading-relaxed max-w-xl group-hover:text-ebony transition-colors">
                Metodología de 6 citas para que cada detalle quede perfecto. Nos ocupamos de todo para que tú solo disfrutes.
              </p>
            </div>
            <div className="md:w-48 lg:w-64 flex items-center justify-center p-10 border-t md:border-t-0 md:border-l border-ebony/8 self-stretch">
              <div className="flex items-center gap-2 label group-hover:gap-4 transition-all duration-300">
                Ver servicio <ArrowRight size={10} aria-hidden="true" />
              </div>
            </div>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ebony/5">
          {services.filter(s => s.title !== "Coordinación, Producción y Diseño").map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group flex flex-col p-8 md:p-10 bg-cream hover:bg-cream-warm transition-colors duration-400 h-full border border-ebony/8 hover:border-taupe/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center border border-taupe/40 group-hover:border-taupe transition-colors duration-300" aria-hidden="true">
                      <Icon size={14} className="text-taupe" />
                    </div>
                    <span className="h-px w-6 bg-taupe/40 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl text-ebony font-light mb-3 group-hover:text-ebony-dark transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ebony-muted leading-relaxed flex-1 group-hover:text-ebony transition-colors">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-6 label opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver más <ArrowRight size={10} aria-hidden="true" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/servicios" className="btn-outline-dark">
            Ver todos los servicios
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
