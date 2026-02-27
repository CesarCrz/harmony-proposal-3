"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar() {
  return (
    <motion.div
      className="bg-[#fbbbff] flex items-center justify-center gap-3 px-6 py-3.5 w-full overflow-hidden"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.span
        className="text-[#E91E8C] text-lg"
        animate={{ rotate: [0, 15, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <p className="font-[var(--font-nunito)] font-semibold text-[16px] text-[#1d1d1e] text-center">
        ¡Bienvenida a Harmony Nails & Lashes! — 20% de descuento en tu primera visita
      </p>
      <motion.span
        className="text-[#E91E8C] text-lg"
        animate={{ rotate: [0, -15, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        ✦
      </motion.span>
    </motion.div>
  );
}
