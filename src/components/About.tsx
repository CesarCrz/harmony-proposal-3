"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp, slideLeft, slideRight, fadeIn,
  staggerContainer, fadeUpItem, viewport,
} from "@/lib/animations";

export default function About() {
  return (
    <section id="nosotros" className="bg-[#f8efe8] py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Heading row */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={slideLeft}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight max-w-[558px]"
          >
            Desatando la Creatividad: Un Paraíso para tus Uñas
          </motion.h2>
          <motion.p
            variants={slideRight}
            className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[558px] leading-relaxed"
          >
            Entra a nuestro vibrante y acogedor espacio, diseñado para despertar tu imaginación y espíritu artístico. Siente la energía y pasión que irradian nuestras especialistas, dedicadas a convertir tus sueños en realidad.
          </motion.p>
        </motion.div>

        {/* Images — staggered slide in */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={slideLeft}
            className="relative w-full md:w-[364px] h-[300px] md:h-[482px] overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <Image
              src="/images/content-image-1.png"
              alt="Harmony Nails - diseños de uñas"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="relative w-full md:flex-1 h-[250px] md:h-[354px] overflow-hidden"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <Image
              src="/images/content-image-2.png"
              alt="Harmony Nails - ambiente del salón"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={slideRight}
            className="relative w-full md:w-[267px] h-[250px] md:h-[354px] overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <Image
              src="/images/content-image-1.png"
              alt="Harmony Nails - trabajos"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
