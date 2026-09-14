"use client";

import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import ProjectSection from "@/components/projects/ProjectSection";
import { projects } from "@/data/projects";

const projectPreviews = {
  ezc: <EZCalcsPreview />,
  lca: <LaConcheriaPreview />,
  ptl: <PianoTeacherLinkPreview />,
};

import { useState, useEffect, useRef } from "react";

const D = "'DM Serif Display', Georgia, serif";
const S = "'Outfit', system-ui, sans-serif";
const M = "'JetBrains Mono', monospace";
const INK = "#1a1714";
const ACC = "#9a7030";
const EZA = "#3a5ec8";
const LCA = "#be3e1e";
const PTLC = "#4a3f9a";

// ─── Responsive hook ─────────────────────────────────────────────────────────

function useW() {
  const [w, setW] = useState(() => typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f5f2ee", overflowX: "hidden" }}>
      <SiteNav />
      <HeroSection />
      <ProjectCarousel />
      {projects.map((project) => (
        <ProjectSection
          key={project.id}
          {...project}
          mockup={projectPreviews[project.id]}
        />
      ))}
      <ExpSection />
      <ContactSection />
    </div>
  );
}



// ─── Project sections ─────────────────────────────────────────────────────────




// ─── Experience section ───────────────────────────────────────────────────────

