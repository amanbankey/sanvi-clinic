import { Helmet } from "react-helmet-async"
import { siteConfig } from "../constants/siteConfig"

export default function SEO({ title, description, path = "/", structuredData }) {
  const fullTitle = title ? `${title} | ${siteConfig.clinicName}` : siteConfig.seo.defaultTitle
  const metaDescription = description || siteConfig.seo.defaultDescription
  const canonical = `${siteConfig.seo.siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.clinicName} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  )
}
