---
title: "Building a Design System That Scales"
description: "How we built Aurora's design system from a handful of components to a comprehensive, maintainable system serving multiple product surfaces."
date: 2026-04-15
author: "Sarah Rodriguez"
category: "Design"
---

Design systems are one of those things that every team talks about building but few actually execute well. After two years of iteration, our design system at Aurora serves six product surfaces, three platforms, and a team that has tripled in size. Here's what we learned.

## Start With Constraints, Not Components

The instinct when starting a design system is to open Figma and start building buttons. Resist that urge. The first thing you need is a set of constraints — the rules that will govern every decision that follows.

For Aurora, we started with three constraints:

- **Accessibility first.** Every component must meet WCAG 2.1 AA standards by default. Accessibility is not a feature; it's a baseline.
- **Composability over customization.** Components should combine to create complex interfaces, not have dozens of props for every variation.
- **Performance budgets.** No component should add more than 2KB to the bundle. If it does, it needs to be split or lazy-loaded.

These constraints eliminated entire categories of debate. When someone proposed a component with fourteen color variants, the performance budget made the answer obvious: create three variants and use the semantic color system for the rest.

## The Token Layer

Design tokens are the foundation of everything. They define the primitive values — colors, spacing, typography, shadows — that components consume. We organize tokens in three tiers:

- **Global tokens** define the raw palette. These are the colors, font sizes, and spacing units that exist independent of any context.
- **Semantic tokens** map global tokens to meaning. `color-text-primary` points to a global token but communicates intent rather than value.
- **Component tokens** are the most specific. They define how a particular component uses semantic tokens. `button-bg-hover` references a semantic token.

This three-tier approach gives us the flexibility to support theming (swap the global layer), maintain consistency (semantic tokens enforce meaning), and allow component-level overrides (without breaking the system).

## Documentation as Code

The worst thing a design system can be is a library nobody knows how to use. We solve this by treating documentation as code — it lives in the same repository as the components, updates automatically when the API changes, and includes live examples.

Every component has four documentation sections:

- **When to use** — guidance on appropriate contexts and alternatives
- **Anatomy** — a visual breakdown of the component's structure
- **API** — props, events, slots, and their types
- **Examples** — interactive demos showing real-world usage

The key insight is that "when to use" is more valuable than API docs. Engineers can figure out props from TypeScript types. What they can't figure out is whether they should use a Dialog or a Drawer for a particular interaction.

## Handling Breaking Changes

Design systems are living systems. They change. The question is how to change them without breaking every product surface simultaneously.

We use a deprecation cycle with three stages:

1. **Announce:** The old API is marked as deprecated with console warnings in development. The new API is available alongside it.
2. **Migrate:** Teams have two sprints to migrate. We provide codemods for common patterns and office hours for complex cases.
3. **Remove:** The old API is removed in a minor version bump. Any team that hasn't migrated gets a build error with a clear message pointing to the migration guide.

This process is intentionally strict. Lenient deprecation cycles lead to zombie APIs that persist for years, increasing bundle size and cognitive load.

## Measuring Success

A design system succeeds when teams use it without thinking about it. We track three metrics:

- **Adoption rate:** What percentage of new UI uses system components versus custom implementations?
- **Contribution rate:** How many components are contributed by product teams versus the core design system team?
- **Time to first screen:** How long does it take a new engineer to build their first production screen using only system components?

After two years, our adoption rate is 94%, our contribution rate is 40%, and time to first screen is down to four hours from two days. These numbers tell us the system is working — but they also tell us where to focus next.

The 6% of non-system UI is our backlog. Each custom implementation is either a gap in the system (we should build a component) or a one-off that doesn't warrant systemic support (we should document why).

Design systems are never done. They evolve with your product, your team, and your understanding of the problems you're solving. The goal is not perfection — it's sustainable velocity.
