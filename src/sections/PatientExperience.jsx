import { motion } from "framer-motion"
import { MessageSquareText, MapPin, Smartphone, CalendarClock } from "lucide-react"
import { staggerContainer, fadeUp, fadeRight } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"
import ImageWithFallback from "../components/ImageWithFallback"
import { siteConfig } from "../constants/siteConfig"

const points = [
  { icon: MessageSquareText, text: "Easy, direct communication with our clinic team" },
  { icon: CalendarClock, text: "Convenient appointment enquiries by call or WhatsApp" },
  { icon: MapPin, text: "A clinic location that's simple to find in Indore" },
  { icon: Smartphone, text: "A smooth, mobile-friendly website experience" },
]

export default function PatientExperience() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <SectionHeading
            align="left"
            eyebrow="Patient Experience"
            title="Designed Around You."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            {points.map((point) => (
              <motion.div key={point.text} variants={fadeUp} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft-mint text-accent">
                  <point.icon size={18} />
                </div>
                <p className="text-dark-text leading-relaxed pt-2">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2 aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-lg border border-border"
        >
          <ImageWithFallback
            src={siteConfig.images.clinicExterior}
            alt="Clinic entrance and reception at Sanvi Skin Hair Laser Clinic"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
