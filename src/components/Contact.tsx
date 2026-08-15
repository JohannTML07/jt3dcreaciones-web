"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Send } from "lucide-react";

const WA_URL =
  "https://wa.me/524451597964?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20sus%20servicios%20de%20impresi%C3%B3n%203D.";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        background: "#FAFAF7",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              Contacto
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2B3E5F",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              ¿Tienes algo
              <br />
              en mente?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.05rem",
                color: "#4A4A4A",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "420px",
              }}
            >
              Escríbenos directo por WhatsApp. Cuéntanos qué necesitas —
              medidas, material, cantidad — y te damos precio en minutos. Sin
              formularios largos.
            </p>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "#F5F0E9",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(43,62,95,0.08)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(43,62,95,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={18} color="#2B3E5F" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#2B3E5F",
                    }}
                  >
                    WhatsApp
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#6B6B6B",
                    }}
                  >
                    +52 445 159 7964
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "#F5F0E9",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(43,62,95,0.08)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(43,62,95,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} color="#2B3E5F" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#2B3E5F",
                    }}
                  >
                    Ubicación
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#6B6B6B",
                    }}
                  >
                    Uriangato, Guanajuato, México
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div
              style={{
                background: "#2B3E5F",
                borderRadius: "24px",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-30%",
                  right: "-20%",
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(224,197,143,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#F5F0E9",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                Empieza tu proyecto hoy.
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(245,240,233,0.7)",
                  lineHeight: 1.7,
                  marginBottom: "36px",
                  position: "relative",
                }}
              >
                Mándanos un WhatsApp con lo que necesitas. Sin costos de
                asesoría. Sin compromiso de compra.
              </p>

              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  background: "#E0C58F",
                  color: "#1A1A1A",
                  padding: "18px 32px",
                  borderRadius: "10px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 6px 24px rgba(224,197,143,0.3)",
                  position: "relative",
                }}
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
                <Send size={16} style={{ marginLeft: "4px" }} />
              </motion.a>

              <p
                style={{
                  textAlign: "center",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(245,240,233,0.4)",
                  marginTop: "16px",
                  position: "relative",
                }}
              >
                Respondemos en horario de lunes a sábado
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
