import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { ctaButton, outlineButton } from "@/lib/ui";

type Crumb = { label: string; href?: string };

/** Light hero shared by the inner pages: breadcrumb, eyebrow, title, intro and the quote/call buttons */
export default function PageHero({
  crumbs,
  eyebrow,
  icon,
  title,
  children,
  cta,
  call = true,
  aside,
}: {
  crumbs?: Crumb[];
  eyebrow?: string;
  icon?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  cta?: { href: string; label: string };
  call?: boolean;
  aside?: ReactNode;
}) {
  return (
    <section className="bg-trust-50 border-b border-trust-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-12 sm:pb-16">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-trust-700 hover:underline underline-offset-4">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-trust-700 hover:underline underline-offset-4">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-slate-900 font-medium">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={aside ? "grid lg:grid-cols-[1fr_20rem] gap-10 items-start" : ""}>
          <div className="max-w-3xl">
            {(eyebrow || icon) && (
              <div className="flex items-center gap-3 mb-4">
                {icon && (
                  <span className="w-11 h-11 rounded-xl bg-white border border-trust-100 text-trust-700 flex items-center justify-center" aria-hidden>
                    {icon}
                  </span>
                )}
                {eyebrow && <p className="text-sm font-semibold text-trust-700">{eyebrow}</p>}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-5 text-balance">
              {title}
            </h1>
            {children && <div className="text-lg text-slate-600 leading-relaxed max-w-2xl">{children}</div>}
            {(cta || call) && (
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                {cta && (
                  <Link href={cta.href} className={ctaButton}>
                    {cta.label}
                    <ArrowRight className="w-5 h-5" aria-hidden />
                  </Link>
                )}
                {call && (
                  <a href={`tel:${PHONE_TEL}`} className={outlineButton}>
                    <Phone className="w-5 h-5" aria-hidden />
                    Call 24/7 · {PHONE_DISPLAY}
                  </a>
                )}
              </div>
            )}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
