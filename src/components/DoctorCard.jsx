import { motion } from "framer-motion"
import { UserRound } from "lucide-react"
import { fadeUp } from "../animations/variants"

export default function DoctorCard({ doctor }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-soft-mint text-accent overflow-hidden">
        {doctor.photo ? (
          <img src={doctor.photo} alt={doctor.name} className="h-full w-full object-cover" />
        ) : (
          <UserRound size={40} />
        )}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-primary">{doctor.name}</h3>
        {doctor.specialization && (
          <p className="text-sm text-muted-text mt-1">{doctor.specialization}</p>
        )}
      </div>
    </motion.div>
  )
}
