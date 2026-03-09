"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  slideLeft, slideRight, staggerContainer, fadeUpItem, viewport,
} from "@/lib/animations";

const manicureServices = [
  { name: "Uñas Acrílicas Básicas", price: "Consulta precios", description: "Se limpia y prepara la uña natural para la aplicación del acrílico." },
  { name: "Uñas con Diseño", price: "Consulta precios", description: "Las uñas se modelan y liman al largo y forma deseada." },
  { name: "Uñas Francesas", price: "Consulta precios", description: "Diseño clásico con puntas blancas y base natural o rosada." },
  { name: "Rubber / Gel", price: "Consulta precios", description: "Base de gel flexible que proporciona un acabado natural y resistente." },
];

const pedicureServices = [
  { name: "Manicure Spa", price: "Consulta precios", description: "Tus manos se sumergen en un baño relajante con productos nutritivos." },
  { name: "Pedicure Spa", price: "Consulta precios", description: "El pedicure spa crea un ambiente sereno y tranquilo para tus pies." },
  { name: "Diseño de Ceja", price: "Consulta precios", description: "Definición y diseño profesional de cejas con el método que mejor te va." },
  { name: "Peinados Express", price: "Consulta precios", description: "Peinados rápidos para eventos especiales o para el día a día." },
];

export default function Pricing() {
  return (
    <section className="bg-[#f6e6d6] py-16 md:py-[100px]">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col gap-16 md:gap-[200px]">

        {/* Manicure Pricing — image from left, content from right */}
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative w-full lg:w-[461px] h-[350px] lg:h-[618px] flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <Image src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1773081302/rotate_IMG_8156_avafem_yepz8q_kyg6ra.jpg" alt="Uñas Acrílicas" fill className="object-cover" />
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-10 flex-1"
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-[var(--font-playfair)] font-medium text-[28px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight">
                Precios de Uñas y Más
              </h2>
              <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                Nuestras especialistas ofrecen servicios excepcionales de uñas y belleza. Consulta disponibilidad y precios actualizados.
              </p>
            </div>

            <motion.div
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {manicureServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                      {service.name}
                    </h3>
                    <span className="font-[var(--font-nunito)] font-semibold text-[16px] md:text-[20px] text-[#1d1d1e] shrink-0 ml-4">
                      {service.price}
                    </span>
                  </div>
                  <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="self-start">
              <Link
                href="#"
                className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
              >
                AGENDAR AHORA
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Pedicure Pricing — content from left, image from right */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-start justify-between">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-10 flex-1"
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-[var(--font-playfair)] font-medium text-[28px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight">
                Spa & Servicios Adicionales
              </h2>
              <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                Sumérgete en una de nuestras sesiones de spa, especialmente diseñadas para tu confort. Déjate envolver por el ambiente relajante de Harmony.
              </p>
            </div>

            <motion.div
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {pedicureServices.map((service, index) => (
                <motion.div key={index} variants={fadeUpItem} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                      {service.name}
                    </h3>
                    <span className="font-[var(--font-nunito)] font-semibold text-[16px] md:text-[20px] text-[#1d1d1e] shrink-0 ml-4">
                      {service.price}
                    </span>
                  </div>
                  <p className="font-[var(--font-nunito)] font-normal text-[16px] md:text-[18px] text-[#848484] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="self-start">
              <Link
                href="#"
                className="block bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
              >
                AGENDAR AHORA
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative w-full lg:w-[461px] h-[350px] lg:h-[618px] flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <Image src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1772659453/IMG_9644_iij76j_gtdnxa.jpg" alt="Spa Harmony" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
