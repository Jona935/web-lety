import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const steps = [
  { number: "01", title: "Cita 1 — Inicio", desc: "Nos reunimos para conocer tu visión, fechas, presupuesto y sueños. Esta conversación es la base de todo." },
  { number: "02", title: "Cita 2 — Avances", desc: "Revisión de proveedores, definición de estilo y decoración. Creamos tu moodboard personalizado." },
  { number: "03", title: "Citas 3 & 4", desc: "Coordinación detallada: logística, itinerario, confirmaciones y resolución de cada pendiente." },
  { number: "04", title: "Cita Final — Tu día", desc: "El gran día llegó. Nuestro equipo coordina todo para que solo te preocupes por disfrutarlo." },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-cream-warm relative overflow-hidden" aria-labelledby="process-heading">
      <div className="container-wide">
        <SectionHeading
          script="Metodología"
          title="6 citas,"
          titleItalic="un evento perfecto"
          subtitle="Trabajamos con una calendarización clara que te permite avanzar con orden, sin improvisaciones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 100} className="relative">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-3 left-[calc(100%+12px)] right-0 w-6 h-px bg-taupe/20" aria-hidden="true" />
              )}
              <p className="font-serif text-6xl font-light text-taupe/15 leading-none mb-3" aria-hidden="true">
                {step.number}
              </p>
              <div className="w-8 h-px bg-taupe mb-5" aria-hidden="true" />
              <h3 className="font-serif text-lg text-ebony font-medium mb-3">{step.title}</h3>
              <p className="text-sm text-ebony-muted leading-relaxed">{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* WhatsApp note */}
        <AnimatedSection delay={500} className="mt-16 p-8 border border-taupe/20 flex items-start gap-5 max-w-2xl">
          <span className="font-serif text-4xl text-taupe/30 font-light leading-none" aria-hidden="true">✦</span>
          <div>
            <p className="font-sans text-sm font-medium text-ebony mb-1">Entre citas, seguimos en contacto</p>
            <p className="text-sm text-ebony-muted leading-relaxed">
              Siempre estaremos en contacto por WhatsApp. Este sistema evita saturarte de juntas
              y mantiene todo en orden. El objetivo: que disfrutes tu gran día sin preocupaciones.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
