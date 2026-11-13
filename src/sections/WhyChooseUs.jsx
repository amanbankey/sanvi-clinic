import { motion } from "framer-motion"
import {
  HeartHandshake,
  MapPinned,
  Sparkles,
  CalendarCheck2,
  MessageCircleMore,
  Users,
} from "lucide-react"
import { staggerContainer, fadeUp } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"

const reasons = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Patient-First Approach",
    description: "Every visit is designed around clear communication and patient comfort.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Convenient Location",
    description: "Easy to reach in Mechanic Nagar, New Anjani Nagar, Indore.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Comfortable Environment",
    description: "A clean, calm clinic space designed for a relaxed patient experience.",
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Easy Appointment Enquiries",
    description: "Reach out by call or WhatsApp to enquire about availability quickly.",
  },
  {
    number: "05",
    icon: MessageCircleMore,
    title: "Accessible Communication",
    description: "Our team is easy to reach for questions before and after your visit.",
  },
  {
    number: "06",
    icon: Users,
    title: "Dedicated Patient Experience",
    description: "We focus on making every enquiry and visit feel personal and attentive.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-soft-mint">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
        <SectionHeading eyebrow="Why Sanvi" title="Why Choose Our Clinic?" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-7 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <reason.icon size={22} />
                </div>
                <span className="font-heading text-2xl font-semibold text-light-teal">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
