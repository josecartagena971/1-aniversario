import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Star, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";
import { HELLO_KITTY_GALLERY, HELLO_KITTY_SURPRISES } from "../data/memoriesData";

/* Ilustración kawaii estilo Hello Kitty hecha en SVG (sin imágenes externas) */
export function KittyFace({ size = 120, bowColor = "#ff2e7e" }) {
  return (
    <svg width={size} height={size * 0.86} viewBox="0 0 140 120" aria-hidden="true">
      {/* orejas */}
      <path d="M22 44 L18 8 L52 28 Z" fill="#fff" stroke="#2b1329" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M118 44 L122 8 L88 28 Z" fill="#fff" stroke="#2b1329" strokeWidth="3.5" strokeLinejoin="round" />
      {/* cabeza */}
      <ellipse cx="70" cy="68" rx="60" ry="46" fill="#fff" stroke="#2b1329" strokeWidth="3.5" />
      {/* ojos */}
      <ellipse cx="46" cy="70" rx="5" ry="7" fill="#2b1329" />
      <ellipse cx="94" cy="70" rx="5" ry="7" fill="#2b1329" />
      {/* nariz */}
      <ellipse cx="70" cy="82" rx="6" ry="4.5" fill="#f4c430" stroke="#2b1329" strokeWidth="2" />
      {/* bigotes */}
      <g stroke="#2b1329" strokeWidth="3" strokeLinecap="round">
        <line x1="6" y1="66" x2="26" y2="70" />
        <line x1="4" y1="80" x2="25" y2="80" />
        <line x1="8" y1="94" x2="27" y2="89" />
        <line x1="134" y1="66" x2="114" y2="70" />
        <line x1="136" y1="80" x2="115" y2="80" />
        <line x1="132" y1="94" x2="113" y2="89" />
      </g>
      {/* moño */}
      <g transform="translate(100 26) rotate(18)">
        <path d="M0 0 C-22 -22 -34 -2 -26 12 C-20 22 -6 12 0 0 Z" fill={bowColor} stroke="#2b1329" strokeWidth="3" />
        <path d="M0 0 C22 -22 34 -2 26 12 C20 22 6 12 0 0 Z" fill={bowColor} stroke="#2b1329" strokeWidth="3" />
        <circle cx="0" cy="2" r="7" fill={bowColor} stroke="#2b1329" strokeWidth="3" />
      </g>
    </svg>
  );
}

function Bow({ size = 34, color = "#ff6fa5" }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 42" aria-hidden="true">
      <path d="M30 21 C14 0 0 6 4 22 C8 38 22 32 30 21 Z" fill={color} />
      <path d="M30 21 C46 0 60 6 56 22 C52 38 38 32 30 21 Z" fill={color} />
      <circle cx="30" cy="21" r="7" fill="#ff2e7e" />
    </svg>
  );
}

const KAWAII_FLOATERS = [
  { el: "bow", left: "4%", top: "12%", d: 0 },
  { el: "star", left: "90%", top: "8%", d: 1 },
  { el: "heart", left: "8%", top: "78%", d: 2 },
  { el: "cloud", left: "82%", top: "70%", d: 0.5 },
  { el: "flower", left: "50%", top: "4%", d: 1.5 },
  { el: "bow", left: "94%", top: "42%", d: 2.5 },
];

