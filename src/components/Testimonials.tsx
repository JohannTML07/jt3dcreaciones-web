"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Guadalajara, Jalisco",
    text: "Pedí una réplica de mi auto favorito y quedé impresionado con el nivel de detalle. El acabado es increíble y llegó bien empacado. Definitivamente vuelvo a pedir.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Laura R.",
    location: "León, Guanajuato",
    text: "Me hicieron un Funko Pop personalizado de mi perro. Es exactamente como lo imaginé. Respondieron rápido mis dudas y el precio fue muy accesible.",
    rating: 5,
    initials: "LR",
  },
  {
    name: "Andrés T.",
    location: "Ciudad de México",
    text: "Necesitaba piezas de repuesto para un proyecto y JT3D las imprimió en resina con una precisión que no encontré en otros servicios. 100% recomendados.",
    rating: 5,
    initials: "AT",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill="#E0C58F"
          color="#E0C58F"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      style={{
        background: "#D9CBC2",
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
          style={{ marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#2B3E5F",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Lo que dicen nuestros clientes
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
            Resultados que
            <br />
            hablan por sí solos.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(43,62,95,0.6)",
              marginTop: "12px",
              fontStyle: "italic",
            }}
          >
            * Testimonios de ejemplo — pronto agregaremos reseñas reales de clientes.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                background: "#F5F0E9",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(43,62,95,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Stars */}
              <Stars count={t.rating} />

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "#1A1A1A",
                  lineHeight: 1.75,
                  margin: 0,
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(43,62,95,0.08)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#2B3E5F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#E0C58F",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#2B3E5F",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "#6B6B6B",
                    }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
