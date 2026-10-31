import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/locations";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Roofing Service Areas in Toronto & the GTA",
  description:
    "LocalRoofer.ca connects homeowners across Toronto and the GTA with licensed, insured local roofers. Find roofing services in your city and get a free estimate.",
  alternates: { canonical: "https://www.localroofer.ca/locations" },
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function LocationsPage() {
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Locations</span>
          </nav>

          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            Toronto &amp; the GTA
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Areas We Serve
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We connect homeowners with licensed local roofers in {locations.length} cities
            across Toronto and the Greater Toronto Area. Pick your city to see common local
            roofing issues and request a free estimate.
          </p>
        </div>
      </section>

      {/* ── City grid ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#F97316]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                </span>
                <h2 className="text-lg font-bold text-[#0F172A] group-hover:text-[#F97316] transition-colors">
                  {city.name}
                </h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{city.serviceNote}</p>
              <span className="text-sm font-semibold text-[#F97316]">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Don&apos;t See Your City?
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
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
