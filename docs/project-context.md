# Project Context Document
**Project:** Clean Shopper
**Date:** 2026-04-04
**Source:** Project brief (CleanShopper_ProjectBrief.md) and build instructions (CLAUDE.md)
**Version:** 2.0

---

## 1. Problem Statement
Consumers who want to avoid toxic or harmful ingredients in home, personal care, and pantry products face a fragmented, time-consuming research process. Product labels require expertise to interpret, "clean" and "natural" marketing claims are unregulated and often misleading, and there is no single tool that combines real-time ingredient safety evaluation with persistent personal preference tracking across product categories.

## 2. ICP (Ideal Customer Profile)
Someone actively trying to replace products in their home with safer alternatives -- switching cleaning supplies, choosing personal care items, or selecting pantry staples with fewer harmful ingredients. They already read product labels and have likely consulted resources like EWG Skin Deep, but find the process too slow and scattered to sustain across every purchase. They recognize that their own knowledge of ingredient safety is limited -- they cannot interpret chemical names or evaluate safety claims without help. They may keep a mental list of brands they trust or ingredients they avoid, but have no tool that remembers or applies those preferences automatically. They are not researchers or chemists. They are motivated consumers who want trustworthy, personalized answers without doing the legwork every time.

## 3. Pain Points
- **Ingredient labels are opaque.** Most consumers cannot interpret chemical ingredient names or assess their safety without specialized knowledge.
- **Marketing claims are unreliable.** Terms like "clean," "natural," and "non-toxic" have no regulated meaning and frequently mislead buyers.
- **Research is fragmented and slow.** Evaluating a single product requires cross-referencing multiple databases, reviews, and certification bodies across separate tabs and tools.
- **Preferences have no persistent home.** When a user identifies ingredients to avoid or brands to trust, that knowledge lives in their head or scattered notes. No tool carries it forward into future searches automatically.

## 4. Proposed Solution
- Users can **describe what they're looking for** in natural language and receive researched product recommendations with ingredient safety reasoning.
- Users can **get a clean or not-clean assessment** for a specific product, based on ingredient analysis drawn from EWG Skin Deep data and evaluated by Claude.
- Users can **save their preferences** -- ingredients to avoid, trusted brands, certifications that matter to them (EWG Verified, USDA Organic, B Corp) -- and have those preferences applied automatically to every future recommendation.
- Users can **compare two or more products side by side** and receive a clear recommendation grounded in their saved preferences.
- Users can **add recommended products to a shopping cart** that persists across sessions.
- Users can **save products to a personal library** organized by category for future reference.

## 5. Success Metrics
Not defined in source material.

## 6. Design Constraints
**Platform:** Web application (single-page React app), conversational interface backed by Claude
**Geography:** Not specified
**Accessibility:** Not specified beyond semantic HTML requirement in CLAUDE.md
**Technical:**
- React (Vite) frontend, Tailwind CSS for styling
- Supabase (PostgreSQL) for data persistence
- Claude API (claude-sonnet-4-20250514) for AI-powered research and ingredient analysis
- EWG Skin Deep API for ingredient safety data
- Vercel for deployment
- Single-user, no authentication in V1
- State management limited to useState and useContext (no external state libraries)
- All API calls routed through /src/lib/api/ -- never inline in components

**Other:**
- Course demo project for "Claude Code for Designers" -- built incrementally over four weeks with live instructor demos
- Out of scope for V1: checkout/payments, direct retailer integrations, barcode scanning, user accounts/authentication, mobile app

## 7. Open Questions
1. What specific EWG Skin Deep API endpoints are available, and what data format do they return? Is API access confirmed and provisioned?
2. How does the conversational interface work in practice -- is there a chat-style UI, or are product searches triggered through a more structured form-based interface?
3. What constitutes a "clean" vs "not clean" assessment? Are there defined thresholds, scoring rubrics, or ingredient blacklists, or does Claude determine this per-query with no fixed criteria?
4. How are user preferences stored in Supabase -- what is the schema for ingredients, brands, and certifications?
5. What is the build phase sequence? (CLAUDE.md references /docs/build-plan.md but the file does not exist.)
6. What component library is being used? (CLAUDE.md references /docs/component-spec.md but the file does not exist.)
7. How does the shopping cart persist across sessions -- Supabase rows, or localStorage as a fallback?
8. The CLAUDE.md specifies React with Vite, but the project is currently scaffolded with Create React App. Is migration to Vite planned, or should CLAUDE.md be updated to reflect CRA?
9. The brief mentions Claude "searches the web in real time" -- does this mean Claude's built-in web search tool, or a separate search API integration?

## 8. Gaps
1. **Success Metrics (Section 5):** Not defined in source material. Without quantitative or qualitative success criteria, there is no way to evaluate whether the product is working as intended. Needed: what does a successful session look like? What signals indicate the tool is delivering value (e.g., products saved, preferences set, cart usage, repeat sessions)?
2. **Build Plan:** CLAUDE.md references /docs/build-plan.md for phased delivery, but the file does not exist. Needed to understand what to build first, how features are sequenced across the four-week course, and what constitutes each phase's deliverable.
3. **Component Spec:** CLAUDE.md references /docs/component-spec.md as the component library, but the file does not exist. Needed before building UI to avoid creating redundant components and to maintain design consistency.
4. **Database Schema:** No schema or data model is provided for Supabase. Needed to understand how products, preferences, cart items, and library entries are structured and relate to each other.
5. **Visual Design:** No wireframes, mockups, design tokens, or design system references were provided. Needed to make layout, typography, color, and spacing decisions during implementation.
6. **Clean Assessment Rubric:** The core value proposition -- telling users whether a product is "clean" -- has no defined criteria. No scoring thresholds, ingredient blacklists, or evaluation framework exist in the source material. This is a critical gap that affects prompt engineering, result display, and user trust in the product's recommendations.
7. **Accessibility Requirements:** Not defined beyond semantic HTML. Needed to determine WCAG compliance targets, keyboard navigation requirements, screen reader support, and color contrast standards before building UI.

---
*Generated by /project-context skill. Add to this document as decisions are made and questions are resolved.*
