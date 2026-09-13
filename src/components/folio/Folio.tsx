"use client";

import SiteNav from "@/components/layout/SiteNav";

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

// ─── Hero section ─────────────────────────────────────────────────────────────

function HeroSection() {
  const w = useW();
  const mobile = w < 640;
  const tablet = w < 1024;

  const scrollToCarousel = () => {
    document.getElementById("carousel")?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <section style={{
      position:"relative", minHeight:"100svh",
      display:"flex", flexDirection: tablet ? "column" : "row",
      alignItems:"center",
      padding: mobile ? "80px 24px 60px" : tablet ? "100px 48px 60px" : "0 clamp(48px,6vw,100px)",
      overflow:"hidden",
    }}>

      {/* Atmospheric floaties */}
      <div style={{ position:"absolute", top:"-15%", left:"-8%", width:"55vw", height:"55vw", maxWidth:700, maxHeight:700, borderRadius:"50%", background:"radial-gradient(circle, rgba(205,185,130,0.22) 0%, transparent 68%)", animation:"folioDrift 32s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", right:"-5%", width:"45vw", height:"45vw", maxWidth:560, maxHeight:560, borderRadius:"50%", background:"radial-gradient(circle, rgba(58,94,200,0.1) 0%, transparent 68%)", animation:"folioDrift 40s ease-in-out infinite reverse", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"40%", right:"28%", width:"30vw", height:"30vw", maxWidth:360, maxHeight:360, borderRadius:"50%", background:"radial-gradient(circle, rgba(190,62,30,0.07) 0%, transparent 68%)", animation:"folioDrift 26s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Floating formula fragment */}
      {!mobile && (
        <div style={{ position:"absolute", right: tablet ? "5%" : "44%", bottom:"18%", animation:"folioFloat 10s 1s ease-in-out infinite", pointerEvents:"none", zIndex:1 }}>
          <div style={{ background:"rgba(255,255,255,0.88)", border:"1.5px solid rgba(58,94,200,0.2)", boxShadow:"4px 4px 0 rgba(58,94,200,0.14)", borderRadius:5, padding:"12px 16px", width:160 }}>
            <div style={{ fontFamily:M, fontSize:8, color:EZA, letterSpacing:"0.1em", marginBottom:6 }}>formula.py</div>
            <div style={{ fontFamily:M, fontSize:10.5, color:INK, lineHeight:1.8, opacity:0.8 }}>
              <div>M_n = A_s · f_y</div>
              <div style={{ paddingLeft:10, opacity:0.55 }}>· (d – a/2)</div>
              <div style={{ color:EZA, opacity:0.7 }}># → 124.8 kN·m</div>
            </div>
          </div>
        </div>
      )}

      {/* Floating shop tag */}
      {!tablet && (
        <div style={{ position:"absolute", right:"42%", top:"22%", transform:"rotate(3.5deg)", animation:"folioFloat 13s 3s ease-in-out infinite", pointerEvents:"none", zIndex:1 }}>
          <div style={{ background:"rgba(255,255,255,0.85)", border:"1.5px solid rgba(190,62,30,0.2)", boxShadow:"4px 4px 0 rgba(190,62,30,0.12)", borderRadius:4, padding:"8px 14px" }}>
            <div style={{ fontFamily:M, fontSize:8, color:LCA, letterSpacing:"0.1em", marginBottom:3 }}>SHOPIFY</div>
            <div style={{ fontFamily:S, fontSize:12, color:INK, fontWeight:600 }}>La Concheria</div>
            <div style={{ fontFamily:S, fontSize:11, color:INK, opacity:0.5 }}>Custom theme ↗</div>
          </div>
        </div>
      )}

      {/* Hero text */}
      <div style={{
        position:"relative", zIndex:2,
        maxWidth: tablet ? "100%" : "52%",
        paddingTop: tablet ? 0 : 0,
      }}>
        <div style={{ fontFamily:M, fontSize:11, color:INK, opacity:0.35, letterSpacing:"0.2em", marginBottom: mobile ? 32 : 52 }}>FOLIO</div>

        <h1 style={{
          fontFamily:D, fontStyle:"italic",
          fontSize:`clamp(56px, 8vw, 110px)`,
          lineHeight:0.88, color:INK, letterSpacing:"-0.03em",
          margin:"0 0 24px",
        }}>
          Kevin<br/>Stahl
        </h1>

        <p style={{ fontFamily:S, fontWeight:500, fontSize:`clamp(14px, 1.4vw, 18px)`, color:INK, opacity:0.5, letterSpacing:"0.01em", margin:"0 0 22px" }}>
          Full-Stack Developer · Digital Commerce · Systems
        </p>

        <div style={{ width:38, height:2, background:ACC, opacity:0.75, marginBottom:26 }} />

        <p style={{ fontFamily:S, fontSize:`clamp(14px, 1.2vw, 17px)`, color:INK, opacity:0.62, lineHeight:1.8, maxWidth:480, margin:"0 0 44px" }}>
          I build full-stack web applications, digital commerce experiences, and custom engineering systems — from database design to deployed product.
        </p>

        <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
          <button onClick={scrollToCarousel}
            style={{ fontFamily:S, fontWeight:700, fontSize:15, color:"white", background:INK, border:`2px solid ${INK}`, borderRadius:3, padding:"13px 30px", cursor:"pointer", letterSpacing:"0.04em", transition:"background 0.15s, transform 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.background="#2a2220"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background=INK; e.currentTarget.style.transform="translateY(0)"; }}>
            View Work →
          </button>
          <button
            style={{ fontFamily:S, fontWeight:500, fontSize:15, color:INK, background:"transparent", border:"1.5px solid rgba(26,23,20,0.22)", borderRadius:3, padding:"12px 24px", cursor:"pointer", opacity:0.75, letterSpacing:"0.01em", transition:"opacity 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity="1")}
            onMouseLeave={e => (e.currentTarget.style.opacity="0.75")}>
            Resume ↗
          </button>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:52, opacity:0.3 }}>
          <div style={{ width:1, height:24, background:INK }} />
          <span style={{ fontFamily:M, fontSize:10, color:INK, letterSpacing:"0.14em" }}>SCROLL TO BROWSE WORK</span>
        </div>
      </div>

      {/* Hero right side: stats on desktop */}
      {!tablet && (
        <div style={{ position:"absolute", right:"clamp(40px,5vw,80px)", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:28, zIndex:1 }}>
          {[["8+","Years\nbuilding"],["40+","Engineers\nserved"],["3","Products\nshipped"]].map(([n,l]) => (
            <div key={n} style={{ textAlign:"right" }}>
              <div style={{ fontFamily:D, fontStyle:"italic", fontSize:52, color:INK, opacity:0.12, lineHeight:1 }}>{n}</div>
              <div style={{ fontFamily:M, fontSize:9, color:INK, opacity:0.28, letterSpacing:"0.08em", lineHeight:1.5 }}>{l.replace("\n","\n")}</div>
            </div>
          ))}
        </div>
      )}
    </section>
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
    { id:"ezc", title:"EZCalcs", sub:"Engineering Platform", rotation:-2.8, accent:EZA, content:<EZCalcsMockup /> },
    { id:"lca", title:"La Concheria", sub:"Shopify E-Commerce", rotation:2.2, accent:LCA, content:<LaConPreview /> },
    { id:"ptl", title:"PianoTeacherLink", sub:"Drupal Marketplace", rotation:-1.8, accent:PTLC, content:<PTLPreview /> },
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
      mockup={<EZCalcsMockup />}
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
      mockup={<LaConPreview />}
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
      mockup={<PTLPreview />}
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

// ─── EZCalcs app mockup ───────────────────────────────────────────────────────

function EZCalcsMockup() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", background:"white" }}>
      <div style={{ height:44, background:"#12225a", display:"flex", alignItems:"center", padding:"0 18px", gap:12, flexShrink:0 }}>
        <span style={{ fontFamily:D, fontStyle:"italic", fontSize:20, color:"white", letterSpacing:"-0.02em" }}>EZCalcs</span>
        <span style={{ fontFamily:M, fontSize:8, color:"rgba(255,255,255,0.3)", letterSpacing:"0.08em" }}>STRUCTURAL ENGINEERING</span>
        <div style={{ flex:1 }} />
        <div style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:3, padding:"4px 10px", fontFamily:S, fontSize:11, color:"rgba(255,255,255,0.7)", cursor:"pointer" }}>+ New</div>
        <div style={{ width:28, height:28, borderRadius:"50%", background:EZA, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:S, fontSize:11, fontWeight:700, color:"white" }}>KS</div>
      </div>
      <div style={{ display:"flex", flex:1, overflow:"hidden", minHeight:0 }}>
        <div style={{ width:150, background:"#f2f5fc", borderRight:"1px solid rgba(58,94,200,0.1)", padding:"12px 0", flexShrink:0, overflow:"hidden" }}>
          <div style={{ fontFamily:M, fontSize:8.5, color:EZA, letterSpacing:"0.1em", padding:"0 12px", marginBottom:8 }}>FORMULAS</div>
          <div style={{ padding:"5px 12px", fontFamily:S, fontSize:12, color:EZA, fontWeight:600, display:"flex", gap:4 }}>▾ Beams</div>
          {[["Moment Capacity",true],["Shear Force",false],["Deflection",false]].map(([lbl,active]) => (
            <div key={lbl as string} style={{ padding:"4px 12px 4px 24px", fontFamily:S, fontSize:11.5, color: active ? EZA : "#666", fontWeight: active ? 600 : 400, background: active ? "rgba(58,94,200,0.1)" : "transparent", borderLeft: active ? `2px solid ${EZA}` : "2px solid transparent" }}>{lbl as string}</div>
          ))}
          {["Columns","Slabs"].map(g => (
            <div key={g} style={{ padding:"5px 12px", fontFamily:S, fontSize:12, color:"#555", display:"flex", gap:4 }}>▸ {g}</div>
          ))}
          <div style={{ margin:"10px 12px", height:1, background:"rgba(58,94,200,0.1)" }} />
          <div style={{ fontFamily:M, fontSize:8.5, color:EZA, letterSpacing:"0.1em", padding:"0 12px", marginBottom:6 }}>TEMPLATES</div>
          {["Bridge Beams","Column Set A"].map(t => (
            <div key={t} style={{ padding:"4px 12px", fontFamily:S, fontSize:11.5, color:"#777" }}>{t}</div>
          ))}
        </div>
        <div style={{ flex:1, background:"white", padding:"14px 20px", overflow:"hidden", minWidth:0 }}>
          <div style={{ fontFamily:M, fontSize:9, color:"#bbb", marginBottom:10 }}>Beams / Moment Capacity</div>
          <div style={{ display:"flex", alignItems:"center", marginBottom:16 }}>
            <span style={{ fontFamily:S, fontWeight:700, fontSize:16, color:INK }}>Moment Capacity</span>
            <div style={{ flex:1 }} />
            <div style={{ background:EZA, borderRadius:3, padding:"5px 14px", fontFamily:S, fontSize:12, fontWeight:600, color:"white", cursor:"pointer" }}>▷ Calculate</div>
          </div>
          <div style={{ fontFamily:M, fontSize:8.5, color:EZA, letterSpacing:"0.1em", marginBottom:8 }}>VARIABLES</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14 }}>
            {[["b","350","mm"],["d","560","mm"],["fy","420","MPa"]].map(([name,val,unit]) => (
              <div key={name} style={{ border:"1px solid rgba(58,94,200,0.18)", borderRadius:4, padding:"7px 10px", background:"#fafbff" }}>
                <div style={{ fontFamily:M, fontSize:8, color:"#999", marginBottom:2 }}>{name}</div>
                <div style={{ fontFamily:M, fontSize:15, color:INK, fontWeight:500 }}>{val} <span style={{ fontSize:9, color:"#999" }}>{unit}</span></div>
              </div>
            ))}
          </div>
          <div style={{ background:"#f8f9ff", border:"1px solid rgba(58,94,200,0.14)", borderRadius:4, padding:"10px 14px", marginBottom:14, fontFamily:M, fontSize:13, color:INK }}>
            M<sub style={{ fontSize:9 }}>n</sub> = A<sub style={{ fontSize:9 }}>s</sub> · f<sub style={{ fontSize:9 }}>y</sub> · (d – a/2)
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ background:"rgba(58,94,200,0.05)", border:"2px solid rgba(58,94,200,0.3)", borderRadius:4, padding:"8px 16px" }}>
              <span style={{ fontFamily:M, fontSize:20, color:INK, fontWeight:500 }}>124.8 </span>
              <span style={{ fontFamily:M, fontSize:10, color:"#888" }}>kN·m</span>
            </div>
            <div style={{ fontFamily:S, fontSize:13, color:"#4caf50", fontWeight:600 }}>✓ Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── La Concheria preview ────────────────────────────────────────────────────

