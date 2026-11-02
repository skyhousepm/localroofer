import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

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
            <span className="text-white/60">Guides</span>
          </nav>

          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            Homeowner Guides
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Roofing Guides
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Straight answers to the questions GTA homeowners ask most — what roofing work
            costs, when to repair or replace, and how to hire a contractor you can trust.
          </p>
        </div>
      </section>

      {/* ── Guide grid ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md hover:border-[#F97316]/30 transition-all flex flex-col"
            >
              <span className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0 mb-4">
                <BookOpen className="w-5 h-5 text-[#F97316]" />
              </span>
              <h2 className="text-lg font-bold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-2 leading-snug">
                {g.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{g.description}</p>
              <span className="text-xs text-gray-400">{g.readMinutes} min read</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
