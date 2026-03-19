import Link from "next/link";
import { Calendar, Sparkles, UtensilsCrossed, Armchair, Shirt, Heart, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const services = [
  { icon: Heart, title: "Wedding Planner", desc: "Coordinación completa o parcial de tu boda. Estamos contigo desde el primer sí hasta el último baile.", href: "/servicios#bodas" },
  { icon: Calendar, title: "Planeación & Organización", desc: "Metodología de 6 citas para que cada detalle quede perfecto, sin improvisaciones.", href: "/servicios#planeacion" },
  { icon: Sparkles, title: "Decoración", desc: "Florales, iluminación, instalaciones y ambientes únicos diseñados para contar tu historia.", href: "/servicios#decoracion" },
  { icon: UtensilsCrossed, title: "Banquetes", desc: "Servicio completo de banquete con menús elaborados y atención profesional de mesa.", href: "/servicios#banquetes" },
  { icon: Armchair, title: "Renta de Mobiliario", desc: "Sillas Tiffany, Chiavari, mesas, carpas, vajillas. Entrega e instalación incluidas.", href: "/catalogo" },
  { icon: Shirt, title: "Mantelería Premium", desc: "Colección en decenas de colores y telas finas para vestir cualquier mesa con elegancia.", href: "/catalogo#manteleria" },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-ebony relative overflow-hidden" aria-labelledby="services-heading">
      {/* Watermark */}
      <span className="lm-watermark-light left-0 top-1/2 -translate-y-1/2 -translate-x-1/4" aria-hidden="true">LM</span>

      <div className="container-wide relative z-10">
        <SectionHeading
          script="Servicios"
          title="Soluciones"
          titleItalic="integrales"
          subtitle="Todo lo que necesitas para tu evento especial, en un solo lugar."
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group flex flex-col p-8 md:p-10 bg-ebony hover:bg-ebony-light transition-colors duration-400 h-full border border-cream/5 hover:border-taupe/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center border border-taupe/30 group-hover:border-taupe transition-colors duration-300" aria-hidden="true">
                      <Icon size={14} className="text-taupe" />
                    </div>
                    <span className="h-px w-6 bg-taupe/30 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl text-cream-light font-light mb-3 group-hover:text-cream transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-cream/40 leading-relaxed flex-1 group-hover:text-cream/60 transition-colors">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-6 label-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver más <ArrowRight size={10} aria-hidden="true" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/servicios" className="btn-outline-light">
            Ver todos los servicios
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
