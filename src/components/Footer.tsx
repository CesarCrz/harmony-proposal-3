"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

const hours = [
  { day: "Lunes – Viernes", time: "9:00 am – 7:00 pm" },
  { day: "Sábado", time: "9:00 am – 6:00 pm" },
  { day: "Domingo", time: "Cerrado" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1e] text-white" id="contacto">
      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Col 1: Logo + Description + Social */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <div>
              <p className="font-[var(--font-playfair)] font-medium text-[22px] text-white tracking-wide">
                Harmony
              </p>
              <p className="font-[var(--font-nunito)] text-[13px] text-[#848484]">
                Nails & Lashes
              </p>
            </div>
            <p className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] leading-relaxed max-w-[260px]">
              Diseños personalizados, calidez y 17 años de experiencia combinada. Tu próximo look te espera en Harmony.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://www.instagram.com/harmonynailslashes",
                  label: "Instagram",
                  hoverColor: "#E91E8C",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  href: "https://www.tiktok.com/@harmonynailslashes",
                  label: "TikTok",
                  hoverColor: "#ffffff",
                  path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.69a4.85 4.85 0 01-1.01.0z",
                },
                {
                  href: "https://wa.me/523329203141",
                  label: "WhatsApp",
                  hoverColor: "#25D366",
                  path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                },
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="text-[#848484] hover:text-white transition-colors block"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Navigation */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
            <h4 className="font-[var(--font-nunito)] font-semibold text-[14px] text-white uppercase tracking-widest">
              Información
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Col 3: Opening Hours */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
            <h4 className="font-[var(--font-nunito)] font-semibold text-[14px] text-white uppercase tracking-widest">
              Horarios
            </h4>
            <div className="flex flex-col gap-3">
              {hours.map((item) => (
                <div key={item.day}>
                  <p className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484]">
                    {item.day}
                  </p>
                  <p className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484]/70">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
            <h4 className="font-[var(--font-nunito)] font-semibold text-[14px] text-white uppercase tracking-widest">
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#848484] shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                <p className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] leading-relaxed">
                  Zona Sur de Guadalajara,<br />cerca del ITESO, Jalisco
                </p>
              </div>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#848484] shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                </svg>
                <Link href="tel:3310450389" className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] hover:text-white transition-colors">
                  331 045 0389
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#848484] shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <Link href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] hover:text-[#25D366] transition-colors">
                  332 920 3141
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#848484] shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <Link href="https://www.instagram.com/harmonynailslashes" target="_blank" className="font-[var(--font-nunito)] font-normal text-[15px] text-[#848484] hover:text-[#E91E8C] transition-colors">
                  @harmonynailslashes
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1140px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484]">
              © 2026 Harmony Nails & Lashes. Todos los derechos reservados.
            </p>
            <p className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484]">
              Impulsado por <a href="http://instagram.com/harmonynailslashes/" className="text-[#848484] hover:text-white hover:underline transition-colors"><b>Activo Digital MX</b></a>
            </p>
          </div>
          <p className="font-[var(--font-nunito)] font-normal text-[14px] text-[#848484]">
            Guadalajara, Jalisco
          </p>
        </div>
      </div>
    </footer>
  );
}
