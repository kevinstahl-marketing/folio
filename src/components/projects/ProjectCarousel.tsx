"use client";

import { useRef } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { colors, fonts } from "@/lib/theme";

import FloatingCard from "./FloatingCard";

import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";

export default function ProjectCarousel() {
  const w = useWindowWidth();
  const mobile = w < 640;

  const railRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startSL = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX;
    startSL.current = railRef.current?.scrollLeft ?? 0;

    if (railRef.current) {
      railRef.current.style.cursor = "grabbing";
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !railRef.current) return;

    e.preventDefault();

    railRef.current.scrollLeft =
      startSL.current - (e.pageX - startX.current) * 1.2;
  };

  const onMouseUp = () => {
    dragging.current = false;

    if (railRef.current) {
      railRef.current.style.cursor = "grab";
    }
  };

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

  return (
    <section
      id="carousel"
      style={{
        paddingTop: mobile ? 40 : 60,
      }}
    >
      <div
        style={{
          padding: "0 clamp(24px,4vw,72px)",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: colors.ink,
            opacity: 0.35,
            letterSpacing: "0.18em",
            marginBottom: 12,
          }}
        >
          SELECTED WORK
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontFamily: fonts.display,
              fontStyle: "italic",
              fontSize: "clamp(36px,4vw,58px)",
              color: colors.ink,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Projects
          </h2>

          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: colors.ink,
              opacity: 0.4,
              paddingBottom: 6,
            }}
          >
            — drag to browse, click to explore
          </span>
        </div>
      </div>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={railRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: "flex",
            gap: mobile ? 20 : 32,
            padding: `${
              mobile ? 40 : 64
            }px clamp(24px,4vw,72px) ${mobile ? 48 : 72}px`,
            overflowX: "scroll",
            overflowY: "visible",
            cursor: "grab",
            userSelect: "none",
            scrollbarWidth: "none",
          }}
        >
          {projects.map((project) => (
            <FloatingCard
              key={project.id}
              {...project}
              cardW={cardW}
              cardH={cardH}
            />
          ))}

          <div
            style={{
              width: mobile ? 8 : 48,
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </section>
  );
}