function ExpSection() {
  const w = useW();
  const mobile = w < 640;
  const tablet = w < 900;

  return (
    <section id="exp" style={{ background: "#fafaf8", borderTop: "1px solid rgba(26,23,20,0.08)", padding: mobile ? "60px 24px" : "80px clamp(40px,6vw,100px)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ fontFamily: M, fontSize: 10, color: ACC, letterSpacing: "0.18em", marginBottom: 12 }}>BACKGROUND</div>
        <h2 style={{ fontFamily: D, fontStyle: "italic", fontSize: `clamp(36px,4vw,58px)`, color: INK, letterSpacing: "-0.02em", lineHeight: 0.9, margin: "0 0 52px" }}>Experience</h2>

        <div style={{ display: "grid", gridTemplateColumns: tablet ? "1fr" : "1fr 380px", gap: mobile ? 48 : 80 }}>
          {/* Work history */}
          <div>
            <div style={{ fontFamily: M, fontSize: 9, color: ACC, letterSpacing: "0.14em", marginBottom: 24 }}>WORK HISTORY</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { period: "2022–Present", role: "Freelance Full-Stack Developer", org: "Independent", desc: "End-to-end development of web applications and digital products across engineering, e-commerce, and education sectors.", tags: ["Laravel", "Shopify", "Drupal", "React"] },
                { period: "2024", role: "Creator & Sole Developer", org: "EZCalcs", desc: "Built a structural engineering calculator platform from concept to production. Designed the formula engine, data model, and full UI.", tags: ["Laravel", "Python", "SymPy", "MySQL"] },
                { period: "2023", role: "Lead Developer", org: "La Concheria", desc: "Custom Shopify theme for a premium seafood brand. Brand-led design implementation and conversion-focused UX.", tags: ["Shopify", "Liquid", "JavaScript"] },
                { period: "2022", role: "Full-Stack Developer", org: "PianoTeacherLink", desc: "Drupal marketplace connecting piano students with teachers, including custom modules, geo search, and booking workflows.", tags: ["Drupal", "PHP", "MySQL"] },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: "flex", gap: 28, paddingBottom: 28, marginBottom: 28, borderBottom: i < arr.length - 1 ? "1px solid rgba(26,23,20,0.07)" : "none" }}>
                  <div style={{ width: 96, flexShrink: 0, paddingTop: 3 }}>
                    <div style={{ fontFamily: M, fontSize: 11, color: INK, opacity: 0.38, letterSpacing: "0.03em" }}>{item.period}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: S, fontWeight: 700, fontSize: 15.5, color: INK, marginBottom: 2 }}>{item.role}</div>
                    <div style={{ fontFamily: S, fontSize: 13.5, color: INK, opacity: 0.42, marginBottom: 8 }}>{item.org}</div>
                    <div style={{ fontFamily: S, fontSize: 14, color: INK, opacity: 0.62, lineHeight: 1.65, marginBottom: 10 }}>{item.desc}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {item.tags.map(t => (
                        <span key={t} style={{ fontFamily: M, fontSize: 10, color: INK, opacity: 0.5, border: "1px solid rgba(26,23,20,0.18)", borderRadius: 2, padding: "2px 8px" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills + education */}
          <div>
            <div style={{ fontFamily: M, fontSize: 9, color: ACC, letterSpacing: "0.14em", marginBottom: 20 }}>CORE SKILLS</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                ["Frontend", "React, JavaScript, TailwindCSS, HTML/CSS, Livewire"],
                ["Backend", "Laravel, PHP, Python, Node.js, REST API design"],
                ["Databases", "MySQL, schema design, query optimization"],
                ["Platforms", "Shopify, Drupal, headless CMS, custom themes"],
                ["Engineering", "SymPy, formula modeling, unit conversion systems"],
                ["Systems", "Git, Linux, CLI tooling, server deployment"],
              ].map(([area, skills], i) => (
                <div key={area} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: "1px solid rgba(26,23,20,0.07)" }}>
                  <div style={{ fontFamily: S, fontWeight: 700, fontSize: 13.5, color: INK, marginBottom: 4 }}>{area}</div>
                  <div style={{ fontFamily: S, fontSize: 13.5, color: INK, opacity: 0.52, lineHeight: 1.55 }}>{skills}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: M, fontSize: 9, color: ACC, letterSpacing: "0.14em", marginBottom: 14, marginTop: 8 }}>EDUCATION</div>
            <div>
              <div style={{ fontFamily: S, fontWeight: 700, fontSize: 15, color: INK }}>B.S. Computer Science</div>
              <div style={{ fontFamily: S, fontSize: 13.5, color: INK, opacity: 0.45, marginTop: 4 }}>Full-stack track · Systems emphasis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────

function ContactSection() {
  const w = useW();
  const mobile = w < 640;

  return (
    <section id="contact" style={{ background: INK, padding: mobile ? "72px 24px 80px" : "100px clamp(40px,6vw,100px) 110px", position: "relative", overflow: "hidden" }}>
      {/* Ghost text */}
      <div style={{ position: "absolute", right: "-5%", bottom: "-10%", fontFamily: D, fontStyle: "italic", fontSize: "clamp(200px,28vw,420px)", lineHeight: 0.8, color: "white", opacity: 0.03, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em" }}>hi.</div>

      {/* Floating blob */}
      <div style={{ position: "absolute", top: "-20%", left: "10%", width: "50vw", height: "50vw", maxWidth: 500, maxHeight: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(154,112,48,0.2) 0%, transparent 68%)", animation: "folioDrift 30s ease-in-out infinite", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: M, fontSize: 10, color: "white", opacity: 0.35, letterSpacing: "0.2em", marginBottom: 28 }}>GET IN TOUCH</div>
        <h2 style={{ fontFamily: D, fontStyle: "italic", fontSize: `clamp(52px,7vw,96px)`, lineHeight: 0.88, color: "white", letterSpacing: "-0.03em", margin: "0 0 28px" }}>
          Let's build<br />something.
        </h2>
        <p style={{ fontFamily: S, fontSize: `clamp(15px,1.4vw,18px)`, color: "white", opacity: 0.55, lineHeight: 1.75, maxWidth: 480, marginBottom: 52 }}>
          Open to full-stack contracts, product work, and technical consulting. Fast response, clear communication.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { label: "kevin@stahldev.com", icon: "✉" },
            { label: "LinkedIn ↗", icon: "in" },
            { label: "GitHub ↗", icon: "gh" },
          ].map(({ label, icon }) => (
            <button key={label}
              style={{ fontFamily: S, fontWeight: 600, fontSize: 15, color: "white", background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 3, padding: "13px 26px", cursor: "pointer", letterSpacing: "0.02em", transition: "all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: M, fontSize: 10, color: "white", opacity: 0.28, background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em", marginTop: 52, display: "flex", alignItems: "center", gap: 8, padding: 0, transition: "opacity 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.55")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.28")}>
          ↑ BACK TO TOP
        </button>
      </div>
    </section>
  );
}
