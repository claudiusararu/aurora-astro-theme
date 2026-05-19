/**
 * Aurora Theme Configuration
 * Edit this file to customize your site. All settings are documented below.
 */

export const siteConfig = {
  // ─── Site Identity ───────────────────────────────────
  name: "Aurora",
  tagline: "The modern platform for ambitious teams",
  url: "https://example.com",
  logo: "", // Leave empty to use the built-in theme mark, or set a path like /logo.svg
  favicon: "/favicon.svg",

  // ─── Navigation ──────────────────────────────────────
  navigation: {
    sticky: true,
    links: [
      { label: "Features", url: "/features/" },
      { label: "Pricing", url: "/pricing/" },
      { label: "Customers", url: "/customers/" },
      { label: "Resources", url: "/resources/" },
      { label: "Blog", url: "/blog/" },
    ],
    cta: {
      label: "Contact",
      url: "/contact/",
    },
  },

  // ─── Contact Form ────────────────────────────────────
  // Supported providers: "formspree" | "formsubmit" | "netlify"
  // Set to null to disable contact form
  contactForm: {
    provider: "formspree" as "formspree" | "formsubmit" | "netlify" | null,
    // Formspree: your form ID (get it from formspree.io)
    formspreeId: "your-form-id",
    // FormSubmit: your email
    // formsubmitEmail: "you@example.com",
    // Netlify: just set provider to "netlify" (works on Netlify hosting)
  },

  // ─── Analytics ───────────────────────────────────────
  // Supported: "google" | "plausible" | "umami" | null
  analytics: {
    provider: null as "google" | "plausible" | "umami" | null,
    // Google Analytics
    // googleId: "G-XXXXXXXXXX",
    // Plausible
    // plausibleDomain: "example.com",
    // Umami
    // umamiWebsiteId: "your-id",
    // umamiScriptUrl: "https://analytics.example.com/script.js",
  },

  // ─── Newsletter ──────────────────────────────────────
  // Supported: "mailchimp" | "convertkit" | "buttondown" | null
  newsletter: {
    provider: null as "mailchimp" | "convertkit" | "buttondown" | null,
    heading: "Stay in the loop",
    subtext: "Get product updates, tips, and insights delivered to your inbox.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    // actionUrl: "https://your-provider.com/subscribe",
  },

  // ─── Social Links ────────────────────────────────────
  // Set to null or remove to hide
  social: {
    twitter: "https://x.com/yourhandle",
    github: "https://github.com/yourrepo",
    linkedin: "https://linkedin.com/company/yourco",
    // instagram: null,
    // youtube: null,
    // facebook: null,
  } as Record<string, string | null | undefined>,

  // ─── SEO ─────────────────────────────────────────────
  seo: {
    title: "Aurora — The modern platform for ambitious teams",
    description:
      "Aurora helps teams ship faster, stay organized, and deliver results without the complexity.",
    ogImage: "/og.png",
    twitterHandle: "@yourhandle",
  },

  // ─── Footer ──────────────────────────────────────────
  footer: {
    copyright: "© 2026 Aurora. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features/" },
          { label: "Pricing", url: "/pricing/" },
          { label: "Customers", url: "/customers/" },
          { label: "All Sections", url: "/sections/" }
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Resource Hub", url: "/resources/" },
          { label: "Blog", url: "/blog/" },
          { label: "Getting Started", url: "/blog/getting-started-with-aurora/" },
          { label: "Contact", url: "/contact/" }
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about/" },
          { label: "Contact", url: "/contact/" },
          { label: "Privacy", url: "/privacy/" },
          { label: "Terms", url: "/terms/" }
        ],
      }
    ],
  },

  // ─── Team ────────────────────────────────────────────
  team: {
    heading: "Meet our team",
    subtext: "The people building the future of project management.",
    members: [
      { name: "Alex Rivera", role: "CEO & Co-founder", initials: "AR", image: "/team/alex.jpg", bio: "Previously VP Engineering at Stripe. 12 years building developer tools." },
      { name: "Sarah Kim", role: "CTO & Co-founder", initials: "SK", image: "/team/sarah.jpg", bio: "Former tech lead at Vercel. Passionate about developer experience." },
      { name: "Marcus Chen", role: "Head of Design", initials: "MC", image: "/team/marcus.jpg", bio: "Design systems expert. Previously at Figma and Linear." },
      { name: "Elena Vasquez", role: "Head of Product", initials: "EV", image: "/team/elena.jpg", bio: "Product leader with experience at Notion and Asana." },
    ],
  },

  // ─── Video ───────────────────────────────────────────
  video: {
    heading: "See Aurora in action",
    subtext: "Watch how teams use Aurora to ship faster and stay organized.",
    provider: "youtube" as "youtube" | "vimeo",
    videoId: "dQw4w9WgXcQ",
  },

  // ─── Timeline ────────────────────────────────────────
  timeline: {
    heading: "Our journey",
    subtext: "Key milestones that shaped who we are today.",
    items: [
      { year: "2023", title: "Founded", description: "Started with a simple idea: project management shouldn't be painful." },
      { year: "2023", title: "Seed Round", description: "Raised $4M to build the core platform and hire the founding team." },
      { year: "2024", title: "Public Beta", description: "Launched to 2,000 beta users. Feedback shaped every feature." },
      { year: "2024", title: "Series A", description: "Raised $18M led by Sequoia. Expanded to 30 team members." },
      { year: "2025", title: "10K Teams", description: "Crossed 10,000 active teams. Launched enterprise features." },
      { year: "2026", title: "Global Scale", description: "Operating in 40+ countries with 99.99% uptime." },
    ],
  },

  // ─── Comparison ──────────────────────────────────────
  comparison: {
    heading: "How Aurora compares",
    subtext: "See why teams choose Aurora over the competition.",
    features: [
      { name: "Real-time collaboration", aurora: true, competitorA: true, competitorB: false },
      { name: "Built-in analytics", aurora: true, competitorA: false, competitorB: false },
      { name: "Custom workflows", aurora: true, competitorA: true, competitorB: true },
      { name: "API access", aurora: true, competitorA: true, competitorB: false },
      { name: "Priority support", aurora: true, competitorA: false, competitorB: false },
      { name: "Unlimited projects", aurora: true, competitorA: false, competitorB: true },
      { name: "SSO & SAML", aurora: true, competitorA: true, competitorB: false },
      { name: "Mobile app", aurora: true, competitorA: true, competitorB: true },
    ],
    columns: ["Aurora", "Competitor A", "Competitor B"],
  },

  // ─── Gallery ─────────────────────────────────────────
  gallery: {
    heading: "Built for every workflow",
    subtext: "See Aurora in action across different teams and use cases.",
    images: [
      { src: "/gallery/1.jpg", alt: "Dashboard overview" },
      { src: "/gallery/2.jpg", alt: "Team collaboration" },
      { src: "/gallery/3.jpg", alt: "Analytics view" },
      { src: "/gallery/4.jpg", alt: "Project timeline" },
      { src: "/gallery/5.jpg", alt: "Mobile interface" },
      { src: "/gallery/6.jpg", alt: "Integration panel" },
    ],
  },

  // ─── Carousel ────────────────────────────────────────
  carousel: {
    eyebrow: "Carousel",
    heading: "A closer look at Aurora",
    subtext: "Showcase product screens, customer stories, launches, offices, or any image-led moment.",
    slides: [
      {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&auto=format&fit=crop&q=85",
        title: "Planning workspace",
        description: "A calm overview for launches, campaigns, and ongoing product work.",
        alt: "Team planning workspace",
      },
      {
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&auto=format&fit=crop&q=85",
        title: "Modern team room",
        description: "Bring product, design, and operations into one shared space.",
        alt: "Modern collaborative office",
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&auto=format&fit=crop&q=85",
        title: "Live collaboration",
        description: "Keep context, ownership, and decisions visible as work moves.",
        alt: "People collaborating around laptops",
      },
      {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&auto=format&fit=crop&q=85",
        title: "Analytics dashboard",
        description: "Track progress with a visual system your team can understand quickly.",
        alt: "Laptop showing analytics work",
      },
    ],
  },

  // ─── Tabs ────────────────────────────────────────────
  tabs: {
    heading: "One platform, every workflow",
    subtext: "Aurora adapts to how your team works.",
    items: [
      { label: "Projects", title: "Manage projects with clarity", description: "Kanban boards, Gantt charts, and list views. Switch between views instantly. Every project gets its own workspace with customizable stages.", icon: "grid" },
      { label: "Analytics", title: "Insights that drive decisions", description: "Track velocity, bottlenecks, and team capacity. Dashboards update in real-time. Export reports for stakeholders with one click.", icon: "gauge" },
      { label: "Automation", title: "Automate the repetitive", description: "Set triggers for status changes, assignments, and notifications. Build workflows without code. Reclaim hours every week.", icon: "bolt" },
      { label: "Integrations", title: "Connect your stack", description: "Slack, GitHub, Figma, Jira — 150+ integrations. Two-way sync keeps everything up to date. Custom webhooks for anything else.", icon: "globe" },
    ],
  },

  // ─── App Download ────────────────────────────────────
  appDownload: {
    heading: "Take Aurora everywhere",
    subtext: "Available on iOS, Android, and desktop. Sync across all your devices.",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
  },

  // ─── Map ─────────────────────────────────────────────
  map: {
    heading: "Visit our office",
    subtext: "We'd love to meet you in person.",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1234567890",
    address: "123 Innovation Drive, San Francisco, CA 94107",
    phone: "+1 (555) 123-4567",
    email: "hello@aurora.app",
  },

  // ─── Head Scripts ────────────────────────────────────
  // Add custom scripts to <head> (analytics, pixels, etc.)
  // headScripts: `<script defer src="/analytics.js"></script>`,
  headScripts: "",
} as const;

export type SiteConfig = typeof siteConfig;
