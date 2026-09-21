
import type { CSSProperties } from "react";

import type { ProjectMedia } from "@/data/projects";

import styles from "./ProjectMediaStage.module.css";

type ProjectMediaStageProps = {
  media: ProjectMedia[];
  accent: string;
};

/* =========================================================
   PROJECT MEDIA STAGE

   Shared screenshot standard:
   - Primary: 16:10
   - Secondary: 16:10
   - Both images fill their holders
   - No portrait phone frames
   ========================================================= */

export default function ProjectMediaStage({
  media,
  accent,
}: ProjectMediaStageProps) {
  const primary = media.find(
    (item) => item.slot === "primary"
  );

  const secondary = media.find(
    (item) => item.slot === "secondary"
  );

  return (
    <div
      className={[
        styles.stage,
        secondary
          ? styles.withSecondary
          : styles.singleMedia,
      ].join(" ")}
      style={
        {
          "--media-accent": accent,
        } as CSSProperties
      }
    >
      {primary ? (
        <MediaFrame
          media={primary}
          variant="primary"
        />
      ) : (
        <div className={styles.primaryPlaceholder}>
          <span>PROJECT MEDIA</span>
          <small>// ADD PRIMARY SCREENSHOT</small>
        </div>
      )}

      {secondary && (
        <MediaFrame
          media={secondary}
          variant="secondary"
        />
      )}
    </div>
  );
}

/* =========================================================
   MEDIA FRAME
   ========================================================= */

type MediaFrameProps = {
  media: ProjectMedia;
  variant: "primary" | "secondary";
};

function MediaFrame({
  media,
  variant,
}: MediaFrameProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={[
        styles.media,
        isPrimary
          ? styles.primaryMedia
          : styles.secondaryMedia,
      ].join(" ")}
      style={
        {
          "--media-rotation":
            `${media.rotation ?? 0}deg`,

          "--media-scale":
            media.scale ?? 1,
        } as CSSProperties
      }
    >
      {/* BROWSER BAR */}

      <div
        className={styles.browserBar}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      {/* SCREENSHOT */}

      <div className={styles.imageViewport}>
        <img
          src={media.src}
          alt={media.alt}
          draggable={false}
          loading="lazy"
          style={{
            objectFit: "cover",

            objectPosition:
              media.position ?? "center top",

            transform:
              `scale(${media.imageScale ?? 1})`,

            transformOrigin:
              media.position ?? "center top",
          }}
        />
      </div>
    </div>
  );
}