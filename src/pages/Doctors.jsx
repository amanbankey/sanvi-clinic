import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import PageHero from "../components/PageHero"
import DoctorsSection from "../sections/DoctorsSection"
import { getBreadcrumbSchema } from "../constants/structuredData"

export default function Doctors() {
  return (
    <PageTransition>
      <SEO
        title="Doctors & Our Team"
        description="Information about the medical team at Sanvi Skin Hair Laser Clinic in Indore. Contact the clinic directly for consultation availability."
        path="/doctors"
        structuredData={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Doctors", path: "/doctors" },
        ])}
      />
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Medical Team"
        description="Verified team information will appear here as it becomes available."
      />
      <DoctorsSection showHeading={false} />
    </PageTransition>
  )
}
