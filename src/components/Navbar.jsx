import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, Phone } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { useScrollPosition } from "../hooks/useScrollPosition"
import CTAButton from "./CTAButton"
import MobileMenu from "./MobileMenu"
import BrandMark from "./BrandMark"

export default function Navbar() {
  const scrolled = useScrollPosition(20)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-[72px] py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <BrandMark className="h-11 w-11" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading font-semibold text-primary text-base">
              {siteConfig.clinicShortName}
            </span>
            <span className="text-xs text-muted-text">{siteConfig.clinicTagline}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors group ${
                  isActive ? "text-primary" : "text-dark-text hover:text-secondary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
          <CTAButton to="/contact" icon={false}>
            Book Appointment
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="md:hidden p-2 rounded-full hover:bg-soft-mint transition-colors"
        >
          <Menu size={26} className="text-primary" />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
