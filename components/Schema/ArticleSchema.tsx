"use client"

interface ArticleSchemaProps {
    headline: string
    description: string
    author?: string
    datePublished?: string
    dateModified?: string
    image?: string
    keywords?: string[]
}

export default function ArticleSchema({
    headline,
    description,
    author = "Dr. Arti Kumari",
    datePublished,
    dateModified,
    image = "/og-image.jpg",
    keywords = []
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["Article", "MedicalWebPage"],
        "headline": headline,
        "description": description,
        "image": `https://www.fitplanindia.com${image}`,
        "author": {
            "@type": "Person",
            "name": author,
            "honorificPrefix": "Dr.",
            "jobTitle": "Ayurvedic Medical Doctor (BAMS) & Clinical Nutritionist",
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Nalanda Medical College and Hospital (NMCH)"
            },
            "url": "https://www.fitplanindia.com/about"
        },
        "publisher": {
            "@type": ["Organization", "MedicalOrganization"],
            "name": "FitPlan India",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.fitplanindia.com/logo.png"
            }
        },
        "datePublished": datePublished || new Date().toISOString().split('T')[0],
        "dateModified": dateModified || new Date().toISOString().split('T')[0],
        "keywords": keywords.join(", ")
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
