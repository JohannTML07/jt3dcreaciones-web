"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Package, Truck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Piezas Personalizadas",
    description:
      "Réplicas de autos, Funko Pops a tu medida, figuras únicas. Trae tu idea — la hacemos realidad con precisión milimétrica.",
    accent: "#E0C58F",
    tag: "Nuestro fuerte",
  },
  {
    icon: Layers,
    title: "Impresión en Filamento",
    description:
      "Filamento estándar y multicolor con máquinas Bambu Lab. Para piezas funcionales, decorativas o prototipos con excelente acabado.",
    accent: "#2B3E5F",
    tag: "Filamento · Multicolor",
  },
  {
    icon: Package,
    title: "Impresión en Resina",
    description:
      "Resina de alta definición para detalles finos. Ideal cuando la precisión importa — miniaturas, joyería, piezas de colección.",
    accent: "#3d5580",
    tag: "Alta definición",
  },
  {
    icon: Truck,
    title: "Envíos Nacionales",
    description:
      "Empacamos y enviamos a cualquier estado de México. Si estás en Uriangato, también hacemos entrega a domicilio.",
    accent: "#D9CBC2",
    tag: "Todo México",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        background: "#FAFAF7",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "64px" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#E0C58F",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Lo que hacemos
          </p>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#2B3E5F",
              letterSpacing: "-0.03em",
              maxWidth: "560px",
              lineHeight: 1.1,
            }}
          >
            Impresión 3D con carácter propio.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#6B6B6B",
              marginTop: "16px",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            No hacemos piezas genéricas por defecto. Nuestro trabajo empieza
            con lo que tú tienes en mente.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#F5F0E9",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(43,62,95,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: service.accent,
                  }}
                />

                {/* Tag */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2B3E5F",
                    background: "rgba(43,62,95,0.07)",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    marginBottom: "20px",
                  }}
                >
                  {service.tag}
                </span>

                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(43,62,95,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={22} color="#2B3E5F" />
                </div>

                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#2B3E5F",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#4A4A4A",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
