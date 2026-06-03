/**
 * Placeholder product data for the Browse page.
 *
 * Six products spread across three categories. Demo content only — none of this
 * is fetched or persisted; it exists so the Browse layout can be reviewed.
 *
 * `attributes` are category-appropriate certification / attribute labels shown
 * as tags on each ProductCard (capped at 3, with a "+N more" overflow tag).
 */

export const BROWSE_CATEGORIES = ['Personal Care', 'Home Cleaning', 'Baby Care'];

export const BROWSE_PRODUCTS = [
  // ── Personal Care ───────────────────────────────────────────────
  {
    id: 'pc-castile-soap',
    name: "Dr. Bronner's Pure-Castile Soap",
    category: 'Personal Care',
    safetyLevel: 'clean',
    attributes: ['EWG Verified', 'Cruelty-Free', 'Fragrance-Free', 'Vegan'],
    isBestMatch: true,
    preferenceNote: 'Matches your fragrance-free preference.',
    description:
      'Organic and fair-trade, with no synthetic preservatives, detergents, or foaming agents.',
  },
  {
    id: 'pc-native-deodorant',
    name: 'Native Aluminum-Free Deodorant',
    category: 'Personal Care',
    safetyLevel: 'caution',
    attributes: ['Cruelty-Free', 'Aluminum-Free'],
    description:
      'Aluminum-free and effective, but the added fragrance blend may irritate sensitive skin.',
  },

  // ── Home Cleaning ───────────────────────────────────────────────
  {
    id: 'hc-branch-basics',
    name: 'Branch Basics Concentrate',
    category: 'Home Cleaning',
    safetyLevel: 'clean',
    attributes: ['EPA Safer Choice', 'Plant-Based', 'Fragrance-Free'],
    description:
      'A plant- and mineral-based all-purpose concentrate, free of fragrance and harsh surfactants.',
  },
  {
    id: 'hc-method-spray',
    name: 'Method Antibacterial Spray',
    category: 'Home Cleaning',
    safetyLevel: 'caution',
    attributes: ['Plant-Based', 'Cruelty-Free'],
    description:
      'Convenient and widely available, but contains a quaternary ammonium compound flagged for respiratory concerns.',
  },

  // ── Baby Care ───────────────────────────────────────────────────
  {
    id: 'bc-pipette-balm',
    name: 'Pipette Baby Balm',
    category: 'Baby Care',
    safetyLevel: 'clean',
    attributes: ['EWG Verified', 'Pediatrician-Tested', 'Fragrance-Free'],
    description:
      'A simple, fragrance-free balm built around sugarcane-derived squalane for sensitive newborn skin.',
  },
  {
    id: 'bc-conventional-wipes',
    name: 'Conventional Scented Baby Wipes',
    category: 'Baby Care',
    safetyLevel: 'avoid',
    attributes: ['Dermatologist-Tested'],
    description:
      'Contains preservatives and synthetic fragrance flagged for skin sensitization and allergy risk.',
  },
];
