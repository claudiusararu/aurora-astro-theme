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

  // ─── Hero ────────────────────────────────────────────
  hero: {
    eyebrow: "",
    heading: "Optimize your workflow.\nAccelerate your growth.",
    subheading: "The modern platform that helps teams move faster, stay organized, and deliver results without the complexity.",
    primaryCta: "Start for free",
    primaryCtaUrl: "#start",
    secondaryCta: "Watch demo",
    secondaryCtaUrl: "#demo",
  },

  // ─── Logo Cloud ──────────────────────────────────────
  logoCloud: {
    eyebrow: "Trusted by modern teams",
    logos: "Stripe, Linear, Vercel, Notion, Figma, Raycast",
  },

  // ─── Features ────────────────────────────────────────
  features: {
    heading: "Feature management that fits your workflow",
    items: [
      { icon: "search", title: "Navigate your path with clarity", description: "Find what you need instantly. Smart search, contextual filters, and intelligent suggestions keep your team focused." },
      { icon: "grid", title: "Organize your work efficiently", description: "Flexible project boards, nested tasks, and custom workflows adapt to how your team actually works." },
      { icon: "globe", title: "Sync across all platforms", description: "Real-time sync on web, desktop, and mobile. Every change propagates instantly, no refresh required." },
      { icon: "gauge", title: "Advanced analytics", description: "Understand your team's velocity, bottlenecks, and patterns with dashboards that surface insights automatically." },
      { icon: "layers", title: "Team collaboration", description: "Threaded comments, live cursors, and shared workspaces. Work together without stepping on each other's toes." },
      { icon: "clock", title: "Priority scheduling", description: "Automatic prioritization based on deadlines, dependencies, and team capacity. The right work, at the right time." },
    ],
  },

  // ─── Image + Text ────────────────────────────────────
  imageText: {
    eyebrow: "INTELLIGENCE",
    heading: "Feature intelligence built for modern product teams",
    body: "Understand how features perform from the moment they ship. Track adoption curves, identify friction points, and measure real impact on your product metrics, all in one place.",
    learnMoreLabel: "Learn more",
    learnMoreUrl: "#learn",
  },

  // ─── Pricing ─────────────────────────────────────────
  pricing: {
    heading: "Power your progress with Pro Access",
    subheading: "Choose the plan that works for your workflow. Scale up or down anytime.",
    items: [
      { title: "Individual Plan", subtitle: "Best option for solo designers or freelancers", price: "25", frequency: "month", ctaText: "Get Started", ctaUrl: "#start", benefits: ["Up to 5 projects", "10,000 events / month", "Basic analytics", "Email support", "1 team member", "30-day data retention", "Standard integrations", "Community access"], recommended: false },
      { title: "Power Users & Teams", subtitle: "Best option for team agencies or corporates", price: "59", frequency: "month", ctaText: "Get Started", ctaUrl: "#start", benefits: ["Unlimited projects", "Unlimited events", "Advanced analytics & reports", "Priority support (4h SLA)", "Unlimited team members", "1-year data retention", "Custom integrations & API", "SSO & advanced security"], recommended: true },
    ],
  },

  // ─── Testimonials ────────────────────────────────────
  testimonials: {
    heading: "Trusted by modern teams",
    items: [
      { quote: "Aurora transformed how our team ships. We went from monthly releases to weekly, and the quality actually improved. It's the tool we didn't know we needed.", name: "Sarah Chen", role: "VP Engineering, Vertex Labs" },
      { quote: "We evaluated everything on the market before choosing Aurora. The analytics alone justified the switch. Our team velocity is up 40% in three months.", name: "Marcus Rivera", role: "CTO, Pulse Health" },
      { quote: "The onboarding experience is remarkable. We had 60 engineers productive on day one. No training sessions, no friction, just results from the start.", name: "Emily Nakamura", role: "Head of Product, Helix Finance" },
    ],
  },

  // ─── FAQ ─────────────────────────────────────────────
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "How does the free trial work?", answer: "Sign up with your email and start using Aurora immediately. No credit card required. Your 14-day trial includes full access to every Pro feature, and you can downgrade at any time." },
      { question: "Can I switch plans later?", answer: "Absolutely. Upgrade or downgrade anytime from your billing settings. When upgrading, you'll be prorated for the remaining time. When downgrading, you keep Pro features until the end of your current billing cycle." },
      { question: "What happens to my data if I cancel?", answer: "You own your data, always. Export everything, including projects, analytics history, team settings, and integrations, as JSON or CSV with one click. After cancellation, your data is retained for 30 days before deletion." },
      { question: "Do you offer discounts for startups?", answer: "Yes. We offer 50% off the first year for startups with fewer than 20 employees and under $5M in funding. Apply through our startup program page with your company details." },
      { question: "What security certifications do you have?", answer: "Aurora is SOC 2 Type II certified, GDPR compliant, and HIPAA ready on Team plans. We undergo annual penetration testing and continuous vulnerability scanning. All data is encrypted at rest and in transit." },
      { question: "How does team billing work?", answer: "Team plans are billed per workspace, not per seat. Add unlimited team members to your workspace at no extra cost. Each workspace gets its own billing cycle and can be managed independently." },
    ],
    contactHeading: "Still have questions?",
    contactDescription: "Can't find the answer you're looking for? Our team is here to help. Reach out and we'll get back to you within 24 hours.",
    contactEmail: "support@aurora.io",
    responseTime: "Within 24 hours",
    contactUrl: "#contact",
  },

  // ─── Stats ───────────────────────────────────────────
  stats: {
    items: [
      { value: "10K+", label: "Active Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "2.4s", label: "Avg. Response" },
      { value: "150+", label: "Integrations" },
    ],
  },

  // ─── CTA ─────────────────────────────────────────────
  cta: {
    eyebrow: "",
    heading: "Why teams are leaving Monday for Aurora",
    subheading: "Join thousands of teams who made the switch and never looked back.",
    buttonLabel: "Start for free",
    socialProof: [
      { text: "Switched from Monday in a weekend. Never looked back.", name: "David Park", role: "Engineering Lead", initials: "DP" },
      { text: "Aurora is what we wished Notion was for project management.", name: "Lisa Moreau", role: "Product Director", initials: "LM" },
      { text: "Our team's productivity metrics speak for themselves. Up 60%.", name: "James Okafor", role: "VP Operations", initials: "JO" },
    ],
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
    heading: "The people behind Aurora",
    subheading: "A small, focused team building tools that help modern teams work better.",
    members: [
      { name: "Alex Morrison", role: "Chief Executive Officer", photo: { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=380&auto=format&fit=crop&q=80", alt: "Alex Morrison" } },
      { name: "Sarah Chen", role: "Head of Product", photo: { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=380&auto=format&fit=crop&q=80", alt: "Sarah Chen" } },
      { name: "James Okoro", role: "Lead Engineer", photo: { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=380&auto=format&fit=crop&q=80", alt: "James Okoro" } },
      { name: "Elena Vasquez", role: "Design Director", photo: { url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=380&auto=format&fit=crop&q=80", alt: "Elena Vasquez" } },
    ],
  },

  // ─── Video ───────────────────────────────────────────
  video: {
    heading: "See Aurora in action",
    subheading: "A two-minute walkthrough of the features that help teams ship faster.",
    provider: "youtube" as "youtube" | "vimeo" | "custom",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  // ─── Timeline ────────────────────────────────────────
  timeline: {
    heading: "Our journey",
    subheading: "From a two-person team to powering thousands of workflows.",
    items: [
      { year: "2021", title: "The beginning", description: "Founded with a simple idea: project management should feel invisible. Two engineers, one apartment, zero funding." },
      { year: "2022", title: "First 1,000 users", description: "Launched the public beta. Word spread through engineering communities. Reached product-market fit within six months." },
      { year: "2023", title: "Series A", description: "Raised $12M to scale the platform. Expanded the team to 25. Shipped real-time collaboration and API access." },
      { year: "2024", title: "Enterprise ready", description: "SOC 2 certified. SSO, audit logs, and advanced permissions. Serving teams from 5 to 5,000 members." },
    ],
  },

  // ─── Comparison ──────────────────────────────────────
  comparison: {
    heading: "Compare plans",
    subheading: "Find the right fit for your team. Every plan includes a 14-day free trial.",
    starterLabel: "Starter",
    proLabel: "Pro",
    enterpriseLabel: "Enterprise",
    rows: [
      { feature: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Team members", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Storage", starter: "1 GB", pro: "50 GB", enterprise: "Unlimited" },
      { feature: "Analytics", starter: "-", pro: "✓", enterprise: "✓" },
      { feature: "Custom workflows", starter: "-", pro: "✓", enterprise: "✓" },
      { feature: "API access", starter: "-", pro: "✓", enterprise: "✓" },
      { feature: "SSO / SAML", starter: "-", pro: "-", enterprise: "✓" },
      { feature: "Dedicated support", starter: "-", pro: "-", enterprise: "✓" },
    ],
    buttonLabel: "Start free trial",
    buttonUrl: "#start",
    secondaryButtonLabel: "Talk to sales",
    secondaryButtonUrl: "#contact",
  },

  // ─── Gallery ─────────────────────────────────────────
  gallery: {
    heading: "Built for every workflow",
    subheading: "A glimpse into the interfaces your team will use every day.",
    items: [
      { label: "Dashboard" },
      { label: "Analytics" },
      { label: "Projects" },
      { label: "Timeline" },
      { label: "Reports" },
      { label: "Settings" },
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
    heading: "One platform, every capability",
    items: [
      { id: "overview", label: "Overview", title: "Everything at a glance", description: "Get a high-level view of your projects, team activity, and upcoming deadlines. Aurora surfaces what matters so you can focus on the work that moves the needle.", features: ["Project summaries", "Activity feed", "Quick actions", "Priority inbox"] },
      { id: "analytics", label: "Analytics", title: "Data-driven decisions", description: "Track team velocity, project health, and resource allocation with dashboards that update in real time. Spot bottlenecks before they slow you down.", features: ["Velocity charts", "Burndown reports", "Resource heatmaps", "Custom metrics"] },
      { id: "automation", label: "Automation", title: "Work on autopilot", description: "Set up rules that handle the repetitive stuff: status updates, assignments, notifications, and handoffs. Build workflows once, let them run forever.", features: ["Rule builder", "Triggers & actions", "Templates library", "Webhook support"] },
    ],
  },

  // ─── App Download ────────────────────────────────────
  appDownload: {
    heading: "Take Aurora everywhere",
    subheading: "Stay on top of your projects from anywhere. Native apps for iOS and Android with full offline support.",
    appStoreUrl: "#app-store",
    googlePlayUrl: "#google-play",
    note: "Requires iOS 16+ or Android 12+. Free to download.",
  },

  // ─── Map ─────────────────────────────────────────────
  map: {
    heading: "Our offices",
    subheading: "Three offices across three continents. Visit us or get in touch.",
    // Map mode: "auto" derives an embed from the first location, "embed" uses mapEmbedUrl, "placeholder" shows a styled placeholder
    mapMode: "auto" as "auto" | "embed" | "placeholder",
    mapEmbedUrl: "",
    mapLabel: "Interactive map",
    locations: [
      { city: "San Francisco", address: "123 Innovation Drive, CA 94107", phone: "+1 (555) 123-4567", email: "sf@aurora.io" },
      { city: "London", address: "45 Tech Lane, EC2A 1NT", phone: "+44 20 7946 0958", email: "london@aurora.io" },
      { city: "Tokyo", address: "8-1 Shibuya, 150-0002", phone: "+81 3-1234-5678", email: "tokyo@aurora.io" },
    ],
  },

  // ─── Page Headers ────────────────────────────────────
  // Hero (eyebrow + title + subtitle) at the top of each inner page.
  pageHeaders: {
    about: {
      eyebrow: "SAAS STARTER",
      title: "About Aurora",
      subtitle: "Aurora is designed as a complete starter website, not just a landing page.",
    },
    contact: {
      eyebrow: "SAAS STARTER",
      title: "Contact",
      subtitle: "Get in touch with the Aurora team.",
    },
    customers: {
      eyebrow: "SAAS STARTER",
      title: "Customers",
      subtitle: "Trust signals, proof, stories, and customer-facing conversion sections.",
    },
    features: {
      eyebrow: "SAAS STARTER",
      title: "Features",
      subtitle: "All the pieces your SaaS needs to explain, convert, and support users.",
    },
    pricing: {
      eyebrow: "SAAS STARTER",
      title: "Pricing",
      subtitle: "Simple plans, comparison tables, and conversion-ready questions.",
    },
    resources: {
      eyebrow: "SAAS STARTER",
      title: "Resources",
      subtitle: "A starter resource hub for posts, updates, newsletter growth, and FAQs.",
    },
    privacy: {
      eyebrow: "SAAS STARTER",
      title: "Privacy Policy",
      subtitle: "Read the Aurora privacy policy.",
    },
    terms: {
      eyebrow: "SAAS STARTER",
      title: "Terms of Service",
      subtitle: "Read the Aurora terms of service.",
    },
  },

  // ─── Resource Hub ────────────────────────────────────
  resourceHub: {
    eyebrow: "resource hub",
    heading: "Start faster with Aurora",
    subheading: "Guides, templates, and operating notes for teams building calmer project systems.",
    cards: [
      { title: "Quick-start guide", description: "Set up your first workspace, invite teammates, and create a repeatable project rhythm." },
      { title: "Workflow checklist", description: "A practical checklist for planning boards, statuses, roles, and launch routines." },
      { title: "Template library", description: "Reusable docs for sprint planning, status updates, and async handoffs." },
    ],
  },

  // ─── Blog Hero ───────────────────────────────────────
  // Default featured-post card shown in the section library. On the blog index
  // the featured post is sourced from your latest published post automatically.
  blogHero: {
    title: "Design Team Rituals That Actually Work (Even Remotely)",
    category: "Design",
    date: "May 6, 2026",
    author: "Sarah Rodriguez",
    authorInitials: "SR",
    slug: "getting-started",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&auto=format&fit=crop&q=85",
    imageAlt: "",
  },

  // ─── Blog ────────────────────────────────────────────
  blog: {
    // Shown in place of the post grid when there are no published posts yet.
    emptyState: "No posts yet. Check back soon.",
  },

  // ─── Head Scripts ────────────────────────────────────
  // Add custom scripts to <head> (analytics, pixels, etc.)
  // headScripts: `<script defer src="/analytics.js"></script>`,
  headScripts: "",
} as const;

export type SiteConfig = typeof siteConfig;
