import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import PageHero from "../components/PageHero"
import ContactSection from "../sections/ContactSection"
import AppointmentSection from "../sections/AppointmentSection"
import { getBreadcrumbSchema } from "../constants/structuredData"

export default function Contact() {
  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Contact Sanvi Skin Hair Laser Clinic in Mechanic Nagar, Indore for appointment enquiries by call, WhatsApp, or our enquiry form."
        path="/contact"
        structuredData={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="We're Here to Help"
        title="Contact Our Clinic"
        description="Reach out by call, WhatsApp, or the form below to enquire about an appointment."
      />
      <ContactSection />
      <AppointmentSection />
    </PageTransition>
  )
}
