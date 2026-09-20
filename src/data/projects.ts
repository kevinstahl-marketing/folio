export type ProjectId =
  | "ezc"
  | "lca"
  | "ptl"
  | "tmd-hr"
  | "tmd-pay"
  | "dps-gcms"
  | "rua"
  | "sculpted-serenity"
  | "mariachi"
  | "stahl-marketing";

export type ProjectMedia = {
  src: string;
  alt: string;

  slot: "primary" | "secondary";

  fit?: "cover" | "contain";
  position?: string;

  rotation?: number;
  scale?: number;
  imageScale?: number;

  frame?: "browser" | "phone" | "plain";
};

export type ProjectPreview = {
  media?: "primary" | "secondary";
  fit?: "cover" | "contain";
  position?: string;
  scale?: number;
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
  summary: string;

  preview: ProjectPreview;
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


/* =========================================================
   FEATURED PROJECTS
   ========================================================= */

export const projects: Project[] = [
  /* ---------------------------------------------------------
     EZCALCS
     --------------------------------------------------------- */

  {
    id: "ezc",
    num: "01",

    accent: "#3a5ec8",
    bg: "#edf0f8",

    title: "EZCalcs",
    sub: "ENGINEERING CALCULATOR PLATFORM",

    summary:
      "A formula-driven engineering calculation platform built around reusable formulas, unit-aware inputs, and symbolic computation.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/ezcalcs/main.png",
        alt: "EZCalcs engineering calculator platform",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/ezcalcs/calculator.png",
        alt: "EZCalcs engineering calculator interface",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.88,
      },
    ],

    links: {},

    role: "Sole Developer",
    roleDetail: "8 months · concept to production",

    result: "40+ active engineers",
    resultDetail: "Deployed to production",

    stack: [
      "Laravel",
      "Python",
      "SymPy",
      "MySQL",
      "Livewire",
      "PHP",
      "TailwindCSS",
    ],

    bullets: [
      "Built a symbolic formula engine using Python and SymPy for engineering calculations",
      "Developed a Laravel + Livewire interface for dynamic variable input and result rendering",
      "Designed relational data models for formulas, variables, units, and calculation metadata",
      "Built reusable formula definitions so calculators could be created from structured data rather than hard-coded pages",
    ],

    extra: {
      label: "Architecture",
      body:
        "Calculation requests move from Livewire into Laravel, which dispatches a Python process running SymPy. The solver evaluates the expression and returns structured results for rendering in the application. Formula definitions and variable metadata are stored in MySQL so calculator pages can be generated from reusable data.",
    },
  },

  /* ---------------------------------------------------------
     LA CONCHERIA
     --------------------------------------------------------- */

  {
    id: "lca",
    num: "02",

    accent: "#be3e1e",
    bg: "#faf5ef",

    title: "La Concheria",
    sub: "SHOPIFY E-COMMERCE · CAFÉ + BAKERY",

    summary:
      "A customized Shopify commerce experience for a Rio Grande Valley café and bakery, connecting its brand, product catalog, online storefront, and day-to-day commerce operations.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/la-concheria/main.jpg",
        alt: "La Concheria Shopify storefront",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/la-concheria/secondary.png",
        alt: "La Concheria product and ecommerce experience",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.88,
      },
    ],

    links: {},

    role: "Lead Developer",
    roleDetail: "Commerce implementation + customization",

    result: "Production Shopify store",
    resultDetail: "Storefront + product operations",

    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML/CSS",
      "Shopify POS",
      "Google Ads",
    ],

    bullets: [
      "Customized the Shopify storefront around La Concheria's café and bakery brand",
      "Built product presentation and ordering experiences for a mixed local and shippable catalog",
      "Implemented metafield-driven storefront behavior for products with different fulfillment requirements",
      "Supported commerce operations across Shopify, POS, shipping, and digital advertising",
    ],

    extra: {
      label: "Commerce system",
      body:
        "The storefront supports a business with both local café operations and products that can be sold online. Shopify metafields and theme logic are used to adapt product behavior, messaging, and calls to action based on fulfillment requirements while keeping the customer-facing experience consistent.",
    },

    mockupLeft: true,
  },

  /* ---------------------------------------------------------
     PIANO TEACHER LINK
     --------------------------------------------------------- */

  {
    id: "ptl",
    num: "03",

    accent: "#4a3f9a",
    bg: "#f2f0fa",

    title: "PianoTeacherLink",
    sub: "DRUPAL MARKETPLACE · MUSIC EDUCATION",

    summary:
      "A Drupal-based marketplace platform designed to connect piano students with instructors through structured teacher profiles, discovery, and platform workflows.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/piano-teacher-link/main.jpg",
        alt: "PianoTeacherLink marketplace",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 30%",
        rotation: -1.4,
        scale: 0.96,
      },
      {
        src: "/images/piano-teacher-link/secondary.jpg",
        alt: "PianoTeacherLink teacher discovery interface",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 20%",
        rotation: 3.2,
        scale: 0.84,
      },
    ],

    links: {},

    role: "Full-Stack Developer",
    roleDetail: "Architecture + full build",

    result: "Marketplace prototype",
    resultDetail: "Teacher + student platform",

    stack: [
      "Drupal",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
    ],

    bullets: [
      "Modeled teacher profiles and marketplace content using Drupal's entity and field systems",
      "Built structured instructor discovery and profile experiences",
      "Developed platform workflows around connecting students with instructors",
      "Created custom front-end presentation and supporting Drupal functionality",
    ],

    extra: {
      label: "Architecture",
      body:
        "Drupal provides the content and entity architecture for teacher profiles and marketplace data, while custom PHP and front-end components extend the platform around discovery and interaction workflows.",
    },
  },
];


