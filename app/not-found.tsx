import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function NotFound() {
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

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            404
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            This page has gone missing
          </h1>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            The link may be old or mistyped. If you&apos;re looking for a roofer, we can still
            help — request a free quote and we&apos;ll connect you with a local contractor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.98] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#F97316]/30 transition-all duration-150"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ── Helpful links ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-bold text-[#0F172A] mb-4">Roofing Services</h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-600 hover:text-[#F97316] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0F172A] mb-4">Areas We Serve</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-gray-600 hover:text-[#F97316] transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
