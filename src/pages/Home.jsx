import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import { getLocalBusinessSchema } from "../constants/structuredData"
import Hero from "../sections/Hero"
import TrustRating from "../sections/TrustRating"
import AboutPreview from "../sections/AboutPreview"
import ServicesGrid from "../sections/ServicesGrid"
import WhyChooseUs from "../sections/WhyChooseUs"
import DoctorsSection from "../sections/DoctorsSection"
import ProcessTimeline from "../sections/ProcessTimeline"
import PatientExperience from "../sections/PatientExperience"
import AppointmentSection from "../sections/AppointmentSection"
import FAQSection from "../sections/FAQSection"
import CTASection from "../sections/CTASection"

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Skin, Hair & Laser Clinic in Indore"
        description="Sanvi Skin Hair Laser Clinic in Mechanic Nagar, Indore — a modern, patient-first clinic for skin, hair and laser consultations. Rated 4.9/5 on Google."
        path="/"
        structuredData={getLocalBusinessSchema()}
      />
      <Hero />
      <TrustRating />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <DoctorsSection />
      <ProcessTimeline />
      <PatientExperience />
      <AppointmentSection />
      <FAQSection />
      <CTASection />
    </PageTransition>
  )
}
