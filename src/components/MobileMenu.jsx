import { useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { NavLink } from "react-router-dom"
import { X, ChevronRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { siteConfig } from "../constants/siteConfig"
import { whatsappLink } from "../utils/links"
import CTAButton from "./CTAButton"
import CallButton from "./CallButton"
import BrandMark from "./BrandMark"

export default function MobileMenu({ open, onClose }) {
  // Lock background scroll while the menu is open
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const prevBody = document.body.style.overflow
    const prevHtml = html.style.overflow
    document.body.style.overflow = "hidden"
    html.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBody
      html.style.overflow = prevHtml
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (typeof document === "undefined") return null

  // Portal to <body>: the header's backdrop-blur would otherwise trap
  // `position: fixed` children inside the 72px header.
  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: "#ffffff", height: "100dvh" }}
            className="absolute top-0 right-0 w-[86%] max-w-sm shadow-2xl flex flex-col overflow-hidden rounded-l-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-[72px] shrink-0 border-b border-border">
              <div className="flex items-center gap-3">
                <BrandMark className="h-10 w-10" />
                <span className="font-heading font-semibold text-primary text-lg">
                  {siteConfig.clinicShortName}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-full bg-soft-mint hover:bg-light-teal/40 transition-colors"
              >
                <X size={22} className="text-primary" />
              </button>
            </div>

            {/* Links (scrolls only if the screen is very short) */}
            <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-4">
              {siteConfig.navigation.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 px-3 -mx-1 rounded-xl text-[17px] font-medium transition-colors ${
                        isActive
                          ? "bg-soft-mint text-primary"
                          : "text-dark-text hover:bg-soft-mint/60"
                      }`
                    }
                  >
                    {item.label}
                    <ChevronRight size={18} className="text-accent" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Actions pinned to bottom */}
            <div className="shrink-0 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] flex flex-col gap-3 border-t border-border bg-white">
              <CTAButton to="/contact" onClick={onClose} fullWidthMobile>
                Book Appointment
              </CTAButton>
              <div className="grid grid-cols-2 gap-3">
                <CallButton className="w-full !px-3">Call</CallButton>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-3 font-semibold text-sm transition-all duration-300 bg-white text-[#1ebe5a] border border-border hover:border-[#1ebe5a] w-full"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
