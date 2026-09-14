"use client";

import { useState } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { colors, fonts } from "@/lib/theme";
import StackBadge from "./StackBadge";

type ProjectSectionProps = {
  id: string;
  num: string;
  accent: string;
  bg: string;
  title: string;
  sub: string;
  role: string;
  roleDetail: string;
  result: string;
  resultDetail: string;
  stack: string[];
  bullets: string[];
  extra?: {
    label: string;
    body: string;
  };
  mockup: React.ReactNode;
  mockupLeft?: boolean;
};

export default function ProjectSection({
  id,
  num,
  accent,
  bg,
  title,
  sub,
  role,
  roleDetail,
  result,
  resultDetail,
  stack,
  bullets,
  extra,
  mockup,
  mockupLeft = false,
}: ProjectSectionProps) {
  const w = useWindowWidth();

  const mobile = w < 640;
  const tablet = w < 900;

  const [expanded, setExpanded] = useState(false);

  const Info = (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        padding: mobile
          ? "36px 24px"
          : tablet
          ? "44px 40px"
          : "56px 60px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: accent,
            letterSpacing: "0.14em",
          }}
        >
          {num}
        </span>

        <div
          style={{
            width: 1,
            height: 18,
            background: "rgba(26,23,20,0.15)",
          }}
        />

        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: colors.ink,
            opacity: 0.45,
            letterSpacing: "0.08em",
          }}
        >
          {sub}
        </span>
      </div>

      <h2
        style={{
          fontFamily: fonts.display,
          fontStyle: "italic",
          fontSize: "clamp(42px,4vw,66px)",
          lineHeight: 0.88,
          color: colors.ink,
          letterSpacing: "-0.025em",
          margin: "0 0 16px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          width: 34,
          height: 2,
          background: accent,
          opacity: 0.8,
          marginBottom: 20,
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            background: "rgba(255,255,255,0.7)",
            borderRadius: 4,
            border: "1px solid rgba(26,23,20,0.09)",
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 8.5,
              color: accent,
              letterSpacing: "0.12em",
              marginBottom: 5,
            }}
          >
            MY ROLE
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: colors.ink,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {role}
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 12.5,
              color: colors.ink,
              opacity: 0.5,
              marginTop: 3,
            }}
          >
            {roleDetail}
          </div>
        </div>

        <div
          style={{
            padding: "14px 16px",
            background: accent,
            borderRadius: 4,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 8.5,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.12em",
              marginBottom: 5,
            }}
          >
            RESULT
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: "white",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {result}
          </div>

          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 12.5,
              color: "rgba(255,255,255,0.65)",
              marginTop: 3,
            }}
          >
            {resultDetail}
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 9,
          color: accent,
          letterSpacing: "0.13em",
          marginBottom: 12,
        }}
      >
        TECH STACK
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {stack.map((name) => (
          <StackBadge key={name} name={name} accent={accent} />
        ))}
      </div>

      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 9,
          color: accent,
          letterSpacing: "0.13em",
          marginBottom: 12,
        }}
      >
        WHAT I BUILT
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {bullets.map((bullet) => (
          <div
            key={bullet}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 12,
                color: accent,
                marginTop: 2,
                flexShrink: 0,
              }}
            >
              →
            </span>

            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 14,
                color: colors.ink,
                opacity: 0.68,
                lineHeight: 1.6,
              }}
            >
              {bullet}
            </span>
          </div>
        ))}
      </div>

      {extra && (
        <>
          <button
            onClick={() => setExpanded((current) => !current)}
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: accent,
              background: "none",
              border: `1.5px solid ${accent}55`,
              borderRadius: 3,
              padding: "8px 18px",
              cursor: "pointer",
              letterSpacing: "0.07em",
              width: "fit-content",
              marginBottom: expanded ? 16 : 0,
            }}
          >
            {expanded ? "Less ↑" : `${extra.label} ↓`}
          </button>

          {expanded && (
            <div
              style={{
                padding: "16px 20px",
                background: `${accent}08`,
                border: `1px solid ${accent}22`,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 14,
                  color: colors.ink,
                  opacity: 0.7,
                  lineHeight: 1.7,
                }}
              >
                {extra.body}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  const Mockup = (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        padding: mobile
          ? "0 24px 40px"
          : tablet
          ? "40px 40px 40px 0"
          : "56px 60px 56px 0",
        display: mockupLeft && !tablet ? "contents" : "flex",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          flex: 1,
          borderRadius: 8,
          overflow: "hidden",
          boxShadow:
            "10px 10px 0 rgba(26,23,20,0.12), 0 24px 60px rgba(0,0,0,0.12)",
          border: "1.5px solid rgba(26,23,20,0.1)",
          minHeight: mobile ? 280 : 340,
        }}
      >
        {mockup}
      </div>
    </div>
  );

  return (
    <section
      id={id}
      style={{
        background: bg,
        borderTop: "1px solid rgba(26,23,20,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          flexDirection:
            tablet || mobile
              ? "column"
              : mockupLeft
              ? "row-reverse"
              : "row",
        }}
      >
        {tablet || mobile ? (
          <>
            {Info}
            {Mockup}
          </>
        ) : mockupLeft ? (
          <>
            {Mockup}
            {Info}
          </>
        ) : (
          <>
            {Info}
            {Mockup}
          </>
        )}
      </div>
    </section>
  );
}