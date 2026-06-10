import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeDollarSign,
  Clock,
  CheckCircle2,
  Phone,
  MapPin,
  CalendarDays,
  BadgeCheck,
  Star,
  UserCheck,
} from "lucide-react";
import { contractors, getContractorBySlug } from "@/lib/contractors";
import QuoteForm from "@/components/QuoteForm";

/* ── Static params ───────────────────────────────────────────────── */
export function generateStaticParams() {
  return contractors.map((c) => ({ slug: c.slug }));
}

/* ── Metadata ────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const c = getContractorBySlug(params.slug);
  if (!c) return {};
  return {
    title: `${c.name} — Roofing Contractor in ${c.city}, ON`,
    description: `${c.tagline} ${c.reviewCount} reviews · ${c.rating}/10 rating. Serving ${c.serviceAreas.slice(0, 3).join(", ")} and more. Free estimates.`,
    alternates: { canonical: `https://www.localroofer.ca/roofers/${c.slug}` },
  };
}

/* ── Helpers ─────────────────────────────────────────────────────── */
const roofTypeLabels: Record<string, string> = {
  shingle: "Shingle Roofing",
  metal: "Metal Roofing",
  flat: "Flat Roofing",
};

const serviceLabels: Record<string, string> = {
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "roof-inspection": "Roof Inspection",
  "emergency-roofing": "Emergency Roofing",
  "flat-roof": "Flat Roof Services",
};

function StarDisplay({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < filled ? "text-[#F97316] fill-[#F97316]" : "text-gray-300 fill-gray-200"}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function ReviewStars({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < filled ? "text-[#F97316] fill-[#F97316]" : "text-gray-200 fill-gray-200"}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function VerificationBadge({
  active,
  label,
}: {
  active: boolean;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${
        active
          ? "bg-green-50 text-green-700 border-green-200"
          : "bg-gray-50 text-gray-400 border-gray-200"
      }`}
    >
      <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2} />
      {label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function ContractorProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getContractorBySlug(params.slug);
  if (!c) notFound();

  const yearsInBusiness = new Date().getFullYear() - c.founded;

  return (
    <>
      {/* ── Profile Hero ──────────────────────────────────────────── */}
      <section className="bg-[#0F172A] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/find" className="hover:text-white/70 transition-colors">Find a Roofer</Link>
            <span>/</span>
            <span className="text-white/60">{c.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

            {/* Left — identity */}
            <div className="flex-1">
              {/* Logo placeholder + name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#F97316] text-2xl font-extrabold">
                    {c.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {c.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-sm text-white/50">{c.city}, ON</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-base mb-5 max-w-xl leading-relaxed">
                {c.tagline}
              </p>

              {/* Rating row */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                  <span className="text-2xl font-extrabold text-white">{c.rating}</span>
                  <div>
                    <StarDisplay rating={c.rating} />
                    <span className="text-xs text-white/40 mt-0.5 block">
                      {c.reviewCount} reviews
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CalendarDays className="w-4 h-4 text-white/40" />
                  {yearsInBusiness} years in business
                </div>
              </div>

              {/* Verification badges */}
              <div className="flex flex-wrap gap-2">
                <VerificationBadge active={c.verified} label="Verified" />
                <VerificationBadge active={c.licensed} label="Licensed" />
                <VerificationBadge active={c.insured} label="Insured" />
                <VerificationBadge active={c.backgroundCheck} label="Background Check" />
              </div>
            </div>

            {/* Right — CTA card */}
            <div className="lg:w-72 bg-white rounded-2xl p-6 shadow-xl">
              <p className="text-sm text-gray-500 mb-1">Get a quote from</p>
              <p className="font-extrabold text-[#0F172A] text-lg mb-4 leading-tight">{c.name}</p>
              <a
                href={`tel:${c.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 w-full border-2 border-[#F97316] text-[#F97316] font-bold py-3 rounded-xl hover:bg-[#F97316] hover:text-white transition-all mb-3 text-sm"
              >
                <Phone className="w-4 h-4" />
                {c.phone}
              </a>
              <Link
                href="#quote"
                className="flex items-center justify-center gap-2 w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                Request a Free Quote
              </Link>
              <p className="text-center text-xs text-gray-400 mt-3">
                Typically responds within a few hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left column — About + Reviews ───────────────────── */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-4">
                About {c.name}
              </h2>
              <div className="space-y-4">
                {c.description.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-4">
                Why Choose {c.name}
              </h2>
              <ul className="space-y-3">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-gray-700 text-sm leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold text-[#0F172A]">
                  Homeowner Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <StarDisplay rating={c.rating} />
                  <span className="text-sm font-bold text-gray-900">{c.rating}/10</span>
                  <span className="text-sm text-gray-400">({c.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-5">
                {c.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0">
                          <span className="text-white text-sm font-bold">
                            {r.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{r.author}</p>
                          <p className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {r.city}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end">
                          <ReviewStars rating={r.rating} />
                          <span className="text-xs font-bold text-gray-700 ml-1">
                            {r.rating}/10
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {new Date(r.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block bg-slate-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {r.service}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — Sidebar ───────────────────────────── */}
          <div className="space-y-6">

            {/* Quick stats */}
            <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-[#0F172A] text-sm uppercase tracking-wider mb-4">
                Business Info
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-gray-600">
                  <CalendarDays className="w-4 h-4 text-[#F97316] shrink-0" />
                  In business since {c.founded} ({yearsInBusiness} yrs)
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                  Based in {c.city}, ON
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <UserCheck className="w-4 h-4 text-[#F97316] shrink-0" />
                  {c.reviewCount} verified reviews
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                  <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="hover:text-[#F97316] transition-colors">
                    {c.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Services offered */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-[#0F172A] text-sm uppercase tracking-wider mb-4">
                Services Offered
              </h3>
              <ul className="space-y-2">
                {c.services.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/services/${s}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F97316] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                      {serviceLabels[s] ?? s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roof types */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-[#0F172A] text-sm uppercase tracking-wider mb-4">
                Roof Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {c.roofTypes.map((rt) => (
                  <span
                    key={rt}
                    className="bg-[#F97316]/10 text-[#F97316] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#F97316]/20"
                  >
                    {roofTypeLabels[rt] ?? rt}
                  </span>
                ))}
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-[#0F172A] text-sm uppercase tracking-wider mb-4">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {c.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-slate-50 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-[#0F172A] rounded-2xl p-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Verified Credentials
              </h3>
              <ul className="space-y-3">
                {[
                  { active: c.licensed, label: "Ontario Licensed Contractor" },
                  { active: c.insured, label: "Liability Insured" },
                  { active: c.verified, label: "LocalRoofer.ca Verified" },
                  { active: c.backgroundCheck, label: "Background Checked" },
                ].map(({ active, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <BadgeCheck
                      className={`w-4 h-4 shrink-0 ${active ? "text-green-400" : "text-white/20"}`}
                      strokeWidth={2}
                    />
                    <span className={`text-sm ${active ? "text-white/80" : "text-white/30 line-through"}`}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Quote Form ────────────────────────────────────────────── */}
      <section id="quote" className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Request a Quote from {c.name}
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Fill out the form and {c.name.split(" ")[0]} will be in touch within a few hours.
            </p>
          </div>
          <QuoteForm defaultCity={c.city.toLowerCase()} />
        </div>
      </section>
    </>
  );
}
