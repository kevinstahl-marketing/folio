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
            "Develop custom Shopify storefronts, themes, product experiences, POS integrations, and e-commerce workflows.",
            "Build full-stack applications and internal tools with PHP, Laravel, Python, JavaScript, TypeScript, React, Next.js, SQL, and modern cloud platforms.",
            "Manage commerce systems spanning Shopify, TikTok Shop, Meta Commerce, Google Ads, Meta Ads, and point-of-sale operations.",
            "Translate business requirements into deployed software, automations, storefronts, analytics, and technical systems.",
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
            "Analyzed forensic evidence using analytical chemistry techniques and GC-MS instrumentation.",
            "Operated and interpreted data through Agilent ChemStation and laboratory information management systems.",
            "Worked extensively with scientific datasets, technical documentation, analytical workflows, and laboratory information systems.",
            "Produced defensible scientific findings under established forensic quality assurance and chain-of-custody procedures.",
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
            "Built Access SQL queries, reports, and data workflows for personnel and organizational information.",
            "Developed Excel VBA automation to reduce repetitive administrative processes and improve reporting workflows.",
            "Worked with enterprise military personnel systems and records including IPPS-A, iPERMS, AFCOS, and PEMS.",
            "Combined personnel-domain knowledge with database querying, spreadsheet automation, data analysis, and systems troubleshooting.",
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
            "Served in leadership assignments including Platoon Leader and Company Executive Officer.",
            "Led teams and coordinated training, personnel, logistics, readiness, and operational requirements.",
            "Managed competing organizational priorities across personnel, equipment, planning, and execution.",
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
        name: "PianoTeacherLink",
        type: "Drupal Marketplace",
        description:
            "Deployed marketplace prototype for connecting piano students and instructors using Drupal, PHP, MySQL, and Cloudways.",
    },
];

export default function ExperienceSection() {
    return (
        <section
            id="resume"
            className={styles.section}
        >
            <div className={styles.paper}>
                <header className={styles.header}>
                    <div>
                        <div className={styles.eyebrow}>
                            EXPERIENCE // RESUME
                        </div>

                        <h2 className={styles.title}>
                            Built across disciplines.
                        </h2>

                        <p className={styles.intro}>
                            I’ve worked across software, science, data, commerce, and leadership.
                            Different problems, same approach: figure out how the system works,
                            find what can be better, and build it.
                        </p>
                    </div>

                    <div className={styles.documentCode}>
                        <span>Kevin W. STAHL</span>
                    </div>
                </header>

                <div className={styles.rule} />

                <div className={styles.layout}>
                    {/* =====================================================
              WORK HISTORY
              ===================================================== */}

                    <div className={styles.history}>
                        <div className={styles.sectionTab}>
                            WORK HISTORY
                        </div>

                        {experience.map((item, index) => (
                            <article
                                key={`${item.organization}-${item.role}`}
                                className={styles.job}
                            >
                                <div className={styles.jobIndex}>
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className={styles.jobContent}>
                                    <div className={styles.jobMeta}>
                                        <span>{item.period}</span>
                                        <span>{item.location}</span>
                                    </div>

                                    <h3 className={styles.jobRole}>
                                        {item.role}
                                    </h3>

                                    <div className={styles.organization}>
                                        {item.organization}
                                    </div>

                                    <p className={styles.description}>
                                        {item.description}
                                    </p>

                                    {item.highlights.length > 0 && (
                                        <ul className={styles.highlights}>
                                            {item.highlights.map((highlight) => (
                                                <li key={highlight}>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className={styles.tags}>
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={styles.tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* =====================================================
              SIDEBAR
              ===================================================== */}

                    <aside className={styles.sidebar}>
                        {/* Skills */}

                        <section className={styles.sideCard}>
                            <div className={styles.cardLabel}>
                                TOOLBOX
                            </div>

                            <div className={styles.skills}>
                                {skills.map((group) => (
                                    <div
                                        key={group.label}
                                        className={styles.skillGroup}
                                    >
                                        <div className={styles.skillLabel}>
                                            {group.label}
                                        </div>

                                        <div className={styles.skillValues}>
                                            {group.values}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}

                        <section
                            className={`${styles.sideCard} ${styles.projectsCard}`}
                        >
                            <div className={styles.cardLabel}>
                                SELECTED BUILDS
                            </div>

                            <div className={styles.projectList}>
                                {projects.map((project) => (
                                    <div
                                        key={project.code}
                                        className={styles.project}
                                    >
                                        <div className={styles.projectCode}>
                                            {project.code}
                                        </div>

                                        <div>
                                            <div className={styles.projectName}>
                                                {project.name}
                                            </div>

                                            <div className={styles.projectType}>
                                                {project.type}
                                            </div>

                                            <p className={styles.projectDescription}>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}

                        <section
                            className={`${styles.sideCard} ${styles.educationCard}`}
                        >
                            <div className={styles.cardLabel}>
                                EDUCATION
                            </div>

                            <div className={styles.degree}>
                                B.S. Chemistry
                            </div>

                            <div className={styles.school}>
                                The University of Texas
                                <br />
                                Rio Grande Valley
                            </div>

                            <div className={styles.educationDetail}>
                                Chemistry · Laboratory Science ·
                                Quantitative Analysis
                            </div>
                        </section>

                        {/* Character card */}

                        <div className={styles.noteCard}>
                            <span className={styles.noteMark}>
                                +
                            </span>

                            <div>
                                SCIENCE → SYSTEMS
                                <br />
                                SYSTEMS → SOFTWARE
                            </div>
                        </div>
                    </aside>
                </div>

                <footer className={styles.footer}>
                    <span>
                        FULL-STACK DEVELOPMENT · SYSTEMS · SCIENCE
                    </span>

                    <span>
                        ALAMO, TEXAS
                    </span>
                </footer>
            </div>
        </section>
    );
}