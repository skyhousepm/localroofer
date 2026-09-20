import Link from "next/link";
import { ShieldCheck, BadgeDollarSign, Clock, Search, Star, CheckCircle2, Users } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import SearchHero from "@/components/SearchHero";
import ContractorCard from "@/components/ContractorCard";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocalRoofer.ca — Trusted Roofing in Toronto & the GTA",
  description:
    "Get a free roofing quote from LocalRoofer.ca. We connect Toronto & GTA homeowners with licensed, insured local roofers for repair, replacement, inspection, and emergency service.",
  alternates: { canonical: "https://www.localroofer.ca" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.localroofer.ca",
  name: "LocalRoofer.ca",
  description:
    "LocalRoofer.ca connects Toronto and Greater Toronto Area homeowners with trusted, licensed local roofing contractors for roof repair, replacement, inspection, and emergency service.",
  url: "https://www.localroofer.ca",
  telephone: "+14163002345",
  email: "info@localroofer.ca",
  image: "https://www.localroofer.ca/og-image.jpg",
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-18:00",
  areaServed: locations.map((city) => ({
    "@type": "City",
    name: city.name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair",
          description:
            "Professional roof repair for leaks, storm damage, missing shingles, flashing, and more.",
          url: "https://www.localroofer.ca/services/roof-repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement",
          description:
            "Full roof replacement using premium asphalt, metal, and flat roofing systems.",
          url: "https://www.localroofer.ca/services/roof-replacement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Inspection",
          description:
            "Detailed roof inspections for home buyers, sellers, and owners across the GTA.",
          url: "https://www.localroofer.ca/services/roof-inspection",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Roofing",
          description:
            "24/7 emergency roofing response for storm damage, active leaks, and fallen debris.",
          url: "https://www.localroofer.ca",
        },
      },
    ],
  },
  sameAs: [],
};

/* ── Trust badge data ─────────────────────────────────────────────── */
const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "We only refer roofers who hold a valid Ontario contractor licence and carry liability coverage.",
  },
  {
    icon: BadgeDollarSign,
    title: "Free Estimates",
    desc: "No cost, no obligation. Get an honest written quote before any work begins.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We reply within hours, not days. Emergency calls answered 7 days a week.",
  },
];

/* ── How It Works steps ───────────────────────────────────────────── */
const howItWorksSteps = [
  {
    number: "1",
    icon: Search,
    title: "Tell Us About Your Roof",
    desc: "Fill out the quote form with your city, roof type, and what you need done. It takes about a minute and costs nothing.",
  },
  {
    number: "2",
    icon: Star,
    title: "We Match You Locally",
    desc: "We connect you with a licensed roofing contractor who works in your city and handles the kind of job you described.",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Get Your Free Quote",
    desc: "The roofer contacts you directly to arrange an estimate — expect a response within hours, no pressure, no obligation.",
  },
];

/* ── Roof types ───────────────────────────────────────────────────── */
const roofTypes = [
  {
    title: "Shingle Roofing",
    desc: "Asphalt shingles are the most common roofing material in Ontario, offering an excellent balance of cost, durability, and aesthetic variety. Modern architectural shingles carry 30 to 50-year manufacturer warranties and are engineered specifically for Canadian freeze-thaw conditions.",
    services: ["Roof Repair", "Roof Replacement", "Roof Inspection"],
  },
  {
    title: "Metal Roofing",
    desc: "Metal roofing systems — standing seam steel, corrugated panels, and stone-coated metal — offer exceptional longevity of 40 to 70 years with minimal maintenance. Metal is an outstanding choice for Ontario homes exposed to heavy snow loads, ice, and hail.",
    services: ["Roof Repair", "Roof Replacement", "Roof Inspection"],
  },
  {
    title: "Flat Roofing",
    desc: "TPO, EPDM, and modified bitumen flat roof systems are essential for garages, additions, and modern homes with low-slope designs. Proper drainage design and membrane selection are critical to surviving Ontario's freeze-thaw cycles and heavy snowfall seasons.",
    services: ["Flat Roof Services", "Roof Inspection", "Emergency Roofing"],
  },
];

/* ── Homepage stats ───────────────────────────────────────────────────
   Derived from real site data only. Do not add contractor counts, review
   totals, or average ratings here until they come from real listings. */
const stats = [
  { value: `${locations.length}`, label: "GTA Cities Covered" },
  { value: `${services.length}`, label: "Roofing Services" },
  { value: "Free", label: "Quote Requests" },
  { value: "No Fee", label: "To Homeowners" },
];

