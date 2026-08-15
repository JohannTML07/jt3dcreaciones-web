import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JT3D Creaciones — Impresión 3D Personalizada en Guanajuato",
  description:
    "Servicio profesional de impresión 3D en filamento y resina. Piezas personalizadas, réplicas, Funko Pops custom y más. Ubicados en Uriangato, Guanajuato. Envíos nacionales.",
  keywords: [
    "impresión 3D",
    "impresión 3D Guanajuato",
    "impresión 3D personalizada",
    "filamento",
    "resina",
    "Bambu Lab",
    "Funko Pop personalizado",
    "réplicas 3D",
    "Uriangato",
    "JT3D",
  ],
  openGraph: {
    title: "JT3D Creaciones — Impresión 3D Personalizada",
    description:
      "Si puedes imaginarlo, nosotros podemos hacerlo. Impresión 3D en filamento y resina. Piezas únicas a tu medida.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "JT3D Creaciones — Impresión 3D Personalizada",
    description:
      "Si puedes imaginarlo, nosotros podemos hacerlo. Impresión 3D en filamento y resina.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
