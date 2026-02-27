"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp, staggerContainer, slideLeftItem, slideRightItem, viewport,
} from "@/lib/animations";

const portfolioItems = [
  { image: "/images/content-image-1.png", title: "Diseño de Uñas Acrílicas" },
  { image: "/images/content-image-2.png", title: "Pestañas Profesionales" },
  { image: "/images/content-image-1.png", title: "Pedicure Spa" },
  { image: "/images/content-image-2.png", title: "Manicure Francés" },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-[#f8efe8] py-16 md:py-20 px-6 md:px-[150px]">
      <div className="max-w-[1140px] mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-[var(--font-playfair)] font-medium text-[32px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] text-center mb-12 md:mb-16 leading-tight"
        >
          Portafolio de Diseños Únicos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Column 1 — slide from left */}
          <motion.div
            className="flex flex-col gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Card short */}
            <motion.div
              variants={slideLeftItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6 border-b border-[#848484] pb-6"
            >
              <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
                <Image
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                  {portfolioItems[0].title}
                </h3>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="w-8 h-8 bg-[#f6e6d6] border border-[#848484] flex items-center justify-center hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="#1d1d1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Card tall */}
            <motion.div
              variants={slideLeftItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
                <Image
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                  {portfolioItems[1].title}
                </h3>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="w-8 h-8 bg-[#f6e6d6] border border-[#848484] flex items-center justify-center hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="#1d1d1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2 — slide from right */}
          <motion.div
            className="flex flex-col gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Card tall */}
            <motion.div
              variants={slideRightItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6 border-b border-[#848484] pb-6"
            >
              <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
                <Image
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                  {portfolioItems[2].title}
                </h3>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="w-8 h-8 bg-[#f6e6d6] border border-[#848484] flex items-center justify-center hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="#1d1d1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Card short */}
            <motion.div
              variants={slideRightItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
                <Image
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-[var(--font-nunito)] font-semibold text-[20px] md:text-[24px] text-[#1d1d1e]">
                  {portfolioItems[3].title}
                </h3>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="w-8 h-8 bg-[#f6e6d6] border border-[#848484] flex items-center justify-center hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="#1d1d1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
