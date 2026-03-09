"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, fadeUp, slideLeft, viewport } from "@/lib/animations";

const testimonials = [
  {
    avatar: "/images/testimonial-avatar-1.svg",
    quote: '"El salón tiene un ambiente cálido y acogedor que te hace sentir relajada desde que entras. El personal me recibió con una sonrisa y me hizo sentir cómoda de inmediato. La técnica que trabajó en mis uñas fue increíblemente talentosa. Se tomó el tiempo de escuchar mis preferencias."',
    name: "Clienta de Harmony",
    location: "Guadalajara, Jal.",
  },
  {
    avatar: "/images/testimonial-avatar-1.svg",
    quote: '"El resultado final de mi manicure fue absolutamente impresionante. La técnica aplicó el esmalte con habilidad, dejando mis uñas con un acabado perfecto y brillante. Recibí muchos cumplidos y no pude evitar presumirlas con orgullo."',
    name: "Clienta frecuente",
    location: "San Pedro Tlaquepaque",
  },
  {
    avatar: "/images/testimonial-avatar-3.svg",
    quote: '"Mi experiencia en Harmony fue excepcional. El profesionalismo, la habilidad y la atención al detalle del equipo realmente distinguen a este salón. Salí sintiéndome consentida y segura con mis hermosas uñas. 100% recomendado."',
    name: "Clienta satisfecha",
    location: "Guadalajara Sur",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8efe8] py-16 md:py-20 px-6 md:px-[150px]">
      <div className="max-w-[1140px] mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] text-center mb-12 md:mb-16 max-w-[558px] mx-auto leading-tight"
        >
          Nuestras Clientas
        </motion.h2>

        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={slideLeft}
              whileHover={{ x: 6, transition: { duration: 0.25 } }}
              className="bg-[#f6e6d6] flex flex-col md:flex-row gap-6 p-6 md:p-10"
            >
              {/* Avatar */}
              <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] overflow-hidden rounded-full flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 md:gap-10 flex-1">
                <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                      {t.name}
                    </p>
                    <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484]">
                      {t.location}
                    </p>
                  </div>
                  <motion.svg
                    width="35" height="35" viewBox="0 0 35 35" fill="none"
                    className="opacity-30 flex-shrink-0"
                    whileHover={{ opacity: 0.6, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M14 7H7C5.89 7 5 7.89 5 9V16C5 17.11 5.89 18 7 18H12V21C12 22.1 11.1 23 10 23H9C8.45 23 8 23.45 8 24V26C8 26.55 8.45 27 9 27H10C13.31 27 16 24.31 16 21V9C16 7.89 15.1 7 14 7ZM28 7H21C19.89 7 19 7.89 19 9V16C19 17.11 19.89 18 21 18H26V21C26 22.1 25.1 23 24 23H23C22.45 23 22 23.45 22 24V26C22 26.55 22.45 27 23 27H24C27.31 27 30 24.31 30 21V9C30 7.89 29.1 7 28 7Z" fill="#1d1d1e" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
