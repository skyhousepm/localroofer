"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Hammer, Search, SlidersHorizontal, X } from "lucide-react";
import type { Contractor } from "@/lib/contractors";
import ContractorCard from "@/components/ContractorCard";

interface FindClientProps {
  contractors: Contractor[];
  cities: string[];
  initialService?: string;
  initialCity?: string;
}

const serviceOptions = [
  { value: "", label: "All Services" },
  { value: "roof-repair", label: "Roof Repair" },
  { value: "roof-replacement", label: "Roof Replacement" },
  { value: "roof-inspection", label: "Roof Inspection" },
  { value: "emergency-roofing", label: "Emergency Roofing" },
  { value: "flat-roof", label: "Flat Roof" },
];

const roofTypeOptions = [
  { value: "", label: "All Roof Types" },
  { value: "shingle", label: "Shingle" },
  { value: "metal", label: "Metal" },
  { value: "flat", label: "Flat" },
];

export default function FindClient({
  contractors,
  cities,
  initialService = "",
  initialCity = "",
}: FindClientProps) {
  const [service, setService] = useState(initialService);
  const [city, setCity] = useState(initialCity);
  const [roofType, setRoofType] = useState("");

  const cityOptions = [
    { value: "", label: "All Cities" },
    ...cities.map((c) => ({ value: c.toLowerCase(), label: c })),
  ];

  const filtered = useMemo(() => {
    return contractors
      .filter((c) => {
        if (service && !c.services.includes(service)) return false;
        if (city) {
          const matchesCity =
            c.city.toLowerCase() === city ||
            c.serviceAreas.some((a) => a.toLowerCase() === city);
          if (!matchesCity) return false;
        }
        if (roofType && !c.roofTypes.includes(roofType)) return false;
        return true;
      })
      .sort((a, b) => b.rating - a.rating);
  }, [contractors, service, city, roofType]);

  const hasFilters = service || city || roofType;

  function clearFilters() {
    setService("");
    setCity("");
    setRoofType("");
  }

  // No contractors listed yet — show the matching path instead of an empty grid.
  if (contractors.length === 0) {
    return (
      <div className="bg-navy-800 border border-white/10 rounded-xl px-6 py-14 text-center">
        <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
          <Hammer size={26} className="text-orange-500" />
        </div>
        <h2 className="text-white font-semibold text-2xl mb-3">
          Contractor listings are coming soon
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
          We&apos;re onboarding licensed roofing contractors across Toronto and the GTA
          right now. In the meantime, tell us about your roof and we&apos;ll connect you
          with a local roofer directly — free, and with no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-medium rounded-lg px-6 py-3 transition-colors"
          >
            I&apos;m a roofer — list my business
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-navy-800 border border-white/10 rounded-xl p-4 mb-8">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mr-1">
            <SlidersHorizontal size={16} />
            Filter by:
          </div>

          {/* Service filter */}
          <div className="flex flex-col gap-1 min-w-[180px]">
            <label className="text-xs text-slate-500 uppercase tracking-wide font-medium">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-navy border border-white/15 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-slate-900">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* City filter */}
          <div className="flex flex-col gap-1 min-w-[160px]">
            <label className="text-xs text-slate-500 uppercase tracking-wide font-medium">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-navy border border-white/15 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              {cityOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-slate-900">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Roof type filter */}
          <div className="flex flex-col gap-1 min-w-[150px]">
            <label className="text-xs text-slate-500 uppercase tracking-wide font-medium">Roof Type</label>
            <select
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
              className="bg-navy border border-white/15 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              {roofTypeOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-slate-900">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white border border-white/15 hover:border-white/30 rounded-lg px-3 py-2 transition-colors mt-5"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-400 text-sm">
          <span className="text-white font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "contractor" : "contractors"} found
          {city ? ` in ${city.charAt(0).toUpperCase() + city.slice(1)}` : " across the GTA"}
          {service ? ` · ${serviceOptions.find((o) => o.value === service)?.label}` : ""}
        </p>
        <p className="text-xs text-slate-500">Sorted by rating</p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <ContractorCard key={c.slug} contractor={c} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
            <Search size={28} className="text-slate-500" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">No contractors found</h3>
          <p className="text-slate-400 text-sm mb-4">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={clearFilters}
            className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
