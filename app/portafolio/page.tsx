import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Galería de bodas, quinceañeras y eventos realizados por Lety Maldonado Eventos en Monclova, Cuatrociénegas y Minas de Mármol.",
};

const portfolioItems = [
  {
    id: 1,
    title: "Boda en Minas de Mármol",
    category: "Bodas",
    location: "Minas de Mármol",
    year: "2024",
    description: "Ceremonia al aire libre con arco floral en las majestuosas paredes de mármol",
    span: "md:col-span-2",
    img: "/images/real/boda-minas-ceremonia.jpg",
  },
  {
    id: 2,
    title: "Salón de Cristal",
    category: "Bodas",
    location: "Monclova",
    year: "2024",
    description: "Salón de lujo con candelabros dorados y muro floral blanco",
    span: "",
    img: "/images/real/salon-chandelier-cake.jpg",
  },
  {
    id: 3,
    title: "Diseño Floral",
    category: "Decoración",
    location: "Cuatrociénegas",
    year: "2024",
    description: "Bouquet de rosas blancas y peonías para boda de destino",
    span: "",
    img: "/images/real/novia-bouquet.jpg",
  },
  {
    id: 4,
    title: "Recepción Dorada",
    category: "Bodas",
    location: "Minas de Mármol",
    year: "2024",
    description: "Recepción al atardecer con luz dorada en las canteras de mármol",
    span: "",
    img: "/images/real/minas-recepcion-dorado.jpg",
  },
  {
    id: 5,
    title: "Minas de Mármol — Noche",
    category: "Bodas",
    location: "Minas de Mármol",
    year: "2024",
    description: "Celebración nocturna bajo cielo estrellado en las canteras iluminadas",
    span: "md:col-span-2",
    img: "/images/real/minas-noche.jpg",
  },
  {
    id: 6,
    title: "Mesa Imperial Cuatro Ciénegas",
    category: "Decoración",
    location: "Cuatrociénegas",
    year: "2023",
    description: "Montaje de mesa con flores blancas frente al paisaje de la laguna",
    span: "",
    img: "/images/real/mesa-rosas-panorama.jpg",
  },
  {
    id: 7,
    title: "Pared de Flores",
    category: "Decoración",
    location: "Monclova",
    year: "2023",
    description: "Muro floral dorado y blanco como telón para los novios",
    span: "",
    img: "/images/real/pared-flores.jpg",
  },
  {
    id: 8,
    title: "Mesa de Dulces",
    category: "Decoración",
    location: "Monclova",
    year: "2023",
    description: "Candy bar personalizado con monograma y piso de ajedrez",
    span: "",
    img: "/images/real/mesa-dulces.jpg",
  },
  {
    id: 9,
    title: "Beso en el Arco Floral",
    category: "Bodas",
    location: "Cuatrociénegas",
    year: "2023",
    description: "El momento más especial enmarcado por un arco de pampas y rosas blancas",
    span: "md:col-span-2",
    img: "/images/real/boda-beso-arco.jpg",
  },
];

export default function PortafolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream-warm">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Nuestro trabajo</p>
            <h1 className="font-serif text-display-lg text-ebony font-light">
              Galería de{" "}
              <span className="text-taupe">Bodas y Eventos</span>
            </h1>
            <p className="font-sans font-light tracking-[0.22em] uppercase text-xs text-ebony/50 mt-3">
              Monclova · Cuatrociénegas · Minas de Mármol
            </p>
            <p className="text-ebony-muted mt-6 max-w-lg mx-auto leading-relaxed">
              Cada evento que organizamos es único. Aquí una muestra del amor
              que ponemos en cada celebración.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-cream" aria-label="Galería de eventos">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
            {portfolioItems.map((item, i) => (
              <AnimatedSection
                key={item.id}
                delay={i * 80}
                className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              >
                <Image
                  src={item.img}
                  alt={`${item.title} — ${item.description}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ebony/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="label text-taupe mb-2">
                    {item.category} · {item.location} · {item.year}
                  </span>
                  <h3 className="font-serif text-2xl text-cream font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Always visible label (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ebony/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-xs tracking-widest uppercase text-cream/70">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg text-cream">{item.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={400} className="mt-12 text-center">
            <p className="text-ebony-muted mb-6">
              ¿Te imaginas tu evento en esta galería?
            </p>
            <Link href="/contacto" className="btn-dark">
              Comencemos a planear
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Video reel section */}
      <section className="section-padding bg-ebony" aria-labelledby="video-heading">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14">
            <p className="label text-taupe-light mb-4">En movimiento</p>
            <h2 id="video-heading" className="font-serif text-display-md text-cream font-light">
              Momentos que <span className="text-taupe-light">viven</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { src: "/images/real/video-01.mp4", poster: "/images/real/minas-recepcion-dorado.jpg", label: "Minas de Mármol" },
              { src: "/images/real/video-02.mp4", poster: "/images/real/boda-minas-ceremonia.jpg", label: "Boda Destino" },
              { src: "/images/real/video-03.mp4", poster: "/images/real/salon-chandelier-cake.jpg", label: "Eventos Monclova" },
              { src: "/images/real/video-04.mp4", poster: "/images/real/minas-tarde.jpg", label: "Cuatrociénegas" },
              { src: "/images/real/video-05.mp4", poster: "/images/real/pared-flores.jpg", label: "Diseño Floral" },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 80} className={`relative overflow-hidden bg-ebony group ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                <div className="relative aspect-video bg-ebony">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={v.poster}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony/70 to-transparent pointer-events-none" />
                  <p className="absolute bottom-4 left-4 label-light text-xs">{v.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
