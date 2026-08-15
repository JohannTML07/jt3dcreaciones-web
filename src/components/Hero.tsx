"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/524451597964?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20sus%20servicios%20de%20impresi%C3%B3n%203D.";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #F5F0E9 0%, #EDE6D9 60%, #D9CBC2 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Geometric background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "55%",
          height: "110%",
          background: "linear-gradient(135deg, rgba(43,62,95,0.06) 0%, rgba(43,62,95,0.02) 100%)",
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Accent dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "3%",
          width: "180px",
          height: "180px",
          backgroundImage: "radial-gradient(circle, rgba(43,62,95,0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          pointerEvents: "none",
        }}
      />
      {/* Golden accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "8%",
          width: "2px",
          height: "200px",
          background: "linear-gradient(to bottom, #E0C58F, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left column — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(43,62,95,0.08)",
              border: "1px solid rgba(43,62,95,0.15)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E0C58F",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#2B3E5F",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Uriangato, Guanajuato · Envíos nacionales
            </span>
          </motion.div>

          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#2B3E5F",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            Si puedes{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              imaginarlo
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "#E0C58F",
                  borderRadius: "2px",
                }}
              />
            </span>
            ,<br />
            nosotros podemos <span style={{ color: "#E0C58F" }}>hacerlo.</span>
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "#4A4A4A",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Impresión 3D en filamento y resina con máquinas Bambu Lab. Piezas
            personalizadas, réplicas y más — para cualquier persona, en cualquier lugar de México.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#2B3E5F",
                color: "#F5F0E9",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 20px rgba(43,62,95,0.25)",
              }}
            >
              <MessageCircle size={18} />
              Pedir cotización
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#2B3E5F",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                border: "1.5px solid rgba(43,62,95,0.3)",
              }}
            >
              Ver servicios
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "Bambu Lab", label: "Tecnología de precisión" },
              { num: "Filamento + Resina", label: "Dos tecnologías" },
              { num: "Envíos", label: "A todo México" },
            ].map((item) => (
              <div key={item.num}>
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#2B3E5F",
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#6B6B6B",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              background: "linear-gradient(135deg, rgba(43,62,95,0.08) 0%, rgba(224,197,143,0.15) 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(43,62,95,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Hexagon pattern inspired by logo */}
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "75%", height: "75%", opacity: 0.12 }}
              aria-hidden="true"
            >
              <polygon
                points="150,20 270,85 270,215 150,280 30,215 30,85"
                stroke="#2B3E5F"
                strokeWidth="3"
                fill="none"
              />
              <polygon
                points="150,50 245,100 245,200 150,250 55,200 55,100"
                stroke="#E0C58F"
                strokeWidth="2"
                fill="none"
              />
              <text
                x="150"
                y="165"
                textAnchor="middle"
                fontFamily="Sora, sans-serif"
                fontWeight="800"
                fontSize="52"
                fill="#2B3E5F"
              >
                JT3D
              </text>
            </svg>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "12%",
                right: "8%",
                background: "#F5F0E9",
                borderRadius: "12px",
                padding: "12px 18px",
                boxShadow: "0 8px 24px rgba(43,62,95,0.12)",
                border: "1px solid rgba(224,197,143,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#2B3E5F",
                }}
              >
                🖨️ Filamento
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  color: "#6B6B6B",
                }}
              >
                Multicolor disponible
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: "14%",
                left: "6%",
                background: "#2B3E5F",
                borderRadius: "12px",
                padding: "12px 18px",
                boxShadow: "0 8px 24px rgba(43,62,95,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#E0C58F",
                }}
              >
                💎 Resina
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(245,240,233,0.7)",
                }}
              >
                Alta definición
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        aria-label="Ir a servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#2B3E5F",
          textDecoration: "none",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
