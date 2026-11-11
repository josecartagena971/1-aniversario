import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Heart, Award, RotateCcw, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { LOVE_QUIZ_QUESTIONS, COUPLE_INFO } from "../data/memoriesData";

export default function LoveQuiz() {
  const [step, setStep] = useState(0);
  const [reaction, setReaction] = useState(null);
  const [medals, setMedals] = useState([]);
  const [runaway, setRunaway] = useState({ x: 0, y: 0, tries: 0 });

  const done = step >= LOVE_QUIZ_QUESTIONS.length;
  const q = LOVE_QUIZ_QUESTIONS[step];

  const answer = (opt) => {
    setReaction(opt);
    setMedals((m) => [...m, opt.badge]);
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.65 },
      colors: ["#ff2e7e", "#ffd6e4", "#f4c430", "#c8b6ff"],
      shapes: ["circle"],
    });
  };

  const next = () => {
    setReaction(null);
    setRunaway({ x: 0, y: 0, tries: 0 });
    const n = step + 1;
    setStep(n);
    if (n >= LOVE_QUIZ_QUESTIONS.length) {
      const end = Date.now() + 1500;
      (function frame() {
        confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors: ["#ff2e7e", "#f4c430", "#fff"] });
        confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors: ["#ff2e7e", "#f4c430", "#fff"] });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  };

  const restart = () => {
    setStep(0);
    setMedals([]);
    setReaction(null);
    setRunaway({ x: 0, y: 0, tries: 0 });
  };

  // Botón travieso "No sé" que se escapa
  const dodge = () => {
    setRunaway((r) => ({
      x: (Math.random() - 0.5) * 260,
      y: (Math.random() - 0.5) * 120,
      tries: r.tries + 1,
    }));
  };

  return (
    <section id="juego" className="section-container">
      <div className="section-header">
        <span className="section-badge">
          <HelpCircle size={14} color="#ffe6a7" /> <span>Un juego, no un examen</span>
        </span>
        <h2 className="section-title text-gradient-romantic">¿Sabes cuánto te amo?</h2>
        <p className="section-subtitle">
          Nada serio, mi niña guapa… solo un ratito para que te rías y veas cuánto te quiero.
        </p>
      </div>

      <div className="glass-panel-gold" style={{ maxWidth: "780px", margin: "0 auto", borderRadius: "30px", padding: "clamp(1.4rem, 4vw, 2.6rem)", position: "relative", minHeight: "420px" }}>
        {/* Progreso con corazones */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.6rem" }}>
          {LOVE_QUIZ_QUESTIONS.map((_, i) => (
            <Heart key={i} size={22} fill={i < step || (i === step && reaction) ? "#ff2e7e" : "transparent"} color="#ff7aa8" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!done && !reaction && (
            <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} style={{ textAlign: "center" }}>
              <p style={{ color: "#ffe6a7", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Pregunta {step + 1} de {LOVE_QUIZ_QUESTIONS.length}
              </p>
              <h3 className="font-serif" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)", margin: "0.5rem 0 0.4rem", lineHeight: 1.2 }}>
                {q.question}
              </h3>
              <p className="font-hand" style={{ color: "#ffb3cc", fontSize: "1.25rem", marginBottom: "1.8rem" }}>{q.subtitle}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", maxWidth: "520px", margin: "0 auto" }}>
                {q.options.map((opt) => (
                  <motion.button
                    key={opt.text}
                    whileHover={{ scale: 1.03, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => answer(opt)}
                    className="glass-panel"
                    style={{ padding: "1rem 1.3rem", borderRadius: "18px", color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer", textAlign: "left", border: "1px solid rgba(255,214,228,0.3)" }}
                  >
                    {opt.text}
                  </motion.button>
                ))}
                <motion.button
                  animate={{ x: runaway.x, y: runaway.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onMouseEnter={dodge}
                  onClick={dodge}
                  style={{ alignSelf: "center", marginTop: "0.4rem", padding: "0.5rem 1rem", borderRadius: "999px", background: "transparent", border: "1px dashed rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", cursor: "pointer" }}
                >
                  {runaway.tries === 0 ? "Mmm… no sé 🤔" : runaway.tries < 3 ? "¡Atrápame si puedes! 😜" : "Esa opción no existe, mi amor 💕"}
                </motion.button>
              </div>
            </motion.div>
          )}

          {!done && reaction && (
            <motion.div key={`r-${step}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} style={{ textAlign: "center" }}>
              <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 0.8, repeat: 2 }} style={{ display: "inline-block" }}>
                <Heart size={64} fill="#ff2e7e" color="#ffe6a7" />
              </motion.div>
              <h3 className="font-serif" style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)", color: "#ffe6a7", margin: "0.8rem 0" }}>{reaction.reactionTitle}</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 1.4rem", color: "#fff9fb" }}>{reaction.reactionMessage}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.1rem", borderRadius: "999px", background: "rgba(244,196,48,0.15)", border: "1px solid rgba(244,196,48,0.5)", color: "#ffe6a7", marginBottom: "1.6rem" }}>
                <Award size={18} /> Medalla: {reaction.badge}
              </div>
              <div>
                <button onClick={next} className="btn-romantic">
                  <Sparkles size={18} />
                  {step + 1 < LOVE_QUIZ_QUESTIONS.length ? "Siguiente pregunta" : "Ver mi premio"}
                </button>
              </div>
            </motion.div>
          )}

          {done && (
            <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center" }}>
              <div className="letter-paper" style={{ borderRadius: "18px", padding: "2rem 1.5rem", border: "3px double #d4af37" }}>
                <Award size={46} color="#d4af37" />
                <p style={{ letterSpacing: "0.2em", fontSize: "0.75rem", textTransform: "uppercase", color: "#800f2f", marginTop: "0.5rem" }}>Certificado Oficial</p>
                <h3 className="font-script" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", color: "#c9184a", lineHeight: 1.1 }}>Amor Eterno</h3>
                <p className="font-serif" style={{ fontSize: "1.2rem", margin: "0.8rem auto", maxWidth: "460px", color: "#3a1827" }}>
                  Con este papelito queda claro que <b>{COUPLE_INFO.herName}</b> (mi melocotini preciosa) conoce al 100% el corazón de <b>{COUPLE_INFO.hisName}</b>, porque es suyo desde el día uno.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem", margin: "1rem 0" }}>
                  {medals.map((m, i) => (
                    <span key={i} style={{ fontSize: "0.78rem", padding: "0.3rem 0.7rem", borderRadius: "999px", background: "#ffe6ef", color: "#800f2f", border: "1px solid #ffb3cc" }}>🏅 {m}</span>
                  ))}
                </div>
                <p className="font-hand" style={{ fontSize: "1.4rem", color: "#800f2f" }}>Firmado: {COUPLE_INFO.hisName} ❤️ — {COUPLE_INFO.anniversaryDisplayDate}</p>
              </div>
              <button onClick={restart} style={{ marginTop: "1.2rem", background: "transparent", border: "1px solid rgba(255,214,228,0.4)", color: "#ffd6e4", padding: "0.6rem 1.2rem", borderRadius: "999px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <RotateCcw size={15} /> Jugar otra vez
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

