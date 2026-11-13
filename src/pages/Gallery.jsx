import { useMemo, useState } from "react"
import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import PageHero from "../components/PageHero"
import GalleryGrid from "../components/GalleryGrid"
import { siteConfig } from "../constants/siteConfig"
import { getBreadcrumbSchema } from "../constants/structuredData"

export default function Gallery() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(siteConfig.gallery.map((item) => item.category)))
    return ["All", ...unique]
  }, [])

  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory)

  return (
    <PageTransition>
      <SEO
        title="Clinic Gallery"
        description="Browse photos of Sanvi Skin Hair Laser Clinic in Indore, including our clinic interior, reception and skin treatment information."
        path="/gallery"
        structuredData={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Take a Look"
        title="Clinic Gallery"
        description="A look inside our clinic, straight from our own photographs."
      />

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24 flex flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-dark-text border-border hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />
        </div>
      </section>
    </PageTransition>
  )
}
