import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  UtensilsCrossed,
  Armchair,
  Shirt,
  Heart,
  Camera,
  Music,
  Flower2,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Planeación, organización, decoración, renta de mobiliario, mantelería y banquetes para bodas y quinceañeras en Monclova y Coahuila.",
};

const mainServices = [
  {
    id: "planeacion",
    icon: Calendar,
    title: "Planeación & Organización",
    subtitle: "Coordinación integral de tu evento",
    description:
      "Desde la primera reunión hasta el último baile, nos encargamos de cada aspecto de tu evento. Coordinamos proveedores, fechas, presupuestos y tiempos para que todo fluya perfectamente.",
    includes: [
      "Consulta inicial y visión del evento",
      "Cronograma detallado",
      "Coordinación de proveedores",
      "Gestión de invitaciones y confirmaciones",
      "Supervisión el día del evento",
      "Coordinación de emergencias",
    ],
    tag: "Más solicitado",
  },
  {
    id: "bodas",
    icon: Heart,
    title: "Wedding Planner",
    subtitle: "Especialistas en bodas",
    description:
      "Tu boda merece la máxima atención. Ofrecemos coordinación completa o parcial para que el día más especial de tu vida sea exactamente como lo imaginaste.",
    includes: [
      "Wedding Planning completo o parcial",
      "Selección de venues",
      "Coordinación religiosa y civil",
      "Day-of coordination",
      "Asesoría personalizada",
      "Proveedores especializados en bodas",
    ],
    tag: "Especialidad",
  },
  {
    id: "decoracion",
    icon: Sparkles,
    title: "Decoración",
    subtitle: "Transformamos espacios en experiencias",
    description:
      "Cada elemento decorativo cuenta una historia. Diseñamos ambientes únicos que reflejan tu personalidad y crean la atmósfera perfecta para tu celebración.",
    includes: [
      "Diseño conceptual personalizado",
      "Arreglos florales frescos y artificiales",
      "Instalaciones y estructuras",
      "Iluminación ambiental",
      "Centros de mesa",
      "Arcos y altares",
    ],
  },
  {
    id: "banquetes",
    icon: UtensilsCrossed,
    title: "Banquetes",
    subtitle: "Gastronomía que deleita",
    description:
      "Un servicio de banquete completo con menús elaborados, presentación impecable y atención profesional para todos tus invitados.",
    includes: [
      "Menú a elegir (varios estilos)",
      "Servicio de meseros profesionales",
      "Bebidas y bar",
      "Pastel de celebración",
      "Mesa de dulces",
      "Coffee station",
    ],
  },
  {
    id: "mobiliario",
    icon: Armchair,
    title: "Renta de Mobiliario",
    subtitle: "Equipo elegante para tu evento",
    description:
      "Amplio catálogo de muebles y equipamiento de primera calidad. Entrega, instalación y retiro incluidos.",
    includes: [
      "Sillas Tiffany y Chiavari",
      "Mesas redondas y rectangulares",
      "Carpas y gazebos",
      "Arcos y estructuras",
      "Pedestales y decorativos",
      "Vajilla y cristalería",
    ],
  },
  {
    id: "manteleria",
    icon: Shirt,
    title: "Mantelería Premium",
    subtitle: "El detalle que transforma la mesa",
    description:
      "Colección de manteles, sobremanteles, servilletas y faldones en decenas de colores y texturas para vestir cualquier mesa con elegancia.",
    includes: [
      "Manteles de organza, satín y más",
      "Colores a elegir en catálogo",
      "Sobremanteles y runners",
      "Servilletas coordinadas",
      "Faldones para mesas",
      "Telas y drapeados decorativos",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-ebony relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-taupe/20 to-ebony"
          aria-hidden="true"
        />
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Lo que ofrecemos</p>
            <h1 className="font-serif text-display-lg text-cream font-light">
              Servicios{" "}
              <span className="italic text-taupe-light">integrales</span>
            </h1>
            <p className="text-cream/60 text-base mt-6 max-w-xl mx-auto leading-relaxed">
              Todo lo que necesitas para tu evento perfecto, en un solo lugar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="space-y-20 md:space-y-28">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection
                  key={service.id}
                  id={service.id}
                  delay={100}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                    !isEven ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div>
                    {service.tag && (
                      <span className="inline-block bg-taupe/10 text-taupe text-[10px] tracking-widest uppercase px-3 py-1 mb-4 font-sans">
                        {service.tag}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-3 mb-4"
                      aria-hidden="true"
                    >
                      <div className="w-10 h-10 border border-taupe/30 flex items-center justify-center">
                        <Icon size={18} className="text-taupe" />
                      </div>
                      <span className="h-px w-8 bg-taupe/30" />
                    </div>
                    <h2 className="font-serif text-display-sm text-ebony font-light mb-2">
                      {service.title}
                    </h2>
                    <p className="label text-taupe mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-ebony-muted leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link href="/contacto" className="btn-dark">
                      Cotizar este servicio
                    </Link>
                  </div>

                  {/* Includes list */}
                  <div className="bg-cream-warm p-8 md:p-10">
                    <p className="label text-taupe mb-6">Incluye</p>
                    <ul className="space-y-4">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-ebony"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-taupe shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-ebony">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-serif text-display-sm text-cream font-light mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-cream/60 mb-8">
              Contáctanos y creamos un paquete 100% personalizado para tu evento.
            </p>
            <Link href="/contacto" className="btn-dark">
              Hablar con Lety
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
