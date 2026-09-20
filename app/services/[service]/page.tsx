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
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import ContractorCard from "@/components/ContractorCard";
import QuoteForm from "@/components/QuoteForm";

/* ── Static params ───────────────────────────────────────────────── */
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  return {
    title: `${service.name} in Toronto & GTA`,
    description: `${service.tagline} Serving Toronto, Mississauga, Brampton, Markham, Vaughan, and all GTA cities. Licensed contractors — free estimates.`,
    alternates: {
      canonical: `https://www.localroofer.ca/services/${service.slug}`,
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
};

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
    desc: "No cost, no obligation. Get a written quote before any work begins.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We reply within hours. Emergency calls answered 7 days a week.",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
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
            <span className="text-white/60">Services</span>
            <span>/</span>
            <span className="text-white/60">{service.name}</span>
          </nav>

          {/* Icon badge */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center">
              <ServiceIcon className="w-7 h-7 text-[#F97316]" strokeWidth={1.8} />
            </div>
          </div>

          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            Toronto &amp; GTA
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            {service.name}
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {service.tagline}
          </p>

          <Link
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.98] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#F97316]/30 transition-all duration-150"
          >
            Get a Free Quote
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

      {/* ── Description + Benefits ────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description — 2/3 width */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                About {service.name}
              </h2>
              {service.description.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Benefits — 1/3 width */}
            <div>
              <div className="bg-slate-50 rounded-2xl border border-gray-100 p-7">
                <h3 className="font-bold text-[#0F172A] text-base mb-5">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-700 text-sm leading-snug">{benefit}</span>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Our {service.name} Process
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Here's exactly what happens from your first call to completed work — no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col gap-4 relative"
              >
                <span className="w-9 h-9 rounded-full bg-[#F97316] text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md shadow-[#F97316]/30">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Signs You May Need {service.name}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Watch for these warning signs — catching problems early saves money and prevents larger damage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.warningSigns.map((sign, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#F97316]/5 border border-[#F97316]/15 rounded-2xl p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F97316]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-[#F97316]" strokeWidth={2} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#0F172A] mb-6">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => {
                const Icon = iconMap[s.icon] ?? Wrench;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#F97316]/40 hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-[#F97316]" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#F97316] transition-colors">
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
        <section className="bg-[#0F172A] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  GTA Contractors Offering {service.name}
                </h2>
                <p className="text-slate-400 text-sm">
                  Partner contractors offering this service across the GTA.
                </p>
              </div>
              <Link
                href={`/find?service=${service.slug}`}
                className="text-[#F97316] hover:text-orange-400 text-sm font-semibold transition-colors whitespace-nowrap"
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Common Questions About {service.name}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Answers to the questions homeowners ask us most about this service.
            </p>
          </div>
          <div className="space-y-3">
            {service.faq.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-[#0F172A] text-base hover:text-[#F97316] transition-colors">
                  {q}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#F97316] shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Get a Free {service.name} Quote
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Fill out the form and a licensed GTA roofing contractor will be in touch within a few hours.
            </p>
          </div>
          <QuoteForm defaultJobType={service.slug === "emergency-roofing" ? "emergency" : service.slug === "roof-repair" ? "repair" : service.slug === "roof-replacement" ? "replacement" : service.slug === "roof-inspection" ? "inspection" : ""} />
        </div>
      </section>
    </>
  );
}
