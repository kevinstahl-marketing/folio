"use client";

import { useEffect, useState } from "react";

import { colors, fonts } from "@/lib/theme";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [resumeHovered, setResumeHovered] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);

  const width = useWindowWidth();
  const mobile = width < 640;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      aria-label="Primary navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,

        height: mobile ? 64 : 68,

        display: "flex",
        alignItems: "center",

        padding: mobile
          ? "0 14px"
          : "0 clamp(24px, 4vw, 72px)",

        /*
         * Desktop gets the subtle full-width paper wash
         * after scrolling.
         *
         * Mobile intentionally keeps the overall nav clear.
         * The name itself gets its own little floating sheet.
         */
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "none",
      }}
    >
      {/* ===================================================
          IDENTITY TAB
          =================================================== */}

      <button
        type="button"
        onClick={goToTop}
        onMouseEnter={() => setNameHovered(true)}
        onMouseLeave={() => setNameHovered(false)}
        aria-label="Back to top"
        style={{
          position: "relative",

          display: "flex",
          alignItems: "center",

          gap: 9,

          margin: 0,

          padding: mobile
            ? "8px 11px"
            : scrolled
              ? "7px 10px"
              : "7px 0",

          color: colors.ink,

          /*
           * THIS is the important mobile bit.
           *
           * Even while the navbar itself is invisible,
           * Kevin Stahl lives on a translucent little
           * paper/frosted label.
           */
          background: mobile
            ? "rgba(250, 247, 241, 0.78)"
            : scrolled
              ? "rgba(255, 250, 242, 0.72)"
              : "transparent",

          backdropFilter: mobile
            ? "blur(12px)"
            : scrolled
              ? "blur(8px)"
              : "none",

          WebkitBackdropFilter: mobile
            ? "blur(12px)"
            : scrolled
              ? "blur(8px)"
              : "none",

          border: mobile
            ? "2px solid rgba(26, 23, 20, 0.88)"
            : scrolled
              ? "1.5px solid rgba(26, 23, 20, 0.72)"
              : "1.5px solid transparent",

          borderRadius: 1,

          boxShadow: mobile
            ? nameHovered
              ? "5px 5px 0 rgba(26, 23, 20, 0.92)"
              : "3px 3px 0 rgba(26, 23, 20, 0.76)"
            : scrolled
              ? "2px 2px 0 rgba(26, 23, 20, 0.14)"
              : "none",

          fontFamily: fonts.display,
          fontStyle: "italic",
          fontSize: mobile ? 19 : 21,
          fontWeight: 700,

          lineHeight: 1,

          letterSpacing: "-0.025em",

          cursor: "pointer",

          transform:
            mobile && nameHovered
              ? "translate(-1px, -1px) rotate(-0.5deg)"
              : "translate(0, 0) rotate(0deg)",

          transition:
            "transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 150ms ease, background 180ms ease, border-color 180ms ease",
        }}
      >
        Kevin Stahl

        {/* little registration mark */}

        <span
          aria-hidden="true"
          style={{
            display: "inline-block",

            width: 5,
            height: 5,

            marginLeft: 1,

            background: colors.ink,

            opacity: mobile ? 0.28 : scrolled ? 0.22 : 0,

            transform: "rotate(5deg)",

            transition: "opacity 180ms ease",
          }}
        />
      </button>

      <div style={{ flex: 1 }} />

      {/* ===================================================
          DESKTOP NAV
          =================================================== */}

      {!mobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",

            gap: 8,
          }}
        >
          {!scrolled &&
            [
              ["Work", "carousel"],
              ["Experience", "exp"],
              ["Contact", "contact"],
            ].map(([label, id]) => {
              const hovered = hoveredNav === id;

              return (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setHoveredNav(id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    position: "relative",

                    padding: "8px 11px",

                    color: colors.ink,
                    background: hovered
                      ? "rgba(255, 250, 242, 0.88)"
                      : "transparent",

                    border: hovered
                      ? `1.5px solid ${colors.ink}`
                      : "1.5px solid transparent",

                    borderRadius: 1,

                    boxShadow: hovered
                      ? `3px 3px 0 ${colors.ink}`
                      : "none",

                    fontFamily: fonts.mono,
                    fontSize: 9,
                    fontWeight: 850,

                    letterSpacing: "0.075em",
                    textTransform: "uppercase",

                    opacity: hovered ? 1 : 0.56,

                    cursor: "pointer",

                    transform: hovered
                      ? "translate(-1px, -2px) rotate(-0.5deg)"
                      : "translate(0, 0) rotate(0deg)",

                    transition:
                      "opacity 140ms ease, transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1), background 140ms ease, border-color 140ms ease, box-shadow 140ms ease",
                  }}
                >
                  {label}
                </button>
              );
            })}

          {/* =================================================
              RESUME BUTTON
              ================================================= */}

          <button
            type="button"
            onClick={() => scrollTo("resume")}
            onMouseEnter={() => setResumeHovered(true)}
            onMouseLeave={() => setResumeHovered(false)}
            style={{
              marginLeft: 10,

              padding: "9px 15px",

              color: "#fffaf2",
              background: colors.ink,

              border: `2px solid ${colors.ink}`,
              borderRadius: 1,

              boxShadow: resumeHovered
                ? "5px 5px 0 rgba(100, 127, 188, 0.95)"
                : "3px 3px 0 rgba(100, 127, 188, 0.82)",

              fontFamily: fonts.mono,
              fontSize: 9,
              fontWeight: 900,

              letterSpacing: "0.075em",
              textTransform: "uppercase",

              cursor: "pointer",

              transform: resumeHovered
                ? "translate(-2px, -2px) rotate(0.5deg)"
                : "translate(0, 0) rotate(0deg)",

              transition:
                "transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 150ms ease",
            }}
          >
            Resume ↗
          </button>
        </div>
      )}

      {/* ===================================================
          MOBILE SECTION CONTROL

          Gives mobile a second intentional object instead of
          leaving the name alone in space.
          =================================================== */}

      {mobile && (
        <button
          type="button"
          onClick={() => scrollTo("carousel")}
          aria-label="View projects"
          style={{
            width: 39,
            height: 39,

            display: "grid",
            placeItems: "center",

            padding: 0,

            color: "#fffaf2",
            background: colors.ink,

            border: `2px solid ${colors.ink}`,
            borderRadius: 1,

            boxShadow: "3px 3px 0 rgba(100, 127, 188, 0.9)",

            fontFamily: fonts.mono,
            fontSize: 17,
            fontWeight: 900,

            lineHeight: 1,

            cursor: "pointer",

            transform: "rotate(1deg)",
          }}
        >
          ↓
        </button>
      )}
    </nav>
  );
}