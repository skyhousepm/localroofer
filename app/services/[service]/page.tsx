import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeDollarSign,
  Clock,
  Wrench,
  HardHat,
  ClipboardList,
  Zap,
  Layers,
  CheckCircle2,
  AlertTriangle,
  CloudRain,
  Sun,
  Wind,
  Flame,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import ContractorCard from "@/components/ContractorCard";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

/* ── Static params ───────────────────────────────────────────────── */
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  return {
    title: `${service.name} in Toronto & GTA`,
    description: `${service.tagline} Serving Toronto, Mississauga, Brampton, Markham, Vaughan, and all GTA cities. Local contractors — free estimates.`,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

/* ── Icon map ────────────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Wrench,
  HardHat,
  ClipboardList,
  Zap,
  Layers,
  CloudRain,
  Sun,
  Wind,
  Flame,
};

/* ── Trust badges ────────────────────────────────────────────────── */
const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Insured & WSIB-Covered",
    desc: "We only refer roofers who carry liability insurance and hold a WSIB clearance certificate.",
  },
  {
    icon: BadgeDollarSign,
    title: "Free Estimates",
    desc: "No cost, no obligation. Get a written quote before any work begins.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We reply within hours. Emergency calls answered 24/7.",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default async function ServicePage({
  params: paramsPromise,
}: {
  params: Promise<{ service: string }>;
}) {
  const params = await paramsPromise;
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const ServiceIcon = iconMap[service.icon] ?? Wrench;

  // Contractors that offer this service
  const serviceContractors = contractors
    .filter((c) => c.services.includes(service.slug))
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: "Services" }, { label: service.name }]}
        icon={<ServiceIcon className="w-5 h-5" strokeWidth={1.8} />}
        eyebrow="Toronto & GTA"
        title={service.name}
        cta={{ href: "#quote", label: "Get a Free Quote" }}
      >
        <p>{service.tagline}</p>
      </PageHero>

      {/* ── Trust badges ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {trustBadges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-trust-50 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-trust-700" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Description + Benefits ────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description — 2/3 width */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                About {service.name}
              </h2>
              {service.description.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Benefits — 1/3 width */}
            <div>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
                <h3 className="font-bold text-slate-900 text-base mb-5">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-trust-700 shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-slate-700 text-sm leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Our {service.name} Process
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Here's exactly what happens from your first call to completed work — no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-4 relative"
              >
                <span className="w-9 h-9 rounded-full bg-trust-700 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warning Signs ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Signs You May Need {service.name}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Watch for these warning signs — catching problems early saves money and prevents larger damage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.warningSigns.map((sign, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-cta-soft border border-orange-200 rounded-2xl p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-cta" strokeWidth={2} />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => {
                const Icon = iconMap[s.icon] ?? Wrench;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-trust-200 hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-trust-50 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-trust-700" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm group-hover:text-trust-700 transition-colors">
                      {s.name}
                    </h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* ── Contractors offering this service ─────────────────────── */}
      {serviceContractors.length > 0 && (
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  GTA Contractors Offering {service.name}
                </h2>
                <p className="text-slate-600 text-sm">
                  Partner contractors offering this service across the GTA.
                </p>
              </div>
              <Link
                href={`/find?service=${service.slug}`}
                className="text-trust-700 hover:text-trust-900 text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Browse all contractors →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {serviceContractors.map((c) => (
                <ContractorCard key={c.slug} contractor={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Common Questions About {service.name}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Answers to the questions homeowners ask us most about this service.
            </p>
          </div>
          <div className="space-y-3">
            {service.faq.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 text-base hover:text-trust-700 transition-colors">
                  {q}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-trust-700 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote form ────────────────────────────────────────────── */}
      <section id="quote" className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Get a Free {service.name} Quote
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              Fill out the form and a local GTA roofing contractor will be in touch within a few hours.
            </p>
          </div>
          <QuoteForm defaultJobType={service.slug === "emergency-roofing" ? "emergency" : service.slug === "roof-repair" ? "repair" : service.slug === "roof-replacement" ? "replacement" : service.slug === "roof-inspection" ? "inspection" : ""} />
        </div>
      </section>
    </>
  );
}
