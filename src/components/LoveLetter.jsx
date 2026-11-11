import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FastForward, RotateCcw, Heart } from "lucide-react";
import { LOVE_LETTER_CONTENT } from "../data/memoriesData";

/*
  LA CARTA MÁS IMPORTANTE
  Para reemplazarla por tu propia carta, edita LOVE_LETTER_CONTENT en src/data/memoriesData.js
*/
const FULL_TEXT = LOVE_LETTER_CONTENT.paragraphs.join("\n\n");

export default function LoveLetter() {
  const [stage, setStage] = useState("closed"); // closed | opening | reading
  const [typed, setTyped] = useState(0);
  const [speed, setSpeed] = useState(20);
  const timer = useRef(null);

  useEffect(() => {
    if (stage !== "reading") return;
    if (typed >= FULL_TEXT.length) return;
    timer.current = setTimeout(() => {
      // escribe más rápido en espacios, pausa en puntos
      const ch = FULL_TEXT[typed];
      setTyped((t) => t + 1);
      return ch;
    }, FULL_TEXT[typed - 1] === "." ? speed * 8 : speed);
    return () => clearTimeout(timer.current);
  }, [stage, typed, speed]);

  const open = () => {
    setStage("opening");
    setTimeout(() => setStage("reading"), 1400);
  };

  const finished = typed >= FULL_TEXT.length;
  const shown = FULL_TEXT.slice(0, typed).split("\n\n");

  return (
    <section id="carta" className="section-container">
      <div className="section-header">
        <span className="section-badge">
          <Mail size={14} color="#ffe6a7" /> <span>De mí para ti</span>
        </span>
        <h2 className="section-title text-gradient-romantic">La Carta Más Importante 💌</h2>
        <p className="section-subtitle">Ábrela con calma, mi melocotini. Esto te lo escribí con todo mi corazón.</p>
      </div>

      <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", minHeight: "440px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        {/* luz cálida */}
        <div aria-hidden="true" style={{ position: "absolute", inset: "-10% -20%", background: "radial-gradient(circle at 50% 40%, rgba(255,214,150,0.22), transparent 60%)", pointerEvents: "none" }} />

        <AnimatePresence mode="wait">
          {stage !== "reading" ? (
            <motion.div
              key="envelope"
              exit={{ y: 60, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{ position: "relative", width: "min(92vw, 520px)", height: "330px", marginTop: "2rem", perspective: "1200px", cursor: stage === "closed" ? "pointer" : "default" }}
              onClick={stage === "closed" ? open : undefined}
            >
              {/* papel que asoma */}
              <motion.div
                animate={stage === "opening" ? { y: -120 } : { y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="letter-paper"
                style={{ position: "absolute", left: "7%", right: "7%", top: "30px", height: "260px", borderRadius: "8px", zIndex: 1, padding: "1.4rem", textAlign: "center" }}
              >
                <p className="font-script" style={{ fontSize: "1.85rem", color: "#c9184a" }}>Para mi muñequita bonita</p>
              </motion.div>

              {/* cuerpo del sobre */}
              <div style={{ position: "absolute", inset: 0, top: "90px", borderRadius: "14px", background: "linear-gradient(160deg,#f9e2d2,#ecc6b0)", boxShadow: "0 30px 60px rgba(0,0,0,0.55)", zIndex: 2, overflow: "hidden" }}>
                <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none">
                  <path d="M0 0 L50 34 L100 0 L100 60 L0 60 Z" fill="#f3d3bf" />
                  <path d="M0 60 L42 28 M100 60 L58 28" stroke="rgba(128,60,40,0.18)" strokeWidth="0.4" />
                </svg>
                {/* flores prensadas */}
                {[{ l: "8%", b: "12%", r: -20 }, { l: "80%", b: "16%", r: 25 }].map((f, i) => (
                  <svg key={i} width="46" height="46" viewBox="0 0 30 30" style={{ position: "absolute", left: f.l, bottom: f.b, transform: `rotate(${f.r}deg)`, opacity: 0.8 }}>
                    {[0, 72, 144, 216, 288].map((r) => (
                      <ellipse key={r} cx="15" cy="7" rx="5" ry="7" fill="#e8a0b4" transform={`rotate(${r} 15 15)`} />
                    ))}
                    <circle cx="15" cy="15" r="3.5" fill="#d4af37" />
                  </svg>
                ))}
              </div>

              {/* solapa */}
              <motion.div
                animate={stage === "opening" ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.7 }}
                style={{ position: "absolute", left: 0, right: 0, top: "90px", height: "140px", transformOrigin: "top", transformStyle: "preserve-3d", zIndex: stage === "opening" ? 0 : 3 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M0 0 L50 48 L100 0 Z" fill="#eec0a8" stroke="rgba(128,60,40,0.2)" strokeWidth="0.4" />
                </svg>
              </motion.div>

              {/* sello de cera */}
              <AnimatePresence>
                {stage === "closed" && (
                  <motion.div
                    exit={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ position: "absolute", left: "50%", top: "200px", translate: "-50% -50%", zIndex: 4, width: "70px", height: "70px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #e63b5c, #9e1440 65%, #6a0d2b)", boxShadow: "0 6px 18px rgba(0,0,0,0.45), inset 0 -4px 8px rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <Heart size={28} fill="#ffd6e4" color="#ffd6e4" />
                  </motion.div>
                )}
              </AnimatePresence>

              {stage === "closed" && (
                <p className="font-hand" style={{ position: "absolute", bottom: "-48px", width: "100%", textAlign: "center", color: "#ffd6e4", fontSize: "1.3rem" }}>
                  Toca el sello para abrirla, corazón
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ y: 80, opacity: 0, rotate: -1 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="letter-paper"
              style={{ width: "100%", borderRadius: "10px", padding: "clamp(1.6rem, 5vw, 3rem)", position: "relative" }}
            >
              <Heart size={18} fill="#ff7aa8" color="#ff7aa8" style={{ position: "absolute", top: 18, right: 22, opacity: 0.6 }} />
              <Heart size={12} fill="#ff7aa8" color="#ff7aa8" style={{ position: "absolute", top: 40, right: 46, opacity: 0.4 }} />

              <p className="font-script" style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", color: "#c9184a", marginBottom: "1.2rem" }}>
                {LOVE_LETTER_CONTENT.salutation}
              </p>

              {shown.map((p, i) => (
                <p key={i} className="font-serif" style={{ fontSize: "clamp(1.08rem, 2vw, 1.28rem)", lineHeight: 1.75, marginBottom: "1.1rem", color: "#3a1827" }}>
                  {p}
                  {i === shown.length - 1 && !finished && <span className="caret">|</span>}
                </p>
              ))}

              {finished && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ marginTop: "1.6rem", textAlign: "right" }}>
                  <p className="font-serif" style={{ fontStyle: "italic", color: "#5a2a3f" }}>{LOVE_LETTER_CONTENT.closing}</p>
                  <p className="font-script" style={{ fontSize: "2.6rem", color: "#c9184a" }}>{LOVE_LETTER_CONTENT.signature}</p>
                  <p className="font-hand" style={{ textAlign: "left", marginTop: "1rem", fontSize: "1.2rem", color: "#800f2f" }}>{LOVE_LETTER_CONTENT.postscript}</p>
                </motion.div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.6rem", justifyContent: "center" }}>
                {!finished && (
                  <>
                    <button onClick={() => setSpeed((s) => (s > 10 ? 7 : 20))} style={btn}>
                      <FastForward size={14} /> {speed > 10 ? "Más rápido" : "Velocidad normal"}
                    </button>
                    <button onClick={() => setTyped(FULL_TEXT.length)} style={btn}>
                      Mostrar todo
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    setTyped(0);
                    setStage("closed");
                  }}
                  style={btn}
                >
                  <RotateCcw size={14} /> Cerrar el sobre
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style>{`
        .caret { animation: caretBlink 0.9s steps(1) infinite; color: #c9184a; margin-left: 2px; }
        @keyframes caretBlink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}

const btn = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  padding: "0.5rem 1rem",
  borderRadius: "999px",
  border: "1px solid rgba(201,24,74,0.35)",
  background: "rgba(255,214,228,0.4)",
  color: "#800f2f",
  fontSize: "0.82rem",
  fontWeight: 600,
  cursor: "pointer",
};

