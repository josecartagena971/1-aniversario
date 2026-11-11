import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Upload,
  Heart,
} from "lucide-react";
import { mediaUrl } from "../data/memoriesData";

/*
  NUESTRA CANCIÓN PRINCIPAL:
  - Archivo ubicado en public/music/nuestra-cancion.mp3 (The Turtles - Happy Together).
  - Nunca suena automáticamente al cargar la página: comienza cuando ella presiona
    "ENTRAR A NUESTRA HISTORIA" o cuando toca Play en el reproductor / mini-reproductor.
*/
export const SONG = {
  src: "/music/nuestra-cancion.mp3",
  title: "Happy Together",
  artist: "The Turtles • Nuestra Canción ❤️",
  cover: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg"),
};

function formatTime(sec) {
  if (!sec || !Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

// Melodía de respaldo en caso de error al cargar el MP3
const MELODY = [
  [659, 0.5], [784, 0.5], [880, 1], [784, 0.5], [659, 0.5], [587, 1],
  [523, 0.5], [587, 0.5], [659, 1], [784, 1], [659, 2],
  [880, 0.5], [988, 0.5], [1047, 1], [988, 0.5], [880, 0.5], [784, 1],
  [659, 0.5], [698, 0.5], [784, 1], [587, 1], [523, 2],
];

function useMusicBox() {
  const ctxRef = useRef(null);
  const timerRef = useRef(null);
  const gainRef = useRef(null);

  const playNote = (ctx, freq, t, dur) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 1.6);
    osc.connect(g).connect(gainRef.current);
    osc.start(t);
    osc.stop(t + dur * 1.7);
  };

  const start = () => {
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new Ctx();
      gainRef.current = ctxRef.current.createGain();
      gainRef.current.gain.value = 0.6;
      gainRef.current.connect(ctxRef.current.destination);
    }
    const ctx = ctxRef.current;
    ctx.resume();
    const beat = 0.42;
    const loop = () => {
      let t = ctx.currentTime + 0.05;
      MELODY.forEach(([f, d]) => {
        playNote(ctx, f, t, d * beat);
        playNote(ctx, f / 2, t, d * beat * 0.8);
        t += d * beat;
      });
      const total = MELODY.reduce((s, [, d]) => s + d, 0) * beat;
      timerRef.current = setTimeout(loop, total * 1000);
    };
    loop();
  };

  const stop = () => {
    clearTimeout(timerRef.current);
    if (ctxRef.current) ctxRef.current.suspend();
  };

  const setMuted = (m) => {
    if (gainRef.current) gainRef.current.gain.value = m ? 0 : 0.6;
  };

  useEffect(() => () => stop(), []);
  return { start, stop, setMuted };
}

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [hasFile, setHasFile] = useState(true);
  const [src, setSrc] = useState(SONG.src);
  const [title, setTitle] = useState(SONG.title);
  const [artist, setArtist] = useState(SONG.artist);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const box = useMusicBox();
  const boxRef = useRef(box);
  boxRef.current = box;
  const hasFileRef = useRef(hasFile);
  hasFileRef.current = hasFile;
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Escuchar eventos globales para iniciar desde el botón de bienvenida o pausar al ver videos
  useEffect(() => {
    const onStartMain = () => {
      if (hasFileRef.current) {
        const a = audioRef.current;
        if (!a) return;
        a.volume = 0.72;
        if (a.paused) {
          a.play().then(() => setPlaying(true)).catch(() => {});
        }
      } else if (!playingRef.current) {
        boxRef.current.start();
        setPlaying(true);
      }
    };

    const onPauseMain = () => {
      if (hasFileRef.current) {
        const a = audioRef.current;
        if (a && !a.paused) {
          a.pause();
          setPlaying(false);
        }
      } else if (playingRef.current) {
        boxRef.current.stop();
        setPlaying(false);
      }
    };

    window.addEventListener("start-main-music", onStartMain);
    window.addEventListener("pause-main-music", onPauseMain);
    return () => {
      window.removeEventListener("start-main-music", onStartMain);
      window.removeEventListener("pause-main-music", onPauseMain);
    };
  }, []);

  const toggle = () => {
    if (hasFile) {
      const a = audioRef.current;
      if (!a) return;
      a.volume = 0.72;
      if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
      else {
        a.pause();
        setPlaying(false);
      }
    } else {
      if (playing) box.stop();
      else box.start();
      setPlaying((p) => !p);
    }
  };

  const toggleMute = () => {
    const m = !muted;
    setMuted(m);
    if (audioRef.current) audioRef.current.muted = m;
    box.setMuted(m);
  };

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    box.stop();
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setSrc(URL.createObjectURL(f));
    setTitle(f.name.replace(/\.[^.]+$/, ""));
    setArtist("Canción personalizada ❤️");
    setHasFile(true);
  };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    a.currentTime = ratio * a.duration;
  };

  const scrollToPlayer = () => {
    const el = document.getElementById("cancion");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="cancion" className="section-container">
        <div className="section-header">
          <span className="section-badge">
            <Music size={14} color="#ffe6a7" /> <span>Música Principal</span>
          </span>
          <h2 className="section-title text-gradient-romantic">Nuestra Canción 🎵</h2>
          <p className="section-subtitle">
            “Imagine me and you, I do...” Cada vez que suena esta canción me acuerdo de ti y de nuestro primer año, mi amorcini.
          </p>
        </div>

        <audio
          ref={audioRef}
          src={hasFile ? src : undefined}
          loop
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
          onTimeUpdate={(e) => {
            setCurrentTime(e.currentTarget.currentTime || 0);
            if (!duration && e.currentTarget.duration) {
              setDuration(e.currentTarget.duration);
            }
          }}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onError={() => setHasFile(false)}
        />

        <div
          className="glass-panel-gold"
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            borderRadius: "32px",
            padding: "clamp(1.4rem, 4vw, 2.6rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Vinilo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className={playing ? "vinyl-spinning" : ""}
              onClick={toggle}
              title={playing ? "Pausar" : "Reproducir"}
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "repeating-radial-gradient(circle, #111 0 2px, #1d1d1d 2px 4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.7), 0 0 40px rgba(255,46,126,0.35)",
                border: "4px solid #2a2a2a",
                cursor: "pointer",
              }}
            >
              <img
                src={SONG.cover}
                alt="Portada"
                style={{
                  width: "108px",
                  height: "108px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #ffe6a7",
                }}
              />
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffb3cc",
              }}
            >
              {playing ? "Sonando ahora para mi preciosa ✨" : "Lista para sonar"}
            </p>
            <h3
              className="font-serif"
              style={{ fontSize: "2.1rem", color: "#ffe6a7", lineHeight: 1.15 }}
            >
              {title}
            </h3>
            <p style={{ color: "rgba(255,249,251,0.84)", marginBottom: "1.2rem" }}>
              {hasFile ? artist : "Cajita musical de respaldo"}
            </p>

            {/* Ecualizador */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "5px",
                height: "42px",
                marginBottom: "1rem",
              }}
            >
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className={playing ? "eq-bar" : ""}
                  style={{
                    width: "6px",
                    height: "100%",
                    borderRadius: "3px",
                    background: "linear-gradient(180deg,#ffe6a7,#ff2e7e)",
                    animationDelay: `${(i * 0.09) % 0.9}s`,
                    transform: playing ? undefined : "scaleY(0.2)",
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>

            {hasFile && (
              <div style={{ marginBottom: "1.2rem" }}>
                <div
                  onClick={seek}
                  style={{
                    height: "7px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.15)",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      borderRadius: "999px",
                      background: "linear-gradient(90deg,#ff2e7e,#ffe6a7)",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                    color: "rgba(255,214,228,0.75)",
                    marginTop: "0.35rem",
                  }}
                >
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7rem",
                alignItems: "center",
              }}
            >
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggle}
                className="btn-romantic"
                style={{ padding: "0.85rem 1.6rem" }}
              >
                {playing ? (
                  <Pause size={18} fill="#fff" />
                ) : (
                  <Play size={18} fill="#fff" />
                )}
                {playing ? "Pausar" : "Reproducir"}
              </motion.button>
              <button onClick={toggleMute} style={pill}>
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}{" "}
                {muted ? "Activar sonido" : "Silenciar"}
              </button>
              <label style={{ ...pill, cursor: "pointer" }}>
                <Upload size={15} /> Cambiar MP3
                <input
                  type="file"
                  accept="audio/*"
                  onChange={onFile}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-reproductor flotante para controlar la música en toda la página */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel-gold"
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            zIndex: 55,
            borderRadius: "999px",
            padding: "0.45rem 0.65rem 0.45rem 0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            maxWidth: "min(92vw, 310px)",
          }}
        >
          <button
            onClick={scrollToPlayer}
            title="Ir a Nuestra Canción"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              minWidth: 0,
              color: "#fff",
              textAlign: "left",
            }}
          >
            <div
              className={playing ? "vinyl-spinning" : ""}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(135deg,#ffe6a7,#ff2e7e)",
                flexShrink: 0,
              }}
            >
              <img
                src={SONG.cover}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#ffe6a7",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <Heart size={10} fill="#ff2e7e" color="#ff2e7e" />
                <span>{title}</span>
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(255,214,228,0.78)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {playing ? "Reproduciendo..." : "Toca ▶ para escuchar"}
              </div>
            </div>
          </button>

          <button
            onClick={toggle}
            aria-label={playing ? "Pausar música" : "Reproducir música"}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg,#ff2e7e,#c9184a)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              boxShadow: "0 0 12px rgba(255,46,126,0.5)",
            }}
          >
            {playing ? (
              <Pause size={14} fill="#fff" />
            ) : (
              <Play size={14} fill="#fff" style={{ marginLeft: "1px" }} />
            )}
          </button>

          <button
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar música"}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1px solid rgba(255,214,228,0.28)",
              background: "rgba(255,255,255,0.08)",
              color: "#ffd6e4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const pill = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.7rem 1.1rem",
  borderRadius: "999px",
  border: "1px solid rgba(255,214,228,0.3)",
  background: "rgba(255,255,255,0.07)",
  color: "#fff",
  fontSize: "0.85rem",
};
