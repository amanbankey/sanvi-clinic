import { siteConfig } from "./siteConfig"

export const faqItems = [
  {
    question: "Where is the clinic located?",
    answer: `${siteConfig.address.full}${
      siteConfig.address.landmark ? ` (${siteConfig.address.landmark})` : ""
    }`,
  },
  {
    question: "How can I contact the clinic?",
    answer: `You can call us at ${siteConfig.phoneDisplay} or message us on WhatsApp using the WhatsApp button on this website.`,
  },
  {
    question: "How can I enquire about an appointment?",
    answer:
      "Use the appointment enquiry form on this website, call us, or send a WhatsApp message. Our team will get back to you with availability.",
  },
  {
    question: "What are the clinic's opening hours?",
    answer:
      "Opening hours have not been published here yet. Please call the clinic directly for current timings.",
  },
  {
    question: "How can I find the clinic on Google Maps?",
    answer:
      "You can use the Get Directions or Open in Google Maps buttons on our Contact page, which use our registered clinic address.",
  },
  {
    question: "Which services are available?",
    answer:
      "Please see our Services page for a general overview, and contact the clinic directly for complete, up-to-date details on available treatments.",
  },
]
