import { siteConfig } from "../constants/siteConfig"

export function telLink() {
  return `tel:${siteConfig.phoneInternational}`
}

export function whatsappLink(customMessage) {
  const message = encodeURIComponent(customMessage || siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsapp}?text=${message}`
}

export function mapsLink() {
  return siteConfig.location.mapsSearchUrl
}
