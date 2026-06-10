export interface CityData {
  /** URL slug — matches the [city] param */
  slug: string;
  /** Display name */
  name: string;
  /** Short paragraph for the page body — mentions the city by name */
  description: string;
  /** Secondary blurb for the services list */
  serviceNote: string;
  /** 3 common local roofing problems */
  commonIssues: { title: string; desc: string }[];
  /** 4-6 nearby neighbourhoods/communities */
  nearbyAreas: string[];
}

export const locations: CityData[] = [
  {
    slug: "toronto",
    name: "Toronto",
    description:
      "Toronto homeowners deal with freeze-thaw cycles, ice dams, and heavy snowfall that put roofs to the test every winter. LocalRoofer.ca connects Toronto residents with licensed, local roofing contractors who know Ontario's climate and building codes inside out — from the downtown core to North York, Scarborough, and Etobicoke.",
    serviceNote:
      "Serving all Toronto neighbourhoods including North York, Scarborough, Etobicoke, East York, and the downtown core.",
    commonIssues: [
      {
        title: "Ice Dams Along Eaves",
        desc: "Toronto's repeated freeze-thaw cycles through January and February cause snowmelt on warm roof sections to refreeze at the cold eaves overhang, forming ice dams that force water under shingles and into ceilings.",
      },
      {
        title: "Flat Roof Ponding on Additions & Garages",
        desc: "Tens of thousands of Toronto homes have rear additions and detached garages with flat or low-slope roofs that develop drainage problems over time, leading to ponding, membrane blistering, and eventual leaks.",
      },
      {
        title: "Aging Shingles on Post-War Housing Stock",
        desc: "Toronto's vast stock of 1940s–1970s bungalows and semi-detached homes have roofs that have been replaced once or twice already and are again reaching end of service life, showing widespread granule loss and curling.",
      },
    ],
    nearbyAreas: [
      "North York",
      "Scarborough",
      "Etobicoke",
      "East York",
      "York",
      "Thornhill",
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    description:
      "Mississauga's mix of older split-levels and newer subdivisions means roofing needs vary widely across the city. LocalRoofer.ca matches Mississauga homeowners with trusted local roofers experienced in ice and water shield installations, proper attic ventilation, and energy-efficient upgrades built for Ontario winters.",
    serviceNote:
      "Serving Port Credit, Streetsville, Meadowvale, Erin Mills, and all Mississauga communities.",
    commonIssues: [
      {
        title: "Inadequate Attic Ventilation in Mature Subdivisions",
        desc: "Many Mississauga homes built in the 1980s and 1990s have soffit and ridge ventilation systems that are blocked or undersized, causing heat and moisture buildup that prematurely ages shingles and promotes ice dam formation.",
      },
      {
        title: "Flashing Failures Around Skylights & Chimneys",
        desc: "Mississauga's stock of larger split-level and two-storey homes commonly features skylights and brick chimneys where counter flashing corrodes or pulls away from mortar joints, creating chronic leak points.",
      },
      {
        title: "Wind-Driven Rain Penetration on Hip Roofs",
        desc: "The open, flat terrain in parts of Mississauga creates exposure to sustained wind that drives rain horizontally under hip roof shingles, particularly at the corners and along ridges, leading to slow leaks at the hip line.",
      },
    ],
    nearbyAreas: [
      "Port Credit",
      "Streetsville",
      "Meadowvale",
      "Erin Mills",
      "Cooksville",
      "Brampton",
    ],
  },
  {
    slug: "brampton",
    name: "Brampton",
    description:
      "Brampton is one of Canada's fastest-growing cities, and its rooftops need contractors who can keep up. LocalRoofer.ca connects Brampton homeowners with licensed roofers offering fast turnaround, quality materials, and workmanship warranties — keeping families protected no matter the season.",
    serviceNote:
      "Serving Bramalea, Heart Lake, Springdale, Gore, and all Brampton neighbourhoods.",
    commonIssues: [
      {
        title: "Early-Aging Shingles on New Construction",
        desc: "Brampton's rapid 2000s–2010s build-out saw some homes finished with entry-level shingle products that are now showing premature granule loss and cracking well before their rated lifespan, particularly on south- and west-facing slopes.",
      },
      {
        title: "Ice Dam Leaks in High-Volume Subdivisions",
        desc: "Brampton's dense, similarly-styled subdivision homes often share attic ventilation designs that underperform in heavy snow years, leading to widespread ice dam leaks across entire streets after prolonged cold snaps.",
      },
      {
        title: "Garage Flat Roof Failures",
        desc: "Attached double-car garages — a staple of Brampton's housing stock — frequently have modified bitumen flat roofs that are now 15 to 20 years old and experiencing seam separation, blistering, and active leaks into the garage ceiling.",
      },
    ],
    nearbyAreas: [
      "Bramalea",
      "Heart Lake",
      "Springdale",
      "Gore",
      "Mississauga",
      "Caledon",
    ],
  },
  {
    slug: "markham",
    name: "Markham",
    description:
      "Markham's mix of established communities and newer builds demands consistent, high-quality roofing. LocalRoofer.ca connects Markham homeowners with vetted local contractors for everything from minor repairs to full replacements — with materials and workmanship backed by warranty.",
    serviceNote:
      "Serving Unionville, Cornell, Milliken, Greensborough, and all Markham communities.",
    commonIssues: [
      {
        title: "Storm Damage from Lake-Effect Precipitation",
        desc: "Markham's northern York Region location receives increased snowfall and ice storm events compared to the city core, with heavier accumulations that stress older shingle systems and increase the frequency of ice dam and wind damage claims.",
      },
      {
        title: "Flashing Deterioration on Complex Roof Lines",
        desc: "Markham's larger two-storey and three-storey homes often feature architectural roof lines with multiple valleys, dormers, and step flashings — all of which are vulnerable to sealant cracking and metal corrosion after 10 to 15 years.",
      },
      {
        title: "Ponding on Low-Slope Porch and Sunroom Roofs",
        desc: "Many Markham homes have low-slope roofed porches or sunroom additions with modified bitumen membranes that develop drainage problems over time, causing ponding water and accelerated membrane deterioration.",
      },
    ],
    nearbyAreas: [
      "Unionville",
      "Cornell",
      "Milliken",
      "Greensborough",
      "Richmond Hill",
      "Stouffville",
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    description:
      "Vaughan's rapid growth has produced thousands of newer homes that are now reaching the age where roofing maintenance becomes critical. LocalRoofer.ca pairs Vaughan homeowners with trusted local roofers who specialise in asphalt shingle replacements, flat roof repairs, and pre-winter inspections.",
    serviceNote:
      "Serving Woodbridge, Maple, Kleinburg, Thornhill, and all Vaughan communities.",
    commonIssues: [
      {
        title: "Shingle Aging on 2000s–2010s Builds",
        desc: "Vaughan's housing boom produced thousands of homes now 15 to 25 years old. Three-tab shingles installed during this period are reaching the end of their rated life and showing granule loss, cracking, and curling across large roof sections.",
      },
      {
        title: "Inadequate Ice-and-Water Shield on Eaves",
        desc: "Some Vaughan homes built during the rapid development years were finished with minimal ice-and-water shield — sometimes limited to 36 inches at the eave — leaving them susceptible to ice dam backflow under shingles during harsh winters.",
      },
      {
        title: "Chimney Crown and Cap Failures",
        desc: "Vaughan's large, brick-chimney-equipped homes frequently experience cracked chimney crowns and corroded chimney caps that allow water into the flue and behind step flashing, causing ceiling leaks that are often misattributed to the roof itself.",
      },
    ],
    nearbyAreas: [
      "Woodbridge",
      "Maple",
      "Kleinburg",
      "Thornhill",
      "Richmond Hill",
      "King City",
    ],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    description:
      "Richmond Hill homeowners need roofers who understand the demands of Ontario winters — from heavy snowloads to ice damming along eaves. LocalRoofer.ca connects Richmond Hill residents with licensed contractors who provide thorough inspections, quality repairs, and full replacements with long-term warranties.",
    serviceNote:
      "Serving Oak Ridges, Jefferson, Bayview Hill, and all Richmond Hill communities.",
    commonIssues: [
      {
        title: "Heavy Snow Load on Low-Pitch Sections",
        desc: "Richmond Hill receives above-average snowfall due to its northern position in York Region, and homes with low-pitch roof sections — porches, bumpouts, garage roofs — can accumulate dangerous snow loads that stress underlayment and membrane seams.",
      },
      {
        title: "Valley Flashing Corrosion",
        desc: "Richmond Hill's established neighbourhoods have many homes with galvanized valley flashing now 20 to 30 years old, showing pinhole corrosion that allows water to bypass the shingles and run behind fascia into soffits and walls.",
      },
      {
        title: "Ventilation-Driven Attic Condensation",
        desc: "Tighter-built Richmond Hill homes from the 2000s sometimes have attic vapour barriers that are poorly detailed at penetrations, allowing interior moisture to condense on the underside of the roof deck, leading to mould and wood rot visible during inspections.",
      },
    ],
    nearbyAreas: [
      "Oak Ridges",
      "Jefferson",
      "Bayview Hill",
      "Elgin Mills",
      "Vaughan",
      "Markham",
    ],
  },
  {
    slug: "oakville",
    name: "Oakville",
    description:
      "Oakville's mature neighbourhoods are home to some of the GTA's most valuable properties — and those roofs deserve expert care. LocalRoofer.ca connects Oakville homeowners with experienced, insured roofing contractors who deliver premium workmanship and stand behind their work.",
    serviceNote:
      "Serving Bronte, Glen Abbey, Kerr Village, Old Oakville, and all Oakville communities.",
    commonIssues: [
      {
        title: "Aging Cedar and Premium Shingles on Heritage Homes",
        desc: "Old Oakville and Bronte's heritage homes often have cedar shake or high-grade architectural shingles now approaching 30 years of age, showing severe cupping, splitting, and moss growth that require specialist assessment and careful replacement.",
      },
      {
        title: "Wind Damage from Lake Ontario Exposure",
        desc: "Lakeside neighbourhoods in South Oakville experience elevated wind speeds from Lake Ontario, particularly in fall storm season, which lifts poorly-nailed or aged shingles and stresses ridge cap installations.",
      },
      {
        title: "Flat Roof Failures on Luxury Additions",
        desc: "Oakville's high-value home renovations frequently include low-slope glass-railed terrace decks and flat-roofed additions where premium TPO or EPDM membranes have been improperly installed or maintained, leading to premature failure.",
      },
    ],
    nearbyAreas: [
      "Bronte",
      "Glen Abbey",
      "Kerr Village",
      "Old Oakville",
      "Burlington",
      "Mississauga",
    ],
  },
  {
    slug: "burlington",
    name: "Burlington",
    description:
      "Burlington's lakeside climate brings its own roofing challenges, including wind-driven rain and freeze-thaw cycles along the Escarpment. LocalRoofer.ca matches Burlington homeowners with skilled local roofers offering reliable repairs, complete replacements, and annual inspection programs.",
    serviceNote:
      "Serving Aldershot, Tyandaga, Millcroft, Brant Hills, and all Burlington communities.",
    commonIssues: [
      {
        title: "Escarpment Wind Exposure",
        desc: "Burlington homes on and below the Niagara Escarpment face channelled wind events that are significantly stronger than those experienced in lower-lying areas, regularly lifting shingle tabs and stressing ridge cap nailing on exposed roof faces.",
      },
      {
        title: "Lichen and Moss Growth on North-Facing Slopes",
        desc: "Burlington's moisture-rich lakeside climate encourages aggressive lichen and moss growth on north-facing shingle slopes, which traps moisture under the granule surface, accelerates shingle aging, and voids manufacturer warranties if untreated.",
      },
      {
        title: "Ice Dam Leaks in Older Aldershot Neighbourhoods",
        desc: "Aldershot's post-war housing stock of 1950s and 1960s bungalows often has minimal attic insulation and poor ventilation by modern standards, making them especially prone to ice dam formation and associated ceiling leaks during cold snaps.",
      },
    ],
    nearbyAreas: [
      "Aldershot",
      "Tyandaga",
      "Millcroft",
      "Brant Hills",
      "Oakville",
      "Hamilton",
    ],
  },
  {
    slug: "ajax",
    name: "Ajax",
    description:
      "Ajax homeowners face the same Ontario winter challenges as anywhere in the GTA — but with the added exposure of Lake Ontario proximity. LocalRoofer.ca connects Ajax residents with trusted roofing contractors experienced in storm damage repair, shingle replacement, and seasonal inspections.",
    serviceNote:
      "Serving Central Ajax, Northwest Ajax, South Ajax, and all Ajax communities.",
    commonIssues: [
      {
        title: "Lake-Effect Storm Damage",
        desc: "Ajax's position directly on Lake Ontario makes it one of Durham Region's most storm-exposed communities. Strong northeast winds in fall and winter regularly peel shingle tabs, displace ridge caps, and drive rain under poorly sealed flashing.",
      },
      {
        title: "Shingle Blowoffs on Newer Subdivisions",
        desc: "Ajax's suburban expansion produced many homes with standard wind-resistance shingles (Class D, 60 km/h) that are not rated for the sustained lake-effect wind speeds the community experiences, resulting in higher-than-average shingle blowoff claims.",
      },
      {
        title: "Eaves and Soffit Deterioration",
        desc: "Persistent moisture from Ajax's lakeside environment accelerates deterioration of wood fascia, soffit boards, and vinyl trim on homes within a few blocks of the waterfront, often leading to rot and pest entry points that require repair alongside roofing work.",
      },
    ],
    nearbyAreas: [
      "Pickering",
      "Whitby",
      "Oshawa",
      "Brooklin",
      "Courtice",
      "Bowmanville",
    ],
  },
  {
    slug: "whitby",
    name: "Whitby",
    description:
      "Whitby's growing communities need roofing contractors who can handle everything from emergency leak repairs to complete re-roofs. LocalRoofer.ca pairs Whitby homeowners with licensed, local roofers who respond quickly and deliver quality work backed by a workmanship guarantee.",
    serviceNote:
      "Serving Downtown Whitby, Pringle Creek, Brooklin, and all Whitby communities.",
    commonIssues: [
      {
        title: "Aging Roofs in Brooklin and Pringle Creek",
        desc: "Whitby's 1990s–early 2000s subdivisions in Brooklin and Pringle Creek now have asphalt shingle roofs 20 to 30 years old, many at or past the replacement threshold and showing widespread granule loss, curling tabs, and increasing repair frequency.",
      },
      {
        title: "Freeze-Thaw Cracking on Flashing Sealants",
        desc: "Whitby's inland position exposes roofs to significant temperature swings between fall and spring, causing butyl and silicone sealants around pipe boots, skylights, and step flashings to crack and fail faster than in more temperate GTA locations.",
      },
      {
        title: "Ice Dam Formation on Steep-Pitch Roofs",
        desc: "Many Whitby two-storey homes feature steep 8:12 or 10:12 pitches that accumulate heavy snow loads on north-facing slopes. Uneven snowmelt on these steep surfaces creates pronounced ice dams that back up behind the eave line during cold snaps.",
      },
    ],
    nearbyAreas: [
      "Brooklin",
      "Pringle Creek",
      "Downtown Whitby",
      "Ajax",
      "Oshawa",
      "Pickering",
    ],
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    description:
      "Oshawa homeowners have access to a wide range of housing — from century homes with aging roofs to modern builds that need maintenance. LocalRoofer.ca connects Oshawa residents with vetted local roofing contractors offering honest quotes, quality materials, and dependable service.",
    serviceNote:
      "Serving Lakeview, Pinecrest, Kedron, McLaughlin, and all Oshawa communities.",
    commonIssues: [
      {
        title: "Deteriorating Roofs on Century and Heritage Homes",
        desc: "Oshawa's McLaughlin and downtown neighbourhoods contain significant stock of early 20th-century homes with complex roof lines, decorative gables, and multiple valleys where original or older replacement materials are failing and water management is increasingly compromised.",
      },
      {
        title: "Flat Roof Failures on Commercial-Residential Conversions",
        desc: "Oshawa's urban core includes older buildings converted from commercial to residential use with built-up or modified bitumen flat roofs installed 20 to 30 years ago that are now experiencing widespread seam failure and interior water damage.",
      },
      {
        title: "Soffit and Fascia Rot from Ice Dam Overflow",
        desc: "Oshawa homeowners frequently discover that chronic ice dam leaks over multiple winters have saturated fascia boards and soffit framing, requiring combined roofing and carpentry repair to fully address the moisture damage.",
      },
    ],
    nearbyAreas: [
      "Whitby",
      "Ajax",
      "Courtice",
      "Bowmanville",
      "Pickering",
      "Port Perry",
    ],
  },
  {
    slug: "pickering",
    name: "Pickering",
    description:
      "Pickering's lakeside setting and growing population make it one of Durham Region's most active roofing markets. LocalRoofer.ca matches Pickering homeowners with skilled local contractors for roof repairs, replacements, inspections, and emergency response — any time of year.",
    serviceNote:
      "Serving Bay Ridges, Dunbarton, Rougemount, Liverpool, and all Pickering communities.",
    commonIssues: [
      {
        title: "Wind and Hail Damage from Lake Exposure",
        desc: "Pickering's direct Lake Ontario exposure means homes face hailstorms and windstorms more frequently than inland communities. Impact damage to shingle granule surfaces — invisible from the ground — is common after summer storm cells and should be professionally assessed.",
      },
      {
        title: "Flashing Failures on Multi-Section Roofs",
        desc: "Pickering's range of housing types — from 1960s bungalows to modern two-storeys — includes many homes with complex roof junctions where step and counter flashing has corroded or been improperly detailed, creating persistent leak points at inside corners and dormers.",
      },
      {
        title: "Granule Loss on West-Facing Slopes",
        desc: "Strong westerly winds off Lake Ontario accelerate granule loss on west-facing roof slopes in Pickering, with some homes losing measurable granule coverage five to ten years ahead of the east-facing slopes on the same building.",
      },
    ],
    nearbyAreas: [
      "Bay Ridges",
      "Dunbarton",
      "Rougemount",
      "Ajax",
      "Whitby",
      "Scarborough",
    ],
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    description:
      "Newmarket sits at the edge of the GTA where winters can be especially harsh. LocalRoofer.ca connects Newmarket homeowners with experienced local roofers who understand the region's climate and can handle everything from ice dam prevention to full roof system replacements.",
    serviceNote:
      "Serving Armitage, Central Newmarket, Summerhill Estates, and all Newmarket communities.",
    commonIssues: [
      {
        title: "Heavy Snowfall Accumulation",
        desc: "Newmarket sits at the southern edge of the Greenbelt and receives notably higher annual snowfall than the city core, with heavy accumulations on low-pitch and flat roof sections that strain underlayment and membrane systems not designed for sustained snow loads.",
      },
      {
        title: "Ice Dam Leaks in Older Central Newmarket Homes",
        desc: "Central Newmarket's older housing stock — many homes built in the 1970s and 1980s — was constructed with minimal attic insulation standards by today's requirements, making ice dam formation and associated ceiling leaks a recurring issue every harsh winter.",
      },
      {
        title: "Shingle Blowoff on Exposed Rural-Edge Properties",
        desc: "Homes on the north and east edges of Newmarket adjacent to agricultural land or the Holland Marsh experience open-field wind exposure that standard shingles are not rated for, resulting in above-average frequency of tab blowoffs and ridge cap displacement.",
      },
    ],
    nearbyAreas: [
      "Aurora",
      "Sharon",
      "Holland Landing",
      "Keswick",
      "Bradford",
      "East Gwillimbury",
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    description:
      "Aurora's mix of heritage homes and newer subdivisions means roofing needs span the full range — from careful repairs on older structures to modern shingle systems on newer builds. LocalRoofer.ca connects Aurora homeowners with licensed local contractors who take pride in their work.",
    serviceNote:
      "Serving Aurora Highlands, Bayview Wellington, Aurora Village, and all Aurora communities.",
    commonIssues: [
      {
        title: "Heritage Home Roofing Complexity",
        desc: "Aurora Village contains some of York Region's most architecturally significant older homes, many with original slate or clay tile roof sections, complex dormer detailing, and historic flashings that require specialist knowledge to repair or transition to modern materials.",
      },
      {
        title: "Attic Condensation in Energy-Retrofitted Homes",
        desc: "Aurora homeowners who have added blown insulation to improve energy efficiency sometimes inadvertently block soffit ventilation, creating warm attics that produce condensation on cold roof decking — leading to mould and structural rot visible only during inspection.",
      },
      {
        title: "Flashing Deterioration on Aurora Highlands Estates",
        desc: "Aurora Highlands' large estate homes feature extensive flashing at multiple chimney stacks, skylights, and complex valley intersections. Counter flashing set in mortar joints corrodes and loosens over 15 to 20 years, creating leak pathways that can be difficult to trace.",
      },
    ],
    nearbyAreas: [
      "Newmarket",
      "Richmond Hill",
      "King City",
      "Woodbridge",
      "Schomberg",
      "Kettleby",
    ],
  },
  {
    slug: "barrie",
    name: "Barrie",
    description:
      "Barrie receives some of the heaviest snowfall in Ontario thanks to Lake Simcoe's snow belt effect, making a well-maintained roof essential. LocalRoofer.ca connects Barrie homeowners with licensed roofing contractors experienced in high-load snow conditions, ice damming, and year-round repairs.",
    serviceNote:
      "Serving Painswick, Ardagh, Holly, Allandale, and all Barrie communities.",
    commonIssues: [
      {
        title: "Snow Belt Accumulation and Structural Stress",
        desc: "Barrie sits directly in the Lake Simcoe snow belt and routinely receives 250 to 300 cm of annual snowfall — well above the GTA average. Flat and low-pitch roof sections on garages, additions, and commercial properties face structural loading that standard membranes and decking are not always designed to accommodate.",
      },
      {
        title: "Severe Ice Dam Formation",
        desc: "The combination of heavy snowfall and Barrie's pronounced temperature swings creates near-ideal conditions for ice dam formation. The city experiences some of the most severe and persistent ice dam events in Ontario, with dams regularly reaching 30 to 60 cm in height at the eave line during polar vortex events.",
      },
      {
        title: "Shingle Granule Loss from UV and Freeze-Thaw",
        desc: "Barrie's combination of intense summer UV from elevated latitude and severe winter freeze-thaw cycling accelerates shingle granule loss compared to GTA averages, meaning standard 25-year shingles in Barrie often show significant wear at 15 to 18 years.",
      },
    ],
    nearbyAreas: [
      "Painswick",
      "Ardagh",
      "Holly",
      "Allandale",
      "Innisfil",
      "Orillia",
    ],
  },
];

/** Look up a city by its slug */
export function getCityBySlug(slug: string): CityData | undefined {
  return locations.find((c) => c.slug === slug);
}
