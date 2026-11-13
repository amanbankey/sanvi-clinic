import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"
import CTAButton from "../components/CTAButton"
import WhatsAppButton from "../components/WhatsAppButton"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />

      <div className="container-page relative py-16 sm:py-20 flex flex-col items-center text-center gap-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-semibold text-white max-w-2xl"
        >
          Your Health Deserves Attention.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-white/80 max-w-xl"
        >
          Connect with our clinic in Indore for appointment enquiries and healthcare
          information.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-2"
        >
          <CTAButton to="/contact" variant="accent" fullWidthMobile>
            Contact Our Clinic
          </CTAButton>
          <WhatsAppButton />
        </motion.div>
      </div>
    </section>
  )
}
