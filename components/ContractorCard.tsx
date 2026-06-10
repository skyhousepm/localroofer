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
          className={starValue >= star ? "text-orange-400" : "text-slate-600"}
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
    <div className="bg-navy-800 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/40 transition-colors group">
      {/* Top bar */}
      <div className="bg-navy p-5 flex items-start gap-4">
        {/* Logo placeholder */}
        <div className="w-14 h-14 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-extrabold text-orange-500">
            {c.name.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-orange-400 transition-colors">
                {c.name}
              </h3>
              <p className="flex items-center gap-1 text-slate-400 text-sm mt-0.5">
                <MapPin size={12} />
                {c.city}
              </p>
            </div>

            {/* Rating pill */}
            <div className="flex-shrink-0 flex items-center gap-2 bg-navy rounded-lg px-3 py-1.5 border border-white/10">
              <span className="text-white font-extrabold text-lg leading-none">
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
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <BadgeCheck size={13} />
                Verified
              </span>
            )}
            {c.licensed && (
              <span className="text-xs text-slate-400 font-medium">Licensed</span>
            )}
            {c.insured && (
              <span className="text-xs text-slate-400 font-medium">Insured</span>
            )}
            {c.backgroundCheck && (
              <span className="text-xs text-slate-400 font-medium">Background Check</span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
        {/* Tagline */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{c.tagline}</p>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5">
          {c.services.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-xs bg-white/5 text-slate-300 rounded-full px-2.5 py-0.5 border border-white/10"
            >
              {serviceLabels[s] ?? s}
            </span>
          ))}
        </div>

        {/* Service areas */}
        <p className="text-xs text-slate-500 flex items-center gap-1">
          <MapPin size={11} />
          {c.serviceAreas.slice(0, 4).join(", ")}
          {c.serviceAreas.length > 4 ? ` +${c.serviceAreas.length - 4} more` : ""}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/roofers/${c.slug}`}
            className="flex-1 text-center py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
          >
            View Profile
          </Link>
          <a
            href={`tel:${c.phone}`}
            className="flex items-center gap-1.5 py-2 px-3 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
          >
            <Phone size={14} />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
