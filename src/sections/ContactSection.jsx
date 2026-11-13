import { MapPin, Phone, Star } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { siteConfig } from "../constants/siteConfig"
import { telLink, whatsappLink, mapsLink } from "../utils/links"
import SectionHeading from "../components/SectionHeading"
import ContactCard from "../components/ContactCard"
import CTAButton from "../components/CTAButton"
import GoogleMap from "../components/GoogleMap"

export default function ContactSection() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title={siteConfig.clinicName}
          description="Reach out to us for appointment enquiries, directions, or any questions about the clinic."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            action={
              <CTAButton href={mapsLink()} variant="secondary" icon={false} className="mt-1">
                Get Directions
              </CTAButton>
            }
          >
            {siteConfig.address.line1}, {siteConfig.address.line2}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
          </ContactCard>

          <ContactCard
            icon={Phone}
            title="Call Us"
            action={
              <CTAButton href={telLink()} variant="secondary" icon={false} className="mt-1">
                Call Now
              </CTAButton>
            }
          >
            {siteConfig.phoneDisplay}
            <br />
            Available during clinic hours.
          </ContactCard>

          <ContactCard
            icon={FaWhatsapp}
            title="WhatsApp Us"
            action={
              <CTAButton href={whatsappLink()} variant="secondary" icon={false} className="mt-1">
                Message Us
              </CTAButton>
            }
          >
            Send us a quick message for appointment enquiries anytime.
          </ContactCard>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-dark-text">
          <Star size={18} className="fill-accent text-accent" />
          <span className="font-semibold">{siteConfig.rating.value} / {siteConfig.rating.outOf}</span>
          <span className="text-muted-text">on {siteConfig.rating.source}</span>
        </div>

        <GoogleMap />
      </div>
    </section>
  )
}
