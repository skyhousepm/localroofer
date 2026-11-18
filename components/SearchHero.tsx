"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

const serviceOptions = [
  { value: "", label: "Any roofing service" },
  ...services.map((s) => ({ value: s.slug, label: s.name })),
];

const cityOptions = [
  { value: "", label: "Anywhere in the GTA" },
  ...locations.map((l) => ({ value: l.slug, label: l.name })),
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

  const selectClass =
    "w-full bg-white text-slate-900 text-base rounded-lg px-4 py-3 border border-slate-300 hover:border-slate-400 focus:outline-none focus:border-trust-600 focus:ring-2 focus:ring-trust-600/20 cursor-pointer transition-colors";

  return (
    <div className="w-full">
      <div className="grid gap-4">
        <label className="block">
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">What do you need?</span>
          <select value={service} onChange={(e) => setService(e.target.value)} onKeyDown={handleKeyDown} className={selectClass}>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">Where is the property?</span>
          <select value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeyDown} className={selectClass}>
            {cityOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-trust-700 hover:bg-trust-900 text-white font-semibold text-base px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
        >
          <Search size={18} aria-hidden />
          Find Local Roofers
        </button>
      </div>
    </div>
  );
}
