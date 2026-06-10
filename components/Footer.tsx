import Link from "next/link";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { contractors } from "@/lib/contractors";

export default function Footer() {
  const col1 = locations.slice(0, 8);
  const col2 = locations.slice(8);
  const topContractors = [...contractors].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <footer className="bg-[#0F172A] text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-white text-lg font-extrabold tracking-tight">Local</span>
              <span className="text-[#F97316] text-lg font-extrabold tracking-tight">Roofer</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Connecting Toronto &amp; GTA homeowners with trusted, licensed local roofing contractors.
            </p>
            <a
              href="tel:+14165550100"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#F97316] transition-colors"
            >
              (416) 555-0100
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#F97316] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-white/10 mt-2">
                <Link href="/partners" className="hover:text-[#F97316] transition-colors font-medium text-white/80">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Contractors */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Top Roofers</h4>
            <ul className="space-y-2.5 text-sm">
              {topContractors.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/roofers/${c.slug}`}
                    className="hover:text-[#F97316] transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-white/10 mt-2">
                <Link href="/find" className="hover:text-[#F97316] transition-colors font-medium text-white/80">
                  All contractors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations col 1 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Locations</h4>
            <ul className="space-y-2.5 text-sm">
              {col1.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="hover:text-[#F97316] transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations col 2 */}
          <div className="pt-0 lg:pt-[2.25rem]">
            <ul className="space-y-2.5 text-sm">
              {col2.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="hover:text-[#F97316] transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+14165550100" className="hover:text-[#F97316] transition-colors">
                  (416) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:info@localroofer.ca" className="hover:text-[#F97316] transition-colors">
                  info@localroofer.ca
                </a>
              </li>
              <li>Mon–Fri 7am–6pm</li>
              <li className="pt-2">
                <Link
                  href="/#quote"
                  className="inline-block bg-[#F97316] hover:bg-[#EA6C0A] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} LocalRoofer.ca. All rights reserved.</p>
          <p>Serving Toronto &amp; the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
