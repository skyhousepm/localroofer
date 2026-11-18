import type { Metadata } from "next";
import { CheckCircle2, Users, MapPin, TrendingUp, Star } from "lucide-react";
import PartnerForm from "@/components/PartnerForm";
import { SITE_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Partner With Us — Join the LocalRoofer.ca Network",
  description:
    "Are you a local roofing contractor in Toronto or the GTA? Apply to join the LocalRoofer.ca partner network and receive qualified local leads. No subscription fees.",
  alternates: { canonical: `${SITE_URL}/partners` },
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
  "Minimum $2M general liability insurance",
  "WSIB clearance certificate in good standing",
  "Minimum 2 years in business",
  "Ability to respond to leads within a few hours",
  "Commitment to quality workmanship and honest pricing",
];

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: "For Roofers" }]}
        eyebrow="For roofing contractors"
        title={<>Grow Your Roofing Business With <span className="text-trust-700">LocalRoofer.ca</span></>}
        cta={{ href: "#apply", label: "Apply to Join" }}
        call={false}
      >
        <p>
          We connect homeowners across the GTA with trusted, local roofers every day.
          If you&apos;re a local contractor looking for a steady stream of qualified leads
          in your area, we want to hear from you.
        </p>
      </PageHero>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10 tracking-tight">
            Why Partner With LocalRoofer.ca?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex items-start gap-5 hover:shadow-md transition-shadow"
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
        </div>
      </section>

      {/* ── Requirements ──────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Partner Requirements
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                We maintain high standards so that every homeowner who contacts us has a great
                experience. All partners must meet the following requirements before approval.
              </p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trust-700 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-trust-950 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">How It Works</h3>
              <p className="text-white/75 text-sm mb-8">From application to your first lead.</p>
              <ol className="space-y-6">
                {[
                  { n: "1", title: "Apply Below", desc: "Fill out the partner application form with your business details." },
                  { n: "2", title: "We Review", desc: "Our team reviews your application and verifies your credentials within 1–2 business days." },
                  { n: "3", title: "Onboarding Call", desc: "We'll schedule a quick call to confirm your service areas and set expectations." },
                  { n: "4", title: "Start Receiving Leads", desc: "Qualified homeowner leads in your area land directly in your inbox." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-trust-950">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-white mb-0.5">{step.title}</p>
                      <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────────── */}
      <section id="apply" className="bg-slate-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Apply to Join the Network
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              Fill out the form below and we&apos;ll be in touch within 1–2 business days.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
