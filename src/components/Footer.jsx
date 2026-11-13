import { Link } from "react-router-dom"
import { MapPin, Phone, Star } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { telLink, mapsLink } from "../utils/links"
import WhatsAppButton from "./WhatsAppButton"
import BrandMark from "./BrandMark"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-page py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <BrandMark className="h-11 w-11" />
            <span className="font-heading font-semibold text-lg">
              {siteConfig.clinicShortName}
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            {siteConfig.clinicDescription}
          </p>
          <div className="flex items-center gap-1 text-sm text-light-teal">
            <Star size={16} className="fill-light-teal text-light-teal" />
            {siteConfig.rating.value} / {siteConfig.rating.outOf} on {siteConfig.rating.source}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-light-teal">
            Quick Links
          </h3>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm text-white/75 hover:text-white transition-colors w-fit"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-light-teal">
            Contact
          </h3>
          <div className="flex items-start gap-2 text-sm text-white/75">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            <span>{siteConfig.address.full}</span>
          </div>
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
          >
            <Phone size={18} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-light-teal transition-colors w-fit"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-light-teal">
            Need to Contact Our Clinic?
          </h3>
          <p className="text-sm text-white/70">We&apos;re just a call away.</p>
          <WhatsAppButton className="w-fit" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/60">
          © {year} {siteConfig.clinicName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
