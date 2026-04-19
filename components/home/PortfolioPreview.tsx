import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

const items = [
  {
    id: 1,
    title: "Boda en Minas de Mármol",
    cat: "Boda",
    loc: "Minas de Mármol",
    quote: "Con toda tranquilidad dejé todo en manos de Lety",
    img: "/images/real/boda-minas-ceremonia.jpg",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    title: "Mesa Imperial",
    cat: "Decoración",
    loc: "Monclova",
    img: "/images/real/mesa-elegante.jpg",
    size: "",
  },
  {
    id: 3,
    title: "Diseño Floral",
    cat: "Floral",
    loc: "Cuatrociénegas",
    img: "/images/real/bouquet-blanco.jpg",
    size: "",
  },
  {
    id: 4,
    title: "Recepción al Atardecer",
    cat: "Boda",
    loc: "Minas de Mármol",
    img: "/images/real/minas-tarde.jpg",
    size: "lg:col-span-2",
  },
  {
    id: 5,
    title: "Salón de Cristal",
    cat: "Boda",
    loc: "Monclova",
    img: "/images/real/salon-chandelier-cake.jpg",
    size: "",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-cream-light" aria-labelledby="portfolio-heading">
      <div className="container-wide">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans font-light tracking-[0.22em] uppercase text-sm text-taupe mb-2">Portafolio</p>
            <h2 id="portfolio-heading" className="font-serif text-display-md text-ebony font-light leading-tight">
              Momentos que<br />
              <span>perduran</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <span className="divider mb-5" aria-hidden="true" />
            <p className="text-sm text-ebony-muted leading-relaxed">
              Cada evento es único. Una muestra de las celebraciones que hemos tenido el honor de crear en Monclova, Cuatrociénegas y Minas de Mármol.
            </p>
          </div>
        </div>

        {/* Creative asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 auto-rows-[280px]">
          {items.map((item, i) => (
            <AnimatedSection
              key={item.id}
              delay={i * 80}
              className={`relative overflow-hidden group cursor-pointer ${item.size}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark gradient base */}
              <div className="absolute inset-0 bg-gradient-to-t from-ebony/80 via-ebony/10 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ebony/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Quote — only on featured item */}
                {"quote" in item && (
                  <p className="font-sans font-light tracking-[0.22em] uppercase text-xs text-cream/70 mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                )}
                <p className="label-light text-xs mb-1 opacity-60">{item.cat} · {item.loc}</p>
                <h3 className="font-serif text-xl md:text-2xl text-cream font-light">{item.title}</h3>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-8 border-t border-ebony/8">
          <p className="text-sm text-ebony-muted italic font-serif">
            &ldquo;Si quieres una boda espectacular, déjalo todo en mis manos.&rdquo;
          </p>
          <Link href="/portafolio" className="btn-dark shrink-0">
            Ver portafolio completo
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
