import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Maximize2, X, Quote } from "lucide-react";
import { TIMELINE_MOMENTS } from "../data/memoriesData";

const FEATURED_QUOTES = [
  "Sin darme cuenta, te convertiste en una de mis partes favoritas de cada día.",
  "Entre tantas personas en este mundo, qué bonito fue encontrarte.",
  "Si pudiera volver a vivir cada momento contigo, volvería a elegirte.",
];

export default function Timeline() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="historia" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">
          <Heart size={14} fill="#ff2e7e" color="#ff2e7e" />
          <span>Capítulo a Capítulo • 365 Días</span>
        </span>
        <h2 className="section-title text-gradient-romantic">
          Nuestra Historia de Amor
        </h2>
        <p className="section-subtitle">
          Aquí junté varios de nuestros momentos, salidas, risas y locuras de
          este primer año juntos, mi niña bonita.
        </p>
      </div>

      {/* Featured Romantic Quotes Banner */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.1rem",
          marginBottom: "4.5rem",
        }}
      >
        {FEATURED_QUOTES.map((quote, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.12, duration: 0.55 }}
            className="glass-panel"
            style={{
              borderRadius: "22px",
              padding: "1.4rem 1.5rem",
              position: "relative",
              borderLeft: "3px solid #ff2e7e",
            }}
          >
            <Quote
              size={22}
              color="rgba(255, 230, 167, 0.45)"
              style={{ marginBottom: "0.5rem" }}
            />
            <p
              className="font-serif"
              style={{
                fontSize: "1.18rem",
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#fff9fb",
              }}
            >
              “{quote}”
            </p>
          </motion.div>
        ))}
      </div>

      {/* Vertical Timeline Wrapper */}
      <div style={{ position: "relative" }}>
        {/* Central Glowing Thread */}
        <div
          className="timeline-center-line"
          style={{
            position: "absolute",
            top: "10px",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            background:
              "linear-gradient(180deg, rgba(255,46,126,0.15) 0%, #ff2e7e 15%, #ffe6a7 50%, #ff2e7e 85%, rgba(255,46,126,0.15) 100%)",
            boxShadow: "0 0 18px rgba(255, 46, 126, 0.55)",
            borderRadius: "999px",
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {TIMELINE_MOMENTS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="timeline-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 64px 1fr",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                {/* Left Column */}
                <div
                  className="timeline-col-left"
                  style={{
                    order: isEven ? 1 : 3,
                    textAlign: isEven ? "right" : "left",
                  }}
                >
                  {/* Visual Photo Frame (Polaroid or Cinematic) */}
                  <div
                    style={{
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "440px",
                      width: "100%",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.025, rotate: isEven ? -1 : 1 }}
                      onClick={() =>
                        setSelectedPhoto({
                          src: item.image,
                          title: item.title,
                          caption: item.description,
                          quote: item.quote,
                        })
                      }
                      className={
                        item.style === "polaroid"
                          ? "polaroid-card"
                          : "glass-panel-gold"
                      }
                      style={{
                        cursor: "pointer",
                        borderRadius:
                          item.style === "polaroid" ? "16px" : "24px",
                        padding:
                          item.style === "polaroid"
                            ? "14px 14px 26px 14px"
                            : "12px",
                        transform: `rotate(${isEven ? -1.8 : 1.8}deg)`,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "12px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "310px",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.5s ease",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            background: "rgba(15, 5, 24, 0.78)",
                            backdropFilter: "blur(8px)",
                            color: "#ffe6a7",
                            padding: "0.3rem 0.75rem",
                            borderRadius: "999px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            border: "1px solid rgba(255, 230, 167, 0.35)",
                          }}
                        >
                          {item.tag}
                        </span>
                        <span
                          style={{
                            position: "absolute",
                            bottom: "12px",
                            right: "12px",
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "rgba(15, 5, 24, 0.75)",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Maximize2 size={15} />
                        </span>
                      </div>

                      {item.style === "polaroid" && (
                        <p
                          className="font-hand"
                          style={{
                            marginTop: "12px",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#3d142c",
                            textAlign: "center",
                          }}
                        >
                          {item.date} ✨
                        </p>
                      )}
                    </motion.div>

                    {/* Secondary Floating Mini Polaroid */}
                    {item.secondaryImage && (
                      <motion.div
                        whileHover={{ scale: 1.08, zIndex: 10 }}
                        onClick={() =>
                          setSelectedPhoto({
                            src: item.secondaryImage,
                            title: item.title,
                            caption: item.quote,
                            quote: item.description,
                          })
                        }
                        className="polaroid-card"
                        style={{
                          position: "absolute",
                          bottom: "-22px",
                          [isEven ? "left" : "right"]: "-18px",
                          width: "130px",
                          padding: "6px 6px 14px 6px",
                          transform: `rotate(${isEven ? 7 : -7}deg)`,
                          cursor: "pointer",
                          zIndex: 4,
                        }}
                      >
                        <img
                          src={item.secondaryImage}
                          alt={item.title}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "105px",
                            objectFit: "cover",
                            borderRadius: "6px",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Center Heart Node */}
                <div
                  className="timeline-col-center"
                  style={{
                    order: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #ff2e7e 0%, #c9184a 100%)",
                      border: "3px solid #ffe6a7",
                      boxShadow:
                        "0 0 25px rgba(255, 46, 126, 0.8), 0 0 10px rgba(255, 230, 167, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <Heart size={20} fill="#fff" />
                  </div>
                </div>

                {/* Story Description Card */}
                <div
                  className="timeline-col-right"
                  style={{
                    order: isEven ? 3 : 1,
                    textAlign: "left",
                  }}
                >
                  <div
                    className="glass-panel"
                    style={{
                      borderRadius: "24px",
                      padding: "1.85rem",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                        marginBottom: "0.65rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "#ffe6a7",
                          background: "rgba(244, 196, 48, 0.15)",
                          padding: "0.28rem 0.75rem",
                          borderRadius: "999px",
                          border: "1px solid rgba(244, 196, 48, 0.35)",
                        }}
                      >
                        {item.chapter}
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#ffb3cc",
                          fontWeight: 500,
                        }}
                      >
                        {item.date}
                      </span>
                    </div>

                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "0.75rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.98rem",
                        lineHeight: 1.72,
                        color: "rgba(255, 249, 251, 0.85)",
                        marginBottom: "1.15rem",
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "14px",
                        background: "rgba(255, 46, 126, 0.12)",
                        border: "1px solid rgba(255, 179, 204, 0.25)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                      }}
                    >
                      <Sparkles
                        size={16}
                        color="#ffe6a7"
                        style={{ flexShrink: 0, marginTop: "3px" }}
                      />
                      <p
                        className="font-hand"
                        style={{
                          fontSize: "1.18rem",
                          color: "#ffd6e4",
                          lineHeight: 1.4,
                        }}
                      >
                        “{item.quote}”
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Timeline Photos */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(10, 3, 18, 0.88)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel-gold"
              style={{
                maxWidth: "680px",
                width: "100%",
                borderRadius: "26px",
                padding: "1.25rem",
                position: "relative",
                textAlign: "center",
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(15, 5, 24, 0.8)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <X size={18} />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                style={{
                  width: "100%",
                  maxHeight: "68vh",
                  objectFit: "contain",
                  borderRadius: "16px",
                  marginBottom: "1rem",
                }}
              />
              <h4
                className="font-serif"
                style={{ fontSize: "1.6rem", color: "#ffe6a7" }}
              >
                {selectedPhoto.title}
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,249,251,0.88)",
                  marginTop: "0.35rem",
                }}
              >
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .timeline-center-line {
            left: 24px !important;
          }
          .timeline-row {
            grid-template-columns: 48px 1fr !important;
            gap: 1rem !important;
          }
          .timeline-col-center {
            order: 1 !important;
            grid-row: 1 / span 2;
          }
          .timeline-col-left {
            order: 2 !important;
            text-align: left !important;
          }
          .timeline-col-right {
            order: 3 !important;
          }
        }
      `}</style>
    </section>
  );
}

