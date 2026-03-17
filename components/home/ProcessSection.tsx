import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Primera consulta",
    description:
      "Nos reunimos para conocer tu visión, fechas, presupuesto y sueños. Esta conversación es la base de todo.",
  },
  {
    number: "02",
    title: "Propuesta a medida",
    description:
      "Diseñamos una propuesta integral con todos los servicios que necesitas, personalizada para ti.",
  },
  {
    number: "03",
    title: "Planeación y coordinación",
    description:
      "Gestionamos proveedores, tiempos, logística y cada detalle para que nada quede al azar.",
  },
  {
    number: "04",
    title: "Tu evento perfecto",
    description:
      "El gran día llegó. Nosotros nos encargamos de todo para que tú solo disfrutes y crees recuerdos.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-cream-warm" aria-labelledby="process-heading">
      <div className="container-wide">
        <SectionHeading
          overline="Cómo trabajamos"
          title="Un proceso"
          titleItalic="sin estrés"
          subtitle="Organizar tu evento no debería ser difícil. Nuestro método probado te guía paso a paso."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 120} className="relative">
              {/* Connecting line (hidden on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px bg-gold/20"
                  aria-hidden="true"
                />
              )}

              <div className="relative">
                <p
                  className="font-serif text-5xl font-light text-gold/20 leading-none mb-4"
                  aria-hidden="true"
                >
                  {step.number}
                </p>
                <div className="w-10 h-px bg-gold mb-5" aria-hidden="true" />
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
