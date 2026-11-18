import type { Metadata } from "next";
import { ClipboardCheck, ShieldCheck, Star, Users } from "lucide-react";
import { averageRating, contractors, totalReviewCount } from "@/lib/contractors";
import { locations } from "@/lib/locations";
import FindClient from "./FindClient";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find a Roofer in Toronto & the GTA",
  description:
    "Get matched with a local roofing contractor anywhere in Toronto and the Greater Toronto Area. Tell us about your roof and we'll connect you with the right roofer.",
  alternates: { canonical: `${SITE_URL}/find` },
};

export default async function FindPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ service?: string; city?: string }>;
}) {
  const searchParams = await searchParamsPromise;
  // Every service city, for the filter dropdown
  const allCities = locations.map(({ slug, name }) => ({ slug, name }));

  // Stats — null / zero until real contractors are listed
  const totalReviews = totalReviewCount();
  const avgRating = averageRating();
  const listingsLive = contractors.length > 0;

  const trustItem = (Icon: typeof Users, text: React.ReactNode) => (
    <li className="flex items-center gap-2 text-slate-700 text-sm">
      <span className="w-8 h-8 rounded-lg bg-white border border-trust-100 flex items-center justify-center" aria-hidden>
        <Icon size={15} className="text-trust-700" />
      </span>
      <span>{text}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        crumbs={[{ label: "Find a Roofer" }]}
        title={<>Find a Roofer in <span className="text-trust-700">Toronto &amp; the GTA</span></>}
        cta={listingsLive ? undefined : { href: "/#quote", label: "Get a Free Quote" }}
      >
        <p className="mb-6">
          {listingsLive
            ? "Browse our partner roofing contractors and compare the services they offer across the GTA."
            : "Tell us about your roof and we'll connect you with a local roofing contractor in your city — free, and with no obligation."}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {listingsLive ? (
            <>
              {trustItem(Users, <><strong className="text-slate-900">{contractors.length}</strong> {contractors.length === 1 ? "partner contractor" : "partner contractors"}</>)}
              {avgRating !== null && totalReviews > 0 &&
                trustItem(Star, <><strong className="text-slate-900">{avgRating}/10</strong> avg rating · {totalReviews} {totalReviews === 1 ? "review" : "reviews"}</>)}
            </>
          ) : (
            <>
              {trustItem(ClipboardCheck, "Free quote request — takes about a minute")}
              {trustItem(ShieldCheck, "No obligation, no pressure")}
              {trustItem(Users, `Serving all ${locations.length} GTA cities`)}
            </>
          )}
        </ul>
      </PageHero>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FindClient
          contractors={contractors}
          cities={allCities}
          initialService={searchParams.service ?? ""}
          initialCity={searchParams.city ?? ""}
        />
      </section>
    </div>
  );
}
