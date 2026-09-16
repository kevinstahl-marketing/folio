"use client";

import { useEffect, useState } from "react";

import type { Project } from "@/data/projects";
import StackBadge from "./StackBadge";

import styles from "./ProjectModal.module.css";
import ProjectMediaStage from "./ProjectMediaStage";

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

export default function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!project) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    useEffect(() => {
        setExpanded(false);
    }, [project?.id]);

    if (!project) return null;

    return (
        <div
            className={styles.backdrop}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <article
                className={styles.modal}
                style={
                    {
                        "--project-accent": project.accent,
                        "--project-bg": project.bg,
                    } as React.CSSProperties
                }
                role="dialog"
                aria-modal="true"
                aria-labelledby={`project-${project.id}-title`}
            >
                {/* TOP BAR */}

                <header className={styles.topBar}>
                    <div className={styles.projectCode}>
                        <span>{project.num}</span>
                        <span>/</span>
                        <span>FEATURED PROJECT</span>
                    </div>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close project"
                    >
                        ×
                    </button>
                </header>

                {/* IDENTITY */}

                <div className={styles.identity}>
                    <h2
                        id={`project-${project.id}-title`}
                        className={styles.title}
                    >
                        {project.title}
                    </h2>

                    <div className={styles.sub}>{project.sub}</div>

                    <div className={styles.accentRule} />
                </div>

                {/* HERO */}

                <div className={styles.hero}>
                    <ProjectMediaStage
                        media={project.media}
                        accent={project.accent}
                    />

                    <div className={styles.overview}>
                        <section className={styles.infoSection}>
                            <div className={styles.eyebrow}>ROLE</div>

                            <div className={styles.infoPrimary}>
                                {project.role}
                            </div>

                            <div className={styles.infoSecondary}>
                                {project.roleDetail}
                            </div>
                        </section>

                        <section className={styles.infoSection}>
                            <div className={styles.eyebrow}>WHAT IT IS</div>

                            <p className={styles.summary}>
                                {project.summary}
                            </p>
                        </section>

                        <section className={styles.infoSection}>
                            <div className={styles.eyebrow}>STACK</div>

                            <div className={styles.stack}>
                                {project.stack.map((name) => (
                                    <StackBadge
                                        key={name}
                                        name={name}
                                        accent={project.accent}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* BUILT */}

                <section className={styles.built}>
                    <div className={styles.builtLabel}>
                        WHAT I BUILT
                    </div>

                    <div className={styles.bulletGrid}>
                        {project.bullets.map((bullet) => (
                            <div key={bullet} className={styles.bullet}>
                                <span>→</span>
                                <p>{bullet}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}

                <footer className={styles.footer}>
                    <div>
                        {project.extra && (
                            <button
                                type="button"
                                className={styles.detailButton}
                                onClick={() =>
                                    setExpanded((current) => !current)
                                }
                            >
                                {expanded
                                    ? "CLOSE DETAILS ↑"
                                    : `${project.extra.label.toUpperCase()} ↓`}
                            </button>
                        )}
                    </div>

                    <div className={styles.actions}>
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.secondaryAction}
                            >
                                GITHUB ↗
                            </a>
                        )}

                        {project.links?.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.primaryAction}
                            >
                                VISIT SITE ↗
                            </a>
                        )}
                    </div>
                </footer>

                {expanded && project.extra && (
                    <div className={styles.expanded}>
                        <div className={styles.eyebrow}>
                            {project.extra.label}
                        </div>

                        <p>{project.extra.body}</p>
                    </div>
                )}
            </article>
        </div>
    );
}