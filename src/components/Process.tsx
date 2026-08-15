"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck, Printer, PackageCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Cuéntanos tu idea",
    description:
      "Escríbenos por WhatsApp con lo que necesitas — una foto de referencia, medidas, o una descripción. Entre más detalle, mejor.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Cotización en minutos",
    description:
      "Te respondemos rápido con el precio, el tiempo estimado y cualquier pregunta técnica. Sin rodeos.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Imprimimos con precisión",
    description:
      "Nuestras Bambu Lab trabajan con perfiles optimizados para cada material. Controlamos cada capa del proceso.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Entrega o envío",
    description:
      "Recoge en Uriangato o te lo mandamos a donde estés. Empaque seguro para que llegue impecable.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        background: "#2B3E5F",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(224,197,143,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "3%",
          width: "200px",
          height: "200px",
          backgroundImage:
            "radial-gradient(circle, rgba(245,240,233,0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          pointerEvents: "none",
        }}
      />

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
            Cómo trabajamos
          </p>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#F5F0E9",
              letterSpacing: "-0.03em",
              maxWidth: "520px",
              lineHeight: 1.1,
            }}
          >
            De tu idea a tus manos en cuatro pasos.
          </h2>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2px",
            background: "rgba(245,240,233,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(245,240,233,0.1)",
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  padding: "40px 32px",
                  background: "rgba(255,255,255,0.03)",
                  borderRight:
                    i < steps.length - 1
                      ? "1px solid rgba(245,240,233,0.08)"
                      : "none",
                  position: "relative",
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "3.5rem",
                    fontWeight: 800,
                    color: "rgba(224,197,143,0.15)",
                    lineHeight: 1,
                    marginBottom: "16px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(224,197,143,0.15)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={20} color="#E0C58F" />
                </div>

                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#F5F0E9",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,233,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
