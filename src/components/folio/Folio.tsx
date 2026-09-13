"use client";

import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import EZCalcsPreview from "@/components/previews/EZCalcsPreview";
import LaConcheriaPreview from "@/components/previews/LaConcheriaPreview";
import PianoTeacherLinkPreview from "@/components/previews/PianoTeacherLinkPreview";

import { useState, useEffect, useRef } from "react";

const D    = "'DM Serif Display', Georgia, serif";
const S    = "'Outfit', system-ui, sans-serif";
const M    = "'JetBrains Mono', monospace";
const INK  = "#1a1714";
const ACC  = "#9a7030";
const EZA  = "#3a5ec8";
const LCA  = "#be3e1e";
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
    <div style={{ width:"100%", minHeight:"100vh", background:"#f5f2ee", overflowX:"hidden" }}>
      <SiteNav/>
      <HeroSection />
      <CarouselSection />
      <EZSection />
      <LaConSection />
      <PTLSection />
      <ExpSection />
      <ContactSection />
    </div>
  );
}

// ─── Carousel section ────────────────────────────────────────────────────────

function CarouselSection() {
  const w = useW();
  const mobile = w < 640;
  const railRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX  = useRef(0);
  const startSL = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current  = e.pageX;
    startSL.current = railRef.current?.scrollLeft ?? 0;
    if (railRef.current) railRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !railRef.current) return;
    e.preventDefault();
    railRef.current.scrollLeft = startSL.current - (e.pageX - startX.current) * 1.2;
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (railRef.current) railRef.current.style.cursor = "grab";
  };

  const cardW = mobile ? Math.min(w - 48, 320) : Math.min(Math.round(w * 0.34), 480);
  const cardH = Math.round(cardW * 1.22);

  const projects = [
    { id:"ezc", title:"EZCalcs", sub:"Engineering Platform", rotation:-2.8, accent:EZA, content:<EZCalcsPreview /> },
    { id:"lca", title:"La Concheria", sub:"Shopify E-Commerce", rotation:2.2, accent:LCA, content:<LaConcheriaPreview /> },
    { id:"ptl", title:"PianoTeacherLink", sub:"Drupal Marketplace", rotation:-1.8, accent:PTLC, content:<PianoTeacherLinkPreview /> },
  ];

  return (
    <section id="carousel" style={{ paddingTop: mobile ? 40 : 60 }}>
      <div style={{ padding:`0 clamp(24px,4vw,72px)`, marginBottom:40 }}>
        <div style={{ fontFamily:M, fontSize:10, color:INK, opacity:0.35, letterSpacing:"0.18em", marginBottom:12 }}>SELECTED WORK</div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:16 }}>
          <h2 style={{ fontFamily:D, fontStyle:"italic", fontSize:`clamp(36px,4vw,58px)`, color:INK, letterSpacing:"-0.02em", lineHeight:0.9, margin:0 }}>
            Projects
          </h2>
          <span style={{ fontFamily:S, fontSize:14, color:INK, opacity:0.4, paddingBottom:6 }}>— drag to browse, click to explore</span>
        </div>
      </div>

      {/* Rail */}
      <div style={{ overflow:"hidden", width:"100%" }}>
        <div
          ref={railRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display:"flex", gap: mobile ? 20 : 32,
            padding:`${mobile ? 40 : 64}px clamp(24px,4vw,72px) ${mobile ? 48 : 72}px`,
            overflowX:"scroll", overflowY:"visible",
            cursor:"grab", userSelect:"none",
            scrollbarWidth:"none",
          }}>
          {projects.map(p => (
            <FloatingCard key={p.id} {...p} cardW={cardW} cardH={cardH} />
          ))}
          {/* Trailing spacer */}
          <div style={{ width: mobile ? 8 : 48, flexShrink:0 }} />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ id, title, sub, rotation, accent, content, cardW, cardH }: {
  id:string; title:string; sub:string; rotation:number; accent:string; content:React.ReactNode; cardW:number; cardH:number;
}) {
  const [hov, setHov] = useState(false);

  const scrollTo = () => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div
      onClick={scrollTo}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:cardW, height:cardH, flexShrink:0,
        borderRadius:10,
        border:"2px solid rgba(26,23,20,0.13)",
        overflow:"hidden",
        cursor:"pointer",
        position:"relative",
        transform:`rotate(${hov ? 0 : rotation}deg) scale(${hov ? 1.04 : 1}) translateY(${hov ? -8 : 0}px)`,
        transition:"transform 0.42s cubic-bezier(0.22,0.87,0.52,1), box-shadow 0.3s",
        boxShadow: hov
          ? `0 36px 80px rgba(0,0,0,0.2), 0 8px 0 ${accent}44`
          : "0 16px 48px rgba(0,0,0,0.14), 6px 6px 0 rgba(26,23,20,0.1)",
        willChange:"transform",
      }}>
      <div style={{ width:"100%", height:"100%", pointerEvents:"none", overflow:"hidden" }}>
        {content}
      </div>
      {/* Label always visible */}
      <div style={{ position:"absolute", top:12, left:14, display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ background:accent, borderRadius:2, padding:"3px 10px", fontFamily:M, fontSize:9, color:"white", letterSpacing:"0.1em", backdropFilter:"blur(8px)" }}>{title}</div>
        <div style={{ fontFamily:M, fontSize:8, color:"white", opacity:0.6, letterSpacing:"0.06em", background:"rgba(26,23,20,0.4)", borderRadius:2, padding:"3px 8px" }}>{sub}</div>
      </div>
      {/* Hover overlay */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(10,10,20,0.68) 0%, rgba(10,10,20,0.1) 45%, transparent 65%)",
        opacity: hov ? 1 : 0,
        transition:"opacity 0.28s",
        display:"flex", alignItems:"flex-end", padding:24,
      }}>
        <div>
          <div style={{ fontFamily:D, fontStyle:"italic", fontSize:24, color:"white", lineHeight:1.1, marginBottom:6 }}>{title}</div>
          <div style={{ fontFamily:S, fontSize:14, color:"white", opacity:0.75, marginBottom:14 }}>{sub}</div>
          <div style={{ fontFamily:S, fontWeight:700, fontSize:15, color:"white", display:"flex", alignItems:"center", gap:8 }}>
            Explore <span style={{ color:accent === EZA ? "#7da4ff" : accent === LCA ? "#f0a880" : "#b0a0ff" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Project section template ─────────────────────────────────────────────────

function ProjectSection({ id, num, accent, bg, title, sub, role, roleDetail, result, resultDetail, stack, bullets, extra, mockup, mockupLeft = false }: {
  id:string; num:string; accent:string; bg:string; title:string; sub:string;
  role:string; roleDetail:string; result:string; resultDetail:string;
  stack:string[]; bullets:string[]; extra?:{ label:string; body:string };
  mockup:React.ReactNode; mockupLeft?:boolean;
}) {
  const w = useW();
  const mobile = w < 640;
  const tablet = w < 900;
  const [expanded, setExpanded] = useState(false);

  const Info = (
    <div style={{ flex:1, minWidth:0, padding: mobile ? "36px 24px" : tablet ? "44px 40px" : "56px 60px", display:"flex", flexDirection:"column" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
        <span style={{ fontFamily:M, fontSize:10, color:accent, letterSpacing:"0.14em" }}>{num}</span>
        <div style={{ width:1, height:18, background:"rgba(26,23,20,0.15)" }} />
        <span style={{ fontFamily:M, fontSize:10, color:INK, opacity:0.45, letterSpacing:"0.08em" }}>{sub}</span>
      </div>

      <h2 style={{ fontFamily:D, fontStyle:"italic", fontSize:`clamp(42px,4vw,66px)`, lineHeight:0.88, color:INK, letterSpacing:"-0.025em", margin:"0 0 16px" }}>
        {title}
      </h2>
      <div style={{ width:34, height:2, background:accent, opacity:0.8, marginBottom:20 }} />

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:28 }}>
        <div style={{ padding:"14px 16px", background:"rgba(255,255,255,0.7)", borderRadius:4, border:`1px solid rgba(26,23,20,0.09)` }}>
          <div style={{ fontFamily:M, fontSize:8.5, color:accent, letterSpacing:"0.12em", marginBottom:5 }}>MY ROLE</div>
          <div style={{ fontFamily:S, fontSize:14, color:INK, fontWeight:700, lineHeight:1.3 }}>{role}</div>
          <div style={{ fontFamily:S, fontSize:12.5, color:INK, opacity:0.5, marginTop:3 }}>{roleDetail}</div>
        </div>
        <div style={{ padding:"14px 16px", background:accent, borderRadius:4 }}>
          <div style={{ fontFamily:M, fontSize:8.5, color:"rgba(255,255,255,0.65)", letterSpacing:"0.12em", marginBottom:5 }}>RESULT</div>
          <div style={{ fontFamily:S, fontSize:14, color:"white", fontWeight:700, lineHeight:1.3 }}>{result}</div>
          <div style={{ fontFamily:S, fontSize:12.5, color:"rgba(255,255,255,0.65)", marginTop:3 }}>{resultDetail}</div>
        </div>
      </div>

      <div style={{ fontFamily:M, fontSize:9, color:accent, letterSpacing:"0.13em", marginBottom:12 }}>TECH STACK</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
        {stack.map(n => <StackBadge key={n} name={n} accent={accent} />)}
      </div>

      <div style={{ fontFamily:M, fontSize:9, color:accent, letterSpacing:"0.13em", marginBottom:12 }}>WHAT I BUILT</div>
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:24 }}>
        {bullets.map(f => (
          <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
            <span style={{ fontFamily:M, fontSize:12, color:accent, marginTop:2, flexShrink:0 }}>→</span>
            <span style={{ fontFamily:S, fontSize:14, color:INK, opacity:0.68, lineHeight:1.6 }}>{f}</span>
          </div>
        ))}
      </div>

      {extra && (
        <>
          <button onClick={() => setExpanded(e => !e)}
            style={{ fontFamily:M, fontSize:11, color:accent, background:"none", border:`1.5px solid ${accent}55`, borderRadius:3, padding:"8px 18px", cursor:"pointer", letterSpacing:"0.07em", width:"fit-content", marginBottom: expanded ? 16 : 0 }}>
            {expanded ? "Less ↑" : `${extra.label} ↓`}
          </button>
          {expanded && (
            <div style={{ padding:"16px 20px", background:`${accent}08`, border:`1px solid ${accent}22`, borderRadius:4 }}>
              <div style={{ fontFamily:S, fontSize:14, color:INK, opacity:0.7, lineHeight:1.7 }}>{extra.body}</div>
            </div>
          )}
        </>
      )}
    </div>
  );

  const Mockup = (
    <div style={{ flex:1, minWidth:0, padding: mobile ? "0 24px 40px" : tablet ? "40px 40px 40px 0" : "56px 60px 56px 0", display: mockupLeft && !tablet ? "contents" : "flex", alignItems:"stretch" }}>
      <div style={{ flex:1, borderRadius:8, overflow:"hidden", boxShadow:"10px 10px 0 rgba(26,23,20,0.12), 0 24px 60px rgba(0,0,0,0.12)", border:"1.5px solid rgba(26,23,20,0.1)", minHeight: mobile ? 280 : 340 }}>
        {mockup}
      </div>
    </div>
  );

  return (
    <section id={id} style={{ background:bg, borderTop:"1px solid rgba(26,23,20,0.08)" }}>
      <div style={{ maxWidth:1400, margin:"0 auto", display:"flex", flexDirection: (tablet || mobile) ? "column" : mockupLeft ? "row-reverse" : "row" }}>
        {(tablet || mobile) ? <>{Info}{Mockup}</> : mockupLeft ? <>{Mockup}{Info}</> : <>{Info}{Mockup}</>}
      </div>
    </section>
  );
}

