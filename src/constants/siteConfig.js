import logo from "../assets/logo/sanvi-logo.png"
import clinicExterior from "../assets/images/clinic-exterior.jpg"
import clinicInterior from "../assets/images/clinic-interior-desk.jpg"
import certificates from "../assets/images/certificates.jpg"
import offerBanner from "../assets/images/offer-banner.png"
import skinTreatmentPromo from "../assets/images/skin-treatment-promo.jpg"
import microneedlingPromo from "../assets/images/microneedling-promo.png"
import beforeAfterNeck from "../assets/images/before-after-neck.png"
import skinTreatmentsList from "../assets/images/skin-treatments-list.jpg"
import neckTreatmentPromo from "../assets/images/neck-treatment-promo.jpg"

export const siteConfig = {
  clinicName: "Sanvi Skin Hair Laser Clinic",
  clinicShortName: "Sanvi Clinic",
  clinicTagline: "Skin. Hair. Laser.",
  clinicDescription:
    "A modern skin, hair and laser clinic in Indore offering advanced, patient-focused dermatology and aesthetic consultations in a clean, comfortable environment.",
  clinicType: "Skin, Hair & Laser Clinic",
  phone: "09834826869",
  phoneDisplay: "+91 98348 26869",
  phoneInternational: "+919834826869",
  whatsapp: "919834826869",
  whatsappMessage:
    "Hello, I would like to enquire about an appointment at Sanvi Skin Hair Laser Clinic. Please share the available consultation details.",
  address: {
    line1: "183, Mechanic Nagar",
    line2: "New Anjani Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452011",
    country: "India",
    full: "183, Mechanic Nagar, New Anjani Nagar, Indore, Madhya Pradesh - 452011, India",
    landmark: "Above Dr. Pawar Clinic, Near Ganesh Garments",
  },
  rating: {
    value: 4.9,
    outOf: 5,
    source: "Google",
  },
  location: {
    city: "Indore",
    state: "Madhya Pradesh",
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=183%2C%20Mechanic%20Nagar%2C%20New%20Anjani%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452011",
  },
  logo,
  images: {
    clinicExterior,
    clinicInterior,
    certificates,
    offerBanner,
    skinTreatmentPromo,
    microneedlingPromo,
    beforeAfterNeck,
    skinTreatmentsList,
    neckTreatmentPromo,
  },
  heroSlides: [
    {
      image: clinicInterior,
      alt: "Sanvi Skin Hair Laser Clinic consultation room",
    },
    {
      image: clinicExterior,
      alt: "Sanvi Skin Hair Laser Clinic entrance in Mechanic Nagar, Indore",
    },
  ],
  services: [
    {
      id: "hydra-therapy",
      title: "Hydra Therapy",
      description:
        "A gentle deep-cleansing and hydration facial treatment designed for a refreshed, healthy-looking complexion.",
      icon: "Droplets",
      image: skinTreatmentsList,
    },
    {
      id: "meso-therapy",
      title: "Meso Therapy",
      description:
        "A skin consultation option that patients can discuss with our team to understand suitability and expected process.",
      icon: "Syringe",
      image: skinTreatmentsList,
    },
    {
      id: "prp-therapy",
      title: "PRP Therapy",
      description:
        "A consultation-based treatment option available at the clinic. Speak with our team for complete details.",
      icon: "Activity",
      image: skinTreatmentsList,
    },
    {
      id: "microneedling",
      title: "Microneedling",
      description:
        "A skin treatment approach available at the clinic, discussed and planned during an in-person consultation.",
      icon: "Sparkle",
      image: microneedlingPromo,
    },
    {
      id: "carbon-laser",
      title: "Carbon Laser",
      description:
        "A laser-based skin treatment option. Our team will explain the process and suitability during your visit.",
      icon: "Zap",
      image: skinTreatmentsList,
    },
    {
      id: "skin-rejuvenation",
      title: "Skin Rejuvenation",
      description:
        "A general consultation category for patients looking to discuss skin rejuvenation options with our clinic.",
      icon: "Sun",
      image: skinTreatmentsList,
    },
  ],
  doctors: [],
  gallery: [
    {
      id: "clinic-exterior",
      category: "Clinic Exterior",
      image: clinicExterior,
      alt: "Sanvi Skin Hair Laser Clinic entrance and signage",
    },
    {
      id: "clinic-interior",
      category: "Clinic Interior",
      image: clinicInterior,
      alt: "Consultation desk inside Sanvi Skin Hair Laser Clinic",
    },
    {
      id: "certificates",
      category: "Clinic Credentials",
      image: certificates,
      alt: "Clinic certificates and recognitions displayed at Sanvi Skin Hair Laser Clinic",
    },
    {
      id: "skin-services",
      category: "Skin Treatments",
      image: skinTreatmentsList,
      alt: "Overview of skin treatments offered at Sanvi Skin Hair Laser Clinic",
    },
    {
      id: "microneedling",
      category: "Skin Treatments",
      image: microneedlingPromo,
      alt: "Microneedling treatment information at Sanvi Skin Hair Laser Clinic",
    },
    {
      id: "pigmentation-care",
      category: "Skin Treatments",
      image: neckTreatmentPromo,
      alt: "Advanced pigmentation treatment information at Sanvi Skin Hair Laser Clinic",
    },
  ],
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Doctors", path: "/doctors" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],
  socialLinks: {
    instagram: "",
    facebook: "",
  },
  seo: {
    siteUrl: "https://www.sanviclinic.example.com",
    defaultTitle: "Sanvi Skin Hair Laser Clinic | Skin, Hair & Laser Clinic in Indore",
    defaultDescription:
      "Sanvi Skin Hair Laser Clinic in Mechanic Nagar, Indore offers skin, hair and laser consultations in a modern, patient-first clinical environment. Rated 4.9/5 on Google.",
    keywords:
      "clinic in Indore, skin hair laser clinic Indore, healthcare clinic Indore, clinic near Mechanic Nagar, clinic near New Anjani Nagar",
  },
  appointment: {
    serviceOptions: [
      "General Consultation",
      "Hydra Therapy",
      "Meso Therapy",
      "PRP Therapy",
      "Microneedling",
      "Carbon Laser",
      "Skin Rejuvenation",
      "Other / Not Sure",
    ],
  },
}
