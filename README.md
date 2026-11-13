# Sanvi Skin Hair Laser Clinic — Website

A production-ready React + Vite + Tailwind CSS website for Sanvi Skin Hair Laser Clinic (Indore).

## Run it

```bash
npm install
npm run dev       # local development
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build
```

## Editable business data

Everything business-specific lives in one file:

`src/constants/siteConfig.js`

- clinicName, tagline, description
- phone, whatsapp, address
- rating
- logo and images (`src/assets/logo`, `src/assets/images`)
- heroSlides
- services
- doctors (currently empty — add entries here when you have verified doctor info)
- gallery
- navigation
- socialLinks
- seo
- appointment.serviceOptions

FAQ content: `src/constants/faqData.js`
Structured data (SEO JSON-LD): `src/constants/structuredData.js`

## Replacing images / logo

Drop new files into `src/assets/images/` or `src/assets/logo/`, then update the
corresponding import/reference in `src/constants/siteConfig.js`.

## Replacing services

Edit the `services` array in `src/constants/siteConfig.js`. Each entry needs:
`id`, `title`, `description`, `icon` (a Lucide icon name already imported in
`src/components/ServiceCard.jsx`), and `image`.

## Replacing doctors

Add objects to the `doctors` array in `src/constants/siteConfig.js`:
`{ name, specialization, photo }`. When the array is empty, the Doctors
section automatically shows a neutral "contact us" state instead of fake
profiles.

## Contact info

Phone, WhatsApp number/message, and address are all set in `siteConfig.js`
under `phone`, `whatsapp`, `whatsappMessage`, and `address`.

## SEO

Per-page metadata is set via the `<SEO />` component (`src/components/SEO.jsx`),
called from each page in `src/pages/`. Defaults live in `siteConfig.seo`.
`public/robots.txt` and `public/sitemap.xml` are ready to edit once a real
domain is assigned.

## Notes

- Doctor information, opening hours, and exact medical specialties were not
  provided, so these are left as neutral placeholders/empty states rather
  than invented — update them once confirmed.
- Service descriptions are drawn from the clinic's own marketing materials
  but are intentionally general; replace with confirmed details.
