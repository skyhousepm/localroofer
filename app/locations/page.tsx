import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/locations";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Roofing Service Areas in Toronto & the GTA",
  description:
    "LocalRoofer.ca connects homeowners across Toronto and the GTA with insured local roofers. Find roofing services in your city and get a free estimate.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function LocationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: "Locations" }]}
        eyebrow="Toronto & the GTA"
        title="Areas We Serve"
        cta={{ href: "/#quote", label: "Get a Free Quote" }}
      >
        <p>
          We connect homeowners with local roofers in {locations.length} cities
          across Toronto and the Greater Toronto Area. Pick your city to see common local
          roofing issues and request a free estimate.
        </p>
      </PageHero>

      {/* ── City grid ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-trust-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-trust-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-trust-700" />
                </span>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-trust-700 transition-colors">
                  {city.name}
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{city.serviceNote}</p>
              <span className="text-sm font-semibold text-trust-700">
                Roofing in {city.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quote form ────────────────────────────────────────────── */}
      <section id="quote" className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Don&apos;t See Your City?
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              Send us your details anyway — if a partner roofer covers your area, we&apos;ll
              connect you. No cost, no obligation.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
