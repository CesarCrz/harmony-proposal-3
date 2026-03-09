"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer, fadeUpItem, slideLeftItem, slideRightItem,
  scaleIn, viewport,
} from "@/lib/animations";
import Image from "next/image";

// ─── Nail-themed inline SVG icons ─────────────────────────────────────────

function IconNailPolish() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cap */}
      <rect x="24" y="9" width="12" height="8" rx="3" fill="#1d1d1e" />
      {/* Neck */}
      <rect x="26" y="17" width="8" height="5" fill="#1d1d1e" />
      {/* Body */}
      <path d="M21 22H39L36 52H24L21 22Z" fill="#1d1d1e" />
      {/* Shine */}
      <rect x="23" y="27" width="4" height="16" rx="2" fill="white" fillOpacity="0.18" />
      {/* Label line */}
      <rect x="24" y="36" width="12" height="1.5" rx="0.75" fill="white" fillOpacity="0.25" />
      <rect x="24" y="40" width="8" height="1.5" rx="0.75" fill="white" fillOpacity="0.25" />
    </svg>
  );
}

function IconNailFile() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Handle top */}
      <rect x="22" y="8" width="16" height="10" rx="5" fill="#1d1d1e" />
      {/* Body */}
      <rect x="27" y="18" width="6" height="34" rx="3" fill="#1d1d1e" />
      {/* Texture lines */}
      <line x1="24" y1="26" x2="36" y2="26" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="36" y2="30" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="24" y1="34" x2="36" y2="34" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="24" y1="38" x2="36" y2="38" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      {/* Tip */}
      <path d="M27 52L30 58L33 52H27Z" fill="#1d1d1e" />
    </svg>
  );
}

function IconDiamond() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top facet */}
      <path d="M30 6L48 22H12L30 6Z" fill="#1d1d1e" fillOpacity="0.75" />
      {/* Bottom half */}
      <path d="M12 22L30 56L48 22H12Z" fill="#1d1d1e" />
      {/* Center line */}
      <line x1="12" y1="22" x2="48" y2="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* Inner facets */}
      <path d="M30 6L12 22L30 33L48 22L30 6Z" fill="white" fillOpacity="0.06" />
      <line x1="30" y1="6" x2="30" y2="33" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
      <line x1="12" y1="22" x2="30" y2="56" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
      <line x1="48" y1="22" x2="30" y2="56" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large 4-point star */}
      <path
        d="M30 6L33.5 24L52 27.5L33.5 31L30 49L26.5 31L8 27.5L26.5 24L30 6Z"
        fill="#1d1d1e"
      />
      {/* Small star top-right */}
      <path
        d="M49 9L50.3 14.7L56 16L50.3 17.3L49 23L47.7 17.3L42 16L47.7 14.7L49 9Z"
        fill="#1d1d1e"
        fillOpacity="0.5"
      />
      {/* Tiny dot bottom-left */}
      <circle cx="14" cy="46" r="3.5" fill="#1d1d1e" fillOpacity="0.35" />
      {/* Tiny dot top-left */}
      <circle cx="12" cy="16" r="2" fill="#1d1d1e" fillOpacity="0.2" />
    </svg>
  );
}

// ─── Feature data ────────────────────────────────────────────────────────

const features = [
  {
    Icon: IconNailPolish,
    title: "17 Años de Experiencia",
    description: "Aportamos una gran riqueza de experiencia en el mundo del arte de uñas y pestañas.",
  },
  {
    Icon: IconNailFile,
    title: "Personal Especializado",
    description: "Nuestro personal experimentado domina todas las técnicas y tendencias del cuidado de uñas.",
  },
  {
    Icon: IconDiamond,
    title: "Mejor Calidad",
    description: "Utilizamos productos de la más alta calidad para garantizar resultados perfectos y duraderos.",
  },
  {
    Icon: IconSparkle,
    title: "Tendencias Actuales",
    description: "Nos mantenemos al día con las últimas tendencias y técnicas en arte de uñas.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#f8efe8] py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUpItem}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] max-w-[558px]"
          >
            ¿Por Qué Elegirnos?
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[469px] leading-relaxed"
          >
            En Harmony, entendemos que cuando se trata de arte de uñas y pestañas, tú tienes muchas opciones. Aquí te decimos por qué somos la mejor elección.
          </motion.p>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Left column — 2 cards, slide from left */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {features.slice(0, 2).map((feature, i) => (
              <motion.div
                key={i}
                variants={slideLeftItem}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.07)", transition: { duration: 0.25 } }}
                className="bg-[#f6e6d6] flex flex-col gap-6 p-6 h-auto md:h-[322px] justify-center cursor-default"
              >
                <div className="flex flex-col gap-6">
                  {/* Inline SVG icon */}
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <feature.Icon />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-[var(--font-nunito)] font-semibold text-[24px] text-[#1d1d1e] leading-tight">
                      {feature.title}
                    </h3>
                    <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-[#1d1d1e] font-[var(--font-nunito)] text-[16px] hover:text-[#E91E8C] transition-colors self-start"
                >
                  SABER MÁS
                  <span className="text-[10px]">→</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Center column — Booking CTA, scale in */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-[#f6e6d6] flex flex-col items-center justify-between overflow-hidden pt-10 px-10 h-auto md:h-[668px]"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className="font-[var(--font-nunito)] font-semibold text-[28px] md:text-[36px] text-[#1d1d1e] leading-tight">
                ¡Agenda Ahora!
              </h3>
              <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                Reserva tu cita con Harmony y únete a una experiencia de arte de uñas exquisita.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="#"
                  className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
                >
                  RESERVAR CITA
                </Link>
              </motion.div>
            </div>
            <div className="relative w-full max-w-[326px] h-[280px] md:h-[382px] mt-8 overflow-hidden rounded-t-[999px]">
              <Image
                src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1773082890/WhyUs-main_hepzms.jpg"
                alt="Agenda tu cita"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right column — 2 cards, slide from right */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {features.slice(2, 4).map((feature, i) => (
              <motion.div
                key={i}
                variants={slideRightItem}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.07)", transition: { duration: 0.25 } }}
                className="bg-[#f6e6d6] flex flex-col gap-6 p-6 h-auto md:h-[322px] justify-center cursor-default"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <feature.Icon />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-[var(--font-nunito)] font-semibold text-[24px] text-[#1d1d1e] leading-tight">
                      {feature.title}
                    </h3>
                    <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-[#1d1d1e] font-[var(--font-nunito)] text-[16px] hover:text-[#E91E8C] transition-colors self-start"
                >
                  SABER MÁS
                  <span className="text-[10px]">→</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
