import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function NotFound() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero eyebrow="404 · Page not found" title="This page has gone missing" cta={{ href: "/#quote", label: "Get a Free Quote" }}>
        <p>
          The link may be old or mistyped. If you&apos;re looking for a roofer, we can still
          help — request a free quote and we&apos;ll connect you with a local contractor.
        </p>
      </PageHero>

      {/* ── Helpful links ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Roofing Services</h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-600 hover:text-trust-700 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Areas We Serve</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-slate-600 hover:text-trust-700 transition-colors">
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
