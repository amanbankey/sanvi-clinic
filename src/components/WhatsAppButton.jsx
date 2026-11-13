import { FaWhatsapp } from "react-icons/fa"
import { whatsappLink } from "../utils/links"

export default function WhatsAppButton({ message, className = "", children }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5a] shadow-md shadow-[#25D366]/20 ${className}`}
    >
      <FaWhatsapp size={20} />
      {children || "WhatsApp Us"}
    </a>
  )
}
