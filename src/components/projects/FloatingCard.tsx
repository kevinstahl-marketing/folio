"use client";

import { ArrowUpRight, Pin, Plus } from "lucide-react";

import { fonts } from "@/lib/theme";
import styles from "./FloatingCard.module.css";

type FloatingCardProps = {
  id: string;
  title: string;
  sub: string;
  rotation: number;
  accent: string;

  content: React.ReactNode;
  secondaryContent?: React.ReactNode;

  cardW: number;
  cardH: number;
};

/* =========================================================
   PIN COLORS

   Deterministic by project ID:
   same project = same pin color every render.
   ========================================================= */

const pinColors = [
  "#e86a5a", // coral
  "#e5b94f", // mustard
  "#5f8f78", // muted green
  "#6f83a8", // slate blue
  "#a9788d", // dusty rose
  "#d47c4f", // burnt orange
];

function getPinColor(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash =
      id.charCodeAt(i) +
      ((hash << 5) - hash);
  }

  return pinColors[
    Math.abs(hash) % pinColors.length
  ];
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function FloatingCard({
  id,
  title,
  sub,
  rotation,
  accent,
  content,
  secondaryContent,
  cardW,
  cardH,
}: FloatingCardProps) {
  const pinColor = getPinColor(id);

  return (
    <article
      className={styles.card}
      data-project={id}
      style={
        {
          width: cardW,
          height: cardH,

          "--accent": accent,
          "--pin-color": pinColor,

          "--rotation": `${rotation}deg`,

          "--image-rotation":
            `${rotation * 0.3}deg`,

          "--accent-rotation":
            `${rotation * 0.8}deg`,

          "--dark-rotation":
            `${rotation * 0.35}deg`,

          "--secondary-rotation":
            `${rotation > 0 ? -2.5 : 2.5}deg`,
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          BACK PAPER — BLACK
          ===================================================== */}

      <div
        className={styles.darkSheet}
        aria-hidden="true"
      />

      {/* =====================================================
          MIDDLE PAPER — ACCENT
          ===================================================== */}

      <div
        className={styles.accentSheet}
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN PAPER
          ===================================================== */}

      <div className={styles.mainSheet}>
        {/* ===================================================
            PIN

            Real Lucide icon.
            Color comes from --pin-color.
            =================================================== */}

        <div
          className={styles.pinWrap}
          aria-hidden="true"
        >
          <Pin
            className={styles.pin}
            size={29}
            strokeWidth={2.6}
          />
        </div>

        {/* ===================================================
            MEDIA
            =================================================== */}

        <div className={styles.media}>
          {/* -------------------------------------------------
              PRIMARY IMAGE
              ------------------------------------------------- */}

        <div className={styles.mediaInner}>
  <div className={styles.masterImage}>
    {content}
  </div>
</div>

          {/* -------------------------------------------------
              SECONDARY IMAGE

              Physical little clipping/card.
              CSS controls its hover lift.
              ------------------------------------------------- */}

          {secondaryContent && (
            <div
              className={styles.secondaryCard}
              aria-hidden="true"
            >
              <div
                className={styles.secondaryTape}
              />

              <div
                className={styles.secondaryScreen}
              >
                {secondaryContent}
              </div>

              <div
                className={
                  styles.secondaryRegistration
                }
              >
                <Plus
                  size={13}
                  strokeWidth={2.5}
                />
              </div>
            </div>
          )}

          {/* -------------------------------------------------
              RESTING CORNER MARK
              ------------------------------------------------- */}

          <div
            className={styles.cornerMark}
            aria-hidden="true"
          />

          {/* -------------------------------------------------
              OPEN PROJECT INDICATOR
              ------------------------------------------------- */}

          <div
            className={styles.openMark}
            aria-hidden="true"
          >
            <ArrowUpRight
              size={25}
              strokeWidth={2.7}
            />
          </div>

          {/* -------------------------------------------------
              MEDIA REGISTRATION MARK
              ------------------------------------------------- */}

          <div
            className={styles.mediaRegistration}
            aria-hidden="true"
          >
            +
          </div>
        </div>

        {/* ===================================================
            CAPTION
            =================================================== */}

        <div className={styles.caption}>
          {/* -------------------------------------------------
              PROJECT COPY
              ------------------------------------------------- */}

          <div className={styles.copy}>
            <h3
              className={styles.title}
              style={{
                fontFamily: fonts.display,
              }}
            >
              {title}
            </h3>

            <div
              className={styles.subtitle}
              style={{
                fontFamily: fonts.mono,
              }}
            >
              <span
                className={styles.subtitleDash}
                aria-hidden="true"
              />

              <span
                className={styles.subtitleText}
              >
                {sub}
              </span>
            </div>
          </div>

          {/* -------------------------------------------------
              REGISTRATION MARK
              ------------------------------------------------- */}

          <div
            className={styles.registration}
            aria-hidden="true"
          >
            <Plus
              size={18}
              strokeWidth={2}
            />
          </div>

          {/* -------------------------------------------------
              BOTTOM ACCENT STRIP
              ------------------------------------------------- */}

          <div
            className={styles.bottomAccent}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}