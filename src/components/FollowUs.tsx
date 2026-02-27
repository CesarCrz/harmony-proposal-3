"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerFast, scaleInItem, fadeUp, viewport } from "@/lib/animations";

const images = [
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660559/harmony_5_cwbvv3.jpg",
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660560/harmony_2_tl3uwp.jpg",
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660559/harmony_6_n6jsun.jpg",
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660559/harmony_3_dzsl8i.jpg",
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660561/harmony_4_zs0a1p.jpg",
  "https://res.cloudinary.com/dwoau0ajc/image/upload/v1770660560/harmony_1_payacj.jpg",
];

export default function FollowUs() {
  return (
    <section className="bg-[#f8efe8] py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-2 mb-10 md:mb-12"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={fadeUp}
            className="font-[var(--font-nunito)] font-normal text-[14px] text-[#1d1d1e] uppercase tracking-widest"
          >
            Get Social
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-playfair)] font-medium text-[28px] md:text-[48px] text-[#1d1d1e] tracking-[0.96px] leading-tight"
          >
            Síguenos en Instagram
          </motion.h2>
        </motion.div>

        {/* Image grid — staggered scale in */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={scaleInItem}
            >
              <Link
                href="https://www.instagram.com/harmonynailslashes"
                target="_blank"
                className="relative aspect-square overflow-hidden group block"
              >
                <Image
                  src={src}
                  alt={`Harmony Instagram ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#E91E8C]/0 group-hover:bg-[#E91E8C]/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    width="32" height="32" viewBox="0 0 24 24" fill="white"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              href="https://www.instagram.com/harmonynailslashes"
              target="_blank"
              className="font-[var(--font-nunito)] font-semibold text-[18px] text-[#1d1d1e] hover:text-[#E91E8C] transition-colors"
            >
              @harmonynailslashes
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
