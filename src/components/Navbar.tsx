"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(245,240,233,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(43,62,95,0.1)" : "none",
      }}
    >
      <nav
        aria-label="Navegación principal"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#2B3E5F",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          JT3D <span style={{ color: "#E0C58F" }}>Creaciones</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "32px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#2B3E5F",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#E0C58F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#2B3E5F")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/524451597964?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20sus%20servicios%20de%20impresi%C3%B3n%203D.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#2B3E5F",
                color: "#F5F0E9",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.1s ease",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E0C58F";
                e.currentTarget.style.color = "#1A1A1A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2B3E5F";
                e.currentTarget.style.color = "#F5F0E9";
              }}
            >
              Pedir cotización
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#2B3E5F",
            display: "none",
            padding: "8px",
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#F5F0E9",
              borderTop: "1px solid rgba(43,62,95,0.1)",
              padding: "24px",
            }}
          >
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#2B3E5F",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/524451597964?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20sus%20servicios%20de%20impresi%C3%B3n%203D.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#2B3E5F",
                    color: "#F5F0E9",
                    padding: "14px 22px",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Pedir cotización por WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
