"use client";

import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.dossier}>
        {/* BACKING PAPER */}

        <div
          className={styles.backSheet}
          aria-hidden="true"
        />

        {/* MAIN DOCUMENT */}

        <div className={styles.paper}>
          {/* DECORATIVE MARKS */}

          <span
            className={styles.star}
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className={styles.plus}
            aria-hidden="true"
          >
            +
          </span>

          {/* TOP BAR */}

          <header className={styles.topBar}>
            <div className={styles.sectionLabel}>
              CONTACT // LET&apos;S TALK
            </div>

            <div className={styles.code}>
              K.STAHL / 05
            </div>
          </header>

          {/* MAIN CONTENT */}

          <div className={styles.content}>
            {/* EDITORIAL COPY */}

            <div className={styles.copy}>
              <div className={styles.kicker}>
                HAVE AN IDEA?
              </div>

              <h2 className={styles.title}>
                Let&apos;s build
                <br />
                <em>something.</em>
              </h2>

              <p className={styles.description}>
                I build full-stack products, commerce
                experiences, internal systems, and the
                weird custom stuff that doesn&apos;t quite
                fit inside a template.
              </p>

              <p className={styles.subcopy}>
                Have a project, technical problem, or
                interesting idea? Send it over.
              </p>
            </div>

            {/* CONTACT ACTIONS */}

            <div className={styles.actions}>
              {/* PRIMARY EMAIL CARD */}

              <a
                href="mailto:kevin.sthl97@gmail.com"
                className={`${styles.contactCard} ${styles.primaryCard}`}
              >
                <div className={styles.cardTop}>
                  <span>01 / DIRECT CONTACT</span>

                  <Mail
                    size={19}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.cardTitle}>
                  Say hello.
                </div>

                <div className={styles.cardValue}>
                  kevin.sthl97@gmail.com
                </div>

                <ArrowRight
                  className={styles.arrow}
                  size={29}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              {/* SOCIAL CARDS */}

              <div className={styles.secondaryActions}>
                <a
                  href="https://www.linkedin.com/in/kevin-s-5389453a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.smallCard}
                  aria-label="Connect on LinkedIn"
                >
                  <span className={styles.smallNumber}>
                    02
                  </span>

                  <div className={styles.smallContent}>
                    <div className={styles.smallHeading}>
                      <strong>LinkedIn</strong>

                      <FaLinkedin
                        size={19}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.smallDescription}>
                      CONNECT
                    </span>
                  </div>

                  <ArrowUpRight
                    className={styles.smallArrow}
                    size={17}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="https://github.com/kevinstahl-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.smallCard}
                  aria-label="View GitHub profile"
                >
                  <span className={styles.smallNumber}>
                    03
                  </span>

                  <div className={styles.smallContent}>
                    <div className={styles.smallHeading}>
                      <strong>GitHub</strong>

                      <FaGithub
                        size={19}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.smallDescription}>
                      SEE THE CODE
                    </span>
                  </div>

                  <ArrowUpRight
                    className={styles.smallArrow}
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* AVAILABILITY */}

              <div className={styles.availability}>
                <span
                  className={styles.statusDot}
                  aria-hidden="true"
                />

                <div>
                  <strong>OPEN TO GOOD WORK</strong>

                  <span>
                    Full-stack · Product · Commerce · Systems
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <footer className={styles.footer}>
            <div className={styles.footerIdentity}>
              <strong>KEVIN STAHL</strong>

              <span>FULL-STACK DEVELOPER</span>
            </div>

            <button
              type="button"
              className={styles.backToTop}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches
                    ? "instant"
                    : "smooth",
                });
              }}
            >
              BACK TO TOP

              <ArrowUp
                size={17}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}