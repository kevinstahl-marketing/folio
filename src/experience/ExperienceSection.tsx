"use client";

import styles from "./ExperienceSection.module.css";

const experience = [
    {
        period: "2024 — PRESENT",
        role: "Full-Stack Developer / Founder",
        organization: "The Stahl Marketing",
        location: "Rio Grande Valley, Texas",
        description:
            "Build web applications, commerce platforms, business systems, and digital infrastructure for small businesses from architecture and development through deployment and operations.",
        highlights: [
            { lead: 'Shopify & POS', text: 'Develop custom storefronts, themes, product experiences, POS integrations, and e-commerce workflows.', featured: false },
            { lead: 'Full-stack development', text: 'Build applications and internal tools with PHP, Laravel, Python, JavaScript, TypeScript, React, Next.js, SQL, and cloud platforms.', featured: false },
            { lead: 'Advertising & commerce', text: 'Manage Google Ads and Meta Ads alongside Shopify, TikTok Shop, Meta Commerce, and point-of-sale operations.', featured: true },
            { lead: 'End-to-end delivery', text: 'Translate business requirements into deployed software, automations, storefronts, analytics, and technical systems.', featured: false },
        ],
        tags: [
            "Full-Stack",
            "Shopify",
            "Laravel",
            "React",
            "Next.js",
            "E-Commerce",
        ],
    },

    {
        period: "2021 — 2024",
        role: "Forensic Scientist — Seized Drugs",
        organization: "Texas Department of Public Safety",
        location: "Weslaco, Texas",
        description:
            "Performed forensic examination and instrumental analysis of controlled substances in a regulated laboratory environment requiring rigorous scientific analysis, documentation, quality control, and evidence handling.",
        highlights: [
            { lead: 'GC-MS analysis', text: 'Analyze forensic evidence using analytical chemistry techniques and GC-MS instrumentation.', featured: false },
            { lead: 'Scientific systems', text: 'Operate and interpret data through Agilent ChemStation and laboratory information management systems.', featured: false },
            { lead: 'Data & documentation', text: 'Work with scientific datasets, technical documentation, analytical workflows, and laboratory information systems.', featured: false },
            { lead: 'Quality assurance', text: 'Produce defensible scientific findings under established forensic quality assurance and chain-of-custody procedures.', featured: false },
        ],
        tags: [
            "GC-MS",
            "ChemStation",
            "LIMS",
            "Analytical Chemistry",
            "Scientific Data",
            "Forensics",
        ],
    },

    {
        period: "2020 — 2021",
        role: "HR Systems Analyst",
        organization:
            "Texas Military Department · Joint Force Headquarters",
        location: "Camp Mabry · Austin, Texas",
        description:
            "Supported personnel operations, HR information systems, organizational reporting, and data workflows at Joint Force Headquarters while serving with the Texas Army National Guard.",
        highlights: [
            { lead: 'SQL & reporting', text: 'Build Access SQL queries, reports, and data workflows for personnel and organizational information.', featured: false },
            { lead: 'Excel VBA automation', text: 'Develop automation to reduce repetitive administrative processes and improve reporting workflows.', featured: true },
            { lead: 'Enterprise HR systems', text: 'Work with military personnel systems and records including IPPS-A, iPERMS, AFCOS, and PEMS.', featured: false },
            { lead: 'Systems integration', text: 'Combine personnel-domain knowledge with database querying, spreadsheet automation, data analysis, and systems troubleshooting.', featured: false },
        ],
        tags: [
            "Access SQL",
            "Excel VBA",
            "HR Systems",
            "Automation",
            "Data Analysis",
            "Reporting",
        ],
    },

    {
        period: "2018 — 2024",
        role: "Infantry Officer",
        organization: "Texas Army National Guard",
        location: "Texas",
        description:
            "Served as a commissioned Army officer across operational and staff assignments, leading personnel, coordinating operations, managing organizational resources, and solving complex problems under time and resource constraints.",
        highlights: [
            { lead: 'Leadership', text: 'Serve in assignments including Platoon Leader and Company Executive Officer.', featured: false },
            { lead: 'Team operations', text: 'Lead teams and coordinate training, personnel, logistics, readiness, and operational requirements.', featured: false },
            { lead: 'Operational planning', text: 'Manage competing priorities across personnel, equipment, planning, and execution.', featured: false },
        ],
        tags: [
            "Leadership",
            "Operations",
            "Planning",
            "Personnel",
            "Logistics",
            "Management",
        ],
    },
];

const skills = [
    {
        label: "Languages",
        values:
            "PHP · Python · JavaScript · TypeScript · SQL · HTML / CSS",
    },
    {
        label: "Frameworks",
        values:
            "Laravel · React · Next.js · Remix · Livewire · Vite",
    },
    {
        label: "Data + Infra",
        values:
            "MySQL · MariaDB · Supabase · Redis · Prisma · Linux",
    },
    {
        label: "Platforms",
        values:
            "Shopify · Drupal · WordPress · Squarespace · Vercel · Cloudways",
    },
    {
        label: "Commerce",
        values:
            "Shopify POS · TikTok Shop · Meta Commerce · Google Ads · Meta Ads",
    },
    {
        label: "Scientific + Systems",
        values:
            "VBA · Access SQL · Excel Automation · GC-MS · ChemStation · LIMS",
    },
];

