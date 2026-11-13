import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center"

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${
            light ? "text-light-teal" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg max-w-xl leading-relaxed ${
            light ? "text-white/80" : "text-muted-text"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