function LaConPreview() {
  return (
    <div style={{ width:"100%", height:"100%", background:"#faf5ef", display:"flex", flexDirection:"column" }}>
      <div style={{ height:46, background:"white", borderBottom:"1px solid rgba(0,0,0,0.07)", display:"flex", alignItems:"center", padding:"0 20px", gap:20, flexShrink:0 }}>
        <div style={{ fontFamily:D, fontStyle:"italic", fontSize:18, color:"#3a1a0a" }}>La Concheria</div>
        <div style={{ flex:1 }} />
        {["Menu","Shop","Our Story","Contact"].map(l => (
          <span key={l} style={{ fontFamily:S, fontSize:11.5, color:"#777" }}>{l}</span>
        ))}
        <div style={{ background:LCA, borderRadius:2, padding:"4px 12px", fontFamily:S, fontSize:11, fontWeight:600, color:"white" }}>Shop</div>
      </div>
      <div style={{ flex:1, background:"linear-gradient(155deg, #e8d5c0 0%, #c9976a 52%, #a05030 100%)", position:"relative", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 30%, rgba(50,15,0,0.4) 100%)" }} />
        <div style={{ position:"relative", textAlign:"center" }}>
          <div style={{ fontFamily:M, fontSize:9, color:"rgba(255,255,255,0.55)", letterSpacing:"0.16em", marginBottom:12 }}>ARTISANAL SEAFOOD · SPAIN</div>
          <div style={{ fontFamily:D, fontStyle:"italic", fontSize:38, color:"white", lineHeight:1.0, textShadow:"0 4px 16px rgba(0,0,0,0.3)", marginBottom:10 }}>Fresh from<br/>the Sea</div>
          <div style={{ fontFamily:S, fontSize:12, color:"rgba(255,255,255,0.72)", marginBottom:18 }}>Premium seafood, sustainably sourced</div>
          <div style={{ display:"inline-flex", gap:10 }}>
            <div style={{ border:"2px solid rgba(255,255,255,0.8)", borderRadius:2, padding:"7px 20px", fontFamily:S, fontSize:11, fontWeight:700, color:"white", letterSpacing:"0.06em" }}>SHOP NOW</div>
            <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:2, padding:"7px 20px", fontFamily:S, fontSize:11, color:"rgba(255,255,255,0.85)" }}>OUR STORY</div>
          </div>
        </div>
      </div>
      <div style={{ background:"white", padding:"12px 16px", display:"flex", gap:8, flexShrink:0 }}>
        {[["Gambas al Ajillo","€18.50","#e9d5c2"],["Pulpo Gallego","€24.00","#d4c0b0"],["Mejillones","€12.00","#c8a898"]].map(([name,price,bg]) => (
          <div key={name as string} style={{ flex:1, background:bg as string, borderRadius:3, padding:"8px 10px", cursor:"pointer" }}>
            <div style={{ fontFamily:D, fontStyle:"italic", fontSize:13, color:"#3a1a0a", marginBottom:2 }}>{name as string}</div>
            <div style={{ fontFamily:M, fontSize:11, color:LCA, fontWeight:700 }}>{price as string}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PianoTeacherLink preview ─────────────────────────────────────────────────

function PTLPreview() {
  return (
    <div style={{ width:"100%", height:"100%", background:"#f2f0fa", display:"flex", flexDirection:"column" }}>
      <div style={{ height:46, background:"white", borderBottom:"1px solid rgba(0,0,0,0.07)", display:"flex", alignItems:"center", padding:"0 18px", flexShrink:0 }}>
        <div style={{ fontFamily:S, fontWeight:800, fontSize:14, color:PTLC, letterSpacing:"-0.02em" }}>PianoTeacherLink</div>
        <div style={{ flex:1 }} />
        {["Find a Teacher","How it Works","For Teachers"].map(l => (
          <span key={l} style={{ fontFamily:S, fontSize:11.5, color:"#777", marginLeft:16 }}>{l}</span>
        ))}
        <div style={{ marginLeft:16, background:PTLC, borderRadius:3, padding:"5px 14px", fontFamily:S, fontSize:11, fontWeight:600, color:"white" }}>Sign Up</div>
      </div>
      <div style={{ padding:"16px 20px", background:"linear-gradient(135deg, #e8e4f8 0%, #d8d0f0 100%)", flexShrink:0 }}>
        <div style={{ fontFamily:D, fontStyle:"italic", fontSize:22, color:"#2a1a6a", marginBottom:10 }}>Find your perfect piano teacher</div>
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ flex:1, background:"white", border:"1px solid #d0c8f0", borderRadius:3, padding:"7px 12px", fontFamily:S, fontSize:11.5, color:"#aaa" }}>📍 City or ZIP...</div>
          <div style={{ background:"white", border:"1px solid #d0c8f0", borderRadius:3, padding:"7px 12px", fontFamily:S, fontSize:11.5, color:"#aaa" }}>Level ▾</div>
          <div style={{ background:PTLC, borderRadius:3, padding:"7px 18px", fontFamily:S, fontSize:11.5, fontWeight:600, color:"white" }}>Search</div>
        </div>
      </div>
      <div style={{ flex:1, padding:"12px 18px", overflow:"hidden" }}>
        <div style={{ fontFamily:M, fontSize:9, color:PTLC, letterSpacing:"0.1em", marginBottom:10 }}>12 TEACHERS NEAR YOU</div>
        <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
          {[
            ["Sarah M.","Classical · Jazz · All levels","$45/hr","#c8b4f0","★ 4.9"],
            ["James L.","Contemporary · Pop","$40/hr","#b4a0e8","★ 4.7"],
            ["Mei W.","Classical · Theory","$55/hr","#d4c4f8","★ 5.0"],
            ["Carlos R.","Jazz · Improv","$50/hr","#bfaff0","★ 4.8"],
          ].map(([n,s,p,c,r]) => (
            <div key={n as string} style={{ background:"white", borderRadius:4, padding:"9px 12px", display:"flex", alignItems:"center", gap:10, border:"1px solid rgba(74,63,154,0.1)", cursor:"pointer" }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:`linear-gradient(135deg, ${c} 0%, #5a40c0 100%)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:D, fontStyle:"italic", fontSize:14, color:"white", flexShrink:0 }}>
                {(n as string).charAt(0)}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontFamily:S, fontWeight:700, fontSize:12.5, color:"#2a1a6a" }}>{n as string}</div>
                <div style={{ fontFamily:S, fontSize:11, color:"#999" }}>{s as string}</div>
              </div>
              <div style={{ fontFamily:M, fontSize:12, color:PTLC, fontWeight:700 }}>{p as string}</div>
              <div style={{ background:PTLC, borderRadius:2, padding:"4px 10px", fontFamily:S, fontSize:10.5, fontWeight:600, color:"white" }}>Book</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
