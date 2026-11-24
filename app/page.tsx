import Link from "next/link";
import {
  ArrowRight, BrickWall, Check, ClipboardCheck, CloudLightning, Droplets, HandCoins, House, Layers,
  MapPin, PhoneCall, ShieldCheck, Sun, Timer, Users, Wind, Wrench, type LucideIcon,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import SearchHero from "@/components/SearchHero";
import ContractorCard from "@/components/ContractorCard";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";
import { ctaButton, outlineButton } from "@/lib/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocalRoofer.ca — Trusted Roofing in Toronto & the GTA",
  description:
    "Free roofing quotes from insured, WSIB-covered roofers across Toronto & the GTA. Repairs, replacements, inspections and 24/7 emergency service.",
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "LocalRoofer.ca",
  description:
    "LocalRoofer.ca connects Toronto and Greater Toronto Area homeowners with trusted local roofing contractors for roof repair, replacement, inspection, and emergency service.",
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/brand/icon-512.png`,
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: locations.map((city) => ({
    "@type": "City",
    name: city.name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.tagline,
        url: `${SITE_URL}/services/${service.slug}`,
      },
    })),
  },
  sameAs: [],
};

/* ── Trust points ─────────────────────────────────────────────────── */
const trustPoints = [
  { icon: ShieldCheck, title: "Insured & WSIB-covered", desc: "We only refer roofers who carry liability insurance and a WSIB clearance certificate." },
  { icon: HandCoins, title: "Free, no-obligation quotes", desc: "An honest written quote before any work begins. No fee to homeowners." },
  { icon: Timer, title: "Fast response", desc: "We reply within hours, not days. Emergency calls answered 24/7." },
];

/* ── How It Works steps ───────────────────────────────────────────── */
const howItWorksSteps = [
  {
    title: "Tell us about your roof",
    desc: "Fill out the quote form with your city, roof type, and what you need done. It takes about a minute and costs nothing.",
  },
  {
    title: "We match you locally",
    desc: "We connect you with a local roofing contractor who works in your city and handles the kind of job you described.",
  },
  {
    title: "Get your free quote",
    desc: "The roofer contacts you directly to arrange an estimate — expect a response within hours, no pressure, no obligation.",
  },
];

/* ── An icon per service; anything new falls back to the wrench ──── */
const serviceIcons: Record<string, LucideIcon> = {
  "roof-repair": Wrench,
  "roof-replacement": House,
  "roof-inspection": ClipboardCheck,
  "emergency-roofing": CloudLightning,
  "flat-roof": Layers,
  eavestroughs: Droplets,
  skylights: Sun,
  "attic-ventilation": Wind,
  "chimney-flashing": BrickWall,
};

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

/* ── Homepage FAQ ─────────────────────────────────────────────────── */
const homepageFaq = [
  {
    q: "What does a roof inspection cost?",
    a: "A professional roof inspection with a written report typically costs between $150 and $350 in the GTA, depending on roof size and complexity. For home buyers, the investment is minimal compared to the cost of an undetected defect. Many local contractors also offer free visual assessments as part of a repair or replacement quote.",
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

/* ── Shared bits ──────────────────────────────────────────────────── */
const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

function SectionHeading({ eyebrow, title, intro, center = true }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
      {eyebrow && <p className="text-sm font-semibold text-trust-700 mb-2">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3 text-balance">{title}</h2>
      {intro && <p className="text-slate-600 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="bg-trust-50 border-b border-trust-100">
        <div className={`${container} py-14 sm:py-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center`}>
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-trust-700 bg-white border border-trust-200 px-3 py-1 rounded-full mb-6">
              <MapPin className="w-4 h-4" aria-hidden />
              Toronto &amp; the Greater Toronto Area
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5 text-balance">
              Find a trusted roofer in <span className="text-trust-700">Toronto &amp; the GTA</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Tell us about your roof and we&apos;ll connect you with an insured local roofing contractor. Free quotes, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="#quote" className={ctaButton}>
                Get a Free Quote
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a href={`tel:${PHONE_TEL}`} className={outlineButton}>
                <PhoneCall className="w-5 h-5" aria-hidden />
                Call 24/7 · {PHONE_DISPLAY}
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700">
              {["Insured & WSIB-covered", "No fee to homeowners", "Replies within hours"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Find roofers near you</h2>
            <p className="text-sm text-slate-600 mb-6">Pick a service and your city to see local contractors.</p>
            <SearchHero />
            <p className="text-sm text-slate-600 mt-5 pt-5 border-t border-slate-100">
              Would rather we do the matching?{" "}
              <Link href="#quote" className="font-semibold text-trust-700 hover:underline underline-offset-4">
                Send a quote request
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ═══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200">
        <div className={`${container} py-10 grid sm:grid-cols-3 gap-8`}>
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" strokeWidth={1.8} aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ EMERGENCY BAND ════════════════════════════════════════════ */}
      <section className="bg-cta-soft border-b border-orange-200">
        <div className={`${container} py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <CloudLightning className="w-7 h-7 text-cta shrink-0" aria-hidden />
            <p className="text-slate-900">
              <span className="font-bold">Roof leaking right now?</span>{" "}
              <span className="text-slate-700">Storm damage and active leaks are answered 24/7.</span>
            </p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className={`${ctaButton} py-3 text-sm whitespace-nowrap`}>
            <PhoneCall className="w-4 h-4" aria-hidden />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════ */}
      <section id="how-it-works" className="bg-white py-20 scroll-mt-28">
        <div className={container}>
          <SectionHeading
            eyebrow="How it works"
            title="A free quote in three steps"
            intro="Getting a roofing quote through LocalRoofer.ca takes minutes — here's what happens next."
          />
          <ol className="grid md:grid-cols-3 gap-6">
            {howItWorksSteps.map(({ title, desc }, i) => (
              <li key={title} className="relative rounded-2xl border border-slate-200 p-7">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-trust-700 text-white font-heading font-bold mb-5">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className={container}>
          <SectionHeading
            eyebrow="Services"
            title="Every roofing job, handled by local roofers"
            intro="From a single missing shingle to a complete roof replacement, we connect GTA homeowners with the right local contractor for the job."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-trust-600 p-6 flex flex-col gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center shrink-0 group-hover:bg-trust-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.8} aria-hidden />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">{service.name}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{service.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-trust-700">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ROOF TYPES ════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className={container}>
          <SectionHeading
            eyebrow="Roof types"
            title="Shingle, metal and flat roofs"
            intro="We handle quote requests for every major residential roofing system used across the GTA."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {roofTypes.map((rt) => (
              <div key={rt.title} className="rounded-2xl border border-slate-200 p-7 flex flex-col gap-4">
                <h3 className="font-semibold text-xl text-slate-900">{rt.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{rt.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {rt.services.map((s) => (
                    <span key={s} className="text-xs font-semibold text-trust-900 bg-trust-50 border border-trust-100 px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ROOFER NETWORK ════════════════════════════════════════════ */}
      <section className="bg-trust-950 py-20">
        <div className={container}>
          {contractors.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Our partner roofers</h2>
                  <p className="text-white/70 text-lg max-w-xl">Local roofing contractors in the LocalRoofer.ca network.</p>
                </div>
                <Link href="/find" className="text-trust-200 hover:text-white font-semibold transition-colors whitespace-nowrap">
                  See all contractors →
                </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {[...contractors]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map((c) => (
                    <ContractorCard key={c.slug} contractor={c} />
                  ))}
              </div>
            </>
          ) : (
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-trust-200 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7" strokeWidth={1.8} aria-hidden />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">We&apos;re building our roofer network</h2>
                  <p className="text-white/75 leading-relaxed max-w-2xl">
                    LocalRoofer.ca is onboarding local roofing contractors across Toronto and the GTA. Request a quote today and
                    we&apos;ll connect you with a local roofer directly — contractor profiles will appear here as the network grows.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="#quote" className={ctaButton}>
                  Get a Free Quote
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  I&apos;m a roofer — join the network
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ AREAS WE SERVE ════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className={container}>
          <SectionHeading
            eyebrow="Service area"
            title={`Local roofers in ${locations.length} GTA communities`}
            intro="Pick your city for local roofing information, prices and permits."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 font-medium hover:border-trust-600 hover:text-trust-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-slate-400" aria-hidden />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-20 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Questions homeowners ask us" />
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {homepageFaq.map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 font-semibold text-lg text-slate-900 hover:text-trust-700 transition-colors">
                  {q}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-trust-50 text-trust-700 shrink-0 transition-transform duration-200 group-open:rotate-45 text-xl leading-none" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-6 text-slate-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE FORM ════════════════════════════════════════════════ */}
      <section id="quote" className="bg-trust-50 py-20 border-t border-trust-100 scroll-mt-28">
        <div className={`${container} grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start`}>
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold text-trust-700 mb-2">Free quote</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">Request your free roofing quote</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Fill out the form and a local roofing contractor will be in touch within a few hours — no pressure, no obligation.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "One short form — about a minute",
                "Matched with an insured, WSIB-covered local roofer",
                "A written quote before any work begins",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-800">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white shrink-0 mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white border border-trust-100 p-5">
              <p className="text-sm text-slate-600 mb-1">Prefer to talk? We answer 24/7.</p>
              <a href={`tel:${PHONE_TEL}`} className="font-heading text-2xl font-bold text-trust-700 hover:text-trust-900 transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
