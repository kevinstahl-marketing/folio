
"use client";

import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import ExperienceSection from "@/experience/ExperienceSection";
import ContactSection from "../contact/ContactSection";

import {
  projects,
  systemsProjects,
  commerceProjects,
} from "@/data/projects";

/* =========================================================
   FOLIO
   ========================================================= */

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

      {/* FEATURED PROJECTS */}

      <ProjectCarousel
        id="carousel"
        projects={projects}
        label="FEATURED PROJECTS"
        sublabel="// SHIPPED WORK"
        code="K.STAHL / 03"
      />

      {/* SYSTEMS + AUTOMATION */}

      <ProjectCarousel
        id="systems"
        projects={systemsProjects}
        label="SYSTEMS"
        sublabel="// AUTOMATION + DATA"
        code="K.STAHL / 04"
        stageLabel="SYSTEMS + AUTOMATION"
        stageInstruction="SELECT / CLICK TO INSPECT"
      />

      {/* COMMERCE + CLIENT WORK */}

      <ProjectCarousel
        id="commerce"
        projects={commerceProjects}
        label="COMMERCE"
        sublabel="// CLIENT SYSTEMS"
        code="K.STAHL / 05"
        stageLabel="COMMERCE + CLIENT WORK"
        stageInstruction="SELECT / CLICK TO INSPECT"
      />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
}