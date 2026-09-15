"use client";

import { useRef, useState, useEffect } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { colors, fonts } from "@/lib/theme";

import FloatingCard from "./FloatingCard";

import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";

export default function ProjectCarousel() {
  const w = useWindowWidth();
  const mobile = w < 640;
  const [titleDirection, setTitleDirection] = useState<"left" | "right">("left");
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [buttonPulse, setButtonPulse] =
    useState<"left" | "right" | null>(null);
  const [activeProject, setActiveProject] = useState(1);


  const cardW = mobile
    ? Math.min(w - 48, 320)
    : Math.min(Math.round(w * 0.34), 480);

  const cardH = Math.round(cardW * 1.22);

  const projects = [
    {
      id: "ezc",
      title: "EZCalcs",
      sub: "Engineering Platform",
      rotation: -2.8,
      accent: colors.projects.ezcalcs,
      content: <EZCalcsPreview />,
    },
    {
      id: "lca",
      title: "La Concheria",
      sub: "Shopify E-Commerce",
      rotation: 2.2,
      accent: colors.projects.laConcheria,
      content: <LaConcheriaPreview />,
    },
    {
      id: "ptl",
      title: "PianoTeacherLink",
      sub: "Drupal Marketplace",
      rotation: -1.8,
      accent: colors.projects.pianoTeacherLink,
      content: <PianoTeacherLinkPreview />,
    },
  ];

  const prevIndex =
    (activeProject - 1 + projects.length) % projects.length;

  const nextIndex =
    (activeProject + 1) % projects.length;
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
  const previousProject = () => {
  setTitleDirection("right");
  setButtonPulse("left");

  window.setTimeout(() => setButtonPulse(null), 240);

  goToProject(
    activeProject === 0
      ? projects.length - 1
      : activeProject - 1
  );
};

  const nextProject = () => {
  setTitleDirection("left");
  setButtonPulse("right");

  window.setTimeout(() => setButtonPulse(null), 240);

  goToProject(
    activeProject === projects.length - 1
      ? 0
      : activeProject + 1
  );
};

  const selectProject = (index: number) => {
    if (index === activeProject) return;

    // Since the visible titles are only previous/current/next,
    // this correctly handles the wraparound too.
    if (index === nextIndex) {
      setTitleDirection("left");
    } else {
      setTitleDirection("right");
    }

    goToProject(index);
  };

  return (
    <section
      id="carousel"
      style={{
        position: "relative",
        zIndex: 4,
      }}
    >

      <div
  style={{
    padding: mobile
      ? "8px 22px 0"
      : "8px clamp(32px, 5vw, 80px) 0",
    display: "flex",
    alignItems: "flex-end",
    gap: mobile ? 12 : 20,
  }}
>


  <div
    style={{
      paddingBottom: 2,
      fontFamily: fonts.mono,
      fontSize: mobile ? 10 : 12,
      fontWeight: 800,
      lineHeight: 1.25,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: colors.ink,
    }}
  >
    PROJECTS
    <br />
    <span style={{ opacity: 0.35 }}>// SHIPPED</span>
  </div>

  <div
    style={{
      height: 2,
      flex: 1,
      marginBottom: 5,
      background: colors.ink,
      opacity: 0.16,
    }}
  />

</div>
      <div
        style={{
          padding: "28px clamp(24px,4vw,72px) 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(18px, 3vw, 42px)",
        }}
      >
        <button
          onClick={previousProject}
          aria-label="Previous project"
          style={{
            width: 44,
            height: 44,
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            border: `1.5px solid ${colors.ink}`,
            borderRadius: "50%",
            background: "transparent",
            color: colors.ink,
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <div
          key={activeProject}
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr 1.3fr 1fr"
              : "minmax(140px, 1fr) minmax(180px, 1.3fr) minmax(140px, 1fr)",
            alignItems: "center",
            gap: mobile ? 12 : 28,
            width: "min(720px, 100%)",

            animation:
              titleDirection === "left"
                ? "projectTitlesLeft 320ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "projectTitlesRight 320ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >

          {[prevIndex, activeProject, nextIndex].map((index, position) => {
            const project = projects[index];
            const active = position === 1;

            return (
              <button
                key={`${project.id}-${position}`}
                onClick={() => selectProject(index)}
                style={{
                  position: "relative",
                  minWidth: 0,
                  border: 0,
                  padding: "12px 4px",
                  background: "transparent",
                  cursor: "pointer",

                  fontFamily: fonts.mono,
                  fontSize: mobile ? 9 : 12,
                  fontWeight: active ? 800 : 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",

                  color: colors.ink,
                  opacity: active ? 1 : 0.35,

                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  transition:
                    "opacity 180ms ease, transform 180ms ease",
                  transform: active
                    ? "translateY(-2px)"
                    : "translateY(0)",
                }}
              >

                {project.title}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: 3,
                      width: "70%",
                      maxWidth: 120,
                      height: 3,
                      background: project.accent,
                      transform: "translateX(-50%)",
                    }}


                  />

                )}


              </button>

            );
          })}


        </div>
        <button
          onClick={nextProject}
          aria-label="Next project"
          style={{
            width: 44,
            height: 44,
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            border: `1.5px solid ${colors.ink}`,
            borderRadius: "50%",
            background: colors.ink,
            color: "#f5f2ee",
            fontSize: 20,
            cursor: "pointer",
            boxShadow: "3px 3px 0 rgba(26,23,20,0.12)",
          }}
        >
          →
        </button>
      </div>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={railRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: mobile ? 20 : 32,

            padding: `${mobile ? 22 : 30}px 0 ${mobile ? 42 : 56}px`,
            overflowX: "scroll",
            overflowY: "visible",

            userSelect: "none",
            scrollbarWidth: "none",

            scrollBehavior: "smooth",
          }}
        >
          {/* LEFT CENTERING SPACE */}
          <div
            style={{
              flex: `0 0 calc(50vw - ${cardW / 2}px)`,
            }}
          />

          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={{
                flexShrink: 0,
              }}
            >
              <FloatingCard
                {...project}
                cardW={cardW}
                cardH={cardH}
              />
            </div>
          ))}

          {/* RIGHT CENTERING SPACE */}
          <div
            style={{
              flex: `0 0 calc(50vw - ${cardW / 2}px)`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes projectTitlesLeft {
          from {
            opacity: 0;
            transform: translateX(22px);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes projectTitlesRight {
          from {
            opacity: 0;
            transform: translateX(-22px);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}