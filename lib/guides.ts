export interface GuideSection {
  heading: string;
  /** Each string is one <p> */
  paragraphs?: string[];
  bullets?: string[];
  /** Optional comparison table, rendered after paragraphs */
  table?: { headers: string[]; rows: string[][] };
  /** Optional closing paragraphs, rendered after bullets/table */
  after?: string[];
}

export interface GuideData {
  /** URL slug */
  slug: string;
  /** H1 and default page title */
  title: string;
  /** Meta description / card summary */
  description: string;
  /** ISO date the content was last reviewed */
  updated: string;
  readMinutes: number;
  /** Opening paragraphs before the first section */
  intro: string[];
  sections: GuideSection[];
  /** Service slugs to link at the end of the guide */
  relatedServices: string[];
}

/*
 * Price figures are typical GTA ranges, written as estimates — keep them
 * consistent with the figures in lib/services.ts and the homepage FAQ, and
 * re-check them yearly (bump `updated` when you do).
 */
export const guides: GuideData[] = [
  /* ── Roof replacement cost ─────────────────────────────────────── */
  {
    slug: "roof-replacement-cost-toronto",
    title: "How Much Does a Roof Replacement Cost in Toronto?",
    description:
      "Typical roof replacement costs in Toronto and the GTA by material, what drives the price up or down, and how to compare quotes fairly.",
    updated: "2026-11-01",
    readMinutes: 6,
    intro: [
      "A new roof is one of the largest maintenance costs a GTA homeowner will face, and quotes for the same house can vary by thousands of dollars. This guide covers typical price ranges in Toronto and the surrounding area, what actually moves the number, and how to tell whether a quote is reasonable.",
      "The figures below are typical ranges, not quotes. Every roof is different, and the only way to know your actual cost is a written estimate from a contractor who has looked at your roof.",
    ],
    sections: [
      {
        heading: "Typical costs by roofing material",
        paragraphs: [
          "Roofers price by roof area, usually quoted per square foot or per \"square\" (100 sq ft). Roof area is larger than your home's footprint because of the pitch and overhangs, so a house with 1,500 sq ft of floor space on one level may have 1,800–2,200 sq ft of roof.",
        ],
        table: {
          headers: ["Material", "Typical installed cost", "Typical GTA home*"],
          rows: [
            ["Asphalt shingles (architectural)", "$4.50–$9 per sq ft", "$8,000–$16,000"],
            ["Steel shingles or ribbed metal panels", "$10–$16 per sq ft", "$17,000–$30,000"],
            ["Standing seam metal", "$14–$25 per sq ft", "$25,000–$45,000"],
            ["Flat roof (modified bitumen, EPDM, TPO)", "$10–$18 per sq ft", "Varies with area — see below"],
          ],
        },
        after: [
          "*A typical 1,500–2,000 sq ft bungalow or two-storey home, including tear-off of one existing layer and disposal. Prices before HST.",
          "Flat roofs are usually smaller sections — a rear addition, garage, or porch — so the total is often in the $3,000–$10,000 range even though the per-square-foot rate is higher.",
        ],
      },
      {
        heading: "What pushes the price up or down",
        bullets: [
          "Roof size and pitch — steeper roofs need more safety equipment and take longer to work on.",
          "Complexity — dormers, valleys, skylights, chimneys, and multiple roof planes all add labour and flashing work.",
          "Layers to remove — tearing off two layers of old shingles costs more than one.",
          "Damaged decking — rotted plywood or boards found during tear-off are replaced at an extra per-sheet cost. A good quote states that price up front.",
          "Ventilation and eave protection — adding or upgrading roof vents and ice-and-water shield improves the roof's lifespan but adds to the cost.",
          "Access — tight lots, steep driveways, or no space for a disposal bin can add time.",
          "Season — late spring through fall is peak season; scheduling can be easier, and sometimes cheaper, at the edges of the season.",
        ],
      },
      {
        heading: "What a good quote includes",
        paragraphs: [
          "When you compare quotes, make sure you're comparing the same scope of work. A low quote that leaves out tear-off, flashing, or decking replacement often ends up costing more.",
        ],
        bullets: [
          "The shingle or panel brand and product line, not just \"asphalt shingles\"",
          "Tear-off and disposal of the existing roof",
          "Underlayment, ice-and-water shield, drip edge, and flashing details",
          "Ventilation work, if any",
          "A per-sheet price for any decking replacement",
          "Manufacturer warranty and the contractor's own workmanship warranty, in writing",
          "Start date, expected duration, payment schedule, and clean-up",
        ],
      },
      {
        heading: "How to keep the cost reasonable",
        bullets: [
          "Get two or three written quotes so you can see what's normal for your roof.",
          "Don't wait for a failure — replacing on your schedule avoids emergency pricing and interior damage.",
          "Ask whether the existing flashing or vents can be reused safely, and what it would save.",
          "Be cautious of quotes far below the others; they often leave out work you'll pay for later.",
        ],
      },
    ],
    relatedServices: ["roof-replacement", "roof-inspection"],
  },

  /* ── Roof repair cost ──────────────────────────────────────────── */
  {
    slug: "roof-repair-cost-toronto",
    title: "Roof Repair Costs in Toronto: What to Expect",
    description:
      "Typical costs for common roof repairs in Toronto and the GTA — missing shingles, flashing, vent boots, flat roof patches, and emergency calls.",
    updated: "2026-11-01",
    readMinutes: 5,
    intro: [
      "Most roof problems in the GTA start small: a few shingles lifted in a windstorm, a cracked rubber boot around a plumbing vent, or flashing that has pulled away from a chimney. Caught early, these are usually inexpensive fixes. Left alone, they can turn into ceiling, insulation, and structural repairs that cost far more than the roof work itself.",
      "Here's what common repairs typically cost, and what affects the price.",
    ],
    sections: [
      {
        heading: "Typical costs for common repairs",
        table: {
          headers: ["Repair", "Typical cost"],
          rows: [
            ["Replace a few missing or damaged shingles", "$300–$700"],
            ["Replace a plumbing vent boot", "$300–$600"],
            ["Reseal or replace chimney, wall, or skylight flashing", "$400–$1,500"],
            ["Flat roof patch or seam repair", "$400–$1,500"],
            ["Replace a section of damaged roof decking", "$600–$2,000"],
            ["Emergency tarp or temporary leak repair", "$300–$900"],
            ["Larger repairs (multiple areas, ice dam damage)", "$1,000–$3,500"],
          ],
        },
        after: [
          "Prices before HST. Many roofers have a minimum charge for any repair visit, so even a very small fix often starts around $300.",
        ],
      },
      {
        heading: "What affects the price",
        bullets: [
          "Finding the source — water travels along rafters and decking before it shows up on your ceiling, so the leak is often not directly above the stain. Tracking it down takes time.",
          "Roof height and pitch — a steep two-storey roof needs more safety setup than a low bungalow.",
          "Matching materials — older shingle colours may be discontinued, and the closest match may cost more or look slightly different.",
          "Hidden damage — soft or rotted decking under the damaged area has to be replaced before new shingles go on.",
          "Timing — after-hours or same-day emergency calls cost more than scheduled work.",
        ],
      },
      {
        heading: "When a repair isn't the right call",
        paragraphs: [
          "If your roof is near the end of its life, or you're paying for repairs every year, the money may be better put toward a replacement. Our repair vs. replacement guide, linked below, walks through how to decide.",
        ],
      },
      {
        heading: "What to do while you wait for a roofer",
        bullets: [
          "Move belongings away from the leak and put down a bucket or towels.",
          "If water is pooling in a bulging ceiling, a small hole at the lowest point lets it drain in a controlled way — only if you can do it safely.",
          "Take photos of the damage inside and out for your records and any insurance claim.",
          "Don't go up on the roof yourself, especially when it's wet, icy, or windy.",
        ],
      },
    ],
    relatedServices: ["roof-repair", "emergency-roofing"],
  },

  /* ── Signs you need a new roof ─────────────────────────────────── */
  {
    slug: "signs-you-need-a-new-roof",
    title: "8 Signs You Need a New Roof",
    description:
      "How to tell when your roof is nearing the end of its life — what to look for from the ground, in the attic, and inside your home.",
    updated: "2026-11-01",
    readMinutes: 5,
    intro: [
      "Roofs rarely fail all at once. In Ontario's climate, with its freeze-thaw cycles, heavy snow, and summer heat, an asphalt shingle roof usually lasts somewhere around 15–25 years, and it gives plenty of warning before it fails. Here's what to look for.",
      "You can check most of these from the ground with binoculars, or from inside your attic. There's no need to climb onto the roof.",
    ],
    sections: [
      {
        heading: "1. Your roof is 20 years old or more",
        paragraphs: [
          "Age alone doesn't mean replacement, but a roof in the 20-year range deserves a closer look. If you don't know when it was last replaced, your home inspection report or the previous owners may be able to tell you.",
        ],
      },
      {
        heading: "2. Curling, cupping, or cracked shingles",
        paragraphs: [
          "Shingles whose edges turn up (cupping) or whose middles lift (clawing) have lost their flexibility. Cracked shingles are another sign the material is drying out. Isolated cases can be repaired; widespread curling usually means the roof is at the end of its life.",
        ],
      },
      {
        heading: "3. Granules in the eavestroughs",
        paragraphs: [
          "The sand-like granules on asphalt shingles protect them from UV light. Some loss is normal on a new roof, but heavy granule buildup in your eavestroughs or downspouts on an older roof means the shingles are wearing out.",
        ],
      },
      {
        heading: "4. Bald or dark patches",
        paragraphs: [
          "Areas where granules have worn away look darker or smooth. Exposed asphalt breaks down quickly in the sun.",
        ],
      },
      {
        heading: "5. Sagging",
        paragraphs: [
          "A roofline that dips or sags can mean water-damaged decking or structural problems. This needs a professional look soon.",
        ],
      },
      {
        heading: "6. Daylight or water stains in the attic",
        paragraphs: [
          "On a sunny day, check your attic for light coming through the roof boards. Look for dark stains, damp insulation, or mould on the underside of the decking, especially around chimneys, vents, and valleys.",
        ],
      },
      {
        heading: "7. Repeated leaks or ice dams",
        paragraphs: [
          "One leak can be a flashing issue. Leaks in several places, or leaks that come back after repairs, usually point to a roof that's worn out overall. Ice dams every winter can also signal ventilation and insulation problems that a replacement is a good time to fix.",
        ],
      },
      {
        heading: "8. Your neighbours are replacing theirs",
        paragraphs: [
          "Homes in the same subdivision were often roofed at the same time with similar materials. If houses on your street are getting new roofs, yours may not be far behind.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "If you're seeing two or more of these signs, a professional inspection will tell you whether a repair can buy you a few more years or whether it's time to plan a replacement. Planning ahead lets you choose your timing and compare quotes, instead of replacing in a hurry after a leak.",
        ],
      },
    ],
    relatedServices: ["roof-inspection", "roof-replacement"],
  },

  /* ── Repair vs replacement ─────────────────────────────────────── */
  {
    slug: "roof-repair-vs-replacement",
    title: "Roof Repair vs. Replacement: How to Decide",
    description:
      "A practical way to decide whether to repair your roof or replace it, based on age, extent of damage, cost, and your plans for the house.",
    updated: "2026-11-01",
    readMinutes: 5,
    intro: [
      "When a roof starts leaking, the first question is usually whether a repair will do or whether it's time for a new roof. The answer depends on four things: how old the roof is, how widespread the problem is, what the repair costs compared with a replacement, and how long you plan to stay in the house.",
    ],
    sections: [
      {
        heading: "Repair usually makes sense when…",
        bullets: [
          "The roof is less than about 15 years old and otherwise in good shape.",
          "The damage is limited to one area — a few shingles, one flashing detail, a single vent.",
          "The cause is clear, such as wind damage or a failed vent boot, rather than general wear.",
          "Matching shingles are still available, or the repair is somewhere it won't be noticed.",
        ],
      },
      {
        heading: "Replacement usually makes sense when…",
        bullets: [
          "The roof is 20 years old or more and showing general wear — curling, granule loss, bald patches.",
          "You're dealing with leaks in more than one place, or the same leak keeps coming back.",
          "The decking is soft, rotted, or sagging in more than a small area.",
          "Repair quotes are approaching a third or more of the cost of a new roof.",
          "You've already paid for several repairs in the past few years.",
        ],
      },
      {
        heading: "Consider your plans for the house",
        paragraphs: [
          "If you're selling within a year or two, a well-documented repair may be enough — though buyers and their inspectors will notice an old roof, and it can come up in negotiations. If you're staying long-term, replacing an aging roof on your own schedule is usually cheaper than waiting for a failure that damages ceilings, insulation, and drywall.",
        ],
      },
      {
        heading: "What about re-roofing over the old shingles?",
        paragraphs: [
          "Installing a new layer over existing shingles saves on tear-off, but it hides the condition of the decking, adds weight, and can shorten the life of the new shingles. Many manufacturers also limit their warranties on overlays. Most roofers recommend a full tear-off, and it's what we'd suggest asking for.",
        ],
      },
      {
        heading: "Get an honest assessment",
        paragraphs: [
          "A good roofer will tell you when a repair is enough. If every contractor you talk to pushes a full replacement on a younger roof with a single problem, get another opinion. A paid inspection with a written report is a reasonable investment when you're deciding between a few hundred dollars and several thousand.",
        ],
      },
    ],
    relatedServices: ["roof-repair", "roof-replacement", "roof-inspection"],
  },

  /* ── Ice dams ──────────────────────────────────────────────────── */
  {
    slug: "ice-dams-ontario",
    title: "Ice Dams: Why They Form and How to Prevent Them",
    description:
      "What causes ice dams on Ontario roofs, how to deal with one safely, and the long-term fixes that stop them from coming back.",
    updated: "2026-11-01",
    readMinutes: 6,
    intro: [
      "Ice dams are one of the most common causes of winter roof leaks in the GTA. They show up as thick ridges of ice along the edge of the roof, often with icicles hanging from the eavestroughs, and they can push water back under the shingles and into your walls and ceilings.",
    ],
    sections: [
      {
        heading: "Why ice dams form",
        paragraphs: [
          "Heat escaping from your living space warms the attic and the underside of the roof. Snow on the upper part of the roof melts, and the water runs down to the overhang at the eaves, which sits outside the heated part of the house and stays cold. There it refreezes. Over days of melting and refreezing, the ice builds into a dam, and meltwater pools behind it.",
          "Shingles shed running water well, but they aren't designed to hold back standing water. Pooled water works its way under the shingles and into the house.",
        ],
      },
      {
        heading: "Signs you have an ice dam problem",
        bullets: [
          "A thick ridge of ice along the eaves",
          "Large icicles, especially with water dripping behind the eavestroughs",
          "Water stains or peeling paint on ceilings or exterior walls near the eaves",
          "Damp or frosty insulation in the attic",
        ],
      },
      {
        heading: "What to do if you have one now",
        bullets: [
          "Use a roof rake from the ground to pull snow off the lower few feet of the roof. This removes the snow that would feed the dam.",
          "Don't chip at the ice with a hammer, axe, or shovel. It's easy to damage the shingles and eavestroughs, and working on an icy ladder is dangerous.",
          "Calcium chloride ice melt (not rock salt) placed in a stocking across the dam can open a channel for water to drain. Rock salt damages shingles, metal, and plants.",
          "For large dams or active leaks, call a roofer who does ice dam removal. Professionals typically use low-pressure steam, which melts the ice without damaging the roof.",
        ],
      },
      {
        heading: "How to prevent ice dams long-term",
        paragraphs: [
          "Ice dams are a symptom of heat getting into the attic. The lasting fix is keeping the roof deck cold so snow melts evenly or not at all.",
        ],
        bullets: [
          "Air-seal the attic floor — gaps around light fixtures, plumbing stacks, chimneys, and the attic hatch let warm, moist air into the attic. Sealing them is often the most effective single fix.",
          "Add insulation — many older GTA homes have far less attic insulation than current standards for new homes.",
          "Improve ventilation — soffit vents at the eaves and ridge or roof vents at the top keep cold outside air moving under the roof deck. Make sure insulation isn't blocking the soffits.",
          "Install ice-and-water shield when you re-roof — a self-adhering waterproof membrane along the eaves keeps water out even if a dam forms. It's standard practice on new shingle roofs in Ontario.",
          "Heat cables — electric de-icing cables along the eaves can help on problem areas, but they treat the symptom and cost money to run. Use them after fixing insulation and ventilation, not instead.",
        ],
      },
      {
        heading: "Will insurance cover ice dam damage?",
        paragraphs: [
          "Many Ontario home insurance policies cover sudden water damage to the interior caused by ice dams, but coverage varies, and damage blamed on poor maintenance may be excluded. Check your policy, document the damage with photos, and call your insurer before major repairs.",
        ],
      },
    ],
    relatedServices: ["roof-repair", "emergency-roofing", "roof-inspection"],
  },

  /* ── Hiring a roofer ───────────────────────────────────────────── */
  {
    slug: "hiring-a-roofing-contractor-ontario",
    title: "How to Hire a Roofing Contractor in Ontario",
    description:
      "What to check before you hire a roofer in Ontario — WSIB clearance, insurance, written contracts, warranties, and the red flags to watch for.",
    updated: "2026-11-01",
    readMinutes: 6,
    intro: [
      "Most roofing problems homeowners run into come from hiring the wrong contractor, not from the roof itself. A few checks before you sign will protect you from poor workmanship, surprise costs, and liability if someone is hurt on your property.",
    ],
    sections: [
      {
        heading: "1. Ask for a WSIB clearance certificate",
        paragraphs: [
          "Roofing is one of the most dangerous trades, and most construction businesses in Ontario must have coverage with the Workplace Safety and Insurance Board (WSIB). A clearance certificate shows the contractor's account is in good standing. You can ask the contractor for it, or look it up yourself on the WSIB website.",
          "Hiring a contractor without valid coverage can leave you exposed if a worker is injured on your property, so this is one of the most important checks you can make.",
        ],
      },
      {
        heading: "2. Confirm liability insurance",
        paragraphs: [
          "Ask for a certificate of commercial general liability insurance. It covers damage to your home or property caused by the work, such as a ladder through a window or water damage during a tear-off. Check that the policy is current and that the business name matches the one on your contract.",
        ],
      },
      {
        heading: "3. Check licensing and trade credentials",
        paragraphs: [
          "Ontario doesn't have a province-wide licence specifically for roofing contractors, but some municipalities have their own business licensing rules, so check with your city. Roofer is a recognized trade in Ontario, and some crews include certified roofers. Membership in an industry association or certification from a shingle manufacturer, which is often needed to offer extended warranties, are good signs too.",
        ],
      },
      {
        heading: "4. Get it in writing",
        paragraphs: [
          "Ontario's Consumer Protection Act gives you rights when you hire a contractor, including a written contract for most home renovation work and, for agreements signed at your home, a 10-day cooling-off period during which you can cancel. A good roofing contract includes:",
        ],
        bullets: [
          "The full scope of work, including tear-off, underlayment, ice-and-water shield, flashing, and ventilation",
          "Specific materials by brand and product line",
          "How decking replacement will be priced if rot is found",
          "Start date, expected completion, and who handles any permits",
          "Total price, deposit, and payment schedule",
          "Workmanship warranty length and what it covers, plus the manufacturer warranty",
          "Clean-up, including a magnetic sweep for nails",
        ],
      },
      {
        heading: "5. Watch for red flags",
        bullets: [
          "Door-to-door offers after a storm, especially from out-of-town crews",
          "Pressure to sign today for a \"special price\"",
          "A large upfront payment, or cash only",
          "No physical business address or local references",
          "A quote far below every other one",
          "Reluctance to provide proof of WSIB coverage or insurance",
        ],
      },
      {
        heading: "6. Compare a few quotes",
        paragraphs: [
          "Two or three written quotes for the same scope of work will show you what's normal for your roof. The cheapest quote is often missing something; the most expensive isn't automatically the best. Ask each contractor to explain any differences.",
        ],
      },
    ],
    relatedServices: ["roof-replacement", "roof-repair", "roof-inspection"],
  },
];

/** Look up a guide by its slug */
export function getGuideBySlug(slug: string): GuideData | undefined {
  return guides.find((g) => g.slug === slug);
}
