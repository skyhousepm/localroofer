import { Star } from "lucide-react";

interface StarRatingProps {
  /** Rating out of 10 */
  rating: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const starValue = rating / 2; // convert to 5-star scale
  const sizePx = size === "sm" ? 12 : size === "lg" ? 20 : 16;

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = starValue >= star;
        const half = !filled && starValue >= star - 0.5;
        return (
          <Star
            key={star}
            size={sizePx}
            className={filled || half ? "text-orange-400" : "text-slate-600"}
            fill={filled ? "currentColor" : half ? "url(#half)" : "none"}
          />
        );
      })}
    </div>
  );
}
