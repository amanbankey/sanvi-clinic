import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { fadeLeft, fadeRight } from "../animations/variants"
import { siteConfig } from "../constants/siteConfig"
import ImageWithFallback from "../components/ImageWithFallback"
import CTAButton from "../components/CTAButton"

const highlights = [
  "Patient-first approach",
  "Comfortable, hygienic clinic environment",
  "Accessible healthcare information",
  "Convenient consultation enquiries",
]

export default function AboutPreview() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-xl border border-border">
            <ImageWithFallback
              src={siteConfig.images.clinicInterior}
              alt="Consultation area inside Sanvi Skin Hair Laser Clinic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 rounded-full bg-light-teal/50 blur-2xl" />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
            About Our Clinic
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary leading-tight">
            Care That Puts You First.
          </h2>
          <p className="text-muted-text leading-relaxed">
            {siteConfig.clinicName} is a healthcare destination in {siteConfig.address.line1},{" "}
            {siteConfig.address.city}, focused on making skin and hair consultations
            accessible, comfortable and straightforward for every patient who visits us.
          </p>
          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-dark-text">
                <CheckCircle2 size={20} className="text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <CTAButton to="/about" variant="secondary">
              Learn More About Our Clinic
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
