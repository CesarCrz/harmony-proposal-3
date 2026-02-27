"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE = "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660559/harmony_5_cwbvv3.jpg";

const words = "¡Haz que tus uñas luzcan hermosas!".split(" ");

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#f8efe8] w-full overflow-hidden">
      {/* Container: stacks on mobile, side-by-side on lg+ */}
      <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row items-stretch">

        {/* Left — text content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 md:gap-8 lg:gap-10 py-14 sm:py-16 md:py-20 lg:py-[140px] px-6 md:px-10 lg:px-[80px]">

          {/* Badge */}
          <motion.span
            className="self-start font-[var(--font-nunito)] font-semibold text-[11px] text-[#E91E8C] uppercase tracking-[2px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Harmony Nails &amp; Lashes · Guadalajara Sur
          </motion.span>

          {/* Heading — word-by-word cinematic reveal */}
          <h1 className="font-[var(--font-playfair)] font-medium text-[30px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.28em]"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.5 + i * 0.11,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            className="font-[var(--font-nunito)] font-normal text-[15px] md:text-[17px] lg:text-[18px] text-[#848484] max-w-full md:max-w-[400px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Transforma tus uñas en obras de arte con nuestros servicios expertos y manicure de primera calidad. 17 años de experiencia combinada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="block bg-[#E91E8C] text-white font-[var(--font-nunito)] font-semibold text-[15px] md:text-[16px] px-6 py-3 md:px-7 md:py-3.5 hover:bg-[#1d1d1e] transition-colors text-center"
              >
                AGENDAR CITA
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#servicios"
                className="block bg-transparent border border-[#1d1d1e]/30 text-[#1d1d1e] font-[var(--font-nunito)] font-normal text-[15px] md:text-[16px] px-6 py-3 md:px-7 md:py-3.5 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors text-center"
              >
                VER SERVICIOS
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap gap-6 md:gap-8 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { num: "17+", label: "Años de experiencia" },
              { num: "500+", label: "Clientas felices" },
              { num: "3d", label: "Garantía incluida * " },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-[var(--font-playfair)] font-medium text-[22px] md:text-[26px] text-[#E91E8C] leading-none">
                  {stat.num}
                </span>
                <span className="font-[var(--font-nunito)] font-normal text-[12px] text-[#848484] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — photo, min height on mobile, fills remaining on desktop */}
        <motion.div
          className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-auto lg:flex-1"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ minHeight: "280px" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Harmony Nails & Lashes — diseños de uñas"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
