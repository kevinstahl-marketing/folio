"use client";

import { useEffect, useRef, useState } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { projects } from "@/data/projects";
import FloatingCard from "./FloatingCard";
import styles from "./ProjectCarousel.module.css";

import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";

import ProjectModal from "@/components/projects/ProjectModal";
const projectPreviews = {
  ezc: <EZCalcsPreview />,
  lca: <LaConcheriaPreview />,
  ptl: <PianoTeacherLinkPreview />,
};
export default function ProjectCarousel() {
  const w = useWindowWidth();
  const [openProjectId, setOpenProjectId] = useState<
    (typeof projects)[number]["id"] | null
  >(null); const mobile = w < 640;

  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeProject, setActiveProject] = useState(1);
  const [titleDirection, setTitleDirection] =
    useState<"left" | "right">("left");

  const cardW = mobile
    ? Math.min(w - 40, 320)
    : Math.min(Math.round(w * 0.34), 480);

  const cardH = Math.round(cardW * 1.22);

  const prevIndex =
    (activeProject - 1 + projects.length) % projects.length;

  const nextIndex =
    (activeProject + 1) % projects.length;

  const openProject =
    projects.find((project) => project.id === openProjectId) ?? null;
  const goToProject = (index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];

    if (!rail || !card) return;

    const target =
      card.offsetLeft -
      rail.clientWidth / 2 +
      card.clientWidth / 2;

    rail.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setActiveProject(index);
  };

  const previousProject = () => {
    setTitleDirection("right");

    goToProject(
      activeProject === 0
        ? projects.length - 1
        : activeProject - 1
    );
  };

  const nextProject = () => {
    setTitleDirection("left");

    goToProject(
      activeProject === projects.length - 1
        ? 0
        : activeProject + 1
    );
  };

  const selectProject = (index: number) => {
    if (index === activeProject) return;

    setTitleDirection(index === nextIndex ? "left" : "right");

    goToProject(index);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeProject) {
      setTitleDirection(index > activeProject ? "left" : "right");
      goToProject(index);
      return;
    }

    setOpenProjectId(projects[index].id);
  };

  useEffect(() => {
    const rail = railRef.current;
    const card = cardRefs.current[1];

    if (!rail || !card) return;

    const target =
      card.offsetLeft -
      rail.clientWidth / 2 +
      card.clientWidth / 2;

    rail.scrollLeft = target;
  }, [cardW]);

  return (
    <section id="carousel" className={styles.carousel}>

      {/* =====================================================
          SECTION MARKER
          ===================================================== */}

      <header className={styles.sectionMarker}>
        <div className={styles.sectionLabel}>
          PROJECTS
          <span>// SHIPPED</span>
        </div>

        <div className={styles.sectionRule} />

        <div className={styles.sectionCode}>
          K.STAHL / 03
        </div>
      </header>


      {/* =====================================================
          PROJECT NAVIGATION
          ===================================================== */}

      <nav
        className={styles.projectNav}
        aria-label="Project navigation"
      >
        <button
          type="button"
          onClick={previousProject}
          className={`${styles.arrowButton} ${styles.arrowPrevious}`}
          aria-label="Previous project"
        >
          <span>←</span>
        </button>


        <div
          key={activeProject}
          className={`${styles.projectTitles} ${titleDirection === "left"
            ? styles.titlesFromRight
            : styles.titlesFromLeft
            }`}
        >
          {[prevIndex, activeProject, nextIndex].map(
            (index, position) => {
              const project = projects[index];
              const active = position === 1;

              return (
                <button
                  type="button"
                  key={`${project.id}-${position}`}
                  onClick={() => selectProject(index)}
                  className={`${styles.projectTitle} ${active ? styles.projectTitleActive : ""
                    }`}
                  aria-current={active ? "true" : undefined}
                >
                  {project.title}

                  {active && (
                    <span
                      className={styles.activeUnderline}
                      style={{
                        background: project.accent,
                      }}
                    />
                  )}
                </button>
              );
            }
          )}
        </div>


        <button
          type="button"
          onClick={nextProject}
          className={`${styles.arrowButton} ${styles.arrowNext}`}
          aria-label="Next project"
        >
          <span>→</span>
        </button>
      </nav>


      {/* =====================================================
          CARDS
          ===================================================== */}

      <div className={styles.railViewport}>
        <div
          ref={railRef}
          className={styles.rail}
        >
          <div
            aria-hidden="true"
            className={styles.railSpacer}
            style={{
              flexBasis: `calc(50vw - ${cardW / 2}px)`,
            }}
          />

          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={styles.cardSlot}
            >
              <button
                type="button"
                className={styles.cardButton}
                onClick={() => handleCardClick(index)}
                aria-label={
                  index === activeProject
                    ? `Open ${project.title} project`
                    : `Select ${project.title} project`
                }
              >
                <FloatingCard
                  id={project.id}
                  title={project.title}
                  sub={project.sub}
                  accent={project.accent}
                  rotation={
                    project.id === "ezc"
                      ? -2.8
                      : project.id === "lca"
                        ? 2.2
                        : -1.8
                  }
                  content={projectPreviews[project.id]}
                  cardW={cardW}
                  cardH={cardH}
                />
              </button>
            </div>
          ))}

          <div
            aria-hidden="true"
            className={styles.railSpacer}
            style={{
              flexBasis: `calc(50vw - ${cardW / 2}px)`,
            }}
          />
        </div>
      </div>
      <ProjectModal
        project={openProject}
        onClose={() => setOpenProjectId(null)}
      />
    </section>
  );
}