import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import { SPIDERMAN_GALLERY, SPIDER_WEB_HEARTS } from "../data/memoriesData";

/* Telaraña SVG animada */
function Web({ size = 220, style }) {
  const rings = [0.25, 0.45, 0.65, 0.85, 1];
  const spokes = 10;
  const c = 100;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style} aria-hidden="true">
      <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none">
        {[...Array(spokes)].map((_, i) => {
          const a = (i / spokes) * Math.PI * 2;
          return <line key={i} x1={c} y1={c} x2={c + Math.cos(a) * 100} y2={c + Math.sin(a) * 100} />;
        })}
        {rings.map((r) => (
          <polygon
            key={r}
            points={[...Array(spokes)]
              .map((_, i) => {
                const a = (i / spokes) * Math.PI * 2;
                return `${c + Math.cos(a) * 100 * r},${c + Math.sin(a) * 100 * r}`;
              })
              .join(" ")}
          />
        ))}
      </g>
    </svg>
  );
}

/* Corazón con telaraña */
function WebHeart({ size = 110, active }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 92" aria-hidden="true">
      <defs>
        <clipPath id="heartClip">
          <path d="M50 88 L10 48 C-6 30 6 4 28 6 C40 7 47 16 50 22 C53 16 60 7 72 6 C94 4 106 30 90 48 Z" />
        </clipPath>
        <linearGradient id="spideyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff3b3f" />
          <stop offset="100%" stopColor={active ? "#1b3c87" : "#a8141a"} />
        </linearGradient>
      </defs>
      <path d="M50 88 L10 48 C-6 30 6 4 28 6 C40 7 47 16 50 22 C53 16 60 7 72 6 C94 4 106 30 90 48 Z" fill="url(#spideyGrad)" stroke="#000" strokeWidth="3" />
      <g clipPath="url(#heartClip)" stroke="rgba(0,0,0,0.65)" strokeWidth="1.3" fill="none">
        {[...Array(8)].map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return <line key={i} x1="50" y1="42" x2={50 + Math.cos(a) * 70} y2={42 + Math.sin(a) * 70} />;
        })}
        {[12, 24, 36, 48].map((r) => (
          <circle key={r} cx="50" cy="42" r={r} />
        ))}
      </g>
      {/* ojos de Spidey */}
      <path d="M30 34 C36 28 44 32 44 40 C38 42 32 40 30 34 Z" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <path d="M70 34 C64 28 56 32 56 40 C62 42 68 40 70 34 Z" fill="#fff" stroke="#000" strokeWidth="2.5" />
    </svg>
  );
}

const COMIC_SFX = ["¡THWIP!", "¡POW!", "¡BAM!", "¡ZAS!"];

