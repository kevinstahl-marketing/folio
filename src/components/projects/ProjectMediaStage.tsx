
import type { CSSProperties } from "react";

import type { ProjectMedia } from "@/data/projects";

import styles from "./ProjectMediaStage.module.css";

type ProjectMediaStageProps = {
  media: ProjectMedia[];
  accent: string;
};

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

  const hasSecondary = Boolean(secondary);

  return (
    <div
      className={[
        styles.stage,
        hasSecondary
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

type MediaFrameProps = {
  media: ProjectMedia;
  variant: "primary" | "secondary";
};

function MediaFrame({
  media,
  variant,
}: MediaFrameProps) {
  const frame = media.frame ?? "browser";

  return (
    <div
      className={[
        styles.media,
        variant === "primary"
          ? styles.primaryMedia
          : styles.secondaryMedia,
        styles[frame],
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
      {frame === "browser" && (
        <div
          className={styles.browserBar}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>
      )}

      <div className={styles.imageViewport}>
        <img
          src={media.src}
          alt={media.alt}
          draggable={false}
          loading="lazy"
          style={{
            objectFit: media.fit ?? "contain",

            objectPosition:
              media.position ?? "center",

            transform:
              `scale(${media.imageScale ?? 1})`,

            transformOrigin:
              media.position ?? "center",
          }}
        />
      </div>
    </div>
  );
}