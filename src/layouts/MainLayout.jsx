import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import ScrollToTopButton from "../components/ScrollToTopButton"

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  )
}
