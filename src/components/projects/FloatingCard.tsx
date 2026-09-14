"use client";

import { useState } from "react";
import { colors, fonts } from "@/lib/theme";

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
  id,
  title,
  sub,
  rotation,
  accent,
  content,
  cardW,
  cardH,
}: FloatingCardProps) {
  const [hov, setHov] = useState(false);

  const scrollTo = () =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      onClick={scrollTo}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: cardW,
        height: cardH,
        flexShrink: 0,
        borderRadius: 10,
        border: "2px solid rgba(26,23,20,0.13)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        transform: `rotate(${hov ? 0 : rotation}deg) scale(${
          hov ? 1.04 : 1
        }) translateY(${hov ? -8 : 0}px)`,
        transition:
          "transform 0.42s cubic-bezier(0.22,0.87,0.52,1), box-shadow 0.3s",
        boxShadow: hov
          ? `0 36px 80px rgba(0,0,0,0.2), 0 8px 0 ${accent}44`
          : "0 16px 48px rgba(0,0,0,0.14), 6px 6px 0 rgba(26,23,20,0.1)",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {content}
      </div>

      <div
        style={{
          position: "absolute",
          top: 12,
          left: 14,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            background: accent,
            borderRadius: 2,
            padding: "3px 10px",
            fontFamily: fonts.mono,
            fontSize: 9,
            color: "white",
            letterSpacing: "0.1em",
            backdropFilter: "blur(8px)",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 8,
            color: "white",
            opacity: 0.6,
            letterSpacing: "0.06em",
            background: "rgba(26,23,20,0.4)",
            borderRadius: 2,
            padding: "3px 8px",
          }}
        >
          {sub}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,20,0.68) 0%, rgba(10,10,20,0.1) 45%, transparent 65%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.28s",
          display: "flex",
          alignItems: "flex-end",
          padding: 24,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fonts.display,
              fontStyle: "italic",
              fontSize: 24,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 6,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: "white",
              opacity: 0.75,
              marginBottom: 14,
            }}
          >
            {sub}
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 15,
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Explore{" "}
            <span
              style={{
                color:
                  accent === colors.projects.ezcalcs
                    ? "#7da4ff"
                    : accent === colors.projects.laConcheria
                    ? "#f0a880"
                    : "#b0a0ff",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}