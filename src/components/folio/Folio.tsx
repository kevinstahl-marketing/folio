"use client";

import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import ProjectArchive from "@/components/projects/ProjectArchive";
import ExperienceSection from "@/experience/ExperienceSection";
import ContactSection from "../contact/ContactSection";

import { projects } from "@/data/projects";

const D = "'DM Serif Display', Georgia, serif";
const S = "'Outfit', system-ui, sans-serif";
const M = "'JetBrains Mono', monospace";
const INK = "#1a1714";



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
      <ProjectCarousel
        projects={projects}
        label="FEATURED PROJECTS"
        sublabel="// SHIPPED WORK"
        code="K.STAHL / 03"
      />
      <ProjectArchive />
      <ExperienceSection />
      <ContactSection />

    </div>
  );
}

