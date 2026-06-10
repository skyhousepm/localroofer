"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

const headerLocations = locations.slice(0, 6);

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0" onClick={closeMobile}>
            <span className="text-white text-xl font-extrabold tracking-tight">Local</span>
            <span className="text-[#F97316] text-xl font-extrabold tracking-tight">Roofer</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Services dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={13} className="opacity-50" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-[#1E293B] border border-white/10 rounded-xl shadow-xl py-2 w-56 z-50 mt-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors flex items-center gap-1">
                Locations
                <ChevronDown size={13} className="opacity-50" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-[#1E293B] border border-white/10 rounded-xl shadow-xl py-2 w-48 z-50 mt-1">
                {headerLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                    {l.name}
                  </Link>
                ))}
                <div className="border-t border-white/10 mt-1 pt-1">
                  <Link
                    href="/locations"
                    className="block px-4 py-2.5 text-sm text-[#F97316] hover:bg-white/5 transition-colors font-medium"
                  >
                    All locations →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/find"
              className={`text-sm font-medium transition-colors ${pathname === "/find" ? "text-[#F97316]" : "text-white/80 hover:text-white"}`}
            >
              Find a Roofer
            </Link>

            <Link
              href="/#quote"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>

            <Link
              href="/partners"
              className={`text-sm font-medium transition-colors border px-3 py-1.5 rounded-lg ${pathname === "/partners" ? "border-[#F97316] text-[#F97316]" : "border-white/20 hover:border-[#F97316] text-white/80 hover:text-white"}`}
            >
              For Roofers
            </Link>
          </nav>

          {/* Right side: phone + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+14165550100"
              className="flex items-center gap-2 text-white font-semibold text-sm hover:text-[#F97316] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F97316]" />
              <span className="hidden sm:inline">(416) 555-0100</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-4 pb-6 pt-2">

          {/* Find a Roofer — primary CTA */}
          <Link
            href="/find"
            onClick={closeMobile}
            className="flex items-center justify-between w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-sm px-4 py-3 rounded-xl mt-3 mb-4 transition-colors"
          >
            Find a Roofer
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Services accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-white/80"
            >
              Services
              <ChevronDown
                size={16}
                className={`text-white/40 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="pb-2 space-y-0.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-2 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setLocationsOpen((o) => !o)}
              className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-white/80"
            >
              Locations
              <ChevronDown
                size={16}
                className={`text-white/40 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {locationsOpen && (
              <div className="pb-2 space-y-0.5">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-2 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat links */}
          <Link
            href="/#quote"
            onClick={closeMobile}
            className="flex items-center py-3.5 text-sm font-medium text-white/80 border-b border-white/10"
          >
            Get a Quote
          </Link>

          <Link
            href="/partners"
            onClick={closeMobile}
            className="flex items-center py-3.5 text-sm font-medium text-white/80"
          >
            For Roofers
          </Link>

          {/* Phone */}
          <a
            href="tel:+14165550100"
            className="flex items-center gap-2 mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={15} className="text-[#F97316]" />
            (416) 555-0100
          </a>

        </div>
      )}
    </header>
  );
}
