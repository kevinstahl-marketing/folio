"use client";

import { useEffect, useRef, useState } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { projects } from "@/data/projects";

import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";
import ProjectModal from "@/components/projects/ProjectModal";

import FloatingCard from "./FloatingCard";
import styles from "./ProjectCarousel.module.css";

const projectPreviews = {
  ezc: <EZCalcsPreview />,
  lca: <LaConcheriaPreview />,
  ptl: <PianoTeacherLinkPreview />,
};

export default function ProjectCarousel() {
  const w = useWindowWidth();
  const mobile = w < 640;

  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeProject, setActiveProject] = useState(1);
  const [titleDirection, setTitleDirection] =
    useState<"left" | "right">("left");

  const [openProjectId, setOpenProjectId] = useState<
    (typeof projects)[number]["id"] | null
  >(null);

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

    setTitleDirection(
      index === nextIndex ? "left" : "right"
    );

    goToProject(index);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeProject) {
      setTitleDirection(
        index > activeProject ? "left" : "right"
      );

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
    <section
      id="carousel"
      className={styles.carousel}
    >
      <div className={styles.archiveWindow}>
        {/* Book header */}

        {/* Section marker */}
        <header className={styles.sectionMarker}>
          <div className={styles.sectionLabel}>
            PROJECTS
            <span>// SHIPPED WORK</span>
          </div>

          <div className={styles.sectionRule} />

          <div className={styles.sectionCode}>
            K.STAHL / 03
          </div>
        </header>

        {/* Project navigation */}
        <nav
          className={styles.projectNav}
          aria-label="Project navigation"
        >
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowPrevious}`}
            onClick={previousProject}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div
            key={activeProject}
            className={`${styles.projectTitles} ${
              titleDirection === "left"
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
                    className={`${styles.projectTitle} ${
                      active
                        ? styles.projectTitleActive
                        : ""
                    }`}
                    onClick={() => selectProject(index)}
                    aria-current={
                      active ? "true" : undefined
                    }
                  >
                    <span className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {project.title}

                    {active && (
                      <span
                        className={styles.activeUnderline}
                        style={{
                          background: project.accent,
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowNext}`}
            onClick={nextProject}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
        </nav>

        {/* Project stage */}
        <div className={styles.projectStage}>
          <span
            className={`${styles.registrationMark} ${styles.markTL}`}
            aria-hidden="true"
          >
            +
          </span>

          <span
            className={`${styles.registrationMark} ${styles.markTR}`}
            aria-hidden="true"
          >
            +
          </span>

          <div className={styles.stageLabel}>
            <span>SELECTED WORK</span>
            <span>SCROLL / CLICK TO INSPECT</span>
          </div>

          <div className={styles.railViewport}>
            <div
              ref={railRef}
              className={styles.rail}
            >
              <div
                className={styles.railSpacer}
                style={{
                  flexBasis: `calc(50% - ${cardW / 2}px)`,
                }}
                aria-hidden="true"
              />

              {projects.map((project, index) => {
                const active =
                  index === activeProject;

                return (
                  <div
                    key={project.id}
                    ref={(element) => {
                      cardRefs.current[index] = element;
                    }}
                    className={`${styles.cardSlot} ${
                      active
                        ? styles.cardSlotActive
                        : styles.cardSlotInactive
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.cardButton}
                      onClick={() =>
                        handleCardClick(index)
                      }
                      aria-label={
                        active
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
                        content={
                          projectPreviews[project.id]
                        }
                        cardW={cardW}
                        cardH={cardH}
                      />
                    </button>
                  </div>
                );
              })}

              <div
                className={styles.railSpacer}
                style={{
                  flexBasis: `calc(50% - ${cardW / 2}px)`,
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={styles.stageFooter}>
            <span>← PREV</span>

            <span className={styles.stageProgress}>
              {String(activeProject + 1).padStart(2, "0")}

              <i aria-hidden="true" />

              {String(projects.length).padStart(2, "0")}
            </span>

            <span>NEXT →</span>
          </div>
        </div>
      </div>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProjectId(null)}
      />
    </section>
  );
}