"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    category: "Planificación",
    questions: [
      {
        q: "¿Con cuánta anticipación debo contratar sus servicios?",
        a: "Para bodas recomendamos al menos 6-12 meses de anticipación, especialmente en temporada alta (primavera y otoño). Para quinceañeras y otros eventos, 3-6 meses es ideal. Sin embargo, contáctanos aunque tengas menos tiempo — hacemos lo posible por ayudarte.",
      },
      {
        q: "¿Trabajan fuera de Monclova?",
        a: "Sí. Atendemos eventos en Monclova, Cuatrociénegas, Minas de Mármol y comunidades cercanas en Coahuila. Para eventos fuera de estas localidades, contáctanos para evaluar la viabilidad.",
      },
      {
        q: "¿Puedo contratar solo algunos servicios?",
        a: "Absolutamente. Puedes contratar únicamente decoración, solo coordinación, solo renta de mobiliario, o cualquier combinación. También ofrecemos paquetes integrales si prefieres que nos encarguemos de todo.",
      },
    ],
  },
  {
    category: "Precios & Pagos",
    questions: [
      {
        q: "¿Cómo funciona el proceso de pago?",
        a: "Generalmente pedimos un anticipo del 30-50% para reservar tu fecha, con el saldo restante a liquidar 2-4 semanas antes del evento. Los detalles específicos se establecen en el contrato.",
      },
      {
        q: "¿Tienen alguna política de cancelación?",
        a: "Contamos con una política de cancelación que depende de la anticipación con que se cancele. Los detalles completos se incluyen en el contrato de servicio. Recomendamos revisar y preguntar sobre esto durante la consulta inicial.",
      },
      {
        q: "¿Los precios del catálogo son fijos?",
        a: "Los precios publicados son orientativos. El costo final depende de la cantidad, temporada, distancia de entrega y disponibilidad. Siempre recibirás una cotización detallada antes de comprometerte.",
      },
    ],
  },
  {
    category: "El Día del Evento",
    questions: [
      {
        q: "¿Estarán presentes el día del evento?",
        a: "Sí. Nuestro equipo de coordinación estará presente durante toda la duración del evento (según el paquete contratado) para supervisar cada detalle y resolver cualquier imprevisto.",
      },
      {
        q: "¿Qué pasa si algo sale mal el día del evento?",
        a: "Tenemos protocolos de contingencia para las situaciones más comunes: lluvia, retrasos, problemas con proveedores, etc. Parte de nuestro valor es anticipar y resolver imprevistos sin que tú te enteres.",
      },
      {
        q: "¿Incluyen coordinación de proveedores externos?",
        a: "Sí, coordinamos con todos los proveedores que contrates: fotógrafo, músicos, DJ, florista, etc. Un evento bien coordinado requiere que todos trabajen sincronizados.",
      },
    ],
  },
  {
    category: "Decoración & Mobiliario",
    questions: [
      {
        q: "¿Puedo elegir los colores y estilo de decoración?",
        a: "Completamente. La decoración se diseña según tu visión, paleta de colores y personalidad. Tenemos reuniones de diseño donde exploramos referencias y creamos moodboards personalizados.",
      },
      {
        q: "¿El mobiliario de renta incluye entrega e instalación?",
        a: "Sí. La renta incluye entrega, instalación en el venue, y retiro al finalizar el evento. El costo de flete puede variar según la distancia.",
      },
      {
        q: "¿Tienen flores frescas o solo artificiales?",
        a: "Trabajamos con ambas. Las flores frescas las coordinamos con nuestros proveedores de florería según temporada y disponibilidad. Las artificiales premium las tenemos en inventario propio.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = question.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="border-b border-cream-warm last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={`answer-${id}`}
        id={`question-${id}`}
      >
        <span className="font-sans text-sm font-medium text-ebony leading-relaxed pr-4">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 text-taupe mt-0.5 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`answer-${id}`}
        role="region"
        aria-labelledby={`question-${id}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-ebony-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-ebony">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="label text-taupe mb-4">Resolvemos tus dudas</p>
            <h1 className="font-serif text-display-lg text-cream font-light">
              Preguntas{" "}
              <span className="italic text-taupe-light">frecuentes</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="space-y-14">
            {faqs.map((section, i) => (
              <AnimatedSection key={section.category} delay={i * 100}>
                <h2 className="font-serif text-2xl text-ebony mb-6 pb-2 border-b-2 border-taupe/20">
                  {section.category}
                </h2>
                <div>
                  {section.questions.map((item) => (
                    <FAQItem
                      key={item.q}
                      question={item.q}
                      answer={item.a}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Still have questions? */}
          <AnimatedSection delay={400} className="mt-16 text-center p-10 bg-cream-warm border border-cream-warm">
            <p className="label text-taupe mb-3">¿Aún tienes dudas?</p>
            <h2 className="font-serif text-2xl text-ebony font-light mb-4">
              Escríbenos directamente
            </h2>
            <p className="text-ebony-muted text-sm mb-6">
              No hay pregunta pequeña cuando se trata de tu evento especial.
            </p>
            <Link href="/contacto" className="btn-dark">
              Enviar mi pregunta
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
