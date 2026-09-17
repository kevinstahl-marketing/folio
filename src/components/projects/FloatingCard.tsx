"use client";

import { useState } from "react";
import { fonts } from "@/lib/theme";

type FloatingCardProps = {
  id: string;
  title: string;
  sub: string;
  rotation: number;
  accent: string;
  content: React.ReactNode;
  cardW: number;
  cardH: number;
};

export default function FloatingCard({
  title,
  sub,
  rotation,
  accent,
  content,
  cardW,
  cardH,
}: FloatingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        {
          "--card-accent": accent,

          position: "relative",

          width: cardW,
          height: cardH,

          flexShrink: 0,

          cursor: "pointer",

          /*
           * NO SCALE.
           *
           * Resting card is crooked.
           * Hover lifts + straightens.
           */
          transform: hovered
            ? "translateY(-12px) rotate(0deg)"
            : `translateY(0px) rotate(${rotation}deg)`,

          transformOrigin: "50% 60%",

          transition:
            "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",

          willChange: "transform",
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          ACCENT PAPER
          ===================================================== */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 0,

          inset: "10px -9px -10px 10px",

          background: accent,

          border: "3px solid #1a1714",

          transform: hovered
            ? "translate(7px, 9px) rotate(2.5deg)"
            : "rotate(1.5deg)",

          transition:
            "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          BLACK SHADOW PAPER
          ===================================================== */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,

          inset: "7px -6px -7px 7px",

          background: "#1a1714",

          transform: hovered
            ? "translate(3px, 5px) rotate(-0.6deg)"
            : "rotate(-0.4deg)",

          transition:
            "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          MAIN CARD
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          width: "100%",
          height: "100%",

          display: "grid",
          gridTemplateRows: "minmax(0, 1fr) auto",

          overflow: "hidden",

          color: "#1a1714",
          background: "#f7f2e9",

          border: "3px solid #1a1714",
        }}
      >
        {/* ===================================================
            SCREENSHOT
            =================================================== */}

        <div
          style={{
            position: "relative",

            minWidth: 0,
            minHeight: 0,

            overflow: "hidden",

            background: "#ded8cf",

            borderBottom: "3px solid #1a1714",
          }}
        >
          {/*
           * ACTUAL PROJECT CONTENT.
           *
           * Intentionally has:
           * - no scale
           * - no transform
           * - no filter
           * - no opacity animation
           *
           * Keep the screenshot sharp.
           */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              overflow: "hidden",

              pointerEvents: "none",
            }}
          >
            {content}
          </div>

          {/* =================================================
              CUTE OPEN BUTTON
              ================================================= */}

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              zIndex: 20,

              right: 15,
              bottom: 15,

              width: 48,
              height: 48,

              display: "grid",
              placeItems: "center",

              color: "#fffaf2",
              background: "#1a1714",

              border: "3px solid #1a1714",

              boxShadow: hovered
                ? `5px 5px 0 ${accent}`
                : `3px 3px 0 ${accent}`,

              fontFamily: fonts.mono,

              fontSize: 27,
              fontWeight: 900,

              lineHeight: 1,

              /*
               * Hidden by position rather than scale.
               * Avoids fuzzy rendering.
               */
              opacity: hovered ? 1 : 0,

              transform: hovered
                ? "translate(0px, 0px) rotate(2deg)"
                : "translate(12px, 12px) rotate(6deg)",

              transition:
                "opacity 130ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 180ms ease",

              pointerEvents: "none",
            }}
          >
            ↗
          </div>

          {/* =================================================
              LITTLE RESTING CORNER
              ================================================= */}

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              zIndex: 10,

              right: 13,
              bottom: 13,

              width: 16,
              height: 16,

              background: accent,

              border: "2px solid #1a1714",

              opacity: hovered ? 0 : 1,

              transform: "rotate(4deg)",

              transition: "opacity 100ms ease",

              pointerEvents: "none",
            }}
          />
        </div>

        {/* ===================================================
            CAPTION
            =================================================== */}

        <div
          style={{
            position: "relative",

            minHeight: Math.max(
              88,
              Math.round(cardH * 0.18)
            ),

            display: "grid",

            gridTemplateColumns:
              "minmax(0, 1fr) auto",

            alignItems: "center",

            gap: 16,

            padding:
              "clamp(15px, 3vw, 21px) clamp(16px, 3vw, 22px)",

            background: hovered
              ? "#ffffff"
              : "#fffaf2",

            transition: "background 160ms ease",
          }}
        >
          {/* TITLE + TYPE */}

          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                marginBottom: 7,

                fontFamily: fonts.display,

                fontSize:
                  "clamp(20px, 2.1vw, 28px)",

                fontStyle: "italic",
                fontWeight: 700,

                lineHeight: 0.95,

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",

                gap: 8,

                minWidth: 0,

                fontFamily: fonts.mono,

                fontSize: 8,
                fontWeight: 800,

                letterSpacing: "0.08em",
                textTransform: "uppercase",

                opacity: 0.52,
              }}
            >
              {/* Accent dash */}

              <span
                style={{
                  width: hovered ? 28 : 20,
                  height: 3,

                  flex: "0 0 auto",

                  background: accent,

                  border: "1px solid #1a1714",

                  transition:
                    "width 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />

              <span
                style={{
                  minWidth: 0,

                  overflow: "hidden",

                  whiteSpace: "nowrap",

                  textOverflow: "ellipsis",
                }}
              >
                {sub}
              </span>
            </div>
          </div>

          {/* REGISTRATION MARK */}

          <div
            aria-hidden="true"
            style={{
              alignSelf: "end",

              fontFamily: fonts.mono,

              fontSize: 18,
              fontWeight: 400,

              lineHeight: 1,

              opacity: hovered ? 0.42 : 0.24,

              transform: hovered
                ? "rotate(0deg)"
                : "rotate(8deg)",

              transition:
                "transform 200ms ease, opacity 160ms ease",

              pointerEvents: "none",
            }}
          >
            +
          </div>

          {/* =================================================
              BOTTOM ACCENT STRIP
              ================================================= */}

          <div
            aria-hidden="true"
            style={{
              position: "absolute",

              left: 0,
              bottom: 0,

              width: hovered
                ? "52%"
                : "18%",

              height: 6,

              background: accent,

              borderTop: "2px solid #1a1714",
              borderRight: "2px solid #1a1714",

              transition:
                "width 280ms cubic-bezier(0.22, 1, 0.36, 1)",

              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}