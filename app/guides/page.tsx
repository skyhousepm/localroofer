import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Roofing Guides for GTA Homeowners",
  description:
    "Practical roofing guides for Toronto and GTA homeowners — costs, warning signs, ice dams, repair vs. replacement, and how to hire a roofer.",
  alternates: { canonical: `${SITE_URL}/guides` },
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function GuidesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero crumbs={[{ label: "Guides" }]} eyebrow="Homeowner guides" title="Roofing Guides" call={false}>
        <p>
          Straight answers to the questions GTA homeowners ask most — what roofing work
          costs, when to repair or replace, and how to hire a contractor you can trust.
        </p>
      </PageHero>

      {/* ── Guide grid ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md hover:border-trust-200 transition-all flex flex-col"
            >
              <span className="w-10 h-10 rounded-xl bg-trust-50 flex items-center justify-center shrink-0 mb-4">
                <BookOpen className="w-5 h-5 text-trust-700" />
              </span>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-trust-700 transition-colors mb-2 leading-snug">
                {g.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{g.description}</p>
              <span className="text-xs text-slate-500">{g.readMinutes} min read</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
