"use client";

import {
  systemsProjects,
  commerceProjects,
} from "@/data/projects";

import ProjectCarousel from "./ProjectCarousel";

/* =========================================================
   PROJECT ARCHIVE
   ========================================================= */

export default function ProjectArchive() {
  return (
    <>
      <ProjectCarousel
        id="systems"
        projects={systemsProjects}
        label="SYSTEMS"
        sublabel="// AUTOMATION + DATA"
        code="K.STAHL / 04"
        stageLabel="SYSTEMS + AUTOMATION"
        stageInstruction="SELECT / CLICK TO INSPECT"
      />

      <ProjectCarousel
        id="commerce"
        projects={commerceProjects}
        label="COMMERCE"
        sublabel="// CLIENT SYSTEMS"
        code="K.STAHL / 05"
        stageLabel="COMMERCE + CLIENT WORK"
        stageInstruction="SELECT / CLICK TO INSPECT"
      />
    </>
  );
}