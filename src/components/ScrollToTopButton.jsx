import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useScrollPosition } from "../hooks/useScrollPosition"

export default function ScrollToTopButton() {
  const visible = useScrollPosition(500)

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className="fixed bottom-5 sm:bottom-8 left-5 sm:left-8 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition-colors"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
