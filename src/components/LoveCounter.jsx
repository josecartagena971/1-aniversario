import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, RefreshCw } from "lucide-react";
import { COUPLE_INFO } from "../data/memoriesData";

function calculateTimeParts(startDateStr) {
  const start = new Date(startDateStr);
  const now = new Date();
  const diffMs = Math.max(0, now.getTime() - start.getTime());

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calendar-aware difference for Years, Months, Days, Hours, Minutes, Seconds
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // Ensure at least 1 Year is highlighted on their 1st anniversary celebration
  if (years < 1) {
    years = 1;
    months = 0;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays: Math.max(365, totalDays),
    totalHours: Math.max(8760, totalHours),
  };
}

export default function LoveCounter() {
  const [customStart, setCustomStart] = useState(() => {
    return (
      localStorage.getItem("liz_jose_anniversary_date") ||
      COUPLE_INFO.anniversaryStart
    );
  });
  const [timeParts, setTimeParts] = useState(() =>
    calculateTimeParts(customStart)
  );
  const [showTotalMode, setShowTotalMode] = useState(false);
  const [editingDate, setEditingDate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeParts(calculateTimeParts(customStart));
    }, 1000);
    return () => clearInterval(interval);
  }, [customStart]);

  const handleDateChange = (e) => {
    const val = e.target.value;
    if (val) {
      const iso = `${val}T00:00:00`;
      setCustomStart(iso);
      localStorage.setItem("liz_jose_anniversary_date", iso);
      setTimeParts(calculateTimeParts(iso));
    }
  };

  const units = showTotalMode
    ? [
        { value: timeParts.years, label: "Año Juntos", highlight: true },
        { value: 12, label: "Meses de Amor" },
        { value: timeParts.totalDays, label: "Días Totales" },
        { value: timeParts.totalHours.toLocaleString(), label: "Horas Totales" },
        { value: String(timeParts.minutes).padStart(2, "0"), label: "Minutos" },
        { value: String(timeParts.seconds).padStart(2, "0"), label: "Segundos" },
      ]
    : [
        {
          value: timeParts.years,
          label: timeParts.years === 1 ? "Año" : "Años",
          highlight: true,
        },
        { value: timeParts.months, label: "Meses" },
        { value: timeParts.days, label: "Días" },
        { value: String(timeParts.hours).padStart(2, "0"), label: "Horas" },
        { value: String(timeParts.minutes).padStart(2, "0"), label: "Minutos" },
        { value: String(timeParts.seconds).padStart(2, "0"), label: "Segundos" },
      ];

  return (
    <div style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      {/* Counter Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(105px, 1fr))",
          gap: "0.85rem",
          marginBottom: "1rem",
        }}
      >
        {units.map((u, idx) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.07, duration: 0.5 }}
            className={u.highlight ? "glass-panel-gold" : "glass-panel"}
            style={{
              borderRadius: "20px",
              padding: "1.05rem 0.6rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {u.highlight && (
              <span
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "8px",
                  fontSize: "0.7rem",
                  color: "#ffe6a7",
                }}
              >
                ★
              </span>
            )}
            <div
              className="font-serif"
              style={{
                fontSize: "clamp(1.85rem, 3.6vw, 2.65rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: u.highlight ? "#ffe6a7" : "#ffffff",
                textShadow: u.highlight
                  ? "0 0 20px rgba(244, 196, 48, 0.55)"
                  : "0 0 16px rgba(255, 46, 126, 0.45)",
              }}
            >
              {u.value}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: u.highlight ? "#ffd6e4" : "rgba(255, 249, 251, 0.76)",
                marginTop: "0.35rem",
                fontWeight: 600,
              }}
            >
              {u.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Counter Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          fontSize: "0.8rem",
          color: "rgba(255, 214, 228, 0.8)",
        }}
      >
        <button
          onClick={() => setShowTotalMode((v) => !v)}
          style={{
            background: "rgba(255, 255, 255, 0.07)",
            border: "1px solid rgba(255, 214, 228, 0.25)",
            color: "#ffd6e4",
            padding: "0.35rem 0.85rem",
            borderRadius: "999px",
            fontSize: "0.76rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            cursor: "pointer",
          }}
        >
          <RefreshCw size={12} />
          <span>
            {showTotalMode
              ? "Ver desglose (1 Año • Meses • Días)"
              : "Ver acumulado total (365 Días • 8,760+ Horas)"}
          </span>
        </button>

        <button
          onClick={() => setEditingDate((v) => !v)}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255, 230, 167, 0.8)",
            fontSize: "0.76rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          <Calendar size={12} />
          <span>Fecha de inicio: {customStart.slice(0, 10)}</span>
        </button>

        {editingDate && (
          <input
            type="date"
            value={customStart.slice(0, 10)}
            onChange={handleDateChange}
            style={{
              background: "rgba(25, 10, 40, 0.9)",
              border: "1px solid rgba(244, 196, 48, 0.5)",
              color: "#fff",
              padding: "0.25rem 0.6rem",
              borderRadius: "8px",
              fontSize: "0.78rem",
            }}
          />
        )}
      </div>
    </div>
  );
}

