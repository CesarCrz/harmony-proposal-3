"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideLeft, slideRight, viewport } from "@/lib/animations";

export default function Offers() {
  return (
    <section className="bg-[#f8efe8] py-8 md:py-10">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-6">

          {/* Card 1 — slide from left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.25 } }}
            className="bg-[#f6e6d6] flex flex-col md:flex-row items-stretch flex-1"
          >
            <div className="relative w-full md:w-[268px] h-[200px] md:h-[285px] flex-shrink-0 overflow-hidden">
              <Image
                src="/images/content-image-1.png"
                alt="Uñas acrílicas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center px-6 py-8">
              <div className="flex flex-col gap-3">
                <p className="font-[var(--font-nunito)] font-normal text-[16px] text-[#848484]">
                  <span>Ahorra hasta </span>
                  <span className="text-[#1d1d1e] font-semibold">20% Off</span>
                  <span> en tu primera visita</span>
                </p>
                <h3 className="font-[var(--font-nunito)] font-semibold text-[28px] md:text-[36px] text-[#1d1d1e] leading-tight max-w-[246px]">
                  Color Único de Esmalte de Uñas
                </h3>
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="self-start">
                <Link
                  href="#"
                  className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
                >
                  AGENDAR
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 — slide from right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.25 } }}
            className="bg-[#f6e6d6] flex flex-col md:flex-row items-stretch flex-1"
          >
            <div className="relative w-full md:w-[268px] h-[200px] md:h-[285px] flex-shrink-0 overflow-hidden">
              <Image
                src="/images/content-image-2.png"
                alt="Diseños nuevos"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center px-6 py-8">
              <div className="flex flex-col gap-3">
                <p className="font-[var(--font-nunito)] font-normal text-[16px] text-[#848484]">
                  Nuevos diseños disponibles
                </p>
                <h3 className="font-[var(--font-nunito)] font-semibold text-[28px] md:text-[36px] text-[#1d1d1e] leading-tight max-w-[246px]">
                  Nuevo Look de Diseño de Uñas
                </h3>
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="self-start">
                <Link
                  href="#"
                  className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
                >
                  AGENDAR
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
