import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"
import AppointmentForm from "../components/AppointmentForm"

export default function AppointmentSection() {
  return (
    <section id="appointment" className="bg-white">
      <div className="container-page py-16 sm:py-24 flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Book a Visit"
          title="Your Health Journey Starts Here."
          description="Get in touch with our clinic to enquire about appointments and consultation availability."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-2xl rounded-[1.75rem] border border-border bg-bg p-6 sm:p-10 shadow-sm"
        >
          <AppointmentForm />
        </motion.div>
      </div>
    </section>
  )
}