// ─── Stack badge ──────────────────────────────────────────────────────────────

const TECH: Record<string, [string, string]> = {
  "Laravel":     ["#FF2D20","L"],
  "Python":      ["#3776AB","Py"],
  "SymPy":       ["#3c6e8f","Sy"],
  "MySQL":       ["#4479A1","SQL"],
  "Livewire":    ["#4e56a6","Lw"],
  "PHP":         ["#777BB4","php"],
  "TailwindCSS": ["#06B6D4","TW"],
  "Shopify":     ["#5a8a1a","Sh"],
  "Liquid":      ["#5a8a1a","Lq"],
  "JavaScript":  ["#c9a800","JS"],
  "Drupal":      ["#0678BE","Dr"],
  "React":       ["#00a8c9","Re"],
  "HTML/CSS":    ["#264DE4","CSS"],
};

function StackBadge({ name, accent }: { name:string; accent:string }) {
  const [bg, abbr] = TECH[name] ?? [accent, "?"];
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, padding:"7px 12px 7px 8px", background:"white", border:"1.5px solid rgba(26,23,20,0.1)", boxShadow:"2px 2px 0 rgba(26,23,20,0.07)", borderRadius:5 }}>
      <div style={{ width:26, height:26, borderRadius:4, background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:M, fontSize:9, fontWeight:700, color:"white", flexShrink:0 }}>
        {abbr}
      </div>
      <span style={{ fontFamily:S, fontSize:13.5, fontWeight:500, color:INK }}>{name}</span>
    </div>
  );
}

