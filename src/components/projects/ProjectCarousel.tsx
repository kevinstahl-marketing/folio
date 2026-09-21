
"use client";

import { useEffect, useRef, useState } from "react";

import type { Project } from "@/data/projects";

import ProjectModal from "@/components/projects/ProjectModal";
import FloatingCard from "./FloatingCard";

import styles from "./ProjectCarousel.module.css";

/* =========================================================
   PROPS
   ========================================================= */

type ProjectCarouselProps = {
  projects: Project[];

  label?: string;
  sublabel?: string;
  code?: string;

  stageLabel?: string;
  stageInstruction?: string;

  id?: string;
};

/* =========================================================
   COMPONENT
   ========================================================= */

export default function ProjectCarousel({
  projects,

  label = "PROJECTS",
  sublabel = "// SHIPPED WORK",
  code = "K.STAHL / 03",

  stageLabel = "SELECTED WORK",
  stageInstruction = "SCROLL / CLICK TO INSPECT",

  id = "carousel",
}: ProjectCarouselProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [stageWidth, setStageWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);

  const initialProject = projects.length > 1 ? 1 : 0;

  const [activeProject, setActiveProject] =
    useState(initialProject);

  const [titleDirection, setTitleDirection] =
    useState<"left" | "right">("left");

  const [openProjectId, setOpenProjectId] =
    useState<Project["id"] | null>(null);

  /* =========================================================
     MEASURE STAGE
     ========================================================= */

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const measure = () => {
      setStageWidth(stage.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     MEASURE VIEWPORT HEIGHT
     ========================================================= */

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  /* =========================================================
     RESPONSIVE CARD DIMENSIONS

     Preserve the existing carousel proportions.
     FloatingCard handles the internal 16:10 image holder.
     ========================================================= */

  const mobile = stageWidth < 560;

  const tablet =
    stageWidth >= 560 && stageWidth <= 900;

  const availableWidth = Math.max(
    0,
    stageWidth - (mobile ? 70 : tablet ? 110 : 180)
  );

  const maxCardHeight = mobile
  ? viewportHeight * 0.58
  : tablet
    ? viewportHeight * 0.64
    : viewportHeight * 0.72;

const cardRatio = mobile ? 0.90 : tablet ? 0.88 : 0.82;
  const cardW = Math.max(
    0,
    Math.floor(
      Math.min(
        mobile ? 340 : tablet ? 440 : 580,

        availableWidth *
  (mobile ? 0.92 : tablet ? 0.72 : 0.50),

        maxCardHeight / cardRatio
      )
    )
  );

  const cardH = Math.round(cardW * cardRatio);

  /* =========================================================
     ACTIVE PROJECT HELPERS
     ========================================================= */

  const prevIndex =
    projects.length > 0
      ? (activeProject - 1 + projects.length) %
        projects.length
      : 0;

  const nextIndex =
    projects.length > 0
      ? (activeProject + 1) % projects.length
      : 0;

  const openProject =
    projects.find(
      (project) => project.id === openProjectId
    ) ?? null;

  /* =========================================================
     NAVIGATION
     ========================================================= */

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

  /* =========================================================
     INITIAL POSITION
     ========================================================= */

  useEffect(() => {
    const rail = railRef.current;

    const card = cardRefs.current[initialProject];

    if (!rail || !card) return;

    const target =
      card.offsetLeft -
      rail.clientWidth / 2 +
      card.clientWidth / 2;

    rail.scrollLeft = target;
  }, [cardW, initialProject]);

  /* =========================================================
     SAFETY
     ========================================================= */

  if (projects.length === 0) {
    return null;
  }

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <section id={id} className={styles.carousel}>
      <div className={styles.archiveWindow}>

        {/* SECTION MARKER */}

        <header className={styles.sectionMarker}>
          <div className={styles.sectionLabel}>
            {label}
            <span>{sublabel}</span>
          </div>

          <div className={styles.sectionRule} />

          <div className={styles.sectionCode}>
            {code}
          </div>
        </header>

        {/* PROJECT NAVIGATION */}

        <nav
          className={styles.projectNav}
          aria-label={`${label} navigation`}
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
            {[
              prevIndex,
              activeProject,
              nextIndex,
            ].map((index, position) => {
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
                  onClick={() =>
                    selectProject(index)
                  }
                  aria-current={
                    active ? "true" : undefined
                  }
                >
                  <span
                    className={styles.projectNumber}
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
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
            })}
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

        {/* PROJECT STAGE */}

        <div
          ref={stageRef}
          className={styles.projectStage}
        >
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
            <span>{stageLabel}</span>
            <span>{stageInstruction}</span>
          </div>

          {/* CARD RAIL */}

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

                /* CARD ROTATION */

                const rotation =
                  project.id === "ezc"
                    ? -2.8
                    : project.id === "lca"
                      ? 2.2
                      : project.id === "ptl"
                        ? -1.8
                        : index % 2 === 0
                          ? -2.1
                          : 2.1;

                /* =====================================
                   PRIMARY SCREENSHOT

                   Always use the primary image.
                   Every image fills a 16:10 holder.
                   ===================================== */

                const primaryMedia =
                  project.media.find(
                    (media) =>
                      media.slot === "primary"
                  ) ??
                  project.media[0] ??
                  null;

                const previewContent =
                  primaryMedia ? (
                    <img
                      src={primaryMedia.src}
                      alt={primaryMedia.alt}
                      draggable={false}
                      loading="lazy"
                      style={{
                        display: "block",

                        width: "100%",
                        height: "100%",

                        objectFit: "cover",
                        objectPosition: "center",

                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    />
                  ) : null;

                /* =====================================
                   SECONDARY SCREENSHOT

                   Keep the small overlapping image.
                   Always use a landscape holder.

                   No phone-shaped frame.
                   ===================================== */

                const secondaryMedia =
                  project.media.find(
                    (media) =>
                      media.slot === "secondary"
                  ) ?? null;

                const secondaryContent =
                  secondaryMedia ? (
                    <img
                      src={secondaryMedia.src}
                      alt={secondaryMedia.alt}
                      draggable={false}
                      loading="lazy"
                      style={{
                        display: "block",

                        width: "100%",
                        height: "100%",

                        objectFit: "cover",
                        objectPosition: "center",

                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    />
                  ) : null;

                return (
                  <div
                    key={project.id}
                    ref={(element) => {
                      cardRefs.current[index] =
                        element;
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
                        rotation={rotation}
                        content={previewContent}
                        secondaryContent={
                          secondaryContent
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

          {/* STAGE FOOTER */}

          <div className={styles.stageFooter}>
            <span>← PREV</span>

            <span className={styles.stageProgress}>
              {String(activeProject + 1).padStart(
                2,
                "0"
              )}

              <i aria-hidden="true" />

              {String(projects.length).padStart(
                2,
                "0"
              )}
            </span>

            <span>NEXT →</span>
          </div>
        </div>
      </div>

      {/* PROJECT MODAL */}

      <ProjectModal
        project={openProject}
        onClose={() =>
          setOpenProjectId(null)
        }
      />
    </section>
  );
}