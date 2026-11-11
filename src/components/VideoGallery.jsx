import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  Play,
  RotateCw,
  Sparkles,
  Heart,
  Volume2,
  VolumeX,
  Clapperboard,
} from "lucide-react";
import { VIDEO_GALLERY_ITEMS } from "../data/memoriesData";

const VIDEO_CATEGORIES = [
  { id: "todos", label: "Todos los videos (15) 🎬" },
  { id: "nosotros", label: "Tú y yo ❤️" },
  { id: "ella", label: "Mi niña guapa (Liz) 👑" },
  { id: "divertidos", label: "Besitos & Risas 💋" },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(VIDEO_GALLERY_ITEMS[0]);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [customRotation, setCustomRotation] = useState(
    VIDEO_GALLERY_ITEMS[0].defaultRotation || 0
  );
  const [showIntroCurtain, setShowIntroCurtain] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const filteredVideos =
    activeCategory === "todos"
      ? VIDEO_GALLERY_ITEMS
      : VIDEO_GALLERY_ITEMS.filter((v) => v.category === activeCategory);

  const handleSelectVideo = (video) => {
    setShowIntroCurtain(true);
    setSelectedVideo(video);
    setCustomRotation(video.defaultRotation || 0);

    setTimeout(() => {
      setShowIntroCurtain(false);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => { });
      }
    }, 850);
  };

  const handleRotate = () => {
    setCustomRotation((prev) => (prev + 90) % 360);
  };

  const isSideways =
    Math.abs(customRotation % 180) === 90;

  return (
    <section id="videos" className="section-container">
      {/* Header */}
      <div className="section-header">
        <span className="section-badge">
          <Clapperboard size={14} color="#ffe6a7" />
          <span>Nuestro Cine Privado • 15 Videos Reales</span>
        </span>
        <h2 className="section-title text-gradient-romantic">
          Nuestros Videos en el Cine 🎬
        </h2>
        <p className="section-subtitle">
          Ponte cómoda, mi preciosa. Aquí junté nuestros videos tal cual somos:
          tu risa, nuestras salidas, tus dedicatorias y mis locuras para
          hacerte reír.
        </p>
      </div>

      {/* Main Romantic Cinema Theater Screen */}
      <div
        className="glass-panel-gold"
        style={{
          borderRadius: "32px",
          padding: "clamp(1.2rem, 3vw, 2.2rem)",
          marginBottom: "3rem",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 46, 126, 0.25)",
        }}
      >
        {/* Top Theater Velvet Curtain Accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #800f2f, #ff2e7e, #ffe6a7, #ff2e7e, #800f2f)",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Cinema Screen Frame */}
          <div
            style={{
              position: "relative",
              background: "#07020c",
              borderRadius: "22px",
              height: "470px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: "2px solid rgba(244, 196, 48, 0.45)",
              boxShadow: "inset 0 0 45px rgba(255, 46, 126, 0.22)",
            }}
          >
            {/* Special Presentation Intro Overlay */}
            <AnimatePresence>
              {showIntroCurtain && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 10,
                    background:
                      "radial-gradient(circle, #381030 0%, #0f0419 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <Sparkles size={38} color="#ffe6a7" />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#ffd6e4",
                      marginTop: "0.6rem",
                    }}
                  >
                    Para ti, corazón • Liz & José
                  </span>
                  <h4
                    className="font-serif"
                    style={{
                      fontSize: "1.8rem",
                      color: "#ffe6a7",
                      marginTop: "0.4rem",
                    }}
                  >
                    {selectedVideo.title}
                  </h4>
                </motion.div>
              )}
            </AnimatePresence>

            <video
              ref={videoRef}
              key={selectedVideo.src}
              src={selectedVideo.src}
              poster={selectedVideo.poster || undefined}
              controls
              playsInline
              muted={isMuted}
              onPlay={() => {
                if (!isMuted) {
                  window.dispatchEvent(new CustomEvent("pause-main-music"));
                }
              }}
              style={{
                width: isSideways ? "min(80vw, 440px)" : "100%",
                height: isSideways ? "min(80vw, 440px)" : "100%",
                maxHeight: "450px",
                objectFit: "contain",
                transform: `rotate(${customRotation}deg)`,
                transition: "transform 0.35s ease",
              }}
            />
          </div>

          {/* Movie Info & Controls Panel */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.35rem 0.9rem",
                borderRadius: "999px",
                background: "rgba(255, 46, 126, 0.2)",
                border: "1px solid rgba(255, 230, 167, 0.4)",
                color: "#ffe6a7",
                fontSize: "0.78rem",
                fontWeight: 600,
                marginBottom: "0.9rem",
              }}
            >
              <Film size={14} />
              <span>{selectedVideo.badge}</span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                color: "#fff",
                lineHeight: 1.18,
                marginBottom: "0.45rem",
              }}
            >
              {selectedVideo.title}
            </h3>

            <p
              className="font-hand"
              style={{
                fontSize: "1.35rem",
                color: "#ffb3cc",
                marginBottom: "1rem",
              }}
            >
              {selectedVideo.subtitle}
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "rgba(255, 249, 251, 0.86)",
                marginBottom: "1.6rem",
              }}
            >
              {selectedVideo.description}
            </p>

            {/* Cinema Controls */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused) {
                      videoRef.current.play();
                    } else {
                      videoRef.current.pause();
                    }
                  }
                }}
                className="btn-romantic"
                style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}
              >
                <Play size={16} fill="#fff" />
                <span>Reproducir / Pausar</span>
              </button>

              <button
                onClick={handleRotate}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.75rem 1.15rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 230, 167, 0.45)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffe6a7",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <RotateCw size={15} />
                <span>Rotar vista ({customRotation}°)</span>
              </button>

              <button
                onClick={() => setIsMuted((m) => !m)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.75rem 1.1rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 214, 228, 0.3)",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "#fff",
                  fontSize: "0.84rem",
                  cursor: "pointer",
                }}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? "Activar Audio" : "Silenciar"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.55rem",
          marginBottom: "1.8rem",
          justifyContent: "center",
        }}
      >
        {VIDEO_CATEGORIES.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "0.55rem 1.15rem",
                borderRadius: "999px",
                border: active
                  ? "1px solid #ffe6a7"
                  : "1px solid rgba(255, 214, 228, 0.25)",
                background: active
                  ? "linear-gradient(135deg, var(--pink-vibrant), var(--cherry-red))"
                  : "rgba(255, 255, 255, 0.06)",
                color: "#fff",
                fontSize: "0.84rem",
                fontWeight: active ? 700 : 500,
                cursor: "pointer",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Video Thumbnails Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(245px, 1fr))",
          gap: "1.35rem",
        }}
      >
        {filteredVideos.map((vid) => {
          const isCurrent = selectedVideo.id === vid.id;
          return (
            <motion.div
              key={vid.id}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => handleSelectVideo(vid)}
              className={isCurrent ? "glass-panel-gold" : "glass-panel"}
              style={{
                borderRadius: "20px",
                padding: "0.75rem",
                cursor: "pointer",
                border: isCurrent
                  ? "2px solid #ffe6a7"
                  : "1px solid rgba(255, 214, 228, 0.2)",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "165px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "0.75rem",
                }}
              >
                {vid.poster ? (<img
                  src={vid.poster}
                  alt={vid.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: isCurrent ? "brightness(1)" : "brightness(0.82)",
                  }}
                />) : (<video
                  src={`${vid.src}#t=0.8`}
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    background: "#07020c",
                    transform: vid.defaultRotation
                      ? `rotate(${vid.defaultRotation}deg) scale(1.65)`
                      : undefined,
                    filter: isCurrent ? "brightness(1)" : "brightness(0.82)",
                  }}
                />)}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(15,5,24,0.75) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: isCurrent
                        ? "linear-gradient(135deg, #ffe6a7, #ff2e7e)"
                        : "rgba(255, 46, 126, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(255, 46, 126, 0.7)",
                    }}
                  >
                    <Play size={20} fill="#fff" color="#fff" />
                  </span>
                </div>

                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    background: "rgba(15, 5, 24, 0.82)",
                    color: "#ffe6a7",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.55rem",
                    borderRadius: "999px",
                  }}
                >
                  {vid.badge}
                </span>

                <span
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(15, 5, 24, 0.85)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "0.18rem 0.5rem",
                    borderRadius: "6px",
                  }}
                >
                  {vid.duration || "▶"}
                </span>
              </div>

              <h4
                className="font-serif"
                style={{
                  fontSize: "1.18rem",
                  color: isCurrent ? "#ffe6a7" : "#fff",
                  marginBottom: "0.2rem",
                }}
              >
                {vid.title}
              </h4>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 214, 228, 0.78)",
                  lineHeight: 1.4,
                }}
              >
                {vid.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

