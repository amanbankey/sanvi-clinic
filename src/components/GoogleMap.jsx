import { ExternalLink, Navigation } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { mapsLink } from "../utils/links"
import CTAButton from "./CTAButton"

export default function GoogleMap() {
  const query = encodeURIComponent(siteConfig.address.full)

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-sm">
        <iframe
          title={`${siteConfig.clinicName} location on Google Maps`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <CTAButton href={mapsLink()} variant="primary" icon={false}>
          <Navigation size={18} />
          Get Directions
        </CTAButton>
        <CTAButton href={mapsLink()} variant="secondary" icon={false}>
          <ExternalLink size={18} />
          Open in Google Maps
        </CTAButton>
      </div>
    </div>
  )
}
