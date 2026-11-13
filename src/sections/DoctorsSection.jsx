import { motion } from "framer-motion"
import { Stethoscope } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { staggerContainer } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"
import DoctorCard from "../components/DoctorCard"
import CallButton from "../components/CallButton"
import WhatsAppButton from "../components/WhatsAppButton"

export default function DoctorsSection({ showHeading = true }) {
  const hasDoctors = siteConfig.doctors.length > 0

  return (
    <section className="bg-white">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
        {showHeading && (
          <SectionHeading eyebrow="Our Team" title="Meet Our Medical Team" />
        )}

        {hasDoctors ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {siteConfig.doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-soft-mint/50 px-6 py-14 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-accent shadow-sm">
              <Stethoscope size={28} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary">
              Doctor Profiles Coming Soon
            </h3>
            <p className="max-w-md text-sm text-muted-text leading-relaxed">
              We&apos;re in the process of adding verified information about our
              medical team. For details on consultation availability, please
              contact the clinic directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <CallButton variant="solid">Call to Enquire</CallButton>
              <WhatsAppButton />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
