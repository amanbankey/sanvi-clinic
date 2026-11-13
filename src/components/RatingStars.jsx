import { Star } from "lucide-react"

export default function RatingStars({ size = 18, className = "" }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} className="fill-accent text-accent" />
      ))}
    </div>
  )
}
