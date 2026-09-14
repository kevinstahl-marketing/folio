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
    Pin
} from "lucide-react";

import {
    SiPhp,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,

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
                    { name: "Laravel", icon: SiLaravel },
                    { name: "React", icon: SiReact },
                    { name: "Next.js", icon: SiNextdotjs },
                    { name: "Remix", icon: SiRemix },
                    { name: "Livewire", icon: Layers3 },
                    { name: "Vite", icon: SiVite },
                ],
    },
{
    label: "03 / Data + Infra",
        icon: Database,
            rotate: "-0.6deg",
                items: [
                    { name: "MySQL", icon: SiMysql },
                    { name: "MariaDB", icon: SiMariadb },
                    { name: "Supabase", icon: SiSupabase },
                    { name: "Redis", icon: SiRedis },
                    { name: "Prisma", icon: SiPrisma },
                    { name: "Linux", icon: SiLinux },
                ],
    },
{
    label: "04 / Platforms",
        icon: ShoppingBag,
            rotate: "1.3deg",
                items: [
                    { name: "Shopify", icon: SiShopify },
                    { name: "Drupal", icon: SiDrupal },
                    { name: "WordPress", icon: SiWordpress },
                    { name: "Squarespace", icon: SiSquarespace },
                    { name: "Vercel", icon: SiVercel },
                    { name: "Cloudways", icon: Database },
                ],
    },
{
    label: "05 / Commerce + Ads",
        icon: Megaphone,
            rotate: "-0.9deg",
                items: [
                    { name: "Shopify POS", icon: SiShopify },
                    { name: "TikTok Shop", icon: SiTiktok },
                    { name: "Meta Commerce", icon: SiMeta },
                    { name: "Google Ads", icon: SiGoogleads },
                    { name: "Meta Ads", icon: SiMeta },
                ],
    },
];

export default function HeroSection() {
    const scrollToCarousel = () => {
        document
            .getElementById("carousel")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className={styles.hero}
            style={{
                position: "relative",
                minHeight: "100svh",
                overflow: "hidden",
                padding: "72px clamp(44px, 5vw, 88px)",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Atmospheric background */}
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
                aria-hidden="true"
                className={styles.driftTwo}
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

            {/* Main hero layout */}
            <div
                className={styles.heroGrid}
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: 1500,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns:
                        "minmax(240px, 0.85fr) minmax(320px, 1fr) minmax(440px, 1.45fr)",
                    gap: "clamp(36px, 5vw, 78px)",
                    alignItems: "center",
                }}
            >
                {/* LEFT / identity */}
                <aside
                    className={styles.identity}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                    }}
                >
                    <div
                        className={styles.portraitWrapper}
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 300,
                            marginBottom: 28,
                        }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                inset: "10px -10px -10px 10px",
                                background: colors.ink,
                                borderRadius: 4,
                            }}
                        />

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
                                src="/images/kevin-portrait.jpg"
                                alt="Portrait of Kevin Stahl"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>

                        <div
                            className={styles.accentFloat}
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                top: -14,
                                right: 120,
                                zIndex: 5,
                                color: colors.accent,
                                filter: "drop-shadow(2px 3px 0 rgba(26,23,20,0.18))",
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

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 10,
                            marginBottom: 24,
                        }}
                    >
                        <button
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
                                boxShadow: "4px 4px 0 rgba(26,23,20,0.16)",
                            }}
                        >
                            View Work
                            <ArrowRight size={15} aria-hidden="true" />
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                fontFamily: fonts.sans,
                                fontWeight: 700,
                                fontSize: 14,
                                color: colors.ink,
                                textDecoration: "none",
                                border: `2px solid ${colors.ink}`,
                                borderRadius: 3,
                                padding: "10px 16px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(255,255,255,0.56)",
                            }}
                        >
                            Résumé
                            <ExternalLink size={14} aria-hidden="true" />
                        </a>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gap: 10,
                            fontFamily: fonts.sans,
                            fontSize: 14,
                        }}
                    >
                        <a
                            href="tel:+1956XXXXXXX"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                color: colors.ink,
                                textDecoration: "none",
                            }}
                        >
                            <Phone size={15} aria-hidden="true" />
                            (956) XXX-XXXX
                        </a>

                        <a
                            href="mailto:your@email.com"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                color: colors.ink,
                                textDecoration: "none",
                            }}
                        >
                            <Mail size={15} aria-hidden="true" />
                            your@email.com
                        </a>
                    </div>
                </aside>
                {/* CENTER / editorial statement */}
                <div
                    style={{
                        alignSelf: "center",
                        maxWidth: 520,
                    }}
                >
                    <div
                        style={{
                            fontFamily: fonts.mono,
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: colors.ink,
                            opacity: 0.42,
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
                        I design and build full-stack web applications, commerce
                        experiences, and custom systems — from database architecture
                        and application logic through deployment and customer-facing
                        interfaces.
                    </p>
                </div>

                {/* RIGHT / skill groups */}
                <div
                    className={styles.skillsGrid}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: 18,
                        alignItems: "start",
                    }}
                >
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <section
                                key={group.label}
                                className={styles.skillCard}
                                style={{
                                    position: "relative",
                                    padding: "22px 22px 21px",
                                    border: `2px solid ${colors.ink}`,
                                    borderRadius: 4,
                                    background: "rgba(250, 247, 241, 0.88)",
                                    boxShadow:
                                        index % 2 === 0
                                            ? "5px 5px 0 rgba(26,23,20,0.12)"
                                            : "3px 5px 0 rgba(58,94,200,0.11)",
                                    transform: `rotate(${group.rotate})`,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 9,
                                        marginBottom: 16,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 30,
                                            height: 30,
                                            display: "grid",
                                            placeItems: "center",
                                            border: `1.5px solid ${colors.ink}`,
                                            borderRadius: 3,
                                            background:
                                                index % 2 === 0
                                                    ? "rgba(205,185,130,0.22)"
                                                    : "rgba(58,94,200,0.08)",
                                        }}
                                    >
                                        <Icon size={16} aria-hidden="true" />
                                    </div>

                                    <h3
                                        style={{
                                            margin: 0,
                                            fontFamily: fonts.mono,
                                            fontSize: 10,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: colors.ink,
                                        }}
                                    >
                                        {group.label}
                                    </h3>
                                </div>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(2, minmax(0, 1fr))",
                                        gap: "12px 18px",
                                    }}
                                >
                                    {group.items.map((item) => {
                                        const TechIcon = item.icon;

                                        return (
                                            <div
                                                key={item.name}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 9,
                                                    minWidth: 0,
                                                    fontFamily: fonts.sans,
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    lineHeight: 1.25,
                                                    color: colors.ink,
                                                }}
                                            >
                                                <TechIcon
                                                    size={15}
                                                    aria-hidden="true"
                                                    style={{
                                                        flex: "0 0 auto",
                                                        opacity: 0.72,
                                                        color: item.color,
                                                    }}
                                                />

                                                <span>{item.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/*
                TEMP DIAGNOSTIC:
                No <style jsx> block.

                If this compiles, the previous styled-jsx block is the culprit.
                Responsive CSS is intentionally absent for this test.
            */}
        </section >
    );
}