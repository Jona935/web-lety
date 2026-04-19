"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "528662532615"; // (866) 253-26-15

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

function buildWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    "¡Hola Lety! Me gustaría solicitar información sobre mi evento.",
    "",
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.phone}`,
    `*Tipo de evento:* ${data.eventType}`,
    data.eventDate ? `*Fecha aproximada:* ${data.eventDate}` : null,
    data.guestCount ? `*Número de invitados:* ${data.guestCount}` : null,
    "",
    `*Mensaje:*`,
    data.message,
    "",
    "_Enviado desde letymaldonadoeventos.com_",
  ];

  return lines.filter((l) => l !== null).join("\n");
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const message = buildWhatsAppMessage(data);
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto vía WhatsApp"
      className="space-y-8"
    >
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="input-label">
            Nombre completo <span aria-hidden="true">*</span>
          </label>
          <input
            id="name" type="text" autoComplete="name"
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
            id="email" type="email" autoComplete="email"
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
            Tu WhatsApp <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone" type="tel" autoComplete="tel"
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
              <option key={t} value={t}>{t}</option>
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
            id="eventDate" type="date"
            className="input-field"
            {...register("eventDate")}
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="input-label">
            Número aproximado de invitados
          </label>
          <input
            id="guestCount" type="number" min="1"
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
          id="message" rows={4}
          placeholder="¿Qué servicios necesitas? ¿Tienes alguna visión o inspiración?"
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

      {/* WhatsApp hint */}
      <p className="text-xs text-ebony-muted flex items-center gap-2">
        <MessageCircle size={13} className="text-[#25D366] shrink-0" aria-hidden="true" />
        Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarlo a Lety.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-dark w-full sm:w-auto flex items-center gap-3 disabled:opacity-60"
      >
        <MessageCircle size={14} aria-hidden="true" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
