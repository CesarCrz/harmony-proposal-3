"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, slideLeft, slideRight, viewport } from "@/lib/animations";

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Dirección",
    value: "Zona Sur, Guadalajara, Jalisco",
    sub: "Cerca de ITESO",
    href: "https://www.google.com/maps/search/?api=1&query=Harmony+Nails+%26+Lashes+Guadalajara",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Teléfono",
    value: "33 1045 0389",
    href: "tel:+523310450389",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "33 2920 3141",
    href: "https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Horarios",
    value: "Lunes – Sábado",
    sub: "10:00 am – 8:00 pm",
    href: null,
  },
];

export default function ContactMap() {
  return (
    <section id="contacto" className="bg-[#f8efe8] py-16 md:py-20">
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
            variants={slideLeft}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight max-w-[440px]"
          >
            Visítanos
          </motion.h2>
          <motion.p
            variants={slideRight}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[440px] leading-relaxed"
          >
            Estamos en la zona sur de Guadalajara, cerca de ITESO. Agenda tu cita y ven a vivir la experiencia Harmony.
          </motion.p>
        </motion.div>

        {/* 2-column: contact info + map */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          {/* Left — Contact details */}
          <motion.div variants={slideLeft} className="flex flex-col gap-8">
            {/* Contact detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item, i) => {
                const content = (
                  <motion.div
                    key={i}
                    variants={fadeUpItem}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-[#f6e6d6] p-5 flex flex-col gap-3"
                  >
                    <div className="text-[#E91E8C]">{item.icon}</div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-[var(--font-nunito)] font-semibold text-[11px] text-[#848484] uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-[var(--font-nunito)] font-semibold text-[16px] text-[#1d1d1e] leading-snug">
                        {item.value}
                      </span>
                      {item.sub && (
                        <span className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484]">
                          {item.sub}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <Link key={i} href={item.href} target="_blank" className="block hover:opacity-90 transition-opacity">
                    {content}
                  </Link>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* CTA button */}
            <motion.div
              variants={fadeUpItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="self-start"
            >
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="flex items-center gap-3 bg-[#E91E8C] text-white font-[var(--font-nunito)] font-semibold text-[16px] px-7 py-3.5 hover:bg-[#1d1d1e] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                AGENDAR POR WHATSAPP
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Google Maps embed */}
          <motion.div
            variants={slideRight}
            className="w-full h-[300px] sm:h-[380px] lg:h-full min-h-[380px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.7442146708063!2d-103.41578412577334!3d20.598500802419302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad9600000ee9%3A0xa7335b01160867dc!2sHarmony%20Nails%20%26%20Lashes!5e0!3m2!1ses-419!2smx!4v1771870675090!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Nails & Lashes — Ubicación en Google Maps"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
