
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

/* =========================================================
   FONTS
   ========================================================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   SITE CONFIGURATION
   ========================================================= */

const siteUrl = "https://kevinstahl.com";

const siteName = "Kevin Stahl | Full-Stack Developer";

const siteDescription =
  "Kevin Stahl is a full-stack developer building web applications, e-commerce experiences, and custom systems. Explore selected projects, engineering work, and professional experience.";

// New image URL to bypass old social preview caches.
// File location: public/folio-preview.jpg

const socialImage = `${siteUrl}/folio-preview.jpg`;

/* =========================================================
   SEO / SOCIAL SHARING
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: "%s | Kevin Stahl",
  },

  description: siteDescription,

  applicationName: "Kevin Stahl — Portfolio",

  authors: [
    {
      name: "Kevin Stahl",
      url: siteUrl,
    },
  ],

  creator: "Kevin Stahl",

  publisher: "Kevin Stahl",

  keywords: [
    "Kevin Stahl",
    "Full-Stack Developer",
    "Software Developer",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "Python",
    "Shopify",
    "Drupal",
    "E-Commerce Development",
    "Software Engineering",
    "Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  /* =========================================================
     OPEN GRAPH — LINKEDIN / FACEBOOK / DISCORD
     ========================================================= */

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName: "Kevin Stahl — Portfolio",

    title: siteName,

    description:
      "Full-stack development, e-commerce, and custom systems. Explore my projects and engineering work.",

    images: [
      {
        url: socialImage,

        width: 1200,
        height: 630,

        alt: "Kevin Stahl — Full-Stack Developer",

        type: "image/jpeg",
      },
    ],
  },

  /* =========================================================
     TWITTER / X
     ========================================================= */

  twitter: {
    card: "summary_large_image",

    title: siteName,

    description:
      "Full-stack development, e-commerce, and custom systems.",

    images: [
      {
        url: socialImage,

        width: 1200,
        height: 630,

        alt: "Kevin Stahl — Full-Stack Developer",
      },
    ],
  },

  /* =========================================================
     SEARCH ENGINE INDEXING
     ========================================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* =========================================================
   VIEWPORT
   ========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}