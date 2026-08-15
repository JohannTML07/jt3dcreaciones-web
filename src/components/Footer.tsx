"use client";

import React from "react";

const WA_URL =
  "https://wa.me/524451597964?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20sus%20servicios%20de%20impresi%C3%B3n%203D.";

const socialLinks: {
  label: string;
  href: string;
  icon: React.ElementType | null;
  customIcon?: string;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jt3d_creaciones",
    icon: null,
    customIcon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jt3dcreaciones",
    icon: null,
    customIcon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@jt3d_creaciones",
    icon: null,
    customIcon: "tiktok",
  },
];

function CustomIcon({ name }: { name: string }) {
  if (name === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    );
  }
  return null;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1e2d45",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(245,240,233,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#F5F0E9",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              JT3D <span style={{ color: "#E0C58F" }}>Creaciones</span>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(245,240,233,0.55)",
                lineHeight: 1.75,
                maxWidth: "300px",
                marginBottom: "24px",
              }}
            >
              Servicio de impresión 3D en filamento y resina. Piezas
              personalizadas para cualquier necesidad. Uriangato, Guanajuato.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{
                      width: "38px",
                      height: "38px",
                      background: "rgba(245,240,233,0.08)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(245,240,233,0.6)",
                      textDecoration: "none",
                      transition: "background 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#E0C58F";
                      e.currentTarget.style.color = "#1A1A1A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(245,240,233,0.08)";
                      e.currentTarget.style.color = "rgba(245,240,233,0.6)";
                    }}
                  >
                    {Icon ? <Icon size={18} /> : <CustomIcon name={link.customIcon!} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "rgba(245,240,233,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Navegación
            </div>
            <nav aria-label="Navegación del footer">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  { label: "Servicios", href: "#servicios" },
                  { label: "Cómo trabajamos", href: "#proceso" },
                  { label: "Galería", href: "#galeria" },
                  { label: "Testimonios", href: "#testimonios" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(245,240,233,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#E0C58F")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(245,240,233,0.55)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "rgba(245,240,233,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Contacto
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,233,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#E0C58F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,233,0.55)")
                }
              >
                WhatsApp: +52 445 159 7964
              </a>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,233,0.55)",
                }}
              >
                Uriangato, Guanajuato
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,233,0.55)",
                }}
              >
                Envíos a todo México
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(245,240,233,0.3)",
            }}
          >
            © {year} JT3D Creaciones. Todos los derechos reservados.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(245,240,233,0.25)",
            }}
          >
            Built with{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(245,240,233,0.35)", textDecoration: "none" }}
            >
              Claude Web Builder by Tododeia
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
