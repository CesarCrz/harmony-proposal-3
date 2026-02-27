"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUpItem, fadeUp, viewport } from "@/lib/animations";

// ─── Data ─────────────────────────────────────────────────────────────────

const services = [
  {
    name: "Uñas Acrílicas",
    guarantee: true,
    faqs: [
      {
        q: "¿Cada cuánto necesito retoque?",
        a: "Recomendamos retoque cada 2-3 semanas, dependiendo del crecimiento de tu uña natural. Mantener el retoque a tiempo prolonga la duración y apariencia del servicio.",
      },
      {
        q: "¿Cuánto dura el servicio?",
        a: "Una aplicación completa toma aproximadamente 1.5 a 2 horas. Los retoques son más rápidos, alrededor de 45-60 minutos.",
      },
      {
        q: "¿Qué cuidados debo tener?",
        a: "Evita exponer las uñas a productos químicos agresivos y usa guantes al lavar. No las uses como herramienta y aplica aceite de cutícula diariamente.",
      },
      {
        q: "¿Qué cubre la garantía de 3 días?",
        a: "Si en los primeros 3 días presentas una rotura, levantamiento o problema en el acabado, lo corregimos sin costo adicional. Solo necesitas contactarnos.",
      },
    ],
  },
  {
    name: "Extensión de Pestañas",
    guarantee: true,
    faqs: [
      {
        q: "¿Cuánto tiempo duran las pestañas?",
        a: "Con los cuidados adecuados, las extensiones duran entre 3 y 4 semanas. El ciclo natural de caída de pestañas también influye en la duración.",
      },
      {
        q: "¿Cada cuánto necesito retoque?",
        a: "Recomendamos retoque cada 2-3 semanas para mantener la densidad y apariencia perfecta del trabajo inicial.",
      },
      {
        q: "¿Qué cuidados debo seguir?",
        a: "Evita mojar las pestañas las primeras 24-48 horas. No las frotes, no uses máscara con aceite y duerme boca arriba en lo posible.",
      },
    ],
  },
  {
    name: "Rubber / Gel",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué es el sistema Rubber?",
        a: "Es una base de gel flexible que protege la uña natural, previene roturas y sirve como base ideal para cualquier diseño o esmalte semipermanente.",
      },
      {
        q: "¿Cuánto tiempo dura?",
        a: "El sistema Rubber dura entre 2 y 3 semanas con los cuidados normales del día a día.",
      },
      {
        q: "¿Se puede combinar con diseños?",
        a: "Sí. Es perfectamente compatible con nail art, esmalte semipermanente, piedras y cualquier técnica decorativa.",
      },
    ],
  },
  {
    name: "Manicure & Pedicure Spa",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué incluye el servicio?",
        a: "Incluye baño relajante, limado y forma, retiro de cutícula, masaje con crema nutritiva y aplicación de esmalte regular o semipermanente.",
      },
      {
        q: "¿Cuánto dura la sesión?",
        a: "El manicure spa dura aproximadamente 45-60 minutos. El pedicure spa puede tomar entre 60 y 75 minutos.",
      },
      {
        q: "¿Con qué frecuencia se recomienda?",
        a: "Idealmente cada 2-3 semanas para mantener tus manos y pies siempre perfectos y bien cuidados.",
      },
    ],
  },
  {
    name: "Diseño de Ceja",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué métodos utilizan?",
        a: "Trabajamos con hilo, cera o pinza según el tipo de ceja y preferencia. El método se elige para maximizar resultados y minimizar molestia.",
      },
      {
        q: "¿Cuánto tiempo dura el diseño?",
        a: "El efecto del diseño dura entre 3 y 4 semanas. Recomendamos visita mensual para mantenimiento.",
      },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────

function GuaranteeBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#FDE8EF] text-[#E91E8C] font-[var(--font-nunito)] font-semibold text-[11px] px-2.5 py-1 shrink-0">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
      Garantía 3 días
    </span>
  );
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <motion.div
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="shrink-0 w-8 h-8 border border-[#1d1d1e]/20 flex items-center justify-center"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1v12M1 7h12" stroke="#1d1d1e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#f8efe8] py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight max-w-[440px]"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[440px] leading-relaxed"
          >
            Resolvemos tus dudas antes de tu cita. Los servicios con{" "}
            <span className="text-[#E91E8C] font-semibold">Garantía 3 días</span>{" "}
            incluyen corrección gratuita si no quedas 100% satisfecha.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="flex flex-col gap-0 border-t border-[#1d1d1e]/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="border-b border-[#1d1d1e]/10"
              >
                {/* Service header — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-6 px-0 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    {service.guarantee && <GuaranteeBadge />}
                    <span className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e] group-hover:text-[#E91E8C] transition-colors">
                      {service.name}
                    </span>
                  </div>
                  <PlusMinusIcon open={isOpen} />
                </button>

                {/* FAQ content — animated expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f6e6d6] px-6 md:px-10 py-8 mb-6 flex flex-col gap-6">
                        {service.faqs.map((faq, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: j * 0.07, duration: 0.35 }}
                            className="flex flex-col gap-2"
                          >
                            {/* Question */}
                            <div className="flex items-start gap-3">
                              <span className="text-[#E91E8C] font-[var(--font-nunito)] font-bold text-[14px] shrink-0 mt-0.5">
                                P.
                              </span>
                              <p className="font-[var(--font-nunito)] font-semibold text-[16px] md:text-[17px] text-[#1d1d1e] leading-snug">
                                {faq.q}
                              </p>
                            </div>
                            {/* Answer */}
                            <div className="flex items-start gap-3 pl-px">
                              <span className="text-[#848484] font-[var(--font-nunito)] font-bold text-[14px] shrink-0 mt-0.5">
                                R.
                              </span>
                              <p className="font-[var(--font-nunito)] font-normal text-[15px] md:text-[16px] text-[#848484] leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                            {/* Divider between FAQ items */}
                            {j < service.faqs.length - 1 && (
                              <div className="w-full h-px bg-[#1d1d1e]/8 mt-2" />
                            )}
                          </motion.div>
                        ))}

                        {/* Guarantee note at bottom of nail/lash services */}
                        {service.guarantee && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: service.faqs.length * 0.07 + 0.1 }}
                            className="flex items-start gap-3 border-t border-[#E91E8C]/20 pt-5 mt-2"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#E91E8C] shrink-0 mt-0.5">
                              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 13l-3-3 1.4-1.4 1.6 1.6 4.6-4.6L17 8l-6 6z" />
                            </svg>
                            <p className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484] leading-relaxed">
                              <span className="font-semibold text-[#E91E8C]">Garantía de 3 días:</span>{" "}
                              Si no quedas 100% satisfecha con tu servicio, contáctanos dentro de los primeros 3 días y lo corregimos sin costo adicional.
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
