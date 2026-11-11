import React, { useState, useEffect } from "react";
import {
  Heart,
  Clock,
  Camera,
  Film,
  Gift,
  Sparkles,
  HelpCircle,
  Mail,
  Music,
  BookOpen,
  Stars,
  Menu,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", icon: Stars },
  { id: "historia", label: "Historia", icon: Clock },
  { id: "album", label: "Álbum", icon: Camera },
  { id: "videos", label: "Cine", icon: Film },
  { id: "hellokitty", label: "Hello Kitty", icon: Gift },
  { id: "spiderman", label: "Spider-Man", icon: Sparkles },
  { id: "juego", label: "Juego", icon: HelpCircle },
  { id: "razones", label: "365 Razones", icon: Heart },
  { id: "cancion", label: "Canción", icon: Music },
  { id: "carta", label: "Carta", icon: Mail },
  { id: "final", label: "Siempre Tú", icon: BookOpen },
];

export default function FloatingNav({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, (window.scrollY / totalHeight) * 100));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerLoveShower = () => {
    const defaults = {
      spread: 360,
      ticks: 90,
      gravity: 0.45,
      decay: 0.94,
      startVelocity: 24,
      colors: ["#ff2e7e", "#ffd6e4", "#c9184a", "#f4c430", "#c8b6ff"],
    };

    confetti({
      ...defaults,
      particleCount: 45,
      scalar: 1.2,
      origin: { x: 0.5, y: 0.35 },
    });
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 60,
          background: "rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollProgress}%`,
            background:
              "linear-gradient(90deg, #ff2e7e, #ffd6e4, #f4c430, #ff2e7e)",
            boxShadow: "0 0 12px rgba(255, 46, 126, 0.8)",
            transition: "width 0.15s ease-out",
          }}
        />
      </div>

      {/* Floating Header Bar */}
      <header
        style={{
          position: "fixed",
          top: "14px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "min(96vw, 1180px)",
        }}
      >
        <div
          className="glass-panel"
          style={{
            borderRadius: "999px",
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          {/* Couple Brand */}
          <button
            onClick={() => scrollToSection("inicio")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              cursor: "pointer",
              padding: "0.25rem 0.6rem",
              flexShrink: 0,
            }}
          >
            <span
              className="animate-heartbeat"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--pink-vibrant), var(--cherry-red))",
                boxShadow: "0 0 15px rgba(255, 46, 126, 0.6)",
              }}
            >
              <Heart size={15} fill="#fff" color="#fff" />
            </span>
            <span
              className="font-script"
              style={{
                fontSize: "1.55rem",
                background:
                  "linear-gradient(135deg, #fff 0%, #ffd6e4 60%, #ffe6a7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Liz & José
            </span>
          </button>

          {/* Desktop Navigation Pills */}
          <nav
            className="desktop-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.42rem 0.78rem",
                    borderRadius: "999px",
                    border: isActive
                      ? "1px solid rgba(255, 230, 167, 0.55)"
                      : "1px solid transparent",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255, 46, 126, 0.45), rgba(201, 24, 74, 0.45))"
                      : "transparent",
                    color: isActive ? "#fff" : "rgba(255, 249, 251, 0.78)",
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Icon size={13} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <button
              onClick={triggerLoveShower}
              title="Lluvia de Amor"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "999px",
                border: "1px solid rgba(244, 196, 48, 0.45)",
                background:
                  "linear-gradient(135deg, rgba(255, 46, 126, 0.28), rgba(244, 196, 48, 0.22))",
                color: "#ffe6a7",
                fontSize: "0.78rem",
                fontWeight: 600,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <Sparkles size={14} />
              <span className="hide-on-small">Magia</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Abrir menú de secciones"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid rgba(255, 214, 228, 0.3)",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="glass-panel"
            style={{
              marginTop: "0.55rem",
              borderRadius: "22px",
              padding: "0.9rem",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.45rem",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "14px",
                    border: isActive
                      ? "1px solid rgba(255, 230, 167, 0.5)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255, 46, 126, 0.4), rgba(201, 24, 74, 0.4))"
                      : "rgba(255, 255, 255, 0.04)",
                    color: "#fff",
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <Icon size={15} color="#ff7aa8" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .hide-on-small {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