const projects = [
    {
        code: "01",
        name: "EZCalcs",
        type: "Engineering Platform",
        description:
            "Formula-driven calculation platform built with Laravel, Python, SymPy, Livewire, and relational data modeling.",
    },
    {
        code: "02",
        name: "La Concheria",
        type: "Shopify E-Commerce",
        description:
            "Custom commerce experience spanning storefront development, product presentation, POS, shipping, advertising, and operations.",
    },
    {
        code: "03",
        name: "Piano Teacher Link",
        type: "Drupal Marketplace",
        description:
            "Deployed marketplace prototype for connecting piano students and instructors using Drupal, PHP, MySQL, and Cloudways.",
    },
];

export default function ExperienceSection() {
  return (
    <section id="resume" className={styles.section}>
      <div className={styles.dossier}>
        <div className={styles.tab} aria-hidden="true">K. W. STAHL</div>
        <div className={styles.backSheet} aria-hidden="true" />
        <div className={styles.paper}>
          <header className={styles.header}>
            <div className={styles.headerMain}>
              <div className={styles.eyebrow}>EXPERIENCE <span>// TECHNICAL RECORD</span></div>
              <h2 className={styles.title}>Built across <em>disciplines.</em></h2>
              <p className={styles.intro}>I’ve worked across software, science, data, commerce, and leadership. Different problems, same approach: figure out how the system works, find what can be better, and build it.</p>
            </div>
            <div className={styles.identity}>
              <span className={styles.identityPin} aria-hidden="true">●</span>
              <span className={styles.identityLabel}>PERSONNEL FILE</span>
              <strong>KEVIN W. STAHL</strong>
              <span>FULL-STACK / SYSTEMS</span>
              <span>ALAMO, TEXAS</span>
              <span className={styles.identityStamp}>K.STAHL</span>
            </div>
          </header>
          <div className={styles.rule}><span>01 / PROFESSIONAL RECORD</span><span>FIELD NOTES →</span></div>
          <div className={styles.layout}>
            <main className={styles.history}>
              <div className={styles.sectionHeading}><span className={styles.sectionTab}>01 — WORK HISTORY</span><span className={styles.headingNote}>CHRONOLOGICAL / SELECTED</span></div>
              <div className={styles.timeline}>
                {experience.map((item,index) => (
                  <article key={`${item.organization}-${item.role}`} className={styles.job}>
                    <div className={styles.jobIndex}>{String(index+1).padStart(2,"0")}</div>
                    <div className={styles.jobContent}>
                      <div className={styles.jobMeta}><span>{item.period}</span><span>{item.location}</span></div>
                      <h3 className={styles.jobRole}>{item.role}</h3>
                      <div className={styles.organization}>{item.organization}</div>
                      <p className={styles.description}>{item.description}</p>
                      <ul className={styles.highlights}>{item.highlights.map((highlight) => (
                          
<li key={highlight.lead}>
                            <strong className={styles.highlightLead}>{highlight.lead}.</strong>{" "}
                            <span className={styles.highlightText}>{highlight.text}</span>
                          </li>
                        ))}</ul>
                      <div className={styles.tags}>{item.tags.map(tag=><span className={styles.tag} key={tag}>{tag}</span>)}</div>
                    </div>
                  </article>
                ))}
              </div>
            </main>
            <aside className={styles.sidebar}>
              <section className={`${styles.sideCard} ${styles.skillsCard}`}>
                <div className={styles.cardLabel}>02 / TOOLBOX</div>
                <div className={styles.skills}>{skills.map(group=><div className={styles.skillGroup} key={group.label}><div className={styles.skillLabel}>{group.label}</div><div className={styles.skillValues}>{group.values}</div></div>)}</div>
              </section>
              <section className={`${styles.sideCard} ${styles.projectsCard}`}>
                <div className={styles.cardLabel}>03 / SELECTED BUILDS</div>
                <div className={styles.projectList}>{projects.map(project=><div className={styles.project} key={project.code}><div className={styles.projectCode}>{project.code}</div><div><div className={styles.projectName}>{project.name}</div><div className={styles.projectType}>{project.type}</div><p className={styles.projectDescription}>{project.description}</p></div></div>)}</div>
              </section>
              <section className={`${styles.sideCard} ${styles.educationCard}`}>
                <div className={styles.cardLabel}>04 / EDUCATION</div>
                <div className={styles.degree}>B.S. Chemistry</div>
                <div className={styles.school}>The University of Texas<br />Rio Grande Valley</div>
                <div className={styles.educationDetail}>Chemistry · Laboratory Science · Quantitative Analysis</div>
              </section>
              <div className={styles.noteCard}><span className={styles.noteMark}>✳</span><span>SCIENCE → SYSTEMS<br />SYSTEMS → SOFTWARE</span></div>
            </aside>
          </div>
          <footer className={styles.footer}><span>FULL-STACK DEVELOPMENT · SYSTEMS · SCIENCE</span><span>END OF RECORD / K.STAHL</span></footer>
        </div>
      </div>
    </section>
  );
}
