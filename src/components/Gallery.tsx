"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const galleryItems = [
  {
    label: "Piezas personalizadas",
    description: "Diseños únicos para cada cliente",
    bg: "linear-gradient(135deg, #2B3E5F 0%, #3d5580 100%)",
    icon: "🎮",
  },
  {
    label: "Réplicas de autos",
    description: "Detalle milimétrico en cada curva",
    bg: "linear-gradient(135deg, #E0C58F 0%, #c8a96a 100%)",
    icon: "🏎️",
  },
  {
    label: "Funko Pops custom",
    description: "Tu personaje favorito, hecho a medida",
    bg: "linear-gradient(135deg, #D9CBC2 0%, #c4a898 100%)",
    icon: "✨",
  },
  {
    label: "Impresión en resina",
    description: "Alta definición, acabado premium",
    bg: "linear-gradient(135deg, #1e2d45 0%, #2B3E5F 100%)",
    icon: "💎",
  },
  {
    label: "Multicolor",
    description: "Filamento multicolor Bambu Lab",
    bg: "linear-gradient(135deg, #3d5580 0%, #E0C58F 100%)",
    icon: "🌈",
  },
  {
    label: "Piezas funcionales",
    description: "Diseño y utilidad en una sola pieza",
    bg: "linear-gradient(135deg, #c4a898 0%, #2B3E5F 100%)",
    icon: "🔧",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      style={{
        background: "#F5F0E9",
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
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
              Galería
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2B3E5F",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Nuestro trabajo habla
              <br />
              por sí solo.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/jt3d_creaciones"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#2B3E5F",
              textDecoration: "none",
              border: "1.5px solid rgba(43,62,95,0.25)",
              padding: "10px 20px",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2B3E5F";
              e.currentTarget.style.color = "#F5F0E9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2B3E5F";
            }}
          >
            <InstagramIcon size={16} />
            Ver más en Instagram
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Gallery grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "16px",
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
              style={{
                aspectRatio: i === 0 || i === 3 ? "1.5 / 1" : "1 / 1",
                gridColumn: i === 0 || i === 3 ? "span 2" : "span 1",
                background: item.bg,
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                cursor: "default",
                display: "flex",
                alignItems: "flex-end",
                padding: "24px",
              }}
            >
              {/* Emoji icon */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "4rem",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              >
                {item.icon}
              </div>

              {/* Label overlay */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#F5F0E9",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(245,240,233,0.7)",
                  }}
                >
                  {item.description}
                </div>
              </div>

              {/* Placeholder notice */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(245,240,233,0.2)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  color: "#F5F0E9",
                  fontWeight: 500,
                  backdropFilter: "blur(4px)",
                }}
              >
                Foto próximamente
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#6B6B6B",
            marginTop: "24px",
          }}
        >
          Pronto agregaremos fotos reales de nuestros trabajos. Mientras tanto,{" "}
          <a
            href="https://www.instagram.com/jt3d_creaciones"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2B3E5F", fontWeight: 600 }}
          >
            visita nuestro Instagram
          </a>{" "}
          para ver ejemplos.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-grid > div {
            grid-column: span 1 !important;
            aspect-ratio: 4 / 3 !important;
          }
        }
      `}</style>
    </section>
  );
}
