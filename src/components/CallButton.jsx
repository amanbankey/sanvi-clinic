import { Phone } from "lucide-react"
import { telLink } from "../utils/links"
import { siteConfig } from "../constants/siteConfig"

export default function CallButton({ className = "", children, variant = "outline" }) {
  const styles =
    variant === "solid"
      ? "bg-primary text-white hover:bg-secondary"
      : "bg-white text-primary border border-border hover:border-accent"

  return (
    <a
      href={telLink()}
      aria-label={`Call ${siteConfig.clinicName}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <Phone size={18} />
      {children || "Call Now"}
    </a>
  )
}
