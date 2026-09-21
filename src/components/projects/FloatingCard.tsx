
"use client";

import type { CSSProperties, ReactNode } from "react";

import { ArrowUpRight, Pin, Plus } from "lucide-react";

import { fonts } from "@/lib/theme";
import styles from "./FloatingCard.module.css";

type FloatingCardProps = {
  id: string;
  title: string;
  sub: string;
  rotation: number;
  accent: string;

  content: ReactNode;
  secondaryContent?: ReactNode;

  cardW: number;
  cardH: number;
};

/* =========================================================
   PIN COLORS
   ========================================================= */

const pinColors = [
  "#e86a5a",
  "#e5b94f",
  "#5f8f78",
  "#6f83a8",
  "#a9788d",
  "#d47c4f",
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
   FLOATING CARD
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

  const cardStyle = {
    width: cardW,
    height: cardH,

    "--accent": accent,
    "--pin-color": pinColor,

    "--rotation": `${rotation}deg`,

    "--accent-rotation":
      `${rotation * 0.8}deg`,

    "--dark-rotation":
      `${rotation * 0.35}deg`,

    "--secondary-rotation":
      `${rotation > 0 ? -1 : 1}deg`,
  } as CSSProperties;

  return (
    <article
      className={styles.card}
      data-project={id}
      style={cardStyle}
    >
      {/* BACKING PAPERS */}

      <div
        className={styles.darkSheet}
        aria-hidden="true"
      />

      <div
        className={styles.accentSheet}
        aria-hidden="true"
      />

      {/* MAIN PAPER */}

      <div className={styles.mainSheet}>

        {/* PUSH PIN */}

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

        {/* IMAGE STAGE */}

        <div className={styles.media}>

          {/* PRIMARY SCREENSHOT */}

          <div className={styles.mediaInner}>
            <div className={styles.masterImage}>
              {content}
            </div>
          </div>

          {/* SECONDARY SCREENSHOT */}

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

          {/* CORNER MARK */}

          <div
            className={styles.cornerMark}
            aria-hidden="true"
          />

          {/* OPEN PROJECT INDICATOR */}

          <div
            className={styles.openMark}
            aria-hidden="true"
          >
            <ArrowUpRight
              size={25}
              strokeWidth={2.7}
            />
          </div>

          {/* REGISTRATION MARK */}

          <div
            className={styles.mediaRegistration}
            aria-hidden="true"
          >
            +
          </div>
        </div>

        {/* CAPTION */}

        <div className={styles.caption}>

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

          <div
            className={styles.registration}
            aria-hidden="true"
          >
            <Plus
              size={18}
              strokeWidth={2}
            />
          </div>

          <div
            className={styles.bottomAccent}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}