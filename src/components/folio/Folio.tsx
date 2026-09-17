"use client";

import { useEffect, useState } from "react";

import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import ExperienceSection from "@/experience/ExperienceSection";
import ContactSection from "../contact/ContactSection";


const D = "'DM Serif Display', Georgia, serif";
const S = "'Outfit', system-ui, sans-serif";
const M = "'JetBrains Mono', monospace";
const INK = "#1a1714";

// ─── Responsive hook ─────────────────────────────────────────────────────────

function useW() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handleResize = () => setW(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return w;
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f5f2ee",
        overflowX: "hidden",
      }}
    >
      <SiteNav />
      <HeroSection />
      <ProjectCarousel />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

