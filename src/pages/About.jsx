import { motion } from "framer-motion"
import { HeartHandshake, ShieldCheck, Sparkles, MapPin } from "lucide-react"
import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import PageHero from "../components/PageHero"
import ImageWithFallback from "../components/ImageWithFallback"
import CTAButton from "../components/CTAButton"
import { siteConfig } from "../constants/siteConfig"
import { getBreadcrumbSchema } from "../constants/structuredData"
import { fadeUp, fadeRight, staggerContainer } from "../animations/variants"

const philosophy = [
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    description: "Every interaction is designed to keep patients informed and comfortable.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, Hygienic Environment",
    description: "A clinic space maintained to a professional standard of cleanliness.",
  },
  {
    icon: Sparkles,
    title: "Accessible Information",
    description: "Clear answers to your questions, available by call or WhatsApp.",
  },
]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Our Clinic"
        description="Learn about Sanvi Skin Hair Laser Clinic, a patient-focused skin, hair and laser clinic located in Mechanic Nagar, Indore."
        path="/about"
        structuredData={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title="Care That Puts You First."
        description="Getting to know Sanvi Skin Hair Laser Clinic and what we focus on for every patient."
      />

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-xl border border-border"
          >
            <ImageWithFallback
              src={siteConfig.images.clinicInterior}
              alt="Inside Sanvi Skin Hair Laser Clinic"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
              Our Clinic
            </span>
            <h2 className="font-heading text-3xl font-semibold text-primary">
              A Healthcare Destination in {siteConfig.address.city}
            </h2>
            <p className="text-muted-text leading-relaxed">
              {siteConfig.clinicName} is located at {siteConfig.address.line1},{" "}
              {siteConfig.address.line2}, {siteConfig.address.city}. We focus on
              making skin, hair and laser consultations approachable, with an
              emphasis on patient comfort and clear communication from first
              enquiry through to your visit.
            </p>
            <p className="text-muted-text leading-relaxed">
              Our aim is simple: provide a clean, professional environment where
              patients feel informed and at ease, and make it easy to reach us
              whenever you have a question.
            </p>
            <div className="flex items-center gap-2 text-sm text-dark-text mt-1">
              <MapPin size={18} className="text-accent" />
              {siteConfig.address.full}
            </div>
            <div className="mt-2">
              <CTAButton to="/contact">Contact Our Clinic</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-soft-mint">
        <div className="container-page py-16 sm:py-24 flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary max-w-xl">
              Healthcare Philosophy
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {philosophy.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-border p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <item.icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
