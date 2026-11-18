import Link from "next/link";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Footer() {
  const col1 = locations.slice(0, 8);
  const col2 = locations.slice(8);
  const topContractors = [...contractors].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <footer className="bg-trust-950 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="localroofer home">
              <Logo tone="dark" className="h-8 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Connecting Toronto &amp; GTA homeowners with trusted local roofing contractors.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-white/10 mt-2">
                <Link href="/partners" className="hover:text-white hover:underline underline-offset-4 transition-colors font-medium text-white/80">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Contractors — or, until the network is live, homeowner links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              {topContractors.length > 0 ? "Top Roofers" : "For Homeowners"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {topContractors.length > 0 ? (
                <>
                  {topContractors.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/roofers/${c.slug}`}
                        className="hover:text-white hover:underline underline-offset-4 transition-colors"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1 border-t border-white/10 mt-2">
                    <Link href="/find" className="hover:text-white hover:underline underline-offset-4 transition-colors font-medium text-white/80">
                      All contractors →
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/#quote" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      Get a Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/find" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      Find a Roofer
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                      Roofing Guides
                    </Link>
                  </li>
                  <li className="pt-1 border-t border-white/10 mt-2">
                    <Link href="/partners" className="hover:text-white hover:underline underline-offset-4 transition-colors font-medium text-white/80">
                      Partner With Us →
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Locations col 1 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Locations</h4>
            <ul className="space-y-2.5 text-sm">
              {col1.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
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
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-green-400" aria-hidden />Emergency line open 24/7</li>
              <li className="pt-2">
                <Link
                  href="/#quote"
                  className="inline-block bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} LocalRoofer.ca. All rights reserved.</p>
          <p>Serving Toronto &amp; the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
