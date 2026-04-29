---
name: design-system-generator
description: Generates a structured design system document from project context, brand input, or rough design notes. Use when starting a new build and you need a single source of truth for color, typography, spacing, components, and interaction patterns. Produces a design system covering foundations, tokens, components, layout, motion, accessibility, and open questions. Suitable as the styling and component reference for any new build project.
---

## Design System Generator

You are receiving project input in some form -- a project context document, a brand brief, screenshots, mood references, copy-pasted notes, or any combination. Your task is to analyze this input and produce a structured Design System Document that can serve as the single source of truth for visual and interaction decisions in the project.

Process the input carefully. Map every relevant piece of information to the appropriate section below. Do not invent values that are not implied by the input. When the input does not specify a value, propose a sensible default consistent with the project's stated tone, platform, and constraints, and flag it as a Proposed default in the Open Questions section so the user can confirm or change it.

Produce the following ten sections in order. Write in clear, direct prose. For tokens, use concrete values (hex codes, pixel values, font names, ms durations) -- never vague descriptors like "a soft blue" or "medium spacing." If a section cannot be completed because neither the input nor a reasonable default applies, write "Not defined in source material" and add it to the Open Questions section.

---

# Design System Document
**Project:** [Extract project name from input]
**Date:** [Today's date]
**Source:** [Brief description of what input was provided]
**Version:** 1.0

---

## 1. Design Principles
[Three to five short principles that describe how this product should feel and behave. Each principle is one sentence and states a design stance, not a feature. Examples: "Clarity over cleverness," "Information density is earned, not assumed." Derive these from the project's tone, ICP, and stated values.]

## 2. Color
Provide a complete color token set. Every token has a name, a hex value, and a usage note.
- Brand: primary, secondary, accent
- Neutral: background, surface, border, text-primary, text-secondary, text-muted
- Semantic: success, warning, danger, info
- State: hover, active, focus-ring, disabled

For each token, state where it is used and where it must not be used. If the input only provides a brand color, derive the rest from it and mark derived tokens as Proposed default.

## 3. Typography
Specify the type system as concrete tokens.
- Font families: heading, body, mono (with web-safe fallbacks)
- Type scale: h1, h2, h3, h4, body-lg, body, body-sm, caption -- each with size (px or rem), line-height, weight, and letter-spacing
- Usage: where each level is used and where it is not

## 4. Spacing and Layout
- Spacing scale: a base unit (e.g., 4px) and a named scale (xs, sm, md, lg, xl, 2xl) with concrete values
- Container widths: max-width values for content, narrow, wide
- Grid: column count, gutter, breakpoints (mobile, tablet, desktop) with px values
- Radii: a named radius scale (none, sm, md, lg, full) with concrete values
- Elevation: a named shadow scale (none, sm, md, lg) with concrete box-shadow values

## 5. Components
For each component the project needs, specify: purpose, variants, states, and the tokens it uses. Pull the component list from the project input. If a component spec already exists, reference it; do not duplicate. At minimum cover:
- Button (variants, sizes, states)
- Input and form controls
- Card or content container
- Navigation pattern
- Feedback (toast, inline message, empty state)

For every component, state which tokens it consumes from sections 2-4. Components must not introduce their own one-off values.

## 6. Iconography and Imagery
- Icon library: name the library and stroke or fill style, sizes (sm, md, lg) in px
- Imagery: photography vs. illustration, treatment, aspect ratios, alt text expectations

## 7. Motion
- Duration tokens: fast, base, slow (ms values)
- Easing tokens: standard, accelerate, decelerate (cubic-bezier values)
- Usage: when motion is used (state changes, entrance, feedback) and when it is not (decoration)
- Reduced motion: state how the system responds when prefers-reduced-motion is set

## 8. Accessibility
- Color contrast: state the minimum ratio for body text and for large text, and confirm the token pairings in section 2 meet it
- Focus: every interactive element has a visible focus state using the focus-ring token
- Target size: minimum tap target in px
- Semantic HTML: state the expectation that components use semantic elements
- Any project-specific accessibility constraints from the input

## 9. Tokens Summary
A flat list of every token defined above, grouped by category, formatted so it can be lifted directly into a Tailwind config, CSS variables, or a tokens.json file. Use kebab-case names. This section is the machine-readable contract for the design system.

## 10. Open Questions
[Decisions not yet made. Proposed defaults that need confirmation. Things the input left unresolved. Number each one. For each, state the question, the proposed default if any, and what is blocked until it is answered.]

---
*Generated by /design-system-generator skill. Update this document as design decisions are made. Components in /src/components/ and Tailwind config should reference the tokens in section 9, not introduce new values.*
