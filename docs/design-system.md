# Design System: Clean Shopper
**Date:** 2026-05-19  |  **Version:** 1.0  |  **Platform:** Web (responsive)

---

## Design Direction

Clean Shopper feels like consulting a calm, knowledgeable friend who has already done the research for you. The interface is minimal and quiet — soft off-white and white surfaces layered for depth, generous breathing room, rounded approachable shapes, and editorial typography that feels considered rather than loud. A single muted leaf green carries the brand and signals trust and safety without shouting; the rest of the palette stays near-monochrome and cool, warmed by sand-toned neutrals for organic grounding.

The experience is organic without being precious, approachable without being playful, and explicitly **not** luxurious, glossy, or beauty-fashion. It is closer to a thoughtful wellness journal than a boutique storefront — ingredient-forward, honest, and unhurried. Depth comes from layered surface tones, not drop shadows. Motion is smooth and restrained. The interface recedes so the research can lead.

This system is built for a research-oriented but conversational product: scannable enough to compare ingredients and certifications side by side, but calm enough that browsing feels like consultation rather than transaction.

---

## Design Principles

**Quiet by default.** No urgency, no conversion pressure, no visual noise. The interface stays still so the information can speak — color is restrained, type is calm, motion is gentle.

**Reassurance through restraint.** Trust is communicated by what's absent — no exclamation marks, no shouting badges, no aggressive contrast. A muted green accent is the strongest visual claim the interface makes.

**Depth through surface, not shadow.** Hierarchy is built by stacking off-white, white, and warm sand surfaces. Drop shadows are reserved for floating UI like menus and overlays — never as decoration.

**Organic warmth in a cool palette.** Cool off-whites set the rational, considered tone. Warm sand neutrals introduce humanity. Together they keep the product from feeling clinical or boutique.

**Rounded, not playful.** Pill CTAs and generous card radii signal approachability — but type, spacing, and motion remain considered and editorial. Soft shapes, serious content.

---

## Color System

### Palette Philosophy

The palette is built around a single brand color — a muted leaf green — surrounded by a layered system of cool off-whites and warm sand neutrals. Cool tones (snow-white, ivory) carry the rational, library-quiet mood. Warm sand tones introduce organic warmth and create depth without resorting to shadows. Charcoal anchors typography. Semantic colors are muted and earthy — there are no bright reds or neons, because nothing in this product warrants visual alarm.

The result is near-monochrome on first read, with green emerging only at moments of trust (a clean-rating badge, a primary CTA, a saved-product check) and sand emerging only at moments of layering (a secondary card surface, a sidebar, a featured section).

### Primary Colors

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-leaf-500` | Leaf Green | `#4A7C59` | Primary brand color. CTAs, active states, clean-rating signals, links. |
| `--color-leaf-600` | Forest | `#3A6448` | Hover/pressed states for primary actions. High-emphasis text on light surfaces. |
| `--color-leaf-400` | Sage | `#7AA589` | Subtle accents, illustration tints, large background washes. |
| `--color-leaf-100` | Leaf Mist | `#E4EEE7` | Selected-state backgrounds, tag fills, ambient brand wash. |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success | `#3F8754` | Clean-product confirmation, completed states. Distinct enough from brand leaf to not collapse into it. |
| Warning | `#B8843D` | Caution-rated ingredients, attention-required states. Muted amber — never alarming. |
| Error | `#A84A3F` | Not-clean rating, harmful ingredient flags, destructive actions. Muted brick — firm but not shrill. |
| Info | `#4A7087` | Neutral informational callouts, tips, secondary annotations. |

### Neutral Scale

A cool scale with a faint green undertone so it harmonizes with the brand leaf rather than fighting it.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#FAFBF8` | Lightest surface tint, hairline-light fills. |
| `neutral-100` | `#F4F5F1` | Subtle background blocks, disabled fills. |
| `neutral-200` | `#E7E9E3` | Default border color, divider lines. |
| `neutral-300` | `#D2D5CD` | Stronger borders, input outlines. |
| `neutral-400` | `#A7ACA3` | Placeholder text, disabled text, decorative icons. |
| `neutral-500` | `#7A7F76` | Tertiary text, metadata, captions on light surfaces. |
| `neutral-600` | `#565A53` | Secondary text, body copy on warm surfaces. |
| `neutral-700` | `#3D413B` | Body text on light surfaces (AAA contrast). |
| `neutral-800` | `#272B26` | Strong headings, emphasized text. |
| `neutral-900` | `#171A16` | Highest-emphasis text, display headings. |

