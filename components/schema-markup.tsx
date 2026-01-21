import Script from "next/script"

interface SchemaMarkupProps {
  type: "website" | "organization" | "service" | "article"
  data?: any
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchemaData = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "FitPlan India",
          description: "Personalized weight loss plans for every health condition in India",
          url: "https://www.fitplanindia.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.fitplanindia.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: "FitPlan India",
            logo: {
              "@type": "ImageObject",
              url: "https://www.fitplanindia.com/logo.png",
            },
          },
        }

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FitPlan India",
          description:
            "Leading nutrition consultation service in India specializing in weight loss plans for various health conditions",
          url: "https://www.fitplanindia.com",
          logo: "https://www.fitplanindia.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-98765-43210",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressLocality: "Mumbai",
          },
          sameAs: [
            "https://facebook.com/fitplanindia",
            "https://instagram.com/fitplanindia",
            "https://twitter.com/fitplanindia",
          ],
        }

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Nutrition Consultation",
          description: "Personalized nutrition consultation for weight loss and health condition management",
          provider: {
            "@type": "Organization",
            name: "FitPlan India",
          },
          areaServed: "IN",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Weight Loss Plans",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PCOS Weight Loss Plan",
                  description: "Specialized diet plan for PCOS management and weight loss",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Diabetes Weight Loss Plan",
                  description: "Blood sugar friendly weight loss plan for diabetics",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Thyroid Weight Loss Plan",
                  description: "Metabolism-focused weight loss plan for thyroid conditions",
                },
              },
            ],
          },
          offers: {
            "@type": "Offer",
            price: "500",
            priceCurrency: "INR",
            description: "45-minute nutrition consultation with personalized diet plan",
          },
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data?.title || "Weight Loss Plan",
          description: data?.description || "Specialized weight loss plan for health conditions",
          author: {
            "@type": "Organization",
            name: "FitPlan India",
          },
          publisher: {
            "@type": "Organization",
            name: "FitPlan India",
            logo: {
              "@type": "ImageObject",
              url: "https://www.fitplanindia.com/logo.png",
            },
          },
          datePublished: data?.datePublished || "2024-01-01",
          dateModified: data?.dateModified || "2024-01-01",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data?.url || "https://www.fitplanindia.com",
          },
        }

      default:
        return null
    }
  }

  const schemaData = getSchemaData()

  if (!schemaData) return null

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}