/* =========================================================
   SYSTEMS + AUTOMATION
   ========================================================= */

export const systemsProjects: Project[] = [
  /* ---------------------------------------------------------
     HR DATA QUALITY
     --------------------------------------------------------- */

  {
    id: "tmd-hr",
    num: "01",

    accent: "#d96b52",
    bg: "#f5eee8",

    title: "HR Data Quality",
    sub: "TEXAS MILITARY DEPARTMENT · DATA AUTOMATION",

    summary:
      "Access SQL workflows built to streamline personnel data-quality assurance and recurring HR reporting at Texas Military Headquarters.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "center",
    },

    media: [
      {
        src: "/images/hr-data/main.jpg",
        alt: "HR data quality automation workflow",
        slot: "primary",
        frame: "plain",
        fit: "cover",
        position: "50% 20%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/hr-data/secondary.jpg",
        alt: "SQL personnel data quality workflow",
        slot: "secondary",
        frame: "plain",
        fit: "cover",
        position: "50% 20%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      github: "https://github.com/kwstahl/TMD-SQL-HR-Analysis",
    },

    role: "HR Systems Analyst",
    roleDetail: "Texas Military Department · 2020 — 2021",

    result: "Weeks → days",
    resultDetail: "Reduced recurring QA workload",

    stack: [
      "Access SQL",
      "Microsoft Access",
      "HR Data",
      "Data QA",
      "Reporting",
    ],

    bullets: [
      "Built Access SQL queries for recurring personnel data-quality checks",
      "Automated validation workflows across large HR datasets",
      "Identified missing, inconsistent, and invalid personnel records for review",
      "Reduced repetitive manual work involved in headquarters reporting and quality assurance",
    ],

    extra: {
      label: "Operational context",
      body:
        "The tooling supported recurring personnel-data review at Texas Military Headquarters. SQL queries transformed repetitive record checking into repeatable workflows that surfaced records requiring human review rather than requiring analysts to manually inspect entire datasets.",
    },
  },

  /* ---------------------------------------------------------
     PAY FILE AUTOMATION
     --------------------------------------------------------- */

  {
    id: "tmd-pay",
    num: "02",

    accent: "#4f8b68",
    bg: "#edf3ed",

    title: "Pay File Automation",
    sub: "TEXAS MILITARY DEPARTMENT · EXCEL + VBA",

    summary:
      "Excel and VBA automation built to clean and standardize difficult recurring pay files used in statewide National Guard payment workflows.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "center",
    },

    media: [
      {
        src: "/images/pay-automation/main.jpg",
        alt: "Excel pay file automation workflow",
        slot: "primary",
        frame: "plain",
        fit: "cover",
        position: "50% 15%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/pay-automation/secondary.jpg",
        alt: "Automated payroll data processing",
        slot: "secondary",
        frame: "plain",
        fit: "cover",
        position: "50% 20%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      github: "https://github.com/kwstahl/Pay-File-Automation-VBA",
    },

    role: "HR Systems Analyst",
    roleDetail: "Texas Military Department · 2020 — 2021",

    result: "Automated workflow",
    resultDetail: "Recurring pay-file processing",

    stack: [
      "VBA",
      "Excel",
      "Automation",
      "Payroll Data",
      "Data Transformation",
    ],

    bullets: [
      "Automated repetitive Excel cleanup and transformation steps using VBA",
      "Standardized irregular recurring pay-file data into usable structures",
      "Reduced manual processing required before analysis and distribution workflows",
      "Built the automation around existing operational Excel processes rather than replacing them",
    ],

    extra: {
      label: "Workflow",
      body:
        "The automation takes recurring source files that require repetitive cleanup and transformation and converts those steps into a repeatable VBA workflow. The goal was practical: reduce manual spreadsheet manipulation while preserving the Excel-based process already used operationally.",
    },
  },

  /* ---------------------------------------------------------
     GC-MS DATA SORTER
     --------------------------------------------------------- */

  {
    id: "dps-gcms",
    num: "03",

    accent: "#7255a3",
    bg: "#f1eef6",

    title: "GC-MS Data Sorter",
    sub: "TEXAS DPS · SCIENTIFIC DATA TOOL",

    summary:
      "A Python desktop utility built to organize THC decision-point GC-MS data and assemble complete analytical file sets for laboratory workflows.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "center",
    },

    media: [
      {
        src: "/images/gcms/main.jpg",
        alt: "GC-MS laboratory data workflow",
        slot: "primary",
        frame: "plain",
        fit: "cover",
        position: "50% 25%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/gcms/secondary.jpg",
        alt: "GC-MS chromatographic data and analytical files",
        slot: "secondary",
        frame: "plain",
        fit: "cover",
        position: "50% 20%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {},

    role: "Forensic Scientist / Developer",
    roleDetail: "Texas DPS · 2021 — 2024",

    result: "Automated analysis prep",
    resultDetail: "Scientific file organization",

    stack: [
      "Python",
      "Tkinter",
      "GC-MS",
      "Excel",
      "Scientific Data",
    ],

    bullets: [
      "Built a Python desktop utility around an existing forensic laboratory workflow",
      "Organized GC-MS analytical data regardless of original source-file order",
      "Assembled required analytical files and supporting documents into complete sets",
      "Generated an Excel index for organized analysis packages",
    ],

    extra: {
      label: "Scientific workflow",
      body:
        "The utility focused on the data-management side of GC-MS analysis rather than instrument control. It automated the organization of analytical output and supporting files so complete data packages could be assembled consistently for review.",
    },
  },
];


/* =========================================================
   COMMERCE + CLIENT SYSTEMS
   ========================================================= */

export const commerceProjects: Project[] = [
  /* ---------------------------------------------------------
     RUA BOUTIQUE
     --------------------------------------------------------- */

  {
    id: "rua",
    num: "01",

    accent: "#d88fa3",
    bg: "#f8eef1",

    title: "Rua Boutique",
    sub: "SHOPIFY · RETAIL COMMERCE SYSTEM",

    summary:
      "A boutique commerce implementation connecting the Shopify storefront with inventory, Faire, and point-of-sale workflows.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/rua/main.jpg",
        alt: "Rua Boutique Shopify storefront",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/rua/secondary.jpg",
        alt: "Rua Boutique ecommerce experience",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      live: "https://ruaboutique.com",
    },

    role: "Developer / Commerce Consultant",
    roleDetail: "Client implementation · 2025 — 2026",

    result: "Connected commerce",
    resultDetail: "Storefront + inventory + POS",

    stack: [
      "Shopify",
      "Faire",
      "Shopify POS",
      "E-Commerce",
      "Inventory",
    ],

    bullets: [
      "Implemented and configured the Shopify storefront",
      "Connected inventory workflows with Faire",
      "Configured point-of-sale operations for physical retail",
      "Adapted the commerce stack around the boutique's day-to-day operations",
    ],

    extra: {
      label: "Commerce workflow",
      body:
        "The project focused on connecting customer-facing ecommerce with the operational systems behind the store. Shopify serves as the central commerce platform while inventory and point-of-sale workflows support both online and physical retail.",
    },
  },

  /* ---------------------------------------------------------
     SCULPTED SERENITY
     --------------------------------------------------------- */

  {
    id: "sculpted-serenity",
    num: "02",

    accent: "#c59664",
    bg: "#f4efe8",

    title: "Sculpted Serenity",
    sub: "WOOCOMMERCE · SERVICE COMMERCE",

    summary:
      "A WooCommerce implementation adapted around a service-based purchasing workflow where a conventional product-store model did not fit the business.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/sculpted-serenity/main.jpg",
        alt: "Sculpted Serenity website",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/sculpted-serenity/secondary.jpg",
        alt: "Sculpted Serenity service commerce experience",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      live: "https://sculpted-serenity-llc.com",
    },

    role: "Developer",
    roleDetail: "Client implementation · 2025 — 2026",

    result: "Custom service commerce",
    resultDetail: "WooCommerce workflow",

    stack: [
      "WordPress",
      "WooCommerce",
      "Web Design",
      "Service Commerce",
    ],

    bullets: [
      "Adapted WooCommerce around service-based purchasing rather than a conventional product catalog",
      "Structured offerings around the client's service workflow",
      "Built responsive customer-facing pages and commerce interactions",
      "Configured the platform around practical business operations",
    ],

    extra: {
      label: "Commerce adaptation",
      body:
        "WooCommerce provided the transactional foundation, but the customer journey needed to behave more like purchasing a service than ordering a conventional physical product. The implementation adapts the platform around that distinction.",
    },
  },

  /* ---------------------------------------------------------
     MARIACHI ESTRELLAS DEL VALLE
     --------------------------------------------------------- */

  {
    id: "mariachi",
    num: "03",

    accent: "#d0a83f",
    bg: "#f6f1df",

    title: "Mariachi Estrellas",
    sub: "CLIENT WEBSITE · LOCAL BUSINESS",

    summary:
      "A responsive marketing website built for a regional mariachi group with an emphasis on presentation, discoverability, and direct customer contact.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/mariachi/main.jpg",
        alt: "Mariachi Estrellas del Valle website",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/mariachi/secondary.jpg",
        alt: "Mariachi Estrellas del Valle website experience",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      live: "https://www.mariachiestrellasdelvalle.com",
    },

    role: "Web Designer / Developer",
    roleDetail: "Client project · 2026",

    result: "Production website",
    resultDetail: "Responsive + discoverable",

    stack: [
      "Squarespace",
      "Web Design",
      "SEO",
      "Responsive Design",
    ],

    bullets: [
      "Designed and launched the group's customer-facing website",
      "Structured the site around discovery, credibility, and booking intent",
      "Built responsive presentation across desktop and mobile devices",
      "Improved the group's professional web presence and search visibility",
    ],

    extra: {
      label: "Design objective",
      body:
        "The site functions primarily as a discovery and trust-building tool. Content and navigation are organized to quickly communicate who the group is, show its presentation, and give prospective customers a clear path toward making contact.",
    },
  },

  /* ---------------------------------------------------------
     THE STAHL MARKETING
     --------------------------------------------------------- */

  {
    id: "stahl-marketing",
    num: "04",

    accent: "#647fbc",
    bg: "#edf0f7",

    title: "The Stahl Marketing",
    sub: "AGENCY · WEB + DIGITAL COMMERCE",

    summary:
      "An agency platform built around web development, ecommerce, POS, advertising, and integrated digital systems for small businesses.",

    preview: {
      media: "primary",
      fit: "cover",
      position: "top center",
    },

    media: [
      {
        src: "/images/stahl-marketing/main.jpg",
        alt: "The Stahl Marketing website",
        slot: "primary",
        frame: "browser",
        fit: "cover",
        position: "50% 10%",
        rotation: -1.5,
        scale: 0.96,
      },
      {
        src: "/images/stahl-marketing/secondary.jpg",
        alt: "The Stahl Marketing services and digital commerce experience",
        slot: "secondary",
        frame: "browser",
        fit: "cover",
        position: "50% 15%",
        rotation: 3,
        scale: 0.86,
      },
    ],

    links: {
      live: "https://www.thestahlmarketing.com",
    },

    role: "Founder / Developer",
    roleDetail: "2024 — Present",

    result: "Agency platform",
    resultDetail: "Web + commerce + marketing",

    stack: [
      "Shopify",
      "Squarespace",
      "Web Development",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "POS",
    ],

    bullets: [
      "Built the agency's web presence and service architecture",
      "Developed websites and commerce systems for small-business clients",
      "Integrated storefront, POS, advertising, analytics, and operational workflows",
      "Designed service offerings around practical business problems rather than isolated marketing deliverables",
    ],

    extra: {
      label: "Operating model",
      body:
        "The agency combines development and marketing work around the systems a small business actually uses: its website, ecommerce platform, point of sale, advertising channels, analytics, and supporting operational workflows.",
    },
  },
];


/* =========================================================
   ALL PROJECTS
   ========================================================= */

export const allProjects: Project[] = [
  ...projects,
  ...systemsProjects,
  ...commerceProjects,
];