import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"
import { siteConfig } from "../constants/siteConfig"
import RatingStars from "../components/RatingStars"

export default function TrustRating() {
  return (
    <section className="bg-white border-y border-border">
      <div className="container-page py-10 sm:py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-heading text-3xl font-semibold text-primary">
              {siteConfig.rating.value}
              <span className="text-lg text-muted-text">/{siteConfig.rating.outOf}</span>
            </span>
            <RatingStars className="mt-1" />
          </div>
          <div className="h-px w-16 sm:h-10 sm:w-px bg-border" />
          <p className="text-sm sm:text-base text-muted-text max-w-md">
            Rated {siteConfig.rating.value} out of {siteConfig.rating.outOf} on{" "}
            {siteConfig.rating.source}, reflecting our commitment to a comfortable
            and professional patient experience.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
