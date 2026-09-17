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
      style={{
        "--card-accent": accent,
        width: cardW,
        height: cardH,
        flexShrink: 0,
        position: "relative",
        cursor: "pointer",
        transform: `
          rotate(${hovered ? rotation * 0.2 : rotation}deg)
          translateY(${hovered ? -5 : 0}px)
        `,
        transition:
          "transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform",
      } as React.CSSProperties}
    >
      {/* Accent sheet behind the card */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 0,
          inset: "10px -9px -10px 10px",
          background: accent,
          border: "3px solid #1a1714",
          transform: "rotate(1.5deg)",
          transition:
            "transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          ...(hovered
            ? {
                transform:
                  "translate(3px, 3px) rotate(2.5deg)",
              }
            : {}),
        }}
      />

      {/* Black shadow sheet */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          inset: "7px -6px -7px 7px",
          background: "#1a1714",
          transform: "rotate(-0.4deg)",
        }}
      />

      {/* Main card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,

          width: "100%",
          height: "100%",

          display: "grid",
          gridTemplateRows: "1fr auto",

          overflow: "hidden",

          color: "#1a1714",
          background: "#f7f2e9",

          border: "3px solid #1a1714",
        }}
      >
        {/* Screenshot */}
<div
  style={{
    position: "relative",
    minHeight: 0,
    overflow: "hidden",
    background: "#ded8cf",
    borderBottom: "3px solid #1a1714",
  }}
>
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
</div>

        {/* Project caption */}
        <div
          style={{
            position: "relative",

            minHeight: Math.max(
              88,
              Math.round(cardH * 0.18)
            ),

            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",

            gap: 16,

            padding:
              "clamp(15px, 3vw, 21px) clamp(16px, 3vw, 22px)",

            background: "#fffaf2",
          }}
        >
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

                fontFamily: fonts.mono,
                fontSize: 8,
                fontWeight: 800,

                letterSpacing: "0.08em",
                textTransform: "uppercase",

                opacity: 0.52,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 3,

                  flex: "0 0 auto",

                  background: accent,
                  border: "1px solid #1a1714",
                }}
              />

              {sub}
            </div>
          </div>

          {/* Decorative registration mark */}
          <div
            aria-hidden="true"
            style={{
              alignSelf: "end",

              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 400,

              lineHeight: 1,

              opacity: 0.24,

              transform: "rotate(8deg)",
            }}
          >
            +
          </div>

          {/* Tiny accent strip */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",

              left: 0,
              bottom: 0,

              width: hovered ? "42%" : "18%",
              height: 6,

              background: accent,
              borderTop: "2px solid #1a1714",
              borderRight: "2px solid #1a1714",

              transition:
                "width 280ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}