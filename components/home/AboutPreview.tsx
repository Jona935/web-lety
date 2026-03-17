import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const highlights = [
  "Más de 10 años organizando bodas y eventos",
  "Servicio en Monclova, Cuatrociénegas y Minas de Mármol",
  "Equipo profesional y comprometido",
  "Atención personalizada desde el primer contacto",
];

export default function AboutPreview() {
  return (
    <section
      className="section-padding bg-charcoal overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <AnimatedSection direction="up" className="relative">
            <div className="relative aspect-[4/5] bg-wine/30 overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-wine/60 to-charcoal/80 flex items-center justify-center">
                <p className="text-cream/40 text-sm font-sans tracking-wider text-center px-6">
                  [ Foto profesional de Lety Maldonado ]<br />
                  <span className="text-xs mt-2 block">Reemplazar con imagen real</span>
                </p>
              </div>
              {/* Uncomment when you have the actual image:
              <Image
                src="/images/lety-maldonado.jpg"
                alt="Lety Maldonado, Wedding & Event Planner en Monclova"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              */}
            </div>
            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-gold p-6 md:p-8 max-w-[200px]"
              aria-hidden="true"
            >
              <p className="font-serif text-4xl font-light text-charcoal">10+</p>
              <p className="text-[10px] tracking-widest uppercase font-medium text-charcoal/70 mt-1">
                Años de experiencia
              </p>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="up" delay={200}>
            <p className="overline-label text-gold mb-4">Sobre nosotros</p>
            <h2
              id="about-heading"
              className="font-serif text-display-md text-cream font-light leading-tight mb-6"
            >
              Detrás de cada{" "}
              <span className="italic text-primary-light">gran evento</span>
              <br />hay una gran historia
            </h2>
            <span className="gold-line-left mb-6" aria-hidden="true" />
            <p className="text-cream/65 leading-relaxed mb-6 text-base">
              Soy Lety Maldonado, y llevo más de una década convirtiendo sueños en
              celebraciones memorables. Mi pasión es que cada evento —sea una boda
              íntima o una quinceañera espectacular— sea exactamente lo que tú
              imaginaste, o incluso mejor.
            </p>
            <p className="text-cream/65 leading-relaxed mb-10 text-base">
              Ofrezco soluciones integrales porque sé que organizar un evento puede
              abrumarte. Mi equipo y yo nos encargamos de todo: desde la primera
              idea hasta el último detalle, para que tú solo te preocupes por
              disfrutarlo.
            </p>

            <ul className="space-y-3 mb-10" aria-label="Características de Lety Maldonado Eventos">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 mt-0.5 text-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/nosotros"
              className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
            >
              Conocer más sobre mí
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
