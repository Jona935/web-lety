import type { Metadata } from "next";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export const metadata: Metadata = {
  title: "Coordinación, Producción y Diseño | Lety Maldonado Eventos Monclova",
  description:
    "Servicio integral de coordinación, producción y diseño de eventos en Monclova. Concepto visual, dirección creativa, producción de escenografía y coordinación del día.",
};

export default function CoordinacionProduccionPage() {
  return (
    <ServicePageLayout
      heroTag="Coordinación · Producción · Diseño · Monclova"
      title="Coordinación, Producción y Diseño"
      subtitle="Tu visión, nuestra ejecución"
      description={`Ofrecemos un servicio integral que combina la dirección creativa del diseño, la capacidad técnica de la producción y la precisión de la coordinación en un solo equipo. El resultado: eventos con identidad visual propia y una ejecución sin contratiempos.

Desde la concepción del concepto creativo hasta el último detalle del desmontaje, somos el único interlocutor que necesitas. Diseñamos el concepto, producimos los elementos escénicos, coordinamos proveedores y estamos presentes cada minuto del evento.

Este servicio es ideal para quien busca una experiencia diferenciada donde el diseño y la logística se integran de manera orgánica.`}
      includes={[
        "Dirección creativa y concepto visual del evento",
        "Moodboard, renders 3D y presentación de propuesta",
        "Producción de escenografía y elementos decorativos",
        "Coordinación integral de proveedores",
        "Supervisión de montaje con equipo de producción",
        "Coordinación completa el día del evento",
        "Dirección de arte durante el evento",
        "Desmontaje y evaluación post-evento",
      ]}
      features={[
        {
          title: "Dirección Creativa",
          description: "Concepto visual único para tu evento: paleta de color, tipografía, materiales, texturas y estilo general. Todo tiene sentido.",
        },
        {
          title: "Producción de Escenografía",
          description: "Fabricación e instalación de elementos escénicos personalizados: arcos, estructuras, backdrops, señalética y mobiliario a medida.",
        },
        {
          title: "Coordinación Integral",
          description: "Un solo punto de contacto para todos los proveedores. Itinerario maestro, contingencias previstas y comunicación en tiempo real.",
        },
        {
          title: "Diseño de Experiencia",
          description: "Pensamos en cómo viven el evento tus invitados desde que llegan hasta que se van. Flujo, sorpresas y momentos memorables.",
        },
      ]}
      priceNote="MXN · Cotización según concepto y producción"
    />
  );
}
