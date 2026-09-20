export interface Review {
  author: string;
  city: string;
  rating: number; // out of 10
  date: string;
  service: string;
  body: string;
}

export interface Contractor {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  founded: number;
  city: string;
  serviceAreas: string[];
  services: string[];   // matches service slugs in lib/services.ts
  roofTypes: string[];  // "shingle" | "metal" | "flat"
  rating: number;       // out of 10
  reviewCount: number;
  verified: boolean;
  licensed: boolean;
  insured: boolean;
  backgroundCheck: boolean;
  phone: string;
  highlights: string[];
  reviews: Review[];
}

/**
 * REAL CONTRACTORS ONLY.
 *
 * This array is intentionally empty. Every page that reads it degrades to a
 * "listings coming soon" state, so the site is safe to run live as-is.
 *
 * Add an entry only once a roofer has actually signed up through /partners and
 * you hold evidence for every claim you publish about them:
 *
 *   - `licensed`      — you have seen their Ontario licence / municipal permit standing
 *   - `insured`       — you have a current certificate of insurance on file
 *   - `verified`      — you have confirmed the business is real and operating
 *   - `backgroundCheck` — a background check was actually performed
 *   - `rating` / `reviewCount` / `reviews` — sourced from real homeowners who
 *     used the contractor. Never invent, pad, or estimate these.
 *
 * Publishing unearned trust badges or fabricated reviews is deceptive marketing
 * under Canada's Competition Act. Leave a flag `false` and omit reviews until
 * the evidence exists — the pages handle missing data cleanly.
 *
 * Template for a real listing:
 *
 * {
 *   slug: "example-roofing-toronto",
 *   name: "Example Roofing Toronto",
 *   tagline: "One line describing what they do.",
 *   description: ["Paragraph one.", "Paragraph two."],
 *   founded: 2008,
 *   city: "Toronto",
 *   serviceAreas: ["Toronto", "North York"],
 *   services: ["roof-repair", "roof-replacement"],
 *   roofTypes: ["shingle", "flat"],
 *   rating: 0,
 *   reviewCount: 0,
 *   verified: false,
 *   licensed: false,
 *   insured: false,
 *   backgroundCheck: false,
 *   phone: "(416) 555-0100",
 *   highlights: [],
 *   reviews: [],
 * }
 */
export const contractors: Contractor[] = [];

export function getContractorBySlug(slug: string): Contractor | undefined {
  return contractors.find((c) => c.slug === slug);
}

/** True once at least one real contractor has been added to the directory. */
export const hasContractors = contractors.length > 0;

/** Average rating across listed contractors, or null when there is nothing to average. */
export function averageRating(): number | null {
  if (contractors.length === 0) return null;
  const total = contractors.reduce((sum, c) => sum + c.rating, 0);
  return Math.round((total / contractors.length) * 10) / 10;
}

/** Total review count across listed contractors. */
export function totalReviewCount(): number {
  return contractors.reduce((sum, c) => sum + c.reviewCount, 0);
}
