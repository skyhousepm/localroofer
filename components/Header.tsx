"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import Logo from "@/components/Logo";

const headerLocations = locations.slice(0, 6);

const navLink = (active: boolean) =>
  `text-sm font-semibold transition-colors duration-150 ${active ? "text-trust-700" : "text-slate-700 hover:text-trust-700"}`;

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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* ── Utility bar ───────────────────────────────────────────────── */}
      <div className="bg-trust-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-white/80">
            <ShieldCheck className="w-3.5 h-3.5 text-trust-200" aria-hidden />
            <span className="sm:hidden">Insured, WSIB-covered GTA roofers</span>
            <span className="hidden sm:inline">Insured, WSIB-covered roofers across Toronto &amp; the GTA</span>
          </span>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:flex items-center gap-1.5 font-semibold hover:text-trust-200 transition-colors">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400" aria-hidden />
            24/7 emergency line {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-2" onClick={closeMobile} aria-label="localroofer home">
            <Logo className="h-8 sm:h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">

            {/* Services dropdown (opens on hover and on keyboard focus) */}
            <div className="relative group">
              <button className={`${navLink(pathname.startsWith("/services"))} py-2 flex items-center gap-1`} aria-haspopup="true">
                Services
                <ChevronDown size={14} className="opacity-60" aria-hidden />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block group-focus-within:block bg-white border border-slate-200 rounded-xl shadow-lg py-2 w-64 z-50">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:text-trust-700 hover:bg-trust-50 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations dropdown */}
            <div className="relative group">
              <button className={`${navLink(pathname.startsWith("/locations"))} py-2 flex items-center gap-1`} aria-haspopup="true">
                Locations
                <ChevronDown size={14} className="opacity-60" aria-hidden />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block group-focus-within:block bg-white border border-slate-200 rounded-xl shadow-lg py-2 w-52 z-50">
                {headerLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:text-trust-700 hover:bg-trust-50 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-1 pt-1">
                  <Link href="/locations" className="block px-4 py-2.5 text-sm font-semibold text-trust-700 hover:bg-trust-50 transition-colors">
                    All {locations.length} locations →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/find" className={navLink(pathname === "/find")}>
              Find a Roofer
            </Link>
            <Link href="/guides" className={navLink(pathname.startsWith("/guides"))}>
              Guides
            </Link>
            <Link href="/partners" className={navLink(pathname === "/partners")}>
              For Roofers
            </Link>
          </nav>

          {/* Right side: phone + quote + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden md:flex items-center gap-2 text-slate-900 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-trust-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-trust-700" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center bg-cta hover:bg-cta-hover text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              Free Quote
            </Link>

            {/* Hamburger — below desktop */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pb-6 pt-2 max-h-[calc(100vh-6.25rem)] overflow-y-auto">

          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 w-full bg-trust-700 hover:bg-trust-900 text-white font-semibold text-sm px-4 py-3 rounded-lg mt-3 mb-3 transition-colors"
          >
            <Phone size={16} aria-hidden />
            Call 24/7 · {PHONE_DISPLAY}
          </a>

          <Link
            href="/find"
            onClick={closeMobile}
            className="flex items-center py-3.5 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Find a Roofer
          </Link>

          {/* Services accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center justify-between w-full py-3.5 text-base font-semibold text-slate-800"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {servicesOpen && (
              <div className="pb-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-slate-600 hover:text-trust-700 rounded-lg hover:bg-trust-50 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setLocationsOpen((o) => !o)}
              className="flex items-center justify-between w-full py-3.5 text-base font-semibold text-slate-800"
              aria-expanded={locationsOpen}
            >
              Locations
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {locationsOpen && (
              <div className="pb-2 grid grid-cols-2">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-slate-600 hover:text-trust-700 rounded-lg hover:bg-trust-50 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/guides" onClick={closeMobile} className="flex items-center py-3.5 text-base font-semibold text-slate-800 border-b border-slate-100">
            Guides
          </Link>
          <Link href="/partners" onClick={closeMobile} className="flex items-center py-3.5 text-base font-semibold text-slate-800">
            For Roofers
          </Link>
        </div>
      )}
    </header>
  );
}