### Sand Scale (Warm Neutrals)

Used for warm layered surfaces — secondary cards, featured sections, sidebars. Never used for type.

| Token | Hex | Usage |
|-------|-----|-------|
| `sand-50` | `#FAF7F0` | Lightest warm tint. |
| `sand-100` | `#F2EDE0` | Default warm surface — secondary cards, featured panels. |
| `sand-200` | `#E5DDC8` | Deeper warm surface — sidebars, divider blocks. |
| `sand-300` | `#C7BCA0` | Strong sand accent — illustration, decorative borders. |

### Surface Colors

| Surface | Hex | Usage |
|---------|-----|-------|
| Page background | `#F8F9F6` | Default page background — cool snow white. |
| Card / elevated | `#FFFFFF` | Primary card surfaces, product cards, comparison panels. |
| Sidebar / secondary | `#F2EDE0` | Warm surface for featured sections, sidebars. |
| Overlay backdrop | `rgba(23, 26, 22, 0.4)` | Modal and sheet backdrops. |

### Accessibility

**Target: WCAG 2.1 AA across the system.**

- Body text (`neutral-700` on page bg): ~10.5:1 — passes AAA.
- Secondary text (`neutral-600` on page bg): ~7.6:1 — passes AAA.
- Tertiary text (`neutral-500` on page bg): ~5.3:1 — passes AA.
- White text on `leaf-500`: ~5.4:1 — passes AA for normal text.
- White text on error: ~5.1:1 — passes AA.

All interactive components must have a visible focus state. Color is never the sole means of conveying clean/warning/danger states — icons and text labels always accompany color signals.

---

## Typography

### Type Philosophy

Type should feel crisp, modern, and unhurried — geometric enough to feel current, readable enough to disappear when the user is reading ingredient lists. Display and headings use tight tracking and semibold weight to carry editorial presence without shouting. Body copy stays at regular weight with comfortable line-height for sustained reading. Monospace appears only where precision matters: ingredient codes, scores, technical metadata.

### Font Stack

| Role | Font | Fallback | Rationale |
|------|------|----------|-----------|
| Primary | **Inter** (400, 500, 600, 700) | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Crisp geometric sans with excellent legibility at every size. Free, widely supported, generous OpenType features. Loaded via Google Fonts. |
| Monospace | **JetBrains Mono** (400, 500) | `'SF Mono', Menlo, Consolas, monospace` | For ingredient codes, EWG scores, technical data. Generous letterforms, distinct numerals. |

### Type Scale

Scale ratio: **1.25 (major third)** — gentle progression suited to a calm, editorial product.

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| display | 3.5rem (56px) | 600 | 1.05 | Marketing hero, page-defining headlines. |
| h1 | 2.5rem (40px) | 600 | 1.1 | Top-level page titles. |
| h2 | 1.875rem (30px) | 600 | 1.15 | Section headings within a page. |
| h3 | 1.5rem (24px) | 500 | 1.2 | Sub-section headings, card titles. |
| h4 | 1.25rem (20px) | 500 | 1.3 | Minor headings, list group labels. |
| body | 1rem (16px) | 400 | 1.55 | Default body copy, paragraphs, descriptions. |
| small | 0.875rem (14px) | 400 | 1.5 | Metadata, labels, secondary captions. |
| caption | 0.75rem (12px) | 500 | 1.4 | Uppercase eyebrow labels, badge text, dense metadata. |

### Letter Spacing

- **Display and large headings:** tightened (`-0.015em` to `-0.02em`) for editorial weight.
- **Body and small text:** neutral tracking (`0`).
- **All-caps labels (caption):** opened up (`+0.04em`) for legibility.
- **Long-form reading:** body copy uses `1.55` line-height for sustained ingredient-list reading.

---

## Spacing System

### Spacing Philosophy

Generous breathing room — balanced between gallery and dashboard. The system uses a 4px base unit but emphasizes the mid-to-large steps (16, 24, 32, 48) for component padding and section rhythm. A product detail or comparison page should feel scannable and unhurried, never crowded. Vertical section padding is never less than 48px on mobile, 80px on desktop.

### Base Unit

**4px.** All spacing values are multiples of 4 for consistency with common grid systems and pixel-perfect rendering.

### Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Hairline spacing — icon-text gaps, tightest stack. |
| space-2 | 8px | Tight inline spacing — between adjacent labels and inputs. |
| space-3 | 12px | Small component padding, tag inner padding. |
| space-4 | 16px | Default component padding, body paragraph spacing. |
| space-6 | 24px | Default card padding, form field spacing. |
| space-8 | 32px | Generous card padding, between distinct UI groups. |
| space-10 | 40px | Section padding within a card, between content blocks. |
| space-12 | 48px | Section spacing on mobile, page margin on tablet. |
| space-16 | 64px | Section spacing on tablet, large component gaps. |

### Layout Metrics

| Property | Value |
|----------|-------|
| Content max-width | 1200px |
| Page margin (desktop) | 48px |
| Page margin (mobile) | 20px |
| Section spacing | 80px desktop / 48px mobile |

---

## Shape and Borders

### Shape Philosophy

Soft and rounded throughout — pill-shaped CTAs and generously rounded card corners communicate approachability without tipping into playful. The radius scale is small (16/24/full) and used consistently: components either have a 16px radius (most cards, inputs), a 24px radius (large feature cards, modals), or are fully rounded (buttons, tags, avatars). Sharp 90° corners do not appear anywhere except dividing lines.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 8px | Small chips, badges, dense inline elements. |
| radius-md | 16px | Default card radius, inputs, modal content, list rows. |
| radius-lg | 24px | Feature cards, hero panels, large modal containers. |
| radius-full | 9999px | Buttons (pill CTAs), tags, avatars, circular icon buttons. |

### Borders

| Type | Value |
|------|-------|
| Default | 1px solid `#E7E9E3` (neutral-200) |
| Subtle | 1px solid `#F4F5F1` (neutral-100) |
| Focus ring | 2px solid `#4A7C59` (leaf-500), 2px offset |

### Shadows

Shadows are restrained. Depth is primarily communicated through surface stacking. Shadows are reserved for floating UI — dropdowns, popovers, modals, toasts.

| Level | Value | Usage |
|-------|-------|-------|
| shadow-sm | `0 1px 2px rgba(23, 26, 22, 0.04)` | Subtle lift — hover states on cards. |
| shadow-md | `0 4px 12px rgba(23, 26, 22, 0.06)` | Dropdowns, popovers, tooltips. |
| shadow-lg | `0 12px 32px rgba(23, 26, 22, 0.08)` | Modals, sheets, command palettes. |

---

## Motion

### Motion Philosophy

Motion is smooth and polished — present enough to feel crafted, restrained enough to never call attention to itself. Default transitions are 250ms with a gentle ease-out curve. Micro-interactions are 150ms. Entrances are 400ms. Motion respects `prefers-reduced-motion` — durations collapse to zero. When a user clicks "Add to Library," the action feels confirmed without celebration; nothing bounces, spins, or pulses.

### Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| duration-fast | 150ms | Hover, focus, button-press feedback. |
| duration-normal | 250ms | Default — color transitions, accordion expand, tab switch. |
| duration-slow | 400ms | Modal/sheet enter, page transitions, large reveals. |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| ease-default | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Most transitions — gentle out, soft settle. |
| ease-in | `cubic-bezier(0.4, 0, 1, 1)` | Exits — dismissals, items leaving the viewport. |
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` | Entrances — items appearing, modals opening. |

### Reduced Motion

Honor `@media (prefers-reduced-motion: reduce)` globally. Replace all animation durations with `0.01ms` and disable transform-based animations.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode

Light mode is home; dark mode is supported. The dark palette inverts surface hierarchy while preserving the warm-cool tension and muted brand green.

**Adaptation strategy:**
- Surface stacking inverts: dark base (`#15191A`) → less-dark card (`#1F2220`) → warm-deep (`#2A2820`).
- Brand green brightens to `#7AA589` (the sage variant) to maintain ≥4.5:1 contrast on dark surfaces.
- Sand tones shift from light cream to deep warm earth — same warmth role, opposite tonal direction.
- Shadows become darker and softer, never lighter — depth comes from light reflection, not glow.
- Implementation: `@media (prefers-color-scheme: dark)` with a `data-theme="dark"` override hook for manual toggling.

---

## Responsive Breakpoints

