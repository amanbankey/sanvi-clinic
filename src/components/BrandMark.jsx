import { Sparkles } from "lucide-react"

export default function BrandMark({ className = "h-11 w-11", iconSize = 20 }) {
  return (
    <span
      className={`flex items-center justify-center shrink-0 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-sm ${className}`}
    >
      <Sparkles size={iconSize} />
    </span>
  )
}
