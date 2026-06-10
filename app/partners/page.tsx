import type { Metadata } from "next";
import { CheckCircle2, Users, MapPin, TrendingUp, Star } from "lucide-react";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us — Join the LocalRoofer.ca Network",
  description:
    "Are you a licensed roofing contractor in Toronto or the GTA? Apply to join the LocalRoofer.ca partner network and receive qualified local leads. No subscription fees.",
  alternates: { canonical: "https://www.localroofer.ca/partners" },
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Qualified, Exclusive Leads",
    desc: "Every lead comes from a homeowner actively looking for a roofer in your service area — no time-wasters.",
  },
  {
    icon: MapPin,
    title: "Local Coverage",
    desc: "We match leads to partners by city and neighbourhood, so you're only contacted for jobs you can actually take.",
  },
  {
    icon: Users,
    title: "No Bidding Wars",
    desc: "Leads are sent to one partner at a time, not blasted to five contractors at once.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    desc: "Completed jobs generate reviews on your profile, helping you win more work over time.",
  },
];

const requirements = [
  "Valid Ontario contractor licence",
  "Minimum $2M general liability insurance",
  "WSIB coverage for all workers",
  "Minimum 2 years in business",
  "Ability to respond to leads within a few hours",
  "Commitment to quality workmanship and honest pricing",
];

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] overflow-hidden">
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
          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[#F97316]/20">
            For Roofing Contractors
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Grow Your Roofing Business<br className="hidden sm:block" /> With LocalRoofer.ca
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We connect homeowners across the GTA with trusted, local roofers every day.
            If you&apos;re a licensed contractor looking for a steady stream of qualified leads
            in your area, we want to hear from you.
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.98] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#F97316]/30 transition-all duration-150"
          >
            Apply to Join
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Silhouette */}
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

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] text-center mb-10 tracking-tight">
            Why Partner With LocalRoofer.ca?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex items-start gap-5 hover:shadow-md transition-shadow"
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
        </div>
      </section>

      {/* ── Requirements ──────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
                Partner Requirements
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We maintain high standards so that every homeowner who contacts us has a great
                experience. All partners must meet the following requirements before approval.
              </p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-extrabold mb-2">How It Works</h3>
              <p className="text-white/50 text-sm mb-8">From application to your first lead.</p>
              <ol className="space-y-6">
                {[
                  { n: "1", title: "Apply Below", desc: "Fill out the partner application form with your business details." },
                  { n: "2", title: "We Review", desc: "Our team reviews your application and verifies your credentials within 1–2 business days." },
                  { n: "3", title: "Onboarding Call", desc: "We'll schedule a quick call to confirm your service areas and set expectations." },
                  { n: "4", title: "Start Receiving Leads", desc: "Qualified homeowner leads in your area land directly in your inbox." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-sm font-extrabold text-white">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-white mb-0.5">{step.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────────── */}
      <section id="apply" className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
              Apply to Join the Network
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Fill out the form below and we&apos;ll be in touch within 1–2 business days.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
