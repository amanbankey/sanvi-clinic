import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-secondary/30 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20 flex flex-col items-center text-center gap-4">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-light-teal"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-3xl sm:text-5xl font-semibold text-white max-w-2xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/80 max-w-xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
