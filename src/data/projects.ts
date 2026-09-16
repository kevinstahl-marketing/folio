export type ProjectId = "ezc" | "lca" | "ptl";

export type ProjectMedia = {
  src: string;
  alt: string;

  slot: "primary" | "secondary";

  fit?: "cover" | "contain";
  position?: string;

  rotation?: number;
  scale?: number;

  frame?: "browser" | "phone" | "plain";
};

export type ProjectLinks = {
  live?: string;
  github?: string;
};

export type Project = {
  id: ProjectId;
  num: string;
  accent: string;
  bg: string;
  title: string;
  sub: string;

  // NEW
  summary: string;
  media: ProjectMedia[];
  links?: ProjectLinks;

  role: string;
  roleDetail: string;

  result: string;
  resultDetail: string;

  stack: string[];
  bullets: string[];

  extra?: {
    label: string;
    body: string;
  };

  mockupLeft?: boolean;
};

export const projects: Project[] = [
  {
    id: "ezc",
    num: "02",
    accent: "#3a5ec8",
    bg: "#edf0f8",

    title: "EZCalcs",
    sub: "ENGINEERING CALCULATOR PLATFORM",

    role: "Sole Developer",
    roleDetail: "8 months · concept to production",
    summary:
      "A formula-driven engineering calculation platform built around reusable formulas, unit-aware inputs, and symbolic computation.",

    media: [],

    links: {},

    result: "40+ active engineers",
    resultDetail: "Deployed to production",

    stack: [
      "Laravel",
      "Python",
      "MySQL",
      "Livewire",
      "PHP",
      "TailwindCSS",
    ],

    bullets: [
      "Symbolic formula engine using Python + SymPy for real-time computation",
      "Laravel + Livewire UI with live variable input and instant result rendering",
      "Relational MySQL schema for formulas, unit systems, and calculation history",
      "Formula template sharing and team collaboration features",
    ],

    extra: {
      label: "Architecture details",
      body: "User submits a formula expression and variable values via Livewire → Laravel dispatches a Python subprocess running SymPy → result is returned as JSON and rendered inline. Formulas are stored as structured JSON blobs in MySQL for portability and versioning.",
    },
  },

  {
    id: "lca",
    num: "03",
    accent: "#be3e1e",
    bg: "#faf5ef",

    title: "La Concheria",
    sub: "SHOPIFY E-COMMERCE · SEAFOOD BRAND",
    summary:
      "A custom Shopify commerce experience built around La Concheria's brand, products, and day-to-day e-commerce operations.",

    media: [
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        alt: "Temporary ecommerce preview",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "center",
        rotation: -1.5,
        scale: 0.98,
      },
      {
        src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80",
        alt: "Temporary mobile commerce preview",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "center",
        rotation: 3,
        scale: 1,
      },
    ],

    links: {
      live: "https://example.com",
      github: "https://github.com/username/repo",
    },

    role: "Lead Developer",
    roleDetail: "Full build · brand to launch",

    result: "Custom Shopify store",
    resultDetail: "Live · conversion-optimized",

    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML/CSS",
    ],

    bullets: [
      "Custom Liquid theme built from scratch to match premium brand identity",
      "Editorial product storytelling sections with photography-led layout",
      "Conversion-optimized cart, checkout flow, and upsell components",
      "Shopify metafields for provenance, sustainability, and sourcing data",
    ],

    extra: {
      label: "Challenges",
      body: "The client had high expectations for visual fidelity from day one. Translating print-quality brand materials into a responsive Shopify theme required meticulous CSS work and custom section schemas. Metafields were extended to support sustainability certifications per product SKU.",
    },

    mockupLeft: true,
  },

  {
    id: "ptl",
    num: "04",
    accent: "#4a3f9a",
    bg: "#f2f0fa",

    title: "PianoTeacher​Link",
    sub: "DRUPAL MARKETPLACE · MUSIC EDUCATION",
    summary:
      "A Drupal marketplace prototype designed to connect piano students with instructors through structured profiles and discovery.",

    media: [
      {
        src: "/images/projects/ezcalcs/main.png",
        alt: "EZCalcs engineering calculator platform",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "top",
        rotation: -1.4,
      },
      {
        src: "/images/projects/ezcalcs/calculator.png",
        alt: "EZCalcs calculator interface",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "top",
        rotation: 3.2,
        scale: 0.96,
      },
    ],

    links: {},
    role: "Full-Stack Developer",
    roleDetail: "Architecture + full build",

    result: "Marketplace live",
    resultDetail: "Teacher + student platform",

    stack: [
      "Drupal",
      "PHP",
      "MySQL",
      "JavaScript",
    ],

    bullets: [
      "Custom Drupal content types for teacher profiles and student booking requests",
      "Geolocation-based teacher search using MySQL spatial functions",
      "Booking request workflow with email notifications and admin approval",
      "Admin dashboard for teacher verification and platform management",
    ],

    extra: {
      label: "Architecture",
      body: "Built on Drupal's entity and field API to model teachers, lessons, and booking requests as structured content. Custom modules handle geolocation queries. The theming layer uses a custom subtheme with component-level CSS scoping.",
    },
  },
];