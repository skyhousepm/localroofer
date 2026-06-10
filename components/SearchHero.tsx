"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const serviceOptions = [
  { value: "", label: "All Services" },
  { value: "roof-repair", label: "Roof Repair" },
  { value: "roof-replacement", label: "Roof Replacement" },
  { value: "roof-inspection", label: "Roof Inspection" },
  { value: "emergency-roofing", label: "Emergency Roofing" },
  { value: "flat-roof", label: "Flat Roof" },
];

const cityOptions = [
  { value: "", label: "All Cities" },
  { value: "toronto", label: "Toronto" },
  { value: "mississauga", label: "Mississauga" },
  { value: "brampton", label: "Brampton" },
  { value: "markham", label: "Markham" },
  { value: "vaughan", label: "Vaughan" },
  { value: "richmond-hill", label: "Richmond Hill" },
  { value: "oakville", label: "Oakville" },
  { value: "burlington", label: "Burlington" },
  { value: "ajax", label: "Ajax" },
  { value: "pickering", label: "Pickering" },
  { value: "whitby", label: "Whitby" },
  { value: "oshawa", label: "Oshawa" },
  { value: "newmarket", label: "Newmarket" },
  { value: "aurora", label: "Aurora" },
  { value: "stouffville", label: "Stouffville" },
];

export default function SearchHero() {
  const router = useRouter();
  const [service, setService] = useState("");
  const [city, setCity] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (service) params.set("service", service);
    if (city) params.set("city", city);
    const qs = params.toString();
    router.push(`/find${qs ? `?${qs}` : ""}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-3 flex flex-col sm:flex-row gap-2">
        {/* Service select */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-navy/80 text-white text-sm rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:border-orange-500 cursor-pointer appearance-none"
          aria-label="Select service"
        >
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value} className="bg-slate-900">
              {o.label}
            </option>
          ))}
        </select>

        {/* City select */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-navy/80 text-white text-sm rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:border-orange-500 cursor-pointer appearance-none"
          aria-label="Select city"
        >
          {cityOptions.map((o) => (
            <option key={o.value} value={o.value} className="bg-slate-900">
              {o.label}
            </option>
          ))}
        </select>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
        >
          <Search size={16} />
          Find Roofers
        </button>
      </div>

      <p className="text-center text-white/40 text-xs mt-3">
        6 verified GTA contractors · Rated &amp; reviewed by homeowners
      </p>
    </div>
  );
}
