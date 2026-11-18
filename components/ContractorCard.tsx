import Link from "next/link";
import { BadgeCheck, MapPin, Phone, Star } from "lucide-react";
import type { Contractor } from "@/lib/contractors";

interface ContractorCardProps {
  contractor: Contractor;
}

function MiniStars({ rating }: { rating: number }) {
  const starValue = rating / 2;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={starValue >= star ? "text-amber-400" : "text-slate-300"}
          fill={starValue >= star ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

const serviceLabels: Record<string, string> = {
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "roof-inspection": "Roof Inspection",
  "emergency-roofing": "Emergency",
  "flat-roof": "Flat Roof",
};

export default function ContractorCard({ contractor: c }: ContractorCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-trust-200 transition-colors group">
      {/* Top bar */}
      <div className="p-5 flex items-start gap-4">
        {/* Logo placeholder */}
        <div className="w-14 h-14 rounded-lg bg-trust-50 border border-trust-100 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-trust-700">
            {c.name.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-slate-900 font-bold text-lg leading-tight group-hover:text-trust-700 transition-colors">
                {c.name}
              </h3>
              <p className="flex items-center gap-1 text-slate-600 text-sm mt-0.5">
                <MapPin size={12} />
                {c.city}
              </p>
            </div>

            {/* Rating pill */}
            <div className="flex-shrink-0 flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-200">
              <span className="text-slate-900 font-bold text-lg leading-none">
                {c.rating.toFixed(1)}
              </span>
              <div className="flex flex-col gap-0.5">
                <MiniStars rating={c.rating} />
                <span className="text-slate-500 text-xs">{c.reviewCount} reviews</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {c.verified && (
              <span className="flex items-center gap-1 text-xs text-emerald-700 font-medium">
                <BadgeCheck size={13} />
                Verified
              </span>
            )}
            {c.licensed && (
              <span className="text-xs text-slate-600 font-medium">WSIB</span>
            )}
            {c.insured && (
              <span className="text-xs text-slate-600 font-medium">Insured</span>
            )}
            {c.backgroundCheck && (
              <span className="text-xs text-slate-600 font-medium">Background Check</span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-3">
        {/* Tagline */}
        <p className="text-slate-700 text-sm leading-relaxed line-clamp-2">{c.tagline}</p>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5">
          {c.services.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-xs bg-trust-50 text-trust-900 rounded-full px-2.5 py-0.5 border border-trust-100"
            >
              {serviceLabels[s] ?? s}
            </span>
          ))}
        </div>

        {/* Service areas */}
        <p className="text-xs text-slate-600 flex items-center gap-1">
          <MapPin size={11} />
          {c.serviceAreas.slice(0, 4).join(", ")}
          {c.serviceAreas.length > 4 ? ` +${c.serviceAreas.length - 4} more` : ""}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/roofers/${c.slug}`}
            className="flex-1 text-center py-2 rounded-lg bg-trust-700 hover:bg-trust-900 text-white text-sm font-semibold transition-colors"
          >
            View Profile
          </Link>
          <a
            href={`tel:${c.phone}`}
            className="flex items-center gap-1.5 py-2 px-3 rounded-lg border-2 border-trust-700 text-trust-700 hover:bg-trust-700 hover:text-white text-sm font-medium transition-colors"
          >
            <Phone size={14} />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
