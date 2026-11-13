import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-md shadow-primary/20",
  secondary:
    "bg-white text-primary border border-border hover:border-accent hover:text-secondary",
  accent: "bg-accent text-white hover:bg-secondary shadow-md shadow-accent/20",
  ghost: "bg-transparent text-primary hover:bg-soft-mint",
}

export default function CTAButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
  fullWidthMobile = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 -translate-y-0 hover:-translate-y-0.5 active:translate-y-0"
  const classes = `${base} ${variantStyles[variant]} ${
    fullWidthMobile ? "w-full sm:w-auto" : ""
  } ${className}`

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`group ${classes}`}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  )
}
