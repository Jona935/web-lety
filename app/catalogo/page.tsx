import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo de renta de mobiliario, mantelería y decoración para eventos en Monclova. Sillas, mesas, telas, vajillas y más.",
};

const categories = [
  {
    id: "sillas",
    title: "Sillas",
    items: [
      "Silla Tiffany Transparente",
      "Silla Chiavari Dorada",
      "Silla Chiavari Blanca",
      "Silla Chiavari Negra",
      "Silla Viena Blanca",
      "Silla Rústica de Madera",
      "Silla para Ceremonia",
    ],
  },
  {
    id: "mesas",
    title: "Mesas",
    items: [
      "Mesa Redonda 1.80m (10 personas)",
      "Mesa Redonda 1.50m (8 personas)",
      "Mesa Rectangular Banquete",
      "Mesa de Madera Rústica",
      "Mesa Alta/Coctelera",
      "Mesa de Dulces",
      "Mesa de Cabeza (Novios)",
    ],
  },
  {
    id: "manteleria",
    title: "Mantelería",
    items: [
      "Mantel de Organza (40+ colores)",
      "Mantel de Satín",
      "Mantel de Lino",
      "Sobremanteles bordados",
      "Runners decorativos",
      "Servilletas de tela",
      "Faldones para mesas",
    ],
  },
  {
    id: "estructuras",
    title: "Estructuras & Carpas",
    items: [
      "Arco de hierro forjado",
      "Arco de madera",
      "Arco de globos",
      "Carpa de 10x10m",
      "Carpa de 10x20m",
      "Gazebo elegante",
      "Escenario/Pista de baile",
    ],
  },
  {
    id: "vajilla",
    title: "Vajilla & Cristalería",
    items: [
      "Vajilla de porcelana blanca",
      "Cubiertos plateados",
      "Copas de cristal",
      "Copas de champagne",
      "Jarras decorativas",
      "Candelabros",
      "Centros de mesa",
    ],
  },
  {
    id: "decoracion",
    title: "Decoración",
    items: [
      "Globos de látex y metálicos",
      "Globos de helio",
      "Flores artificiales premium",
      "Faroles y portavelas",
      "Lámparas de filamento",
      "Luminarias tipo Edison",
      "Cortinas de luces",
    ],
  },
];

export default function CatalogoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream-warm">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Renta de artículos</p>
            <h1 className="font-serif text-display-lg text-ebony font-light">
              Catálogo de{" "}
              <span className="italic text-taupe">mobiliario</span>
            </h1>
            <p className="text-ebony-muted text-base mt-6 max-w-xl mx-auto leading-relaxed">
              Encuentra todo lo que necesitas para vestir tu evento con elegancia.
              Entrega, instalación y retiro incluidos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Note */}
      <div className="bg-taupe/10 border-y border-taupe/20">
        <div className="container-wide py-4 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-taupe shrink-0" aria-hidden="true" />
          <p className="text-sm text-ebony-muted">
            <strong>Disponibilidad sujeta a fechas.</strong> Para confirmar
            disponibilidad y precios, solicita tu cotización personalizada.
          </p>
          <Link href="/contacto" className="ml-auto btn-ghost text-[10px] shrink-0">
            Cotizar →
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <AnimatedSection
                key={cat.id}
                id={cat.id}
                delay={i * 80}
                className="border border-cream-warm hover:border-taupe/30 transition-colors duration-300 p-8"
              >
                <h2 className="font-serif text-2xl text-ebony mb-1">{cat.title}</h2>
                <span className="divider mb-5" aria-hidden="true" />
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ebony-muted">
                      <span className="w-1 h-1 rounded-full bg-taupe shrink-0 mt-2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={300} className="mt-16 text-center">
            <p className="text-ebony-muted text-base mb-6">
              ¿Buscas algo que no ves en el catálogo? Cuéntanos y lo conseguimos.
            </p>
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización de renta
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
