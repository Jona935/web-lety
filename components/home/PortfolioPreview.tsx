import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const items = [
  { id: 1, title: "Boda Romántica", cat: "Boda", loc: "Monclova", span: "lg:col-span-2 lg:row-span-2", h: "h-72 lg:h-full", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80" },
  { id: 2, title: "Quinceañera Celestial", cat: "Quinceañera", loc: "Cuatrociénegas", span: "", h: "h-56", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80" },
  { id: 3, title: "Boda en Hacienda", cat: "Boda", loc: "Minas de Mármol", span: "", h: "h-56", img: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80" },
  { id: 4, title: "Gran Quinceañera", cat: "Quinceañera", loc: "Monclova", span: "lg:col-span-2", h: "h-64", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=900&q=80" },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-cream-warm" aria-labelledby="portfolio-heading">
      <div className="container-wide">
        <SectionHeading
          script="Portafolio"
          title="Momentos que"
          titleItalic="perduran"
          subtitle="Cada evento es único. Una muestra de las celebraciones que hemos tenido el honor de crear."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 min-h-[600px]">
          {items.map((item, i) => (
            <AnimatedSection
              key={item.id}
              delay={i * 90}
              className={`relative overflow-hidden group ${item.span} ${item.h}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover reveal */}
              <div className="absolute inset-0 bg-ebony/0 group-hover:bg-ebony/50 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="label-light mb-1">{item.cat} · {item.loc}</p>
                <h3 className="font-serif text-xl text-cream-light">{item.title}</h3>
              </div>

              {/* Always-visible label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ebony/40 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="label-light text-[9px]">{item.cat}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/portafolio" className="btn-dark">
            Ver portafolio completo
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
