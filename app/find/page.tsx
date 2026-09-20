import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ClipboardCheck, ShieldCheck, Star, Users } from "lucide-react";
import { averageRating, contractors, totalReviewCount } from "@/lib/contractors";
import { locations } from "@/lib/locations";
import FindClient from "./FindClient";

export const metadata: Metadata = {
  title: "Find a Roofer in Toronto & the GTA",
  description:
    "Get matched with a licensed local roofing contractor anywhere in Toronto and the Greater Toronto Area. Tell us about your roof and we'll connect you with the right roofer.",
  alternates: { canonical: "https://www.localroofer.ca/find" },
};

export default function FindPage({
  searchParams,
}: {
  searchParams: { service?: string; city?: string };
}) {
  // All unique cities from contractor service areas for the filter dropdown
  const allCities = locations.map((l) => l.name);

  // Stats — null / zero until real contractors are listed
  const totalReviews = totalReviewCount();
  const avgRating = averageRating();
  const listingsLive = contractors.length > 0;

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="bg-navy border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-300">Find a Roofer</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Find a Roofer in{" "}
              <span className="text-orange-500">Toronto & the GTA</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {listingsLive
                ? "Browse our partner roofing contractors and compare the services they offer across the GTA."
                : "Tell us about your roof and we'll connect you with a licensed local roofing contractor in your city — free, and with no obligation."}
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6">
              {listingsLive ? (
                <>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Users size={15} className="text-orange-500" />
                    </div>
                    <span>
                      <strong className="text-white">{contractors.length}</strong>{" "}
                      {contractors.length === 1 ? "partner contractor" : "partner contractors"}
                    </span>
                  </div>
                  {avgRating !== null && totalReviews > 0 && (
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Star size={15} className="text-orange-500" />
                      </div>
                      <span>
                        <strong className="text-white">{avgRating}/10</strong> avg rating ·{" "}
                        {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <ClipboardCheck size={15} className="text-orange-500" />
                    </div>
                    <span>Free quote request — takes about a minute</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <ShieldCheck size={15} className="text-orange-500" />
                    </div>
                    <span>No obligation, no pressure</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Users size={15} className="text-orange-500" />
                    </div>
                    <span>Serving all 15 GTA cities</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
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
