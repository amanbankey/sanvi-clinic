import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"
import { faqItems } from "../constants/faqData"
import SectionHeading from "../components/SectionHeading"
import FAQAccordion from "../components/FAQAccordion"

export default function FAQSection() {
  return (
    <section className="bg-soft-mint">
      <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
        <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto w-full"
        >
          <FAQAccordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
