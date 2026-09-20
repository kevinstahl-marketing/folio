"use client";

import { colors, fonts } from "@/lib/theme";

import {
    Code2,
    Database,
    Layers3,
    ShoppingBag,
    Megaphone,
    Mail,
    Phone,
    ArrowRight,
    ExternalLink,
    MapPin,
    Pin,
    FlaskConical,
    FileSpreadsheet,
    ServerCog,
    Atom,
} from "lucide-react";

import {
    SiPhp,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiLaravel,
    SiReact,
    SiNextdotjs,
    SiRemix,
    SiVite,
    SiMysql,
    SiMariadb,
    SiSupabase,
    SiRedis,
    SiPrisma,
    SiLinux,
    SiShopify,
    SiDrupal,
    SiWordpress,
    SiSquarespace,
    SiVercel,
    SiGoogleads,
    SiMeta,
    SiTiktok,
} from "react-icons/si";

import styles from "./HeroSection.module.css";


/* =========================================================
   SKILL DATA
   ========================================================= */

const skillGroups = [
    {
        label: "01 / Languages",
        icon: Code2,
        rotate: "-1.2deg",
        items: [
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "SQL", icon: Database, color: "#336791" },
            { name: "HTML / CSS", icon: SiHtml5, color: "#E34F26" },
        ],
    },
    {
        label: "02 / Frameworks",
        icon: Layers3,
        rotate: "1deg",
        items: [
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Remix", icon: SiRemix, color: "#000000" },
            { name: "Livewire", icon: Layers3, color: "#FB70A9" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
        ],
    },
    {
        label: "03 / Data + Infra",
        icon: Database,
        rotate: "-0.6deg",
        items: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MariaDB", icon: SiMariadb, color: "#003545" },
            { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
        ],
    },
    {
        label: "04 / Platforms",
        icon: ShoppingBag,
        rotate: "1.3deg",
        items: [
            { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
            { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
            { name: "WordPress", icon: SiWordpress, color: "#21759B" },
            { name: "Squarespace", icon: SiSquarespace, color: "#000000" },
            { name: "Vercel", icon: SiVercel, color: "#000000" },
            { name: "Cloudways", icon: Database, color: "#2C39BD" },
        ],
    },
    {
        label: "05 / Commerce + Ads",
        icon: Megaphone,
        rotate: "-0.9deg",
        items: [
            { name: "Shopify POS", icon: SiShopify, color: "#7AB55C" },
            { name: "TikTok Shop", icon: SiTiktok, color: "#000000" },
            { name: "Meta Commerce", icon: SiMeta, color: "#0866FF" },
            { name: "Google Ads", icon: SiGoogleads, color: "#4285F4" },
            { name: "Meta Ads", icon: SiMeta, color: "#0866FF" },
        ],
    },
    {
        label: "06 / Scientific + Systems",
        icon: Atom,
        rotate: "0.7deg",
        items: [
            {
                name: "VBA",
                icon: FileSpreadsheet,
                color: "#217346",
            },
            {
                name: "GC-MS",
                icon: Atom,
                color: "#7255A3",
            },
            {
                name: "ChemStation",
                icon: FlaskConical,
                color: "#D58B28",
            },
            {
                name: "Access SQL",
                icon: Database,
                color: "#A4373A",
            },
            {
                name: "Excel Automation",
                icon: FileSpreadsheet,
                color: "#217346",
            },
            {
                name: "LIMS",
                icon: ServerCog,
                color: "#3A5EC8",
            },
        ],
    },
];


/* =========================================================
   HERO
   ========================================================= */

export default function HeroSection() {
    const scrollToCarousel = () => {
        document
            .getElementById("carousel")
            ?.scrollIntoView({ behavior: "smooth" });
    };
const scrollToResume = () => {
    document
        .getElementById("resume")
        ?.scrollIntoView({ behavior: "smooth" });
};
    return (
        <section
            className={styles.hero}
            style={{
                position: "relative",
                minHeight: "100svh",
                padding: "72px clamp(44px, 5vw, 88px)",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* =====================================================
                ATMOSPHERE
                ===================================================== */}

            <div
                className={styles.driftOne}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "-15%",
                    left: "-8%",
                    width: "52vw",
                    height: "52vw",
                    maxWidth: 720,
                    maxHeight: 720,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(205,185,130,0.22) 0%, transparent 68%)",
                    pointerEvents: "none",
                }}
            />

            <div
                className={styles.driftTwo}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: "-12%",
                    bottom: "-15%",
                    width: "48vw",
                    height: "48vw",
                    maxWidth: 620,
                    maxHeight: 620,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(58,94,200,0.10) 0%, transparent 68%)",
                    pointerEvents: "none",
                }}
            />


            {/* =====================================================
                MAIN HERO GRID
                Grid columns / gaps are controlled by CSS.
                ===================================================== */}

            <div
                className={styles.heroGrid}
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 1500,
                    margin: "0 auto",
                    display: "grid",
                }}
            >
                {/* =================================================
                    LEFT — IDENTITY
                    ================================================= */}

                <aside
                    className={styles.identity}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                    }}
                >
                    {/* Portrait */}

                    <div
                        className={styles.portraitWrapper}
                        style={{
                            position: "relative",
                            marginBottom: 28,
                        }}
                    >
                        {/* Offset shadow */}

                        <div
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                inset: "10px -10px -10px 10px",
                                background: colors.ink,
                                borderRadius: 4,
                            }}
                        />

                        {/* Portrait image */}

                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                border: `2px solid ${colors.ink}`,
                                borderRadius: 4,
                                background: "#eee7db",
                                aspectRatio: "4 / 5",
                            }}
                        >
                            <img
                                src="/images/hero/kevin.jpg"
                                alt="Portrait of Kevin Stahl"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>

                        {/* Floating pin */}

                        <div
                            className={styles.accentFloat}
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                top: -14,
                                right: 120,
                                zIndex: 5,
                                color: colors.accent,
                                filter:
                                    "drop-shadow(2px 3px 0 rgba(26,23,20,0.18))",
                                transform: "rotate(18deg)",
                            }}
                        >
                            <Pin
                                size={30}
                                strokeWidth={1.4}
                                fill={colors.accent}
                            />
                        </div>
                    </div>


                    {/* Identity text */}

                    <div style={{ marginBottom: 26 }}>
                        <h1
                            style={{
                                margin: 0,
                                fontFamily: fonts.display,
                                fontStyle: "italic",
                                fontSize: "clamp(36px, 4vw, 56px)",
                                lineHeight: 0.95,
                                color: colors.ink,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Kevin Stahl
                        </h1>

                        <p
                            style={{
                                margin: "12px 0 0",
                                fontFamily: fonts.sans,
                                fontSize: 14,
                                fontWeight: 700,
                                color: colors.ink,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                            }}
                        >
                            Full-Stack Developer
                        </p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 7,
                                marginTop: 8,
                                opacity: 0.58,
                                fontFamily: fonts.sans,
                                fontSize: 13,
                                color: colors.ink,
                            }}
                        >
                            <MapPin size={14} aria-hidden="true" />
                            Alamo, Texas
                        </div>
                    </div>


                    {/* Actions */}

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 10,
                            marginBottom: 24,
                        }}
                    >
                        <button
                            className={styles.primaryButton}
                            onClick={scrollToCarousel}
                            style={{
                                fontFamily: fonts.sans,
                                fontWeight: 800,
                                fontSize: 14,
                                color: "white",
                                background: colors.ink,
                                border: `2px solid ${colors.ink}`,
                                borderRadius: 3,
                                padding: "12px 18px",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                boxShadow:
                                    "4px 4px 0 rgba(26,23,20,0.16)",
                            }}
                        >
                            View Work
                            <ArrowRight size={15} aria-hidden="true" />
                        </button>

                        <button
    className={styles.secondaryButton}
    onClick={scrollToResume}
    style={{
        fontFamily: fonts.sans,
        fontWeight: 700,
        fontSize: 14,
        color: colors.ink,
        border: `2px solid ${colors.ink}`,
        borderRadius: 3,
        padding: "10px 16px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.56)",
        cursor: "pointer",
    }}
