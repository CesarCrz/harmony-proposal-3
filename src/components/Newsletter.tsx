"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, slideLeft, slideRight, viewport } from "@/lib/animations";

export default function Newsletter() {
  return (
    <section className="bg-[#f6e6d6] py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Text */}
          <motion.div variants={slideLeft} className="flex flex-col gap-4">
            <h2 className="font-[var(--font-nunito)] font-semibold text-[28px] md:text-[36px] text-[#1d1d1e] leading-tight max-w-[558px]">
              ¡Agenda tu Cita Hoy!
            </h2>
            <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] max-w-[431px] leading-relaxed">
              Diseños personalizados, calidez y 17 años de experiencia combinada. Tu próximo look te espera en Harmony.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={slideRight}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="block bg-[#25D366] text-white font-[var(--font-nunito)] font-semibold text-[16px] px-7 py-3.5 hover:bg-[#1fb855] transition-colors text-center"
              >
                ENVIAR WHATSAPP
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#"
                className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors text-center"
              >
                AGENDAR CITA
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
