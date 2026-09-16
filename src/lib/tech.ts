import type { IconType } from "react-icons";

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

export type TechDefinition = {
  icon: IconType;
  color: string;
};

export const tech: Record<string, TechDefinition> = {
  PHP: {
    icon: SiPhp,
    color: "#777BB4",
  },

  Python: {
    icon: SiPython,
    color: "#3776AB",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  "HTML/CSS": {
    icon: SiHtml5,
    color: "#E34F26",
  },

  Laravel: {
    icon: SiLaravel,
    color: "#FF2D20",
  },

  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },

  Remix: {
    icon: SiRemix,
    color: "#000000",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },

  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },

  MariaDB: {
    icon: SiMariadb,
    color: "#003545",
  },

  Supabase: {
    icon: SiSupabase,
    color: "#3FCF8E",
  },

  Redis: {
    icon: SiRedis,
    color: "#DC382D",
  },

  Prisma: {
    icon: SiPrisma,
    color: "#2D3748",
  },

  Linux: {
    icon: SiLinux,
    color: "#FCC624",
  },

  Shopify: {
    icon: SiShopify,
    color: "#7AB55C",
  },

  Liquid: {
    icon: SiShopify,
    color: "#7AB55C",
  },

  Drupal: {
    icon: SiDrupal,
    color: "#0678BE",
  },

  WordPress: {
    icon: SiWordpress,
    color: "#21759B",
  },

  Squarespace: {
    icon: SiSquarespace,
    color: "#000000",
  },

  Vercel: {
    icon: SiVercel,
    color: "#000000",
  },

  "Google Ads": {
    icon: SiGoogleads,
    color: "#4285F4",
  },

  "Meta Ads": {
    icon: SiMeta,
    color: "#0866FF",
  },

  "TikTok Shop": {
    icon: SiTiktok,
    color: "#000000",
  },
};