/* ── Homepage FAQ ─────────────────────────────────────────────────── */
const homepageFaq = [
  {
    q: "What does a roof inspection cost?",
    a: "A professional roof inspection with a written report typically costs between $150 and $350 in the GTA, depending on roof size and complexity. For home buyers, the investment is minimal compared to the cost of an undetected defect. Many contractors in our network also offer free visual assessments as part of a repair or replacement quote.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements in the GTA are completed in one to two days. A straightforward bungalow with good access can often be done in a single day. Larger homes, steep pitches, or jobs requiring deck repair may take two to three days. You'll receive a clear timeline in your written quote before any work begins.",
  },
  {
    q: "Do I need a permit to replace my roof in Ontario?",
    a: "For a standard like-for-like shingle replacement on a residential home, a building permit is generally not required in most Ontario municipalities. However, if structural work is involved — such as replacing roof decking, changing the roof system type, or modifying the roof structure — a permit may be required. Your contractor will advise you and handle any permit applications on your behalf.",
  },
  {
    q: "How do I know if I need a repair or full replacement?",
    a: "A repair is usually appropriate when damage is localized — a few missing shingles, a failed flashing, or a single leak point — and the rest of the roof is in good condition with reasonable remaining lifespan. A replacement makes more sense when the roof is 20+ years old, repairs have become frequent, granule loss is widespread, or the decking is showing signs of rot or structural compromise. A professional inspection will give you a clear recommendation.",
  },
  {
    q: "What roofing materials work best for Ontario winters?",
    a: "For sloped roofs, architectural (laminated) asphalt shingles rated Class 4 impact-resistant, installed with ice-and-water shield along eaves and valleys and a proper ridge ventilation system, perform extremely well in Ontario winters. For flat roofs, TPO membrane is currently the most popular choice due to its flexibility in cold temperatures and resistance to UV and ponding. Metal roofing is an excellent premium option for exceptional longevity under heavy snow and ice conditions.",
  },
  {
    q: "How quickly can you respond to an emergency?",
    a: "Our GTA emergency roofing contractors typically respond within two to four hours of an initial call during daylight hours. For serious structural emergencies — active leaks, tree impact, or large-area shingle blowoff — we do our best to have a contractor on site the same day. Emergency tarping to stop water ingress is deployed immediately on arrival, followed by a full damage assessment and plan for permanent repairs.",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0F172A] overflow-hidden">
        {/* Subtle grid texture overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-[#F97316]/20">
            Toronto &amp; Greater Toronto Area
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 text-balance">
            Find a Trusted Roofer<br className="hidden sm:block" />{" "}
            in <span className="text-orange-500">Toronto & the GTA</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your roof and we&apos;ll connect you with a licensed local
            roofing contractor. Free quotes, no obligation.
          </p>

          {/* Search box */}
          <SearchHero />

          {/* Secondary CTA */}
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#quote"
              className="text-white/50 hover:text-white text-sm transition-colors underline underline-offset-4"
            >
              Or fill out our quick quote form
            </Link>
            <span className="text-white/20 hidden sm:block">·</span>
            <Link
              href="/partners"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              Are you a roofer? Partner with us →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES ══════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {trustBadges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#F97316]" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED CONTRACTORS / NETWORK ════════════════════════════ */}
      <section className="bg-[#0F172A] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {contractors.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    Our Partner Roofers
                  </h2>
                  <p className="text-slate-400 text-base max-w-xl">
                    Licensed roofing contractors in the LocalRoofer.ca network.
                  </p>
                </div>
                <Link
                  href="/find"
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  See all contractors →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {[...contractors]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map((c) => (
                    <ContractorCard key={c.slug} contractor={c} />
                  ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/find"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  Browse All {contractors.length}{" "}
                  {contractors.length === 1 ? "Contractor" : "Contractors"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F97316]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-[#F97316]" strokeWidth={1.8} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                We&apos;re Building Our Roofer Network
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                LocalRoofer.ca is onboarding licensed roofing contractors across Toronto
                and the GTA. Homeowners can request a quote today and we&apos;ll connect
                you with a local roofer directly — contractor profiles will appear here as
                our network grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Get a Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  I&apos;m a Roofer — Join the Network
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════ */}
      <section id="how-it-works" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Getting a free roofing quote through LocalRoofer.ca takes minutes — here's what happens next.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {howItWorksSteps.map(({ number, icon: Icon, title, desc }) => (
              <div
                key={number}
                className="relative bg-slate-50 rounded-2xl border border-gray-100 p-8 flex flex-col items-start gap-5"
              >
                {/* Step number badge */}
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#F97316] text-white text-sm font-bold flex items-center justify-center shadow-md shadow-[#F97316]/30">
                  {number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#F97316]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ═════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Our Roofing Services
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              From a single missing shingle to a complete roof replacement, LocalRoofer.ca connects GTA homeowners with the right licensed contractor for every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4 hover:shadow-md hover:border-[#F97316]/30 transition-all"
              >
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.tagline}</p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto text-[#F97316] font-semibold text-sm hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ROOF TYPES ════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Roof Types We Service
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              We handle quote requests for every major residential roofing system used across the GTA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {roofTypes.map((rt) => (
              <div
                key={rt.title}
                className="bg-slate-50 rounded-2xl border border-gray-100 p-8 flex flex-col gap-5"
              >
                <div className="w-12 h-1 rounded-full bg-[#F97316]" />
                <div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-3">{rt.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{rt.desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {rt.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#F97316]/10 text-[#F97316] font-medium px-2.5 py-1 rounded-full border border-[#F97316]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ═══════════════════════════════════════════════ */}
      <section className="bg-[#0F172A] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-4xl font-extrabold text-[#F97316] tracking-tight">{value}</span>
              <span className="text-white/60 text-sm font-medium uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ AREAS WE SERVE ════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Areas We Serve Across the GTA
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Licensed local roofers available in all of these communities — click your city for local roofing information.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-[#F97316]/50 hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all shadow-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Answers to the questions GTA homeowners ask us most often.
            </p>
          </div>
          <div className="space-y-3">
            {homepageFaq.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-[#0F172A] text-base hover:text-[#F97316] transition-colors">
                  {q}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#F97316] shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE FORM ════════════════════════════════════════════════ */}
      <section id="quote" className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Request Your Free Quote
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Fill out the form below and a local roofing expert will be in touch
              within a few hours — no pressure, no obligation.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
