import { MetadataRoute } from "next";

const baseUrl = "https://letymaldonadoeventos.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/nosotros", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/servicios", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/catalogo", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/precios", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/portafolio", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contacto", priority: 0.9, changeFreq: "yearly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
    // Service pages
    { path: "/service-page/bodas-y-xv-anos", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/service-page/diseno-floral", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service-page/renta-de-mobiliario", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service-page/eventos-corporativos", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service-page/graduaciones-y-todo-evento-social", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service-page/coordinacion-produccion-y-diseno", priority: 0.8, changeFreq: "monthly" as const },
    // SEO / location pages
    { path: "/bodas-cuatro-cienegas", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/eventos-monclova", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/diseno-eventos", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/organizadores-bodas-monclova", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/wedding-planner-monclova", priority: 0.7, changeFreq: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}
