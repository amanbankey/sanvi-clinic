import { motion } from "framer-motion"
import { siteConfig } from "../constants/siteConfig"
import { staggerContainer } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"
import ServiceCard from "../components/ServiceCard"

export default function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Skin, Hair & Laser Consultations"
          description="Sample service categories available for discussion at the clinic. Please contact us directly for complete, up-to-date details."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
