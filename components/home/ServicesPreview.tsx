import Link from "next/link";
import {
  Calendar,
  Sparkles,
  UtensilsCrossed,
  Armchair,
  Shirt,
  Heart,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const services = [
  {
    icon: Calendar,
    title: "Planeación & Organización",
    description:
      "Coordinamos cada detalle de principio a fin. Desde la primera consulta hasta el último baile, tu evento está en las mejores manos.",
    href: "/servicios#planeacion",
  },
  {
    icon: Sparkles,
    title: "Decoración",
    description:
      "Transformamos espacios en ambientes únicos. Florales, iluminación, instalaciones — cada elemento diseñado para contar tu historia.",
    href: "/servicios#decoracion",
  },
  {
    icon: UtensilsCrossed,
    title: "Banquetes",
    description:
      "Menús elaborados para deleitar a tus invitados. Servicio completo de mesa, presentación y gastronomía de alto nivel.",
    href: "/servicios#banquetes",
  },
  {
    icon: Armchair,
    title: "Renta de Mobiliario",
    description:
      "Sillas Tiffany, mesas de madera, arcos, carpas y más. Un catálogo amplio para vestir cualquier espacio con elegancia.",
    href: "/catalogo",
  },
  {
    icon: Shirt,
    title: "Mantelería Premium",
    description:
      "Colecciones de telas finas en decenas de colores. El detalle que marca la diferencia en la mesa de tu evento.",
    href: "/catalogo#manteleria",
  },
  {
    icon: Heart,
    title: "Wedding Planner",
    description:
      "Especialistas en bodas que sueñas. Coordinación completa o parcial, día de boda, y acompañamiento personalizado.",
    href: "/servicios#bodas",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="services-heading">
      <div className="container-wide">
        <SectionHeading
          overline="Lo que hacemos"
          title="Servicios"
          titleItalic="integrales"
          subtitle="Todo lo que necesitas para tu evento especial, en un solo lugar. Con años de experiencia en Coahuila."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-warm">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.title}
                delay={i * 80}
                className="bg-cream group"
              >
                <Link
                  href={service.href}
                  className="block p-8 md:p-10 h-full hover:bg-cream-warm transition-colors duration-300 border border-cream-warm"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border border-gold/30
                      group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 mb-6"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted mb-5">
                    {service.description}
                  </p>
                  <span className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-medium text-gold group-hover:gap-3 transition-all duration-200">
                    Ver más <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/servicios" className="btn-outline">
            Ver todos los servicios
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
