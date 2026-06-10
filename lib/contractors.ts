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

export const contractors: Contractor[] = [
  {
    slug: "apex-roofing-toronto",
    name: "Apex Roofing Toronto",
    tagline: "Toronto's highest-rated roofing contractor for shingle and flat roof systems.",
    description: [
      "Apex Roofing Toronto has been protecting homes across the city since 2008. Founded by a third-generation roofer, the company built its reputation on one principle: do the job right the first time. Every project — from a single shingle repair to a full tear-off and replacement — is managed by a licensed foreman and backed by a written workmanship warranty.",
      "Apex specializes in both sloped asphalt shingle roofs and flat roof membrane systems on Toronto's many semi-detached homes, row houses, and rear additions. The team is fully fluent with Toronto's heritage housing stock and knows how to work on older homes without causing collateral damage to aging fascia, soffits, and masonry.",
    ],
    founded: 2008,
    city: "Toronto",
    serviceAreas: ["Toronto", "North York", "Scarborough", "Etobicoke", "East York", "York"],
    services: ["roof-repair", "roof-replacement", "roof-inspection", "flat-roof"],
    roofTypes: ["shingle", "flat"],
    rating: 9.6,
    reviewCount: 124,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: true,
    phone: "(416) 555-0201",
    highlights: [
      "Over 1,200 roofs completed across Toronto since 2008",
      "Certified installer for IKO and GAF shingle systems",
      "Same-day emergency tarping available 7 days a week",
      "All crews are full-time employees — no subcontracting",
    ],
    reviews: [
      {
        author: "Sandra M.",
        city: "East York",
        rating: 10,
        date: "2024-10-14",
        service: "Roof Replacement",
        body: "Apex replaced the entire roof on our 1950s bungalow in two days. The crew was professional, cleaned up every nail, and the foreman walked us through every step. The new roof looks incredible. Would recommend without hesitation.",
      },
      {
        author: "James T.",
        city: "North York",
        rating: 9,
        date: "2024-08-22",
        service: "Flat Roof Repair",
        body: "We had a stubborn flat roof leak on our addition that two other contractors couldn't fix permanently. Apex found the actual source — a failed seam near the parapet wall — and repaired it properly. No more leaks after the first heavy rain. Very happy.",
      },
      {
        author: "Priya K.",
        city: "Scarborough",
        rating: 10,
        date: "2024-05-03",
        service: "Roof Inspection",
        body: "Booked an inspection before listing our home for sale. Got a thorough written report with photos within 24 hours. The inspector was honest about what needed attention and what could wait. Exactly what we needed for disclosure.",
      },
      {
        author: "David L.",
        city: "Toronto",
        rating: 9,
        date: "2024-02-18",
        service: "Emergency Roofing",
        body: "A tree branch came through our roof during an ice storm on a Saturday night. Apex had someone there by Sunday morning with a tarp and temporary repair. Permanent fix was done the following week. Lifesavers.",
      },
    ],
  },

  {
    slug: "shield-roofing-mississauga",
    name: "Shield Roofing Mississauga",
    tagline: "Mississauga's trusted roofing specialists — shingle, metal, and flat systems.",
    description: [
      "Shield Roofing has served Mississauga homeowners since 2011, growing from a two-person operation to a team of 14 licensed roofers. The company focuses exclusively on residential roofing — no commercial distractions — which means every crew member is trained specifically on the types of homes found across Mississauga's neighbourhoods, from Port Credit's older bungalows to Erin Mills' newer two-storeys.",
      "Shield is one of the few GTA roofing contractors certified to install standing seam metal roofing, making them a go-to choice for Mississauga homeowners looking to upgrade from asphalt to a longer-lasting metal system. They also handle all flat roof work including TPO, EPDM, and modified bitumen on garages and additions.",
    ],
    founded: 2011,
    city: "Mississauga",
    serviceAreas: ["Mississauga", "Brampton", "Oakville", "Etobicoke", "Streetsville", "Port Credit"],
    services: ["roof-repair", "roof-replacement", "roof-inspection", "flat-roof"],
    roofTypes: ["shingle", "metal", "flat"],
    rating: 9.4,
    reviewCount: 89,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: true,
    phone: "(905) 555-0312",
    highlights: [
      "Certified metal roofing installer — standing seam and metal shingle systems",
      "All three flat roof systems: TPO, EPDM, and modified bitumen",
      "Free 20-point written inspection with every quote",
      "Financing available through approved lenders",
    ],
    reviews: [
      {
        author: "Karen B.",
        city: "Mississauga",
        rating: 10,
        date: "2024-09-05",
        service: "Metal Roof Installation",
        body: "We went with Shield for a full standing seam metal roof replacement. It wasn't cheap but the quality is extraordinary. The crew was meticulous and the project manager kept us informed at every stage. Worth every penny.",
      },
      {
        author: "Raj P.",
        city: "Port Credit",
        rating: 9,
        date: "2024-07-11",
        service: "Roof Repair",
        body: "Fast response on a leak repair. The technician found the flashing problem around our chimney within minutes. Repair was done same day. Honest pricing, no upselling. Will definitely call again.",
      },
      {
        author: "Michelle O.",
        city: "Streetsville",
        rating: 10,
        date: "2024-04-28",
        service: "Roof Replacement",
        body: "Full shingle replacement on our 25-year-old roof. Shield's quote was competitive and the work was flawless. They replaced three sheets of rotted decking they found during tear-off at no extra charge. Great integrity.",
      },
    ],
  },

  {
    slug: "cornerstone-roofing-brampton",
    name: "Cornerstone Roofing Brampton",
    tagline: "Brampton's go-to roofers for fast, affordable repairs and full replacements.",
    description: [
      "Cornerstone Roofing was founded in Brampton in 2015 by two contractors who saw a gap in the market for fast, fairly-priced roofing work in the city's booming subdivision neighbourhoods. Today the company handles over 200 residential roofing projects per year across Brampton and the surrounding area, with a reputation for quick scheduling and no-nonsense quotes.",
      "The team specializes in the type of homes that dominate Brampton's landscape — attached and semi-detached two-storeys with asphalt shingle roofs and attached garage flat sections. Cornerstone has also built a strong reputation for ice dam removal and prevention work, which is in high demand in Brampton's densely-built subdivisions every winter.",
    ],
    founded: 2015,
    city: "Brampton",
    serviceAreas: ["Brampton", "Mississauga", "Caledon", "Vaughan", "Bramalea", "Springdale"],
    services: ["roof-repair", "roof-replacement", "roof-inspection", "emergency-roofing", "flat-roof"],
    roofTypes: ["shingle", "flat"],
    rating: 9.1,
    reviewCount: 67,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: false,
    phone: "(905) 555-0423",
    highlights: [
      "200+ Brampton roofing projects completed annually",
      "Specialists in subdivision homes and attached garage flat roofs",
      "Ice dam removal and prevention service available all winter",
      "Next-day scheduling available for most repairs",
    ],
    reviews: [
      {
        author: "Tony F.",
        city: "Brampton",
        rating: 9,
        date: "2024-11-02",
        service: "Roof Repair",
        body: "Fast booking, fair price, clean work. They fixed three areas of wind damage on my shingle roof in a few hours. The crew was friendly and left the property spotless. No complaints at all.",
      },
      {
        author: "Anita S.",
        city: "Bramalea",
        rating: 9,
        date: "2024-06-17",
        service: "Roof Replacement",
        body: "Replaced our 22-year-old roof in one day. The team arrived at 7am and were finished by 4pm. Everything was cleaned up perfectly. The new shingles look great. Competitive pricing too.",
      },
      {
        author: "Mark W.",
        city: "Brampton",
        rating: 10,
        date: "2024-01-09",
        service: "Emergency Roofing",
        body: "Called on a -15 degree January morning about an ice dam leak. Cornerstone had someone there within 3 hours. They steamed out the ice dam, repaired the damaged shingles, and added proper ventilation baffles in the attic to prevent it happening again. Excellent work.",
      },
    ],
  },

  {
    slug: "ridgeline-roofing-markham",
    name: "Ridgeline Roofing Markham",
    tagline: "Premium roofing solutions for Markham and York Region homeowners.",
    description: [
      "Ridgeline Roofing was established in Markham in 2010 with a focus on the premium end of the residential roofing market. The company works exclusively on detached homes and targets homeowners who want the job done right — with top-tier materials, experienced crews, and thorough documentation throughout the project.",
      "Ridgeline is particularly well-known in Markham and Richmond Hill for its expertise on complex architectural rooflines — dormers, turrets, multiple valleys, and steep-pitch sections — that require more skill and care than a standard gable roof. The company is also a certified installer for Owens Corning's Duration premium shingle line, which carries a limited lifetime warranty.",
    ],
    founded: 2010,
    city: "Markham",
    serviceAreas: ["Markham", "Richmond Hill", "Stouffville", "Unionville", "Aurora", "Newmarket"],
    services: ["roof-repair", "roof-replacement", "roof-inspection"],
    roofTypes: ["shingle", "metal"],
    rating: 9.7,
    reviewCount: 103,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: true,
    phone: "(905) 555-0534",
    highlights: [
      "Certified Owens Corning Duration shingle installer",
      "Specialists in complex architectural rooflines and steep-pitch roofs",
      "Project photography and documentation included on every job",
      "100% of work performed by Ridgeline's own licensed crew",
    ],
    reviews: [
      {
        author: "Christine H.",
        city: "Unionville",
        rating: 10,
        date: "2024-10-28",
        service: "Roof Replacement",
        body: "Ridgeline replaced our complex hip and gable roof with a turret section. Other contractors quoted it sight unseen — Ridgeline sent a foreman to assess in person before quoting. The work was exceptional. Clean, precise, and exactly as quoted.",
      },
      {
        author: "Peter Y.",
        city: "Markham",
        rating: 10,
        date: "2024-07-19",
        service: "Roof Inspection",
        body: "Thorough inspection with a 20-page report including photos of every issue found. The inspector took his time and explained everything clearly. Found a ventilation problem two other contractors had missed. Very professional.",
      },
      {
        author: "Susan C.",
        city: "Richmond Hill",
        rating: 9,
        date: "2024-03-11",
        service: "Roof Repair",
        body: "Multiple valley flashing repairs done properly. Ridgeline found all the problem spots, not just the obvious ones. Repair has held through two big rain events already. A bit pricier than others but worth it.",
      },
    ],
  },

  {
    slug: "northshield-roofing-vaughan",
    name: "Northshield Roofing Vaughan",
    tagline: "Vaughan and York Region roofing contractors with a 5-year workmanship guarantee.",
    description: [
      "Northshield Roofing was founded in Vaughan in 2013 and has grown steadily by focusing on one thing: standing behind their work. Every project — regardless of size — comes with a 5-year workmanship warranty, which is double the industry standard. That commitment has earned Northshield a loyal client base in Vaughan, Woodbridge, and Maple, where many of the company's jobs come through referrals.",
      "Northshield handles the full range of residential roofing services, with particular strength in asphalt shingle systems and low-slope TPO membrane roofing on newer Vaughan builds. The company also offers an annual roof maintenance program that includes a spring inspection, minor repairs, and gutter cleaning — helping homeowners protect their investment year-round.",
    ],
    founded: 2013,
    city: "Vaughan",
    serviceAreas: ["Vaughan", "Woodbridge", "Maple", "Kleinburg", "Richmond Hill", "Toronto"],
    services: ["roof-repair", "roof-replacement", "roof-inspection", "flat-roof"],
    roofTypes: ["shingle", "flat"],
    rating: 9.2,
    reviewCount: 78,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: true,
    phone: "(905) 555-0645",
    highlights: [
      "5-year workmanship warranty — double the industry standard",
      "Annual roof maintenance program available",
      "Specialists in TPO flat roofing on newer Vaughan builds",
      "Majority of new clients come through homeowner referrals",
    ],
    reviews: [
      {
        author: "Robert A.",
        city: "Woodbridge",
        rating: 9,
        date: "2024-09-22",
        service: "Roof Replacement",
        body: "Northshield replaced our 18-year-old shingle roof. The 5-year warranty was the main reason we went with them. Great crew, clean job, and they even fixed a gutter bracket that had come loose at no extra cost. Solid company.",
      },
      {
        author: "Lisa M.",
        city: "Vaughan",
        rating: 10,
        date: "2024-05-15",
        service: "Flat Roof Repair",
        body: "Repaired a TPO membrane leak on our garage. Found and fixed two problem seams that were causing water infiltration into the drywall below. Very thorough. The workmanship warranty gives me real peace of mind.",
      },
    ],
  },

  {
    slug: "durham-roofing-ajax",
    name: "Durham Roofing Ajax",
    tagline: "Ajax and Durham Region's reliable roofing experts since 2006.",
    description: [
      "Durham Roofing has been one of Durham Region's most trusted residential roofing contractors since 2006. Based in Ajax and serving the full stretch from Pickering to Oshawa, the company has completed over 1,800 residential roofing projects and built a reputation for reliable scheduling, honest assessments, and work that holds up to Durham's lakeside weather conditions.",
      "The company handles everything from minor leak repairs to complete roof system replacements and is particularly experienced with the kind of storm and hail damage that Durham Region homeowners deal with after severe weather events rolling in off Lake Ontario. Durham Roofing works closely with insurance adjusters and provides detailed damage reports to help homeowners with their claims.",
    ],
    founded: 2006,
    city: "Ajax",
    serviceAreas: ["Ajax", "Pickering", "Whitby", "Oshawa", "Clarington", "Scarborough"],
    services: ["roof-repair", "roof-replacement", "roof-inspection", "emergency-roofing"],
    roofTypes: ["shingle", "metal"],
    rating: 9.3,
    reviewCount: 142,
    verified: true,
    licensed: true,
    insured: true,
    backgroundCheck: true,
    phone: "(905) 555-0756",
    highlights: [
      "Over 1,800 Durham Region roofing projects completed since 2006",
      "Insurance claim specialists — full damage documentation provided",
      "Experienced with lakeside storm and hail damage repair",
      "Serving Ajax, Pickering, Whitby, and Oshawa from one local office",
    ],
    reviews: [
      {
        author: "Gary N.",
        city: "Ajax",
        rating: 10,
        date: "2024-08-30",
        service: "Roof Replacement",
        body: "Durham Roofing replaced our storm-damaged roof and handled the entire insurance claim process with us. They documented everything, communicated directly with the adjuster, and we ended up with a better settlement than expected. The new roof is perfect.",
      },
      {
        author: "Heather F.",
        city: "Whitby",
        rating: 9,
        date: "2024-06-04",
        service: "Roof Inspection",
        body: "Needed a detailed inspection report for our home sale. Durham provided a thorough written report with photos within 24 hours. The inspector was professional and took the time to explain every finding. Exactly what we needed.",
      },
      {
        author: "Mike D.",
        city: "Pickering",
        rating: 10,
        date: "2024-03-27",
        service: "Emergency Roofing",
        body: "Called after a severe windstorm blew off a section of shingles on a Sunday. Durham had someone on-site with a tarp within two hours. Permanent repair booked and completed four days later. Couldn't ask for better emergency service.",
      },
    ],
  },
];

export function getContractorBySlug(slug: string): Contractor | undefined {
  return contractors.find((c) => c.slug === slug);
}
