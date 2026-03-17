"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "Ingresa un número válido").max(15),
  eventType: z.string().min(1, "Selecciona el tipo de evento"),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const eventTypes = [
  "Boda",
  "Quinceañera",
  "Evento corporativo",
  "Otro tipo de evento",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={48} className="text-gold mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-charcoal mb-3">
          ¡Mensaje enviado!
        </h3>
        <p className="text-charcoal-muted">
          Gracias por contactarnos. Te responderemos en menos de 24 horas.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-6"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto"
      className="space-y-8"
    >
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="input-label">
            Nombre completo <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            className="input-field"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="input-label">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className="input-field"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone & Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="input-label">
            Teléfono <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(866) 000-0000"
            className="input-field"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="eventType" className="input-label">
            Tipo de evento <span aria-hidden="true">*</span>
          </label>
          <select
            id="eventType"
            className="input-field bg-transparent"
            aria-required="true"
            aria-describedby={errors.eventType ? "type-error" : undefined}
            {...register("eventType")}
          >
            <option value="">Selecciona una opción</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p id="type-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.eventType.message}
            </p>
          )}
        </div>
      </div>

      {/* Date & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventDate" className="input-label">
            Fecha aproximada del evento
          </label>
          <input
            id="eventDate"
            type="date"
            className="input-field"
            {...register("eventDate")}
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="input-label">
            Número aproximado de invitados
          </label>
          <input
            id="guestCount"
            type="number"
            min="1"
            placeholder="Ej: 150"
            className="input-field"
            {...register("guestCount")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="input-label">
          Cuéntanos sobre tu evento <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="¿Qué tienes en mente? ¿Qué servicios necesitas? ¿Tienes alguna visión o inspiración?"
          className="input-field resize-none"
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar solicitud
            <Send size={14} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
