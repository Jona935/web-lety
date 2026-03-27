import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Galería de bodas, quinceañeras y eventos realizados por Lety Maldonado Eventos en Monclova, Cuatrociénegas y Minas de Mármol.",
};

const categories = ["Todos", "Bodas", "Quinceañeras", "Eventos"];

const portfolioItems = [
  {
    id: 1,
    title: "Boda Romántica en Hacienda",
    category: "Bodas",
    location: "Monclova",
    year: "2024",
    description: "Ceremonia al aire libre con decoración floral en tonos blanco y verde sage",
    span: "md:col-span-2",
    bgClass: "from-wine/50 to-primary/30",
  },
  {
    id: 2,
    title: "Quinceañera Celestial",
    category: "Quinceañeras",
    location: "Cuatrociénegas",
    year: "2024",
    description: "Temática de estrellas en azul marino y dorado",
    span: "",
    bgClass: "from-charcoal/60 to-wine/40",
  },
  {
    id: 3,
    title: "Boda Íntima de Jardín",
    category: "Bodas",
    location: "Minas de Mármol",
    year: "2024",
    description: "30 invitados en un jardín privado con decoración boho",
    span: "",
    bgClass: "from-taupe/30 to-gold/20",
  },
  {
    id: 4,
    title: "Gran Quinceañera Rosa",
    category: "Quinceañeras",
    location: "Monclova",
    year: "2023",
    description: "200 invitados, decoración en rosas y champagne",
    span: "",
    bgClass: "from-primary-light/50 to-wine/30",
  },
  {
    id: 5,
    title: "Evento Corporativo Aniversario",
    category: "Eventos",
    location: "Monclova",
    year: "2023",
    description: "Cena de aniversario empresarial para 150 personas",
    span: "md:col-span-2",
    bgClass: "from-charcoal/70 to-gold/20",
  },
  {
    id: 6,
    title: "Boda en Minas de Mármol",
    category: "Bodas",
    location: "Minas de Mármol",
    year: "2023",
    description: "Paisaje natural de las minas como telón de fondo",
    span: "",
    bgClass: "from-gold/30 to-wine/40",
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
              Momentos que{" "}
              <span className="italic text-taupe">perduran</span>
            </h1>
            <p className="text-ebony-muted mt-6 max-w-lg mx-auto leading-relaxed">
              Cada evento que organizamos es único. Aquí una muestra del amor
              que ponemos en cada celebración.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs — static, JS filter would need client component */}
      <div className="bg-cream border-b border-cream-warm sticky top-16 md:top-20 z-30">
        <div className="container-wide">
          <div
            className="flex gap-6 overflow-x-auto py-4 scrollbar-none"
            role="tablist"
            aria-label="Filtrar por categoría"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={cat === "Todos"}
                className={`text-xs tracking-widest uppercase font-medium shrink-0 pb-1 transition-colors duration-200 ${
                  cat === "Todos"
                    ? "text-taupe border-b border-taupe"
                    : "text-ebony-muted hover:text-ebony"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

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
                {/* Background placeholder / real image */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgClass}`}
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
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-[10px] tracking-widest uppercase text-cream/70">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg text-cream">{item.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Note about real photos */}
          <AnimatedSection delay={300} className="mt-8 p-5 bg-cream-warm border-l-2 border-taupe/40">
            <p className="text-sm text-ebony-muted">
              <strong className="text-ebony">Nota:</strong> Las imágenes de
              portafolio serán reemplazadas con las fotografías profesionales de
              tus eventos reales. Esta es la estructura de galería lista para
              recibir tu contenido.
            </p>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={400} className="mt-12 text-center">
            <p className="text-ebony-muted mb-6">
              ¿Te imaginas tu evento en esta galería?
            </p>
            <Link href="/contacto" className="btn-primary">
              Comencemos a planear
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
