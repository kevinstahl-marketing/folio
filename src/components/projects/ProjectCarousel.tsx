
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

  const scrollEndTimer = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const programmaticTimer = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const programmaticScroll = useRef(false);

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

     MOBILE:
     Keep existing large mobile cards.

     TABLET:
     Keep existing dimensions.

     DESKTOP:
     Wider cards without increasing their height.

     The image fills the available space above the
     caption, giving it a wider landscape proportion.
     ========================================================= */

  const mobile = stageWidth < 560;

  const tablet =
    stageWidth >= 560 && stageWidth <= 900;

  const availableWidth = Math.max(
    0,
    stageWidth - (mobile ? 70 : tablet ? 110 : 180)
  );

  const maxCardHeight = mobile
    ? viewportHeight * 0.47
    : tablet
      ? viewportHeight * 0.72
      : viewportHeight * 0.468;

  /* Original mobile/tablet proportions */

  const cardRatio = mobile
    ? 1.12
    : tablet
      ? 1.06
      : 1.22;

  /* =========================================================
     CARD WIDTH

     Desktop width increased from 480px to 560px.

     Mobile and tablet calculations are unchanged.
     ========================================================= */
const cardW = Math.max(
  0,
  Math.floor(
    Math.min(
      mobile ? 340 : tablet ? 470 : 454,

      mobile
        ? availableWidth * 0.92
        : tablet
          ? availableWidth * 0.78
          : stageWidth * 0.324,

      mobile || tablet
        ? maxCardHeight / cardRatio
        : maxCardHeight / 0.95
    )
  )
);
  /* =========================================================
     CARD HEIGHT

     Mobile/tablet retain their original ratios.

     Desktop gets a wider, shorter proportion,
     constrained to 52% of the viewport height.
     ========================================================= */

  const cardH = mobile || tablet
    ? Math.round(cardW * cardRatio)
    : Math.round(
        Math.min(
          cardW * 0.95,
          maxCardHeight
        )
      );

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

    programmaticScroll.current = true;

    if (scrollEndTimer.current) {
      clearTimeout(scrollEndTimer.current);
    }

    if (programmaticTimer.current) {
      clearTimeout(programmaticTimer.current);
    }

    const target =
      card.offsetLeft -
      rail.clientWidth / 2 +
      card.clientWidth / 2;

    rail.scrollTo({
      left: target,
      behavior: mobile ? "smooth" : "smooth",
    });

    setActiveProject(index);

    programmaticTimer.current = setTimeout(() => {
      programmaticScroll.current = false;
    }, mobile ? 550 : 500);
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
     RAIL SCROLL

     Desktop:
     Preserve smooth scrolling.

     Mobile:
     Snap to the nearest project quickly.
     ========================================================= */

  const handleRailScroll = () => {
    if (programmaticScroll.current) return;

    if (scrollEndTimer.current) {
      clearTimeout(scrollEndTimer.current);
    }

    scrollEndTimer.current = setTimeout(() => {
      const rail = railRef.current;

      if (!rail) return;

      const railCenter =
        rail.scrollLeft + rail.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardCenter =
          card.offsetLeft + card.clientWidth / 2;

        const distance = Math.abs(
          railCenter - cardCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeProject) {
        setTitleDirection(
          closestIndex > activeProject
            ? "left"
            : "right"
        );

        setActiveProject(closestIndex);
      }

      const card = cardRefs.current[closestIndex];

      if (!card) return;

      const target =
        card.offsetLeft -
        rail.clientWidth / 2 +
        card.clientWidth / 2;

      if (Math.abs(rail.scrollLeft - target) > 2) {
        if (mobile) {
  const start = rail.scrollLeft;
  const distance = target - start;
  const duration = 250; // Mobile scroll speed (ms)
  const startTime = performance.now();

  const animate = (now: number) => {
    const progress = Math.min(
      (now - startTime) / duration,
      1
    );

    const eased = 1 - Math.pow(1 - progress, 3);

    rail.scrollLeft = start + distance * eased;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
} else {
  rail.scrollTo({
    left: target,
    behavior: "smooth",
  });
}
      }
    }, mobile ? 65 : 120);
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
     CLEANUP
     ========================================================= */

  useEffect(() => {
    return () => {
      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
      }

      if (programmaticTimer.current) {
        clearTimeout(programmaticTimer.current);
      }
    };
  }, []);

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
              onScroll={handleRailScroll}
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

                /* DEDICATED PROJECT PREVIEW */

                const previewContent = (
                  <img
                    src={project.preview.src}
                    alt={project.preview.alt}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    style={{
                      display: "block",

                      width: "100%",
                      height: "100%",

                      objectFit:
                        project.preview.fit ?? "cover",

                      objectPosition:
                        project.preview.position ??
                        "center",

                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  />
                );

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