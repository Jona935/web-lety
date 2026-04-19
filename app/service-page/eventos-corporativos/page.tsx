import type { Metadata } from "next";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export const metadata: Metadata = {
  title: "Eventos Corporativos | Lety Maldonado Eventos Monclova",
  description:
    "Organización de eventos corporativos en Monclova y Coahuila. Congresos, cenas de gala, lanzamientos de producto, team building y más con producción profesional.",
};

export default function EventosCorporativosPage() {
  return (
    <ServicePageLayout
      heroTag="Eventos Corporativos · Monclova · Coahuila"
      title="Eventos Corporativos"
      subtitle="Profesionalismo en cada detalle"
      description={`Organizamos eventos corporativos que reflejan la imagen y los valores de tu empresa. Desde cenas de gala y congresos hasta lanzamientos de producto y activaciones de marca, nuestro equipo garantiza una ejecución impecable.

Coordinamos todos los elementos: venue, audiovisual, catering, protocolo corporativo, branding del evento y logística de asistentes. Trabajamos con empresas de todos los tamaños en Monclova, Saltillo, Monterrey y toda la región noreste.

Entendemos que los eventos corporativos son una extensión de tu marca y los manejamos con el mismo nivel de exigencia que aplicas a tu negocio.`}
      includes={[
        "Planeación estratégica del evento",
        "Coordinación de venue y proveedores",
        "Producción audiovisual y sonido",
        "Diseño de branding y señalética del evento",
        "Gestión de registro y acreditación",
        "Catering y servicio de banquete",
        "Coordinación logística de asistentes",
        "Coordinación completa el día del evento",
      ]}
      features={[
        {
          title: "Cenas de Gala",
          description: "Cenas corporativas de premiación o fin de año con ambientación de lujo, menú de autor y protocolo empresarial.",
        },
        {
          title: "Congresos y Conferencias",
          description: "Organización de congresos con registro, logística de ponentes, audiovisual profesional y coordinación de sesiones.",
        },
        {
          title: "Lanzamientos de Producto",
          description: "Eventos de activación de marca y lanzamiento con producción creativa, experiencias inmersivas y cobertura de medios.",
        },
        {
          title: "Team Building y Convenciones",
          description: "Actividades de integración empresarial, convenciones de ventas y reuniones estratégicas con producción completa.",
        },
      ]}
      priceNote="MXN · Cotización personalizada según alcance"
    />
  );
}
