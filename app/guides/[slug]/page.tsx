import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { guides, getGuideBySlug } from "@/lib/guides";
import { getServiceBySlug } from "@/lib/services";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL as BASE_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";


/* ── Static params — pre-render every guide at build time ────────── */
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `${BASE_URL}/guides/${guide.slug}` },
    openGraph: { type: "article", title: guide.title, description: guide.description },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ═══════════════════════════════════════════════════════════════════ */
export default async function GuidePage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await paramsPromise;
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedServices = guide.relatedServices
    .map(getServiceBySlug)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    mainEntityOfPage: `${BASE_URL}/guides/${guide.slug}`,
    author: { "@type": "Organization", name: "LocalRoofer.ca", url: BASE_URL },
    publisher: { "@type": "Organization", name: "LocalRoofer.ca", url: BASE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero crumbs={[{ label: "Guides", href: "/guides" }]} title={guide.title} call={false}>
        <p className="text-sm text-slate-600">
          Updated {formatDate(guide.updated)} · {guide.readMinutes} min read
        </p>
      </PageHero>

      {/* ── Article ───────────────────────────────────────────────── */}
      <article className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-5 mb-12">
            {guide.intro.map((para, i) => (
              <p key={i} className="text-lg text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                {section.heading}
              </h2>

              {section.paragraphs?.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-3 mb-4">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-trust-700 shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        {section.table.headers.map((h) => (
                          <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-3 ${i === 0 ? "text-slate-800 font-medium" : "text-slate-600 whitespace-nowrap"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.after?.map((para, i) => (
                <p key={i} className="text-sm text-slate-600 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* Related services */}
          {relatedServices.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
              <h2 className="font-bold text-slate-900 text-base mb-4">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-trust-100 bg-white text-sm font-medium text-slate-700 hover:border-trust-600 hover:text-trust-700 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* ── More guides ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More Roofing Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="bg-white rounded-xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900 hover:text-trust-700 hover:border-trust-200 transition-colors"
              >
                {g.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote form ────────────────────────────────────────────── */}
      <section id="quote" className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Get a Free Roofing Quote
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              Tell us about your roof and we&apos;ll connect you with a local contractor — no cost,
              no obligation.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