function Floater({ el }) {
  if (el === "bow") return <Bow />;
  if (el === "star") return <Star size={26} fill="#ffe6a7" color="#f4c430" />;
  if (el === "heart") return <Heart size={26} fill="#ff6fa5" color="#ff2e7e" />;
  if (el === "flower")
    return (
      <svg width="30" height="30" viewBox="0 0 30 30">
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="15" cy="7" rx="5" ry="7" fill="#ffd6e4" transform={`rotate(${r} 15 15)`} />
        ))}
        <circle cx="15" cy="15" r="4" fill="#f4c430" />
      </svg>
    );
  return (
    <svg width="54" height="30" viewBox="0 0 54 30">
      <path d="M12 28 C2 28 2 14 12 14 C12 4 28 2 30 12 C34 6 46 8 44 18 C54 18 54 28 44 28 Z" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export default function HelloKittySection() {
  const [giftState, setGiftState] = useState("hidden"); // hidden | box | open
  const [surprise, setSurprise] = useState(null);
  const [found, setFound] = useState({});
  const [secretKitty, setSecretKitty] = useState(0);

  const openGift = () => {
    setGiftState("open");
    const colors = ["#ff6fa5", "#ffd6e4", "#ff2e7e", "#ffe6a7", "#ffffff"];
    confetti({ particleCount: 90, spread: 100, origin: { y: 0.55 }, colors, shapes: ["circle", "square"] });
    setTimeout(() => confetti({ particleCount: 50, spread: 140, origin: { y: 0.5 }, colors, scalar: 1.4 }), 300);
  };

  const revealSurprise = (s) => {
    setSurprise(s);
    setFound((f) => ({ ...f, [s.id]: true }));
  };

  const foundCount = Object.keys(found).length;

  return (
    <section id="hellokitty" className="kawaii-section-wrapper">
      <div className="section-container" style={{ position: "relative" }}>
        {KAWAII_FLOATERS.map((f, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: f.d, ease: "easeInOut" }}
            style={{ position: "absolute", left: f.left, top: f.top, opacity: 0.85, pointerEvents: "none" }}
          >
            <Floater el={f.el} />
          </motion.div>
        ))}

        <div className="section-header">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -4 }}
            onClick={() => setSecretKitty((n) => n + 1)}
            style={{ display: "inline-block", cursor: "pointer", marginBottom: "0.6rem" }}
            title="psst... haz clic"
          >
            <KittyFace size={118} />
          </motion.div>
          <AnimatePresence>
            {secretKitty >= 3 && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="font-hand"
                style={{ color: "#ffd6e4", fontSize: "1.2rem", marginBottom: "0.6rem" }}
              >
                ¡Encontraste un secreto! Eres mi muñequita bonita y mi gatita consentida 🎀
              </motion.p>
            )}
          </AnimatePresence>
          <span className="section-badge">
            <Bow size={20} /> <span>Un universo kawaii para Liz</span>
          </span>
          <h2 className="section-title" style={{ color: "#ffd6e4" }}>
            Un Universo de <span className="font-script" style={{ color: "#ff6fa5", fontSize: "1.15em" }}>Hello Kitty</span>
          </h2>
          <p className="section-subtitle">
            Moñitos, nubes, estrellitas y flores… porque a mi muñequita bonita le encanta todo lo tierno y se merece un mundo así de dulce.
          </p>
        </div>

        {/* Fotos de ella en marcos kawaii */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.6rem",
            marginBottom: "4rem",
          }}
        >
          {HELLO_KITTY_GALLERY.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
              className="kawaii-card"
              style={{ padding: "12px 12px 16px", position: "relative" }}
            >
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
                <Bow size={44} />
              </div>
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "20px", display: "block" }}
              />
              <h4 className="font-hand" style={{ fontSize: "1.3rem", marginTop: "0.6rem", textAlign: "center", color: "#c9184a" }}>
                {p.title}
              </h4>
              <p style={{ fontSize: "0.85rem", textAlign: "center", color: "#6b2a4c" }}>{p.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Dinámica del regalo */}
        <div className="kawaii-card" style={{ maxWidth: "720px", margin: "0 auto 4rem", padding: "2.4rem 1.6rem", textAlign: "center" }}>
          <h3 className="font-script" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#c9184a" }}>
            Un pequeño regalo para mi niña bonita
          </h3>

          <div style={{ minHeight: "240px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}>
            <AnimatePresence mode="wait">
              {giftState === "hidden" && (
                <motion.button
                  key="btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  onClick={() => setGiftState("box")}
                  className="btn-romantic"
                  style={{ background: "linear-gradient(135deg, #ff6fa5, #ff2e7e)" }}
                >
                  <Gift size={20} /> <span>Recibir mi regalo 🎀</span>
                </motion.button>
              )}

              {giftState === "box" && (
                <motion.div
                  key="box"
                  initial={{ y: -120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, rotate: [0, -4, 4, -3, 3, 0] }}
                  exit={{ scale: 1.4, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 160, damping: 12, rotate: { delay: 0.6, duration: 0.8, repeat: Infinity, repeatDelay: 1.2 } }}
                  onClick={openGift}
                  style={{ cursor: "pointer", position: "relative" }}
                  title="¡Ábrelo!"
                >
                  <svg width="170" height="170" viewBox="0 0 170 170">
                    <rect x="20" y="70" width="130" height="90" rx="10" fill="#ff6fa5" stroke="#c9184a" strokeWidth="4" />
                    <rect x="12" y="50" width="146" height="30" rx="8" fill="#ff8fbb" stroke="#c9184a" strokeWidth="4" />
                    <rect x="76" y="50" width="18" height="110" fill="#fff" />
                    <path d="M85 50 C55 10 30 30 50 48 Z" fill="#fff" stroke="#c9184a" strokeWidth="3" />
                    <path d="M85 50 C115 10 140 30 120 48 Z" fill="#fff" stroke="#c9184a" strokeWidth="3" />
                    <circle cx="85" cy="50" r="9" fill="#ff2e7e" />
                  </svg>
                  <p className="font-hand" style={{ color: "#c9184a", fontSize: "1.2rem" }}>¡Tócala para abrirla!</p>
                </motion.div>
              )}

              {giftState === "open" && (
                <motion.div
                  key="open"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  style={{ position: "relative" }}
                >
                  {[...Array(10)].map((_, i) => (
                    <motion.span
                      key={i}
                      aria-hidden="true"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: Math.cos(i * 0.63) * 150, y: Math.sin(i * 0.63) * 110 - 40, opacity: [1, 1, 0] }}
                      transition={{ duration: 1.8, delay: i * 0.05 }}
                      style={{ position: "absolute", left: "50%", top: "40%" }}
                    >
                      {i % 2 ? <Star size={18} fill="#ffe6a7" color="#f4c430" /> : <Heart size={18} fill="#ff2e7e" color="#ff2e7e" />}
                    </motion.span>
                  ))}
                  <KittyFace size={90} />
                  <p className="font-serif" style={{ fontSize: "1.35rem", color: "#4a1936", maxWidth: "520px", lineHeight: 1.55, marginTop: "0.8rem" }}>
                    Mi mejor regalo eres tú, corazón de melocotón. Gracias por aguantarme, por hacerme reír tanto y por llenar mi año de abrazos ricos.
                    Prometo seguir cuidándote y consintiéndote siempre, mi preciosa. 💗
                  </p>
                  <button
                    onClick={() => setGiftState("hidden")}
                    style={{ marginTop: "1rem", background: "transparent", border: "none", color: "#c9184a", textDecoration: "underline", cursor: "pointer" }}
                  >
                    Volver a envolver el regalo
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Sorpresas escondidas */}
        <div style={{ textAlign: "center" }}>
          <h3 className="font-hand" style={{ fontSize: "1.8rem", color: "#ffd6e4", marginBottom: "0.4rem" }}>
            Sorpresitas escondidas
          </h3>
          <p style={{ color: "rgba(255,249,251,0.8)", marginBottom: "1.4rem" }}>
            Encontradas: {foundCount} / {HELLO_KITTY_SURPRISES.length}
            {foundCount === HELLO_KITTY_SURPRISES.length && " — ¡Las encontraste todas, mi amor! 🏆"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {HELLO_KITTY_SURPRISES.map((s, i) => (
              <motion.button
                key={s.id}
                whileHover={{ scale: 1.1, rotate: i % 2 ? 6 : -6 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => revealSurprise(s)}
                className="kawaii-card"
                style={{
                  padding: "0.9rem 1.2rem",
                  cursor: "pointer",
                  fontWeight: 700,
                  color: "#c9184a",
                  fontSize: "0.95rem",
                  opacity: found[s.id] ? 0.75 : 1,
                }}
              >
                {s.label} {found[s.id] && "✓"}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {surprise && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSurprise(null)}
              style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(40,8,30,0.7)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.2rem" }}
            >
              <motion.div
                initial={{ scale: 0.7, rotate: -6 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.7 }}
                onClick={(e) => e.stopPropagation()}
                className="kawaii-card"
                style={{ maxWidth: "440px", padding: "2rem", textAlign: "center", position: "relative" }}
              >
                <button onClick={() => setSurprise(null)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", cursor: "pointer", color: "#c9184a" }}>
                  <X size={20} />
                </button>
                <Sparkles size={30} color="#ff2e7e" />
                <h4 className="font-script" style={{ fontSize: "2.2rem", color: "#c9184a", margin: "0.4rem 0" }}>{surprise.title}</h4>
                <p style={{ color: "#4a1936", lineHeight: 1.6 }}>{surprise.message}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

