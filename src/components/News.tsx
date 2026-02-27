"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, slideLeft, slideRight, viewport } from "@/lib/animations";

const trends = [
  {
    image: "/images/content-image-1.png",
    tag: "Uñas Acrílicas",
    season: "Primavera 2026",
    specialist: "Kattya (Kath)",
    title: "Flores y Pasteles: El Nail Art que Domina esta Primavera",
    excerpt:
      "Los diseños florales con tonos pastel y acentos de color son la tendencia que nuestras clientas más piden esta temporada. Uñas que hablan por sí solas.",
  },
  {
    image: "/images/content-image-2.png",
    tag: "Extensión de Pestañas",
    season: "Temporada 2026",
    specialist: "Victoria",
    title: "Pestañas Wispy: El Volumen Natural que Está en Todas Partes",
    excerpt:
      "Las pestañas wispy logran ese equilibrio perfecto entre volumen y naturalidad. Descubre por qué se han convertido en el favorito indiscutible de la temporada.",
  },
];

export default function News() {
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
            variants={slideLeft}
            className="font-[var(--font-playfair)] font-medium text-[28px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] max-w-[418px] leading-tight"
          >
            Tendencias del Momento
          </motion.h2>
          <motion.p
            variants={slideRight}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[478px] leading-relaxed"
          >
            Lo que está de moda esta temporada, seleccionado por nuestras especialistas. Inspírate y agenda tu cita para llevar el look del momento.
          </motion.p>
        </motion.div>

        {/* Trend cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.25 } }}
              className="border border-[#999] flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] md:h-[322px] overflow-hidden">
                <Image
                  src={trend.image}
                  alt={trend.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Season tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E91E8C] text-white font-[var(--font-nunito)] font-semibold text-[12px] px-3 py-1.5 uppercase tracking-wider">
                    {trend.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 md:gap-7 p-6 md:p-10">
                <div className="flex flex-col gap-4">
                  {/* Meta */}
                  <div className="flex items-center gap-6">
                    {/* Specialist */}
                    <div className="flex items-center gap-1.5">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <circle cx="5.5" cy="5.5" r="5" stroke="#1d1d1e" />
                        <path d="M5.5 3v3l2 1" stroke="#1d1d1e" strokeWidth="0.8" strokeLinecap="round" />
                      </svg>
                      <span className="font-[var(--font-nunito)] font-normal text-[14px] text-[#1d1d1e]">
                        {trend.specialist}
                      </span>
                    </div>
                    {/* Season */}
                    <div className="flex items-center gap-1.5">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <rect x="1" y="2" width="11" height="10" rx="1" stroke="#1d1d1e" strokeWidth="0.8" />
                        <path d="M1 5h11M4 1v2M9 1v2" stroke="#1d1d1e" strokeWidth="0.8" strokeLinecap="round" />
                      </svg>
                      <span className="font-[var(--font-nunito)] font-normal text-[14px] text-[#1d1d1e]">
                        {trend.season}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-[var(--font-nunito)] font-semibold text-[22px] md:text-[28px] text-[#1d1d1e] leading-tight">
                    {trend.title}
                  </h3>
                  <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                    {trend.excerpt}
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="self-start"
                >
                  <Link
                    href="https://www.instagram.com/harmonynailslashes"
                    target="_blank"
                    className="flex items-center gap-2 text-[#1d1d1e] font-[var(--font-nunito)] text-[16px] hover:text-[#E91E8C] transition-colors"
                  >
                    VER EN INSTAGRAM
                    <span className="text-[10px]">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="flex justify-center"
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="https://www.instagram.com/harmonynailslashes"
              target="_blank"
              className="flex items-center gap-3 bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
            >
              VER TODAS LAS TENDENCIAS EN INSTAGRAM
              <span className="text-[10px]">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
