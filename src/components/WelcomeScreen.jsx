import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronDown, Stars } from "lucide-react";
import confetti from "canvas-confetti";
import LoveCounter from "./LoveCounter";
import { COUPLE_INFO, mediaUrl } from "../data/memoriesData";

const FLOATING_HERO_PHOTOS = [
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg"),
    caption: "Titicaca 💙",
    pos: { top: "14%", left: "4%", rotate: -8 },
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.31 AM.jpeg"),
    caption: "Mi Liz 🎀",
    pos: { top: "16%", right: "4%", rotate: 7 },
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.17 AM (1).jpeg"),
    caption: "Navidad 🎄",
    pos: { bottom: "14%", left: "5%", rotate: 6 },
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.43 AM.jpeg"),
    caption: "Spider-Verse 🕷️",
    pos: { bottom: "14%", right: "5%", rotate: -7 },
  },
];

export default function WelcomeScreen({ onEnterStory }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnterClick = () => {
    setIsTransitioning(true);
    window.dispatchEvent(new CustomEvent("start-main-music"));
    onEnterStory?.();

    // Magical multi-burst heart & gold sparkle celebration
    const colors = ["#ff2e7e", "#ffd6e4", "#c9184a", "#f4c430", "#c8b6ff"];
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors,
    });

    setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 65,
        origin: { x: 0.15, y: 0.65 },
        colors,
      });
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 65,
        origin: { x: 0.85, y: 0.65 },
        colors,
      });
    }, 260);

    setTimeout(() => {
      const target = document.getElementById("historia");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => setIsTransitioning(false), 900);
    }, 950);
  };

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6.5rem 1.25rem 4rem 1.25rem",
        overflow: "hidden",
      }}
    >
      {/* Magical Radial Aurora Behind Welcome Screen */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 35%, rgba(255, 46, 126, 0.22) 0%, rgba(128, 15, 47, 0.14) 38%, rgba(25, 10, 40, 0) 72%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Polaroids on Large Screens */}
      <div className="hero-floating-polaroids" aria-hidden="true">
        {FLOATING_HERO_PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.caption}
            initial={{ opacity: 0, scale: 0.8, rotate: photo.pos.rotate }}
            animate={{
              opacity: 0.82,
              scale: 1,
              y: [0, -12, 0],
              rotate: [
                photo.pos.rotate,
                photo.pos.rotate + (index % 2 === 0 ? 2.5 : -2.5),
                photo.pos.rotate,
              ],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.3 + index * 0.15 },
              y: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="polaroid-card"
            style={{
              position: "absolute",
              ...photo.pos,
              width: "152px",
              padding: "8px 8px 18px 8px",
              zIndex: 1,
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                width: "100%",
                height: "145px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />
            <p
              className="font-hand"
              style={{
                textAlign: "center",
                fontSize: "0.98rem",
                fontWeight: 700,
                color: "#4a1936",
                marginTop: "6px",
              }}
            >
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Expanding Magical Portal Overlay when pressing Enter button */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 80,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle, rgba(255,46,126,0.42) 0%, rgba(25,10,40,0.85) 100%)",
              backdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.6, 1.35, 2.2], opacity: [1, 1, 0] }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Heart size={110} fill="#ff2e7e" color="#ffe6a7" />
              <span
                className="font-script"
                style={{
                  fontSize: "3.2rem",
                  color: "#fff",
                  textShadow: "0 0 25px #ff2e7e",
                }}
              >
                Bienvenida a tu regalo, mi niña bonita...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Hero Card */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Top Anniversary Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "1.2rem" }}
        >
          <span className="section-badge">
            <Stars size={15} color="#ffe6a7" />
            <span>Universo de {COUPLE_INFO.coupleTitle} • 1er Aniversario</span>
            <Sparkles size={15} color="#ffe6a7" />
          </span>
        </motion.div>

        {/* Circular Romantic Duo Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: "136px",
            height: "136px",
            margin: "0 auto 1.5rem auto",
            borderRadius: "50%",
            padding: "4px",
            background:
              "linear-gradient(135deg, #ffe6a7, #ff2e7e, #c8b6ff, #ffe6a7)",
            boxShadow:
              "0 0 35px rgba(255, 46, 126, 0.55), 0 0 60px rgba(244, 196, 48, 0.25)",
            position: "relative",
          }}
        >
          <img
            src={mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg")}
            alt="Liz y José"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #190a28",
            }}
          />
          <span
            className="animate-heartbeat"
            style={{
              position: "absolute",
              bottom: "2px",
              right: "2px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff2e7e, #c9184a)",
              border: "2px solid #ffe6a7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <Heart size={17} fill="#fff" color="#fff" />
          </span>
        </motion.div>

        {/* Main Quote */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="font-serif text-gradient-romantic"
          style={{
            fontSize: "clamp(2.2rem, 5.2vw, 4.3rem)",
            fontWeight: 700,
            lineHeight: 1.14,
            marginBottom: "0.9rem",
            textShadow: "0 10px 35px rgba(0, 0, 0, 0.45)",
          }}
        >
          “{COUPLE_INFO.heroQuote}”
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-script"
          style={{
            fontSize: "clamp(1.85rem, 3.8vw, 2.85rem)",
            color: "#ffe6a7",
            marginBottom: "2.1rem",
            textShadow: "0 0 24px rgba(255, 46, 126, 0.55)",
          }}
        >
          {COUPLE_INFO.heroSubtitle}
        </motion.p>

        {/* Live Anniversary Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <LoveCounter />
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <button onClick={handleEnterClick} className="btn-romantic">
            <Sparkles size={20} color="#ffe6a7" />
            <span>ENTRAR A NUESTRA HISTORIA 💗</span>
          </button>
        </motion.div>

        {/* Gentle Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 1 },
            y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            marginTop: "2.4rem",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
            color: "rgba(255, 214, 228, 0.75)",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>Baja despacito para ver lo que te preparé, preciosa</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          .hero-floating-polaroids {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

