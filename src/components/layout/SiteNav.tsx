"use client";

import { useEffect, useState } from "react";

import { colors, fonts } from "@/lib/theme";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  const width = useWindowWidth();
  const mobile = width < 640;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: 56,
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(24px, 4vw, 72px)",
        background: scrolled
          ? "rgba(245,242,238,0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(26,23,20,0.08)"
          : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          fontFamily: fonts.display,
          fontStyle: "italic",
          fontSize: 22,
          color: colors.ink,
          letterSpacing: "-0.02em",
          cursor: "pointer",
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Kevin Stahl
      </div>

      <div style={{ flex: 1 }} />

      {!mobile && (
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {[
            ["Work", "carousel"],
            ["EZCalcs", "ezc"],
            ["Experience", "exp"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: fonts.sans,
                fontSize: 14,
                color: colors.ink,
                opacity: 0.55,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                letterSpacing: "0.01em",
                transition: "opacity 0.14s",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.opacity = "0.55";
              }}
            >
              {label}
            </button>
          ))}

          <button
            style={{
              fontFamily: fonts.sans,
              fontWeight: 600,
              fontSize: 13.5,
              color: "white",
              background: colors.ink,
              border: "none",
              borderRadius: 3,
              padding: "8px 20px",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            Resume ↗
          </button>
        </div>
      )}
    </nav>
  );
}