export default function SpiderManSection() {
  const [revealed, setRevealed] = useState({});
  const [active, setActive] = useState(null);
  const [sfx, setSfx] = useState(null);

  const openHeart = (h, i) => {
    setRevealed((r) => ({ ...r, [h.id]: true }));
    setSfx({ text: COMIC_SFX[i % COMIC_SFX.length], key: Date.now() });
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 }, colors: ["#e62429", "#1b3c87", "#ffffff", "#00d2ff"] });
    setTimeout(() => setActive(h), 420);
  };

  return (
    <section id="spiderman" className="spidey-section-wrapper">
      <div className="section-container" style={{ position: "relative", overflow: "hidden" }}>
        <Web size={280} style={{ position: "absolute", top: -60, left: -70, opacity: 0.6 }} />
        <Web size={240} style={{ position: "absolute", bottom: -50, right: -60, opacity: 0.5 }} />

        {/* Spidey colgando */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, right: "12%", transformOrigin: "top center", display: "flex", flexDirection: "column", alignItems: "center" }}
          className="hide-mobile"
        >
          <div style={{ width: 2, height: 110, background: "rgba(255,255,255,0.7)" }} />
          <div style={{ transform: "rotate(180deg)" }}>
            <WebHeart size={64} />
          </div>
        </motion.div>

        <div className="section-header">
          <span className="comic-caption-box font-comic" style={{ marginBottom: "1rem" }}>
            Mientras tanto, en Tierra-1111…
          </span>
          <h2 className="section-title font-comic" style={{ letterSpacing: "0.04em", color: "#fff", textShadow: "4px 4px 0 #e62429, 7px 7px 0 #1b3c87" }}>
            Un Universo de Spider-Man
          </h2>
          <p className="section-subtitle">
            Nuestro lado romántico y nuestras ganas de divertirnos como niños, mi amorcini.
          </p>
        </div>

        {/* Viñetas de cómic con fotos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.8rem", marginBottom: "4rem" }}>
          {SPIDERMAN_GALLERY.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, rotate: i % 2 ? 4 : -4, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: i % 2 ? 1.2 : -1.2, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="comic-panel"
              style={{ padding: "10px" }}
            >
              <img src={p.src} alt={p.title} loading="lazy" style={{ width: "100%", height: "330px", objectFit: "cover", borderRadius: "8px", display: "block", border: "2px solid #000" }} />
              <div style={{ padding: "0.8rem 0.3rem 0.2rem" }}>
                <span className="comic-caption-box font-comic" style={{ fontSize: "1rem" }}>{p.title}</span>
                <p style={{ marginTop: "0.6rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>{p.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje principal estilo bocadillo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "760px",
            margin: "0 auto 4rem",
            background: "#fff",
            color: "#111",
            border: "4px solid #000",
            borderRadius: "40px",
            padding: "1.8rem 2rem",
            textAlign: "center",
            boxShadow: "10px 10px 0 #e62429",
            position: "relative",
          }}
        >
          <p className="font-comic" style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)", lineHeight: 1.2 }}>
            “Ni todos los multiversos podrían cambiar el hecho de que te elegiría a ti.”
          </p>
          <div style={{ position: "absolute", bottom: -26, left: "18%", width: 0, height: 0, borderLeft: "18px solid transparent", borderRight: "18px solid transparent", borderTop: "28px solid #000" }} />
        </motion.div>

        {/* Corazones con telaraña */}
        <div style={{ textAlign: "center" }}>
          <h3 className="font-comic" style={{ fontSize: "1.8rem", color: "#00d2ff", marginBottom: "0.4rem" }}>
            Toca un corazón atrapado en la telaraña
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.8rem" }}>Cada uno guarda un mensajito secreto para ti, guapa.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            {SPIDER_WEB_HEARTS.map((h, i) => (
              <motion.button
                key={h.id}
                onClick={() => openHeart(h, i)}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}
              >
                <WebHeart size={104} active={revealed[h.id]} />
                <span className="font-comic" style={{ color: "#fff", fontSize: "1rem", letterSpacing: "0.06em" }}>{h.badge}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {sfx && (
            <motion.div
              key={sfx.key}
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], rotate: -8, opacity: [0, 1, 0] }}
              transition={{ duration: 0.9 }}
              onAnimationComplete={() => setSfx(null)}
              className="font-comic"
              style={{ position: "fixed", top: "40%", left: "50%", translate: "-50% -50%", zIndex: 95, fontSize: "5rem", color: "#ffde59", WebkitTextStroke: "3px #000", textShadow: "6px 6px 0 #e62429", pointerEvents: "none" }}
            >
              {sfx.text}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(5,10,30,0.8)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.2rem" }}
            >
              <motion.div
                initial={{ scale: 0.6, rotate: 6 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.6 }}
                onClick={(e) => e.stopPropagation()}
                className="comic-panel"
                style={{ maxWidth: "480px", padding: "2rem", textAlign: "center" }}
              >
                <button onClick={() => setActive(null)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
                  <X size={20} />
                </button>
                <span className="comic-caption-box font-comic">{active.badge}</span>
                <h4 className="font-comic" style={{ fontSize: "2rem", margin: "0.9rem 0 0.6rem", color: "#ff3b3f" }}>{active.title}</h4>
                <p style={{ lineHeight: 1.65, color: "#fff", fontSize: "1.05rem" }}>{active.secret}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style>{`@media (max-width: 768px){ .hide-mobile{ display:none !important; } }`}</style>
    </section>
  );
}

