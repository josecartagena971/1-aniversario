import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Heart,
  RotateCw,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  X,
  LayoutGrid,
  GalleryHorizontal,
  Sparkles,
} from "lucide-react";
import { PHOTO_GALLERY_ITEMS } from "../data/memoriesData";

const CATEGORIES = [
  { id: "todos", label: "Todos los Recuerdos (46)" },
  { id: "nosotros", label: "Nosotros Juntos 💑" },
  { id: "citas", label: "Citas & Aventuras 🍷🍦" },
  { id: "ella", label: "Mi Niña Bonita 👑" },
  { id: "especiales", label: "Momentos Especiales ✨" },
];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [viewMode, setViewMode] = useState("mosaic"); // "mosaic" | "carousel"
  const [flippedIds, setFlippedIds] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "todos") return PHOTO_GALLERY_ITEMS;
    return PHOTO_GALLERY_ITEMS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
        setIsZoomed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const toggleFlip = (id, e) => {
    e.stopPropagation();
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentLightboxPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="album" className="section-container">
      {/* Header */}
      <div className="section-header">
        <span className="section-badge">
          <Camera size={14} color="#ffe6a7" />
          <span>46 Fotografías Reales • Nuestro Primer Año</span>
        </span>
        <h2 className="section-title text-gradient-romantic">
          Nuestro Álbum de Recuerdos 📸
        </h2>
        <p className="section-subtitle">
          Cada foto de aquí me saca una sonrisa apenas la veo, preciosa. Haz
          clic en las que dicen “Girar 3D” para leer lo que te dejé atrás, o
          toca cualquiera para verla en grande.
        </p>
      </div>

      {/* Filter & View Mode Controls */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "2.8rem",
        }}
      >
        {/* Category Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.55rem 1.1rem",
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
                  boxShadow: active
                    ? "0 8px 25px rgba(255, 46, 126, 0.4)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher */}
        <div
          className="glass-panel"
          style={{
            display: "inline-flex",
            padding: "0.3rem",
            borderRadius: "999px",
            gap: "0.3rem",
          }}
        >
          <button
            onClick={() => setViewMode("mosaic")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.95rem",
              borderRadius: "999px",
              border: "none",
              background:
                viewMode === "mosaic"
                  ? "rgba(255, 46, 126, 0.55)"
                  : "transparent",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <LayoutGrid size={14} />
            <span>Polaroids & 3D</span>
          </button>
          <button
            onClick={() => setViewMode("carousel")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.95rem",
              borderRadius: "999px",
              border: "none",
              background:
                viewMode === "carousel"
                  ? "rgba(255, 46, 126, 0.55)"
                  : "transparent",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <GalleryHorizontal size={14} />
            <span>Ver una por una</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: Featured Romantic Carousel */}
      {viewMode === "carousel" ? (
        <div
          className="glass-panel-gold"
          style={{
            borderRadius: "30px",
            padding: "2rem",
            position: "relative",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {filteredPhotos.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => setLightboxIndex(carouselIndex)}
                className="polaroid-card"
                style={{
                  cursor: "pointer",
                  transform: "rotate(-1.5deg)",
                }}
              >
                <img
                  src={filteredPhotos[carouselIndex]?.src}
                  alt={filteredPhotos[carouselIndex]?.title}
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    display: "block",
                  }}
                />
                <p
                  className="font-hand"
                  style={{
                    textAlign: "center",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginTop: "10px",
                    color: "#3a142a",
                  }}
                >
                  {filteredPhotos[carouselIndex]?.title}
                </p>
              </div>

              <div>
                <span className="section-badge">
                  Recuerdo #{carouselIndex + 1} de {filteredPhotos.length}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "2.2rem",
                    color: "#ffe6a7",
                    marginBottom: "0.9rem",
                  }}
                >
                  {filteredPhotos[carouselIndex]?.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.75,
                    color: "rgba(255, 249, 251, 0.9)",
                    marginBottom: "1.8rem",
                  }}
                >
                  “{filteredPhotos[carouselIndex]?.caption}”
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() =>
                      setCarouselIndex(
                        (i) =>
                          (i - 1 + filteredPhotos.length) %
                          filteredPhotos.length
                      )
                    }
                    className="glass-panel"
                    style={{
                      padding: "0.7rem 1.2rem",
                      borderRadius: "999px",
                      color: "#fff",
                      border: "1px solid rgba(255,214,228,0.35)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <ChevronLeft size={18} /> Anterior
                  </button>
                  <button
                    onClick={() =>
                      setCarouselIndex((i) => (i + 1) % filteredPhotos.length)
                    }
                    className="btn-romantic"
                    style={{ padding: "0.7rem 1.4rem", fontSize: "0.9rem" }}
                  >
                    Siguiente <ChevronRight size={18} />
                  </button>
                  <button
                    onClick={() => setLightboxIndex(carouselIndex)}
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(244, 196, 48, 0.45)",
                      color: "#ffe6a7",
                      padding: "0.7rem 1.1rem",
                      borderRadius: "999px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <ZoomIn size={16} /> Ver en grande
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* VIEW MODE 2: Dynamic Polaroid + 3D Flip + Cinematic Mosaic */
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(265px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredPhotos.map((photo, index) => {
            const isFlipped = !!flippedIds[photo.id];
            const isFlipCard = photo.cardType === "flip3d";
            const isPolaroid = photo.cardType === "polaroid";

            return (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
                className={isFlipCard ? "flip-card-perspective" : ""}
                style={{ height: "370px" }}
              >
                {isFlipCard ? (
                  /* 3D FLIP CARD */
                  <div
                    onClick={(e) => toggleFlip(photo.id, e)}
                    className={`flip-card-inner ${
                      isFlipped ? "is-flipped" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Front */}
                    <div
                      className="flip-card-front polaroid-card"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transform: `rotate(${photo.rotation}deg)`,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "285px",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background:
                              "linear-gradient(135deg, #ff2e7e, #c9184a)",
                            color: "#fff",
                            padding: "0.28rem 0.65rem",
                            borderRadius: "999px",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                          }}
                        >
                          <RotateCw size={11} /> Girar 3D
                        </span>
                      </div>
                      <p
                        className="font-hand"
                        style={{
                          textAlign: "center",
                          fontSize: "1.22rem",
                          fontWeight: 700,
                          color: "#3d142c",
                          paddingTop: "6px",
                        }}
                      >
                        {photo.title}
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      className="flip-card-back glass-panel-gold"
                      style={{
                        borderRadius: "18px",
                        padding: "1.6rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "0.9rem",
                      }}
                    >
                      <Heart
                        size={32}
                        fill="#ff2e7e"
                        color="#ffe6a7"
                        className="animate-heartbeat"
                      />
                      <h4
                        className="font-serif"
                        style={{ fontSize: "1.45rem", color: "#ffe6a7" }}
                      >
                        {photo.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.94rem",
                          lineHeight: 1.65,
                          color: "#fff9fb",
                        }}
                      >
                        “{photo.caption}”
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(index);
                        }}
                        style={{
                          marginTop: "0.4rem",
                          padding: "0.48rem 1rem",
                          borderRadius: "999px",
                          border: "1px solid #ffe6a7",
                          background: "rgba(255, 46, 126, 0.35)",
                          color: "#fff",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <ZoomIn size={13} /> Abrir en pantalla grande
                      </button>
                    </div>
                  </div>
                ) : isPolaroid ? (
                  /* POLAROID CARD */
                  <motion.div
                    whileHover={{
                      scale: 1.035,
                      rotate: 0,
                      zIndex: 5,
                    }}
                    onClick={() => setLightboxIndex(index)}
                    className="polaroid-card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transform: `rotate(${photo.rotation}deg)`,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "285px",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                    <p
                      className="font-hand"
                      style={{
                        textAlign: "center",
                        fontSize: "1.22rem",
                        fontWeight: 700,
                        color: "#3d142c",
                        paddingTop: "6px",
                      }}
                    >
                      {photo.title}
                    </p>
                  </motion.div>
                ) : (
                  /* CINEMATIC GLOW CARD */
                  <motion.div
                    whileHover={{ scale: 1.035, y: -5 }}
                    onClick={() => setLightboxIndex(index)}
                    className="glass-panel-gold"
                    style={{
                      height: "100%",
                      borderRadius: "20px",
                      padding: "10px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "14px",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: "10px",
                        borderRadius: "14px",
                        background:
                          "linear-gradient(180deg, transparent 48%, rgba(15, 5, 24, 0.92) 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "1.1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#ffe6a7",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Sparkles size={11} /> Recuerdo bonito ✨
                      </span>
                      <h4
                        className="font-serif"
                        style={{
                          fontSize: "1.32rem",
                          color: "#fff",
                          marginTop: "0.15rem",
                        }}
                      >
                        {photo.title}
                      </h4>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Fullscreen Blurred Lightbox */}
      <AnimatePresence>
        {currentLightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setLightboxIndex(null);
              setIsZoomed(false);
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 95,
              background: "rgba(9, 3, 16, 0.92)",
              backdropFilter: "blur(18px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.25rem",
            }}
          >
            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (prev) =>
                    (prev - 1 + filteredPhotos.length) % filteredPhotos.length
                );
                setIsZoomed(false);
              }}
              aria-label="Foto anterior"
              style={{
                position: "fixed",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "1px solid rgba(255,214,228,0.35)",
                background: "rgba(25, 10, 40, 0.85)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
                setIsZoomed(false);
              }}
              aria-label="Siguiente foto"
              style={{
                position: "fixed",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "1px solid rgba(255,214,228,0.35)",
                background: "rgba(25, 10, 40, 0.85)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={currentLightboxPhoto.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel-gold"
              style={{
                maxWidth: "780px",
                width: "100%",
                borderRadius: "28px",
                padding: "1.4rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Top Actions */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.85rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#ffe6a7",
                    fontWeight: 600,
                  }}
                >
                  Recuerdo {lightboxIndex + 1} de {filteredPhotos.length}
                </span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => setIsZoomed((z) => !z)}
                    style={{
                      padding: "0.4rem 0.8rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.25)",
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontSize: "0.78rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    {isZoomed ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
                    <span>{isZoomed ? "Alejar" : "Zoom"}</span>
                  </button>
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      setIsZoomed(false);
                    }}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.25)",
                      background: "rgba(255, 46, 126, 0.35)",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Photo Container */}
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "18px",
                  background: "rgba(0,0,0,0.45)",
                  maxHeight: "64vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={currentLightboxPhoto.src}
                  alt={currentLightboxPhoto.title}
                  onClick={() => setIsZoomed((z) => !z)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "64vh",
                    objectFit: "contain",
                    transform: isZoomed ? "scale(1.45)" : "scale(1)",
                    transition: "transform 0.4s ease",
                    cursor: isZoomed ? "zoom-out" : "zoom-in",
                  }}
                />
              </div>

              {/* Romantic Caption */}
              <div style={{ marginTop: "1.1rem" }}>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.75rem", color: "#ffe6a7" }}
                >
                  {currentLightboxPhoto.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.02rem",
                    color: "#fff9fb",
                    marginTop: "0.35rem",
                    maxWidth: "600px",
                    marginInline: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  “{currentLightboxPhoto.caption}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

