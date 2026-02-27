import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harmony Nails & Lashes - Uñas Acrílicas y Pestañas en Guadalajara Sur",
  description:
    "Diseños personalizados de uñas acrílicas, pestañas y más. 17 años de experiencia combinada. Agenda tu cita en Guadalajara zona sur, cerca de ITESO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
