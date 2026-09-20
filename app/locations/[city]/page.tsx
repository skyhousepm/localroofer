import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, BadgeDollarSign, Clock } from "lucide-react";
import { locations, getCityBySlug } from "@/lib/locations";
import { contractors } from "@/lib/contractors";
import ContractorCard from "@/components/ContractorCard";
import QuoteForm from "@/components/QuoteForm";

/* ── Static params — pre-render every city at build time ─────────── */
export function generateStaticParams() {
  return locations.map((city) => ({ city: city.slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return {
    title: `Roofing Services in ${city.name}, ON | LocalRoofer.ca`,
    description: `Looking for a trusted roofer in ${city.name}? LocalRoofer.ca connects ${city.name} homeowners with licensed, insured local roofing contractors. Free estimates — call today.`,
  };
}

/* ── Trust badges ────────────────────────────────────────────────── */
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

/* ═══════════════════════════════════════════════════════════════════ */
export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  // Contractors that serve this city (by home city or service areas)
  const cityContractors = contractors
    .filter(
      (c) =>
        c.city.toLowerCase() === city.name.toLowerCase() ||
        c.serviceAreas.some((a) => a.toLowerCase() === city.name.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] overflow-hidden">
        {/* Grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#quote" className="hover:text-white/70 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-white/60">{city.name}</span>
          </nav>

          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            {city.name}, Ontario
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Roofing Services in {city.name}
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {city.description}
          </p>

          <Link
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.98] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#F97316]/30 transition-all duration-150"
          >
            Get a Free Quote in {city.name}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Rooftop silhouette */}
          <div aria-hidden className="mt-16 -mb-1">
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path
                d="M0,100 L0,65 L60,65 L60,48 L80,30 L100,48 L100,65 L160,65 L160,44 L190,22 L220,44 L220,65 L300,65 L300,52 L330,35 L360,52 L360,65 L420,65 L420,40 L455,12 L490,40 L490,65 L580,65 L580,56 L610,42 L640,56 L640,65 L720,65 L720,36 L760,6 L800,36 L800,65 L880,65 L880,48 L910,28 L940,48 L940,65 L1020,65 L1020,52 L1050,36 L1080,52 L1080,65 L1160,65 L1160,40 L1200,12 L1240,40 L1240,65 L1320,65 L1320,50 L1350,32 L1380,50 L1380,65 L1440,65 L1440,100 Z"
                fill="#1E293B"
              />
              <path d="M0,100 L1440,100 L1440,88 L0,88 Z" fill="#F8FAFC" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Trust badges ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
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

      {/* ── Services list ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
            Roofing Services Available in {city.name}
          </h2>
          <p className="text-gray-500 text-sm mb-8">{city.serviceNote}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Roof Repair", href: "/services/roof-repair", desc: "Leaks, storm damage, shingles, flashing." },
              { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full re-roofs with premium materials." },
              { label: "Roof Inspection", href: "/services/roof-inspection", desc: "Pre-purchase & seasonal assessments." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-[#F97316]/40 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#F97316] transition-colors">
                  {s.label}
                </h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Issues ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Common Roofing Challenges in {city.name}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Local climate, housing age, and construction styles create specific roofing problems that {city.name} homeowners face more often than most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {city.commonIssues.map((issue) => (
              <div
                key={issue.title}
                className="bg-white rounded-2xl border border-[#F97316]/15 p-7 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#F97316]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">{issue.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{issue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Local ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: reasons */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6">
                Why Choose a Local {city.name} Roofer?
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "Knowledge of Local Building Codes",
                    desc: `Contractors familiar with ${city.name} know the municipal permit requirements and Ontario Building Code details that apply specifically to your area — avoiding costly mistakes or failed inspections.`,
                  },
                  {
                    title: "Fast Response in Your Neighbourhood",
                    desc: `A local roofer can reach your home quickly for emergency calls and inspections — no long drive times or out-of-area scheduling delays that add days to your wait.`,
                  },
                  {
                    title: "Familiar With Local Weather Patterns",
                    desc: `${city.name} roofers understand the specific freeze-thaw patterns, snowfall levels, and storm exposure your area experiences — and specify materials and details accordingly.`,
                  },
                  {
                    title: "Established Local Reputation",
                    desc: `Local contractors depend on referrals and community reputation to grow their business. That accountability means higher standards of workmanship and a greater commitment to making things right if issues arise.`,
                  },
                ].map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#F97316] shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-[#0F172A] text-sm">{point.title}: </span>
                      <span className="text-gray-500 text-sm leading-relaxed">{point.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA card */}
            <div className="bg-[#0F172A] rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-[#F97316] text-xs font-semibold tracking-widest uppercase mb-3">
                  {city.name}, Ontario
                </p>
                <h3 className="text-white text-xl font-extrabold leading-snug mb-3">
                  Ready to get started?
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Get matched with a trusted, licensed local roofer in {city.name} today. Free estimates, no obligation — most inquiries answered within hours.
                </p>
              </div>
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#F97316]/30 transition-all duration-150"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#0F172A] mb-2">
            Also Serving Near {city.name}
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            We take quote requests from these nearby communities as well.
          </p>
          <div className="flex flex-wrap gap-3">
            {city.nearbyAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316]/30 bg-white text-sm font-medium text-gray-700"
              >
                <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Contractors ─────────────────────────────────────── */}
      {cityContractors.length > 0 && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                  Roofers Serving {city.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Partner contractors covering {city.name} and the surrounding area.
                </p>
              </div>
              <Link
                href={`/find?city=${city.slug}`}
                className="text-[#F97316] hover:text-orange-600 text-sm font-semibold transition-colors whitespace-nowrap"
              >
                See all {city.name} roofers →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {cityContractors.map((c) => (
                <ContractorCard key={c.slug} contractor={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Quote form ────────────────────────────────────────────── */}
      <section id="quote" className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Get a Free Quote in {city.name}
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Fill out the form and a local {city.name} roofer will be in touch within a few hours — no pressure, no obligation.
            </p>
          </div>
          <QuoteForm defaultCity={city.slug} />
        </div>
      </section>
    </>
  );
}
