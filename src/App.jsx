import React, { useEffect, useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import FloatingNav from "./components/FloatingNav";
import WelcomeScreen from "./components/WelcomeScreen";
import Timeline from "./components/Timeline";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import HelloKittySection from "./components/HelloKittySection";
import SpiderManSection from "./components/SpiderManSection";
import LoveQuiz from "./components/LoveQuiz";
import LoveReasons from "./components/LoveReasons";
import MusicPlayer from "./components/MusicPlayer";
import LoveLetter from "./components/LoveLetter";
import FinalSection from "./components/FinalSection";

const SECTION_IDS = ["inicio", "historia", "album", "videos", "hellokitty", "spiderman", "juego", "razones", "cancion", "carta", "final"];

export default function App() {
  const [active, setActive] = useState("inicio");
  const [easterEgg, setEasterEgg] = useState(false);

  // Sección activa para el menú
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Detalle oculto: escribir "liz" en el teclado
  useEffect(() => {
    let buffer = "";
    const onKey = (e) => {
      if (e.target.closest?.("input, textarea")) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-3);
      if (buffer === "liz") {
        setEasterEgg(true);
        setTimeout(() => setEasterEgg(false), 4500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <AmbientBackground />
      <FloatingNav activeSection={active} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <WelcomeScreen />
        <Timeline />
        <PhotoGallery />
        <VideoGallery />
        <HelloKittySection />
        <SpiderManSection />
        <LoveQuiz />
        <LoveReasons />
        <MusicPlayer />
        <LoveLetter />
        <FinalSection />
      </main>

      {easterEgg && (
        <div
          className="glass-panel-gold font-script"
          style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 99, padding: "0.9rem 1.6rem", borderRadius: "999px", fontSize: "clamp(1.35rem, 3.5vw, 1.8rem)", color: "#ffe6a7", maxWidth: "92vw", textAlign: "center" }}
        >
          Escribiste tu nombre, mi niña bonita… te amo un montón, corazón de melocotón ❤️
        </div>
      )}
    </>
  );
}

