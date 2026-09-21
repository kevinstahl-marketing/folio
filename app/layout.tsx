
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://YOUR-FOLIO-URL.vercel.app";

const siteName = "Kevin Stahl | Full-Stack Developer";

const siteDescription =
  "Kevin Stahl is a full-stack developer building web applications, e-commerce experiences, and custom systems. Explore selected projects, engineering work, and professional experience.";

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
    "E-Commerce Development",
    "Software Engineering",
    "Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName: "Kevin Stahl — Portfolio",

    title: siteName,

    description:
      "Digital products. Commerce. Systems. Explore my selected projects and engineering work.",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,
        height: 630,

        alt: "Kevin Stahl — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteName,

    description:
      "Digital products. Commerce. Systems.",

    images: ["/og-image.jpg"],
  },


  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}