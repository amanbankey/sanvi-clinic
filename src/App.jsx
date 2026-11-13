import { Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import MainLayout from "./layouts/MainLayout"
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Services = lazy(() => import("./pages/Services"))
const Doctors = lazy(() => import("./pages/Doctors"))
const Gallery = lazy(() => import("./pages/Gallery"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

export default function App() {
  const location = useLocation()

  return (
    <MainLayout>
      <ScrollToTopOnRoute />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </MainLayout>
  )
}
