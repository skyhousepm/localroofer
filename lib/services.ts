export interface ServiceData {
  /** URL slug */
  slug: string;
  /** Display name */
  name: string;
  /** Short hero tagline */
  tagline: string;
  /** 2-3 paragraph description — each string is one <p> */
  description: string[];
  /** 4-5 key benefits shown as a bullet list */
  benefits: string[];
  /** Lucide icon name (string key) */
  icon: string;
  /** 4-step contractor workflow */
  processSteps: { title: string; desc: string }[];
  /** 5 warning signs a homeowner needs this service */
  warningSigns: string[];
  /** 5 FAQs */
  faq: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    tagline:
      "Fast, expert repairs that stop leaks and protect your home — backed by a workmanship guarantee.",
    description: [
      "Roof repairs are the most common roofing service GTA homeowners need, and timing matters. A small leak left unaddressed can lead to water infiltration, insulation damage, mould growth, and costly structural repairs. Whether it's a single missing shingle after a windstorm or persistent ice dam leaking damaging your ceilings every winter, getting it fixed quickly protects your home and your wallet.",
      "LocalRoofer.ca connects you with local roofing contractors who diagnose the problem correctly the first time. Our network handles everything from minor patch repairs to complex multi-point failures — on asphalt shingles, flat roofs, metal roofing, and more. Every repair comes with a written scope of work and a workmanship warranty so you know exactly what you're getting.",
      "If you're seeing water stains on ceilings, missing or curling shingles, granule buildup in your gutters, or daylight through your attic — don't wait. A professional repair now is always cheaper than a replacement later.",
    ],
    benefits: [
      "Stops leaks before they cause mould, rot, or structural damage",
      "Extends the life of your existing roof by years",
      "Fast response — most repairs completed within 1–3 days",
      "Written warranty on all workmanship",
      "Covers all roof types: asphalt, flat, metal, and more",
    ],
    icon: "Wrench",
    processSteps: [
      {
        title: "Initial Assessment & Quote",
        desc: "A local contractor visits your home, safely inspects the affected area from the roof surface, identifies the root cause of the problem, and provides a written quote with a clear scope of work — at no charge.",
      },
      {
        title: "Material Sourcing & Scheduling",
        desc: "We match your existing shingle colour and profile as closely as possible, order all required materials, and schedule the repair at a time convenient for you — typically within 1 to 3 business days.",
      },
      {
        title: "Repair Execution",
        desc: "The crew arrives on time, removes damaged or deteriorated materials, installs proper underlayment and ice-and-water shield where needed, and completes the repair to Ontario Building Code standards.",
      },
      {
        title: "Final Inspection & Clean-Up",
        desc: "Once work is complete, the contractor walks through findings with you, confirms the repair is watertight, removes all debris and nails from your property, and issues a written workmanship warranty.",
      },
    ],
    warningSigns: [
      "Water stains or brown rings appearing on interior ceilings or walls, especially after rain or snowmelt",
      "Shingles that are visibly cracked, curling at the edges, or missing entirely after a wind or ice storm",
      "Granules from asphalt shingles accumulating in your gutters or at downspout openings",
      "Daylight visible through the attic roof boards when you look up from inside",
      "Ice dams forming along your eaves in winter, causing water to back up under shingles",
    ],
    faq: [
      {
        q: "How much does a roof repair cost in Ontario?",
        a: "Most minor repairs — replacing a few shingles, resealing flashing, or patching a small area — range from $300 to $900. More complex repairs involving multiple problem areas, ice dam damage, or flat roof membrane work can run $1,000 to $3,500. All quotes through LocalRoofer.ca are free and written with no obligation.",
      },
      {
        q: "Can you repair just a few shingles without replacing the whole roof?",
        a: "Yes, absolutely. Spot repairs are often the most cost-effective solution when the rest of the roof is in good condition. A local roofer will assess whether a targeted repair will hold long-term or whether more widespread work is needed — and will give you an honest recommendation either way.",
      },
      {
        q: "How long does a typical roof repair take?",
        a: "Most residential roof repairs are completed in a single day, often in just a few hours. More complex jobs involving significant flashing replacement, underlayment work, or large-area re-shingling may take a full day or two. You'll know the expected timeline before any work begins.",
      },
      {
        q: "Will my repaired area match the rest of my roof?",
        a: "Contractors make every effort to match your existing shingles in colour and profile. For roofs that are several years old, there may be some weathering difference, but this typically fades over a season or two. Your roofer will advise you on the best colour match available.",
      },
      {
        q: "Does home insurance cover roof repairs in Ontario?",
        a: "Insurance typically covers sudden, accidental damage — such as storm damage, falling trees, or hail impact. Gradual deterioration and normal wear and tear are generally not covered. Your contractor can provide an inspection report and photos to support an insurance claim if the damage qualifies.",
      },
    ],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    tagline:
      "Full roof replacements with premium materials and a long-term workmanship warranty.",
    description: [
      "Most asphalt shingle roofs in Ontario last between 20 and 30 years, depending on installation quality, ventilation, and maintenance. When repairs become frequent, costs start adding up, or your roof is simply at the end of its lifespan, a full replacement is the smarter long-term investment. A new roof improves your home's curb appeal, energy efficiency, and resale value — often paying for itself when you sell.",
      "LocalRoofer.ca works with local GTA roofing contractors who specialize in full tear-offs and replacements. We use premium materials rated for Ontario's harsh winters — including impact-resistant shingles, proper underlayment, ice and water shield along eaves and valleys, and ridge ventilation systems that prevent ice dams and extend the life of your new roof.",
      "Our contractors will walk you through material options, colour choices, and warranty terms before any work begins. From a standard three-tab shingle replacement to architectural shingles, metal roofing, or a flat roof system, we'll match you with the right contractor for your home and budget.",
    ],
    benefits: [
      "25–50 year manufacturer warranties on premium shingle systems",
      "Proper ice & water shield installation for Ontario winters",
      "Improves home energy efficiency and resale value",
      "Full tear-off included — no layering over old shingles",
      "Clean-up and haul-away of all old materials included",
    ],
    icon: "HardHat",
    processSteps: [
      {
        title: "Consultation & Detailed Quote",
        desc: "A contractor visits to measure your roof, assess decking condition, and discuss material options — architectural shingles, metal, or flat systems. You receive a detailed written quote covering materials, labour, disposal, and warranty terms.",
      },
      {
        title: "Tear-Off & Deck Inspection",
        desc: "The crew removes all existing shingles, underlayment, and flashing down to the roof deck. Each sheet of plywood or OSB is inspected; any rotted or damaged decking is replaced before new materials are installed.",
      },
      {
        title: "Installation of New Roofing System",
        desc: "Ice-and-water shield is installed along all eaves, valleys, and penetrations per Ontario Building Code requirements. Synthetic underlayment is laid over the full deck, followed by your chosen shingles, new step and counter flashing, and a ridge vent system.",
      },
      {
        title: "Final Walkthrough, Clean-Up & Warranty",
        desc: "A site inspection confirms every fastener, seam, and flashing detail meets standard. All old materials are loaded and hauled away, the property is magnetically swept for nails, and you receive written copies of both the manufacturer's material warranty and the contractor's workmanship warranty.",
      },
    ],
    warningSigns: [
      "Your roof is 20 years or older and has never been replaced — most Ontario asphalt shingle systems reach end of life between 20 and 30 years",
      "You've had multiple repairs in the past few years and leaks keep reappearing in new locations",
      "Widespread shingle granule loss leaving bare, dark patches visible from the ground",
      "Shingles are curling, buckling, or showing widespread cracking across large sections of the roof",
      "Sagging areas on the roof deck suggest decking rot or structural failure beneath the shingles",
    ],
    faq: [
      {
        q: "How much does a full roof replacement cost in the GTA?",
        a: "For a typical 1,500–2,000 sq ft bungalow or two-storey home in the GTA, a complete asphalt shingle replacement including tear-off usually ranges from $8,000 to $16,000, depending on roof complexity, pitch, and material grade. Premium architectural shingles and added features like ice-and-water shield upgrades or new decking will push costs higher. You'll receive a firm written quote before any commitment.",
      },
      {
        q: "Do I need a permit to replace my roof in Ontario?",
        a: "In most Ontario municipalities, a like-for-like shingle replacement on a residential home does not require a building permit. However, if structural work is involved — such as replacing roof decking, changing the roof system type, or modifying the roof structure — a permit may be required. Your contractor will advise you and can pull any required permits on your behalf.",
      },
      {
        q: "How long does a roof replacement take?",
        a: "Most residential roof replacements are completed in one to two days. A straightforward bungalow in good weather is typically done in a single day. Larger homes, steep pitches, or jobs requiring significant deck repair may take two to three days. Weather can occasionally cause delays, but your contractor will keep you informed.",
      },
      {
        q: "What's the difference between 3-tab and architectural shingles?",
        a: "Three-tab shingles are a flat, uniform product with a 25-year warranty — functional and cost-effective. Architectural (laminated) shingles have a multi-layered texture that mimics wood shake, carry 30–50 year warranties, and are more resistant to wind and impact. Most GTA homeowners choose architectural shingles for the combination of longevity, appearance, and resale value.",
      },
      {
        q: "Can a new roof go over the old one?",
        a: "While some jurisdictions permit a second layer of shingles over an existing one, we recommend against it and most quality contractors won't do it. Layering traps moisture, adds structural weight, prevents deck inspection, and voids manufacturer warranties. A full tear-off gives you a clean inspection of the deck and a roof system that performs as designed.",
      },
    ],
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    tagline:
      "Detailed inspections that catch problems early — before they become expensive repairs.",
    description: [
      "Most homeowners only think about their roof when something goes wrong. A professional inspection once or twice a year — and always before buying or selling a home — is the single best thing you can do to protect your investment. An experienced roofer can spot early signs of wear, improper flashing, ventilation issues, and damage that isn't yet causing leaks but will soon.",
      "LocalRoofer.ca connects GTA homeowners with certified inspectors who provide thorough, written inspection reports covering every component of your roof system. Our inspectors check shingles, flashing, eaves, soffits, fascia, gutters, attic ventilation, and more. You'll receive a clear summary of current condition, any immediate concerns, and estimated remaining lifespan.",
      "Inspections are especially important after major weather events — hailstorms, ice storms, and high-wind events can cause damage that isn't visible from the ground. If you're purchasing a home, a roof inspection is non-negotiable; if there's damage the seller hasn't disclosed, a report gives you negotiating leverage.",
    ],
    benefits: [
      "Written report with photos of all findings",
      "Remaining lifespan estimate for planning and budgeting",
      "Catches ventilation and ice dam risk before winter",
      "Insurance-ready reports accepted by major providers",
      "Essential for home buyers — protects against hidden defects",
    ],
    icon: "ClipboardList",
    processSteps: [
      {
        title: "Booking & Pre-Inspection Review",
        desc: "You share the home address and any known concerns. The inspector reviews the age of the roof, previous permit history where available, and any photos you have. This helps focus the on-site inspection on high-risk areas.",
      },
      {
        title: "On-Site Roof & Attic Inspection",
        desc: "The inspector walks the entire roof surface, checking shingle condition, all flashings (step, counter, valley, pipe boot), eaves, soffits, fascia, gutters, and all penetrations. The attic is also inspected for signs of moisture, inadequate ventilation, insulation gaps, and daylight.",
      },
      {
        title: "Documentation & Photography",
        desc: "Every finding — whether a minor concern or an urgent defect — is photographed with close-up and reference shots. Notes are taken on the spot, ensuring nothing is missed and that the final report accurately reflects what was found.",
      },
      {
        title: "Written Report Delivery",
        desc: "Within 24 hours you receive a detailed written report with all photos, a condition summary for each roof component, a priority ranking of any issues (immediate, near-term, or monitor), estimated remaining lifespan, and recommendations for repair or maintenance.",
      },
    ],
    warningSigns: [
      "You are buying or selling a home and need an independent assessment of the roof's condition and remaining life",
      "Your roof is more than 10 years old and has never been professionally inspected",
      "Your area experienced a significant hailstorm, ice storm, or high-wind event and you want to rule out hidden damage",
      "Your home insurer is requesting a roof inspection report as a condition of coverage renewal",
      "You notice small granule deposits in gutters or around downspouts, suggesting shingle surface wear you can't assess from the ground",
    ],
    faq: [
      {
        q: "How much does a professional roof inspection cost in Ontario?",
        a: "A stand-alone roof inspection with a written report typically costs between $150 and $350 in the GTA, depending on roof size and complexity. For home buyers, this is one of the best investments you can make — a missed defect can cost tens of thousands of dollars. Many contractors offer free visual inspections as part of a quote; a paid inspection provides a formal written report.",
      },
      {
        q: "What does a roof inspection cover?",
        a: "A thorough inspection covers the full roof surface (shingles, tiles, or membrane), all flashings, eaves and soffits, fascia, gutters, downspouts, visible skylights, chimney or HVAC penetrations, and the attic space for ventilation adequacy, moisture signs, and insulation condition. You'll receive findings for every component.",
      },
      {
        q: "How often should I have my roof inspected?",
        a: "Industry guidance for Ontario homes is a professional inspection every one to three years for roofs under 15 years old, and annually for roofs over 15 years. You should also get an inspection after any major storm event — hail, ice storm, or sustained high winds — even if there is no obvious damage visible from the ground.",
      },
      {
        q: "Can an inspector tell me how many years my roof has left?",
        a: "Yes. Based on the shingle type, observable wear patterns, granule retention, and installation quality, an experienced roofer can provide a reasonable estimate of remaining service life — typically expressed as a range (e.g., 5–8 years). This helps you plan and budget rather than be caught off guard.",
      },
      {
        q: "Will my insurance company accept an inspection report from your contractors?",
        a: "Yes. The written inspection reports provided by our network contractors include photographs, findings, and professional assessments that are accepted by major Ontario home insurers including Intact, Aviva, and Economical. If your insurer requires a specific format or additional detail, we can accommodate that request.",
      },
    ],
  },
  {
    slug: "emergency-roofing",
    name: "Emergency Roofing",
    tagline:
      "Rapid response for active leaks, storm damage, and fallen debris — 24/7.",
    description: [
      "Roofing emergencies don't wait for business hours. A tree branch through your roof, a sudden active leak during a rainstorm, or a section of shingles torn off by high winds can leave your home exposed and your belongings at risk within hours. In these situations, you need a contractor who can respond the same day — not someone who'll call you back next week.",
      "LocalRoofer.ca has a network of GTA roofing contractors available for emergency calls 24/7. Emergency service typically includes an immediate tarping or temporary patch to stop water ingress, followed by a full damage assessment and written quote for permanent repairs. Most emergency calls are responded to within hours, not days.",
      "If your home has been damaged by a storm, fallen tree, or sudden structural failure, we also help document the damage for insurance claims. Our contractors are familiar with the process and can provide the reports and photos your insurer requires to process your claim quickly.",
    ],
    benefits: [
      "Same-day response for active leaks and storm damage",
      "Emergency tarping to stop water ingress immediately",
      "Available 24/7, including holidays",
      "Insurance documentation support and claim-ready reports",
      "Temporary repairs followed by permanent fix — no loose ends",
    ],
    icon: "Zap",
    processSteps: [
      {
        title: "Emergency Call & Rapid Dispatch",
        desc: "You call or submit a request through LocalRoofer.ca describing the situation. We immediately contact the nearest available emergency-certified contractor in our GTA network and confirm an estimated arrival time — typically within two to four hours of your call.",
      },
      {
        title: "Site Safety Assessment & Temporary Protection",
        desc: "On arrival, the contractor assesses site safety, identifies structural risks, and immediately deploys emergency tarping or temporary patching to stop active water ingress. The priority is protecting your home's interior from further damage while a full assessment is completed.",
      },
      {
        title: "Damage Documentation for Insurance",
        desc: "The contractor photographs and documents all damage in detail — including the source of failure, extent of affected area, and any interior water damage visible. This documentation package is structured to support your insurance claim and is provided to you the same day.",
      },
      {
        title: "Permanent Repair Plan & Execution",
        desc: "Once the emergency is stabilized, the contractor provides a written quote for permanent repairs. Work is scheduled and completed as quickly as possible, typically within days of the initial emergency call, so your home is fully protected before the next weather event.",
      },
    ],
    warningSigns: [
      "Active water dripping or streaming into your home during or after a rainstorm",
      "A large section of shingles has been visibly torn away or displaced by wind, leaving roof deck exposed",
      "A tree branch, limb, or whole tree has fallen onto your roof, puncturing or crushing the roofing materials",
      "You hear a sudden loud cracking or impact sound from the roof during a storm and notice ceiling damage shortly after",
      "Significant sections of flat roof membrane are lifting, blistering, or have separated at seams after heavy rain or freeze-thaw",
    ],
    faq: [
      {
        q: "What counts as a roofing emergency?",
        a: "A roofing emergency is any situation where your home is actively exposed to weather or where water is entering. This includes active leaks dripping into living spaces, a large area of missing or displaced shingles, tree or debris impact, visible holes in the roof deck, or severe storm damage that leaves your attic or interior accessible to rain or wind.",
      },
      {
        q: "How quickly can you respond to an emergency call in the GTA?",
        a: "Our network of GTA emergency contractors typically responds within two to four hours of an initial call during daylight hours. For serious structural emergencies, we do our best to have someone on site the same day. Response times can vary slightly based on location and the volume of concurrent emergency calls following major storm events.",
      },
      {
        q: "What does emergency tarping involve?",
        a: "Emergency tarping means installing a heavy-duty polyethylene or reinforced tarp over the damaged area, secured with battens or weighted edges to withstand wind. A properly installed tarp can protect your home for days to weeks while permanent repair materials are sourced and scheduled. Tarping is always followed up with a permanent repair — it is not a long-term solution.",
      },
      {
        q: "Will my insurance cover emergency roofing?",
        a: "Most Ontario home insurance policies cover sudden and accidental damage — including storm damage, fallen trees, and wind damage. Emergency response costs and subsequent permanent repairs are typically covered subject to your deductible. Your contractor will provide the documentation your insurer needs. Always call your insurer promptly after an emergency to open a claim.",
      },
      {
        q: "What should I do while waiting for the emergency roofer to arrive?",
        a: "Move valuable belongings, furniture, and electronics away from the affected area. Place buckets or towels to catch water and protect flooring. Do not attempt to get on the roof yourself — wet or storm-damaged roofs are extremely dangerous. If there is structural collapse or a downed power line, evacuate and call 911 before calling a roofer.",
      },
    ],
  },
  {
    slug: "flat-roof",
    name: "Flat Roof Services",
    tagline:
      "Specialist flat roof repair, replacement, and maintenance for GTA homes and low-slope roofs.",
    description: [
      "Flat and low-slope roofs are common on modern homes, additions, garages, and commercial properties across the GTA — and they require a different set of skills and materials than pitched roofs. Unlike sloped roofs that shed water quickly, flat roofs rely on proper drainage design, high-quality membrane systems, and precise seam work to remain watertight through Ontario's freeze-thaw cycles.",
      "LocalRoofer.ca connects homeowners and property owners with contractors who specialize in flat roof systems including TPO (thermoplastic polyolefin), EPDM rubber membrane, modified bitumen, and built-up roofing (BUR). Whether you have a small leak at a seam, a failed drain, or a membrane that's reached the end of its life, our contractors assess the full system before recommending repair or replacement.",
      "Flat roof maintenance is critical in Ontario's climate. Standing water, improper drainage, and cracked or blistered membranes are common issues that worsen quickly once winter arrives. An annual inspection and minor maintenance program can add 10+ years to the life of your flat roof and prevent costly mid-winter failures.",
    ],
    benefits: [
      "Expert installation of TPO, EPDM, and modified bitumen systems",
      "Leak detection and seam repair on existing membranes",
      "Proper drain and scupper assessment to prevent ponding",
      "Annual maintenance programs to maximize membrane lifespan",
      "New construction and re-roofing for homes, additions, and garages",
    ],
    icon: "Layers",
    processSteps: [
      {
        title: "Flat Roof Assessment & System Identification",
        desc: "The contractor inspects your existing flat roof system to identify the membrane type (TPO, EPDM, modified bitumen, or BUR), assess overall condition, locate problem areas, and evaluate drainage adequacy. A written report and quote covering repair or replacement options is provided.",
      },
      {
        title: "Drainage & Substrate Preparation",
        desc: "Before any new membrane work, all drains, scuppers, and overflow outlets are cleared and inspected. If the existing substrate (insulation board or decking) has absorbed moisture or deteriorated, it is replaced to ensure the new membrane has a clean, stable base.",
      },
      {
        title: "Membrane Installation or Repair",
        desc: "New membrane is installed according to the manufacturer's specifications and Ontario Building Code requirements. Seams are heat-welded (TPO), adhered (EPDM), or torch-applied (modified bitumen) as appropriate. All penetrations — pipes, HVAC curbs, skylights — receive purpose-built flashings and sealants.",
      },
      {
        title: "Post-Installation Inspection & Maintenance Plan",
        desc: "The completed membrane is inspected for seam integrity, flashing quality, and proper drainage flow. You receive a written warranty for both materials and workmanship, along with a recommended annual maintenance schedule to maximize the life of your new flat roof system.",
      },
    ],
    warningSigns: [
      "Ponding water that remains on the flat roof surface 48 hours or more after a rainstorm — indicating drainage failure",
      "Visible blistering, bubbling, or lifted sections on the membrane surface, which allow water to penetrate underneath",
      "Water stains on interior ceilings directly below the flat roof area, especially after rain or snowmelt",
      "Cracked, split, or separated seams on a modified bitumen or built-up roof system visible from the rooftop",
      "The flat roof is more than 15 years old and has not been replaced — most flat roof membrane systems have a service life of 15 to 25 years",
    ],
    faq: [
      {
        q: "What is the best flat roof material for Ontario's climate?",
        a: "TPO (thermoplastic polyolefin) is currently the most popular choice for GTA residential flat roofs due to its excellent cold-weather flexibility, resistance to UV and puncture, and competitive cost. EPDM rubber membrane is another durable option, particularly for larger areas. Modified bitumen is common on older homes and performs well with proper installation. Your contractor will recommend the best system for your specific roof and budget.",
      },
      {
        q: "How long does a flat roof last in Ontario?",
        a: "With quality materials and professional installation, a TPO or EPDM flat roof system can last 20 to 25 years. Modified bitumen systems typically last 15 to 20 years. Annual maintenance — clearing drains, checking seams, and addressing minor issues early — can add years to any flat roof system's service life.",
      },
      {
        q: "Can a flat roof leak be repaired, or does the whole membrane need replacement?",
        a: "Many flat roof leaks can be repaired rather than requiring full replacement. A contractor will assess whether the leak is isolated (a failed seam, cracked flashing, or blocked drain) or whether the membrane has widespread deterioration. Localized repairs are cost-effective when the rest of the membrane is in reasonable condition; widespread blistering, multiple seam failures, or an aged membrane generally warrant full replacement.",
      },
      {
        q: "How do I know if my flat roof has ponding water problems?",
        a: "If you can safely observe your roof after a rainfall, look for any standing water remaining 24–48 hours after the rain has stopped. Ponding water indicates either a drainage design problem (low spots, blocked drains, or insufficient slope) or substrate deflection. Left unaddressed, ponding accelerates membrane degradation and significantly shortens flat roof life.",
      },
      {
        q: "Do flat roofs require more maintenance than pitched roofs?",
        a: "Yes — flat roofs require more proactive maintenance because they don't shed debris and water as readily as sloped roofs. We recommend clearing drains and gutters twice a year (spring and fall), having a professional inspection annually, and addressing any blistering or seam separations promptly. A simple annual maintenance visit typically costs $200–$500 and can prevent repairs costing thousands.",
      },
    ],
  },
  {
    slug: "eavestroughs",
    name: "Eavestroughs & Gutters",
    tagline:
      "Seamless eavestrough installation, repair, and cleaning that keeps water away from your roof, walls, and foundation.",
    description: [
      "Eavestroughs do more work than most homeowners realize. Every rainfall and spring thaw sends hundreds of litres of water off your roof, and your eavestroughs and downspouts are what carry it away from your fascia, siding, and foundation. When they're clogged, sagging, or leaking at the seams, that water ends up where it causes the most damage — rotting fascia boards, staining brick, flooding basements, and feeding ice dams along the eaves in winter.",
      "LocalRoofer.ca connects GTA homeowners with local contractors who install seamless aluminum eavestroughs formed on-site to fit your home, repair leaking joints and sagging runs, re-pitch troughs that hold standing water, and add downspout extensions that discharge water well away from the foundation.",
      "Because eavestroughs sit right at the roof edge, it's worth having them looked at whenever you re-roof. Replacing them at the same time avoids disturbing new shingles and drip edge later.",
    ],
    benefits: [
      "Protects your foundation and basement from water infiltration",
      "Prevents fascia, soffit, and siding rot",
      "Seamless aluminum runs mean fewer joints that can leak",
      "Gutter guards available to cut down on cleaning",
      "Easy to coordinate with a roof replacement",
    ],
    icon: "CloudRain",
    processSteps: [
      {
        title: "Assessment & Measurement",
        desc: "A contractor checks your existing eavestroughs, downspouts, fascia, and drainage around the foundation, measures every run, and provides a written quote — at no charge.",
      },
      {
        title: "Fascia Check & Prep",
        desc: "Old troughs are removed and the fascia boards behind them are inspected. Any soft or rotted wood is replaced so the new eavestroughs have a solid base to fasten to.",
      },
      {
        title: "Seamless Installation",
        desc: "Seamless aluminum eavestroughs are formed on-site to the exact length of each run, hung with hidden hangers at the correct slope, and connected to properly sized downspouts.",
      },
      {
        title: "Water Test & Clean-Up",
        desc: "The crew runs water through the system to confirm it drains fully with no leaks or standing water, directs downspouts away from the foundation, and cleans up all debris.",
      },
    ],
    warningSigns: [
      "Water spilling over the edge of the eavestroughs during rain instead of flowing to the downspouts",
      "Sagging sections or troughs pulling away from the fascia",
      "Peeling paint, stains, or rot on the fascia boards behind the eavestroughs",
      "Puddles, erosion, or a damp basement near the base of downspouts",
      "Large icicles or ice buildup along the eavestroughs in winter",
    ],
    faq: [
      {
        q: "How much do new eavestroughs cost in the GTA?",
        a: "Seamless aluminum eavestroughs typically cost around $8–$15 per linear foot installed, which puts most detached GTA homes in the $1,500–$3,500 range including downspouts. Two-storey homes, complex rooflines, fascia repairs, and gutter guards add to the price. You'll get a firm written quote before any work starts.",
      },
      {
        q: "How often should eavestroughs be cleaned?",
        a: "At least twice a year — once in late spring and once in late fall after the leaves have dropped. Homes surrounded by mature trees may need more frequent cleaning. Professional cleaning for a typical home usually costs $150–$350.",
      },
      {
        q: "Are gutter guards worth it?",
        a: "For homes with lots of trees nearby, guards can significantly reduce how often you need cleaning and help prevent clogs that cause overflow and ice buildup. They don't make eavestroughs maintenance-free — fine debris and shingle granules still collect — but quality guards are a good investment in leafy neighbourhoods.",
      },
      {
        q: "Should I replace my eavestroughs when I replace my roof?",
        a: "Often, yes. If your eavestroughs are more than 20 years old, sagging, or leaking, replacing them during a roof replacement is efficient: the fascia is exposed, the drip edge can be installed correctly over the new troughs, and you avoid disturbing new shingles later.",
      },
      {
        q: "Why do my eavestroughs overflow even when they're clean?",
        a: "Usually the slope is wrong, the downspouts are too small or too few for the roof area draining into them, or water is shooting past the trough on a steep roof section. A contractor can re-pitch the runs, add downspouts, or install larger troughs to fix it.",
      },
    ],
  },
  {
    slug: "skylights",
    name: "Skylight Repair & Replacement",
    tagline:
      "Stop skylight leaks for good — expert reflashing, repair, and replacement of fixed and venting skylights.",
    description: [
      "Skylights bring natural light deep into a home, but they're also one of the most common sources of roof leaks. Most skylight leaks aren't the glass at all — they come from flashing that has failed, seals that have dried out over Ontario's freeze-thaw cycles, or an installation that was never properly integrated with the roof.",
      "LocalRoofer.ca connects GTA homeowners with local roofers who diagnose skylight leaks correctly, reflash existing units, and replace aging skylights with modern, energy-efficient models using manufacturer flashing kits designed for your roof type.",
      "If your roof is due for replacement and your skylights are more than 15–20 years old, replacing them at the same time is almost always the smart move. The flashing has to be redone during a re-roof anyway, and putting an old skylight back into a new roof often leads to leaks within a few years.",
    ],
    benefits: [
      "Ends recurring leaks at the source — usually the flashing",
      "Modern units are far more energy-efficient than older skylights",
      "Manufacturer flashing kits for a watertight seal",
      "Venting and solar-powered options for kitchens and bathrooms",
      "Easy to coordinate with a roof replacement",
    ],
    icon: "Sun",
    processSteps: [
      {
        title: "Leak Diagnosis & Quote",
        desc: "A roofer inspects the skylight from inside and out — glass, seals, frame, flashing, and the surrounding shingles — to pinpoint where water is getting in, then gives you a written quote to repair or replace.",
      },
      {
        title: "Removal & Opening Prep",
        desc: "Shingles around the skylight are carefully lifted, the old unit and flashing are removed, and the roof opening and curb are checked for rot and squared up for the new unit.",
      },
      {
        title: "Installation & Flashing",
        desc: "The skylight is installed with ice-and-water shield around the opening and the manufacturer's step-flashing kit woven into the shingles, so water is shed around the unit rather than relying on caulking.",
      },
      {
        title: "Interior Finish & Test",
        desc: "The crew confirms the installation is watertight, makes sure the interior shaft is sealed and finished, and cleans up inside and out.",
      },
    ],
    warningSigns: [
      "Water stains or drips on the ceiling or drywall around the skylight",
      "Condensation or fogging between the panes of glass",
      "Cracked glass, a cracked dome, or a damaged frame",
      "Caulking or tar smeared around the skylight from past repair attempts",
      "Drafts or noticeable heat loss through the skylight in winter",
    ],
    faq: [
      {
        q: "How much does skylight repair or replacement cost?",
        a: "Reflashing or resealing an existing skylight typically costs $400–$1,000. Replacing a standard fixed or venting skylight usually runs $1,500–$4,000 per unit installed, depending on size, type, and interior finishing. Replacing a skylight during a roof replacement often costs less because the roof is already open.",
      },
      {
        q: "Can a leaking skylight be repaired, or does it need replacing?",
        a: "If the unit itself is in good shape and the leak is from the flashing or the surrounding shingles, reflashing is usually enough. If the glass seal has failed (fogging between the panes), the frame is damaged, or the skylight is near the end of its life, replacement is the better long-term fix.",
      },
      {
        q: "Is it condensation or a leak?",
        a: "Condensation shows up on cold days as water droplets on the inside of the glass and frame, especially in kitchens and bathrooms. A leak tends to appear during or after rain or snowmelt. A roofer can tell the difference — condensation is often a ventilation or humidity issue rather than a roofing problem.",
      },
      {
        q: "Should I replace my skylights when I get a new roof?",
        a: "If they're more than 15–20 years old, yes. The skylight flashing has to come off during a re-roof anyway, and reinstalling an aging unit into a new roof is a common cause of leaks shortly after replacement.",
      },
      {
        q: "Can I remove a skylight I don't want anymore?",
        a: "Yes. A roofer can remove the skylight, frame in the opening with new decking, and shingle over it to match the rest of the roof. You'll also need a drywall contractor to close up the ceiling inside.",
      },
    ],
  },
  {
    slug: "attic-ventilation",
    name: "Attic Ventilation & Insulation",
    tagline:
      "Balanced attic ventilation and proper insulation to prevent ice dams, extend shingle life, and cut energy bills.",
    description: [
      "Your attic has a bigger effect on your roof than most homeowners realize. When warm, moist air from the house leaks into a poorly ventilated attic, it heats the roof deck — melting snow that refreezes at the eaves as ice dams — and condenses on the cold underside of the roof, leading to mould, rot, and frost in winter. In summer, trapped heat bakes shingles from below and shortens their life.",
      "LocalRoofer.ca connects GTA homeowners with local contractors who assess attic ventilation and insulation together: balancing intake vents at the soffits with exhaust vents at the ridge or roof, clearing blocked soffits, installing baffles, and air-sealing and topping up insulation so the roof deck stays cold and dry.",
      "Many older GTA homes have far less attic insulation than today's standards, and ventilation that was never balanced in the first place. Fixing both is one of the most effective ways to stop recurring ice dams.",
    ],
    benefits: [
      "Reduces or eliminates recurring ice dams",
      "Prevents attic condensation, frost, and mould",
      "Helps shingles reach their full expected lifespan",
      "Lowers heating and cooling costs",
      "Can be done on its own or alongside a roof replacement",
    ],
    icon: "Wind",
    processSteps: [
      {
        title: "Attic Assessment",
        desc: "A contractor inspects your attic for insulation depth, air leaks, blocked soffits, moisture, frost, and mould, and checks the existing intake and exhaust vents on the roof — then gives you a written quote.",
      },
      {
        title: "Air Sealing",
        desc: "Gaps around light fixtures, plumbing stacks, chimneys, and the attic hatch are sealed so warm, moist air from the house stops leaking into the attic.",
      },
      {
        title: "Ventilation Upgrades",
        desc: "Baffles are installed to keep soffit vents clear, and roof or ridge vents are added or replaced so cold outside air flows evenly from the eaves to the peak.",
      },
      {
        title: "Insulation Top-Up",
        desc: "Blown-in insulation is added to bring the attic up to a modern level, keeping it clear of the soffit baffles so ventilation still works.",
      },
    ],
    warningSigns: [
      "Ice dams and large icicles along the eaves every winter",
      "Frost on the underside of the roof deck or nails in the attic in winter",
      "Dark staining or mould on the attic sheathing",
      "Upstairs rooms that are much hotter than the rest of the house in summer",
      "Shingles that are curling or blistering well before the end of their expected life",
    ],
    faq: [
      {
        q: "How much does attic ventilation work cost?",
        a: "Adding or replacing individual roof vents typically costs $300–$600 per vent installed. Converting to a ridge vent is most cost-effective during a roof replacement. Topping up attic insulation with blown-in material for a typical GTA home often runs $1,500–$3,500 depending on attic size and how much is needed.",
      },
      {
        q: "How do I know if my attic is properly ventilated?",
        a: "Signs of poor ventilation include frost or condensation in the attic in winter, mould on the sheathing, ice dams, and an attic that's extremely hot in summer. A contractor can check whether your intake and exhaust vents are balanced and whether insulation is blocking the soffits.",
      },
      {
        q: "Can I have too much ventilation?",
        a: "Balance matters more than quantity. Too much exhaust without enough intake can pull conditioned air out of the house, and mixing different exhaust types — like a ridge vent with box vents — can cause them to work against each other. A contractor will size intake and exhaust to match your attic.",
      },
      {
        q: "Are there rebates for attic insulation in Ontario?",
        a: "Ontario has offered rebates for attic insulation upgrades through utility and government energy-efficiency programs, but the programs and amounts change over time. Check what's currently available before you start — some programs require an energy assessment before the work is done.",
      },
      {
        q: "Should I fix ventilation when I replace my roof?",
        a: "It's the ideal time. With the old shingles off, adding a ridge vent, improving intake, and installing baffles is easier and less expensive than doing it later, and proper ventilation is often a condition of the shingle manufacturer's warranty.",
      },
    ],
  },
  {
    slug: "chimney-flashing",
    name: "Chimney Flashing Repair",
    tagline:
      "Stop chimney leaks with properly installed step and counter flashing — the most common leak point on GTA roofs.",
    description: [
      "Where a chimney passes through the roof is one of the most leak-prone spots on any house. The joint between brick and shingles is protected by metal flashing — step flashing woven into the shingles and counter flashing set into the mortar joints above it. Over time, mortar cracks, sealant dries out, and flashing pulls away, letting water run down the chimney into the attic, walls, and ceilings.",
      "LocalRoofer.ca connects GTA homeowners with local roofers who repair and replace chimney flashing properly: removing old caulk-and-tar patches, installing new step and counter flashing cut into the brick, and adding a cricket behind wider chimneys so water and snow don't pool on the uphill side.",
      "Chimney leaks are often mistaken for roof leaks or masonry problems. If the brick, crown, or cap also need work, your roofer can tell you, and you may need a mason for those repairs.",
    ],
    benefits: [
      "Fixes the most common source of roof leaks",
      "Replaces temporary caulking and tar with a permanent fix",
      "Crickets prevent water and snow from pooling behind wide chimneys",
      "Protects attic framing, insulation, and ceilings from water damage",
      "Best done during a roof replacement for a seamless result",
    ],
    icon: "Flame",
    processSteps: [
      {
        title: "Inspection & Quote",
        desc: "A roofer inspects the chimney flashing, surrounding shingles, mortar joints, and the attic below to confirm where water is getting in, then gives you a written quote.",
      },
      {
        title: "Remove Old Flashing",
        desc: "Shingles around the chimney are lifted, and old flashing, caulking, and tar patches are removed down to clean brick and decking. Any rotted decking is replaced.",
      },
      {
        title: "Install New Flashing",
        desc: "Ice-and-water shield goes down around the chimney base, then new step flashing is woven into each shingle course and counter flashing is cut into the mortar joints and sealed. A cricket is added behind wider chimneys.",
      },
      {
        title: "Seal, Test & Clean-Up",
        desc: "The roofer checks every joint, reinstalls the shingles, confirms the chimney is watertight, and cleans up all debris.",
      },
    ],
    warningSigns: [
      "Water stains on the ceiling or walls near the chimney",
      "Damp or stained wood around the chimney in the attic",
      "Caulking or roofing tar smeared along the chimney base",
      "Flashing that is rusted, lifted, or separating from the brick",
      "Cracked or missing mortar where the flashing meets the chimney",
    ],
    faq: [
      {
        q: "How much does chimney flashing repair cost?",
        a: "Resealing or repairing existing chimney flashing typically costs $400–$800. Full replacement with new step and counter flashing usually runs $800–$1,500, and adding a cricket behind a wide chimney adds to that. Doing it during a roof replacement is usually the most cost-effective.",
      },
      {
        q: "Can chimney flashing just be caulked?",
        a: "Caulking can stop a leak temporarily, but it dries out and cracks within a few seasons in Ontario's climate. Properly installed step and counter flashing is the permanent fix — sealant should only be a secondary layer, not the main defence.",
      },
      {
        q: "What is a chimney cricket?",
        a: "A cricket (or saddle) is a small peaked structure built on the uphill side of a chimney. It diverts water and snow around the chimney instead of letting it pool against the brick. It's standard practice for wider chimneys.",
      },
      {
        q: "Is my chimney leak a roofing or masonry problem?",
        a: "It can be either. Failed flashing is a roofing issue, while a cracked chimney crown, porous brick, or a missing cap are masonry issues. A roofer can inspect the flashing and tell you if they see masonry problems that need a mason.",
      },
      {
        q: "What if I don't use my chimney anymore?",
        a: "An unused chimney still needs proper flashing, a cap, and a sound crown. If you'll never use it, some homeowners have it removed below the roofline and the roof patched over — which eliminates the leak point entirely. A roofer and mason can quote both options.",
      },
    ],
  },
];

/** Look up a service by its slug */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
