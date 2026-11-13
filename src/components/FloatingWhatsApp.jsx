import { FaWhatsapp } from "react-icons/fa"
import { whatsappLink } from "../utils/links"

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 sm:bottom-8 right-5 sm:right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <FaWhatsapp size={28} className="relative" />
    </a>
  )
}
