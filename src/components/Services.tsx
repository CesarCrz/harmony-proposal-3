"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer, fadeUpItem, slideLeft, slideRight, viewport,
} from "@/lib/animations";

const services = [
  { image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772642048/IMG_8635_mydqsd.jpg", title: "Uñas Acrílicas", href: "#servicios" },
  { image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772661771/IMG_9206_u4qak0_eiwm3e.jpg", title: "Pestañas", href: "#servicios" },
  { image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1773075593/IMG_1867_expszn_qsvdse.jpg", title: "Manicure & Pedicure", href: "#servicios" },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f8efe8] py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 md:mb-16">
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] max-w-[558px] leading-tight"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="#"
              className="block shrink-0 bg-[#1d1d1e] text-white font-[var(--font-nunito)] font-normal text-[16px] px-7 py-3.5 hover:bg-[#E91E8C] transition-colors"
            >
              VER MÁS SERVICIOS
            </Link>
          </motion.div>
        </div>

        {/* Service cards — staggered fade up */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6"
            >
              {/* Image */}
              <div className="relative w-full h-[280px] md:h-[364px] overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text row */}
              <div className="flex items-center justify-between">
                <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e] leading-tight">
                  {service.title}
                </h3>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={service.href}
                    className="w-8 h-8 bg-[#1d1d1e] flex items-center justify-center text-white hover:bg-[#E91E8C] transition-colors flex-shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
