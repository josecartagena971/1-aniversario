import React, { useEffect, useState, useCallback } from "react";

const FLOATING_WORDS = [
  "Mi niña bonita 🎀",
  "Corazón de melocotón 🍑",
  "Mi muñequita bonita ✨",
  "Mi melocotini ❤️",
  "Mi amorcini 💗",
  "Cariñito mío 🌸",
  "Mi niña guapa",
  "Preciosa 💕",
  "Liz & José • 11 • 11",
];

export default function AmbientBackground() {
  const [clickBursts, setClickBursts] = useState([]);

  // Generate deterministic-looking ambient elements on mount
  const [ambientItems] = useState(() => {
    const stars = Array.from({ length: 55 }, (_, i) => ({
      id: `star-${i}`,
      left: `${(i * 19.3) % 100}%`,
      top: `${(i * 29.7) % 100}%`,
      size: 2 + (i % 4),
      delay: `${(i * 0.4) % 6}s`,
      duration: `${3 + (i % 4)}s`,
    }));

    const hearts = Array.from({ length: 20 }, (_, i) => ({
      id: `heart-${i}`,
      left: `${(i * 17.5 + 3) % 96}%`,
      size: 12 + ((i * 7) % 22),
      delay: `${(i * 1.1) % 14}s`,
      duration: `${15 + (i % 12)}s`,
      opacity: 0.15 + ((i % 5) * 0.06),
      color:
        i % 3 === 0
          ? "#ff2e7e"
          : i % 3 === 1
          ? "#ffd6e4"
          : "#f4c430",
    }));

    const petals = Array.from({ length: 16 }, (_, i) => ({
      id: `petal-${i}`,
      left: `${(i * 23.1 + 5) % 95}%`,
      size: 10 + (i % 8),
      delay: `${(i * 1.4) % 12}s`,
      duration: `${16 + (i % 10)}s`,
      drift: (i % 2 === 0 ? 1 : -1) * (25 + (i % 30)),
    }));

    const words = FLOATING_WORDS.map((text, i) => ({
      id: `word-${i}`,
      text,
      left: `${8 + ((i * 21) % 82)}%`,
      top: `${10 + ((i * 17) % 80)}%`,
      delay: `${i * 1.3}s`,
      duration: `${12 + (i % 6)}s`,
    }));

    return { stars, hearts, petals, words };
  });

  const handleGlobalClick = useCallback((e) => {
    // Avoid spawning bursts if clicking inside inputs/buttons with heavy UI
    if (e.target.closest("input, textarea, select")) return;
    const id = Date.now() + Math.random();
    const newBurst = {
      id,
      x: e.clientX,
      y: e.clientY,
    };
    setClickBursts((prev) => [...prev.slice(-6), newBurst]);
    setTimeout(() => {
      setClickBursts((prev) => prev.filter((b) => b.id !== id));
    }, 1100);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [handleGlobalClick]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Ambient glowing nebula bokeh orbs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "52vw",
          height: "52vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,46,126,0.16) 0%, rgba(201,24,74,0.06) 45%, transparent 70%)",
          filter: "blur(60px)",
          animation: "nebulaFloat1 22s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,182,255,0.14) 0%, rgba(244,196,48,0.06) 45%, transparent 70%)",
          filter: "blur(70px)",
          animation: "nebulaFloat2 26s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,182,213,0.1) 0%, transparent 68%)",
          filter: "blur(65px)",
        }}
      />

      {/* Twinkling Stars */}
      {ambientItems.stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: star.size > 3 ? "#ffe6a7" : "#fff9fb",
            boxShadow:
              star.size > 3
                ? "0 0 10px 2px rgba(255, 230, 167, 0.8)"
                : "0 0 6px 1px rgba(255, 214, 228, 0.7)",
            animation: `starTwinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}

      {/* Floating Romantic Words */}
      {ambientItems.words.map((w) => (
        <div
          key={w.id}
          className="font-script"
          style={{
            position: "absolute",
            left: w.left,
            top: w.top,
            fontSize: "clamp(1.25rem, 2vw, 1.85rem)",
            color: "rgba(255, 214, 228, 0.11)",
            whiteSpace: "nowrap",
            userSelect: "none",
            animation: `wordFloat ${w.duration} ease-in-out ${w.delay} infinite alternate`,
          }}
        >
          {w.text}
        </div>
      ))}

      {/* Rising Floating Hearts */}
      {ambientItems.hearts.map((h) => (
        <svg
          key={h.id}
          viewBox="0 0 24 24"
          fill={h.color}
          style={{
            position: "absolute",
            left: h.left,
            bottom: "-40px",
            width: `${h.size}px`,
            height: `${h.size}px`,
            opacity: h.opacity,
            filter: "drop-shadow(0 0 8px rgba(255, 46, 126, 0.35))",
            animation: `heartRise ${h.duration} linear ${h.delay} infinite`,
          }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}

      {/* Gently Falling Rose/Cherry Petals */}
      {ambientItems.petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            left: p.left,
            top: "-30px",
            width: `${p.size}px`,
            height: `${p.size * 1.25}px`,
            opacity: 0.28,
            animation: `petalFall ${p.duration} linear ${p.delay} infinite`,
          }}
        >
          <path
            d="M12 2C7 6 4 12 8 18C10.5 21.5 14 21 16 18C20 12 17 6 12 2Z"
            fill="url(#petalGrad)"
          />
          <defs>
            <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd6e4" />
              <stop offset="100%" stopColor="#ff4d8d" />
            </linearGradient>
          </defs>
        </svg>
      ))}

      {/* Interactive Click Sparkle & Heart Bursts */}
      {clickBursts.map((burst) => (
        <div
          key={burst.id}
          style={{
            position: "fixed",
            left: burst.x,
            top: burst.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((idx) => {
            const angle = (idx * 60 * Math.PI) / 180;
            const dist = 36 + (idx % 2) * 18;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist - 15;
            return (
              <span
                key={idx}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  fontSize: idx % 2 === 0 ? "14px" : "11px",
                  color: idx % 2 === 0 ? "#ff4d8d" : "#ffe6a7",
                  transform: `translate(${tx}px, ${ty}px)`,
                  animation: "clickSparkleFade 0.95s ease-out forwards",
                }}
              >
                {idx % 2 === 0 ? "❤" : "✦"}
              </span>
            );
          })}
        </div>
      ))}

      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes heartRise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.32;
          }
          85% {
            opacity: 0.28;
          }
          100% {
            transform: translateY(-112vh) translateX(35px) rotate(25deg) scale(1.15);
            opacity: 0;
          }
        }
        @keyframes petalFall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          85% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(110vh) translateX(-45px) rotate(320deg);
            opacity: 0;
          }
        }
        @keyframes wordFloat {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-18px) translateX(12px); }
        }
        @keyframes nebulaFloat1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(6vw, 5vh) scale(1.12); }
        }
        @keyframes nebulaFloat2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-6vw, -5vh) scale(1.1); }
        }
        @keyframes clickSparkleFade {
          0% { opacity: 1; transform: translate(0, 0) scale(0.5); }
          100% { opacity: 0; transform: translate(var(--tx, 0px), -35px) scale(1.35); }
        }
      `}</style>
    </div>
  );
}

