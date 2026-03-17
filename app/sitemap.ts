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
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}
