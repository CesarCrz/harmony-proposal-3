"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const founders = [
  {
    image: "/images/content-image-1.png",
    name: "Kattya (Kath)",
    role: "Fundadora & Especialista en Uñas",
    experience: "10 años de experiencia",
    bio: "La visionaria que impulsa cada decisión creativa. Kattya transforma ideas en diseños únicos y atrevidos, poniendo pasión en cada trazo y detalle.",
    variants: slideLeft,
  },
  {
    image: "/images/content-image-2.png",
    name: "Victoria",
    role: "Fundadora & Especialista en Belleza",
    experience: "7 años de experiencia",
    bio: "La estratega que piensa y estructura cada proceso. Victoria convierte cada visita en una experiencia memorable, cuidando cada aspecto de tu bienestar.",
    variants: slideRight,
  },
];

export default function Team() {
  return (
    <section id="nosotros" className="bg-[#f8efe8] py-16 md:py-20">
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
            variants={fadeUpItem}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight"
          >
            Fundadoras de Harmony
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[400px] leading-relaxed"
          >
            Dos mujeres, una visión. Juntas construyeron Harmony desde cero con pasión, dedicación y amor por la belleza.
          </motion.p>
        </motion.div>

        {/* Founders grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={founder.variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6"
            >
              {/* Image — taller for premium feel */}
              <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4 px-1">
                {/* Name + role */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-[var(--font-playfair)] font-medium text-[28px] md:text-[32px] text-[#1d1d1e] leading-tight">
                    {founder.name}
                  </h3>
                  <p className="font-[var(--font-nunito)] font-normal text-[15px] text-[#E91E8C]">
                    {founder.role}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-[#1d1d1e]/20" />

                {/* Experience badge */}
                <span className="inline-flex items-center gap-1.5 self-start bg-[#f6e6d6] px-3 py-1.5 text-[13px] font-[var(--font-nunito)] font-semibold text-[#1d1d1e]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26A6.998 6.998 0 0019 9c0-3.87-3.13-7-7-7zm2 14H10v-1h4v1zm0-3H10v-1h4v1z" />
                  </svg>
                  {founder.experience}
                </span>

                {/* Bio */}
                <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[17px] text-[#848484] leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