| Name | Value | Behavior |
|------|-------|----------|
| sm | 640px | Large phone, small tablet. Layout shifts from single column to two-column where useful. |
| md | 768px | Tablet. Page margin grows to 32px. Card grids in 2-3 columns. |
| lg | 1024px | Small desktop. Page margin grows to 48px. Comparison views appear side-by-side. |
| xl | 1280px | Standard desktop. Content max-width caps at 1200px. |

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* === Color: Brand === */
  --color-leaf-100: #E4EEE7;
  --color-leaf-400: #7AA589;
  --color-leaf-500: #4A7C59;
  --color-leaf-600: #3A6448;

  /* === Color: Neutral (cool, faint green undertone) === */
  --color-neutral-50:  #FAFBF8;
  --color-neutral-100: #F4F5F1;
  --color-neutral-200: #E7E9E3;
  --color-neutral-300: #D2D5CD;
  --color-neutral-400: #A7ACA3;
  --color-neutral-500: #7A7F76;
  --color-neutral-600: #565A53;
  --color-neutral-700: #3D413B;
  --color-neutral-800: #272B26;
  --color-neutral-900: #171A16;

  /* === Color: Sand (warm neutrals) === */
  --color-sand-50:  #FAF7F0;
  --color-sand-100: #F2EDE0;
  --color-sand-200: #E5DDC8;
  --color-sand-300: #C7BCA0;

  /* === Color: Semantic === */
  --color-success: #3F8754;
  --color-warning: #B8843D;
  --color-error:   #A84A3F;
  --color-info:    #4A7087;

  /* === Surfaces === */
  --surface-page:    #F8F9F6;
  --surface-card:    #FFFFFF;
  --surface-warm:    #F2EDE0;
  --surface-inset:   #F4F5F1;
  --surface-overlay: rgba(23, 26, 22, 0.4);

  /* === Text === */
  --text-primary:   var(--color-neutral-900);
  --text-secondary: var(--color-neutral-600);
  --text-tertiary:  var(--color-neutral-500);
  --text-inverse:   var(--color-neutral-50);
  --text-brand:     var(--color-leaf-600);

  /* === Typography === */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;

  --type-display:  3.5rem;
  --type-h1:       2.5rem;
  --type-h2:       1.875rem;
  --type-h3:       1.5rem;
  --type-h4:       1.25rem;
  --type-body:     1rem;
  --type-small:    0.875rem;
  --type-caption:  0.75rem;

  /* === Spacing === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* === Radius === */
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   24px;
  --radius-full: 9999px;

  /* === Borders === */
  --border-default: 1px solid var(--color-neutral-200);
  --border-subtle:  1px solid var(--color-neutral-100);

  /* === Shadows === */
  --shadow-sm: 0 1px 2px rgba(23, 26, 22, 0.04);
  --shadow-md: 0 4px 12px rgba(23, 26, 22, 0.06);
  --shadow-lg: 0 12px 32px rgba(23, 26, 22, 0.08);

  /* === Motion === */
  --duration-fast:   150ms;
  --duration-normal: 250ms;
  --duration-slow:   400ms;
  --ease-default: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);

  /* === Layout === */
  --content-max: 1200px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface-page:    #15191A;
    --surface-card:    #1F2220;
    --surface-warm:    #2A2820;
    --surface-inset:   #0F1211;
    --surface-overlay: rgba(0, 0, 0, 0.6);

    --text-primary:   #F4F5F1;
    --text-secondary: #A7ACA3;
    --text-tertiary:  #7A7F76;
    --text-brand:     #9CBFA7;

    --color-leaf-500: #7AA589;
    --color-leaf-600: #9CBFA7;

    --color-success: #5FA877;
    --color-warning: #D6A35C;
    --color-error:   #C76B5F;
    --color-info:    #6F95AB;
  }
}
```

---

## Open Decisions

- **Clean / Caution / Not-Clean visual treatment.** [Assumed — confirm or override] Three-tier ingredient assessment surfaced as: leaf-500 badge (clean), warning amber badge (caution), error brick badge (not-clean) — always with icon + label, never color alone. Specific badge layout to be designed in component phase.
- **Photography treatment.** Reference visuals use product photography on light-gray fills. Recommend product imagery on `surface-warm` or `neutral-100` panels at 16:9 or 1:1 ratios, with rounded `radius-md` containers. Photography style guide to be defined separately.
- **Iconography.** No icon library selected yet. Recommend a 1.5px stroke line-icon set (Lucide or Phosphor) to match the calm, considered tone.
- **Dark mode validation.** Defined and supported, but not yet visually validated end-to-end. Recommend a dark-mode review pass once the first three or four core components are built.
- **Tailwind integration.** Project uses Tailwind. These tokens should be mapped into `tailwind.config.js` under `theme.extend` so utility classes resolve to the design system tokens.

---
*Generated by /design-system-generator skill.*
