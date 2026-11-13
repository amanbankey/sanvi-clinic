import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import ImageWithFallback from "./ImageWithFallback"

export default function GalleryLightbox({ images, index, onClose, onChange }) {
  const goNext = useCallback(() => {
    onChange((index + 1) % images.length)
  }, [index, images.length, onChange])

  const goPrev = useCallback(() => {
    onChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onChange])

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") goNext()
      if (event.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [goNext, goPrev, onClose])

  if (index === null) return null
  const item = images[index]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm px-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={22} />
        </button>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-3 sm:left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-h-[80vh] max-w-3xl w-full"
        >
          <ImageWithFallback
            src={item.image}
            alt={item.alt}
            className="max-h-[80vh] w-full rounded-xl object-contain mx-auto"
          />
          <p className="text-center text-white/80 text-sm mt-4">{item.category}</p>
        </motion.div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-3 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
