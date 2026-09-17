"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.backSheet} aria-hidden="true" />

      <div className={styles.paper}>
        {/* Decorative marks */}
        <span className={styles.star} aria-hidden="true">
          ✦
        </span>

        <span className={styles.plus} aria-hidden="true">
          +
        </span>

        <header className={styles.topBar}>
          <div className={styles.sectionLabel}>
            CONTACT // LET&apos;S TALK
          </div>

          <div className={styles.code}>
            K.STAHL / 05
          </div>
        </header>

        <div className={styles.content}>
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
              I build full-stack products, commerce experiences,
              internal systems, and the weird custom stuff that
              doesn&apos;t quite fit inside a template.
            </p>

            <p className={styles.subcopy}>
              Have a project, technical problem, or interesting idea?
              Send it over.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href="mailto:kevin.sthl97@gmail.com"
              className={`${styles.contactCard} ${styles.primaryCard}`}
            >
              <div className={styles.cardTop}>
                <span>01</span>
                <span>EMAIL ↗</span>
              </div>

              <div className={styles.cardTitle}>
                Say hello.
              </div>

              <div className={styles.cardValue}>
                kevin.sthl97@gmail.com
              </div>

              <span className={styles.arrow}>
                →
              </span>
            </a>

            <div className={styles.secondaryActions}>
              <a
                href="www.linkedin.com/in/kevin-s-5389453a2"
                className={styles.smallCard}
                aria-label="LinkedIn"
              >
                <span className={styles.smallNumber}>
                  02
                </span>

                <div>
                  <strong>LinkedIn</strong>
                  <span>Connect ↗</span>
                </div>
              </a>

              <a
                href="https://github.com/kevinstahl-marketing"
                className={styles.smallCard}
                aria-label="GitHub"
              >
                <span className={styles.smallNumber}>
                  03
                </span>

                <div>
                  <strong>GitHub</strong>
                  <span>See the code ↗</span>
                </div>
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.statusDot} />

              <div>
                <strong>OPEN TO GOOD WORK</strong>
                <span>
                  Full-stack · Product · Commerce · Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div>
            KEVIN STAHL
            <span>FULL-STACK DEVELOPER</span>
          </div>

          <button
            type="button"
            className={styles.backToTop}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            BACK TO TOP ↑
          </button>
        </footer>
      </div>
    </section>
  );
}