import type { Metadata } from "next";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export const metadata: Metadata = {
  title: "Graduaciones y Eventos Sociales | Lety Maldonado Eventos Monclova",
  description:
    "Organización de graduaciones, bautizos, cumpleaños y todo tipo de evento social en Monclova y Coahuila. Coordinación completa con decoración y logística.",
};

export default function GraduacionesPage() {
  return (
    <ServicePageLayout
      heroTag="Graduaciones · Eventos Sociales · Monclova"
      title="Graduaciones y Todo Evento Social"
      subtitle="Cada celebración merece ser especial"
      description={`Más allá de las bodas, en Lety Maldonado Eventos organizamos todo tipo de evento social con el mismo nivel de cuidado y atención al detalle. Graduaciones, bautizos, baby showers, cumpleaños especiales y cualquier celebración que merezca ser memorable.

Nos encargamos de la planeación, coordinación de proveedores, decoración y logística para que tú y tus invitados puedan disfrutar al máximo. Desde eventos íntimos de 20 personas hasta celebraciones de más de 500 invitados en Monclova, Cuatrociénegas y la región.`}
      includes={[
        "Consulta inicial y planeación personalizada",
        "Coordinación de proveedores (catering, DJ, fotografía)",
        "Diseño y decoración del espacio",
        "Elaboración de itinerario y protocolo",
        "Coordinación el día del evento",
        "Supervisión de montaje y desmontaje",
        "Gestión de venue y permisos",
        "Asistente de coordinación incluido",
      ]}
      features={[
        {
          title: "Graduaciones",
          description: "Recepciones de graduación universitaria y preparatoria. Coordinación completa con decoración temática, música y catering.",
        },
        {
          title: "Bautizos y Baby Showers",
          description: "Celebraciones íntimas y familiares con decoración personalizada para dar la bienvenida a los más pequeños.",
        },
        {
          title: "Cumpleaños y Aniversarios",
          description: "Desde fiestas temáticas hasta cenas elegantes. Creamos la atmósfera perfecta para cada edad y estilo.",
        },
        {
          title: "Eventos Familiares",
          description: "Reuniones familiares, primeras comuniones, confirmaciones y toda celebración especial con coordinación profesional.",
        },
      ]}
      priceNote="MXN · Precio según tipo y tamaño del evento"
    />
  );
}
