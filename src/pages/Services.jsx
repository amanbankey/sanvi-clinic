import { motion } from "framer-motion"
import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import PageHero from "../components/PageHero"
import ServiceCard from "../components/ServiceCard"
import CTAButton from "../components/CTAButton"
import WhatsAppButton from "../components/WhatsAppButton"
import { siteConfig } from "../constants/siteConfig"
import { getBreadcrumbSchema } from "../constants/structuredData"
import { staggerContainer, fadeUp } from "../animations/variants"

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Services"
        description="Explore sample service categories at Sanvi Skin Hair Laser Clinic in Indore. Contact us for complete, up-to-date treatment details."
        path="/services"
        structuredData={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="What We Offer"
        title="Skin, Hair & Laser Consultations"
        description="These are sample service categories for discussion. Please contact the clinic directly for complete details."
      />

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-center gap-5 rounded-[1.75rem] bg-soft-mint px-6 py-12 text-center"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary max-w-lg">
              Have Questions About a Treatment?
            </h2>
            <p className="max-w-lg text-muted-text">
              Our team can walk you through suitability and process during a
              consultation. Reach out to enquire.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton to="/contact">Book an Appointment</CTAButton>
              <WhatsAppButton />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
