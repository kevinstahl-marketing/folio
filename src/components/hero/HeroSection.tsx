"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { colors, fonts } from "@/lib/theme";

export default function HeroSection() {
    const w = useWindowWidth();

    const mobile = w < 640;
    const tablet = w < 1024;

    const scrollToCarousel = () => {
        document
            .getElementById("carousel")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            style={{
                position: "relative",
                minHeight: "100svh",
                display: "flex",
                flexDirection: tablet ? "column" : "row",
                alignItems: "center",
                padding: mobile
                    ? "80px 24px 60px"
                    : tablet
                        ? "100px 48px 60px"
                        : "0 clamp(48px,6vw,100px)",
                overflow: "hidden",
            }}
        >
            {/* Atmospheric floaties */}
            <div
                style={{
                    position: "absolute",
                    top: "-15%",
                    left: "-8%",
                    width: "55vw",
                    height: "55vw",
                    maxWidth: 700,
                    maxHeight: 700,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(205,185,130,0.22) 0%, transparent 68%)",
                    animation: "folioDrift 32s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "-10%",
                    right: "-5%",
                    width: "45vw",
                    height: "45vw",
                    maxWidth: 560,
                    maxHeight: 560,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(58,94,200,0.1) 0%, transparent 68%)",
                    animation: "folioDrift 40s ease-in-out infinite reverse",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    right: "28%",
                    width: "30vw",
                    height: "30vw",
                    maxWidth: 360,
                    maxHeight: 360,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(190,62,30,0.07) 0%, transparent 68%)",
                    animation: "folioDrift 26s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />

            {/* Floating formula fragment */}
            {!mobile && (
                <div
                    style={{
                        position: "absolute",
                        right: tablet ? "5%" : "44%",
                        bottom: "18%",
                        animation: "folioFloat 10s 1s ease-in-out infinite",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            background: "rgba(255,255,255,0.88)",
                            border: "1.5px solid rgba(58,94,200,0.2)",
                            boxShadow: "4px 4px 0 rgba(58,94,200,0.14)",
                            borderRadius: 5,
                            padding: "12px 16px",
                            width: 160,
                        }}
                    >
                        <div
                            style={{
                                fontFamily: fonts.mono,
                                fontSize: 8,
                                color: colors.projects.ezcalcs,
                                letterSpacing: "0.1em",
                                marginBottom: 6,
                            }}
                        >
                            formula.py
                        </div>

                        <div
                            style={{
                                fontFamily: fonts.mono,
                                fontSize: 10.5,
                                color: colors.ink,
                                lineHeight: 1.8,
                                opacity: 0.8,
                            }}
                        >
                            <div>M_n = A_s · f_y</div>
                            <div style={{ paddingLeft: 10, opacity: 0.55 }}>
                                · (d – a/2)
                            </div>
                            <div
                                style={{
                                    color: colors.projects.ezcalcs,
                                    opacity: 0.7,
                                }}
                            >
                                # → 124.8 kN·m
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating shop tag */}
            {!tablet && (
                <div
                    style={{
                        position: "absolute",
                        right: "42%",
                        top: "22%",
                        transform: "rotate(3.5deg)",
                        animation: "folioFloat 13s 3s ease-in-out infinite",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            background: "rgba(255,255,255,0.85)",
                            border: "1.5px solid rgba(190,62,30,0.2)",
                            boxShadow: "4px 4px 0 rgba(190,62,30,0.12)",
                            borderRadius: 4,
                            padding: "8px 14px",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: fonts.mono,
                                fontSize: 8,
                                color: colors.projects.laConcheria,
                                letterSpacing: "0.1em",
                                marginBottom: 3,
                            }}
                        >
                            SHOPIFY
                        </div>

                        <div
                            style={{
                                fontFamily: fonts.sans,
                                fontSize: 12,
                                color: colors.ink,
                                fontWeight: 600,
                            }}
                        >
                            La Concheria
                        </div>

                        <div
                            style={{
                                fontFamily: fonts.sans,
                                fontSize: 11,
                                color: colors.ink,
                                opacity: 0.5,
                            }}
                        >
                            Custom theme ↗
                        </div>
                    </div>
                </div>
            )}

            {/* Hero text */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: tablet ? "100%" : "52%",
                    paddingTop: 0,
                }}
            >
                <div
                    style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        color: colors.ink,
                        opacity: 0.35,
                        letterSpacing: "0.2em",
                        marginBottom: mobile ? 32 : 52,
                    }}
                >
                    FOLIO
                </div>

                <h1
                    style={{
                        fontFamily: fonts.display,
                        fontStyle: "italic",
                        fontSize: "clamp(56px, 8vw, 110px)",
                        lineHeight: 0.88,
                        color: colors.ink,
                        letterSpacing: "-0.03em",
                        margin: "0 0 24px",
                    }}
                >
                    Kevin
                    <br />
                    Stahl
                </h1>

                <p
                    style={{
                        fontFamily: fonts.sans,
                        fontWeight: 500,
                        fontSize: "clamp(14px, 1.4vw, 18px)",
                        color: colors.ink,
                        opacity: 0.5,
                        letterSpacing: "0.01em",
                        margin: "0 0 22px",
                    }}
                >
                    Full-Stack Developer · Digital Commerce · Systems
                </p>

                <div
                    style={{
                        width: 38,
                        height: 2,
                        background: colors.accent,
                        opacity: 0.75,
                        marginBottom: 26,
                    }}
                />

                <p
                    style={{
                        fontFamily: fonts.sans,
                        fontSize: "clamp(14px, 1.2vw, 17px)",
                        color: colors.ink,
                        opacity: 0.62,
                        lineHeight: 1.8,
                        maxWidth: 480,
                        margin: "0 0 44px",
                    }}
                >
                    I build full-stack web applications, digital commerce experiences,
                    and custom engineering systems — from database design to deployed
                    product.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <button
                        onClick={scrollToCarousel}
                        style={{
                            fontFamily: fonts.sans,
                            fontWeight: 700,
                            fontSize: 15,
                            color: "white",
                            background: colors.ink,
                            border: `2px solid ${colors.ink}`,
                            borderRadius: 3,
                            padding: "13px 30px",
                            cursor: "pointer",
                            letterSpacing: "0.04em",
                            transition: "background 0.15s, transform 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#2a2220";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = colors.ink;
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        View Work →
                    </button>

                    <button
                        style={{
                            fontFamily: fonts.sans,
                            fontWeight: 500,
                            fontSize: 15,
                            color: colors.ink,
                            background: "transparent",
                            border: "1.5px solid rgba(26,23,20,0.22)",
                            borderRadius: 3,
                            padding: "12px 24px",
                            cursor: "pointer",
                            opacity: 0.75,
                            letterSpacing: "0.01em",
                            transition: "opacity 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "0.75";
                        }}
                    >
                        Resume ↗
                    </button>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginTop: 52,
                        opacity: 0.3,
                    }}
                >
                    <div
                        style={{
                            width: 1,
                            height: 24,
                            background: colors.ink,
                        }}
                    />

                    <span
                        style={{
                            fontFamily: fonts.mono,
                            fontSize: 10,
                            color: colors.ink,
                            letterSpacing: "0.14em",
                        }}
                    >
                        SCROLL TO BROWSE WORK
                    </span>
                </div>
            </div>

            {/* Hero right side: stats on desktop */}
            {!tablet && (
                <div
                    style={{
                        position: "absolute",
                        right: "clamp(40px,5vw,80px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 28,
                        zIndex: 1,
                    }}
                >
                    {[
                        ["8+", "Years\nbuilding"],
                        ["40+", "Engineers\nserved"],
                        ["3", "Products\nshipped"],
                    ].map(([n, l]) => (
                        <div key={n} style={{ textAlign: "right" }}>
                            <div
                                style={{
                                    fontFamily: fonts.display,
                                    fontStyle: "italic",
                                    fontSize: 52,
                                    color: colors.ink,
                                    opacity: 0.12,
                                    lineHeight: 1,
                                }}
                            >
                                {n}
                            </div>

                            <div
                                style={{
                                    fontFamily: fonts.mono,
                                    fontSize: 9,
                                    color: colors.ink,
                                    opacity: 0.28,
                                    letterSpacing: "0.08em",
                                    lineHeight: 1.5,
                                }}
                            >
                                {l.replace("\n", "\n")}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
