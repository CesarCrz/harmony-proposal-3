"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUpItem, fadeUp, viewport } from "@/lib/animations";

// ─── Data ─────────────────────────────────────────────────────────────────

const services = [
  {
    name: "Uñas Acrílicas / Polygel",
    guarantee: true,
    faqs: [
      {
        q: "¿Qué incluye el servicio?",
        a: "Uñas acrílicas o polygel en técnica escultural, mani express y gel de color liso. Diseños completamente personalizados para cada clienta.",
      },
      {
        q: "¿Cada cuánto debo hacer mantenimiento?",
        a: "Lo recomendable para asegurar una excelente calidad es de 15 a 20 días máximo. Esto aplica en acrílico, polygel, rubber gel, sistema híbrido y gel semi permanente.",
      },
      {
        q: "¿Qué cuidados debo tener?",
        a: "Evita exponer las uñas a productos químicos agresivos y usa guantes al lavar. No las uses como herramienta y aplica aceite de cutícula regularmente.",
      },
      {
        q: "¿Qué cubre la garantía de 3 días?",
        a: "Aplica para levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Extensiones de Pestañas",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué técnicas manejan?",
        a: "Trabajamos técnica clásica (1:1), híbrida, tecnológica/volumen y mega volumen artesanal. En tu consulta te orientamos sobre cuál es la ideal para ti.",
      },
      {
        q: "¿Qué cuidados debo seguir?",
        a: "Evita mojar las pestañas las primeras 24–48 horas. No las frotes ni uses productos con aceite, y duerme boca arriba en lo posible.",
      },
    ],
  },
  {
    name: "Nivelación Rubber Gel / Gel Semi Permanente",
    guarantee: true,
    faqs: [
      {
        q: "¿Qué es la nivelación con rubber gel?",
        a: "Nivelación en uña natural con rubber gel, mani express y gel color liso. Protege y fortalece la uña natural dándole un acabado impecable.",
      },
      {
        q: "¿Qué es el gel semi permanente?",
        a: "Gel de color liso sobre uña natural. Un servicio sencillo que aporta brillo y color duradero sin necesidad de extensiones ni acrílico.",
      },
      {
        q: "¿Cada cuánto se hace el mantenimiento?",
        a: "Lo recomendable es de 15 a 20 días máximo para mantener la uña protegida y con buen acabado.",
      },
      {
        q: "¿Qué cubre la garantía de 3 días?",
        a: "Aplica para levantamiento prematuro de gel durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Sistema Híbrido",
    guarantee: true,
    faqs: [
      {
        q: "¿Qué es el sistema híbrido?",
        a: "Plataforma de polygel en técnica escultural o sobre uña natural, nivelación de rubber gel, mani express y gel de color liso. Lo mejor de varios sistemas en uno.",
      },
      {
        q: "¿Cuál es la diferencia con el acrílico?",
        a: "Combina la resistencia del polygel con la flexibilidad del rubber gel, ofreciendo mayor durabilidad y un acabado más natural que el acrílico tradicional.",
      },
      {
        q: "¿Cada cuánto se hace el mantenimiento?",
        a: "Entre 15 y 20 días máximo, igual que el resto de sistemas de uñas.",
      },
      {
        q: "¿Qué cubre la garantía de 3 días?",
        a: "Aplica para levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Manicura Russa & Manicura Spa",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué incluye la Manicura Russa?",
        a: "Limpieza de cutícula profunda en seco y gel de color liso. Técnica de precisión con fresa eléctrica para un acabado ultra limpio y definido.",
      },
      {
        q: "¿Qué incluye la Manicura Spa?",
        a: "Sales, exfoliante, mascarilla, limpieza de cutícula, corte, cuadratura y gel de color liso. Una experiencia completa de consentimiento para tus manos.",
      },
      {
        q: "¿Cada cuánto se recomienda?",
        a: "Cada 3 a 4 semanas para mantener la cutícula bien definida y las manos siempre perfectas.",
      },
    ],
  },
  {
    name: "Pedicure Spa",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué incluye el Pedicure Spa?",
        a: "Sales, exfoliante, mascarilla, limpieza de canales, limpieza de cutícula, limpieza de callosidades y gel de color liso.",
      },
      {
        q: "¿Cada cuánto se recomienda?",
        a: "Idealmente cada 3 a 4 semanas para mantener tus pies siempre bien cuidados y presentables.",
      },
    ],
  },
  {
    name: "Lash Lifting",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué es el lash lifting?",
        a: "Rizado de pestañas naturales. Levanta y ondula tu pestaña propia dándole volumen y apertura a la mirada sin necesidad de extensiones.",
      },
      {
        q: "¿Cuánto dura el efecto?",
        a: "Entre 6 y 8 semanas, dependiendo del ciclo natural de crecimiento de tus pestañas.",
      },
    ],
  },
  {
    name: "Diseño de Ceja",
    guarantee: false,
    faqs: [
      {
        q: "¿Qué incluye el servicio?",
        a: "Diseño con visagismo de tus cejas, contorno de hilos con pigmento, depilación de ceja y laminado. Realzamos tu mirada con la forma perfecta para tu rostro.",
      },
      {
        q: "¿Cuánto dura el mantenimiento?",
        a: "Aproximadamente cada 3 a 4 semanas para mantener el diseño y la definición de la ceja.",
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
            incluyen corrección gratuita según el servicio. <b>Consultar condiciones. *</b>
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
                              Aplica para levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.
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