// ─── Project sections ─────────────────────────────────────────────────────────

function EZSection() {
  return (
    <ProjectSection
      id="ezc" num="02" accent={EZA} bg="#edf0f8"
      title="EZCalcs" sub="ENGINEERING CALCULATOR PLATFORM"
      role="Sole Developer" roleDetail="8 months · concept to production"
      result="40+ active engineers" resultDetail="Deployed to production"
      stack={["Laravel","Python","MySQL","Livewire","PHP","TailwindCSS"]}
      bullets={[
        "Symbolic formula engine using Python + SymPy for real-time computation",
        "Laravel + Livewire UI with live variable input and instant result rendering",
        "Relational MySQL schema for formulas, unit systems, and calculation history",
        "Formula template sharing and team collaboration features",
      ]}
      extra={{ label:"Architecture details", body:"User submits a formula expression and variable values via Livewire → Laravel dispatches a Python subprocess running SymPy → result is returned as JSON and rendered inline. Formulas are stored as structured JSON blobs in MySQL for portability and versioning." }}
      mockup={<EZCalcsPreview />}
    />
  );
}

function LaConSection() {
  return (
    <ProjectSection
      id="lca" num="03" accent={LCA} bg="#faf5ef"
      title="La Concheria" sub="SHOPIFY E-COMMERCE · SEAFOOD BRAND"
      role="Lead Developer" roleDetail="Full build · brand to launch"
      result="Custom Shopify store" resultDetail="Live · conversion-optimized"
      stack={["Shopify","Liquid","JavaScript","HTML/CSS"]}
      bullets={[
        "Custom Liquid theme built from scratch to match premium brand identity",
        "Editorial product storytelling sections with photography-led layout",
        "Conversion-optimized cart, checkout flow, and upsell components",
        "Shopify metafields for provenance, sustainability, and sourcing data",
      ]}
      extra={{ label:"Challenges", body:"The client had high expectations for visual fidelity from day one. Translating print-quality brand materials into a responsive Shopify theme required meticulous CSS work and custom section schemas. Metafields were extended to support sustainability certifications per product SKU." }}
      mockup={<LaConcheriaPreview />}
      mockupLeft
    />
  );
}

