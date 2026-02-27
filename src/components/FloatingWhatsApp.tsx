"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const springBounce = (delay: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    delay,
    duration: 0.5,
    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  },
});

const hoverSpring = {
  whileHover: { scale: 1.15 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring" as const, stiffness: 350, damping: 14 },
};

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col-reverse items-center gap-3">

      {/* WhatsApp — bottom (appears first, delay 2.5s) */}
      <motion.div {...springBounce(2.5)}>
        <Link
          href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
          target="_blank"
          aria-label="Contactar por WhatsApp"
        >
          <motion.div
            {...hoverSpring}
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg animate-pulse-ring"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>

      {/* Agendar Cita — delay 2.7s */}
      <motion.div {...springBounce(2.7)}>
        <Link
          href="#"
          aria-label="Agendar una cita"
        >
          <motion.div
            {...hoverSpring}
            className="w-14 h-14 bg-[#E91E8C] rounded-full flex items-center justify-center shadow-lg"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>

      {/* TikTok — delay 2.9s */}
      <motion.div {...springBounce(2.9)}>
        <Link
          href="https://www.tiktok.com/@harmonynailslashes"
          target="_blank"
          aria-label="Seguirnos en TikTok"
        >
          <motion.div
            {...hoverSpring}
            className="w-14 h-14 bg-[#1d1d1e] rounded-full flex items-center justify-center shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.17a8.19 8.19 0 004.79 1.52V7.24a4.86 4.86 0 01-1.02-.55z" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>

      {/* Instagram — top (delay 3.1s) */}
      <motion.div {...springBounce(3.1)}>
        <Link
          href="https://www.instagram.com/harmonynailslashes"
          target="_blank"
          aria-label="Seguirnos en Instagram"
        >
          <motion.div
            {...hoverSpring}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>

    </div>
  );
}
