import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shuffle, Mail, MailOpen, X, Plus } from "lucide-react";
import { FEATURED_LOVE_REASONS, getReasonByDay } from "../data/memoriesData";

const STORAGE_KEY = "liz_jose_custom_reasons";

function loadCustom() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export default function LoveReasons() {
  const [opened, setOpened] = useState({});
  const [activeReason, setActiveReason] = useState(null);
  const [day, setDay] = useState(1);
  const [custom, setCustom] = useState(loadCustom);
  const [draft, setDraft] = useState("");

  const allEnvelopes = [
    ...FEATURED_LOVE_REASONS,
    ...custom.map((text, i) => ({ number: `♥${i + 1}`, category: "Razón nueva", text })),
  ];

  const openEnvelope = (r) => {
    setOpened((o) => ({ ...o, [r.number]: true }));
    setActiveReason(r);
  };

  const openRandom = () => {
    const n = Math.floor(Math.random() * 365) + 1;
    setDay(n);
    setActiveReason(getReasonByDay(n));
  };

  const openAll = () => {
    const all = {};
    allEnvelopes.forEach((r) => (all[r.number] = true));
    setOpened(all);
  };

  const addReason = (e) => {
    e.preventDefault();
    const t = draft.trim();
    if (!t) return;
    const text = t.toLowerCase().startsWith("porque") ? t : `Porque ${t}`;
    const updated = [...custom, text];
    setCustom(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setDraft("");
  };

  return (
    <section id="razones" className="section-container">
      <div className="section-header">
        <span className="section-badge">
          <Heart size={14} fill="#ff2e7e" color="#ff2e7e" /> <span>Un sobre por cada día</span>
        </span>
        <h2 className="section-title text-gradient-romantic">365 Razones para Amarte ❤️</h2>
        <p className="section-subtitle">
          Toca cualquier sobre para abrirlo, cariñito mío. También puedes elegir
          un día del 1 al 365 y ver qué razón te toca.
        </p>
      </div>

      {/* Controles */}
      <div className="glass-panel" style={{ borderRadius: "24px", padding: "1.2rem 1.4rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.9rem", marginBottom: "2.6rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#ffd6e4", fontSize: "0.9rem" }}>
          Día
          <input
            type="number"
            min={1}
            max={365}
            value={day}
            onChange={(e) => setDay(Math.min(365, Math.max(1, Number(e.target.value) || 1)))}
            style={{ width: "80px", padding: "0.45rem 0.6rem", borderRadius: "10px", border: "1px solid rgba(244,196,48,0.5)", background: "rgba(25,10,40,0.9)", color: "#fff" }}
          />
        </label>
        <button onClick={() => setActiveReason(getReasonByDay(day))} className="btn-romantic" style={{ padding: "0.6rem 1.2rem", fontSize: "0.88rem" }}>
          <MailOpen size={16} /> Abrir razón del día {day}
        </button>
        <button onClick={openRandom} style={pillStyle}>
          <Shuffle size={15} /> Razón al azar
        </button>
        <button onClick={openAll} style={pillStyle}>
          <Mail size={15} /> Abrir todos los sobres
        </button>
      </div>

      {/* Sobres */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "1.3rem" }}>
        {allEnvelopes.map((r, i) => {
          const isOpen = !!opened[r.number];
          return (
            <motion.button
              key={r.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
              onClick={() => openEnvelope(r)}
              style={{ background: "none", border: "none", cursor: "pointer", perspective: "800px", padding: 0 }}
            >
              <div style={{ position: "relative", height: "130px", borderRadius: "12px", background: isOpen ? "linear-gradient(160deg,#fff7fa,#ffe1ec)" : "linear-gradient(160deg,#ffd6e4,#ff9ec4)", boxShadow: "0 14px 30px rgba(0,0,0,0.4)", overflow: "visible" }}>
                {/* solapa */}
                <motion.div
                  animate={{ rotateX: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "70px", transformOrigin: "top", transformStyle: "preserve-3d", zIndex: 2 }}
                >
                  <svg width="100%" height="70" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <path d="M0 0 L50 46 L100 0 Z" fill={isOpen ? "#ffc2d7" : "#ff7aa8"} stroke="rgba(128,15,47,0.25)" />
                  </svg>
                </motion.div>
                {/* sello */}
                {!isOpen && (
                  <div style={{ position: "absolute", top: "44px", left: "50%", transform: "translateX(-50%)", zIndex: 3, width: "38px", height: "38px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #ffe6a7, #d4af37 60%, #9c7a1c)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 8px rgba(0,0,0,0.35)" }}>
                    <Heart size={16} fill="#c9184a" color="#c9184a" />
                  </div>
                )}
                <div style={{ position: "absolute", bottom: "10px", left: 0, right: 0, textAlign: "center", color: "#800f2f" }}>
                  <span className="font-serif" style={{ fontWeight: 700, fontSize: "1.1rem" }}>#{r.number}</span>
                  {isOpen && <p style={{ fontSize: "0.7rem", padding: "0 0.6rem" }}>{r.category}</p>}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Agregar razones personalizadas */}
      <form onSubmit={addReason} className="glass-panel" style={{ marginTop: "2.6rem", borderRadius: "22px", padding: "1.2rem", display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center" }}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Si quieres agregar otra razón más… escríbela aquí (se guarda aquí mismo)"
          style={{ flex: "1 1 260px", padding: "0.75rem 1rem", borderRadius: "14px", border: "1px solid rgba(255,214,228,0.3)", background: "rgba(25,10,40,0.85)", color: "#fff", fontSize: "0.95rem" }}
        />
        <button type="submit" style={pillStyle}>
          <Plus size={15} /> Agregar sobre
        </button>
      </form>

      <AnimatePresence>
        {activeReason && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReason(null)}
            style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(10,3,18,0.8)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.2rem" }}
          >
            <motion.div
              initial={{ y: 80, rotateX: -60, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              onClick={(e) => e.stopPropagation()}
              className="letter-paper"
              style={{ maxWidth: "460px", width: "100%", borderRadius: "16px", padding: "2.2rem 1.8rem", textAlign: "center", position: "relative" }}
            >
              <button onClick={() => setActiveReason(null)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", cursor: "pointer", color: "#800f2f" }}>
                <X size={20} />
              </button>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9184a" }}>
                Razón #{activeReason.number} • {activeReason.category}
              </p>
              <Heart size={34} fill="#ff2e7e" color="#ff2e7e" style={{ margin: "0.8rem 0" }} />
              <p className="font-hand" style={{ fontSize: "1.65rem", lineHeight: 1.4, color: "#3a1827" }}>{activeReason.text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.6rem 1.1rem",
  borderRadius: "999px",
  border: "1px solid rgba(244,196,48,0.45)",
  background: "rgba(255,255,255,0.07)",
  color: "#ffe6a7",
  fontSize: "0.85rem",
  fontWeight: 600,
  cursor: "pointer",
};

