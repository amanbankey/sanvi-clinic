import { Compass } from "lucide-react"
import SEO from "../components/SEO"
import PageTransition from "../components/PageTransition"
import CTAButton from "../components/CTAButton"

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" path="/404" />
      <section className="container-page py-24 sm:py-32 flex flex-col items-center text-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-mint text-accent">
          <Compass size={28} />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
          Page Not Found
        </h1>
        <p className="text-muted-text max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back
          on track.
        </p>
        <CTAButton to="/">Back to Home</CTAButton>
      </section>
    </PageTransition>
  )
}
