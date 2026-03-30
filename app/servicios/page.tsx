import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Armchair,
  Heart,
  Flower2,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Coordinación, producción y diseño de eventos, diseño floral, bodas y XV años, eventos corporativos, graduaciones y renta de mobiliario en Monclova y Coahuila.",
};

const mainServices = [
  {
    id: "coordinacion",
    icon: Calendar,
    title: "Coordinación, Producción y Diseño",
    subtitle: "Soluciones integrales para tu evento",
    description:
      "Nos encargamos de cada aspecto de tu evento de principio a fin. Coordinamos proveedores, fechas, presupuestos y tiempos para que todo fluya perfectamente y tú solo disfrutes el día.",
    includes: [
      "Consulta inicial y visión del evento",
      "Cronograma detallado del día",
      "Coordinación de todos los proveedores",
      "Gestión de invitaciones y confirmaciones",
      "Supervisión completa el día del evento",
      "Coordinación de imprevistos",
    ],
    tag: "Más solicitado",
  },
  {
    id: "diseno-floral",
    icon: Flower2,
    title: "Diseño Floral",
    subtitle: "Diseño floral para tu boda y cualquier evento",
    description:
      "Creamos arreglos florales únicos que transforman cualquier espacio. Con certificación del Instituto Mexicano Técnico Floral y el AIFD, cada arreglo es una obra de arte pensada para tu celebración.",
    includes: [
      "Arreglos de mesa con flores frescas",
      "Arcos y altares florales",
      "Ramos de novia y damas",
      "Flores en las sillas y accesos",
      "Centros de mesa con diseño único",
      "Instalaciones florales de gran formato",
    ],
  },
  {
    id: "bodas-xv",
    icon: Heart,
    title: "Bodas y XV Años",
    subtitle: "Coordinación, producción y diseño de eventos",
    description:
      "Tu boda o quinceañera merece la máxima atención. Ofrecemos coordinación completa para que el día más especial de tu vida sea exactamente como lo imaginaste, sin estrés y lleno de detalles.",
    includes: [
      "Planeación completa o coordinación del día",
      "Selección y visita de venues",
      "Coordinación religiosa y civil",
      "Dirección de la ceremonia y recepción",
      "Asesoría personalizada en decoración",
      "Proveedores especializados y confiables",
    ],
    tag: "Especialidad",
  },
  {
    id: "eventos-corporativos",
    icon: Briefcase,
    title: "Eventos Corporativos",
    subtitle: "Coordinación, producción y diseño de eventos",
    description:
      "Desde cenas de gala hasta congresos y celebraciones de empresa, organizamos eventos corporativos con la misma pasión y atención al detalle que ponemos en cada boda.",
    includes: [
      "Cenas de aniversario y gala",
      "Reuniones y congresos empresariales",
      "Eventos de premiación",
      "Montaje y decoración corporativa",
      "Servicio de banquete y meseros",
      "Coordinación audiovisual y técnica",
    ],
  },
  {
    id: "graduaciones",
    icon: GraduationCap,
    title: "Graduaciones y Todo Evento Social",
    subtitle: "Coordinación, producción y diseño",
    description:
      "Celebra tus logros con el estilo que merecen. Organizamos graduaciones, aniversarios, bautizos, comuniones y todo tipo de evento social con dedicación y creatividad.",
    includes: [
      "Graduaciones de preparatoria y universidad",
      "Aniversarios y celebraciones familiares",
      "Bautizos y comuniones",
      "Fiestas temáticas y personalizadas",
      "Decoración a medida del evento",
      "Coordinación completa del día",
    ],
  },
  {
    id: "mobiliario",
    icon: Armchair,
    title: "Renta de Mobiliario",
    subtitle: "Equipo elegante para tu evento",
    description:
      "Amplio catálogo de muebles y equipamiento de primera calidad para vestir tu evento con elegancia. Entrega, instalación y retiro incluidos en Monclova y región.",
    includes: [
      "Sillas Tiffany, Chiavari y clásicas",
      "Mesas redondas y rectangulares",
      "Manteles y mantelería en todos los colores",
      "Carpas y gazebos",
      "Arcos, estructuras y pedestales",
      "Vajilla, cristalería y decorativos",
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
