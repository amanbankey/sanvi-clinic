import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { fadeUp, fadeLeft, staggerContainer } from "../animations/variants"
import CTAButton from "../components/CTAButton"
import CallButton from "../components/CallButton"
import WhatsAppButton from "../components/WhatsAppButton"
import RatingStars from "../components/RatingStars"
import ImageWithFallback from "../components/ImageWithFallback"

export default function Hero() {
  const slides = siteConfig.heroSlides
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const hasCarousel = slides.length > 1

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (!hasCarousel || paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [hasCarousel, paused, next])

  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-light-teal/40 blur-3xl" />
      <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-soft-mint blur-3xl" />

      <div className="container-page relative py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <motion.span
            variants={fadeUp}
            className="w-fit rounded-full bg-soft-mint px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-secondary"
          >
            Skin, Hair &amp; Laser Clinic in Indore
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-primary"
          >
            Your Health.
            <br />
            Our Priority.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-medium text-secondary"
          >
            Professional Healthcare &amp; Patient-Centered Care in Indore.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base text-muted-text leading-relaxed max-w-lg"
          >
            A welcoming healthcare environment focused on providing patients with
            accessible information, convenient consultation enquiries, and a
            comfortable clinic experience.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
            <CTAButton to="/contact" fullWidthMobile>
              Book an Appointment
            </CTAButton>
            <CallButton>Call Our Clinic</CallButton>
            <WhatsAppButton />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mt-2 text-sm text-dark-text"
          >
            <RatingStars />
            <span className="font-semibold">{siteConfig.rating.value}/5</span>
            <span className="text-muted-text">on Google</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="relative order-1 lg:order-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={slides[index].image}
                  alt={slides[index].alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {hasCarousel && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => setIndex(slideIndex)}
                      aria-label={`Go to slide ${slideIndex + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        slideIndex === index ? "w-6 bg-white" : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-border px-5 py-4 flex items-center gap-3">
            <RatingStars size={16} />
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-semibold text-primary text-sm">
                {siteConfig.rating.value} / {siteConfig.rating.outOf}
              </span>
              <span className="text-xs text-muted-text">Google Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
