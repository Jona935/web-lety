import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const portfolioItems = [
  {
    id: 1,
    title: "Boda Romántica",
    category: "Boda",
    location: "Monclova, Coahuila",
    src: "/images/portfolio-1.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Quinceañera de Ensueño",
    category: "Quinceañera",
    location: "Cuatrociénegas",
    src: "/images/portfolio-2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Boda en Hacienda",
    category: "Boda",
    location: "Minas de Mármol",
    src: "/images/portfolio-3.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Evento Corporativo",
    category: "Evento",
    location: "Monclova",
    src: "/images/portfolio-4.jpg",
    span: "col-span-2 row-span-1",
  },
];

const placeholderColors = [
  "from-wine/60 to-primary/40",
  "from-gold/30 to-wine/50",
  "from-primary/40 to-charcoal/60",
  "from-charcoal/50 to-wine/40",
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="portfolio-heading">
      <div className="container-wide">
        <SectionHeading
          overline="Nuestro trabajo"
          title="Momentos que"
          titleItalic="perduran"
          subtitle="Cada evento es único. Aquí una muestra de las celebraciones que hemos tenido el honor de crear."
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[600px] md:h-[700px]">
          {portfolioItems.map((item, i) => (
            <AnimatedSection
              key={item.id}
              delay={i * 100}
              className={`relative overflow-hidden group ${item.span}`}
            >
              {/* Placeholder / real image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i]} flex items-end`}
              >
                {/* Uncomment for real images:
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                */}
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-400 opacity-0 group-hover:opacity-100">
                <p className="text-[9px] tracking-ultra-wide uppercase text-gold font-medium mb-1">
                  {item.category} · {item.location}
                </p>
                <h3 className="font-serif text-cream text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/portafolio" className="btn-primary">
            Ver portafolio completo
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