function PTLSection() {
  return (
    <ProjectSection
      id="ptl" num="04" accent={PTLC} bg="#f2f0fa"
      title="PianoTeacher​Link" sub="DRUPAL MARKETPLACE · MUSIC EDUCATION"
      role="Full-Stack Developer" roleDetail="Architecture + full build"
      result="Marketplace live" resultDetail="Teacher + student platform"
      stack={["Drupal","PHP","MySQL","JavaScript"]}
      bullets={[
        "Custom Drupal content types for teacher profiles and student booking requests",
        "Geolocation-based teacher search using MySQL spatial functions",
        "Booking request workflow with email notifications and admin approval",
        "Admin dashboard for teacher verification and platform management",
      ]}
      extra={{ label:"Architecture", body:"Built on Drupal's entity and field API to model teachers, lessons, and booking requests as structured content. Custom modules handle geolocation queries. The theming layer uses a custom subtheme with component-level CSS scoping." }}
      mockup={<PianoTeacherLinkPreview />}
    />
  );
}

// ─── Experience section ───────────────────────────────────────────────────────

function ExpSection() {
  const w = useW();
  const mobile = w < 640;
  const tablet = w < 900;

  return (
    <section id="exp" style={{ background:"#fafaf8", borderTop:"1px solid rgba(26,23,20,0.08)", padding: mobile ? "60px 24px" : "80px clamp(40px,6vw,100px)" }}>
      <div style={{ maxWidth:1300, margin:"0 auto" }}>
        <div style={{ fontFamily:M, fontSize:10, color:ACC, letterSpacing:"0.18em", marginBottom:12 }}>BACKGROUND</div>
        <h2 style={{ fontFamily:D, fontStyle:"italic", fontSize:`clamp(36px,4vw,58px)`, color:INK, letterSpacing:"-0.02em", lineHeight:0.9, margin:"0 0 52px" }}>Experience</h2>

        <div style={{ display:"grid", gridTemplateColumns: tablet ? "1fr" : "1fr 380px", gap: mobile ? 48 : 80 }}>
          {/* Work history */}
          <div>
            <div style={{ fontFamily:M, fontSize:9, color:ACC, letterSpacing:"0.14em", marginBottom:24 }}>WORK HISTORY</div>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {[
                { period:"2022–Present", role:"Freelance Full-Stack Developer", org:"Independent", desc:"End-to-end development of web applications and digital products across engineering, e-commerce, and education sectors.", tags:["Laravel","Shopify","Drupal","React"] },
                { period:"2024", role:"Creator & Sole Developer", org:"EZCalcs", desc:"Built a structural engineering calculator platform from concept to production. Designed the formula engine, data model, and full UI.", tags:["Laravel","Python","SymPy","MySQL"] },
                { period:"2023", role:"Lead Developer", org:"La Concheria", desc:"Custom Shopify theme for a premium seafood brand. Brand-led design implementation and conversion-focused UX.", tags:["Shopify","Liquid","JavaScript"] },
                { period:"2022", role:"Full-Stack Developer", org:"PianoTeacherLink", desc:"Drupal marketplace connecting piano students with teachers, including custom modules, geo search, and booking workflows.", tags:["Drupal","PHP","MySQL"] },
              ].map((item, i, arr) => (
                <div key={i} style={{ display:"flex", gap:28, paddingBottom:28, marginBottom:28, borderBottom: i < arr.length-1 ? "1px solid rgba(26,23,20,0.07)" : "none" }}>
                  <div style={{ width:96, flexShrink:0, paddingTop:3 }}>
                    <div style={{ fontFamily:M, fontSize:11, color:INK, opacity:0.38, letterSpacing:"0.03em" }}>{item.period}</div>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:S, fontWeight:700, fontSize:15.5, color:INK, marginBottom:2 }}>{item.role}</div>
                    <div style={{ fontFamily:S, fontSize:13.5, color:INK, opacity:0.42, marginBottom:8 }}>{item.org}</div>
                    <div style={{ fontFamily:S, fontSize:14, color:INK, opacity:0.62, lineHeight:1.65, marginBottom:10 }}>{item.desc}</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {item.tags.map(t => (
                        <span key={t} style={{ fontFamily:M, fontSize:10, color:INK, opacity:0.5, border:"1px solid rgba(26,23,20,0.18)", borderRadius:2, padding:"2px 8px" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills + education */}
          <div>
            <div style={{ fontFamily:M, fontSize:9, color:ACC, letterSpacing:"0.14em", marginBottom:20 }}>CORE SKILLS</div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {[
                ["Frontend","React, JavaScript, TailwindCSS, HTML/CSS, Livewire"],
                ["Backend","Laravel, PHP, Python, Node.js, REST API design"],
                ["Databases","MySQL, schema design, query optimization"],
                ["Platforms","Shopify, Drupal, headless CMS, custom themes"],
                ["Engineering","SymPy, formula modeling, unit conversion systems"],
                ["Systems","Git, Linux, CLI tooling, server deployment"],
              ].map(([area, skills], i) => (
                <div key={area} style={{ paddingBottom:16, marginBottom:16, borderBottom:"1px solid rgba(26,23,20,0.07)" }}>
                  <div style={{ fontFamily:S, fontWeight:700, fontSize:13.5, color:INK, marginBottom:4 }}>{area}</div>
                  <div style={{ fontFamily:S, fontSize:13.5, color:INK, opacity:0.52, lineHeight:1.55 }}>{skills}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily:M, fontSize:9, color:ACC, letterSpacing:"0.14em", marginBottom:14, marginTop:8 }}>EDUCATION</div>
            <div>
              <div style={{ fontFamily:S, fontWeight:700, fontSize:15, color:INK }}>B.S. Computer Science</div>
              <div style={{ fontFamily:S, fontSize:13.5, color:INK, opacity:0.45, marginTop:4 }}>Full-stack track · Systems emphasis</div>
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
    <section id="contact" style={{ background:INK, padding: mobile ? "72px 24px 80px" : "100px clamp(40px,6vw,100px) 110px", position:"relative", overflow:"hidden" }}>
      {/* Ghost text */}
      <div style={{ position:"absolute", right:"-5%", bottom:"-10%", fontFamily:D, fontStyle:"italic", fontSize:"clamp(200px,28vw,420px)", lineHeight:0.8, color:"white", opacity:0.03, userSelect:"none", pointerEvents:"none", letterSpacing:"-0.04em" }}>hi.</div>

      {/* Floating blob */}
      <div style={{ position:"absolute", top:"-20%", left:"10%", width:"50vw", height:"50vw", maxWidth:500, maxHeight:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(154,112,48,0.2) 0%, transparent 68%)", animation:"folioDrift 30s ease-in-out infinite", pointerEvents:"none" }} />

      <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:M, fontSize:10, color:"white", opacity:0.35, letterSpacing:"0.2em", marginBottom:28 }}>GET IN TOUCH</div>
        <h2 style={{ fontFamily:D, fontStyle:"italic", fontSize:`clamp(52px,7vw,96px)`, lineHeight:0.88, color:"white", letterSpacing:"-0.03em", margin:"0 0 28px" }}>
          Let's build<br/>something.
        </h2>
        <p style={{ fontFamily:S, fontSize:`clamp(15px,1.4vw,18px)`, color:"white", opacity:0.55, lineHeight:1.75, maxWidth:480, marginBottom:52 }}>
          Open to full-stack contracts, product work, and technical consulting. Fast response, clear communication.
        </p>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
          {[
            { label:"kevin@stahldev.com", icon:"✉" },
            { label:"LinkedIn ↗", icon:"in" },
            { label:"GitHub ↗", icon:"gh" },
          ].map(({ label, icon }) => (
            <button key={label}
              style={{ fontFamily:S, fontWeight:600, fontSize:15, color:"white", background:"rgba(255,255,255,0.08)", border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:3, padding:"13px 26px", cursor:"pointer", letterSpacing:"0.02em", transition:"all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.18)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}>
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
          style={{ fontFamily:M, fontSize:10, color:"white", opacity:0.28, background:"none", border:"none", cursor:"pointer", letterSpacing:"0.1em", marginTop:52, display:"flex", alignItems:"center", gap:8, padding:0, transition:"opacity 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity="0.55")}
          onMouseLeave={e => (e.currentTarget.style.opacity="0.28")}>
          ↑ BACK TO TOP
        </button>
      </div>
    </section>
  );
}
