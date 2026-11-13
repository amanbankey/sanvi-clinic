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
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 1.6, ease: "easeInOut", delay: 0.2 } },
            }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-accent to-secondary"
          />
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center gap-3"
            >
              <motion.div
                variants={{
                  hidden: { scale: 0, rotate: -90 },
                  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 16 } },
                }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-heading font-semibold shadow-md transition-colors duration-300 group-hover:bg-accent"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border-2 border-accent"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                {step.number}
              </motion.div>
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
