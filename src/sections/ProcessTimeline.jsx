import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../animations/variants"
import SectionHeading from "../components/SectionHeading"

const steps = [
  { number: "01", title: "Contact Our Clinic", description: "Reach out by phone or WhatsApp." },
  { number: "02", title: "Enquire About Availability", description: "Ask about consultation slots that work for you." },
  { number: "03", title: "Discuss Your Requirements", description: "Share your concerns so our team can guide you." },
  { number: "04", title: "Visit the Clinic", description: "Come in at the time confirmed by our team." },
  { number: "05", title: "Consultation", description: "Meet with our team for your consultation." },
]

export default function ProcessTimeline() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-14">
        <SectionHeading eyebrow="How It Works" title="Your Visit, Made Simple." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="relative flex flex-col items-center text-center gap-3">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-heading font-semibold">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-muted-text max-w-xl mx-auto">
          An appointment enquiry does not confirm a booking automatically — our team
          will confirm your consultation time directly.
        </p>
      </div>
    </section>
  )
}
