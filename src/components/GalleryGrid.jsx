import { useState } from "react"
import { motion } from "framer-motion"
import { ZoomIn } from "lucide-react"
import { staggerContainer, fadeUp } from "../animations/variants"
import ImageWithFallback from "./ImageWithFallback"
import GalleryLightbox from "./GalleryLightbox"

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5"
      >
        {images.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            variants={fadeUp}
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-border break-inside-avoid"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <span className="flex items-center gap-2 text-white text-sm font-medium">
                <ZoomIn size={16} />
                {item.category}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <GalleryLightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  )
}
