import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Droplets, Syringe, Activity, Sparkle, Zap, Sun } from "lucide-react"
import { fadeUp } from "../animations/variants"

const iconMap = { Droplets, Syringe, Activity, Sparkle, Zap, Sun }

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Sparkle

  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-mint text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon size={22} />
      </div>
      <h3 className="font-heading font-semibold text-lg text-primary">{service.title}</h3>
      <p className="text-sm text-muted-text leading-relaxed flex-1">{service.description}</p>
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:text-accent transition-colors w-fit"
      >
        Learn More
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
