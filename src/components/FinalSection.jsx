import React from "react";
import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { COUPLE_INFO, mediaUrl } from "../data/memoriesData";

const FINAL_PHOTOS = [
  "WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg",
  "WhatsApp Image 2026-11-11 at 9.09.17 AM (1).jpeg",
  "WhatsApp Image 2026-11-11 at 9.01.46 AM.jpeg",
  "WhatsApp Image 2026-05-11 at 2.41.46 PM (1).jpeg",
  "WhatsApp Image 2026-11-11 at 9.08.59 AM (1).jpeg",
  "WhatsApp Image 2026-11-11 at 9.01.30 AM.jpeg",
  "WhatsApp Image 2026-11-11 at 9.01.31 AM.jpeg",
  "WhatsApp Image 2026-11-11 at 9.09.06 AM (1).jpeg",
].map(mediaUrl);

const POSITIONS = [
  { left: "3%", top: "6%", r: -10 },
  { left: "80%", top: "4%", r: 8 },
  { left: "6%", top: "40%", r: 6 },
  { left: "84%", top: "38%", r: -7 },
  { left: "2%", top: "74%", r: -5 },
  { left: "82%", top: "72%", r: 9 },
  { left: "18%", top: "88%", r: 4 },
  { left: "68%", top: "88%", r: -6 },
];

const LINES = [
  "Gracias por este primer año lleno de momentos que siempre llevaré en mi corazón.",
  "Si pudiera volver al principio de nuestra historia, volvería a buscarte, volvería a conocerte y volvería a enamorarme de ti.",
  "Te elegiría hoy, mañana y en todos los universos posibles.",
];

// Constelación con forma de corazón
const HEART_STARS = [...Array(22)].map((_, i) => {
  const t = (i / 22) * Math.PI * 2;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return { x: 50 + x * 2.4, y: 46 + y * 2.4 };
});

export default function FinalSection() {
  const replay = () => {
    confetti({ particleCount: 120, spread: 120, origin: { y: 0.7 }, colors: ["#ff2e7e", "#ffd6e4", "#f4c430", "#c8b6ff"] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="final"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.25rem",
        background: "radial-gradient(ellipse at 50% 30%, rgba(74,37,89,0.55), rgba(11,3,18,0.95) 70%)",
      }}
    >
      {/* Fotos apareciendo lentamente */}
      <div className="final-photos" aria-hidden="true">
        {FINAL_PHOTOS.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.55, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.35, duration: 1.4 }}
            className="polaroid-card"
            style={{ position: "absolute", left: POSITIONS[i].left, top: POSITIONS[i].top, width: "130px", padding: "6px 6px 16px", transform: `rotate(${POSITIONS[i].r}deg)` }}
          >
            <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px", display: "block" }} />
          </motion.div>
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "860px", textAlign: "center" }}>
        {/* Constelación corazón */}
        <svg viewBox="0 0 100 90" style={{ width: "min(70vw, 300px)", margin: "0 auto 1rem", display: "block" }} aria-hidden="true">
          <motion.polyline
            points={[...HEART_STARS, HEART_STARS[0]].map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="rgba(255,230,167,0.4)"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {HEART_STARS.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i % 4 === 0 ? 1.4 : 0.9}
              fill="#ffe6a7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0.5, 1] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
          <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.6, type: "spring" }} style={{ transformOrigin: "50px 42px" }}>
            <text x="50" y="46" textAnchor="middle" fontFamily="Great Vibes, cursive" fontSize="11" fill="#fff">
              {COUPLE_INFO.herName} & {COUPLE_INFO.hisName}
            </text>
          </motion.g>
        </svg>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-gradient-romantic"
          style={{ fontSize: "clamp(3rem, 8vw, 5.6rem)", lineHeight: 1.1, marginBottom: "1.6rem" }}
        >
          Feliz primer aniversario, mi amor
        </motion.h2>

        {LINES.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.7, duration: 0.9 }}
            className="font-serif"
            style={{ fontSize: i === 2 ? "clamp(1.4rem, 3vw, 2rem)" : "clamp(1.15rem, 2.4vw, 1.5rem)", fontStyle: "italic", color: i === 2 ? "#ffe6a7" : "rgba(255,249,251,0.9)", lineHeight: 1.6, marginBottom: "1.2rem" }}
          >
            “{l}”
          </motion.p>
        ))}

        {/* Corazón animado con nombres */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, type: "spring", stiffness: 90 }}
          style={{ margin: "2.2rem auto 2.4rem", position: "relative", width: "190px", height: "175px" }}
        >
          <div className="animate-heartbeat" style={{ position: "absolute", inset: 0 }}>
            <Heart size={190} fill="url(#finalHeartGrad)" color="#ffe6a7" strokeWidth={1} style={{ filter: "drop-shadow(0 0 30px rgba(255,46,126,0.7))" }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="finalHeartGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff4d8d" />
                  <stop offset="100%" stopColor="#9e1440" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: "12px" }}>
            <span className="font-script" style={{ fontSize: "2.1rem", color: "#fff", lineHeight: 1 }}>{COUPLE_INFO.herName}</span>
            <span className="font-script" style={{ fontSize: "1.3rem", color: "#ffe6a7" }}>&</span>
            <span className="font-script" style={{ fontSize: "2.1rem", color: "#fff", lineHeight: 1 }}>{COUPLE_INFO.hisName}</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.2 }}
          onClick={replay}
          className="btn-romantic"
        >
          <RotateCcw size={18} /> VOLVER A VIVIR NUESTRA HISTORIA ❤️
        </motion.button>

        <p style={{ marginTop: "2.4rem", fontSize: "0.8rem", color: "rgba(255,214,228,0.55)", letterSpacing: "0.12em" }}>
          {COUPLE_INFO.anniversaryDisplayDate.toUpperCase()} • HECHO CON TODO MI AMOR PARA MI NIÑA BONITA
        </p>
      </div>

      <style>{`@media (max-width: 900px){ .final-photos{ display:none; } }`}</style>
    </section>
  );
}