>
    Résumé
    <ArrowRight size={14} aria-hidden="true" />
</button>
                    </div>


                    {/* Contact */}

                    <div
                        style={{
                            display: "grid",
                            gap: 10,
                            fontFamily: fonts.sans,
                            fontSize: 14,
                        }}
                    >
                        <a
                            className={styles.contactLink}
                            href="tel:+19568788083"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                color: colors.ink,
                                textDecoration: "none",
                            }}
                        >
                            <Phone size={15} aria-hidden="true" />
                            (956) 878-8083
                        </a>

                        <a
                            className={styles.contactLink}
                            href="mailto:kevin.sthl97@gmail.com"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                color: colors.ink,
                                textDecoration: "none",
                            }}
                        >
                            <Mail size={15} aria-hidden="true" />
                            kevin.sthl97@gmail.com
                        </a>
                    </div>
                </aside>


                {/* =================================================
                    CENTER — EDITORIAL STATEMENT
                    ================================================= */}

                <div
                    style={{
                        minWidth: 0,
                        maxWidth: 520,
                    }}
                >
                    <div
                        style={{
                            fontFamily: fonts.mono,
                            fontSize: 12,
                            fontWeight: 700,
                            lineHeight: 1.2,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: colors.ink,
                            opacity: 0.8,
                            marginBottom: 22,
                        }}
                    >
                        Developer · Commerce · Systems
                    </div>

                    <h2
                        style={{
                            margin: 0,
                            fontFamily: fonts.display,
                            fontStyle: "italic",
                            fontSize: "clamp(46px, 5.4vw, 82px)",
                            lineHeight: 0.94,
                            letterSpacing: "-0.04em",
                            color: colors.ink,
                        }}
                    >
                        I build digital products end to end.
                    </h2>

                    <div
                        aria-hidden="true"
                        style={{
                            width: 56,
                            height: 4,
                            background: colors.accent,
                            margin: "28px 0 24px",
                            transform: "rotate(-2deg)",
                        }}
                    />

                    <p
                        style={{
                            margin: 0,
                            fontFamily: fonts.sans,
                            fontSize: "clamp(15px, 1.25vw, 18px)",
                            lineHeight: 1.75,
                            color: colors.ink,
                            opacity: 0.67,
                            maxWidth: 470,
                        }}
                    >
                        I build websites, apps, and commerce systems that help businesses actually run and grow. That includes full stack development, Shopify and e-commerce, POS systems, online marketplaces, digital ads, analytics, and the custom tools that connect it all.

                    </p>
                </div>


                {/* =================================================
    RIGHT — SKILLS
    Printed technical index / pop-up cards
    ================================================= */}

                <div className={styles.skillsGrid}>
                    {skillGroups.map((group, index) => {
                        const GroupIcon = group.icon;

                        return (
                            <section
                                key={group.label}
                                className={styles.skillCard}
                                style={{
                                    "--skill-rotation": group.rotate,
                                } as React.CSSProperties}
                            >
                                {/* push pin */}
                                <div
                                    className={styles.skillPin}
                                    aria-hidden="true"
                                >
                                    <Pin
                                        size={27}
                                        strokeWidth={1.5}
                                        fill="currentColor"
                                    />
                                </div>

                                {/* paper */}
                                <div className={styles.skillPaper}>
                                    <header className={styles.skillHeader}>
                                        <div className={styles.skillIcon}>
                                            <GroupIcon
                                                size={16}
                                                strokeWidth={1.8}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h3 className={styles.skillTitle}>
                                            {group.label}
                                        </h3>

                                        <span
                                            className={styles.skillMark}
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </header>

                                    <div className={styles.skillRule} />

                                    <div className={styles.techGrid}>
                                        {group.items.map((item) => {
                                            const TechIcon = item.icon;

                                            return (
                                                <div
                                                    className={styles.techItem}
                                                    key={item.name}
                                                >
                                                    <TechIcon
                                                        className={styles.techIcon}
                                                        size={19}
                                                        aria-hidden="true"
                                                        style={{
                                                            color: item.color,
                                                        }}
                                                    />

                                                    <span>{item.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div
                                        className={styles.skillFooter}
                                        aria-hidden="true"
                                    >
          
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}