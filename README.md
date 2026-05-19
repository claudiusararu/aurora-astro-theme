# Aurora

Aurora — Elegant SaaS theme with aurora gradient accents. Built with Astro 6 + Tailwind v4.

Part of **[AeroLaunch — premium Astro themes & website templates](https://aerolaunch.app)**.

## Overview

This is a standalone Astro theme package built for direct sale and hand customization. It ships as a normal Astro project with explicit pages, reusable components, Markdown content collections, and configuration files. There is no builder runtime or generated page renderer required.

## Included Pages

- `src/pages/about.astro`
- `src/pages/blog/[slug].astro`
- `src/pages/blog/index.astro`
- `src/pages/contact.astro`
- `src/pages/customers.astro`
- `src/pages/features.astro`
- `src/pages/index.astro`
- `src/pages/pricing.astro`
- `src/pages/privacy.astro`
- `src/pages/resources.astro`
- `src/pages/sections.astro`
- `src/pages/terms.astro`

## Included Components

- `AppDownload`
- `BlogGrid`
- `BlogHero`
- `BlogPost`
- `CTA`
- `Carousel`
- `Comparison`
- `Contact`
- `FAQ`
- `Features`
- `Footer`
- `Gallery`
- `Header`
- `Hero`
- `Icon`
- `ImageText`
- `LegalContent`
- `LogoCloud`
- `Map`
- `Newsletter`
- `Pricing`
- `Sidebar`
- `Stats`
- `Tabs`
- `Team`
- `Testimonials`
- `Timeline`
- `Video`

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321` to preview the theme.

## Build

```bash
npm run build
npm run preview
```

## Customization

The main configuration files live in `src/config`:

- `site.ts` controls site identity, SEO defaults, analytics, contact providers, newsletter settings, footer structure, and section data.
- `menu.json` controls the primary navigation and header CTA.
- `social.json` controls social links used by footer or contact sections.

## Content Collections

Blog posts live in `src/content/blog` as Markdown files. Update frontmatter and body content to customize posts.

## Premium Page Strategy

The theme includes more than a home page: the additional inner pages reuse the same section system so buyers can launch a complete marketing site faster, then remove pages they do not need.

## Deployment

The build output is static and can be deployed to Cloudflare Pages, Netlify, Vercel, or any static host.

## License

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this template.

---

Created by **[AeroLaunch](https://aerolaunch.app)** — discover more [premium Astro themes](https://aerolaunch.app/#themes).
